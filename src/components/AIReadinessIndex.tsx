'use client';

import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { CheckCircle, Clock, Award, ArrowRight } from 'lucide-react';
import UnifiedEmailForm from '@/components/UnifiedEmailForm';
import { professionalEmailService } from '@/lib/professionalEmailService';

interface Question {
  id: string;
  text: string;
  options: {
    value: string;
    text: string;
    points: number;
  }[];
  category: 'knowledge' | 'application' | 'implementation' | 'ethics';
}

interface AssessmentState {
  currentQuestion: number;
  answers: Record<string, string>;
  showEmailForm: boolean;
  showResults: boolean;
  score: number;
  category: string;
  recommendations: string[];
}

// Reduced to 10 questions with balanced answer lengths and shuffled correct answers
const questions: Question[] = [
  {
    id: 'ai-definition',
    text: 'What is the primary advantage of AI over traditional clinical decision support tools?',
    category: 'knowledge',
    options: [
      { value: 'a', text: 'Can learn and adapt from new data', points: 5 },
      { value: 'b', text: 'Requires more computational power', points: 1 },
      { value: 'c', text: 'Always provides accurate results', points: 0 },
      { value: 'd', text: 'Works only with imaging data', points: 0 }
    ]
  },
  {
    id: 'ml-training',
    text: 'What is most critical for training effective healthcare AI models?',
    category: 'knowledge',
    options: [
      { value: 'a', text: 'Expensive computing hardware', points: 1 },
      { value: 'b', text: 'High-quality representative data', points: 5 },
      { value: 'c', text: 'The newest AI algorithms', points: 2 },
      { value: 'd', text: 'Hospital administration approval', points: 1 }
    ]
  },
  {
    id: 'ai-limitations',
    text: 'Which is a key limitation of current healthcare AI systems?',
    category: 'knowledge',
    options: [
      { value: 'a', text: 'Too slow for clinical use', points: 1 },
      { value: 'b', text: 'Cannot process medical images', points: 0 },
      { value: 'c', text: 'May not generalize across populations', points: 5 },
      { value: 'd', text: 'Too expensive for healthcare', points: 1 }
    ]
  },
  {
    id: 'regulatory-compliance',
    text: 'Under the EU AI Act, healthcare AI applications are typically:',
    category: 'knowledge',
    options: [
      { value: 'a', text: 'Low-risk with minimal oversight', points: 1 },
      { value: 'b', text: 'Prohibited from clinical use', points: 0 },
      { value: 'c', text: 'Unregulated with no requirements', points: 0 },
      { value: 'd', text: 'High-risk requiring human oversight', points: 5 }
    ]
  },
  {
    id: 'diagnostic-imaging',
    text: 'What is the best approach for using AI in diagnostic imaging?',
    category: 'application',
    options: [
      { value: 'a', text: 'Use as decision support tool', points: 5 },
      { value: 'b', text: 'Replace radiologist interpretation', points: 0 },
      { value: 'c', text: 'Only for non-critical cases', points: 2 },
      { value: 'd', text: 'Avoid AI in imaging entirely', points: 0 }
    ]
  },
  {
    id: 'workflow-integration',
    text: 'How should AI tools be integrated into clinical workflows?',
    category: 'application',
    options: [
      { value: 'a', text: 'Replace existing protocols completely', points: 1 },
      { value: 'b', text: 'Integrate gradually with monitoring', points: 5 },
      { value: 'c', text: 'Use only for training purposes', points: 2 },
      { value: 'd', text: 'Implement immediately without changes', points: 0 }
    ]
  },
  {
    id: 'patient-monitoring',
    text: 'In patient monitoring, AI is most valuable for:',
    category: 'application',
    options: [
      { value: 'a', text: 'Replacing nursing staff entirely', points: 0 },
      { value: 'b', text: 'Reducing monitor requirements', points: 1 },
      { value: 'c', text: 'Early detection of deterioration', points: 5 },
      { value: 'd', text: 'Eliminating all false alarms', points: 2 }
    ]
  },
  {
    id: 'data-governance',
    text: 'What is the first step for AI implementation in healthcare?',
    category: 'implementation',
    options: [
      { value: 'a', text: 'Purchase advanced AI software', points: 1 },
      { value: 'b', text: 'Train all staff on AI', points: 3 },
      { value: 'c', text: 'Hire AI specialists immediately', points: 2 },
      { value: 'd', text: 'Establish data governance processes', points: 5 }
    ]
  },
  {
    id: 'staff-training',
    text: 'Effective AI training for healthcare staff should focus on:',
    category: 'implementation',
    options: [
      { value: 'a', text: 'AI capabilities and limitations', points: 5 },
      { value: 'b', text: 'Technical programming skills', points: 1 },
      { value: 'c', text: 'Training only IT staff', points: 0 },
      { value: 'd', text: 'Memorizing AI algorithms', points: 0 }
    ]
  },
  {
    id: 'bias-detection',
    text: 'How should healthcare professionals address AI bias?',
    category: 'ethics',
    options: [
      { value: 'a', text: 'Ignore bias in approved systems', points: 0 },
      { value: 'b', text: 'Monitor performance across populations', points: 5 },
      { value: 'c', text: 'Only use AI for certain groups', points: 1 },
      { value: 'd', text: 'Rely on vendor bias testing', points: 2 }
    ]
  }
];

const getScoreCategory = (score: number): { category: string; color: string } => {
  if (score >= 40) return { category: 'AI Proficient', color: 'text-green-600' };
  if (score >= 30) return { category: 'AI Competent', color: 'text-blue-600' };
  if (score >= 20) return { category: 'AI Developing', color: 'text-yellow-600' };
  return { category: 'AI Beginner', color: 'text-red-600' };
};

const getRecommendations = (score: number, answers: Record<string, string>): string[] => {
  const recommendations: string[] = [];
  
  if (score >= 40) {
    recommendations.push("Excellent! You have strong AI literacy. Consider advanced courses in AI implementation.");
    recommendations.push("Share your knowledge by mentoring colleagues in AI adoption.");
    recommendations.push("Stay updated with latest AI regulations and best practices.");
  } else if (score >= 30) {
    recommendations.push("Good foundation! Focus on practical AI implementation strategies.");
    recommendations.push("Deepen your understanding of AI ethics and bias detection.");
    recommendations.push("Practice with AI tools in your clinical specialty.");
  } else if (score >= 20) {
    recommendations.push("Solid start! Continue building your AI knowledge base.");
    recommendations.push("Focus on understanding AI limitations and appropriate use cases.");
    recommendations.push("Take our comprehensive AI Literacy Course for structured learning.");
  } else {
    recommendations.push("Great first step! Start with our foundational AI Literacy Course.");
    recommendations.push("Focus on basic AI concepts and healthcare applications.");
    recommendations.push("Join our community for ongoing support and learning resources.");
  }
  
  return recommendations;
};

export default function AIReadinessIndex() {
  const [state, setState] = useState<AssessmentState>({
    currentQuestion: 0,
    answers: {},
    showEmailForm: false,
    showResults: false,
    score: 0,
    category: '',
    recommendations: []
  });

  const handleAnswer = (questionId: string, answer: string) => {
    setState(prev => ({
      ...prev,
      answers: { ...prev.answers, [questionId]: answer }
    }));
  };

  const nextQuestion = () => {
    if (state.currentQuestion < questions.length - 1) {
      setState(prev => ({ ...prev, currentQuestion: prev.currentQuestion + 1 }));
    } else {
      calculateScore();
    }
  };

  const calculateScore = () => {
    let totalScore = 0;
    
    questions.forEach(question => {
      const answer = state.answers[question.id];
      if (answer) {
        const selectedOption = question.options.find(opt => opt.value === answer);
        if (selectedOption) {
          totalScore += selectedOption.points;
        }
      }
    });

    const { category } = getScoreCategory(totalScore);
    const recommendations = getRecommendations(totalScore, state.answers);

    setState(prev => ({
      ...prev,
      score: totalScore,
      category,
      recommendations,
      showEmailForm: true
    }));
  };

  const handleEmailSubmit = async (data: any) => {
    try {
      await professionalEmailService.submitEmail({
        email: data.email,
        name: data.name,
        purpose: 'skills_check_results',
        metadata: {
          score: state.score,
          category: state.category,
          assessmentType: 'Clinical AI Skills Check',
          completionDate: new Date().toISOString()
        }
      });
      
      setState(prev => ({ ...prev, showResults: true, showEmailForm: false }));
    } catch (error) {
      console.error('Error submitting assessment:', error);
      // Still show results even if email fails
      setState(prev => ({ ...prev, showResults: true, showEmailForm: false }));
    }
  };

  const currentQuestion = questions[state.currentQuestion];
  const progress = ((state.currentQuestion + 1) / questions.length) * 100;
  const currentAnswer = state.answers[currentQuestion?.id];

  if (state.showEmailForm) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-2xl text-green-600">Assessment Complete!</CardTitle>
            <CardDescription>
              Enter your details to receive your personalized AI literacy results and recommendations
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-6">
              <div className="text-lg text-gray-600 mb-4">
                🎯 Your assessment has been completed successfully!
              </div>
              <p className="text-gray-600">
                Get your personalized score, category, and expert recommendations by entering your details below.
              </p>
            </div>
            
            <UnifiedEmailForm
              purpose="skills_check_results"
              onSubmit={handleEmailSubmit}
              showExtendedFields={true}
              title="Get Your AI Skills Results"
              description="Enter your details to receive your personalized score and recommendations"
              buttonText="Get My Results"
            />
          </CardContent>
        </Card>
      </div>
    );
  }

  if (state.showResults) {
    const { color } = getScoreCategory(state.score);
    
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card>
          <CardHeader className="text-center">
            <CardTitle className="text-3xl text-green-600 mb-4">
              <Award className="w-8 h-8 mx-auto mb-2" />
              Your AI Literacy Results
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-center mb-8">
              <div className={`text-5xl font-bold ${color} mb-2`}>{state.score}/50</div>
              <div className={`text-2xl font-semibold ${color} mb-4`}>{state.category}</div>
              <div className="text-lg text-gray-600">
                You scored {Math.round((state.score / 50) * 100)}% on the Clinical AI Skills Check
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-3">Personalized Recommendations</h3>
                <ul className="space-y-2">
                  {state.recommendations.map((rec, index) => (
                    <li key={index} className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Next Steps</h4>
                <p className="text-blue-800 mb-4">
                  Continue your AI learning journey with our comprehensive resources.
                </p>
                <Button className="w-full" onClick={() => window.location.href = '/modules'}>
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Start Free AI Literacy Course
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl text-center">Clinical AI Skills Check</CardTitle>
          <CardDescription className="text-center">
            Assess your AI knowledge and skills for clinical practice
          </CardDescription>
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>Question {state.currentQuestion + 1} of {questions.length}</span>
              <span>{Math.round(progress)}% Complete</span>
            </div>
            <Progress value={progress} className="w-full" />
          </div>
        </CardHeader>
        
        <CardContent>
          {currentQuestion && (
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-medium mb-4">{currentQuestion.text}</h3>
                <div className="space-y-3">
                  {currentQuestion.options.map((option) => (
                    <label
                      key={option.value}
                      className={`block p-4 border rounded-lg cursor-pointer transition-colors ${
                        currentAnswer === option.value
                          ? 'border-blue-500 bg-blue-50'
                          : 'border-gray-200 hover:border-gray-300'
                      }`}
                    >
                      <input
                        type="radio"
                        name={currentQuestion.id}
                        value={option.value}
                        checked={currentAnswer === option.value}
                        onChange={(e) => handleAnswer(currentQuestion.id, e.target.value)}
                        className="sr-only"
                      />
                      <span className="text-gray-900">{option.text}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex justify-between">
                <Button
                  variant="outline"
                  onClick={() => setState(prev => ({ ...prev, currentQuestion: Math.max(0, prev.currentQuestion - 1) }))}
                  disabled={state.currentQuestion === 0}
                >
                  Previous
                </Button>
                <Button
                  onClick={nextQuestion}
                  disabled={!currentAnswer}
                  className="min-w-[100px]"
                >
                  {state.currentQuestion === questions.length - 1 ? 'Complete' : 'Next'}
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

