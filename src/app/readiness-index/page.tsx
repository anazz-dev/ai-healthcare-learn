'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import AIReadinessIndex from '@/components/AIReadinessIndex';

export default function ReadinessIndexPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <section className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
         <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Clinical AI Skills Check
        </h1>
        <p className="text-xl text-blue-100 mb-8 max-w-3xl">
          Assess Your AI Knowledge and Skills for Clinical Practice
        </p>          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">10</div>
              <div className="text-sm opacity-80">Expert-Designed Questions</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">5</div>
              <div className="text-sm opacity-80">Minutes to Complete</div>
            </div>
            <div className="bg-white/10 rounded-lg p-6">
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-sm opacity-80">Personalized Results</div>
            </div>
          </div>
        </div>
      </section>

      {/* Assessment Component */}
      <section className="py-12">
        <AIReadinessIndex />
      </section>

      {/* Information Section */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Check Your AI Skills?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The EU AI Act and evolving healthcare regulations require healthcare professionals to demonstrate 
              AI literacy and competency. Our skills check helps you understand your current level.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">AI Knowledge Foundation</h3>
              <p className="text-sm text-gray-600">
                Evaluate your understanding of AI fundamentals, limitations, and regulatory requirements.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-green-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Clinical Application Readiness</h3>
              <p className="text-sm text-gray-600">
                Assess your familiarity with AI applications in diagnostics, treatment, and patient care.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-purple-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Implementation Preparedness</h3>
              <p className="text-sm text-gray-600">
                Evaluate your organization's readiness for data governance, workflow integration, and training.
              </p>
            </Card>

            <Card className="text-center p-6">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-orange-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Ethical Considerations</h3>
              <p className="text-sm text-gray-600">
                Assess your understanding of bias, privacy, liability, and transparency in AI systems.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Continue Your Clinical AI Learning Journey
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take your AI skills to the next level with our comprehensive courses and certification programs.
          </p>
          <div className="flex justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/academy">
                Explore Courses
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

