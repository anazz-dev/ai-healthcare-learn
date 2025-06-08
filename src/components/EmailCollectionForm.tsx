'use client';

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Mail, 
  User, 
  Building, 
  Stethoscope, 
  Shield, 
  CheckCircle,
  Loader2,
  AlertCircle
} from 'lucide-react';

interface EmailCollectionFormProps {
  purpose: 'readiness' | 'certificate' | 'resources' | 'newsletter' | 'skills_check_results';
  onSubmit?: (data: any) => void;
  title?: string;
  description?: string;
  buttonText?: string;
  showNameField?: boolean;
}

const EmailCollectionForm: React.FC<EmailCollectionFormProps> = ({
  purpose,
  onSubmit,
  title,
  description,
  buttonText,
  showNameField = false
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    role: '',
    specialty: '',
    consent: false,
    updates: false
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
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

    if (!formData.consent) {
      setError('Please agree to the privacy policy to continue.');
      setIsSubmitting(false);
      return;
    }

    try {
      // For skills check results, we'll show results immediately after email collection
      // Store email locally for lead capture
      const existingEmails = JSON.parse(localStorage.getItem('clinicalAI_emails') || '[]');
      existingEmails.push({
        ...formData,
        purpose,
        timestamp: new Date().toISOString(),
        source: window.location.href
      });
      localStorage.setItem('clinicalAI_emails', JSON.stringify(existingEmails));

      // Simulate successful submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);

      // Call parent callback if provided (this will show the results)
      if (onSubmit) {
        onSubmit(formData);
      }
    } catch (err) {
      console.error('Form submission error:', err);
      setError('There was an error submitting your information. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFormConfig = () => {
    switch (purpose) {
      case 'readiness':
        return {
          title: title || 'Get Your AI Readiness Report',
          description: description || 'Enter your details to receive your personalized AI readiness assessment results.',
          submitText: 'Get My Results',
          icon: <Stethoscope className="w-6 h-6" />,
          color: 'green'
        };
      case 'certificate':
        return {
          title: title || 'Download Your Certificate',
          description: description || 'Enter your details to receive your professional certificate via email.',
          submitText: 'Send Certificate',
          icon: <CheckCircle className="w-6 h-6" />,
          color: 'blue'
        };
      case 'resources':
        return {
          title: title || 'Access Premium Resources',
          description: description || 'Enter your details to download exclusive resources and guides.',
          submitText: 'Download Resources',
          icon: <Shield className="w-6 h-6" />,
          color: 'purple'
        };
      case 'skills_check_results':
        return {
          title: title || 'Get Your Assessment Results',
          description: description || 'Enter your details to receive your personalized AI skills assessment results and expert recommendations.',
          submitText: buttonText || 'Get My Results',
          icon: <Stethoscope className="w-6 h-6" />,
          color: 'green'
        };
      case 'newsletter':
        return {
          title: title || 'Stay Updated',
          description: description || 'Get the latest insights and resources delivered to your inbox.',
          submitText: 'Subscribe',
          icon: <Mail className="w-6 h-6" />,
          color: 'indigo'
        };
      default:
        return {
          title: 'Join Our Community',
          description: 'Stay connected with the latest in clinical AI.',
          submitText: 'Submit',
          icon: <Mail className="w-6 h-6" />,
          color: 'blue'
        };
    }
  };

  const config = getFormConfig();

  if (isSubmitted) {
    return (
      <Card className="max-w-md mx-auto">
        <CardContent className="p-8 text-center">
          <div className={`w-16 h-16 bg-${config.color}-100 rounded-full flex items-center justify-center mx-auto mb-4`}>
            <CheckCircle className={`w-8 h-8 text-${config.color}-600`} />
          </div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Thank You!
          </h3>
          <p className="text-gray-600 mb-4">
            {purpose === 'readiness' && 'Your AI readiness report will be sent to your email shortly.'}
            {purpose === 'skills_check_results' && 'Thank you! Your assessment results are now displayed below.'}
            {purpose === 'certificate' && 'Your certificate will be delivered to your email within a few minutes.'}
            {purpose === 'resources' && 'Your download links have been sent to your email.'}
            {purpose === 'newsletter' && 'You\'ve been successfully subscribed to our newsletter.'}
          </p>
          <p className="text-sm text-gray-500">
            {purpose === 'skills_check_results' 
              ? 'Your information has been saved and you can now view your personalized results.'
              : 'Check your email (including spam folder) for your materials.'
            }
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className="max-w-md mx-auto">
      <CardHeader className="text-center">
        <div className={`w-12 h-12 bg-${config.color}-100 rounded-lg flex items-center justify-center mx-auto mb-4`}>
          <div className={`text-${config.color}-600`}>
            {config.icon}
          </div>
        </div>
        <CardTitle className="text-xl font-bold text-gray-900">
          {config.title}
        </CardTitle>
        <CardDescription className="text-gray-600">
          {config.description}
        </CardDescription>
      </CardHeader>

      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          {error && (
            <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
              <AlertCircle className="w-4 h-4" />
              <span className="text-sm">{error}</span>
            </div>
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
              />
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="organization" className="text-sm font-medium text-gray-700">
              Organization
            </Label>
            <div className="relative">
              <Building className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
              <Input
                id="organization"
                name="organization"
                type="text"
                value={formData.organization}
                onChange={handleInputChange}
                className="pl-10"
                placeholder="Metro General Hospital"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="role" className="text-sm font-medium text-gray-700">
                Role
              </Label>
              <select
                id="role"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select role</option>
                <option value="physician">Physician</option>
                <option value="nurse">Nurse</option>
                <option value="resident">Resident</option>
                <option value="administrator">Administrator</option>
                <option value="researcher">Researcher</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="specialty" className="text-sm font-medium text-gray-700">
                Specialty
              </Label>
              <select
                id="specialty"
                name="specialty"
                value={formData.specialty}
                onChange={handleInputChange}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="">Select specialty</option>
                <option value="general">General Practice</option>
                <option value="internal">Internal Medicine</option>
                <option value="radiology">Radiology</option>
                <option value="pathology">Pathology</option>
                <option value="cardiology">Cardiology</option>
                <option value="emergency">Emergency Medicine</option>
                <option value="surgery">Surgery</option>
                <option value="nursing">Nursing</option>
                <option value="administration">Administration</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="space-y-3">
            <div className="flex items-start space-x-3">
              <Checkbox
                id="consent"
                checked={formData.consent}
                onCheckedChange={(checked) => handleCheckboxChange('consent', checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="consent" className="text-sm text-gray-600 leading-relaxed">
                I agree to the{' '}
                <a href="/privacy" className="text-blue-600 hover:underline">
                  privacy policy
                </a>{' '}
                and consent to receive my requested materials via email. *
              </Label>
            </div>

            <div className="flex items-start space-x-3">
              <Checkbox
                id="updates"
                checked={formData.updates}
                onCheckedChange={(checked) => handleCheckboxChange('updates', checked as boolean)}
                className="mt-1"
              />
              <Label htmlFor="updates" className="text-sm text-gray-600 leading-relaxed">
                I would like to receive updates about new courses, resources, and clinical AI insights.
              </Label>
            </div>
          </div>

          <Button
            type="submit"
            disabled={isSubmitting || !formData.consent}
            className={`w-full bg-${config.color}-600 hover:bg-${config.color}-700 text-white font-semibold py-3`}
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Processing...
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
                <CheckCircle className="w-3 h-3" />
                <span>Secure</span>
              </div>
              <div className="flex items-center space-x-1">
                <Mail className="w-3 h-3" />
                <span>No Spam</span>
              </div>
            </div>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default EmailCollectionForm;

