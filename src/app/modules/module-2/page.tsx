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
      <li>Explain how AI models learn patterns through training on labelled examples</li>
      <li>Define overfitting and understand why it undermines generalisation</li>
      <li>Identify warning signs that a model may have learned non-clinical shortcuts</li>
      <li>Understand the importance of diverse, high-quality data</li>
      <li>Evaluate whether an AI model is likely to work in new patient populations</li>
    </ul>
  </div>
);

const Module2Page = () => {
  const [moduleContent, setModuleContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the HTML content for Module 2 from the public directory
    fetch('/content/module2_content.html') // Path relative to the public directory
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

  // Extract quiz questions for Module 2
  const module2Quiz = quizData['module-2']?.questions || [];
  const module2Title = quizData['module-2']?.title || "Module 2 Quiz";

  if (isLoading) {
    return <div>Loading module content...</div>; // Or a loading spinner
  }

  return (
    <InteractiveModuleViewer
      moduleTitle="How AI Learns (and Why It Sometimes Gets It Wrong)"
      htmlContent={moduleContent}
      learningObjectives={learningObjectives} // Pass learning objectives
      quizTitle={module2Title}
      quizQuestions={module2Quiz} // Pass the imported quiz data
      moduleId="module-2"
      previousModulePath="/modules/module-1"
      nextModulePath="/modules/module-3"
    />
  );
};

export default Module2Page;

