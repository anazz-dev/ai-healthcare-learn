'use client';

import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { ExternalLink } from 'lucide-react';

export default function ResourcesPage() {
  return (
    <div className="max-w-3xl mx-auto p-6">
      <Card className="p-6 text-center">
        <CardHeader>
          <CardTitle className="text-3xl font-bold">Clinical AI Academy YouTube Channel</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-lg text-gray-700 mb-4">
            Access all videos, tutorials, and educational content directly on our YouTube channel.
          </p>

          <a
            href="https://www.youtube.com/@clinicalaiacademy?sub_confirmation=1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-lg font-medium transition"
          >
            Visit Channel <ExternalLink className="w-5 h-5 ml-2" />
          </a>
        </CardContent>
      </Card>
    </div>
  );
}
