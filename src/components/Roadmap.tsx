
import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

const modules = [
  {
    id: 'module-1',
    title: "What AI Really Is (And Isn’t): A Clinician’s First Look",
    description: "Understand AI basics, ML differences, and the clinician's role.",
  },
  {
    id: 'module-2',
    title: "How AI Learns (and Why It Sometimes Gets It Wrong)",
    description: "Explore model training, overfitting, and data importance.",
  },
  {
    id: 'module-3',
    title: "How AI Performs in Clinical Practice: Real Cases, Real Limits",
    description: "Appraise clinical studies, validation, metrics, and AI's support role.",
  },
  {
    id: 'module-4',
    title: "Trustworthy AI: Ethics, Risk, and Regulation in Clinical Practice",
    description: "Learn WHO principles, bias, explainability, and ethical responsibilities.",
  },
];

const Roadmap: React.FC = () => {
  return (
    <div className="relative w-full py-8">
      {/* Connecting line - adjust styling as needed */}
      <div className="absolute left-1/2 top-0 bottom-0 w-1 transform -translate-x-1/2 bg-gradient-to-b from-blue-200 via-blue-300 to-indigo-400 rounded-full opacity-50 z-0"></div>

      <div className="relative z-10 space-y-12">
        {modules.map((module, index) => (
          <div key={module.id} className="flex items-center w-full">
            {/* Alternate sides */}
            {index % 2 === 0 ? (
              <>
                {/* Module Card (Left) */}
                <div className="w-5/12">
                  <Link href={`/modules/${module.id}`} passHref>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-gray-800 border-blue-300 dark:border-blue-700">
                      <CardHeader>
                        <CardTitle className="text-blue-700 dark:text-blue-300">{`Step ${index + 1}: ${module.title}`}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{module.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
                {/* Connector & Arrow (Center to Right) */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-100 dark:ring-blue-900"></div>
                </div>
                {/* Empty Spacer (Right) */}
                <div className="w-5/12"></div>
              </>
            ) : (
              <>
                {/* Empty Spacer (Left) */}
                <div className="w-5/12"></div>
                {/* Connector & Arrow (Center to Left) */}
                <div className="w-2/12 flex justify-center">
                  <div className="w-4 h-4 bg-blue-500 rounded-full ring-4 ring-blue-100 dark:ring-blue-900"></div>
                </div>
                {/* Module Card (Right) */}
                <div className="w-5/12">
                  <Link href={`/modules/${module.id}`} passHref>
                    <Card className="hover:shadow-lg transition-shadow cursor-pointer bg-white dark:bg-gray-800 border-indigo-300 dark:border-indigo-700">
                      <CardHeader>
                        <CardTitle className="text-indigo-700 dark:text-indigo-300">{`Step ${index + 1}: ${module.title}`}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-sm text-gray-600 dark:text-gray-400">{module.description}</p>
                      </CardContent>
                    </Card>
                  </Link>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Roadmap;

