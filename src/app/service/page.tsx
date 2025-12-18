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
        A focused 30-minute session to critically evaluate AI outputs used in
        clinical workflows: what is sound, what is missing, and where safety
        risks or hallucinations may occur.
      </p>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What this service is</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Educational, non-binding peer review for clinicians</li>
          <li>Assessment of AI output quality, safety, and guideline alignment</li>
          <li>Discussion of known failure modes and uncertainty</li>
          <li>Prompt and workflow critique (optional)</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">What this is not</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>No diagnosis or treatment recommendations</li>
          <li>No second medical opinion</li>
          <li>No physician–patient relationship</li>
          <li>No recording or data retention</li>
        </ul>
      </section>

      <section className="mb-10">
        <h2 className="text-2xl font-semibold mb-3">Format & pricing</h2>
        <p>
          30-minute live Zoom session · €100 · invoice (“Rechnung”) sent after
          the meeting.
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
