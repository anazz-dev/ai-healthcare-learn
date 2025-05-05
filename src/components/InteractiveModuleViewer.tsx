
'use client';

import React, { useState, useMemo, useEffect } from 'react';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Quiz, { QuizQuestion } from '@/components/Quiz'; // Import Quiz component and type

interface InteractiveModuleViewerProps {
  htmlContent: string;
  moduleId: string;
  nextModulePath?: string;
  previousModulePath?: string;
  moduleTitle: string;
  learningObjectives: React.ReactNode;
  quizQuestions?: QuizQuestion[];
}

const InteractiveModuleViewer: React.FC<InteractiveModuleViewerProps> = ({
  htmlContent,
  moduleId,
  nextModulePath,
  previousModulePath,
  moduleTitle,
  learningObjectives,
  quizQuestions,
}) => {
  const slides = useMemo(() => {
    // Split HTML content by H2 tags
    const sections = htmlContent.split(/<h2[^>]*>/i);
    const formattedSlides: string[] = [];

    // Handle content before the first H2
    if (sections.length > 0 && sections[0].trim().length > 0) {
        const tempDiv = document.createElement('div');
        tempDiv.innerHTML = sections[0];
        if (tempDiv.textContent?.trim()) {
            formattedSlides.push(sections[0].trim());
        }
    }

    // Add subsequent sections, prepending the H2 tag
    for (let i = 1; i < sections.length; i++) {
      const section = sections[i];
      const h2Match = htmlContent.match(/<h2[^>]*>/gi);
      if (h2Match && h2Match[i-1]) {
          const trimmedSection = section.trim();
          if (trimmedSection) {
            formattedSlides.push(`${h2Match[i-1]}${trimmedSection}`);
          }
      } else {
          const trimmedSection = section.trim();
          if (trimmedSection) {
              formattedSlides.push(`<h2></h2>${trimmedSection}`);
          }
      }
    }

    if (formattedSlides.length === 0 && htmlContent.trim()) {
      formattedSlides.push(htmlContent.trim());
    }

    return formattedSlides.filter(slide => slide.length > 0);
  }, [htmlContent]);

  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);
  const [isCompleted, setIsCompleted] = useState(false); // Track if module (quiz) is completed

  // Check initial completion status on mount
  useEffect(() => {
    try {
      const storedProgress = localStorage.getItem('aiHealthcareProgress') || '{}';
      const progressData = JSON.parse(storedProgress);
      if (progressData[moduleId]) {
        setIsCompleted(true);
      }
    } catch (error) {
      console.error("Failed to read progress from localStorage:", error);
    }
  }, [moduleId]);

  const totalSlides = slides.length;
  const hasQuiz = quizQuestions && quizQuestions.length > 0;
  const totalSteps = totalSlides + (hasQuiz ? 1 : 0);
  const currentStep = showQuiz ? totalSteps : currentSlideIndex + 1;
  const progress = totalSteps > 0 ? (currentStep / totalSteps) * 100 : 0;

  const isFirstSlide = currentSlideIndex === 0 && !showQuiz;
  const isLastSlide = currentSlideIndex === totalSlides - 1;
  const canShowQuiz = isLastSlide && hasQuiz;

  const goToNextSlide = () => {
    if (!isLastSlide) {
      setCurrentSlideIndex(prev => prev + 1);
    } else if (canShowQuiz && !showQuiz) {
      setShowQuiz(true);
    }
  };

  const goToPreviousSlide = () => {
    if (showQuiz) {
      setShowQuiz(false);
    } else if (currentSlideIndex > 0) {
      setCurrentSlideIndex(prev => prev + 1);
    }
  };

  // This function is called by the Quiz component ONLY when the quiz is PASSED
  const handleQuizPassed = () => {
    try {
      const storedProgress = localStorage.getItem('aiHealthcareProgress') || '{}';
      const progressData = JSON.parse(storedProgress);
      progressData[moduleId] = true;
      localStorage.setItem('aiHealthcareProgress', JSON.stringify(progressData));
      setIsCompleted(true); // Update state to reflect completion
      // Quiz component shows its own completion message
    } catch (error) {
      console.error("Failed to update progress in localStorage:", error);
      alert('Could not save progress.');
    }
  };

  if (totalSlides === 0) {
    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold mb-4">{moduleTitle}</h1>
            <p className="text-red-500">Error: Could not parse HTML content into slides for this module.</p>
            {previousModulePath && (
              <Link href={previousModulePath} passHref>
                <Button variant="outline" className="mt-4">← Previous Module</Button>
              </Link>
            )}
        </div>
    );
}

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">{moduleTitle}</h1>

      {isFirstSlide && learningObjectives}

      <div className="my-6">
        <Progress value={progress} className="w-full h-2" />
        <p className="text-sm text-muted-foreground mt-2 text-right">
          {showQuiz ? `Quiz` : `Slide ${currentSlideIndex + 1} of ${totalSlides}`}
          {` (Step ${currentStep} of ${totalSteps})`}
        </p>
      </div>

      {showQuiz ? (
        hasQuiz ? (
          <Quiz questions={quizQuestions} onQuizComplete={handleQuizPassed} />
        ) : (
          <p>Quiz is loading or not available for this module.</p>
        )
      ) : (
        <article
          className="prose dark:prose-invert max-w-none mb-8"
          dangerouslySetInnerHTML={{ __html: slides[currentSlideIndex] }}
        />
      )}

      {/* Completion Message - Show after quiz is passed */}
      {isCompleted && showQuiz && (
        <div className="mt-6 p-4 rounded-md border bg-green-100 border-green-300 text-green-800 dark:bg-green-900/50 dark:border-green-700 dark:text-green-200">
          <h4 className="font-semibold">Module Complete!</h4>
          <p>You have successfully passed the quiz for this module.</p>
        </div>
      )}

      <div className="mt-8 flex justify-between items-center border-t pt-6 dark:border-gray-700">
        <div>
          {(isFirstSlide && previousModulePath) ? (
            <Link href={previousModulePath} passHref>
              <Button variant="outline">← Previous Module</Button>
            </Link>
          ) : (
            <Button onClick={goToPreviousSlide} disabled={isFirstSlide} variant="outline">
              {showQuiz ? '← Back to Content' : '← Previous Slide'}
            </Button>
          )}
        </div>

        {/* Show Next Slide/Start Quiz button only when not showing quiz */}
        {!showQuiz && (
          <div className="flex items-center space-x-4">
            <Button onClick={goToNextSlide} variant="default">
              {isLastSlide && canShowQuiz ? 'Start Quiz →' : 'Next Slide →'}
            </Button>
          </div>
        )}

        {/* Show Next Module/Back to Modules buttons ONLY if module is completed (quiz passed or no quiz) */}
        {(isCompleted || !hasQuiz) && (
            <div className="flex items-center space-x-4">
                {nextModulePath ? (
                    <Link href={nextModulePath} passHref>
                        <Button variant="default">Next Module →</Button>
                    </Link>
                ) : (
                    // On the last module, link back to the main modules page or progress page
                    <Link href="/progress" passHref> 
                        <Button variant="default">View Progress</Button>
                    </Link>
                )}
            </div>
        )}
      </div>
    </div>
  );
};

export default InteractiveModuleViewer;

