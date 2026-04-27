import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
      {
        protocol: "https",
        hostname: "plus.unsplash.com",
      },
    ],
  },
  async redirects() {
    return [
      // Consolidate duplicate rebates URL onto canonical /rebates
      {
        source: "/solar-rebates-nsw",
        destination: "/rebates",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
