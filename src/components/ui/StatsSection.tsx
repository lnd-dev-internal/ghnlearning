"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./StatsSection.module.css";

const STATS = [
  {
    id: "stat-speakers",
    value: 20,
    suffix: "+",
    label: "Diễn giả hàng đầu",
    icon: "◎",
    colorVar: "#FF5200",
  },
  {
    id: "stat-students",
    value: 500,
    suffix: "+",
    label: "Học viên / buổi",
    icon: "✦",
    colorVar: "#f66700",
  },
];

export default function StatsSection() {
  const sectionRef  = useRef<HTMLDivElement>(null);
  const headingRef  = useRef<HTMLDivElement>(null);
  const countersRef = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const triggerEl = document.getElementById("section-stats") ?? sectionRef.current;
    if (!triggerEl) return;

    let triggered = false;

    const runAnimations = () => {
      if (triggered) return;
      triggered = true;

      // ── Heading reveal ──────────────────────────────────────────────────
      gsap.fromTo(
        headingRef.current,
        { opacity: 0, y: 28, filter: "blur(8px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }
      );

      // ── Cards stagger reveal ────────────────────────────────────────────
      gsap.fromTo(
        "[data-stat-card]",
        { opacity: 0, y: 44, scale: 0.94 },
        { opacity: 1, y: 0, scale: 1, duration: 0.85, ease: "power3.out", stagger: 0.15 }
      );

      // ── Count-up: 0 → target ────────────────────────────────────────────
      STATS.forEach((stat, i) => {
        const el = countersRef.current[i];
        if (!el) return;
        const obj = { val: 0 };
        gsap.to(obj, {
          val: stat.value,
          duration: 2.2,
          ease: "power2.out",
          delay: i * 0.25 + 0.2,
          onUpdate() {
            el.textContent = Math.round(obj.val).toString();
          },
        });
      });
    };

    // IntersectionObserver fires reliably with snap-scroll
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          runAnimations();
          observer.disconnect();
        }
      },
      { threshold: 0.3 }   // trigger when 30% of section is visible
    );

    observer.observe(triggerEl);
    return () => observer.disconnect();
  }, []);


  return (
    <div ref={sectionRef} className={styles.wrapper}>
      {/* Ambient background glows */}
      <div className={styles.glow1} aria-hidden="true" />
      <div className={styles.glow2} aria-hidden="true" />

      {/* ── Heading ── */}
      <div ref={headingRef} className={styles.heading} id="stats-heading">
        <span className={styles.tag}>Những con số biết nói</span>
      </div>

      {/* ── Stats grid ──────────────────────────────────────────────────────── */}
      <div className={styles.grid} id="stats-grid">
        {STATS.map((stat, i) => (
          <div
            key={stat.id}
            id={stat.id}
            data-stat-card=""
            className={styles.card}
            style={
              {
                "--card-color":     stat.colorVar,
                "--card-color-dim": stat.colorVar + "22",
              } as React.CSSProperties
            }
          >
            {/* Inner glow blob */}
            <div className={styles.cardGlow} aria-hidden="true" />

            {/* Top accent line */}
            <div className={styles.cardTopLine} />

            {/* Icon */}
            <div className={styles.cardIcon}>{stat.icon}</div>

            {/* Counter */}
            <div className={styles.counter}>
              <span
                className={styles.counterValue}
                ref={(el) => { countersRef.current[i] = el; }}
              >
                0
              </span>
              <span className={styles.counterSuffix}>{stat.suffix}</span>
            </div>

            {/* Label only — no sublabel text */}
            <p className={styles.cardLabel}>{stat.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
