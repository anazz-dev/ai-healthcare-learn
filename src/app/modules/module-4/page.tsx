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
      <li>Describe the WHO’s six ethical principles for AI in health</li>
      <li>Identify common sources of bias in training data and model behaviour</li>
      <li>Distinguish between transparent and post hoc explainable models</li>
      <li>Understand the clinician’s legal and ethical responsibilities when using AI tools</li>
      <li>Explain why ongoing oversight is critical after deployment</li>
    </ul>
  </div>
);

const Module4Page = () => {
  const [moduleContent, setModuleContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the HTML content for Module 4 from the public directory
    fetch('/content/module4_content.html') // Path relative to the public directory
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

  // Extract quiz questions for Module 4
  const module4Quiz = quizData['module-4']?.questions || [];
  const module4Title = quizData['module-4']?.title || "Module 4 Quiz";

  if (isLoading) {
    return <div>Loading module content...</div>; // Or a loading spinner
  }

  return (
    <InteractiveModuleViewer
      moduleTitle="Trustworthy AI: Ethics, Risk, and Regulation in Clinical Practice"
      htmlContent={moduleContent}
      learningObjectives={learningObjectives} // Pass learning objectives
      quizTitle={module4Title}
      quizQuestions={module4Quiz} // Pass the imported quiz data
      moduleId="module-4"
      previousModulePath="/modules/module-3"
      // No nextModulePath for the last module
    />
  );
};

export default Module4Page;

