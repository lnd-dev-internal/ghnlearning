"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import styles from "./HeroOverlay.module.css";

export default function HeroOverlay() {
  const lineRef    = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLParagraphElement>(null);
  const bottomRef  = useRef<HTMLDivElement>(null);   // wraps CTAs + scroll hint
  const logoRef    = useRef<HTMLDivElement>(null);
  const titleRef   = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.3 });

    tl.fromTo(logoRef.current,
      { opacity: 0, y: -12 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
    .fromTo(lineRef.current,
      { scaleX: 0 },
      { scaleX: 1, duration: 0.7, ease: "power2.inOut" }
    )
    .fromTo(taglineRef.current,
      { opacity: 0, y: 14 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
      "-=0.3"
    )
    // Animate entire bottom zone (CTAs + scroll hint) as one unit
    .fromTo(bottomRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
      "-=0.2"
    );
  }, []);

  return (
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
            {/* Orange box — slides from left */}
            <span className={styles.talkBg} aria-hidden="true" />
            {/* Dark text shown before box arrives, white after */}
            <span className={styles.talkText}>TALK</span>
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
          <a
            href="#section-5"
            className={styles.ctaPrimary}
            id="hero-cta-register"
          >
            Đăng ký ngay
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2.5 7h9M8 3.5L11.5 7 8 10.5"
                stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a
            href="#section-4"
            className={styles.ctaSecondary}
            id="hero-cta-issues"
          >
            Những số khác
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
  );
}
