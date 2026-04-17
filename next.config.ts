import type { NextConfig } from "next";

const nextConfig = {
  images: {
    domains: [], // Add your image domains
    formats: ['image/avif', 'image/webp'],
  },
  compress: true,
  swcMinify: true,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
}

export default nextConfig;
