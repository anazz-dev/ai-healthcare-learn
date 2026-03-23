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
      <li>Describe the full lifecycle of an AI deployment in a healthcare setting</li>
      <li>Explain why workflow redesign is essential for successful AI implementation</li>
      <li>Identify the key stakeholder groups that must be engaged in any AI deployment</li>
      <li>Distinguish between automation bias and automation aversion, and describe how to promote calibrated trust</li>
      <li>Describe what should be monitored after an AI tool goes live, and identify signals that should trigger a formal review</li>
      <li>Articulate when and how an AI deployment should be paused or decommissioned</li>
    </ul>
  </div>
);

const Module8Page = () => {
  const [moduleContent, setModuleContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/content/module8_content.html')
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

  const module8Quiz = quizData['module-8']?.questions || [];

  if (isLoading) {
    return <p>Loading module content...</p>;
  }

  return (
    <InteractiveModuleViewer
      moduleId="module-8"
      moduleTitle="Module 8: AI Implementation & Change Management in Healthcare"
      htmlContent={moduleContent}
      learningObjectives={learningObjectives}
      quizQuestions={module8Quiz}
      previousModulePath="/modules/module-7"
    />
  );
};

export default Module8Page;
