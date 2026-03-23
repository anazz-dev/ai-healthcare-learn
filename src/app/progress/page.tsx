'use client';

import React, { useState, useEffect, Suspense } from 'react';
import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
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
import { ArrowRight } from 'lucide-react';

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

interface CertificateFormData {
  name: string;
  email: string;
}

function ProgressPageContent() {
  const searchParams = useSearchParams();
  const paymentCancelled = searchParams.get('payment') === 'cancelled';

  const [completionStatus, setCompletionStatus] = useState<Record<string, boolean>>({});
  const [formData, setFormData] = useState<CertificateFormData>({ name: '', email: '' });
  const [formError, setFormError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showForm, setShowForm] = useState(false);

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

  const handleCheckout = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError('');

    const trimmedName = formData.name.trim();
    const trimmedEmail = formData.email.trim();

    if (!trimmedName || !trimmedEmail) {
      setFormError('Please enter both your full name and email address.');
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
      setFormError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/checkout', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: trimmedName, email: trimmedEmail }),
      });

      const data = await response.json();

      if (!response.ok || !data.url) {
        setFormError(data.error || 'Failed to start payment. Please try again.');
        setIsSubmitting(false);
        return;
      }

      window.location.href = data.url;
    } catch {
      setFormError('A network error occurred. Please check your connection and try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <h1>Your Learning Progress</h1>
      <p>Track your journey in Clinical AI literacy</p>

      {paymentCancelled && (
        <div style={{ background: '#fff3cd', border: '1px solid #ffc107', padding: '1rem', borderRadius: '4px', marginBottom: '1rem' }}>
          <strong>Payment cancelled.</strong> You can try again whenever you are ready.
        </div>
      )}

      {/* ──────────────── Progress Overview ──────────────── */}
      <Card>
        <CardHeader>
          <CardTitle>Course Progress</CardTitle>
          <CardDescription>Your progress through the AI Literacy for Healthcare Professionals course</CardDescription>
        </CardHeader>
        <CardContent>
          <div>
            <span>Overall Progress</span>
            <span>{overallProgress}%</span>
          </div>
          <Progress value={overallProgress} />

          <div style={{ marginTop: '1.5rem' }}>
            <h3>Modules ({completedCount}/{TOTAL_MODULES} completed)</h3>
            {ALL_MODULES.map((module, index) => (
              <div key={module.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0.5rem 0', borderBottom: '1px solid #eee' }}>
                <span>{index + 1}. {module.title}</span>
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

      {/* ──────────────── Certificate Section ──────────────── */}
      <Card style={{ marginTop: '2rem' }}>
        <CardHeader>
          <CardTitle>Professional Certificate</CardTitle>
          <CardDescription>
            {allModulesComplete
              ? 'Complete the steps below to receive your verified certificate of completion ($49 USD)'
              : `Complete all ${TOTAL_MODULES} modules to unlock your certificate`}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {!allModulesComplete && (
            <div>
              <p>
                You have completed {completedCount} of {TOTAL_MODULES} modules.
                Finish the remaining {TOTAL_MODULES - completedCount} module{TOTAL_MODULES - completedCount !== 1 ? 's' : ''} to unlock your certificate.
              </p>
              <Link href="/modules">
                <Button variant="outline">
                  Continue Learning <ArrowRight style={{ marginLeft: '0.5rem' }} />
                </Button>
              </Link>
            </div>
          )}

          {allModulesComplete && !showForm && (
            <div>
              <h3>Congratulations — all 8 modules complete!</h3>
              <p>Receive your verified certificate of completion for just <strong>$49 USD</strong>.</p>
              <Button
                onClick={() => setShowForm(true)}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
              >
                Get My Certificate — $49
              </Button>
            </div>
          )}

          {allModulesComplete && showForm && (
            <form onSubmit={handleCheckout} style={{ maxWidth: '400px' }}>
              <h3>Enter your details</h3>
              <p style={{ fontSize: '0.9rem', color: '#666', marginBottom: '1rem' }}>
                Your name will appear on the certificate exactly as you enter it. You will be redirected to Stripe to complete the secure $49 payment.
              </p>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="cert-name" style={{ display: 'block', fontWeight: 600, marginBottom: '0.25rem' }}>
                  Full Name (as it should appear on certificate)
                </label>
                <input
                  id="cert-name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={e => setFormData(prev => ({ ...prev, name: e.target.value }))}
                  placeholder="Dr. Jane Smith"
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>
              <div style={{ marginBottom: '1rem' }}>
                <label htmlFor="cert-email" style={{ display: 'block', fontWeight: 600, marginBottom: '0.25rem' }}>
                  Email Address (for payment receipt)
                </label>
                <input
                  id="cert-email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={e => setFormData(prev => ({ ...prev, email: e.target.value }))}
                  placeholder="jane@hospital.org"
                  style={{ width: '100%', padding: '0.5rem', border: '1px solid #ccc', borderRadius: '4px' }}
                />
              </div>
              {formError && (
                <p style={{ color: 'red', marginBottom: '1rem', fontSize: '0.9rem' }}>{formError}</p>
              )}
              <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2"
                >
                  {isSubmitting ? 'Redirecting to payment…' : 'Pay $49 & Get Certificate'}
                </Button>
                <button
                  type="button"
                  onClick={() => { setShowForm(false); setFormError(''); }}
                  style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#666', textDecoration: 'underline' }}
                >
                  Cancel
                </button>
              </div>
              <p style={{ marginTop: '0.75rem', fontSize: '0.8rem', color: '#888' }}>
                🔒 Secure payment via Stripe. We do not store your card details.
              </p>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
}

export default function ProgressPage() {
  return (
    <Suspense fallback={<div style={{ padding: '2rem' }}>Loading progress...</div>}>
      <ProgressPageContent />
    </Suspense>
  );
}
