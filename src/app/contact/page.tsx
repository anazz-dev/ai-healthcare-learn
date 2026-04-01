import React from 'react';
import Image from 'next/image';

const CONTACT_EMAIL = 'contact@clinicalaiacademy.com';

export default function ContactPage() {
  return (
    <div style={{ maxWidth: '780px', margin: '0 auto', padding: '2rem 1.5rem', fontFamily: 'inherit' }}>

      {/* ── Hero ───────────────────────────────────────────── */}
      <div style={{ marginBottom: '3rem' }}>
        <p style={{ fontSize: '0.8rem', fontWeight: 700, letterSpacing: '2px', textTransform: 'uppercase', color: '#2563eb', margin: '0 0 0.75rem' }}>
          About
        </p>
        <h1 style={{ fontSize: '2.4rem', fontWeight: 800, lineHeight: 1.2, color: '#0f172a', margin: '0 0 1rem' }}>
          Built by a clinician who got tired of the hype.
        </h1>
        <p style={{ fontSize: '1.1rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
          Clinical AI Academy is a one-person project. No VC funding, no marketing team, no enterprise fluff.
          Just a physician-scientist who works with AI medical devices daily and thinks healthcare professionals
          deserve honest, practical AI education.
        </p>
      </div>

      {/* ── Founder card ───────────────────────────────────── */}
      <div style={{
        display: 'flex',
        gap: '2rem',
        alignItems: 'flex-start',
        background: '#f8fafc',
        border: '1px solid #e2e8f0',
        borderRadius: '12px',
        padding: '2rem',
        marginBottom: '3rem',
        flexWrap: 'wrap',
      }}>
        {/* Founder photo */}
        <div style={{ flexShrink: 0 }}>
          <Image
            src="/ahmad-nazzal.png"
            alt="Dr. Ahmad Nazzal"
            width={110}
            height={110}
            style={{
              borderRadius: '50%',
              objectFit: 'cover',
              objectPosition: 'center top',
              border: '3px solid #e2e8f0',
              display: 'block',
            }}
          />
        </div>

        <div style={{ flex: 1, minWidth: '240px' }}>
          <h2 style={{ fontSize: '1.35rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.25rem' }}>
            Dr. Ahmad Nazzal, MD, PhD
          </h2>
          <p style={{ fontSize: '0.9rem', color: '#2563eb', fontWeight: 600, margin: '0 0 0.75rem' }}>
            Physician-Scientist · Medical Writer · AI Educator
          </p>
          <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, margin: '0 0 0.75rem' }}>
            I trained in neurology, neuroradiology, and radiology at different hospitals such as the University Hospital Heidelberg and hold a PhD in Neuroscience
            from the University of Göttingen International Max Planck Institute for Neuroscience. For the past years I've been working as a
            medical writer in Germany — authoring Clinical Evaluation Reports for AI-based neuroimaging software
            under EU MDR 2017/745, contributing to research on brain volumetric analysis, and translating
            AI concepts for clinical audiences.
          </p>
          <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.7, margin: 0 }}>
            I've spoken on AI literacy at the 98th German Society of Neurology (DGN) Congress in Berlin and
            I'm an active EMWA member. I built this academy to address the gap between reality and the hype in clinical AI by improving AI literacy of healthcare professionals.
          </p>
        </div>
      </div>

      {/* ── The quote / why ────────────────────────────────── */}
      <div style={{
        borderLeft: '4px solid #2563eb',
        padding: '1rem 1.5rem',
        background: '#eff6ff',
        borderRadius: '0 8px 8px 0',
        marginBottom: '3rem',
      }}>
        <p style={{ fontSize: '1.25rem', fontStyle: 'italic', fontWeight: 600, color: '#1e3a8a', margin: '0 0 0.75rem' }}>
          "It's easy to use AI — but can you tell if AI is using you?"
        </p>
        <p style={{ fontSize: '0.95rem', color: '#334155', lineHeight: 1.7, margin: 0 }}>
          Healthcare professionals are increasingly expected to work alongside AI systems, yet most receive
          zero formal training on how these tools actually work, when to trust them, or how to critically
          evaluate what vendors claim. The EU AI Act now makes AI literacy a legal requirement for anyone
          deploying or using AI in high-risk settings like healthcare.{' '}
          <strong>Clinical AI Academy exists to close that gap</strong> — with rigorous, evidence-based education
          built for the realities of clinical care, not the boardroom.
        </p>
      </div>

      {/* ── What makes us different ────────────────────────── */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', margin: '0 0 1.25rem' }}>
          What makes this different
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1rem' }}>
          {[
            {
              emoji: '🩺',
              title: 'By clinicians, for clinicians',
              text: 'No coding required. No PhD assumed. Just the knowledge you need to practise safely in an AI-enabled world.',
            },
            {
              emoji: '🏛️',
              title: 'Regulatory alignment',
              text: 'The curriculum addresses EU AI Act Article 4, FDA SaMD frameworks, and CE marking — not as side notes, but as core content.',
            },
            {
              emoji: '🧠',
              title: 'Real domain expertise',
              text: "Grounded in neurology, radiology, and AI diagnostics for neurodegenerative diseases. I've actually written the regulatory documents for AI medical devices.",
            },
            {
              emoji: '📄',
              title: 'Evidence-based',
              text: 'Built on peer-reviewed research, clinical validation principles, and real-world implementation experience — not vendor white papers.',
            },
          ].map(item => (
            <div key={item.title} style={{
              background: '#f8fafc',
              border: '1px solid #e2e8f0',
              borderRadius: '10px',
              padding: '1.25rem',
            }}>
              <div style={{ fontSize: '1.75rem', marginBottom: '0.5rem' }}>{item.emoji}</div>
              <h3 style={{ fontSize: '1rem', fontWeight: 700, color: '#0f172a', margin: '0 0 0.4rem' }}>{item.title}</h3>
              <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.6, margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* ── Credentials ────────────────────────────────────── */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ fontSize: '1.5rem', fontWeight: 700, color: '#0f172a', margin: '0 0 1rem' }}>
          Credentials
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
          {[
            'MD · German Approbation',
            'PhD Neuroscience — Göttingen',
            'EMWA Member',
            'IBM AI Engineering Professional Certificate',
            'Deep Learning Specialisation — DeepLearning.AI',
            'ICH GCP E6 (R2/R3) Certified',
            'Published in Scientific Reports, Cortex & EMWA Journal',
          ].map(cred => (
            <span key={cred} style={{
              display: 'inline-block',
              background: '#eff6ff',
              border: '1px solid #bfdbfe',
              borderRadius: '999px',
              padding: '0.3rem 0.85rem',
              fontSize: '0.8rem',
              fontWeight: 600,
              color: '#1d4ed8',
            }}>
              {cred}
            </span>
          ))}
        </div>
      </div>

      {/* ── Contact ────────────────────────────────────────── */}
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
          Questions about the course? Interested in collaboration, bulk access for your team, or just want
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

    </div>
  );
}
