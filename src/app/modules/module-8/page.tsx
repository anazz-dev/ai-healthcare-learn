import type { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import InteractiveModuleViewer from '@/components/InteractiveModuleViewer';
import { quizData } from '@/lib/quizData';
import { modules } from '@/lib/learning-path';

const module = modules[7];
export const metadata: Metadata = { title: `${module.title} | Clinical AI Academy`, description: module.description };

const learningObjectives = (
  <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-6">
    <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">In this module</h2>
    <p className="mb-2 text-blue-700 dark:text-blue-300">Topics to explore:</p>
    <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
      <li>Describe the full lifecycle of an AI deployment in a healthcare setting</li>
      <li>Explain why workflow redesign is essential for successful AI implementation</li>
      <li>Identify the key stakeholder groups that must be engaged in any AI deployment</li>
      <li>Distinguish between automation bias and automation aversion, and describe how to promote calibrated trust</li>
      <li>Describe what should be monitored after an AI tool goes live, and identify signals that should trigger a formal review</li>
      <li>Articulate when and how an AI deployment should be paused or decommissioned</li>
    </ul>
  </div>
);

export default function ModulePage() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'public/content/module8_content.html'), 'utf8');
  return <InteractiveModuleViewer htmlContent={htmlContent} moduleId={module.id} moduleTitle={module.title} learningObjectives={learningObjectives} quizQuestions={quizData[module.id]?.questions || []} previousModulePath="/modules/module-7" />;
}
