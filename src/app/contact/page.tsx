import React from 'react';

// Placeholder component for the Contact page
const ContactPage: React.FC = () => {
  // Replace with your actual contact email address
  const CONTACT_EMAIL = "contact@clinicalaiacademy.com"; 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Services Section */}
        {/* Contact Instruction Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Do you have a question, interested in collaboration, partnership, and support? Please contact us directly via email:
          </p>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-center">
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
            {CONTACT_EMAIL === "your.email@example.com" && (
               <p className="text-xs text-yellow-600 dark:text-yellow-400 mt-2">(Please update this placeholder email in `src/app/contact/page.tsx`)</p>
            )}
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            We aim to respond to all inquiries within 1-2 business days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;

