'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
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
  const [showCertificateForm, setShowCertificateForm]   = useState(false);
  const [certificateGenerated, setCertificateGenerated] = useState(false);

  const [userProgress] = useState({
    completedModules: 4,
    totalModules: 4,
    skillsAssessmentCompleted: true,
    overallProgress: 100
  });

  const router = useRouter(); // (used only if you want to route internally)

  /* ───────────────────────────────────────────── */
  /* 1 ▸ handle e-mail form submit                 */
  /* ───────────────────────────────────────────── */
  const handleCertificateRequest = (data: { name: string; email: string }) => {
    generateCertificate(data.name.trim());
    setCertificateGenerated(true);
    setShowCertificateForm(false);
  };

  /* ───────────────────────────────────────────── */
  /* 2 ▸ build /certificate/<slug> URL             */
  /* ───────────────────────────────────────────── */
  const generateCertificate = (name: string) => {
    const slug = encodeURIComponent(name.toLowerCase().replace(/\s+/g, '-'));
    const url  = `/certificate/${slug}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  /* ───────────────────────────────────────────── */
  /* 3 ▸ component render                          */
  /* ───────────────────────────────────────────── */
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

        {/* ──────────────── Progress Overview ──────────────── */}
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
              {/* overall bar */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-gray-700">Overall Progress</span>
                  <span className="text-sm text-gray-500">
                    {userProgress.overallProgress}%
                  </span>
                </div>
                <Progress value={userProgress.overallProgress} className="h-3" />
              </div>

              {/* modules & assessments lists */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* completed modules */}
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

                {/* assessments */}
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

        {/* ──────────────── Certificate Section ──────────────── */}
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
            {/* initial CTA */}
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

            {/* form */}
            {showCertificateForm && (
              <div className="max-w-md mx-auto">
                <UnifiedEmailForm
                  purpose="certificate"
                  onSubmit={handleCertificateRequest}
                  showExtendedFields={true}
                />
              </div>
            )}

            {/* success message */}
            {certificateGenerated && (
              <div className="text-center py-8">
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-10 h-10 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Certificate Generated!
                </h3>
                <p className="text-gray-600 mb-6">
                  Your certificate opened in a new tab at its own shareable URL.
                  Copy that link (or use LinkedIn’s share dialog on that page).
                  If a pop-up blocker intervened, allow pop-ups for this site and try again.
                </p>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProgressPage;
