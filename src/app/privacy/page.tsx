import React from 'react';

// Basic placeholder component for the Privacy Policy page
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
      We may collect personal data such as your name, email address, IP address, and browser information when you interact with our site. We also collect usage data through cookies and similar technologies.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-3">Legal Basis for Processing</h2>
    <p>
      We process your personal data only when we have a lawful basis to do so, including your consent, the performance of a contract, compliance with legal obligations, or legitimate interests that are not overridden by your rights.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
    <p>
      We use your data to provide and improve our services, respond to inquiries, analyze site usage, and ensure security. If you subscribe, we may also send occasional emails, which you can opt out of at any time.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-3">Cookies and Tracking Technologies</h2>
    <p>
      We use cookies to enhance your browsing experience. You may control cookie settings through your browser. By continuing to use our site, you consent to our use of cookies as described in our Cookie Policy.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-3">Data Sharing</h2>
    <p>
      We do not sell, trade, or rent your personal information. We may share data with service providers under strict data processing agreements, or when required by law.
    </p>

    <h2 className="text-2xl font-semibold mt-6 mb-3">Data Retention</h2>
    <p>
      We retain personal data only as long as necessary for the purposes stated in this policy or to comply with legal obligations. Data no longer needed will be securely deleted or anonymized.
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
      For questions or concerns about this policy or your personal data, contact us at [insert email address or postal address].
    </p>

    <p className="text-sm text-gray-500 mt-4">
      This Privacy Policy was last updated on {new Date().toLocaleDateString()}.
    </p>
  </div>
</div>

  );
};

export default PrivacyPolicyPage;

