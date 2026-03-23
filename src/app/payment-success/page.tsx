'use client';

import React, { useEffect, useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const nameSlug = searchParams.get('name') || '';
  const sessionId = searchParams.get('session_id') || '';
  const [certificateOpened, setCertificateOpened] = useState(false);

  const displayName = decodeURIComponent(nameSlug)
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');

  const certificateUrl = `/certificate/${nameSlug}`;

  useEffect(() => {
    if (nameSlug && sessionId && !certificateOpened) {
      const timer = setTimeout(() => {
        window.open(certificateUrl, '_blank', 'noopener,noreferrer');
        setCertificateOpened(true);
      }, 1500);
      return () => clearTimeout(timer);
    }
  }, [nameSlug, sessionId, certificateOpened, certificateUrl]);

  if (!sessionId) {
    return (
      <div style={{ textAlign: 'center', padding: '3rem' }}>
        <h1>Invalid Payment Link</h1>
        <p>This page can only be accessed after completing a payment.</p>
        <Link href="/progress">Return to Progress Page</Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: 'center', padding: '3rem', maxWidth: '600px', margin: '0 auto' }}>
      <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎓</div>
      <h1>Payment Successful!</h1>
      <p style={{ fontSize: '1.2rem', color: '#555' }}>
        Congratulations, <strong>{displayName}</strong>! Your payment has been processed.
      </p>
      <p>
        Your certificate is opening in a new tab. If it did not open automatically,{' '}
        <a href={certificateUrl} target="_blank" rel="noopener noreferrer">
          click here to view your certificate
        </a>
        .
      </p>
      <p style={{ marginTop: '2rem', fontSize: '0.9rem', color: '#777' }}>
        A receipt has been sent to your email address.
      </p>
      <div style={{ marginTop: '2rem' }}>
        <Link href="/modules" style={{ marginRight: '1rem' }}>
          Browse Course Modules
        </Link>
        <Link href="/">Return to Home</Link>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <Suspense fallback={<div style={{ textAlign: 'center', padding: '3rem' }}>Loading...</div>}>
      <PaymentSuccessContent />
    </Suspense>
  );
}
