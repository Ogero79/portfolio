import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* Performance optimizations */
  compress: true,
  
  /* Output configuration for Netlify */
  output: 'standalone',
  
  /* Image optimization */
  images: {
    unoptimized: true, // Required for Netlify deployment
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },

  /* Experimental features for better performance */
  experimental: {
    optimizePackageImports: ['react-icons', 'framer-motion'],
  },

  /* Headers for security and caching */
  async headers() {
    return [
      {
        source: '/:all*(svg|jpg|png|webp|avif)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
