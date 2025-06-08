'use client';

import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { 
  Mail, 
  User, 
  Building, 
  Stethoscope, 
  Shield, 
  CheckCircle,
  Loader2,
  AlertCircle,
  Clock,
  Lock,
  Zap
} from 'lucide-react';
import { professionalEmailService } from '@/lib/professionalEmailService';

interface UnifiedEmailFormProps {
  purpose: 'skills_check' | 'certificate' | 'contact' | 'newsletter' | 'resources';
  onSubmit?: (data: any) => void;
  title?: string;
  description?: string;
  buttonText?: string;
  showExtendedFields?: boolean;
  className?: string;
}

const UnifiedEmailForm: React.FC<UnifiedEmailFormProps> = ({
  purpose,
  onSubmit,
  title,
  description,
  buttonText,
  showExtendedFields = false,
  className = ''
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    specialty: '',
    message: '', // For contact forms
    consent: false,
    updates: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [suggestions, setSuggestions] = useState<string[]>([]);
  const [retryAfter, setRetryAfter] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  // Fix hydration issues
  useEffect(() => {
    setIsClient(true);
  }, []);

  // Countdown timer for rate limiting
  useEffect(() => {
    if (retryAfter && retryAfter > 0) {
      const timer = setInterval(() => {
        setRetryAfter(prev => {
          if (prev && prev > 1) {
            return prev - 1;
          } else {
            setError('');
            return null;
          }
        });
      }, 1000);

      return () => clearInterval(timer);
    }
  }, [retryAfter]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear errors when user starts typing
    if (error) {
      setError('');
      setSuggestions([]);
    }
  };

  const handleCheckboxChange = (name: string, checked: boolean) => {
    setFormData(prev => ({
      ...prev,
      [name]: checked
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuggestions([]);

    try {
      const result = await professionalEmailService.submitEmail({
        name: formData.name,
        email: formData.email,
        organization: formData.organization,
        role: formData.role,
        specialty: formData.specialty,
        purpose,
        consent: formData.consent,
        updates: formData.updates
      });

      if (result.success) {
        setIsSubmitted(true);
        
        // Call parent callback if provided
        if (onSubmit) {
          onSubmit({
            ...formData,
            submissionId: result.submissionId
          });
        }
      } else {
        setError(result.message);
        if (result.suggestions) {
          setSuggestions(result.suggestions);
        }
        if (result.retryAfter) {
          setRetryAfter(result.retryAfter);
        }
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('There was an unexpected error. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormConfig = () => {
    switch (purpose) {
      case 'skills_check':
        return {
          title: title || 'Get Your AI Skills Assessment Results',
          description: description || 'Enter your details to receive your personalized AI skills assessment results and expert recommendations.',
          submitText: buttonText || 'Get My Results',
          icon: <Stethoscope className="w-6 h-6" />,
          color: 'green',
          badge: 'Free Assessment'
        };
      case 'certificate':
        return {
          title: title || 'Download Your Professional Certificate',
          description: description || 'Enter your details to receive your verified professional certificate.',
          submitText: buttonText || 'Get Certificate',
          icon: <CheckCircle className="w-6 h-6" />,
          color: 'blue',
          badge: 'Verified Certificate'
        };
      case 'contact':
        return {
          title: title || 'Send Us a Message',
          description: description || 'Get in touch with our team for questions, partnerships, or support.',
          submitText: buttonText || 'Send Message',
          icon: <Mail className="w-6 h-6" />,
          color: 'purple',
          badge: '24h Response'
        };
      case 'resources':
        return {
          title: title || 'Access Premium Resources',
          description: description || 'Download exclusive guides, templates, and resources for clinical AI implementation.',
          submitText: buttonText || 'Download Resources',
          icon: <Shield className="w-6 h-6" />,
          color: 'indigo',
          badge: 'Premium Content'
        };
      case 'newsletter':
        return {
          title: title || 'Stay Updated with Clinical AI',
          description: description || 'Get the latest insights, research, and resources delivered to your inbox.',
          submitText: buttonText || 'Subscribe',
          icon: <Zap className="w-6 h-6" />,
          color: 'orange',
          badge: 'Weekly Updates'
        };
      default:
        return {
          title: 'Join Our Community',
          description: 'Stay connected with the latest in clinical AI.',
          submitText: 'Submit',
          icon: <Mail className="w-6 h-6" />,
          color: 'blue',
          badge: 'Free'
        };
    }
  };

  const config = getFormConfig();

  // Loading state for hydration
  if (!isClient) {
    return (
      <Card className={`max-w-md mx-auto ${className}`}>
        <CardContent className="p-8">
          <div className="animate-pulse space-y-4">
            <div className="h-4 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="space-y-3">
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (isSubmitted) {
    return (
      <Card className={`max-w-md mx-auto ${className}`}>
        <CardContent className="p-8 text-center">
          <div className={`w-16 h-16 bg-${config.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
            <CheckCircle className={`w-8 h-8 text-${config.color}-600`} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Thank You!
          </h3>
          <p className="text-gray-600 mb-4">
            {purpose === 'skills_check' && 'Your assessment results are now displayed below. Check your email for a detailed report.'}
            {purpose === 'certificate' && 'Your certificate has been generated! Check your email for the download link.'}
            {purpose === 'contact' && 'We\'ve received your message and will respond within 24 hours.'}
            {purpose === 'resources' && 'Your download links have been sent to your email.'}
            {purpose === 'newsletter' && 'You\'ve been successfully subscribed to our newsletter.'}
          </p>
          <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
            <div className="flex items-center space-x-1">
              <Shield className="w-3 h-3" />
              <span>Secure</span>
            </div>
            <div className="flex items-center space-x-1">
              <Lock className="w-3 h-3" />
              <span>Encrypted</span>
            </div>
            <div className="flex items-center space-x-1">
              <CheckCircle className="w-3 h-3" />
              <span>Verified</span>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`max-w-md mx-auto ${className}`} suppressHydrationWarning>
      <CardHeader className="text-center">
        <div className="flex items-center justify-center space-x-2 mb-4">
          <div className={`w-12 h-12 bg-${config.color}-100 rounded-lg flex items-center justify-center`}>
            <div className={`text-${config.color}-600`}>
              {config.icon}
            </div>
          </div>
          <Badge variant="secondary" className="text-xs">
            {config.badge}
          </Badge>
        </div>
        <CardTitle className="text-xl font-bold text-gray-900">
          {config.title}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {config.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4" suppressHydrationWarning>
          {error && (
            <Alert variant="destructive">
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                {error}
                {retryAfter && (
                  <div className="flex items-center mt-2 text-sm">
                    <Clock className="w-4 h-4 mr-1" />
                    Retry in {retryAfter} seconds
                  </div>
                )}
              </AlertDescription>
            </Alert>
          )}

          {suggestions.length > 0 && (
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <div className="space-y-1">
                  {suggestions.map((suggestion, index) => (
                    <div key={index} className="text-sm">{suggestion}</div>
                  ))}
                </div>
              </AlertDescription>
            </Alert>
          )}

          <div className="space-y-2">
            <Label htmlFor="name" className="text-sm font-medium text-gray-700">
              Full Name *
            </Label>
            <div className="relative">
              <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleInputChange}
                className="pl-10"
                placeholder="Dr. Sarah Johnson"
                suppressHydrationWarning
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">
              Email Address *
            </Label>
            <div className="relative">
              <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="email"
                name="email"
                type="email"
                required
                value={formData.email}
                onChange={handleInputChange}
                className="pl-10"
                placeholder="sarah.johnson@hospital.com"
                suppressHydrationWarning
              />
            </div>
          </div>

        

          {purpose === 'contact' && (
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium text-gray-700">
                Message *
              </Label>
              <Textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                placeholder="Tell us about your question, needs, or how we can help..."
                rows={4}
                required
                suppressHydrationWarning
              />
            </div>
          )}

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => handleCheckboxChange('consent', checked as boolean)}
                className="mt-1"
              />
            <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
              I acknowledge the{' '}
              <a href="/privacy" className="text-blue-600 hover:underline">
              privacy policy
             </a>{' '}
              and understand I may request deletion of my data at any time by contacting{' '}
              <a href="mailto:contact@clinicalaiacademy.com" className="text-blue-600 hover:underline">
               contact@clinicalaiacademy.com
              </a>.
            </Label>
            </div>

           
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !formData.consent || (retryAfter && retryAfter > 0)}
            className={`w-full bg-${config.color}-600 hover:bg-${config.color}-700 text-white font-semibold py-3 transition-all duration-200`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
              </>
            ) : retryAfter && retryAfter > 0 ? (
              <>
                <Clock className="w-4 h-4 mr-2" />
                Wait {retryAfter}s
              </>
            ) : (
              config.submitText
            )}
          </Button>

          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 text-xs text-gray-500">
              <div className="flex items-center space-x-1">
                <Shield className="w-3 h-3" />
                <span>GDPR Compliant</span>
              </div>
              <div className="flex items-center space-x-1">
                <Lock className="w-3 h-3" />
                <span>Encrypted</span>
              </div>
              <div className="flex items-center space-x-1">
                <CheckCircle className="w-3 h-3" />
                <span>Secure</span>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default UnifiedEmailForm;

