'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import EmailCollectionForm from '@/components/EmailCollectionForm';
import { 
  Download, 
  FileText, 
  BookOpen, 
  TrendingUp, 
  Shield, 
  Users,
  ArrowRight,
  ExternalLink
} from 'lucide-react';
import UnifiedEmailForm from '@/components/UnifiedEmailForm';

interface Resource {
  id: string;
  title: string;
  description: string;
  type: 'whitepaper' | 'guide' | 'case-study' | 'template' | 'checklist';
  downloadUrl?: string;
  pages?: number;
  category: 'implementation' | 'regulation' | 'clinical' | 'technical';
  featured?: boolean;
}

const resources: Resource[] = [
  {
    id: 'eu-ai-act-healthcare-guide',
    title: 'EU AI Act Compliance Guide for Healthcare',
    description: 'Comprehensive guide to understanding and implementing EU AI Act requirements in healthcare settings.',
    type: 'guide',
    pages: 24,
    category: 'regulation',
    featured: true,
    downloadUrl: '/resources/eu-ai-act-healthcare-guide.pdf'
  },
  {
    id: 'ai-implementation-checklist',
    title: 'Clinical AI Implementation Checklist',
    description: 'Step-by-step checklist for healthcare organizations implementing AI systems.',
    type: 'checklist',
    pages: 8,
    category: 'implementation',
    featured: true,
    downloadUrl: '/resources/ai-implementation-checklist.pdf'
  },
  {
    id: 'bias-detection-healthcare-ai',
    title: 'Detecting and Mitigating Bias in Healthcare AI',
    description: 'Whitepaper on identifying, measuring, and addressing bias in clinical AI applications.',
    type: 'whitepaper',
    pages: 16,
    category: 'clinical',
    featured: true,
    downloadUrl: '/resources/bias-detection-healthcare-ai.pdf'
  },
  {
    id: 'ai-radiology-case-study',
    title: 'AI in Radiology: Implementation Case Study',
    description: 'Real-world case study of successful AI implementation in a hospital radiology department.',
    type: 'case-study',
    pages: 12,
    category: 'clinical',
    downloadUrl: '/resources/ai-radiology-case-study.pdf'
  },
  {
    id: 'data-governance-template',
    title: 'Healthcare AI Data Governance Template',
    description: 'Template for establishing data governance frameworks for AI initiatives.',
    type: 'template',
    pages: 10,
    category: 'technical',
    downloadUrl: '/resources/data-governance-template.pdf'
  },
  {
    id: 'roi-measurement-guide',
    title: 'Measuring ROI of Healthcare AI Initiatives',
    description: 'Guide to establishing KPIs and measuring return on investment for AI projects.',
    type: 'guide',
    pages: 18,
    category: 'implementation',
    downloadUrl: '/resources/roi-measurement-guide.pdf'
  }
];

const ResourceCard: React.FC<{ resource: Resource }> = ({ resource }) => {
  const getTypeIcon = () => {
    switch (resource.type) {
      case 'whitepaper': return <FileText className="w-5 h-5" />;
      case 'guide': return <BookOpen className="w-5 h-5" />;
      case 'case-study': return <TrendingUp className="w-5 h-5" />;
      case 'template': return <Download className="w-5 h-5" />;
      case 'checklist': return <Shield className="w-5 h-5" />;
      default: return <FileText className="w-5 h-5" />;
    }
  };

  const getTypeColor = () => {
    switch (resource.type) {
      case 'whitepaper': return 'bg-blue-100 text-blue-800';
      case 'guide': return 'bg-green-100 text-green-800';
      case 'case-study': return 'bg-purple-100 text-purple-800';
      case 'template': return 'bg-orange-100 text-orange-800';
      case 'checklist': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = () => {
    switch (resource.category) {
      case 'implementation': return 'bg-blue-50 text-blue-700';
      case 'regulation': return 'bg-red-50 text-red-700';
      case 'clinical': return 'bg-green-50 text-green-700';
      case 'technical': return 'bg-purple-50 text-purple-700';
      default: return 'bg-gray-50 text-gray-700';
    }
  };

  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      resource.featured ? 'border-blue-500 shadow-md' : 'border-gray-200'
    }`}>
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2">
            <Badge className={getTypeColor()}>
              <div className="flex items-center space-x-1">
                {getTypeIcon()}
                <span className="capitalize">{resource.type.replace('-', ' ')}</span>
              </div>
            </Badge>
            {resource.featured && (
              <Badge className="bg-yellow-100 text-yellow-800">Featured</Badge>
            )}
          </div>
          {resource.pages && (
            <span className="text-sm text-gray-500">{resource.pages} pages</span>
          )}
        </div>
        
        <CardTitle className="text-lg font-bold text-gray-900 mb-2">
          {resource.title}
        </CardTitle>
        
        <CardDescription className="text-gray-600">
          {resource.description}
        </CardDescription>

        <div className="mt-3">
          <Badge variant="secondary" className={getCategoryColor()}>
            {resource.category.charAt(0).toUpperCase() + resource.category.slice(1)}
          </Badge>
        </div>
      </CardHeader>

      <CardContent>
        <Button className="w-full bg-blue-600 hover:bg-blue-700" asChild>
          <a href={resource.downloadUrl} target="_blank" rel="noopener noreferrer">
            <Download className="w-4 h-4 mr-2" />
            Download Resource
          </a>
        </Button>
      </CardContent>
    </Card>
  );
};

export default function ResourcesPage() {
  const [showEmailForm, setShowEmailForm] = React.useState(false);
  const [selectedResource, setSelectedResource] = React.useState<Resource | null>(null);

  const featuredResources = resources.filter(resource => resource.featured);
  const allResources = resources.filter(resource => !resource.featured);

  const handleResourceDownload = (resource: Resource) => {
    setSelectedResource(resource);
    setShowEmailForm(true);
  };

  const handleEmailSubmit = async (emailData: any) => {
    // Handle email submission and provide download link
    console.log('Email submitted for resource download:', emailData);
    setShowEmailForm(false);
    
    // In a real implementation, this would trigger the download
    if (selectedResource?.downloadUrl) {
      window.open(selectedResource.downloadUrl, '_blank');
    }
  };

  if (showEmailForm && selectedResource) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <div className="text-center mb-6">
          <Download className="w-16 h-16 text-blue-600 mx-auto mb-4" />
          <h2 className="text-2xl font-bold text-gray-900 mb-2">
            Download: {selectedResource.title}
          </h2>
          <p className="text-gray-600">
            Enter your details to download this resource and receive updates on new materials.
          </p>
        </div>
        
        <EmailCollectionForm
          purpose="resources"
          onSubmit={handleEmailSubmit}
          title="Access Premium Resources"
          description="Download exclusive resources and stay updated on the latest in clinical AI."
        />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl">
        <div className="max-w-4xl mx-auto px-6">
          <BookOpen className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Clinical AI Resources
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Essential guides, templates, and insights for healthcare AI implementation
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            Access our curated collection of whitepapers, implementation guides, and case studies 
            to support your AI journey in healthcare.
          </p>
        </div>
      </section>

      {/* Stats Section */}
      <section className="grid md:grid-cols-4 gap-6">
        <Card className="text-center p-6">
          <FileText className="w-8 h-8 text-blue-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900 mb-1">15+</div>
          <div className="text-sm text-gray-600">Expert Resources</div>
        </Card>
        <Card className="text-center p-6">
          <Users className="w-8 h-8 text-green-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900 mb-1">5,000+</div>
          <div className="text-sm text-gray-600">Downloads</div>
        </Card>
        <Card className="text-center p-6">
          <Shield className="w-8 h-8 text-purple-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900 mb-1">100%</div>
          <div className="text-sm text-gray-600">Compliance Focused</div>
        </Card>
        <Card className="text-center p-6">
          <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-3" />
          <div className="text-2xl font-bold text-gray-900 mb-1">Weekly</div>
          <div className="text-sm text-gray-600">New Content</div>
        </Card>
      </section>

      {/* Featured Resources */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Featured Resources
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our most popular and essential resources for healthcare professionals implementing AI.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {featuredResources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>

      {/* All Resources */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Complete Resource Library
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Browse our full collection of implementation guides, case studies, and technical resources.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {allResources.map(resource => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-blue-50 rounded-xl p-8">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Stay Updated
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get notified when we publish new resources, guides, and insights on clinical AI implementation.
          </p>
        </div>
        
        <div className="max-w-md mx-auto">
          <EmailCollectionForm
            purpose="newsletter"
            onSubmit={handleEmailSubmit}
            title="Subscribe to Updates"
            description="Receive new resources and insights directly in your inbox."
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="text-center py-12 bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-xl">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-4">
            Need Personalized Guidance?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Take our AI Readiness Assessment to get customized recommendations for your organization.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <Link href="/readiness-index">
                Take Assessment
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Link href="/academy">
                Explore Courses
                <ExternalLink className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}

