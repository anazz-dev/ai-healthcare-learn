# Environment Variables Setup

## Required Environment Variables

Create a `.env.local` file in your project root with the following variables:

```bash
# Mailchimp Configuration
MAILCHIMP_API_KEY=your_mailchimp_api_key_here
MAILCHIMP_LIST_ID=your_mailchimp_list_id_here

# Next.js Configuration  
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

## How to Get Your Mailchimp Credentials

### API Key:
1. Log into your Mailchimp account
2. Go to Account → Extras → API keys
3. Create a new API key or use an existing one
4. Copy the key (format: `xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx-us3`)

### List ID:
1. Go to Audience → All contacts
2. Click on Settings → Audience name and defaults
3. Copy the List ID from the "Audience ID" field

## Security Notes

- ✅ **NEVER** commit `.env.local` to version control
- ✅ The `.env.local` file is already in `.gitignore`
- ✅ API keys are only accessible server-side
- ✅ Frontend code cannot access these sensitive credentials

## Production Deployment

For production deployment, set these environment variables in your hosting platform:
- Vercel: Project Settings → Environment Variables
- Netlify: Site Settings → Environment Variables  
- Other platforms: Follow their environment variable documentation

