const { test } = require('node:test');
const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const ts = require('typescript');

function loadTypeScript(relativePath) {
  const code = ts.transpileModule(fs.readFileSync(relativePath, 'utf8'), {
    compilerOptions: { module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020 },
  }).outputText;
  const module = { exports: {} };
  vm.runInThisContext(`(function(module, exports) {${code}\n})`, { filename: relativePath })(module, module.exports);
  return module.exports;
}
const { questions, questionTopics, getSuggestedAnswer, getSuggestedModules } = loadTypeScript('src/lib/knowledge-check.ts');
const { modules, stages } = loadTypeScript('src/lib/learning-path.ts');
const { splitModuleSections } = loadTypeScript('src/lib/module-sections.ts');
const { quizData } = loadTypeScript('src/lib/quizData.ts');
const allSuggested = () => Object.fromEntries(questions.map(question => [question.id, getSuggestedAnswer(question).value]));

test('each question maps to an existing open module', () => {
  assert.equal(questions.length, 10);
  assert.equal(new Set(questions.map(question => question.id)).size, 10);
  for (const question of questions) {
    assert(modules.some(module => module.id === questionTopics[question.id].moduleId));
    assert.equal(question.options.filter(option => option.points === getSuggestedAnswer(question).points).length, 1);
  }
});
test('a topic needing review points to its module, and changing the answer removes that suggestion', () => {
  const answers = allSuggested();
  answers['regulatory-compliance'] = 'unsure';
  assert.deepEqual(getSuggestedModules(answers), [{ moduleId: 'module-6', topics: ['regulation'], kind: 'review' }]);
  answers['regulatory-compliance'] = getSuggestedAnswer(questions.find(question => question.id === 'regulatory-compliance')).value;
  assert(getSuggestedModules(answers).every(suggestion => suggestion.kind === 'explore'));
});
test('suggestions prioritise topics to revisit and remain limited to three modules', () => {
  const suggestions = getSuggestedModules(Object.fromEntries(questions.map(question => [question.id, 'unsure'])));
  assert.equal(suggestions.length, 3);
  assert.equal(new Set(suggestions.map(suggestion => suggestion.moduleId)).size, 3);
  assert(suggestions.every(suggestion => suggestion.kind === 'review'));
  assert(suggestions.every(suggestion => suggestion.topics.length === 2));
});
test('matching all answers provides further reading without a competence label', () => {
  const suggestions = getSuggestedModules(allSuggested());
  assert.deepEqual(suggestions.map(suggestion => suggestion.moduleId), ['module-5', 'module-7']);
  assert(suggestions.every(suggestion => suggestion.kind === 'explore'));
});
test('all eight modules appear once in the path and retain their complete content and practice questions', () => {
  assert.equal(modules.length, 8);
  assert.deepEqual(stages.flatMap(stage => stage.moduleIds), modules.map(module => module.id));
  for (const module of modules) {
    assert(fs.existsSync(path.join('src/app', module.path, 'page.tsx')));
    const html = fs.readFileSync(`public/content/module${module.id.split('-')[1]}_content.html`, 'utf8');
    const sections = splitModuleSections(html);
    assert(sections.length > 0);
    assert.equal(sections.map(section => section.html).join(''), html);
    assert(quizData[module.id].questions.length > 0);
    for (const question of quizData[module.id].questions) assert(question.options.some(option => option.id === question.correctAnswerId));
  }
});
