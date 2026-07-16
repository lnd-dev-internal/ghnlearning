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
      { source: "/nvpttt-kinhdoanh.html", destination: "/nvpttt-kinhdoanh", permanent: true },
      { source: "/nvpttt-botchat.html", destination: "/nvpttt-botchat", permanent: true },
      { source: "/nvph.html", destination: "/nvph", permanent: true },
      { source: "/cskh.html", destination: "/cskh", permanent: true },
      { source: "/fieldsale.html", destination: "/fieldsale", permanent: true },
      { source: "/hangnang.html", destination: "/hangnang", permanent: true },
      { source: "/newbie.html", destination: "/newbie", permanent: true },
      { source: "/workshop.html", destination: "/workshop", permanent: true },
      { source: "/leaders-talk.html", destination: "/leaders-talk", permanent: true },

      // ── Site B2B (mount dưới /b2b) — redirect URL .html/legacy cũ ──
      { source: "/b2b/index.html", destination: "/b2b", permanent: true },
      { source: "/b2b/vanhanh", destination: "/b2b/van-hanh", permanent: true },
      { source: "/b2b/vanhanh.html", destination: "/b2b/van-hanh", permanent: true },
      { source: "/b2b/van-hanh.html", destination: "/b2b/van-hanh", permanent: true },
      { source: "/b2b/kinhdoanh", destination: "/b2b/kinh-doanh", permanent: true },
      { source: "/b2b/kinhdoanh.html", destination: "/b2b/kinh-doanh", permanent: true },
      { source: "/b2b/kinh-doanh.html", destination: "/b2b/kinh-doanh", permanent: true },
      ...["nvxl", "nvxl-lay", "nvxl-tra", "nvxl-luanchuyen", "nvxl-khac", "nvxl-kinhdoanh", "nvxl-botchat", "nvgn", "nvgn-kinhdoanh"].map((route) => ({
        source: `/b2b/${route}.html`,
        destination: `/b2b/${route}`,
        permanent: true,
      })),
    ];
  },

  // Rewrites cho các sub-pages chưa có Next.js route (serve HTML từ public/)
  async rewrites() {
    return [
      { source: "/fieldsale-banhang", destination: "/fieldsale-banhang.html" },
      { source: "/cskh-khieunai",     destination: "/cskh-khieunai.html"     },
    ];
  },
};

export default nextConfig;
