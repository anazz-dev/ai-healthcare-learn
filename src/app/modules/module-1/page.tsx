"use client";

import React, { useState, useEffect } from 'react';
import InteractiveModuleViewer from '@/components/InteractiveModuleViewer';
import { quizData } from '@/lib/quizData'; // Import quiz data

// Define Learning Objectives JSX separately
const learningObjectives = (
  <div className="bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800 p-4 rounded-lg mb-6">
    <h2 className="text-xl font-semibold mb-2 text-blue-800 dark:text-blue-200">Learning Objectives</h2>
    <p className="mb-2 text-blue-700 dark:text-blue-300">By the end of this module, learners will be able to:</p>
    <ul className="list-disc list-inside space-y-1 text-blue-700 dark:text-blue-300">
      <li>Describe how AI learns from data rather than rules or reasoning</li>
      <li>Identify key differences between traditional software and machine learning</li>
      <li>Recognise common misunderstandings about AI performance and reliability</li>
      <li>Explain why clinical data quality critically affects AI safety</li>
      <li>Articulate the clinician’s role in supervising and questioning AI output</li>
    </ul>
  </div>
);

const Module1Page = () => {
  const [moduleContent, setModuleContent] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch the HTML content for Module 1 from the public directory
    fetch("/content/module1_content.html") // Path relative to the public directory
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
        console.error("Error fetching module content:", error);
        setModuleContent("<p>Error loading module content. Please try again later.</p>");
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading module content...</div>; // Or a loading spinner
  }

  return (
    <InteractiveModuleViewer
      htmlContent={moduleContent} // Pass HTML content
      moduleId="module-1"
      moduleTitle="What AI Really Is (And Isn’t): A Clinician’s First Look"
      learningObjectives={learningObjectives}
      quizQuestions={quizData["module-1"]?.questions || []} // Pass the imported quiz data
      quizTitle={quizData["module-1"]?.title || "Module 1 Quiz"}
      nextModulePath="/modules/module-2"
      // No previousModulePath for the first module
    />
  );
};

export default Module1Page;

