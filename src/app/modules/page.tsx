'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Module {
  id: string;
  title: string;
  description: string;
  path: string;
}

const modules: Module[] = [
  {
    id: 'module-1',
    title: "Module 1: What AI Really Is (And Isn't): A Clinician's First Look",
    description: 'An accessible introduction to how AI differs from traditional software and why clinicians must understand its foundations and limitations.',
    path: '/modules/module-1'
  },
  {
    id: 'module-2',
    title: 'Module 2: How AI Learns (and Why It Sometimes Gets It Wrong)',
    description: 'A practical look at how machine learning models develop, where they can go astray, and how data quality shapes clinical performance.',
    path: '/modules/module-2'
  },
  {
    id: 'module-3',
    title: 'Module 3: How AI Performs in Clinical Practice: Real Cases, Real Limits',
    description: 'Evidence-based walkthroughs of landmark clinical AI studies, revealing how success depends on data, labels, validation, and context.',
    path: '/modules/module-3'
  },
  {
    id: 'module-4',
    title: 'Module 4: Trustworthy AI: Ethics, Risk, and Regulation in Clinical Practice',
    description: 'A guide to understanding ethical principles, identifying bias, and navigating the regulatory and professional responsibilities clinicians share when using AI.',
    path: '/modules/module-4'
  },
  {
    id: 'module-5',
    title: 'Module 5: Evaluating & Validating AI Tools in Clinical Practice',
    description: 'How to critically appraise AI vendor claims, interpret performance metrics, understand regulatory clearance, and ask the right questions before adopting any AI tool.',
    path: '/modules/module-5'
  },
  {
    id: 'module-6',
    title: 'Module 6: AI Governance, Regulation & Institutional Policy',
    description: 'A practical guide to the FDA SaMD framework, EU AI Act, hospital AI governance committees, audit trails, and what institutional policy must cover.',
    path: '/modules/module-6'
  },
  {
    id: 'module-7',
    title: 'Module 7: Working with Large Language Models (LLMs) in Clinical Practice',
    description: 'Safe and effective use of ChatGPT/Claude-style tools in healthcare — covering hallucinations, prompt engineering, data protection risks, and institutional governance.',
    path: '/modules/module-7'
  },
  {
    id: 'module-8',
    title: 'Module 8: AI Implementation & Change Management in Healthcare',
    description: 'How to lead or participate in an AI deployment — covering workflow redesign, stakeholder engagement, staff training, post-deployment monitoring, and when to halt a deployment.',
    path: '/modules/module-8'
  }
];

export default function ModulesPage() {
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
        console.error("Failed to parse progress from localStorage:", error);
      }
    }
  }, []);

  const completedCount = Object.values(completionStatus).filter(Boolean).length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">

      {/* Course Hero */}
      <div className="mb-10">
        <span className="inline-block bg-blue-100 text-blue-700 text-xs font-semibold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
          Online Certificate Course
        </span>
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
          AI Literacy for Healthcare Professionals
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl leading-relaxed">
          A structured, evidence-based course designed for clinicians, nurses, allied health professionals, and healthcare leaders who need to understand, evaluate, and safely work with artificial intelligence in clinical settings — no coding or technical background required.
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
        {[
          { value: '8', label: 'Modules' },
          { value: 'Regulatory', label: 'Relevant' },
          { value: 'Self-paced', label: 'Online' },
          { value: 'Certificate', label: 'On Completion' },
        ].map((stat) => (
          <div key={stat.label} className="bg-blue-50 rounded-lg p-4 text-center">
            <div className="text-xl font-bold text-blue-700">{stat.value}</div>
            <div className="text-sm text-gray-500 mt-1">{stat.label}</div>
          </div>
        ))}
      </div>

      {/* What You Will Learn */}
      <div className="bg-white border border-gray-200 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">What You Will Learn</h2>
        <div className="grid md:grid-cols-2 gap-3">
          {[
            'How AI and machine learning actually work — without the jargon',
            'How to critically evaluate AI tools, vendor claims, and research papers',
            'Key performance metrics: sensitivity, specificity, AUROC, calibration',
            'FDA, CE marking, EU AI Act, and regulatory frameworks explained',
            'How to use LLMs like ChatGPT safely in clinical practice',
            'Bias, fairness, and ethical responsibilities in clinical AI',
            'How to lead or participate in an AI implementation project',
            'How to protect patients — and yourself — when AI gets it wrong',
          ].map((point) => (
            <div key={point} className="flex items-start gap-2 text-sm text-gray-700">
              <span className="text-green-500 mt-0.5 flex-shrink-0">✓</span>
              <span>{point}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Who It's For */}
      <div className="bg-gray-50 rounded-xl p-6 mb-10">
        <h2 className="text-xl font-semibold text-gray-900 mb-3">Who This Course Is For</h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          This course is built for <strong>practising clinicians and healthcare professionals</strong> — doctors, nurses, pharmacists, allied health professionals, medical students, and healthcare managers — who encounter AI tools in their work and need a reliable framework to evaluate, question, and safely use them. No prior knowledge of AI, statistics, or programming is required.
        </p>
      </div>

      {/* Progress Bar */}
      {completedCount > 0 && (
        <div className="mb-8 bg-white border border-gray-200 rounded-xl p-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Your Progress</span>
            <span className="text-sm text-blue-600 font-semibold">{completedCount} / {modules.length} modules completed</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500"
              style={{ width: `${(completedCount / modules.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Modules Grid */}
      <h2 className="text-2xl font-bold text-gray-900 mb-5">Course Modules</h2>
      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((module) => (
          <Link
            href={module.path}
            key={module.id}
            className="block border p-6 rounded-lg shadow hover:shadow-lg transition-shadow bg-white"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-semibold text-blue-700 pr-2">{module.title}</h3>
              <span className={`text-2xl flex-shrink-0 ${completionStatus[module.id] ? 'text-green-500' : 'text-gray-300'}`}>
                {completionStatus[module.id] ? '✓' : '○'}
              </span>
            </div>
            <p className="text-gray-600 text-sm">{module.description}</p>
          </Link>
        ))}
      </div>

      {/* Bottom CTA */}
      <div className="mt-12 bg-blue-600 text-white rounded-xl p-8 text-center">
        <h2 className="text-2xl font-bold mb-2">Ready to earn your certificate?</h2>
        <p className="text-blue-100 mb-5 text-sm max-w-xl mx-auto">
          Complete all 8 modules and receive a verified Certificate of Completion in AI Literacy for Healthcare Professionals.
        </p>
        <Link
          href="/progress"
          className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg hover:bg-blue-50 transition-colors"
        >
          View My Progress
        </Link>
         <p className="text-blue-100 mb-5 text-sm max-w-xl mx-auto">
          This course is not CME/CPD accredited. 
        </p>
      </div>

    </div>
  );
}