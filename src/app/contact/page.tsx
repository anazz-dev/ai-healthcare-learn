import React from 'react';

// Placeholder component for the Contact page
const ContactPage: React.FC = () => {
  // Replace with your actual contact email address
  const CONTACT_EMAIL = "contact@clinicalaiacademy.com"; 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us & Services</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Services Section */}
        <div>
         <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
  We communicate clinical AI. For teams building, adopting, or evaluating AI in healthcare, we create content that makes your AI understandable, trustworthy, and usable.
          </p>
          <p className="mb-4 text-gray-700 dark:text-gray-300">We write the following documents:</p>
          <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300">
          <li>Clinical evaluation reports</li>
          <li>Literature reviews and evidence summaries</li>
          <li>Science submissions and funding proposals</li>
          <li>White papers, blogs, and strategic briefings</li>
          <li>Pitch decks and stakeholder presentations</li>
          </ul>
        </div>

        {/* Contact Instruction Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Interested in our services, have a question, or want to book your free initial discussion? Please contact us directly via email:
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

