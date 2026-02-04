import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/impulsa-web',
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
