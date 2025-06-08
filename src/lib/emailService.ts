// Email service for handling form submissions and email storage
export interface EmailSubmission {
  id?: string;
  name: string;
  email: string;
  role: string;
  institution?: string;
  specialty?: string;
  purpose: 'readiness-index' | 'certificate' | 'newsletter' | 'resources';
  timestamp: string;
  ipAddress?: string;
  userAgent?: string;
}

export interface ReadinessIndexResult {
  email: string;
  score: number;
  category: string;
  recommendations: string[];
  completedAt: string;
}

class EmailService {
  private baseUrl: string;

  constructor() {
    // In production, this would be your backend API URL
    this.baseUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';
  }

  async submitEmailForm(data: Omit<EmailSubmission, 'timestamp'>): Promise<{ success: boolean; message: string }> {
    try {
      const submission: EmailSubmission = {
        ...data,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      };

      // For now, store in localStorage as a fallback
      // In production, this would be an API call
      const response = await this.sendToBackend('/email/submit', submission);
      
      if (!response.ok) {
        throw new Error('Failed to submit email');
      }

      // Also store locally for offline capability
      this.storeEmailLocally(submission);

      return { success: true, message: 'Email submitted successfully' };
    } catch (error) {
      console.error('Email submission error:', error);
      
      // Fallback to local storage
      this.storeEmailLocally({
        ...data,
        timestamp: new Date().toISOString(),
        userAgent: navigator.userAgent
      });

      return { success: true, message: 'Email submitted successfully (stored locally)' };
    }
  }

  async submitReadinessIndex(email: string, score: number, answers: Record<string, any>): Promise<{ success: boolean; message: string }> {
    try {
      const result: ReadinessIndexResult = {
        email,
        score,
        category: this.getScoreCategory(score),
        recommendations: this.generateRecommendations(score, answers),
        completedAt: new Date().toISOString()
      };

      const response = await this.sendToBackend('/readiness-index/submit', result);
      
      if (!response.ok) {
        throw new Error('Failed to submit readiness index');
      }

      // Store locally as backup
      this.storeReadinessIndexLocally(result);

      return { success: true, message: 'Readiness index submitted successfully' };
    } catch (error) {
      console.error('Readiness index submission error:', error);
      
      // Fallback to local storage
      this.storeReadinessIndexLocally({
        email,
        score,
        category: this.getScoreCategory(score),
        recommendations: this.generateRecommendations(score, answers),
        completedAt: new Date().toISOString()
      });

      return { success: true, message: 'Readiness index submitted successfully (stored locally)' };
    }
  }

  async requestCertificate(email: string, name: string, courseId: string): Promise<{ success: boolean; message: string }> {
    try {
      const certificateRequest = {
        email,
        name,
        courseId,
        requestedAt: new Date().toISOString()
      };

      const response = await this.sendToBackend('/certificate/request', certificateRequest);
      
      if (!response.ok) {
        throw new Error('Failed to request certificate');
      }

      return { success: true, message: 'Certificate request submitted successfully' };
    } catch (error) {
      console.error('Certificate request error:', error);
      return { success: false, message: 'Failed to request certificate. Please try again.' };
    }
  }

  private async sendToBackend(endpoint: string, data: any): Promise<Response> {
    return fetch(`${this.baseUrl}${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
  }

  private storeEmailLocally(submission: EmailSubmission): void {
    try {
      const existingEmails = JSON.parse(localStorage.getItem('emailSubmissions') || '[]');
      existingEmails.push(submission);
      localStorage.setItem('emailSubmissions', JSON.stringify(existingEmails));
    } catch (error) {
      console.error('Failed to store email locally:', error);
    }
  }

  private storeReadinessIndexLocally(result: ReadinessIndexResult): void {
    try {
      const existingResults = JSON.parse(localStorage.getItem('readinessIndexResults') || '[]');
      existingResults.push(result);
      localStorage.setItem('readinessIndexResults', JSON.stringify(existingResults));
    } catch (error) {
      console.error('Failed to store readiness index locally:', error);
    }
  }

  private getScoreCategory(score: number): string {
    if (score >= 90) return 'AI Implementation Leader';
    if (score >= 75) return 'AI Implementation Ready';
    if (score >= 60) return 'AI Awareness Developing';
    if (score >= 45) return 'AI Learning Required';
    return 'AI Education Essential';
  }

  private generateRecommendations(score: number, answers: Record<string, any>): string[] {
    const recommendations: string[] = [];

    if (score >= 90) {
      recommendations.push('Consider leading AI implementation initiatives in your organization');
      recommendations.push('Explore advanced clinical AI specialization courses');
      recommendations.push('Mentor colleagues in AI adoption and best practices');
    } else if (score >= 75) {
      recommendations.push('You\'re ready to begin implementing AI tools in your practice');
      recommendations.push('Consider intermediate AI courses for deeper expertise');
      recommendations.push('Start with low-risk AI applications to build experience');
    } else if (score >= 60) {
      recommendations.push('Complete the AI Literacy for Healthcare Professionals course');
      recommendations.push('Focus on understanding AI limitations and risks');
      recommendations.push('Attend AI in healthcare workshops and conferences');
    } else if (score >= 45) {
      recommendations.push('Start with foundational AI education courses');
      recommendations.push('Learn about basic machine learning concepts');
      recommendations.push('Understand regulatory requirements for AI in healthcare');
    } else {
      recommendations.push('Begin with basic AI concepts and terminology');
      recommendations.push('Complete comprehensive AI literacy training');
      recommendations.push('Focus on understanding the role of data in AI systems');
    }

    // Add specialty-specific recommendations based on answers
    // This would be more sophisticated in a real implementation
    recommendations.push('Subscribe to our newsletter for ongoing AI education updates');
    recommendations.push('Join our community of healthcare professionals learning about AI');

    return recommendations;
  }

  // Utility method to get stored emails (for admin purposes)
  getStoredEmails(): EmailSubmission[] {
    try {
      return JSON.parse(localStorage.getItem('emailSubmissions') || '[]');
    } catch (error) {
      console.error('Failed to retrieve stored emails:', error);
      return [];
    }
  }

  // Utility method to get stored readiness index results
  getStoredReadinessResults(): ReadinessIndexResult[] {
    try {
      return JSON.parse(localStorage.getItem('readinessIndexResults') || '[]');
    } catch (error) {
      console.error('Failed to retrieve stored readiness results:', error);
      return [];
    }
  }

  // Check if email is already subscribed
  async isEmailSubscribed(email: string): Promise<boolean> {
    try {
      const response = await fetch(`${this.baseUrl}/email/check/${encodeURIComponent(email)}`);
      if (response.ok) {
        const data = await response.json();
        return data.subscribed;
      }
    } catch (error) {
      console.error('Failed to check email subscription:', error);
    }

    // Fallback to local check
    const storedEmails = this.getStoredEmails();
    return storedEmails.some(submission => submission.email.toLowerCase() === email.toLowerCase());
  }
}

export const emailService = new EmailService();

