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

    </div>
  );
}
