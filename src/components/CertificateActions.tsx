'use client';

import { useEffect, useRef, useState } from 'react';
import { Download } from 'lucide-react';

interface CertificateActionsProps {
  name: string;
}

export default function CertificateActions({ name }: CertificateActionsProps) {
  const certRef = useRef<HTMLDivElement>(null);
  const [certificateId, setCertificateId] = useState('');
  const [awardDate, setAwardDate] = useState('');

  useEffect(() => {
    setCertificateId(Math.random().toString(36).slice(2, 10).toUpperCase());
    setAwardDate(
      new Date().toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
      }),
    );
  }, []);

  const handlePrint = () => window.print();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Great+Vibes&family=Playfair+Display:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');

        @media print {
          body * { visibility: hidden !important; }
          #certificate-card, #certificate-card * { visibility: visible !important; }
          #certificate-card {
            position: fixed !important;
            inset: 0 !important;
            width: 100vw !important;
            height: 100vh !important;
            margin: 0 !important;
            padding: 0 !important;
            box-shadow: none !important;
            border-radius: 0 !important;
          }
          .no-print { display: none !important; }
        }
      `}</style>

      {/* Certificate card */}
      <div
        id="certificate-card"
        ref={certRef}
        style={{
          background: 'linear-gradient(135deg, #fefefe 0%, #f8f6f0 100%)',
          border: '2px solid #b8960c',
          borderRadius: '8px',
          padding: '48px 56px',
          maxWidth: '860px',
          margin: '0 auto',
          fontFamily: "'Inter', sans-serif",
          boxShadow: '0 4px 24px rgba(0,0,0,0.10)',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Gold corner accents */}
        <div style={{ position: 'absolute', top: 0, left: 0, width: 60, height: 60, borderTop: '5px solid #b8960c', borderLeft: '5px solid #b8960c', borderRadius: '8px 0 0 0' }} />
        <div style={{ position: 'absolute', top: 0, right: 0, width: 60, height: 60, borderTop: '5px solid #b8960c', borderRight: '5px solid #b8960c', borderRadius: '0 8px 0 0' }} />
        <div style={{ position: 'absolute', bottom: 0, left: 0, width: 60, height: 60, borderBottom: '5px solid #b8960c', borderLeft: '5px solid #b8960c', borderRadius: '0 0 0 8px' }} />
        <div style={{ position: 'absolute', bottom: 0, right: 0, width: 60, height: 60, borderBottom: '5px solid #b8960c', borderRight: '5px solid #b8960c', borderRadius: '0 0 8px 0' }} />

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '24px' }}>
          <p style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, letterSpacing: '3px', textTransform: 'uppercase', color: '#b8960c', margin: '0 0 8px' }}>
            Clinical AI Academy
          </p>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '32px', fontWeight: 700, color: '#1a1a2e', margin: '0 0 4px' }}>
            Certificate of Completion
          </h1>
          <div style={{ width: '80px', height: '2px', background: 'linear-gradient(90deg, transparent, #b8960c, transparent)', margin: '12px auto' }} />
        </div>

        {/* Recipient */}
        <div style={{ textAlign: 'center', margin: '20px 0' }}>
          <p style={{ fontSize: '13px', color: '#555', margin: '0 0 6px', letterSpacing: '1px', textTransform: 'uppercase' }}>
            This is to certify that
          </p>
          <p style={{ fontFamily: "'Playfair Display', serif", fontSize: '36px', fontWeight: 700, color: '#1a1a2e', margin: '0 0 6px' }}>
            {name}
          </p>
          <p style={{ fontSize: '13px', color: '#555', margin: 0 }}>
            has successfully completed all eight modules of the course
          </p>
        </div>

        {/* Course title */}
        <div style={{ textAlign: 'center', margin: '16px 0 24px' }}>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: '20px', fontWeight: 700, color: '#1a1a2e', margin: '0 0 6px' }}>
            AI Literacy for Healthcare Professionals
          </h2>
          <p style={{ fontSize: '12px', color: '#666', margin: 0 }}>
            Clinical AI Academy · AI for Healthcare Series · 8 modules · approx. 8 hours CPD
          </p>
        </div>

        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, #d4af37, transparent)', margin: '16px 0' }} />

        {/* Competencies achieved */}
        <div style={{ margin: '16px 0' }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#b8960c', margin: '0 0 10px', textAlign: 'center' }}>
            Competencies Achieved
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px 24px' }}>
            {[
              'AI fundamentals and machine-learning principles',
              'How AI models learn, fail, and generalise',
              'Clinical AI performance and real-world evidence appraisal',
              'Ethics, bias, explainability, and post-deployment oversight',
              'Evaluating and validating AI tools using clinical metrics',
              'AI governance, regulation, and institutional policy (FDA SaMD / EU MDR)',
              'Safe and responsible use of large language models (LLMs) in clinical settings',
              'AI implementation, change management, and workforce integration',
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '6px', fontSize: '11px', color: '#333' }}>
                <span style={{ color: '#b8960c', fontWeight: 700, marginTop: '1px', flexShrink: 0 }}>✓</span>
                <span>{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={{ width: '100%', height: '1px', background: 'linear-gradient(90deg, transparent, #d4af37, transparent)', margin: '16px 0' }} />

        {/* EU AI Act alignment box */}
        <div style={{
          background: 'linear-gradient(135deg, #f0f4ff, #e8f0fe)',
          border: '1px solid #c7d7f7',
          borderLeft: '4px solid #2563eb',
          borderRadius: '6px',
          padding: '14px 18px',
          margin: '16px 0',
        }}>
          <p style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#1d4ed8', margin: '0 0 6px' }}>
            EU AI Act — AI Literacy Alignment (Article 4)
          </p>
          <p style={{ fontSize: '11px', color: '#1e3a6e', margin: '0 0 6px', lineHeight: 1.6 }}>
            This programme is designed to address the AI literacy obligations set out in Article 4 of Regulation (EU) 2024/1689 (the EU Artificial Intelligence Act), which requires deployers of AI systems in high-risk domains — including healthcare — to ensure that their personnel possess a sufficient level of AI literacy, taking into account their technical knowledge, experience, education, and the context of deployment.
          </p>
          <p style={{ fontSize: '11px', color: '#1e3a6e', margin: 0, lineHeight: 1.6 }}>
            Completion of this course demonstrates that the holder has acquired foundational and applied AI literacy competencies relevant to clinical practice, including critical evaluation of AI tools, understanding of regulatory frameworks (FDA SaMD, EU MDR, EU AI Act), responsible use of generative AI, and governance principles for safe AI deployment in healthcare settings.
          </p>
        </div>

        {/* Award date and signature */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginTop: '20px' }}>
          <div>
            <p style={{ fontSize: '11px', color: '#888', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '1px' }}>Awarded on</p>
            <p style={{ fontSize: '14px', fontWeight: 600, color: '#1a1a2e', margin: 0 }}>{awardDate}</p>
          </div>
          <div style={{ textAlign: 'center' }}>
            <p style={{
              fontFamily: "'Great Vibes', cursive",
              fontSize: '22px',
              color: '#1a1a2e',
              borderBottom: '1px solid #bbb',
              paddingBottom: '2px',
              margin: '0 0 4px',
              lineHeight: 1.2,
            }}>
              Ahmad Nazzal
            </p>
            <p style={{ fontSize: '10px', color: '#666', margin: '0', letterSpacing: '0.5px' }}>Ahmad Nazzal MD, PhD · Course Director</p>
          </div>
        </div>

        {/* Footer */}
        <div style={{ textAlign: 'center', marginTop: '20px', paddingTop: '12px', borderTop: '1px solid #e5e0d0' }}>
          <p style={{ fontSize: '10px', color: '#aaa', margin: 0, letterSpacing: '0.5px' }}>
            Certificate ID: <strong style={{ color: '#888' }}>{certificateId}</strong> · Verified by Clinical AI Academy · clinicalai.academy
          </p>
        </div>
      </div>

      {/* Action buttons */}
      <div className="no-print" style={{ display: 'flex', justifyContent: 'center', gap: '12px', marginTop: '24px' }}>
        <button
          onClick={handlePrint}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '10px 24px',
            background: '#1a1a2e',
            color: '#fff',
            border: 'none',
            borderRadius: '6px',
            fontSize: '14px',
            fontWeight: 600,
            cursor: 'pointer',
          }}
        >
          <Download size={16} />
          Download / Print PDF
        </button>
      </div>
    </>
  );
}
