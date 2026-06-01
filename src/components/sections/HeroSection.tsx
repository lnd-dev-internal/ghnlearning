"use client";

import { useRef } from "react";
import { useHeroTimeline } from "@/hooks/useGSAP";
import styles from "./HeroSection.module.css";

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useHeroTimeline(sectionRef);

  return (
    <section ref={sectionRef} className={`section ${styles.hero}`} id="hero">
      <div className={styles.heroContent}>
        {/* Tag line */}
        <span className={styles.tag} data-hero-tag>
          ✦ Creative Frontend Experience
        </span>

        {/* Main Title */}
        <h1 className={styles.title}>
          <span className={`gradient-text ${styles.titleLine}`} data-hero-title>
            Build Beyond
          </span>
          <span className={`${styles.titleLine} ${styles.titleOutline}`} data-hero-title>
            The Ordinary
          </span>
        </h1>

        {/* Description */}
        <p className={styles.description} data-hero-desc>
          Khám phá thế giới 3D tương tác với{" "}
          <strong>React Three Fiber</strong> và animation mượt mà cùng{" "}
          <strong>GSAP ScrollTrigger</strong>. Stack hoàn hảo cho creative frontend.
        </p>

        {/* CTA Buttons */}
        <div className={styles.ctaGroup} data-hero-cta>
          <a href="#explore" className="btn btn-primary" id="hero-cta-primary">
            Khám phá ngay
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
          <a href="#features" className="btn btn-ghost" id="hero-cta-secondary">
            Xem tính năng
          </a>
        </div>

        {/* Tech badges */}
        <div className={styles.badges} data-hero-cta>
          {["Three.js", "R3F", "Drei", "GSAP", "Next.js"].map((tech) => (
            <span key={tech} className={styles.badge}>
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator} aria-hidden="true">
        <span className={styles.scrollLine} />
        <span className={styles.scrollText}>Scroll</span>
      </div>
    </section>
  );
}
