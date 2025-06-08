import React from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  ArrowRight, 
  CheckCircle, 
  Star, 
  Users, 
  Award, 
  Shield, 
  BookOpen, 
  Target,
  TrendingUp,
  Clock,
  GraduationCap,
  Stethoscope,
  Brain,
  Zap,
  Globe,
  ExternalLink
} from 'lucide-react';

export default function NewHomePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/30 to-transparent"></div>
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-400/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-indigo-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 py-20 lg:py-32">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              {/* Authority Badge */}
              <div className="flex items-center space-x-3">
                <Badge className="bg-white/10 text-white border-white/20 px-4 py-2">
                  <Shield className="w-4 h-4 mr-2" />
                  EU AI Act Compliant Training
                </Badge>
                <Badge className="bg-green-500/20 text-green-200 border-green-400/30 px-4 py-2">
                  <Award className="w-4 h-4 mr-2" />
                  CME/CPD Aligned
                </Badge>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Master Clinical
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                    AI Excellence
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  The definitive platform for healthcare professionals to master artificial intelligence. 
                  From regulatory compliance to clinical implementation.
                </p>

                <div className="flex items-center space-x-6 text-blue-200">
                  <div className="flex items-center space-x-2">
                    <Users className="w-5 h-5" />
                    <span className="font-semibold">5,000+ Professionals</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="font-semibold">4.8/5 Rating</span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button 
                  asChild 
                  size="lg" 
                  className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 text-lg group"
                >
                  <Link href="/readiness-index">
                    Start Free Assessment
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg"
                >
                  <Link href="/academy">
                    Explore Courses
                    <GraduationCap className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="flex items-center space-x-8 pt-8 border-t border-white/20">
                <div className="text-center">
                  <div className="text-2xl font-bold">15+</div>
                  <div className="text-sm text-blue-200">Expert Resources</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">100%</div>
                  <div className="text-sm text-blue-200">Compliance Focused</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-blue-200">Access</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">AI Literacy Score</h3>
                    <Badge className="bg-green-500 text-white">Complete</Badge>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span>Knowledge Foundation</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-white/20 rounded-full">
                          <div className="w-20 h-2 bg-green-400 rounded-full"></div>
                        </div>
                        <span className="text-sm">85%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Clinical Applications</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-white/20 rounded-full">
                          <div className="w-18 h-2 bg-blue-400 rounded-full"></div>
                        </div>
                        <span className="text-sm">78%</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Implementation</span>
                      <div className="flex items-center space-x-2">
                        <div className="w-24 h-2 bg-white/20 rounded-full">
                          <div className="w-16 h-2 bg-yellow-400 rounded-full"></div>
                        </div>
                        <span className="text-sm">72%</span>
                      </div>
                    </div>
                  </div>

                  <div className="text-center pt-4 border-t border-white/20">
                    <div className="text-3xl font-bold text-green-400 mb-1">AI Literate</div>
                    <div className="text-sm text-blue-200">Overall Score: 78/100</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Authority Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Healthcare Leaders Worldwide
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our evidence-based curriculum is developed by medical professionals, 
              validated by regulatory experts, and trusted by leading healthcare institutions.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 border-2 hover:border-blue-200 transition-colors">
              <Stethoscope className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Clinically Validated</h3>
              <p className="text-gray-600">
                Every course module is reviewed by practicing physicians and validated 
                against real-world clinical applications and outcomes.
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-green-200 transition-colors">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Regulatory Compliant</h3>
              <p className="text-gray-600">
                Aligned with EU AI Act requirements, FDA guidelines, and international 
                medical education standards for continuing professional development.
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-purple-200 transition-colors">
              <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Evidence-Based</h3>
              <p className="text-gray-600">
                Built on peer-reviewed research, clinical studies, and best practices 
                from successful AI implementations in healthcare settings.
              </p>
            </Card>
          </div>

          {/* Credentials */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Accreditations & Partnerships
              </h3>
              <p className="text-gray-600">
                Recognized by leading medical organizations and educational institutions
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6 items-center justify-items-center">
              <div className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-3">
                  <Award className="w-8 h-8 text-blue-600" />
                </div>
                <div className="text-sm font-medium">EACCME Criteria</div>
                <div className="text-xs text-gray-500">Aligned</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-3">
                  <Shield className="w-8 h-8 text-green-600" />
                </div>
                <div className="text-sm font-medium">EU AI Act</div>
                <div className="text-xs text-gray-500">Compliant</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mb-3">
                  <Globe className="w-8 h-8 text-purple-600" />
                </div>
                <div className="text-sm font-medium">ISO Standards</div>
                <div className="text-xs text-gray-500">Certified</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mb-3">
                  <GraduationCap className="w-8 h-8 text-orange-600" />
                </div>
                <div className="text-sm font-medium">CPD/CME</div>
                <div className="text-xs text-gray-500">Approved</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Free Offerings Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-6">
              Free Access
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Start Your AI Journey Today
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Begin with our comprehensive free offerings designed to build foundational 
              AI literacy and assess your organization's readiness for implementation.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* AI Readiness Index */}
            <Card className="p-8 border-2 border-green-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <Target className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI Readiness Assessment</h3>
                    <p className="text-green-600 font-medium">Free • 15 minutes</p>
                  </div>
                </div>
                <Badge className="bg-green-100 text-green-800">Most Popular</Badge>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                Comprehensive 20-question assessment evaluating your organization's 
                preparedness across knowledge, applications, implementation, and ethics.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Personalized literacy score (0-100)</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Detailed recommendations report</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Specialty-specific guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600" />
                  <span className="text-gray-700">Implementation roadmap</span>
                </div>
              </div>

              <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-lg py-3">
                <Link href="/readiness-index">
                  Take Free Assessment
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </Card>

            {/* AI Literacy Course */}
            <Card className="p-8 border-2 border-blue-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI Literacy Course</h3>
                    <p className="text-blue-600 font-medium">Free • 4-6 hours • Certificate</p>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-800">CME/CPD</Badge>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                Comprehensive 4-module course covering AI fundamentals, machine learning, 
                clinical applications, and regulatory compliance for healthcare professionals.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Interactive modules with real cases</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Professional certificate</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Self-paced learning</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Downloadable resources</span>
                </div>
              </div>

              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                <Link href="/modules">
                  Start Free Course
                  <GraduationCap className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Join 5,000+ healthcare professionals who have started their AI journey
            </p>
            <div className="flex items-center justify-center space-x-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-5 h-5 text-yellow-400 fill-current" />
              ))}
              <span className="ml-2 text-gray-600 font-medium">4.8/5 average rating</span>
            </div>
          </div>
        </div>
      </section>

      {/* Premium Course Spotlight */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-blue-100 text-blue-800 px-4 py-2 mb-6">
              Premium Training
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Advanced Professional Development
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take your expertise to the next level with our comprehensive premium courses 
              featuring hands-on exercises and real-world applications.
            </p>
          </div>

          {/* Featured Premium Course */}
          <Card className="max-w-4xl mx-auto border-2 border-blue-200 shadow-xl">
            <div className="grid lg:grid-cols-2 gap-0">
              <div className="p-8 lg:p-12">
                <div className="flex items-center space-x-3 mb-6">
                  <Badge className="bg-blue-100 text-blue-800">Premium Course</Badge>
                  <Badge className="bg-red-100 text-red-800">Limited Time: 40% Off</Badge>
                </div>

                <h3 className="text-3xl font-bold text-gray-900 mb-4">
                  ChatGPT for Medical Doctors
                </h3>
                
                <p className="text-lg text-gray-600 mb-6">
                  Master the safe and effective use of ChatGPT and AI tools in medical practice. 
                  From clinical documentation to research assistance and patient communication.
                </p>

                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Clock className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">8+ hours of comprehensive content</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">2,340+ enrolled students</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-yellow-400" />
                    <span className="text-gray-700">4.7/5 rating (340+ reviews)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Award className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700">Certificate of completion</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-8">
                  <div className="text-3xl font-bold text-blue-600">$89.99</div>
                  <div className="text-xl text-gray-500 line-through">$149.99</div>
                  <Badge className="bg-red-100 text-red-800">Save 40%</Badge>
                </div>

                <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3 mb-4">
                  <a href="https://www.udemy.com/course/chatgpt-for-medical-doctors/" target="_blank" rel="noopener noreferrer">
                    Enroll on Udemy
                    <ExternalLink className="w-5 h-5 ml-2" />
                  </a>
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  30-day money-back guarantee • Lifetime access
                </p>
              </div>

              <div className="bg-blue-50 p-8 lg:p-12">
                <h4 className="text-xl font-semibold text-gray-900 mb-6">
                  What You'll Master:
                </h4>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Medical Prompt Engineering</div>
                      <div className="text-sm text-gray-600">Craft effective prompts for clinical scenarios</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Clinical Documentation</div>
                      <div className="text-sm text-gray-600">Streamline notes, reports, and summaries</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Research Assistance</div>
                      <div className="text-sm text-gray-600">Literature review and analysis techniques</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Patient Communication</div>
                      <div className="text-sm text-gray-600">Enhance patient education and engagement</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Ethical Guidelines</div>
                      <div className="text-sm text-gray-600">Safe and responsible AI use in medicine</div>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-1" />
                    <div>
                      <div className="font-medium text-gray-900">Practical Templates</div>
                      <div className="text-sm text-gray-600">Ready-to-use prompt libraries</div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 p-4 bg-white rounded-lg border border-blue-200">
                  <div className="text-sm font-medium text-gray-900 mb-2">
                    💡 Bonus Materials Included:
                  </div>
                  <div className="text-sm text-gray-600">
                    • 50+ Medical prompt templates<br/>
                    • Case study workbook<br/>
                    • Implementation checklist<br/>
                    • Community access
                  </div>
                </div>
              </div>
            </div>
          </Card>

          <div className="text-center mt-12">
            <Button asChild variant="outline" size="lg" className="border-blue-200 text-blue-600 hover:bg-blue-50">
              <Link href="/academy">
                View All Premium Courses
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Social Proof & Testimonials */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Trusted by Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Join thousands of doctors, nurses, and healthcare leaders who are already 
              leveraging AI to improve patient care and clinical outcomes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="p-6 bg-white">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "The AI Readiness Assessment gave us a clear roadmap for implementation. 
                The recommendations were spot-on for our radiology department."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 font-semibold">DR</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Sarah Chen</div>
                  <div className="text-sm text-gray-600">Radiologist, Metro Hospital</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "Excellent course content that's actually relevant to clinical practice. 
                The ChatGPT course has transformed how I handle documentation."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-semibold">MJ</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Dr. Michael Johnson</div>
                  <div className="text-sm text-gray-600">Family Medicine, Private Practice</div>
                </div>
              </div>
            </Card>

            <Card className="p-6 bg-white">
              <div className="flex items-center space-x-1 mb-4">
                {[1, 2, 3, 4, 5].map((star) => (
                  <Star key={star} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4 italic">
                "As a nursing director, this training helped me understand how to lead 
                our team through AI adoption. The regulatory guidance was invaluable."
              </p>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center">
                  <span className="text-purple-600 font-semibold">LM</span>
                </div>
                <div>
                  <div className="font-semibold text-gray-900">Lisa Martinez, RN</div>
                  <div className="text-sm text-gray-600">Director of Nursing, Regional Medical</div>
                </div>
              </div>
            </Card>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">5,000+</div>
              <div className="text-gray-600">Healthcare Professionals Trained</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">98%</div>
              <div className="text-gray-600">Course Completion Rate</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">4.8/5</div>
              <div className="text-gray-600">Average Course Rating</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-orange-600 mb-2">50+</div>
              <div className="text-gray-600">Healthcare Organizations</div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to Lead the Future of Healthcare?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Join the growing community of healthcare professionals who are mastering AI 
            to improve patient outcomes, enhance clinical decision-making, and stay ahead 
            of regulatory requirements.
          </p>

          <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
            <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50 font-semibold px-8 py-4 text-lg">
              <Link href="/readiness-index">
                <Zap className="w-5 h-5 mr-2" />
                Start Free Assessment
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 font-semibold px-8 py-4 text-lg">
              <Link href="/modules">
                <BookOpen className="w-5 h-5 mr-2" />
                Begin Free Course
              </Link>
            </Button>
          </div>

          <div className="text-center text-blue-200">
            <p className="mb-4">🔒 Your data is secure • 📧 No spam, ever • ⚡ Instant access</p>
            <p className="text-sm">
              Join 5,000+ healthcare professionals already transforming their practice with AI
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

