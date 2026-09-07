import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Impressum, privacy & educational disclaimer | Clinical AI Academy',
  description: 'Operator details, the educational scope of CAIA, and information about how this website handles personal data.',
};

export default function PrivacyPage() {
  return (
    <div className="academy-shell privacy-page">
      <p className="eyebrow">CLINICAL AI ACADEMY</p>
      <h1>Impressum &amp; privacy</h1>
      <p>Last updated: <time dateTime="2026-09-07">7 September 2026</time></p>

      <section aria-labelledby="operator">
        <h2 id="operator">Website operator (Impressum)</h2>
        <p>Clinical AI Academy (CAIA) is an independent educational information project run by an individual. Access is free; this website does not sell courses, certificates or consultations.</p>
        <address className="not-italic leading-relaxed mb-4">
          Ahmad Nazzal<br />
          Nightingalestrasse 1<br />
          Heidelberg<br />
          Germany
        </address>
        <p>Email for legal and privacy matters: <a className="text-link" href="mailto:contact@clinicalaiacademy.com">contact@clinicalaiacademy.com</a></p>
        <p>The operator above is the data controller for this website and the person responsible for its editorial content under § 18(2) MStV, at the same address.</p>
      </section>

      <section aria-labelledby="educational-scope">
        <h2 id="educational-scope">Educational disclaimer</h2>
        <p>The articles, learning modules and knowledge check provide general information only. They do not provide medical advice, diagnosis, treatment recommendations, legal advice or guidance for individual patient-care decisions. Using this website does not create a doctor–patient or advisory relationship.</p>
        <p>The knowledge check is an informal learning exercise. It does not establish professional competence, qualification, regulatory compliance or readiness to use an AI system. No certificate, accreditation or CME/CPD credit is awarded, and no educational, professional or clinical outcome is guaranteed.</p>
        <p>No guarantee is made that the information is accurate, complete, current or suitable for a particular purpose. Information may contain errors or become outdated. Independently verify sources and current guidance before professional use. The material does not replace clinical judgement, local procedures or the evaluation of an individual AI tool.</p>
        <p>Nothing in this notice excludes liability that cannot lawfully be excluded.</p>
      </section>

      <section aria-labelledby="learning-data">
        <h2 id="learning-data">The knowledge check and learning path</h2>
        <p>The knowledge check runs in your browser. Answers are held in the current page’s memory; they are not sent to a server or written to cookies or persistent browser storage by the check. Reloading the page starts a new check. No name, email address or account is required.</p>
        <p>All eight modules are open. Practice questions are optional and do not unlock or restrict other material. This version does not send practice answers to a server or save completion records. Learning suggestions are generated from your answers within the page and are not used to make decisions with legal or similar significant effects.</p>
        <p>Older versions may have stored progress or form details in your browser. You can remove those records using your browser’s controls for clearing this site’s data. Removing an old form does not itself delete information previously submitted to an external service.</p>
      </section>

      <section aria-labelledby="hosting">
        <h2 id="hosting">Hosting and technical request data</h2>
        <p>The website is hosted by Netlify, Inc. and uses Cloudflare, Inc. for content delivery and security. Visiting a page requires these services to process technical information, which may include your IP address, requested URL, request time, browser and device information, referring page, response status and traffic or security information.</p>
        <p>The purpose is to deliver the website, maintain availability, diagnose faults and protect against misuse. The legal basis for this website’s necessary delivery and security processing is Article 6(1)(f) GDPR: the legitimate interest in providing a reliable and secure public information website.</p>
        <p>Technical data retention depends on the data category, service configuration, operational or security purpose and applicable legal requirements. The providers describe their retention criteria in the privacy notices below; there is no single retention period for all hosting and security records.</p>
        <ul className="list-disc pl-6 mb-4 space-y-2">
          <li>Netlify, Inc., 101 2nd Street, San Francisco, CA 94105, USA: <a className="text-link" href="https://www.netlify.com/privacy/" target="_blank" rel="noopener noreferrer">privacy notice</a> and <a className="text-link" href="https://www.netlify.com/pdf/netlify-dpa.pdf" target="_blank" rel="noopener noreferrer">data processing agreement</a>.</li>
          <li>Cloudflare, Inc., 101 Townsend Street, San Francisco, CA 94107, USA: <a className="text-link" href="https://www.cloudflare.com/privacypolicy/" target="_blank" rel="noopener noreferrer">privacy notice</a> and <a className="text-link" href="https://www.cloudflare.com/cloudflare-customer-dpa/" target="_blank" rel="noopener noreferrer">data processing agreement</a>.</li>
        </ul>
        <p>Processing may take place outside the EU/EEA, including in the United States. The providers’ published terms describe the EU–US Data Privacy Framework for applicable transfers and EU Standard Contractual Clauses where required. Details and copies of the relevant safeguards are available through the agreements above. Providers may also process some technical data for their own purposes, as described in their privacy notices.</p>
      </section>

      <section aria-labelledby="cookies-external">
        <h2 id="cookies-external">Cookies and external resources</h2>
        <p>The website application does not include advertising cookies or visitor analytics scripts. The knowledge check and practice questions do not use cookies to remember answers. Hosting and security providers process technical request data as described above and may use technical mechanisms, including cookies where needed for the features in use. <a className="text-link" href="https://developers.cloudflare.com/fundamentals/reference/policies-compliances/cloudflare-cookies/" target="_blank" rel="noopener noreferrer">Cloudflare describes its security cookies here</a>.</p>
        <p>YouTube videos and the Notion resource hub are provided as ordinary links. Their players, pages and remote thumbnails are not embedded or loaded automatically by this website. Opening a link takes you to the external service, which processes your visit under its own privacy practices.</p>
        <p>The newsletter link opens Substack. Visiting this website or completing the knowledge check does not subscribe you to a newsletter. Any subscription you choose to make there is handled separately through that service. Published sources and other external links likewise lead to independently operated websites.</p>
      </section>

      <section aria-labelledby="correspondence">
        <h2 id="correspondence">Legal and privacy correspondence</h2>
        <p>If you email the address above, your email address, message and any information you choose to include are processed to handle the matter. This relies on Article 6(1)(c) GDPR where necessary to fulfil a legal obligation, such as responding to a data-protection request, or Article 6(1)(f) GDPR for other necessary correspondence. Messages are not used to subscribe you to marketing.</p>
        <p>Correspondence is retained for as long as needed to handle the matter and any applicable legal retention requirement or legal claim, and is then deleted when no retention purpose remains. Please do not send patient records or other sensitive medical information.</p>
      </section>

      <section aria-labelledby="your-rights">
        <h2 id="your-rights">Your data-protection rights</h2>
        <p>Where the GDPR’s conditions are met, you may request access, correction, deletion, restriction of processing or data portability. You may object, on grounds relating to your particular situation, to processing based on legitimate interests. If processing is based on consent, you may withdraw it without affecting the lawfulness of earlier processing.</p>
        <p>You may use the operator’s email or postal address above to exercise your rights. Answers held only in your browser are not available to the operator.</p>
      </section>

      <section aria-labelledby="notice-changes">
        <h2 id="notice-changes">Changes to this notice</h2>
        <p>This notice will be updated when the website’s features, service providers or operator details change. The date above identifies the latest revision.</p>
      </section>
    </div>
  );
}
