import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Privacy Policy</h1>
      <div className="space-y-4">
        <p>
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data in accordance with the General Data Protection Regulation (GDPR).
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Information We Collect</h2>
        <p>
          We collect only the personal information you voluntarily provide, such as your name and email address via the contact form. We also use privacy-focused, cookie-free analytics provided by Cloudflare to collect aggregated data such as page views, geographic location (by country), and device type. This data does not include personal identifiers or track individual users.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Legal Basis for Processing</h2>
        <p>
          We process your personal data only when we have a lawful basis to do so, including your consent, the performance of a contract, compliance with legal obligations, or legitimate interests that are not overridden by your rights.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
        <p>
          We use your data to respond to inquiries submitted through our contact form and to analyze site usage via anonymized metrics. If you contact us, we may reply by email to address your inquiry.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Cookies and Tracking</h2>
        <p>
          Our website does not use cookies or tracking technologies. We do not serve personalized ads or engage in behavioral tracking. We use Cloudflare Web Analytics, which respects user privacy and does not use cookies or store personal data.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Data Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information. We may share data with service providers under strict data processing agreements, or when required by law.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Data Retention</h2>
        <p>
          We retain contact form submissions only as long as necessary to address the inquiry or comply with legal obligations. Analytics data is aggregated and does not contain identifiable information.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Your Rights</h2>
        <p>
          Under the GDPR, you have the right to access, rectify, erase, restrict, or object to the processing of your data, and to data portability. You also have the right to lodge a complaint with a supervisory authority.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Data Security</h2>
        <p>
          We implement appropriate technical and organizational measures to protect your personal data against unauthorized access, disclosure, alteration, or destruction.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Changes to This Policy</h2>
        <p>
          We reserve the right to update this Privacy Policy. Changes will be posted on this page, and your continued use of the site constitutes your acceptance of the updated terms.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Contact</h2>
        <p>
          For questions or concerns about this policy or your personal data, contact us at contact@clinicalaiacademy.com.
        </p>

        <p className="text-sm text-gray-500 mt-4">
          This Privacy Policy was last updated on {new Date().toLocaleDateString()}.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
