import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile Three.js and related packages for proper Next.js support
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],

  // Move build cache to /tmp to avoid Turbopack unicode-path crash
  // (external drive "Ổ ngoài" has non-ASCII chars Turbopack can't handle)
  distDir: "/tmp/leaders-talk-next",

  // Image optimization — allow HEIC/HEIF input (sharp converts to WebP/AVIF)
  images: {
    formats: ["image/avif", "image/webp"],
    qualities: [75, 80, 85],
    dangerouslyAllowSVG: false,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
