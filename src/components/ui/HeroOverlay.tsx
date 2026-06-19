"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { onIntroComplete } from "@/lib/introEvents";
import styles from "./HeroOverlay.module.css";
import RegistrationModal from "./RegistrationModal";

gsap.registerPlugin(ScrollToPlugin);


export default function HeroOverlay() {
  const [showRegModal, setShowRegModal] = useState(false);
  const lineRef     = useRef<HTMLDivElement>(null);
  const taglineRef  = useRef<HTMLParagraphElement>(null);
  const bottomRef   = useRef<HTMLDivElement>(null);
  const logoRef     = useRef<HTMLDivElement>(null);
  const titleRef    = useRef<HTMLHeadingElement>(null);
  const talkBgRef   = useRef<HTMLSpanElement>(null);
  const talkTextRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    // Hide everything initially (CSS has opacity:0 on title already; make sure others are hidden too)
    gsap.set(
      [logoRef.current, lineRef.current, taglineRef.current, bottomRef.current],
      { opacity: 0 }
    );
    // Ensure orange box is collapsed and text starts dark
    gsap.set(talkBgRef.current,   { scaleX: 0 });
    gsap.set(talkTextRef.current, { color: "#3d3d3d" });

    // Wait for intro doors to fully open, THEN run all hero animations
    const cleanup = onIntroComplete(() => {
      const tl = gsap.timeline({ delay: 0.15 });

      // 1. Logo drops in
      tl.fromTo(logoRef.current,
        { opacity: 0, y: -12 },
        { opacity: 1, y: 0, duration: 0.75, ease: "power2.out" }
      )
      // 2. Title fades in
      .fromTo(titleRef.current,
        { opacity: 0, y: 10 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" },
        "-=0.3"
      )
      // 3. Orange box slides in (scaleX 0 → 1)
      .to(talkBgRef.current, {
        scaleX: 1,
        duration: 0.42,
        ease: "cubic.bezier(0.22, 1, 0.36, 1)",
      }, "-=0.05")
      // 4. TALK text turns white
      .to(talkTextRef.current, {
        color: "#ffffff",
        duration: 0,
      }, "-=0.22")
      // 5. Divider line expands
      .fromTo(lineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.65, ease: "power2.inOut" },
        "-=0.1"
      )
      // 6. Tagline fades up
      .fromTo(taglineRef.current,
        { opacity: 0, y: 14 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" },
        "-=0.35"
      )
      // 7. CTAs + scroll hint
      .fromTo(bottomRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out" },
        "-=0.25"
      );
    });

    return cleanup;
  }, []);

  const handleScrollToUpcoming = useCallback(() => {
    const target = document.getElementById("section-5");
    if (target) {
      gsap.to(window, {
        scrollTo: { y: target, offsetY: 0 },
        duration: 0.8,
        ease: "power3.inOut",
      });
    }
  }, []);

  return (
    <>
    <div className={styles.hero}>
      {/* ── Top-center logo ── */}
      <div ref={logoRef} className={styles.logoMark}>
        <Image
          src="/5 logos.png"
          alt="Leaders Talk"
          width={700}
          height={140}
          className={styles.logoImg}
          priority
        />
      </div>

      {/* ── Centered hero title + tagline only ── */}
      <div className={styles.center}>
        <h1
          ref={titleRef}
          data-hero-title=""
          className={styles.title}
        >
          <span className={styles.titleLeaders}>LEADERS&nbsp;</span>
          <span className={styles.titleTalk} aria-label="TALK">
            {/* Orange box — GSAP animates scaleX after intro */}
            <span ref={talkBgRef} className={styles.talkBg} aria-hidden="true" />
            {/* TALK text — GSAP switches color to white after box lands */}
            <span ref={talkTextRef} className={styles.talkText}>TALK</span>
          </span>
        </h1>
        <div ref={lineRef} className={styles.line} />
        <p ref={taglineRef} className={styles.tagline}>
          Where visionary leaders shape tomorrow&apos;s conversations
        </p>
      </div>

      {/* ── Bottom zone: CTA buttons + scroll indicator ── */}
      <div ref={bottomRef} className={styles.bottomZone}>
        <div className={styles.ctaGroup}>
          <button
            type="button"
            className={styles.ctaPrimary}
            id="hero-cta-register"
            onClick={() => setShowRegModal(true)}
          >
            Đăng ký ngay
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button
            type="button"
            className={styles.ctaSecondary}
            id="hero-cta-upcoming"
            onClick={handleScrollToUpcoming}
          >
            Sự kiện sắp đến
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M7 2.5v9M3.5 8L7 11.5 10.5 8"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <a
            href="/ky-truoc"
            className={styles.ctaSecondary}
            id="hero-cta-issues"
          >
            Những kỳ trước
          </a>
        </div>

        <div className={styles.scrollHint}>
          <div className={styles.scrollTrack}>
            <div className={styles.scrollDot} />
          </div>
          <span className={styles.scrollLabel}>Cuộn tiếp để khám phá</span>
        </div>
      </div>
    </div>

    {/* Registration modal */}
    {showRegModal && <RegistrationModal onClose={() => setShowRegModal(false)} />}
    </>
  );
}
