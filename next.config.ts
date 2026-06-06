import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'images.unsplash.com' },
      { protocol: 'https', hostname: 'cdn.jsdelivr.net' },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  // optimizeCss requires the optional 'critters' package
  // Install it with: npm install critters
  // or leave disabled for development
}

export default nextConfig
