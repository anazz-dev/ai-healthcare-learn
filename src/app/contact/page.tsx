import React from 'react';

const ContactPage: React.FC = () => {
  const CONTACT_EMAIL = "contact@clinicalaiacademy.com"; 

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8 text-center">Contact Us & Services</h1>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Services Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Services</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            We communicate clinical AI.
          </p>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            For teams building, adopting, or evaluating AI in healthcare, we create content that makes your AI understandable, trustworthy, and usable.
          </p>
           <p className="mb-6 text-gray-700 dark:text-gray-300">
            We write the following documents:
          </p>
          <ul className="space-y-3 list-disc list-inside text-gray-700 dark:text-gray-300">
            <li>Clinical evaluation reports</li>
            <li>Literature reviews and evidence summaries</li>
            <li>Regulatory submissions and funding proposals</li>
            <li>White papers, blogs, and strategic briefings</li>
            <li>Pitch decks and stakeholder presentations</li>
          </ul>
        </div>

        {/* Contact Instruction Section */}
        <div>
          <h2 className="text-2xl font-semibold mb-4">Get In Touch</h2>
          <p className="mb-6 text-gray-700 dark:text-gray-300">
            Have a question or want to explore how we can support your project? Let’s talk. Book a free 30-minute call to see if we’re a good fit.
          </p>
          <div className="bg-gray-100 dark:bg-gray-700 p-4 rounded-md text-center">
            <a 
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-lg font-medium text-indigo-600 dark:text-indigo-400 hover:underline"
            >
              {CONTACT_EMAIL}
            </a>
          </div>
          <p className="mt-4 text-sm text-gray-600 dark:text-gray-400">
            We aim to respond within 1–2 business days.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
