// Simple setup instructions for Mailchimp integration
// Replace the placeholder values in emailConfig.ts with your actual Mailchimp credentials

export const MAILCHIMP_SETUP_INSTRUCTIONS = `
🔧 QUICK MAILCHIMP SETUP (5 minutes):

1. Go to https://mailchimp.com and sign up for free
2. Create an audience/list for your contacts
3. Get your API key:
   - Go to Account > Extras > API keys
   - Generate a new API key
   - Copy the key (starts with something like "abc123-us1")

4. Get your List ID:
   - Go to Audience > All contacts
   - Click Settings > Audience name and defaults
   - Copy the List ID (looks like "a1b2c3d4e5")

5. Update your emailConfig.ts file:
   - Replace 'your-mailchimp-api-key-here' with your actual API key
   - Replace 'your-mailchimp-list-id-here' with your actual List ID
   - Make sure enabled: true

Example:
mailchimp: {
  apiKey: 'abc123def456-us1',
  listId: 'a1b2c3d4e5',
  enabled: true
}

That's it! Your forms will now automatically sync to Mailchimp.
`;

// For testing without Mailchimp, the system will fall back to local storage
// All email submissions are always saved locally as backup

