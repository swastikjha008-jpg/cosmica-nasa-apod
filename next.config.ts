import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compiler: {
    styledComponents: true,
  },
  images: {
    // NASA's APOD entries link to images hosted across many different
    // domains (apod.nasa.gov, science.nasa.gov, external observatories,
    // etc.), so the allow-list is intentionally broad.
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default nextConfig;
