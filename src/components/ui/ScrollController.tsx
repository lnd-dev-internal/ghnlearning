"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { particleStore } from "@/lib/particleStore";
import { onIntroComplete } from "@/lib/introEvents";

gsap.registerPlugin(ScrollTrigger);

// v2 — waits for intro before activating scroll triggers

/**
 * Scroll layout: #scroll-root = 600vh, window max scroll = 500vh
 *
 *   Scroll   Progress   Section
 *   ───────  ─────────  ─────────────────────────
 *     0 vh     0.000    Hero (section-1 at top:0)
 *   100 vh     0.200    [disintegration zone]
 *   200 vh     0.400    Mục đích (section-2 at top:200vh)
 *   300 vh     0.600    Core values (section-3 at top:300vh)
 *   400 vh     0.800    Stats (section-stats at top:400vh)
 *   500 vh     1.000    Gallery (section-4 at top:500vh)
 *
 * Snap anchor points: 0, 0.40, 0.60, 0.80, 1.0
 */
export default function ScrollController() {
  const heroTitleRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    heroTitleRef.current =
      document.querySelector<HTMLElement>("[data-hero-title]");

    // Wait for intro doors to fully open before registering scroll triggers.
    // Scroll is locked during intro; this also ensures scroll position = 0.
    const introCleanup = onIntroComplete(() => {
      window.scrollTo(0, 0);
      ScrollTrigger.refresh();

      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: "#scroll-root",
          start: "top top",
          end: "bottom bottom",
          scrub: 1.0,

          // ── Snap to section anchor points ───────────────────────────────
          snap: {
            snapTo: [0, 0.40, 0.60, 0.80, 1.0],
            duration: { min: 0.35, max: 0.75 },
            delay: 0.08,
            ease: "power2.inOut",
            inertia: false,
          },

          onUpdate: (self) => {
            const p = self.progress;

            // ── Hero title HTML fade (disappears as scroll begins) ────────
            if (heroTitleRef.current) {
              heroTitleRef.current.style.opacity =
                String(Math.max(0, 1 - p / 0.07));
            }

            // ── introProgress: tied directly to scroll ───────────────────
            // p=0: particles invisible. p≥0.06: particles fully visible.
            const INTRO_S = 0.02, INTRO_E = 0.06;
            if (p < INTRO_S) {
              particleStore.introProgress = 0;
            } else if (p <= INTRO_E) {
              particleStore.introProgress = (p - INTRO_S) / (INTRO_E - INTRO_S);
            } else {
              particleStore.introProgress = 1;
            }

            // ── Particle scroll phases ────────────────────────────────────
            const DIS_S = 0.06, DIS_E = 0.34;   // disintegration
            const ASM_S = 0.34, ASM_E = 0.40;   // sphere assembly
            const SPL_S = 0.50, SPL_E = 0.60;   // 4 mini-circles (core values)

            if (p < DIS_S) {
              particleStore.scrollProgress   = 0;
              particleStore.assemblyProgress = 0;
              particleStore.splitProgress    = 0;
            } else if (p <= DIS_E) {
              particleStore.scrollProgress   = (p - DIS_S) / (DIS_E - DIS_S);
              particleStore.assemblyProgress = 0;
              particleStore.splitProgress    = 0;
            } else if (p < ASM_S) {
              particleStore.scrollProgress   = 1;
              particleStore.assemblyProgress = 0;
              particleStore.splitProgress    = 0;
            } else if (p <= ASM_E) {
              particleStore.scrollProgress   = 1;
              particleStore.assemblyProgress = (p - ASM_S) / (ASM_E - ASM_S);
              particleStore.splitProgress    = 0;
            } else if (p < SPL_S) {
              particleStore.scrollProgress   = 1;
              particleStore.assemblyProgress = 1;
              particleStore.splitProgress    = 0;
            } else if (p <= SPL_E) {
              particleStore.scrollProgress   = 1;
              particleStore.assemblyProgress = 1;
              particleStore.splitProgress    = (p - SPL_S) / (SPL_E - SPL_S);
            } else {
              particleStore.scrollProgress   = 1;
              particleStore.assemblyProgress = 1;
              particleStore.splitProgress    = 1;
            }

            // ── Hide particles after core-values section ──────────────────
            // Fade out 0.65 → 0.78, stay hidden. Stats uses HTML counter only.
            const HIDE_S = 0.65, HIDE_E = 0.78;
            if (p < HIDE_S) {
              particleStore.hideProgress = 0;
            } else if (p <= HIDE_E) {
              particleStore.hideProgress = (p - HIDE_S) / (HIDE_E - HIDE_S);
            } else {
              particleStore.hideProgress = 1;
            }

            // statsProgress not used — particle-into-numbers animation removed
            particleStore.statsProgress = 0;
          },
        });
      });

      return () => ctx.revert();
    });

    return introCleanup;
  }, []);

  return null;
}
