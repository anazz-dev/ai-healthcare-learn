"use client";

import React, { useState, useEffect } from 'react';
import InteractiveModuleViewer from '@/components/InteractiveModuleViewer';
import { quizData } from '@/lib/quizData'; // Assuming quizData holds all quizzes

// Define Learning Objectives JSX separately
const learningObjectives = (
  <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-6">
    <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">Learning Objectives</h2>
    <p className="mb-2 text-blue-700 dark:text-blue-300">By the end of this module, learners will be able to:</p>
    <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
      <li>Critically appraise clinical AI studies with respect to data quality, labels, and validation</li>
      <li>Explain why external validation is essential for trustworthy AI</li>
      <li>Interpret common metrics (e.g., AUROC, Dice score) and their limitations</li>
      <li>Recognise the difference between internal accuracy and real-world utility</li>
      <li>Assess when and how AI tools should support—not replace—clinical decision-making</li>
    </ul>
  </div>
);

const Module3Page = () => {
  const [moduleContent, setModuleContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the HTML content for Module 3 from the public directory
    fetch('/content/module3_content.html') // Path relative to the public directory
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

  // Extract quiz questions for Module 3
  const module3Quiz = quizData['module-3']?.questions || [];
  const module3Title = quizData['module-3']?.title || "Module 3 Quiz";


  if (isLoading) {
    return <div>Loading module content...</div>; // Or a loading spinner
  }

  return (
    <InteractiveModuleViewer
      moduleTitle="How AI Performs in Clinical Practice: Real Cases, Real Limits"
      htmlContent={moduleContent}
      learningObjectives={learningObjectives} // Pass learning objectives
      quizTitle={module3Title}
      quizQuestions={module3Quiz} // Pass the imported quiz data
      moduleId="module-3"
      previousModulePath="/modules/module-2"
      nextModulePath="/modules/module-4"
    />
  );
};

export default Module3Page;

