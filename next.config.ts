import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile Three.js and related packages for proper Next.js support
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],

  // Image optimization — allow HEIC/HEIF input (sharp converts to WebP/AVIF)
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80, 85],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
