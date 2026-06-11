import type { Metadata } from "next";
import "./leaders-talk.css";
import ClientScene from "@/components/canvas/ClientScene";
import HeroOverlay from "@/components/ui/HeroOverlay";
import Section2Overlay from "@/components/ui/Section2Overlay";
import Section3Overlay from "@/components/ui/Section3Overlay";
import StatsSection from "@/components/ui/StatsSection";
import Section4Gallery from "@/components/ui/Section4Gallery";
import Section5Featured from "@/components/ui/Section5Featured";
import ScrollController from "@/components/ui/ScrollController";
import ClientIntroLoader from "@/components/ui/ClientIntroLoader";
import GHNFooter from "@/components/ui/GHNFooter";

export const metadata: Metadata = {
  title: "Leaders Talk — Where Leaders Shape Tomorrow",
  description:
    "An immersive 3D particle experience — watch ideas form, flow, and assemble.",
};

/**
 * Page layout (600vh total):
 *
 *   0vh  ──  100vh   Section 1 — Hero "LEADERS TALK"
 * 100vh  ──  200vh   [spacer — disintegration zone, no HTML content]
 * 200vh  ──  300vh   Section 2 — Mục đích + blue sphere
 * 300vh  ──  400vh   Section 3 — 4 core values circles
 * 400vh  ──  500vh   Section stats — 20+ speakers / 500 students
 * 500vh  ──  600vh   Section 4 — Gallery (Khoảnh khắc đáng nhớ)
 *
 * All sections are position:absolute within #scroll-root (height:600vh).
 * The 3D canvas is position:fixed and always renders behind the scroll layer.
 */
export default function Page() {
  return (
    <>
      {/* ── Intro door animation — renders above everything, unmounts after open ── */}
      <ClientIntroLoader />

      {/* ── Fixed 3D canvas behind everything ── */}
      <ClientScene />

      {/* ── 400vh scrollable container ── */}
      <div id="scroll-root">

        {/* Section 1 — visible at scroll 0 */}
        <div id="section-1" role="region" aria-label="Hero">
          <HeroOverlay />
        </div>

        {/* Section 2 — enters viewport at scroll ~100vh (placed at top:200vh) */}
        <div id="section-2" role="region" aria-label="Mục đích">
          <Section2Overlay />
        </div>

        {/* Section 3 — enters viewport at scroll ~200vh (placed at top:300vh) */}
        <div id="section-3" role="region" aria-label="Giá trị cốt lõi">
          <Section3Overlay />
        </div>

        {/* Section stats — enters viewport at scroll ~300vh (placed at top:400vh) */}
        <div id="section-stats" role="region" aria-label="Số liệu ấn tượng">
          <StatsSection />
        </div>

        {/* Section 4 — Gallery, enters viewport at scroll ~400vh (placed at top:500vh) */}
        <div id="section-4" role="region" aria-label="Khoảnh khắc đáng nhớ">
          <Section4Gallery />
        </div>

      </div>

      {/* GSAP ScrollTrigger — renders nothing */}
      <ScrollController />

      {/* Section 5 — Featured episode (normal flow, below scroll-root) */}
      <Section5Featured />

      {/* Footer */}
      <GHNFooter />
    </>
  );
}

