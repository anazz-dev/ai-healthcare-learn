import React from 'react';
import Image from 'next/image';

const CONTACT_EMAIL = 'contact@clinicalaiacademy.com';

export default function ContactPage() {
  return (
      <div style={{
        background: '#0f172a',
        borderRadius: '12px',
        padding: '2rem',
        color: '#f1f5f9',
      }}>
        <h2 style={{ fontSize: '1.4rem', fontWeight: 700, color: '#fff', margin: '0 0 0.5rem' }}>
          Get in touch
        </h2>
        <p style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.7, margin: '0 0 1.25rem' }}>
          Questions about the course? Interested in collaboration, or just want
          to talk clinical AI? I read every email personally.
        </p>
        <a
          href={`mailto:${CONTACT_EMAIL}`}
          style={{
            display: 'inline-block',
            background: '#2563eb',
            color: '#fff',
            padding: '0.65rem 1.5rem',
            borderRadius: '8px',
            fontWeight: 700,
            fontSize: '0.95rem',
            textDecoration: 'none',
          }}
        >
          {CONTACT_EMAIL}
        </a>
        <p style={{ fontSize: '0.8rem', color: '#64748b', margin: '1rem 0 0' }}>
          I aim to reply within 1–2 business days.
        </p>
      </div>
  );
}
