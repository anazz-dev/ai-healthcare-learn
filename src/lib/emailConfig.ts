// Configuration file for Professional Email Service
// Add your service API keys and configuration here

export const emailServiceConfig = {
  // Mailchimp Configuration (Free tier: 500 contacts, 1000 emails/month)
  // Sign up at: https://mailchimp.com/pricing/
  mmailchimp: {
    enabled: true // no API keys or IDs here!
  },

  // ConvertKit Configuration (Free tier: 1000 subscribers)
  // Sign up at: https://convertkit.com/pricing
  convertkit: {
    // apiKey: 'your-convertkit-api-key-here',
    // formId: 'your-convertkit-form-id-here',
    enabled: false
  },

  // Netlify Forms Configuration (Free tier: 100 submissions/month)
  // Automatically available if deployed on Netlify
  netlify: {
    formName: 'clinical-ai-contact',
    enabled: true // Enable this if deploying to Netlify
  },

  // Custom Webhook Configuration
  // Use services like Zapier, Make.com, or your own webhook endpoint
  webhook: {
    // url: 'https://hooks.zapier.com/hooks/catch/your-webhook-url/',
    // secret: 'your-webhook-secret-key',
    enabled: false
  },

  // Email validation settings
  validation: {
    // Block disposable email domains
    blockDisposable: true,
    
    // Suggest corrections for common typos
    suggestCorrections: true,
    
    // Minimum email length
    minLength: 5,
    
    // Maximum email length
    maxLength: 254
  },

  // Rate limiting settings
  rateLimiting: {
    // Maximum attempts per time window
    maxAttempts: {
      perMinute: 3,
      per15Minutes: 5,
      perHour: 10
    },
    
    // Minimum time between submissions (seconds)
    minInterval: 30
  },

  // Security settings
  security: {
    // Enable encryption for local storage
    encryptLocalStorage: true,
    
    // Enable fingerprinting for duplicate detection
    enableFingerprinting: true,
    
    // Maximum stored submissions (to prevent storage bloat)
    maxStoredSubmissions: 200
  }
};

// Instructions for setting up free email services:

/*
1. MAILCHIMP SETUP (Recommended - Most features)
   - Go to https://mailchimp.com/pricing/
   - Sign up for free account (500 contacts, 1000 emails/month)
   - Create an audience/list
   - Go to Account > Extras > API keys
   - Generate API key
   - Get your List ID from Audience > Settings > Audience name and defaults
   - Update the config above with your API key and List ID

2. CONVERTKIT SETUP (Good for newsletters)
   - Go to https://convertkit.com/pricing
   - Sign up for free account (1000 subscribers)
   - Create a form
   - Go to Account > Account Settings > API
   - Copy your API key
   - Get your Form ID from the form settings
   - Update the config above with your API key and Form ID

3. NETLIFY FORMS SETUP (Easiest if using Netlify)
   - Deploy your site to Netlify
   - Forms are automatically detected and processed
   - View submissions in Netlify dashboard > Forms
   - No additional setup required

4. ZAPIER WEBHOOK SETUP (Most flexible)
   - Go to https://zapier.com
   - Create a new Zap with "Webhooks by Zapier" trigger
   - Copy the webhook URL
   - Connect to your preferred email service (Gmail, Outlook, etc.)
   - Update the config above with your webhook URL

5. MAKE.COM WEBHOOK SETUP (Alternative to Zapier)
   - Go to https://make.com
   - Create a new scenario with webhook trigger
   - Copy the webhook URL
   - Connect to your email service
   - Update the config above with your webhook URL

RECOMMENDED SETUP FOR BEGINNERS:
1. Start with Netlify Forms (if deploying to Netlify) - completely free and automatic
2. Add Mailchimp for more advanced email marketing features
3. Use local storage as backup (always enabled)

RECOMMENDED SETUP FOR ADVANCED USERS:
1. Mailchimp for main email list management
2. ConvertKit for newsletter/content marketing
3. Zapier webhook for custom integrations
4. Local storage as backup

The system will automatically try all enabled services and fall back to local storage
if external services fail, ensuring 100% data capture reliability.
*/

