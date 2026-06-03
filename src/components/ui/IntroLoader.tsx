"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { dispatchIntroComplete } from "@/lib/introEvents";
import styles from "./IntroLoader.module.css";

/* ── Pinwheel SVG ──────────────────────────────────────────────────────────── */
function Pinwheel() {
  return (
    <svg
      width="22" height="22"
      viewBox="0 0 24 24"
      fill="none"
      className={styles.pinwheelSvg}
      aria-hidden="true"
    >
      {/* Blade NE */}
      <path
        d="M12 12C12 12 11.2 5.2 15.8 2.8C17.4 6.6 14.2 10.2 12 12Z"
        fill="currentColor"
      />
      {/* Blade SE */}
      <path
        d="M12 12C12 12 18.8 12.8 21.2 8.2C17.4 6.6 13.8 9.8 12 12Z"
        fill="currentColor" opacity="0.65"
      />
      {/* Blade SW */}
      <path
        d="M12 12C12 12 12.8 18.8 8.2 21.2C6.6 17.4 9.8 13.8 12 12Z"
        fill="currentColor"
      />
      {/* Blade NW */}
      <path
        d="M12 12C12 12 5.2 11.2 2.8 15.8C6.6 17.4 10.2 14.2 12 12Z"
        fill="currentColor" opacity="0.65"
      />
      {/* Hub */}
      <circle cx="12" cy="12" r="1.6" fill="currentColor" />
    </svg>
  );
}

/* ── Main component ──────────────────────────────────────────────────────────── */
export default function IntroLoader() {
  const [mounted, setMounted] = useState(true);
  const topRef    = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const brandRef  = useRef<HTMLDivElement>(null);
  const seamRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Lock scroll during intro
    document.body.style.overflow = "hidden";

    // 1. Fade in brand text from seam
    gsap.fromTo(
      brandRef.current,
      { opacity: 0, y: 8 },
      { opacity: 1, y: 0, duration: 0.4, delay: 0.2, ease: "power2.out" }
    );

    // 2. Opening sequence (after ~2.2s hold)
    const tl = gsap.timeline({
      delay: 1.0,
      onComplete: () => {
        document.body.style.overflow = "";
        dispatchIntroComplete();   // ← signal: site animations may now start
        setMounted(false);
      },
    });

    tl
      // Fade brand out
      .to(brandRef.current, { opacity: 0, y: -5, duration: 0.28, ease: "power2.in" })
      // Seam flares up then fades as doors open
      .to(seamRef.current, { scaleX: 1.08, filter: "brightness(2)", duration: 0.18 }, "<0.1")
      .to(seamRef.current, { scaleX: 1, filter: "brightness(1)", opacity: 0, duration: 0.5 }, ">0.05")
      // Doors slide apart
      .to(topRef.current,    { yPercent: -100, duration: 0.65, ease: "power4.inOut" }, "open")
      .to(bottomRef.current, { yPercent:  100, duration: 0.65, ease: "power4.inOut" }, "open");

    return () => {
      document.body.style.overflow = "";
    };
  }, []);

  if (!mounted) return null;

  return (
    <div className={styles.loader} aria-hidden="true">

      {/* ── Top panel ── */}
      <div ref={topRef} className={styles.topPanel}>
        <div className={styles.grid} />
        <div className={styles.vignette} />
        <div className={styles.scanLine} />
        <span className={`${styles.corner} ${styles.cornerTL}`} />
        <span className={`${styles.corner} ${styles.cornerTR}`} />
        {/* Subtle label top-left */}
        <div className={styles.topLabel}>LT — 2026</div>
      </div>

      {/* ── Bottom panel ── */}
      <div ref={bottomRef} className={styles.bottomPanel}>
        <div className={styles.grid} />
        <div className={styles.vignette} />
        <span className={`${styles.corner} ${styles.cornerBL}`} />
        <span className={`${styles.corner} ${styles.cornerBR}`} />
      </div>

      {/* ── Seam line (at 50% height) ── */}
      <div ref={seamRef} className={styles.seam} aria-hidden="true" />

      {/* ── Brand (centered just below seam) ── */}
      <div ref={brandRef} className={styles.brandWrap}>
        <div className={styles.brand}>
          <Pinwheel />
          <span className={styles.brandText}>LEADERS TALK</span>
        </div>
        <div className={styles.brandGlow} aria-hidden="true" />
      </div>

    </div>
  );
}
