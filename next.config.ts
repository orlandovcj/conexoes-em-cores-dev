import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  reactStrictMode: false,
  output: 'export',
  //basePath: '/conexoes-em-cores', // Comente esta linha para desenvolvimento local
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: ['192.168.1.73'],
};

export default nextConfig;

