'use client';

import React from 'react';
import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  GraduationCap, 
  Award, 
  Clock, 
  Users, 
  Star, 
  CheckCircle, 
  ArrowRight, 
  BookOpen,
  Target,
  Shield,
  Zap,
  ExternalLink
} from 'lucide-react';

interface Course {
  id: string;
  title: string;
  description: string;
  type: 'free' | 'premium' | 'coming-soon';
  duration: string;
  modules: number;
  students?: number;
  rating?: number;
  price?: string;
  originalPrice?: string;
  platform?: 'internal' | 'udemy';
  url?: string;
  features: string[];
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  specialty?: string[];
  accreditation?: string;
}

const courses: Course[] = [
  {
    id: 'ai-literacy',
    title: 'AI Literacy for Healthcare Professionals',
    description: 'Master the fundamentals of AI in healthcare with this comprehensive course covering everything from basic concepts to regulatory compliance.',
    type: 'free',
    duration: '4-6 hours',
    modules: 4,
    platform: 'internal',
    url: '/modules',
    level: 'Beginner',
    accreditation: 'CME/CPD Aligned',
    features: [
      'Interactive modules with real-world examples',
      'Downloadable resources and guides',
      'Professional certificate upon completion',
      'Self-paced learning',
      'Mobile-friendly content',
      'Community discussion forums'
    ]
  },
  {
    id: 'ai-readiness-index',
    title: 'Clinical AI Skills Check',
    description: 'Evaluate your clinical AI knowledge and skills with our comprehensive assessment tool.',
    type: 'free',
    duration: '5 minutes',
    modules: 1,
    platform: 'internal',
    url: '/readiness-index',
    level: 'Beginner',
    features: [
      'Personalized literacy score',
      'Detailed recommendations report',
      'Specialty-specific guidance',
      'Implementation roadmap',
      'Regulatory compliance insights',
      'Email delivery of results'
    ]
  },
];

const CourseCard: React.FC<{ course: Course }> = ({ course }) => {
  const isExternal = course.platform === 'udemy';
  const isPremium = course.type === 'premium';
  const isComingSoon = course.type === 'coming-soon';
  const isFree = course.type === 'free';

  return (
    <Card className={`h-full transition-all duration-300 hover:shadow-lg ${
      isPremium ? 'border-blue-500 shadow-md' : 
      isFree ? 'border-green-500' : 
      'border-gray-200'
    }`}>
      <CardHeader>
        <div className="flex items-start justify-between mb-2">
          <div className="flex items-center space-x-2">
            {isFree && <Badge className="bg-green-100 text-green-800">Free</Badge>}
            {isPremium && <Badge className="bg-blue-100 text-blue-800">Premium</Badge>}
            {isComingSoon && <Badge className="bg-gray-100 text-gray-800">Coming Soon</Badge>}
            <Badge variant="outline">{course.level}</Badge>
          </div>
          {course.rating && (
            <div className="flex items-center text-sm text-gray-600">
              <Star className="w-4 h-4 text-yellow-500 mr-1" />
              {course.rating}
            </div>
          )}
        </div>
        
        <CardTitle className="text-xl font-bold text-gray-900 mb-2">
          {course.title}
        </CardTitle>
        
        <CardDescription className="text-gray-600 mb-4">
          {course.description}
        </CardDescription>

        <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
          <div className="flex items-center">
            <Clock className="w-4 h-4 mr-1" />
            {course.duration}
          </div>
          <div className="flex items-center">
            <BookOpen className="w-4 h-4 mr-1" />
            {course.modules} modules
          </div>
          {course.students && (
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              {course.students.toLocaleString()} students
            </div>
          )}
        </div>

        {course.specialty && (
          <div className="mb-4">
            <p className="text-sm font-medium text-gray-700 mb-2">Specialties:</p>
            <div className="flex flex-wrap gap-1">
              {course.specialty.map((spec, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {spec}
                </Badge>
              ))}
            </div>
          </div>
        )}

        {course.accreditation && (
          <div className="flex items-center text-sm text-green-700 mb-4">
            <Shield className="w-4 h-4 mr-1" />
            {course.accreditation}
          </div>
        )}
      </CardHeader>

      <CardContent>
        <div className="space-y-4">
          <div>
            <h4 className="font-semibold text-gray-900 mb-2">What you'll learn:</h4>
            <ul className="space-y-1">
              {course.features.slice(0, 4).map((feature, index) => (
                <li key={index} className="flex items-start text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                  {feature}
                </li>
              ))}
              {course.features.length > 4 && (
                <li className="text-sm text-gray-500 italic">
                  +{course.features.length - 4} more features...
                </li>
              )}
            </ul>
          </div>

          <div className="border-t pt-4">
            {isPremium && (
              <div className="mb-4">
                <div className="flex items-center space-x-2 mb-2">
                  {course.originalPrice && (
                    <span className="text-lg text-gray-500 line-through">
                      {course.originalPrice}
                    </span>
                  )}
                  <span className="text-2xl font-bold text-blue-600">
                    {course.price}
                  </span>
                </div>
                {course.originalPrice && (
                  <Badge className="bg-red-100 text-red-800">
                    Save {Math.round((1 - parseFloat(course.price!.replace('$', '')) / parseFloat(course.originalPrice.replace('$', ''))) * 100)}%
                  </Badge>
                )}
              </div>
            )}

            {isComingSoon ? (
              <Button disabled className="w-full">
                <Clock className="w-4 h-4 mr-2" />
                Coming Soon
              </Button>
            ) : (
              <Button 
                asChild 
                className={`w-full ${
                  isPremium ? 'bg-blue-600 hover:bg-blue-700' : 
                  isFree ? 'bg-green-600 hover:bg-green-700' : 
                  'bg-gray-600 hover:bg-gray-700'
                }`}
              >
                {isExternal ? (
                  <a href={course.url} target="_blank" rel="noopener noreferrer">
                    {isPremium ? 'Enroll on Udemy' : 'Start Course'}
                    <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                ) : (
                  <Link href={course.url!}>
                    {isPremium ? 'Enroll Now' : isFree ? 'Start Free' : 'Learn More'}
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Link>
                )}
              </Button>
            )}

            {isPremium && isExternal && (
              <p className="text-xs text-gray-500 text-center mt-2">
                30-day money-back guarantee • Lifetime access
              </p>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default function AcademyPage() {
  const freeCourses = courses.filter(course => course.type === 'free');
  const premiumCourses = courses.filter(course => course.type === 'premium');
  const comingSoonCourses = courses.filter(course => course.type === 'coming-soon');

  return (
    <div className="max-w-7xl mx-auto p-6 space-y-12">
      {/* Hero Section */}
      <section className="text-center py-12 bg-gradient-to-r from-blue-600 to-indigo-700 text-white rounded-xl">
        <div className="max-w-4xl mx-auto px-6">
          <GraduationCap className="w-16 h-16 mx-auto mb-6" />
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Clinical AI Academy
          </h1>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Your trusted source for professional AI education in healthcare
          </p>
          <p className="text-lg opacity-80 max-w-3xl mx-auto">
            From foundational concepts to advanced implementation strategies, 
            our courses are designed by healthcare professionals for healthcare professionals.
          </p>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="grid md:grid-cols-3 gap-8">
        <Card className="text-center p-6">
          <Target className="w-12 h-12 text-blue-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Clinically Relevant</h3>
          <p className="text-gray-600">
            Every course is designed with real clinical applications and evidence-based practices.
          </p>
        </Card>
        <Card className="text-center p-6">
          <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Regulatory Compliant</h3>
          <p className="text-gray-600">
            Aligned with EU AI Act, FDA guidelines, and professional medical standards.
          </p>
        </Card>
        <Card className="text-center p-6">
          <Zap className="w-12 h-12 text-purple-600 mx-auto mb-4" />
          <h3 className="text-xl font-semibold mb-2">Immediately Applicable</h3>
          <p className="text-gray-600">
            Practical skills and knowledge you can implement in your practice right away.
          </p>
        </Card>
      </section>

      {/* Free Courses Section */}
      <section>
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Start Your AI Journey - Free
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Begin with our foundational courses designed to build your AI literacy and assess your readiness for implementation.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {freeCourses.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
        </div>
      </section>
    </div>
  );
}

