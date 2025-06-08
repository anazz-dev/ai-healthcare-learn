// Professional Email Collection Service
// Secure client-side service that calls server-side API endpoints

interface EmailSubmission {
  email: string;
  name?: string;
  purpose?: string;
  source?: string;
  metadata?: Record<string, any>;
}

interface EmailResponse {
  success: boolean;
  message: string;
  status?: string;
  error?: any;
}

class ProfessionalEmailService {
  private sessionId: string;
  private submissions: EmailSubmission[] = [];

  constructor() {
    this.sessionId = this.generateSessionId();
    this.loadStoredSubmissions();
  }

  private generateSessionId(): string {
    const timestamp = Date.now();
    const random = Math.random().toString(36).substring(2);
    return `session_${timestamp}_${random}`;
  }

  private loadStoredSubmissions(): void {
    if (typeof window === 'undefined') return;
    
    try {
      const stored = localStorage.getItem('clinicalAI_emails');
      if (stored) {
        this.submissions = JSON.parse(stored);
      }
    } catch (error) {
      console.warn('Failed to load stored submissions:', error);
    }
  }

  private saveToLocalStorage(submission: EmailSubmission): void {
    if (typeof window === 'undefined') return;

    try {
      this.submissions.push(submission);
      localStorage.setItem('clinicalAI_emails', JSON.stringify(this.submissions));
    } catch (error) {
      console.warn('Failed to save to localStorage:', error);
    }
  }

  private async callMailchimpAPI(submission: EmailSubmission): Promise<EmailResponse> {
    try {
      const { email, name, purpose, metadata = {} } = submission;
      const response = await fetch('/api/mailchimp-subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
         body: JSON.stringify({
            email,
            name,
            purpose: purpose || 'general',
            organization: metadata.organization || '',
            role: metadata.role || '',
            specialty: metadata.specialty || '',
            message: metadata.message || '',
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        return {
          success: false,
          message: data.message || 'Failed to subscribe',
          error: data
        };
      }

      return {
        success: true,
        message: data.message || 'Successfully subscribed',
        status: data.status
      };

    } catch (error) {
      console.error('Mailchimp API call failed:', error);
      return {
        success: false,
        message: 'Network error - please try again',
        error: error
      };
    }
  }

  async submitEmail(submission: EmailSubmission): Promise<EmailResponse> {
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(submission.email)) {
      return {
        success: false,
        message: 'Please enter a valid email address'
      };
    }

    // Add metadata
    const enrichedSubmission = {
      ...submission,
      timestamp: new Date().toISOString(),
      sessionId: this.sessionId,
      source: submission.source || 'Clinical AI Academy',
      userAgent: typeof window !== 'undefined' ? window.navigator.userAgent : 'unknown'
    };

    // Save to localStorage first (guaranteed backup)
    this.saveToLocalStorage(enrichedSubmission);

    // Try to submit to Mailchimp
    const result = await this.callMailchimpAPI(enrichedSubmission);

    return result;
  }

  // Convenience methods for different form types
  async submitAssessmentEmail(email: string, name: string, score?: number): Promise<EmailResponse> {
    return this.submitEmail({
      email,
      name,
      purpose: 'skills_assessment',
      source: 'Clinical AI Skills Check',
      metadata: { score }
    });
  }

  async submitCertificateEmail(email: string, name: string, courseName?: string): Promise<EmailResponse> {
    return this.submitEmail({
      email,
      name,
      purpose: 'certificate',
      source: 'Course Completion',
      metadata: { courseName }
    });
  }

  async submitContactEmail(email: string, name: string, message?: string): Promise<EmailResponse> {
    return this.submitEmail({
      email,
      name,
      purpose: 'contact',
      source: 'Contact Form',
      metadata: { message }
    });
  }

  async submitNewsletterEmail(email: string, name?: string): Promise<EmailResponse> {
    return this.submitEmail({
      email,
      name,
      purpose: 'newsletter',
      source: 'Newsletter Signup'
    });
  }

  // Get all stored submissions (for admin/debugging)
  getStoredSubmissions(): EmailSubmission[] {
    return [...this.submissions];
  }

  // Clear stored submissions
  clearStoredSubmissions(): void {
    this.submissions = [];
    if (typeof window !== 'undefined') {
      localStorage.removeItem('clinicalAI_emails');
    }
  }
}

// Create and export singleton instance
let _professionalEmailService: ProfessionalEmailService | null = null;

export const getProfessionalEmailService = (): ProfessionalEmailService => {
  if (typeof window === 'undefined') {
    // Return a mock service for SSR
    return {
      submitEmail: async () => ({ success: false, message: 'SSR mode' }),
      submitAssessmentEmail: async () => ({ success: false, message: 'SSR mode' }),
      submitCertificateEmail: async () => ({ success: false, message: 'SSR mode' }),
      submitContactEmail: async () => ({ success: false, message: 'SSR mode' }),
      submitNewsletterEmail: async () => ({ success: false, message: 'SSR mode' }),
      getStoredSubmissions: () => [],
      clearStoredSubmissions: () => {}
    } as ProfessionalEmailService;
  }

  if (!_professionalEmailService) {
    _professionalEmailService = new ProfessionalEmailService();
  }
  return _professionalEmailService;
};

// Export the service instance
export const professionalEmailService = getProfessionalEmailService();

