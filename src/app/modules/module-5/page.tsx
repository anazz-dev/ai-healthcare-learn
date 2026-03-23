"use client";

import React, { useState, useEffect } from 'react';
import InteractiveModuleViewer from '@/components/InteractiveModuleViewer';
import { quizData } from '@/lib/quizData';

const learningObjectives = (
  <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-6">
    <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">Learning Objectives</h2>
    <p className="mb-2 text-blue-700 dark:text-blue-300">By the end of this module, learners will be able to:</p>
    <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
       <li>Interpret key AI performance metrics (sensitivity, specificity, AUROC, PPV/NPV) in a clinical context</li>
      <li>Distinguish between internal and external validation and explain why external validation matters</li>
      <li>Identify common red flags in vendor claims and AI research papers</li>
      <li>Describe the FDA clearance pathways (510(k), De Novo, PMA) and what CE marking means under the EU MDR</li>
      <li>Apply a structured set of questions before adopting any AI tool in clinical practice</li>
    </ul>
  </div>
);

const Module5Page = () => {
  const [moduleContent, setModuleContent] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetch('/content/module5_content.html')
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

  const module5Quiz = quizData['module-5']?.questions || [];

  if (isLoading) {
    return <p>Loading module content...</p>;
  }

  return (
    <InteractiveModuleViewer
      moduleId="module-5"
      moduleTitle="Module 5: Evaluating & Validating AI Tools in Clinical Practice"
      htmlContent={moduleContent}
      learningObjectives={learningObjectives}
      quizQuestions={module5Quiz}
      nextModulePath="/modules/module-6"
      previousModulePath="/modules/module-4"
    />
  );
};

export default Module5Page;
