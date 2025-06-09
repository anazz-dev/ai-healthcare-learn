'use client';

import { useEffect, useRef, useState } from 'react';
import { Download, Share2 } from 'lucide-react';

/* ───────────────────────── props ──────────────────────────────── */
interface CertificateActionsProps {
  name: string;                // learner’s display name
}

/* ─────────────────────── component ────────────────────────────── */
export default function CertificateActions({ name }: CertificateActionsProps) {
  /* refs + client-only state */
  const certRef            = useRef<HTMLDivElement>(null);
  const [certificateId, setCertificateId] = useState('');
  const [awardDate,     setAwardDate]     = useState('');
  const [shareUrl,      setShareUrl]      = useState('');

  /* initialise once on the client */
  useEffect(() => {
    // random 8-char ID
    setCertificateId(Math.random().toString(36).slice(2, 10).toUpperCase());

    // date in the browser’s locale (avoids hydration mismatch)
    setAwardDate(
      new Date().toLocaleDateString(undefined, {
        year:  'numeric',
        month: 'long',
        day:   'numeric',
      }),
    );

    // LinkedIn share URL
    setShareUrl(
      `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(
        window.location.href,
      )}`,
    );
  }, []);

  /* print / save-PDF (native browser) */
  const handlePrint = () => window.print();

  /* ─────────────────────── markup ─────────────────────────────── */
  return (
    <>
      {/* ① import cursive font + print-only CSS */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Alex+Brush&display=swap');

        /* ① fit a single A4 portrait page, no browser margins */
        @page {
          size: A4 portrait;
          margin: 0;
        }

        /* ② hide everything except the certificate itself */
        @media print {
          body * {
            visibility: hidden !important;
          }
          .print-area,
          .print-area * {
            visibility: visible !important;
          }

          /* ③ guarantee the card is the exact page size */
          .print-area {
            width: 210mm;
            height: 297mm;
            /* remove our box-shadow & border so nothing overflows */
            border: 0;
            box-shadow: none;
            margin: 0;
            padding: 25mm 20mm;    /* inner “margins” that are part of the design */
            position: absolute;
            left: 0;
            top: 0;
          }
        }
      `}</style>


      {/* ② certificate card */}
      <div
        ref={certRef}
        className="print-area mx-auto max-w-3xl rounded-md border-4 border-blue-700
                   bg-white p-10 text-center shadow-2xl"
        style={{ fontFamily: 'Georgia, serif' }}
      >
        <h1 className="text-4xl font-bold uppercase tracking-widest text-blue-800">
          Clinical AI Academy
        </h1>
        <p className="mt-2 text-lg italic text-gray-600">Certificate&nbsp;of&nbsp;Completion</p>

        <p className="mt-6 text-sm text-gray-500">This is to certify that</p>
        <h2 className="my-4 inline-block border-b-2 border-dotted border-gray-300 px-4
                       text-3xl font-semibold text-gray-900">
          {name}
        </h2>
        <p className="mb-6 text-md text-gray-700">has successfully completed the&nbsp;course</p>

        <h3 className="mb-4 text-xl font-bold text-blue-700">
          AI&nbsp;Literacy&nbsp;for&nbsp;Healthcare&nbsp;Professionals
        </h3>

        <p className="mx-auto max-w-md text-sm leading-relaxed text-gray-600">
          A CME/CPD-aligned programme covering AI fundamentals, clinical use-cases, ethics and safety
          — totalling over&nbsp;<strong>4&nbsp;hours</strong> of accredited education.
        </p>

        <div className="mt-8 text-sm italic text-gray-500">Awarded on {awardDate}</div>

        {/* signature & ID */}
        <div className="mt-10 flex flex-wrap items-end justify-between text-xs text-gray-600">
          <div className="text-left">
            <p
              className="mb-1 text-lg leading-none text-blue-900"
              style={{ fontFamily: "'Alex Brush', cursive" }}
            >
              Ahmad&nbsp;Nazzal
            </p>
            <div className="mx-auto mb-1 w-40 border-t border-gray-400" />
            <p className="font-semibold">Dr.&nbsp;Ahmad&nbsp;Nazzal</p>
            <p>Course&nbsp;Director</p>
          </div>

          <div className="text-right">
            <p className="text-gray-500">Certificate&nbsp;ID:</p>
            <p className="font-mono text-sm text-blue-700">{certificateId}</p>
          </div>
        </div>

        <p className="mt-6 text-[10px] italic text-gray-400">
          Verified by Clinical&nbsp;AI&nbsp;Academy • AI for Healthcare Series
        </p>
      </div>

      {/* ③ action buttons (hidden when printing) */}
      <div className="mt-6 flex justify-center gap-4 print:hidden">
        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 rounded bg-green-600
                     px-4 py-2 text-white hover:bg-green-700"
        >
          <Download className="h-4 w-4" />
          Print&nbsp;/&nbsp;Save&nbsp;PDF
        </button>

        <a
          href={shareUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded bg-blue-600
                     px-4 py-2 text-white hover:bg-blue-700"
        >
          <Share2 className="h-4 w-4" />
          Share&nbsp;on&nbsp;LinkedIn
        </a>
      </div>
    </>
  );
}
