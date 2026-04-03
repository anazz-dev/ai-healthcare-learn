import React from 'react';

const PrivacyPolicyPage: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">

      <h1 className="text-3xl font-bold mb-6">Impressum & Privacy Policy</h1>

      {/* IMPRESSUM */}
      <div className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold mb-3">Impressum</h2>
        <p>
          Dr. Ahmad Nazzal<br />
          Nightingalestrasse 1<br />
          69115 Heidelberg, Germany
        </p>
        <p>
          <strong>E-Mail:</strong> contact@clinicalaiacademy.com
        </p>
        <p className="mt-2">
          Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV:<br />
          Dr. Ahmad Nazzal, Nightingalestrasse 1, 69115 Heidelberg
        </p>
      </div>

      {/* DISCLAIMER */}
      <div className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold mb-3">Haftungshinweis / Disclaimer</h2>
        <p>
          All content provided by Clinical AI Academy is for educational and informational purposes only
          and does not constitute medical, clinical, or professional advice. It is not intended to replace
          independent clinical judgment, patient assessment, or the guidance of a qualified healthcare
          professional.
        </p>
      </div>

      {/* TERMS OF USE */}
      <div className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold mb-3">Terms of Use</h2>
        <p>
          By accessing and using Clinical AI Academy, you agree to the following terms. All content on
          this platform — including courses, assessments, articles, and certificates — is provided for
          educational and informational purposes only.
        </p>
        <p>
          The Certificate of Completion issued upon finishing the course recognises your engagement with
          the educational material and does not constitute a formally accredited CME/CPD credit, medical
          qualification, or professional certification.
        </p>
        <p>
          Clinical AI Academy retains all intellectual property rights over the content, design, and
          materials published on this platform. You may not reproduce, redistribute, or repurpose any
          content without prior written permission.
        </p>
        <p>
          Clinical AI Academy, its founder, and its volunteers accept no liability for any clinical
          decisions, outcomes, or actions taken based on the content provided. Use of this platform is
          at your own risk and discretion.
        </p>
      </div>

      {/* CME/CPD CLARIFICATION */}
      <div className="space-y-4 mb-10">
        <h2 className="text-2xl font-semibold mb-3">CME/CPD Accreditation Notice</h2>
        <p>
          Our curriculum is designed in alignment with established CME/CPD learning objectives and
          competency frameworks, but Clinical AI Academy is not a formally accredited CME/CPD provider.
          Completion of our courses does not award official CME/CPD credits.
        </p>
        <p>
          Healthcare professionals seeking formal credits should check with their local accrediting body
          regarding eligibility for self-directed learning recognition.
        </p>
      </div>

      <hr className="my-8 border-gray-200" />

      {/* PRIVACY POLICY */}
      <h2 className="text-3xl font-bold mb-6">Privacy Policy</h2>
      <div className="space-y-4">
        <p>
          Your privacy is important to us. This Privacy Policy explains how we collect, use, and protect your personal data in accordance with the General Data Protection Regulation (GDPR) and other applicable privacy laws.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Information We Collect</h2>
        <p>
          We collect the following types of personal information:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Contact Information:</strong> Name and email address when you submit forms, take assessments, or request certificates</li>
          <li><strong>Assessment Data:</strong> Your responses to skills assessments and quizzes are processed locally in your browser to generate your personalised results. We do not store or collect your individual answers on our servers. Only aggregated, anonymised usage data may be collected to improve the platform.</li>
          <li><strong>Learning Progress:</strong> Module completion status, course progress, and certificate generation requests are cachced on your browser </li>
          <li><strong>Technical Data:</strong> Browser type, device information, and usage analytics through privacy-focused, cookie-free analytics</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">How We Collect Information</h2>
        <p>
          We collect information through:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Contact forms and email collection forms</li>
          <li>Clinical AI Skills Check assessments</li>
          <li>Course module interactions and completions</li>
          <li>Certificate generation requests</li>
          <li>Local browser storage for user experience enhancement</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Legal Basis for Processing</h2>
        <p>
          We process your personal data based on:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Consent:</strong> When you voluntarily provide information through forms and assessments</li>
          <li><strong>Legitimate Interest:</strong> To provide educational services, generate certificates, and improve our platform</li>
          <li><strong>Contract Performance:</strong> To deliver the educational content and services you request</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">How We Use Your Information</h2>
        <p>
          We use your data to:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Provide personalized assessment results and recommendations</li>
          <li>Generate and deliver professional certificates</li>
          <li>Track learning progress and course completion</li>
          <li>Respond to inquiries and provide customer support</li>
          <li>Send educational content and course updates (with your consent)</li>
          <li>Analyze platform usage to improve our services</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Data Storage and Security</h2>
        <p>
          Your data is stored using the following methods:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Local Storage:</strong> Assessment results and progress are stored locally in your browser</li>
          <li><strong>Secure Servers:</strong> Contact information and certificates are stored on secure, encrypted servers</li>
          <li><strong>Data Protection:</strong> We implement appropriate technical and organizational measures to protect your data</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Cookies and Tracking</h2>
        <p>
          Our website uses minimal tracking technologies:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>No Cookies:</strong> We do not use traditional cookies for tracking</li>
          <li><strong>Local Storage:</strong> We use browser local storage to save your progress and preferences</li>
          <li><strong>Analytics:</strong> We use privacy-focused analytics that do not track individual users</li>
          <li><strong>No Behavioral Tracking:</strong> We do not engage in cross-site tracking or behavioral advertising</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Data Sharing</h2>
        <p>
          We do not sell, trade, or rent your personal information to third parties. We may share data only in the following circumstances:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>With service providers under strict data processing agreements</li>
          <li>When required by law or legal process</li>
          <li>To protect our rights, property, or safety</li>
          <li>With your explicit consent</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Data Retention</h2>
        <p>
          We retain your data as follows:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Contact Information:</strong> Retained until you request deletion or withdraw consent</li>
          <li><strong>Assessment Results:</strong> Stored locally in your browser and can be cleared by you at any time</li>
          <li><strong>Certificates:</strong> Retained indefinitely for verification purposes unless deletion is requested</li>
          <li><strong>Analytics Data:</strong> Aggregated and anonymized data with no retention limits</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Your Rights</h2>
        <p>
          Under GDPR and other privacy laws, you have the right to:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li><strong>Access:</strong> Request a copy of your personal data</li>
          <li><strong>Rectification:</strong> Correct inaccurate or incomplete data</li>
          <li><strong>Erasure:</strong> Request deletion of your personal data</li>
          <li><strong>Restriction:</strong> Limit how we process your data</li>
          <li><strong>Portability:</strong> Receive your data in a portable format</li>
          <li><strong>Objection:</strong> Object to processing based on legitimate interests</li>
          <li><strong>Withdraw Consent:</strong> Withdraw consent for data processing at any time</li>
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Children's Privacy</h2>
        <p>
          Our services are intended for healthcare professionals and are not directed to children under 16. We do not knowingly collect personal information from children under 16.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">International Data Transfers</h2>
        <p>
          Your data may be processed in countries outside your residence. We ensure appropriate safeguards are in place for any international data transfers.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Changes will be posted on this page with an updated effective date. Your continued use of our services constitutes acceptance of any changes.
        </p>

        <h2 className="text-2xl font-semibold mt-6 mb-3">Contact Us</h2>
        <p>
          For questions about this Privacy Policy or to exercise your rights, contact us at:
        </p>
        <ul className="list-disc ml-6 space-y-2">
          <li>Contact: contact@clinicalaiacademy.com</li>
        </ul>

        <p className="text-sm text-gray-500 mt-6">
          <strong>Effective Date:</strong> {new Date().toLocaleDateString()}
        </p>
        <p className="text-sm text-gray-500">
          <strong>Last Updated:</strong> {new Date().toLocaleDateString()}
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicyPage;
