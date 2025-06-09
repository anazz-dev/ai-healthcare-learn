'use client';

import { useRef, useState, useEffect } from 'react';
import { Download, Share2 } from 'lucide-react';

/* props */
interface CertificateActionsProps {
  name: string;
}

export default function CertificateActions({ name }: CertificateActionsProps) {
  /* refs + state --------------------------------------------------- */
  const certRef = useRef<HTMLDivElement>(null);

  const [certificateId, setCertificateId] = useState('');   // client-only
  const [awardDate,     setAwardDate]     = useState('');   // client-only
  const [shareUrl,      setShareUrl]      = useState('');   // client-only

  /* client-side initialisation ------------------------------------- */
  useEffect(() => {
    // random ID
    setCertificateId(Math.random().toString(36).slice(2, 10).toUpperCase());

    // formatted date in the *browser’s* locale → guarantees match
    setAwardDate(
      new Date().toLocaleDateString(undefined, {
        year:  'numeric',
        month: 'long',
        day:   'numeric',
      }),
    );

    // share URL
    setShareUrl(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href,
      )}`,
    );
  }, []);

  /* PDF download ---------------------------------------------------- */
  const handleDownload = async () => {
      if (!certRef.current || typeof window === 'undefined') return;

      const html2pdf = (await import('html2pdf.js')).default;

      html2pdf()
        .from(certRef.current)
        .set({
          filename: `${name}_certificate.pdf`,
          html2canvas: { scale: 2 },
          jsPDF: { format: 'a4', orientation: 'portrait' }
        })
        .save();
  };



  /* markup ---------------------------------------------------------- */
  return (
    <>
      {/* cursive font for the signature */}
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');`}</style>

      {/* certificate */}
      <div
        ref={certRef}
        className="mx-auto max-w-3xl rounded-md border-4 border-blue-700 bg-white p-10 text-center shadow-2xl print:border-2"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        <h1 className="text-4xl font-bold uppercase tracking-widest text-blue-800">
          Clinical AI Academy
        </h1>
        <p className="mt-2 text-lg italic text-gray-600">Certificate of Completion</p>

        <p className="mt-6 text-sm text-gray-500">This is to certify that</p>
        <h2 className="my-4 inline-block border-b-2 border-dotted border-gray-300 px-4 text-3xl font-semibold text-gray-900">
          {name}
        </h2>
        <p className="mb-6 text-md text-gray-700">has successfully completed the course</p>

        <h3 className="mb-4 text-xl font-bold text-blue-700">
          AI Literacy for Healthcare Professionals
        </h3>

        <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-600">
          A CME/CPD-aligned programme covering AI fundamentals, clinical use-cases, ethics, and safety
          in practice — totalling over <strong>4 hours</strong> of accredited education.
        </p>

        {/* ← the date now comes from client state, so no mismatch */}
        <div className="mt-8 text-sm italic text-gray-500">
          Awarded on {awardDate || '—'}
        </div>

        {/* signature + ID */}
        <div className="mt-10 flex flex-wrap items-end justify-between text-xs text-gray-600">
          <div className="text-left">
            <p
              className="mb-1 text-lg leading-none text-blue-900"
              style={{ fontFamily: "'Alex Brush', cursive" }}
            >
              Ahmad Nazzal
            </p>
            <div className="mx-auto mb-1 w-40 border-t border-gray-400" />
            <p className="font-semibold">Dr.&nbsp;Ahmad Nazzal</p>
            <p>Course Director</p>
          </div>

          <div className="text-right">
            <p className="text-gray-500">Certificate ID:</p>
            <p className="font-mono text-sm text-blue-700">
              {certificateId || '—'}
            </p>
          </div>
        </div>

        <p className="mt-6 text-[10px] italic text-gray-400">
          Verified by Clinical AI Academy • AI for Healthcare Series
        </p>
      </div>

      {/* action buttons */}
      <div className="mt-6 flex justify-center gap-4 print:hidden">
        <button
          onClick={handleDownload}
          className="inline-flex items-center gap-2 rounded bg-green-600 px-4 py-2 text-white hover:bg-green-700"
        >
          <Download className="h-4 w-4" />
          Download PDF
        </button>

        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
        >
          <Share2 className="h-4 w-4" />
          Share on LinkedIn
        </a>
      </div>
    </>
  );
}
