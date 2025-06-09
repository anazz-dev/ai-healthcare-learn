// app/certificate/[slug]/page.tsx

import CertificateActions from '@/components/CertificateActions';

interface Props {
  params: { slug: string };
}

export default function CertificatePage({ params }: Props) {
  // Decode slug to get the name (e.g. "Ahmad-Nazzal" → "Ahmad Nazzal")
  const name = decodeURIComponent(params.slug.replace(/-/g, ' '));

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
      <CertificateActions name={name} />
    </main>
  );
}
