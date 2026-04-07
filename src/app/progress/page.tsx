'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import UnifiedEmailForm from '@/components/UnifiedEmailForm';

const ALL_MODULES = [
  { id: 'module-1', title: "What AI Really Is (And Isn't): A Clinician's First Look" },
  { id: 'module-2', title: 'How AI Learns (and Why It Sometimes Gets It Wrong)' },
  { id: 'module-3', title: 'How AI Performs in Clinical Practice: Real Cases, Real Limits' },
  { id: 'module-4', title: 'Trustworthy AI: Ethics, Risk, and Regulation in Clinical Practice' },
  { id: 'module-5', title: 'Evaluating & Validating AI Tools in Clinical Practice' },
  { id: 'module-6', title: 'AI Governance, Regulation & Institutional Policy' },
  { id: 'module-7', title: 'Working with Large Language Models (LLMs) in Clinical Practice' },
  { id: 'module-8', title: 'AI Implementation & Change Management in Healthcare' },
];

const TOTAL_MODULES = ALL_MODULES.length;

export default function ProgressPage() {
  const [completionStatus, setCompletionStatus] = useState<Record<string, boolean>>({});
  const [showCertForm, setShowCertForm] = useState(false);
  const [certOpened, setCertOpened] = useState(false);

  useEffect(() => {
    const storedProgress = localStorage.getItem('aiHealthcareProgress');
    if (storedProgress) {
      try {
        const progress = JSON.parse(storedProgress);
        if (typeof progress === 'object' && progress !== null) {
          setCompletionStatus(progress);
        }
      } catch (error) {
        console.error('Failed to parse progress from localStorage:', error);
      }
    }
  }, []);

  const completedCount = ALL_MODULES.filter(m => completionStatus[m.id]).length;
  const overallProgress = Math.round((completedCount / TOTAL_MODULES) * 100);
  const allModulesComplete = completedCount === TOTAL_MODULES;

  const handleCertificateSubmit = (data: { name: string; email: string }) => {
    const slug = encodeURIComponent(
      data.name.trim().toLowerCase().replace(/\s+/g, '-')
    );
    window.open(`/certificate/${slug}`, '_blank', 'noopener,noreferrer');
    setCertOpened(true);
    setShowCertForm(false);
  };

  return (
    <div>
      <h1>Your Learning Progress</h1>
      <p>Track your journey in Clinical AI literacy</p>

      {/* ── Progress overview ── */}
      <Card>
        <CardHeader>
          <CardTitle>Course Progress</CardTitle>
          <CardDescription>
            Your progress through the AI Literacy for Healthcare Professionals course
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span>Overall Progress</span>
            <span>{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} />

          <div style={{ marginTop: '1.5rem' }}>
            <h3>Modules ({completedCount}/{TOTAL_MODULES} completed)</h3>
            {ALL_MODULES.map((module, index) => (
              <div
                key={module.id}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '0.5rem 0',
                  borderBottom: '1px solid #eee',
                }}
              >
                <Link
                  href={`/modules/${module.id}`}
                  style={{ color: '#2563eb', textDecoration: 'underline' }}
                >
                  {index + 1}. {module.title}
                </Link>
                {completionStatus[module.id] ? (
                  <Badge>Complete</Badge>
                ) : (
                  <Badge variant="outline">Incomplete</Badge>
                )}
              </div>
            ))}
          </div>

          <div style={{ marginTop: '1.5rem' }}>
            <h3>Assessments</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span>Module Quizzes ({completedCount}/{TOTAL_MODULES})</span>
              <span>{overallProgress}%</span>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* ── Certificate section ── */}
      <Card style={{ marginTop: '2rem' }}>
        <CardHeader>
          <CardTitle>Professional Certificate</CardTitle>
          <CardDescription>
            {allModulesComplete
              ? 'Your certificate is ready — enter your details below to generate it'
              : `Complete all ${TOTAL_MODULES} modules to unlock your certificate`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* Modules not yet complete */}
          {!allModulesComplete && (
            <div>
              <p>
                You have completed {completedCount} of {TOTAL_MODULES} modules.
                Finish the remaining{' '}
                {TOTAL_MODULES - completedCount} module
                {TOTAL_MODULES - completedCount !== 1 ? 's' : ''} to unlock your certificate.
              </p>
              <Link href="/modules">
                <Button variant="outline">
                  Continue Learning <ArrowRight style={{ marginLeft: '0.5rem' }} />
                </Button>
              </Link>
            </div>
          )}

          {/* All complete — initial CTA */}
          {allModulesComplete && !showCertForm && !certOpened && (
            <div>
              <h3>Congratulations — all 8 modules complete!</h3>
              <p>
                Generate your free verified certificate of completion. Enter your
                details and it will open instantly in a new tab.
              </p>
              <Button
                onClick={() => setShowCertForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Get My Certificate
              </Button>
            </div>
          )}

          {/* Email / consent form */}
          {allModulesComplete && showCertForm && (
            <div style={{ maxWidth: '480px' }}>
              <p style={{ fontSize: '0.9rem', color: '#555', marginBottom: '1.25rem' }}>
                Your name will appear on the certificate exactly as you enter it.
                We'll also add you to our mailing list — you can opt out at any time.
              </p>

              <UnifiedEmailForm
                purpose="certificate"
                onSubmit={handleCertificateSubmit}
                title="Generate Your Certificate"
                description="Enter your details below. Your certificate will open in a new tab immediately after submission."
                buttonText="Generate My Certificate"
              />

              <button
                type="button"
                onClick={() => setShowCertForm(false)}
                style={{
                  marginTop: '0.75rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  color: '#666',
                  textDecoration: 'underline',
                  fontSize: '0.85rem',
                }}
              >
                Cancel
              </button>
            </div>
          )}

          {/* Certificate already opened */}
          {certOpened && (
            <div>
              <p>
                <strong>Your certificate has opened in a new tab.</strong>{' '}
                If a pop-up blocker prevented it, allow pop-ups for this site and{' '}
                <button
                  onClick={() => { setCertOpened(false); setShowCertForm(true); }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#2563eb', textDecoration: 'underline', padding: 0 }}
                >
                  try again
                </button>
                .
              </p>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
