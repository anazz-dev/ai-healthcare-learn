import type { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import InteractiveModuleViewer from '@/components/InteractiveModuleViewer';
import { quizData } from '@/lib/quizData';
import { modules } from '@/lib/learning-path';

const module = modules[0];
export const metadata: Metadata = { title: `${module.title} | Clinical AI Academy`, description: module.description };

const learningObjectives = (
  <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-6">
    <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">In this module</h2>
    <p className="mb-2 text-blue-700 dark:text-blue-300">Topics to explore:</p>
    <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
      <li>Describe how AI learns from data rather than rules or reasoning</li>
      <li>Identify key differences between traditional software and machine learning</li>
      <li>Recognise common misunderstandings about AI performance and reliability</li>
      <li>Explain why clinical data quality critically affects AI safety</li>
      <li>Articulate the clinician’s role in supervising and questioning AI output</li>
    </ul>
  </div>
);

export default function ModulePage() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'public/content/module1_content.html'), 'utf8');
  return <InteractiveModuleViewer htmlContent={htmlContent} moduleId={module.id} moduleTitle={module.title} learningObjectives={learningObjectives} quizQuestions={quizData[module.id]?.questions || []} nextModulePath="/modules/module-2" />;
}
