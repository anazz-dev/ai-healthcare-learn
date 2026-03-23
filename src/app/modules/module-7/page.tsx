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
      <li>Explain what large language models (LLMs) are and how they generate text</li>
      <li>Define hallucination in the context of LLMs and describe why it occurs</li>
      <li>Identify safe versus high-risk clinical use cases for LLMs</li>
      <li>Apply basic prompt engineering principles to get more reliable LLM outputs</li>
      <li>Describe the data protection risks of using commercial LLMs with patient information</li>
      <li>Outline the key elements an institutional LLM policy should address</li>
    </ul>
  </div>
);

const Module7Page = () => {
  const [moduleContent, setModuleContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/content/module7_content.html')
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

  const module7Quiz = quizData['module-7']?.questions || [];

  if (isLoading) {
    return <p>Loading module content...</p>;
  }

  return (
    <InteractiveModuleViewer
      moduleId="module-7"
      moduleTitle="Module 7: Working with Large Language Models (LLMs) in Clinical Practice"
      htmlContent={moduleContent}
      learningObjectives={learningObjectives}
      quizQuestions={module7Quiz}
      nextModulePath="/modules/module-8"
      previousModulePath="/modules/module-6"
    />
  );
};

export default Module7Page;
