
'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';

// Define the structure for a single quiz question
export interface QuizOption {
  id: string;
  text: string;
}

export interface QuizQuestion {
  id: string; // Added question ID
  text: string; // Renamed from 'question'
  options: QuizOption[]; // Changed from string[]
  correctAnswerId: string; // Changed from correctAnswerIndex
  feedback: string; // Renamed from 'explanation'
}

interface QuizProps {
  questions: QuizQuestion[];
  onQuizComplete: () => void; // Callback for when the quiz is finished AND passed
}

const MIN_PASS_SCORE = 3;

const Quiz: React.FC<QuizProps> = ({ questions, onQuizComplete }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswerId, setSelectedAnswerId] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [passed, setPassed] = useState(false); // Track if the user passed

  const currentQuestion = questions[currentQuestionIndex];
  const isCorrect = selectedAnswerId === currentQuestion.correctAnswerId;

  const handleAnswerSelect = (id: string) => {
    if (!showFeedback) { // Prevent changing answer after submission
      setSelectedAnswerId(id);
    }
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswerId === null) {
      alert('Please select an answer.');
      return;
    }
    setShowFeedback(true);
    if (isCorrect) {
      setScore(prev => prev + 1);
    }
  };

  const handleNextQuestion = () => {
    const isLastQuestion = currentQuestionIndex === questions.length - 1;
    
    if (isLastQuestion) {
      // Calculate final pass status before moving to results
      const finalScore = isCorrect && !showFeedback ? score + 1 : score; // Account for score update on submit
      const didPass = finalScore >= MIN_PASS_SCORE;
      setPassed(didPass);
      setQuizFinished(true);
      if (didPass) {
        onQuizComplete(); // Call completion callback ONLY if passed
      }
    } else {
      // Move to next question
      setShowFeedback(false);
      setSelectedAnswerId(null);
      setCurrentQuestionIndex(prev => prev + 1);
    }
  };

  const handleRetry = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswerId(null);
    setShowFeedback(false);
    setScore(0);
    setQuizFinished(false);
    setPassed(false);
  };

  if (quizFinished) {
    return (
      <Card className="w-full max-w-2xl mx-auto my-8">
        <CardHeader>
          <CardTitle>Quiz Complete!</CardTitle>
          <CardDescription>
            Your Score: {score} out of {questions.length}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {passed ? (
            <p className="text-lg font-semibold text-green-600 dark:text-green-400">Congratulations! You passed the quiz.</p>
          ) : (
            <p className="text-lg font-semibold text-red-600 dark:text-red-400">You need a score of {MIN_PASS_SCORE} or more to pass. Please try again.</p>
          )}
        </CardContent>
        <CardFooter className="flex justify-end">
          {!passed && (
            <Button onClick={handleRetry} variant="outline">
              Retry Quiz
            </Button>
          )}
          {/* Add button to proceed if needed, maybe handled by parent component now */}
        </CardFooter>
      </Card>
    );
  }

  return (
    <Card className="w-full max-w-2xl mx-auto my-8">
      <CardHeader>
        <CardTitle>Quiz: Question {currentQuestionIndex + 1} of {questions.length}</CardTitle>
        {/* Ensure currentQuestion is defined before accessing text */}
        <CardDescription>{currentQuestion?.text || 'Loading question...'}</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={selectedAnswerId ?? undefined}
          onValueChange={(value) => handleAnswerSelect(value)}
          className="space-y-3"
          disabled={showFeedback}
        >
          {currentQuestion?.options.map((option) => (
            <div key={option.id} className="flex items-center space-x-3"> {/* Use option.id for key */}
              <RadioGroupItem value={option.id} id={`option-${option.id}`} /> {/* Use option.id for value and id */}
              <Label htmlFor={`option-${option.id}`} className="flex-1 cursor-pointer"> {/* Use option.id for htmlFor */}
                {option.text} {/* Render option.text */}
              </Label>
            </div>
          ))}
        </RadioGroup>

        {showFeedback && (
          <div
            className={`mt-6 p-4 rounded-md border ${isCorrect ? 'bg-green-100 border-green-300 text-green-800 dark:bg-green-900/50 dark:border-green-700 dark:text-green-200' : 'bg-red-100 border-red-300 text-red-800 dark:bg-red-900/50 dark:border-red-700 dark:text-red-200'}`}
          >
            <h4 className="font-semibold mb-2">{isCorrect ? 'Correct!' : 'Incorrect'}</h4>
            {/* Ensure currentQuestion is defined before accessing feedback */}
            <p>{currentQuestion?.feedback || ''}</p>
          </div>
        )}
      </CardContent>
      <CardFooter className="flex justify-end">
        {showFeedback ? (
          <Button onClick={handleNextQuestion}>
            {currentQuestionIndex < questions.length - 1 ? 'Next Question' : 'Finish Quiz'}
          </Button>
        ) : (
          <Button onClick={handleSubmitAnswer} disabled={selectedAnswerId === null}>
            Submit Answer
          </Button>
        )}
      </CardFooter>
    </Card>
  );
};

export default Quiz;

