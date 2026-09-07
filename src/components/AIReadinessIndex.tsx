'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { ArrowLeft, ArrowRight, RotateCcw, LockKeyhole } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { questions, getSuggestedAnswer, getSuggestedModules, questionTopics } from '@/lib/knowledge-check';
import { getModule } from '@/lib/learning-path';

export default function AIReadinessIndex() {
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [hasNavigated, setHasNavigated] = useState(false);
  const heading = useRef<HTMLHeadingElement>(null);
  const question = questions[current];

  useEffect(() => { if (hasNavigated) heading.current?.focus(); }, [current, showResults, hasNavigated]);

  function next() {
    if (!answers[question.id]) return;
    setHasNavigated(true);
    if (current === questions.length - 1) setShowResults(true);
    else setCurrent(index => index + 1);
  }

  function restart() {
    setAnswers({});
    setCurrent(0);
    setShowResults(false);
    setHasNavigated(true);
  }

  if (showResults) {
    const suggestions = getSuggestedModules(answers);
    const hasReviewTopics = suggestions.some(suggestion => suggestion.kind === 'review');
    return (
      <section className="check-panel" aria-labelledby="check-results-title">
        <div className="check-panel-top"><strong>Your next steps</strong><span>Knowledge check finished</span></div>
        <div className="check-body">
          <h2 id="check-results-title" className="check-results-title" ref={heading} tabIndex={-1}>A place to start learning.</h2>
          <p className="result-intro">{hasReviewTopics ? 'These modules cover questions you marked “Not sure” or answered differently from the suggested answer. Start with any one of them.' : 'Your answers matched the suggested answers on this short check. Here are two topics to explore further.'}</p>
          {suggestions.map(suggestion => { const module = getModule(suggestion.moduleId)!; return (
            <Link href={module.path} key={module.id} className="result-module">
              <span className="module-label">MODULE {module.id.split('-')[1]} · {suggestion.kind === 'review' ? 'REVISIT' : 'EXPLORE'}</span>
              <h3>{module.title.replace(/^Module \d+: /, '')}</h3>
              <p>{suggestion.kind === 'review' ? 'Topics to revisit: ' : 'Explore '}{suggestion.topics.join(', ')}.</p>
              <span className="module-action">Open module <ArrowRight size={17} aria-hidden="true" /></span>
            </Link>
          ); })}
          <p className="result-intro">This check samples a few topics. All eight modules remain open, whatever your answers. These suggestions do not establish clinical competence or readiness to use AI. <Link className="text-link" href="/privacy#educational-scope">Read the educational disclaimer.</Link></p>
          <Button asChild className="academy-button w-full"><Link href="/modules">Explore the full learning path <ArrowRight size={18} aria-hidden="true" /></Link></Button>
          <details className="answer-review"><summary>Review your answers</summary>{questions.map((item, index) => { const best = getSuggestedAnswer(item); const selected = item.options.find(option => option.value === answers[item.id]); const topic = questionTopics[item.id]; return <div className="answer-review-item" key={item.id}><p><strong>{index + 1}. {item.text}</strong></p><p>Your answer: {selected?.text || 'Not sure yet'}</p>{answers[item.id] !== best.value && <p>Suggested answer: {best.text}</p>}<p className="review-status">{answers[item.id] === best.value ? 'Matches the suggested answer.' : 'A topic to revisit.'}</p><Link className="text-link" href={`/modules/${topic.moduleId}`}>Read about {topic.topic} <ArrowRight size={16} aria-hidden="true" /></Link></div>; })}</details>
          <div className="check-actions"><Button variant="ghost" className="academy-button" onClick={restart}><RotateCcw size={16} aria-hidden="true" />Start again</Button></div>
        </div>
      </section>
    );
  }

  return (
    <section className="check-panel" aria-labelledby="check-question">
      <div className="check-panel-top"><strong>Clinical AI knowledge check</strong><span aria-live="polite">{current + 1} / {questions.length}</span></div>
      <Progress className="check-progress" value={(Object.keys(answers).length / questions.length) * 100} aria-label="Questions answered" />
      <div className="check-body">
        <h2 className="check-question" id="check-question" ref={heading} tabIndex={-1}>{question.text}</h2>
        <RadioGroup value={answers[question.id] || ''} onValueChange={answer => setAnswers(previous => ({ ...previous, [question.id]: answer }))} aria-labelledby="check-question" className="gap-3">
          {[...question.options, { value: 'unsure', text: 'Not sure yet', points: 0 }].map(option => <label key={option.value} htmlFor={`${question.id}-${option.value}`} className={`answer-option ${answers[question.id] === option.value ? 'selected' : ''} ${option.value === 'unsure' ? 'unsure' : ''}`}><RadioGroupItem value={option.value} id={`${question.id}-${option.value}`} /><span>{option.text}</span></label>)}
        </RadioGroup>
        <div className="check-actions"><Button variant="ghost" className="academy-button" onClick={() => { setCurrent(index => Math.max(0, index - 1)); setHasNavigated(true); }} disabled={current === 0}><ArrowLeft size={17} aria-hidden="true" />Back</Button><Button className="academy-button" onClick={next} disabled={!answers[question.id]}>{current === questions.length - 1 ? 'See learning suggestions' : 'Next question'}<ArrowRight size={17} aria-hidden="true" /></Button></div>
        <p className="check-footnote"><LockKeyhole size={14} aria-hidden="true" />Results appear here. No name or email needed.</p>
      </div>
    </section>
  );
}
