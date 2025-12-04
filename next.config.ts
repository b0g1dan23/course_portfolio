import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "/**"
      }
    ],
    qualities: [75, 100]
  },
  experimental: {
    serverActions: {
      bodySizeLimit: '100mb'
    }
  }
};

export default nextConfig;
