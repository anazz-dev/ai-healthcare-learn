'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import {
  Button
} from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';

import {
  CheckCircle,
  Clock,
  Award,
  Download,
  Share2,
  Users,
  BookOpen,
  ExternalLink,
  ArrowRight
} from 'lucide-react';

import UnifiedEmailForm from '@/components/UnifiedEmailForm';

const ProgressPage = () => {
  const [showCertificateForm, setShowCertificateForm] = useState(false);
  const [certificateGenerated, setCertificateGenerated] = useState(false);
  const [userProgress, setUserProgress] = useState({
    completedModules: 4,
    totalModules: 4,
    skillsAssessmentCompleted: true,
    overallProgress: 100
  });

  const handleCertificateRequest = (data: any) => {
    generateCertificate(data.name, data.email);
    setCertificateGenerated(true);
    setShowCertificateForm(false);
  };

  const generateCertificate = (name: string, email: string) => {
    const certificateWindow = window.open('', '_blank', 'width=900,height=700,scrollbars=yes,resizable=yes');
    if (certificateWindow) {
      certificateWindow.document.write(`<html><body><h1>Certificate for ${name}</h1><p>Email: ${email}</p></body></html>`);
      certificateWindow.document.close();
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-green-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Your Learning Progress
          </h1>
          <p className="text-xl text-gray-600">
            Track your journey in Clinical AI literacy
          </p>
        </div>

        {/* Progress Overview */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-yellow-500" />
              <span>Course Progress</span>
            </CardTitle>
            <CardDescription>
              Your progress through the AI Literacy for Healthcare Professionals course
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-sm text-gray-500">{userProgress.overallProgress}%</span>
                </div>
                <Progress value={userProgress.overallProgress} className="h-3" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Completed Modules</h3>
                  {[
                    'Introduction to AI in Healthcare',
                    'AI Applications in Clinical Practice',
                    'Ethics and Safety in Medical AI',
                    'Implementation and Future Trends'
                  ].map((module, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-green-500" />
                      <span className="text-gray-700">{module}</span>
                      <Badge variant="secondary">Complete</Badge>
                    </div>
                  ))}
                </div>

                <div className="space-y-4">
                  <h3 className="font-semibold text-gray-900">Assessments</h3>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Clinical AI Skills Check</span>
                    <Badge variant="secondary">Completed</Badge>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-500" />
                    <span className="text-gray-700">Module Quizzes (4/4)</span>
                    <Badge variant="secondary">100%</Badge>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Certificate Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Award className="w-6 h-6 text-blue-500" />
              <span>Professional Certificate</span>
            </CardTitle>
            <CardDescription>
              Download your verified certificate of completion
            </CardDescription>
          </CardHeader>
          <CardContent>
            {!showCertificateForm && !certificateGenerated && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Award className="w-10 h-10 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Congratulations!
                </h3>
                <p className="text-gray-600 mb-6">
                  You've completed the course. Generate your certificate now.
                </p>
                <Button 
                  onClick={() => setShowCertificateForm(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                >
                  <Award className="w-5 h-5 mr-2" />
                  Generate Certificate
                </Button>
              </div>
            )}

            {showCertificateForm && (
              <div className="max-w-md mx-auto">
                <UnifiedEmailForm
                  purpose="certificate"
                  onSubmit={handleCertificateRequest}
                  showExtendedFields={true}
                />
              </div>
            )}

            {certificateGenerated && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Certificate Generated!
                </h3>
                <p className="text-gray-600 mb-6">
                  You can now download or share it.
                </p>
                <div className="flex justify-center space-x-4">
                  <Button className="bg-green-600 hover:bg-green-700 text-white">
                    <Download className="w-5 h-5 mr-2" />
                    Download PDF
                  </Button>
                  <Button variant="outline">
                    <Share2 className="w-5 h-5 mr-2" />
                    Share on LinkedIn
                  </Button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>

      {/* Premium Course CTA */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6">Continue Your Education</Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Advance Your Clinical AI Practice
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Explore our in-depth premium courses and elevate your medical AI expertise.
            </p>
          </div>

          <Card className="max-w-4xl mx-auto border-2 border-blue-200 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Badge className="bg-blue-100 text-blue-800">Premium Course</Badge>
                  <Badge className="bg-red-100 text-red-800">Save 40%</Badge>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  ChatGPT for Medical Doctors
                </h3>

                <p className="text-lg text-gray-600 mb-6">
                  Master the safe and effective use of ChatGPT in clinical settings. Learn patient communication, decision support, and ethical best practices in 33 focused minutes.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">33 minutes of concise content</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">300+ learners enrolled</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <BookOpen className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Hands-on medical applications</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Certificate of completion</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-8">
                  <div className="text-3xl font-bold text-blue-600">€44.90</div>
                  <div className="text-xl text-gray-500 line-through">€79.90</div>
                  <Badge className="bg-red-100 text-red-800">Save 44%</Badge>
                </div>

                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 mb-4">
                  <a href="https://www.udemy.com/course/chatgpt-in-medical-practice/?referralCode=7B978913D4F20BE53121" target="_blank" rel="noopener noreferrer">
                    Enroll on Udemy
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  30-day money-back guarantee • Lifetime access
                </p>
              </div>

              <div className="bg-blue-50 p-8 lg:p-12">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  What You'll Learn:
                </h4>
                <div className="space-y-4">
                  {[
                    ["AI in Healthcare Overview", "Foundational knowledge of ChatGPT's clinical relevance"],
                    ["Ethics and Confidentiality", "Stay compliant with privacy and professional standards"],
                    ["Clinical Decision Support", "Support diagnosis and care pathways safely"],
                    ["Effective Patient Communication", "Use AI to clarify, educate, and guide"],
                    ["Prompting Best Practices", "Optimize your inputs for real-world scenarios"]
                  ].map(([title, desc], idx) => (
                    <div key={idx} className="flex items-start space-x-3">
                      <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                      <div>
                        <div className="font-medium text-gray-900">{title}</div>
                        <div className="text-sm text-gray-600">{desc}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              <Link href="/academy">
                View All Premium Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ProgressPage;
