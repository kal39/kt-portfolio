import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
  output: 'export', // Tells Next.js to export your site as static HTML
  images: {
    unoptimized: true, // Required for static exports
  },
};

export default nextConfig;