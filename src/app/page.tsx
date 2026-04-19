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

export const metadata = {
  title: 'Clinical AI Academy — AI Literacy for Healthcare Professionals',
  description:
    'An open-access project on AI in healthcare — course, newsletter, YouTube, and blog. Written by a clinician, for clinicians.',
  openGraph: {
    title: 'Clinical AI Academy — AI Literacy for Healthcare Professionals',
    description:
      'An open-access project on AI in healthcare — course, newsletter, YouTube, and blog. Written by a clinician, for clinicians.',
    url: 'https://clinicalaiacademy.com',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Clinical AI Academy — AI Literacy for Healthcare Professionals',
    description:
      'An open-access project on AI in healthcare — course, newsletter, YouTube, and blog. Written by a clinician, for clinicians.',
  },
};


export default function HomePage() {
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
                  Covers the EU AI Act
                </Badge>
                <Badge className="bg-green-500/20 text-green-200 border-green-400/30 px-4 py-2">
                  <BookOpen className="w-4 h-4 mr-2" />
                  Open Access
                </Badge>
              </div>

              <div className="space-y-6">
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  Clinical AI
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 to-cyan-200">
                    Academy
                  </span>
                </h1>
                
                <p className="text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-2xl">
                  Learn AI in healthcare — from fundamentals to regulation and clinical practice. Written by a clinician, for clinicians.
                </p>

              <div className="flex items-center space-x-6 text-blue-200">
                  <div className="flex items-center space-x-2">
                  <BookOpen className="w-5 h-5 text-blue-400" />
                  <span className="font-semibold">
                    <Link href="/modules" className="hover:text-white transition-colors">Course</Link>
                    {' · '}
                    <a href="https://clinicalaiacademy.substack.com/" className="hover:text-white transition-colors">Newsletter</a>
                    {' · '}
                    <a href="https://www.youtube.com/@clinicalaiacademy" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">YouTube</a>
                    {' · '}
                    <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
                  </span>
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
                    Try the Skills Check
                    <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
                <Button 
                  asChild 
                  size="lg" 
                  variant="outline" 
                  className="border-white/30 text-white hover:bg-white/10 hover:text-white font-semibold px-8 py-4 text-lg bg-transparent"
                >
                  <Link href="/modules">
                    Browse the Course
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
                  <div className="text-sm text-blue-200">Evidence-Based</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold">24/7</div>
                  <div className="text-sm text-blue-200">Any Device</div>
                </div>
              </div>
            </div>

            {/* Hero Visual */}
            <div className="relative">
              <div className="relative bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-semibold">AI Literacy Score</h3>
                    <Badge className="bg-green-500 text-white">Example</Badge>
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
                    <div className="text-sm text-blue-200">Example score: 78/100</div>
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
              For Healthcare Professionals
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Written by a clinician, grounded in published research and real clinical cases.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <Card className="text-center p-8 border-2 hover:border-blue-200 transition-colors">
              <Stethoscope className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Clinically Grounded</h3>
              <p className="text-gray-600">
                Built around real clinical cases, landmark studies, and the practical realities of working with AI at the bedside.
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-green-200 transition-colors">
              <Shield className="w-12 h-12 text-green-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Covers Regulation</h3>
              <p className="text-gray-600">
                Explains the EU AI Act, FDA guidance, and CE marking — what they mean for clinicians using AI tools in practice.
              </p>
            </Card>

            <Card className="text-center p-8 border-2 hover:border-purple-200 transition-colors">
              <Brain className="w-12 h-12 text-purple-600 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3">Evidence-Based</h3>
              <p className="text-gray-600">
                Draws on peer-reviewed research, published studies, and documented cases of AI in healthcare — both successes and failures.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Free Offerings Section */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <Badge className="bg-green-100 text-green-800 px-4 py-2 mb-6">
              Open Access
            </Badge>
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Two Ways to Start
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a quick skills check to see where you stand, or dive straight into the course.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Clinical AI Skills Check */}
            <Card className="bg-white/95 backdrop-blur-sm border-green-200 shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center space-x-4 mb-6">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Clinical AI Skills Check</h3>
                    <div className="flex items-center space-x-4 text-sm text-gray-600">
                      <span>5 minutes</span>
                      <Badge className="bg-green-100 text-green-800">Quick start</Badge>
                    </div>
                  </div>
                </div>

                <p className="text-gray-600 mb-6 text-lg">
                  A short 10-question self-assessment covering AI fundamentals, clinical applications, implementation, and ethics.
                </p>

                <div className="space-y-3 mb-8">
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Personalised score (0–100)</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Recommendations based on your answers</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Specialty-specific guidance</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600" />
                    <span className="text-gray-700">Results sent by email</span>
                  </div>
                </div>

                <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3">
                  <Link href="/readiness-index">
                    Take the Skills Check
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* AI Literacy Course */}
            <Card className="p-8 border-2 border-blue-200 bg-white shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                    <BookOpen className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">AI Literacy Modules</h3>
                    <p className="text-blue-600 font-medium">8–12 hours</p>
                  </div>
                </div>
                <Badge className="bg-blue-100 text-blue-800">8 Modules</Badge>
              </div>

              <p className="text-gray-600 mb-6 text-lg">
                An eight-module course covering AI fundamentals, how machine learning works, clinical applications, evaluation, regulation, LLMs, and implementation.
              </p>

              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Real clinical cases and published studies</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Self-paced, work through at your own rhythm</span>
                </div>
                 <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Covers EU AI Act, FDA, and CE frameworks</span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600" />
                  <span className="text-gray-700">Written by a clinician, for clinicians</span>
                </div>
              </div>

              <Button asChild className="w-full bg-blue-600 hover:bg-blue-700 text-lg py-3">
                <Link href="/modules">
                  Start the Course
                  <GraduationCap className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </Card>
          </div>

          
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-900 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Ready to start?
          </h2>
          <p className="text-xl text-blue-100 mb-12 max-w-3xl mx-auto">
            Take the five-minute skills check to see where you stand, or open Module 1 and start reading.
          </p>

          <Button asChild className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold text-lg py-3">
                  <Link href="/readiness-index">
                    Take the Skills Check 
                  </Link>
          </Button>

          <div className="text-center text-blue-200 mt-6">
            <p className="text-sm">
              Or <Link href="/modules" className="underline hover:text-white">browse the modules</Link> and pick a topic.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}