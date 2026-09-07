import type { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import InteractiveModuleViewer from '@/components/InteractiveModuleViewer';
import { quizData } from '@/lib/quizData';
import { modules } from '@/lib/learning-path';

const module = modules[2];
export const metadata: Metadata = { title: `${module.title} | Clinical AI Academy`, description: module.description };

const learningObjectives = (
  <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-6">
    <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">In this module</h2>
    <p className="mb-2 text-blue-700 dark:text-blue-300">Topics to explore:</p>
    <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
      <li>Critically appraise clinical AI studies with respect to data quality, labels, and validation</li>
      <li>Explain why external validation is essential for trustworthy AI</li>
      <li>Interpret common metrics (e.g., AUROC, Dice score) and their limitations</li>
      <li>Recognise the difference between internal accuracy and real-world utility</li>
      <li>Assess when and how AI tools should support—not replace—clinical decision-making</li>
    </ul>
  </div>
);

export default function ModulePage() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'public/content/module3_content.html'), 'utf8');
  return <InteractiveModuleViewer htmlContent={htmlContent} moduleId={module.id} moduleTitle={module.title} learningObjectives={learningObjectives} quizQuestions={quizData[module.id]?.questions || []} previousModulePath="/modules/module-2" nextModulePath="/modules/module-4" />;
}
