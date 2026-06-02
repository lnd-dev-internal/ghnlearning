import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Transpile Three.js and related packages for proper Next.js support
  transpilePackages: ["three", "@react-three/fiber", "@react-three/drei"],

  // Image optimization
  images: {
    formats: ["image/avif", "image/webp"],
    dangerouslyAllowSVG: false,
    unoptimized: true,
  },

  // Redirects từ URL .html cũ sang routes mới
  async redirects() {
    return [
      { source: "/homepage.html", destination: "/homepage", permanent: true },
      { source: "/index.html", destination: "/khoi-thi-truong", permanent: true },
      { source: "/vanphong.html", destination: "/vanphong", permanent: true },
      { source: "/nvxl.html", destination: "/nvxl", permanent: true },
      { source: "/nvpttt.html", destination: "/nvpttt", permanent: true },
      { source: "/nvph.html", destination: "/nvph", permanent: true },
      { source: "/cskh.html", destination: "/cskh", permanent: true },
      { source: "/fieldsale.html", destination: "/fieldsale", permanent: true },
      { source: "/hangnang.html", destination: "/hangnang", permanent: true },
      { source: "/newbie.html", destination: "/newbie", permanent: true },
      { source: "/workshop.html", destination: "/workshop", permanent: true },
      { source: "/leaders-talk.html", destination: "/leaders-talk", permanent: true },
    ];
  },
};

export default nextConfig;
