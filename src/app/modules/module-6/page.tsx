import type { Metadata } from 'next';
import fs from 'node:fs';
import path from 'node:path';
import InteractiveModuleViewer from '@/components/InteractiveModuleViewer';
import { quizData } from '@/lib/quizData';
import { modules } from '@/lib/learning-path';

const module = modules[5];
export const metadata: Metadata = { title: `${module.title} | Clinical AI Academy`, description: module.description };

const learningObjectives = (
  <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-6">
    <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">In this module</h2>
    <p className="mb-2 text-blue-700 dark:text-blue-300">Topics to explore:</p>
    <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
      <li>Define Software as a Medical Device (SaMD) and explain when an AI tool qualifies as one</li>
      <li>Describe the FDA's key regulatory pathways for AI/ML-based SaMD and the significance of Predetermined Change Control Plans</li>
      <li>Explain the EU AI Act's risk-based framework and how it interacts with the EU MDR for healthcare AI</li>
      <li>Describe the role and responsibilities of a hospital AI governance committee</li>
      <li>Identify the essential elements of a robust institutional AI policy</li>
      <li>Articulate a clinician's responsibilities within the broader regulatory and governance ecosystem</li>
    </ul>
  </div>
);

export default function ModulePage() {
  const htmlContent = fs.readFileSync(path.join(process.cwd(), 'public/content/module6_content.html'), 'utf8');
  return <InteractiveModuleViewer htmlContent={htmlContent} moduleId={module.id} moduleTitle={module.title} learningObjectives={learningObjectives} quizQuestions={quizData[module.id]?.questions || []} previousModulePath="/modules/module-5" nextModulePath="/modules/module-7" />;
}
