import type { NextConfig } from 'next';

const isReviewExport = process.env.CLINICAL_AI_STATIC_EXPORT === '1';
const nextConfig: NextConfig = {
  ...(isReviewExport ? { output: 'export', trailingSlash: true, images: { unoptimized: true } } : {}),
  eslint: { ignoreDuringBuilds: true },
  async redirects() {
    if (isReviewExport) return [];
    return [
      { source: '/academy', destination: '/modules', permanent: true },
      { source: '/progress', destination: '/modules', permanent: true },
      { source: '/certificate/:path*', destination: '/modules', permanent: true },
      { source: '/payment-success', destination: '/modules', permanent: true },
      { source: '/contact', destination: '/', permanent: true },
      { source: '/service', destination: '/', permanent: true },
    ];
  },
};
export default nextConfig;
