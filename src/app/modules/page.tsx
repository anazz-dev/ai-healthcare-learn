'use client'; // Needed for potential localStorage access later

import Link from 'next/link';
import { useEffect, useState } from 'react';

// Define module structure
interface Module {
  id: string;
  title: string;
  description: string;
  path: string;
}

const modules: Module[] = [
  {
    id: 'module-1',
    title: 'Module 1: What AI Really Is (And Isn’t): A Clinician’s First Look',
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
  }
];

export default function ModulesPage() {
  // State to hold completion status (will be loaded from localStorage)
  const [completionStatus, setCompletionStatus] = useState<Record<string, boolean>>({});

  useEffect(() => {
    // Load completion status from localStorage on component mount
    const storedProgress = localStorage.getItem('aiHealthcareProgress');
    if (storedProgress) {
      try {
        const progress = JSON.parse(storedProgress);
        // Basic validation: check if it's an object
        if (typeof progress === 'object' && progress !== null) {
          setCompletionStatus(progress);
        }
      } catch (error) {
        console.error("Failed to parse progress from localStorage:", error);
        // Optionally clear invalid data
        // localStorage.removeItem('aiHealthcareProgress');
      }
    }
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Course Modules</h1>
      <div className="grid md:grid-cols-2 gap-6">
        {modules.map((module) => (
          <Link href={module.path} key={module.id} className="block border p-6 rounded-lg shadow hover:shadow-lg transition-shadow bg-white">
            <div className="flex justify-between items-start mb-2">
              <h2 className="text-xl font-semibold text-blue-700">{module.title}</h2>
              <span className={`text-2xl ${completionStatus[module.id] ? 'text-green-500' : 'text-gray-300'}`}>
                {completionStatus[module.id] ? '✓' : '○'}
              </span>
            </div>
            <p className="text-gray-600">{module.description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}

