import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  const { email, name, purpose = 'general' } = req.body;

  // Validate required fields
  if (!email) {
    return res.status(400).json({ message: 'Email is required' });
  }

  // Basic email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Invalid email format' });
  }

  try {
    // Get API key from environment variables
    const apiKey = process.env.MAILCHIMP_API_KEY;
    const listId = process.env.MAILCHIMP_AUDIENCE_ID;

    if (!apiKey) {
      console.error('MAILCHIMP_API_KEY not found in environment variables');
      return res.status(500).json({ message: 'Server configuration error' });
    }

    // Prepare the request body for Mailchimp
    const mailchimpData = {
      email_address: email,
      status: 'subscribed',
      merge_fields: {
        FNAME: name || '',
        PURPOSE: purpose,
        SOURCE: 'Clinical AI Academy',
        ORG: req.body.organization || '',
        ROLE: req.body.role || '',
        SPEC: req.body.specialty || '',
        MSG: req.body.message || ''
      },
      tags: [purpose, 'website-signup']
    };

    // Make request to Mailchimp API
    const response = await fetch(`https://us3.api.mailchimp.com/3.0/lists/${listId}/members`, {
      method: 'POST',
      headers: {
        'Authorization': `apikey ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(mailchimpData),
    });

    const data = await response.json();

    if (!response.ok) {
      // Handle specific Mailchimp errors
      if (response.status === 400 && data.title === 'Member Exists') {
        return res.status(200).json({ 
          message: 'Email already subscribed',
          status: 'existing_member'
        });
      }
      
      console.error('Mailchimp API error:', data);
      return res.status(response.status).json({ 
        message: data.detail || 'Failed to subscribe to newsletter',
        error: data
      });
    }

    // Success response
    return res.status(200).json({ 
      message: 'Successfully subscribed to newsletter',
      status: 'subscribed',
      member_id: data.id
    });

  } catch (error) {
    console.error('Server error:', error);
    return res.status(500).json({ 
      message: 'Internal server error',
      error: process.env.NODE_ENV === 'development' ? error.message : 'Server error'
    });
  }
}

