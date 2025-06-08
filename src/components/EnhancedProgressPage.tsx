'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Award, Download, CheckCircle, Mail } from 'lucide-react';
import EmailCollectionForm from '@/components/EmailCollectionForm';
import { emailService } from '@/lib/emailService';

interface ProgressData {
  [moduleId: string]: boolean;
}

const totalModules = 4;

export default function EnhancedProgressPage() {
  const [progress, setProgress] = useState<ProgressData>({});
  const [completedModules, setCompletedModules] = useState<number>(0);
  const [isComplete, setIsComplete] = useState<boolean>(false);
  const [showEmailForm, setShowEmailForm] = useState<boolean>(false);
  const [certificateRequested, setCertificateRequested] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    const storedProgress = localStorage.getItem('aiHealthcareProgress');
    if (storedProgress) {
      try {
        const parsedProgress: ProgressData = JSON.parse(storedProgress);
        if (typeof parsedProgress === 'object' && parsedProgress !== null) {
          setProgress(parsedProgress);
          const count = Object.values(parsedProgress).filter(Boolean).length;
          setCompletedModules(count);
          setIsComplete(count >= totalModules);
        }
      } catch (error) {
        console.error("Failed to parse progress from localStorage:", error);
      }
    }

    // Check if certificate was already requested
    const certificateStatus = localStorage.getItem('certificateRequested');
    if (certificateStatus === 'true') {
      setCertificateRequested(true);
    }
  }, []);

  const handleRequestCertificate = () => {
    if (!isComplete) {
      alert('Please complete all modules to request your certificate.');
      return;
    }
    setShowEmailForm(true);
  };

  const handleEmailSubmit = async (emailData: any) => {
    setIsLoading(true);
    
    try {
      // Submit email form
      await emailService.submitEmailForm({
        ...emailData,
        purpose: 'certificate'
      });

      // Request certificate
      await emailService.requestCertificate(
        emailData.email, 
        emailData.name, 
        'ai-literacy-healthcare-professionals'
      );

      setCertificateRequested(true);
      setShowEmailForm(false);
      localStorage.setItem('certificateRequested', 'true');
      localStorage.setItem('certificateEmail', emailData.email);
      localStorage.setItem('certificateName', emailData.name);
    } catch (error) {
      console.error('Error requesting certificate:', error);
      alert('There was an error requesting your certificate. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const generateCertificatePreview = () => {
    const storedName = localStorage.getItem('certificateName') || 'Your Name';
    const currentDate = new Date().toLocaleDateString();
    
    return (
      <div className="bg-white border-8 border-blue-600 p-8 text-center max-w-2xl mx-auto">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">Clinical AI Academy</h1>
        <p className="text-lg mb-2">This certifies that</p>
        <p className="text-3xl font-bold text-gray-900 mb-4 border-b-2 border-gray-200 pb-2">
          {storedName}
        </p>
        <p className="text-base mb-2">successfully completed the course</p>
        <h2 className="text-xl font-bold text-blue-700 mb-4">
          AI Literacy for Healthcare Professionals
        </h2>
        <p className="text-sm text-gray-600 mb-4">
          demonstrating foundational competence in clinical applications of artificial intelligence
        </p>
        <p className="text-sm text-gray-500">Date: {currentDate}</p>
        <p className="text-xs text-gray-400 mt-4">
          Course is aligned with Continuing Professional Development (CPD) and 
          Continuing Medical Education (CME) standards.
        </p>
      </div>
    );
  };

  const progressPercentage = (completedModules / totalModules) * 100;

  if (showEmailForm) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-6">
          <Award className="w-16 h-16 text-green-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Congratulations!
          </h2>
          <p className="text-gray-600">
            You've completed all modules. Enter your details to receive your certificate.
          </p>
        </div>
        
        <EmailCollectionForm
          purpose="certificate"
          onSubmit={handleEmailSubmit}
          isLoading={isLoading}
          title="Request Your Certificate"
          description="Your AI Literacy for Healthcare Professionals certificate will be sent to your email."
        />
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-gray-900">
            Your Learning Progress
          </CardTitle>
          <CardDescription>
            Track your progress through the AI Literacy for Healthcare Professionals course
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="mb-6">
            <div className="flex justify-between items-center mb-2">
              <span className="text-sm font-medium text-gray-700">
                Course Progress
              </span>
              <span className="text-sm text-gray-500">
                {completedModules} of {totalModules} modules completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-3">
              <div 
                className="bg-blue-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
            <div className="text-center mt-2">
              <span className="text-lg font-semibold text-blue-600">
                {Math.round(progressPercentage)}% Complete
              </span>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            {[
              { id: 'module-1', title: 'Module 1: What AI Really Is', description: 'AI fundamentals for clinicians' },
              { id: 'module-2', title: 'Module 2: How AI Learns', description: 'Machine learning basics and limitations' },
              { id: 'module-3', title: 'Module 3: AI in Clinical Practice', description: 'Real cases and evidence-based applications' },
              { id: 'module-4', title: 'Module 4: Trustworthy AI', description: 'Ethics, risk, and regulation' }
            ].map((module, index) => (
              <Card key={module.id} className={`${progress[module.id] ? 'border-green-500 bg-green-50' : 'border-gray-200'}`}>
                <CardContent className="p-4">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h3 className="font-semibold text-gray-900 mb-1">
                        {module.title}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {module.description}
                      </p>
                    </div>
                    <div className="ml-4">
                      {progress[module.id] ? (
                        <CheckCircle className="w-6 h-6 text-green-600" />
                      ) : (
                        <div className="w-6 h-6 border-2 border-gray-300 rounded-full"></div>
                      )}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {isComplete && (
            <Card className="border-green-500 bg-green-50">
              <CardContent className="p-6 text-center">
                <Award className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-800 mb-2">
                  Course Complete!
                </h3>
                <p className="text-green-700 mb-4">
                  Congratulations on completing the AI Literacy for Healthcare Professionals course.
                </p>
                {!certificateRequested ? (
                  <Button 
                    onClick={handleRequestCertificate}
                    className="bg-green-600 hover:bg-green-700 text-white"
                  >
                    <Award className="w-4 h-4 mr-2" />
                    Request Certificate
                  </Button>
                ) : (
                  <div className="space-y-4">
                    <div className="flex items-center justify-center text-green-700">
                      <Mail className="w-5 h-5 mr-2" />
                      <span>Certificate sent to your email!</span>
                    </div>
                    <Button 
                      variant="outline" 
                      onClick={() => window.print()}
                      className="border-green-600 text-green-600 hover:bg-green-50"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Print Certificate Preview
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          )}

          {certificateRequested && (
            <Card className="mt-6">
              <CardHeader>
                <CardTitle className="text-lg">Certificate Preview</CardTitle>
                <CardDescription>
                  This is a preview of your certificate. The official version has been sent to your email.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {generateCertificatePreview()}
              </CardContent>
            </Card>
          )}

          {!isComplete && (
            <Card className="border-blue-500 bg-blue-50">
              <CardContent className="p-6 text-center">
                <h3 className="text-lg font-semibold text-blue-800 mb-2">
                  Continue Your Learning Journey
                </h3>
                <p className="text-blue-700 mb-4">
                  Complete {totalModules - completedModules} more module{totalModules - completedModules !== 1 ? 's' : ''} to earn your certificate.
                </p>
                <Button asChild className="bg-blue-600 hover:bg-blue-700">
                  <a href="/modules">
                    Continue Learning
                  </a>
                </Button>
              </CardContent>
            </Card>
          )}
        </CardContent>
      </Card>

      {/* Additional Resources Section */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Additional Resources</CardTitle>
          <CardDescription>
            Enhance your AI knowledge with these supplementary materials
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <Button variant="outline" asChild className="h-auto p-4">
              <a href="/readiness-index" className="text-left">
                <div>
                  <div className="font-semibold">AI Readiness Assessment</div>
                  <div className="text-sm text-gray-600">Evaluate your AI implementation readiness</div>
                </div>
              </a>
            </Button>
            <Button variant="outline" asChild className="h-auto p-4">
              <a href="/academy" className="text-left">
                <div>
                  <div className="font-semibold">Explore Premium Courses</div>
                  <div className="text-sm text-gray-600">Advanced AI training for healthcare professionals</div>
                </div>
              </a>
            </Button>
            <Button variant="outline" asChild className="h-auto p-4">
              <a href="/resources" className="text-left">
                <div>
                  <div className="font-semibold">Download Resources</div>
                  <div className="text-sm text-gray-600">Whitepapers, guides, and implementation tools</div>
                </div>
              </a>
            </Button>
            <Button variant="outline" asChild className="h-auto p-4">
              <a href="/blog" className="text-left">
                <div>
                  <div className="font-semibold">Read Latest Articles</div>
                  <div className="text-sm text-gray-600">Stay updated on AI in healthcare trends</div>
                </div>
              </a>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

