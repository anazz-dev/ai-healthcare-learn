"use client";

import React, { useState, useEffect } from 'react';
import InteractiveModuleViewer from '@/components/InteractiveModuleViewer';
import { quizData } from '@/lib/quizData';

// Define Learning Objectives JSX separately
const learningObjectives = (
  <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-6">
    <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">Learning Objectives</h2>
    <p className="mb-2 text-blue-700 dark:text-blue-300">By the end of this module, learners will be able to:</p>
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


const Module6Page = () => {
  const [moduleContent, setModuleContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/content/module6_content.html')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.text();
      })
      .then(html => {
        setModuleContent(html);
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching module content:', error);
        setModuleContent('<p>Error loading module content. Please try again later.</p>');
        setIsLoading(false);
      });
  }, []);

  const module6Quiz = quizData['module-6']?.questions || [];

  if (isLoading) {
    return <p>Loading module content...</p>;
  }

  return (
    <InteractiveModuleViewer
      moduleId="module-6"
      moduleTitle="Module 6: AI Governance, Regulation & Institutional Policy"
      htmlContent={moduleContent}
      learningObjectives={learningObjectives}
      quizQuestions={module6Quiz}
      nextModulePath="/modules/module-7"
      previousModulePath="/modules/module-5"
    />
  );
};

export default Module6Page;
