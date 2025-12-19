// src/app/service/page.tsx

export const metadata = {
  title: "AI Output Review for Clinicians | Clinical AI Academy",
  description:
    "Clinician-to-clinician educational review of AI-generated clinical content. Non-binding. Book via Calendly.",
};

export default function ServicePage() {
  return (
    <main className="max-w-5xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold mb-6">
        Clinician-to-clinician review of AI-generated clinical content
      </h1>

      <p className="text-lg text-gray-600 mb-8">
        This service exists because clinicians are increasingly expected to interpret,
        contextualize, and take responsibility for AI-mediated clinical outputs—often
        without formal training or institutional support.
      </p>

      <p className="text-lg text-gray-600 mb-8">
        A focused 30-minute discussion between clinicians to critically
        examine AI-generated outputs used in clinical workflows—what appears well-supported,
        what is incomplete or uncertain,
        and where safety risks or hallucinations may reasonably arise.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What this service is</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Educational, non-binding peer discussion between clinicians</li>
          <li>Structured evaluation of AI-generated content with attention to quality, safety, and guideline consistency</li>
          <li>Identification of known failure modes, uncertainty, and limitations</li>
          <li>Optional discussion of prompts and workflow design from a clinical perspective</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What this is not</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>No diagnosis, treatment recommendation, or clinical decision-making</li>
          <li>No second medical opinion</li>
          <li>No physician–patient relationship</li>
          <li>No recording, storage, or data retention</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Format & pricing</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>30-minute live Zoom session</li>
          <li>€100 per session</li>
          <li>Invoice (“Rechnung”) issued after the meeting</li>
        </ul>
        <p>
          The fee reflects time and preparation for a structured educational discussion;
          it does not imply endorsement, certification, or clinical approval.
        </p>
      </section>

      <a
        href="https://calendly.com/contact-clinicalaiacademy/30min"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block mt-6 rounded-lg bg-blue-600 px-6 py-3 text-white font-semibold hover:bg-blue-700"
      >
        Book on Calendly
      </a>

      <p className="mt-8 text-sm text-gray-500">
        Educational clinician support only. Final clinical responsibility
        remains with the treating clinician or team.
      </p>
    </main>
  );
}
