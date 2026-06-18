"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Section4Gallery.module.css";

gsap.registerPlugin(ScrollTrigger);

// Distribute 15 real photos across 3 rows
// objectPos overrides the default 'center' crop per-image
const ROW_1 = [
  { id: "1",  src: "/1.jpg",   alt: "Leaders Talk — khoảnh khắc 1"  },
  { id: "2",  src: "/2.jpg",   alt: "Leaders Talk — khoảnh khắc 2"  },
  { id: "3",  src: "/3.jpg",   alt: "Leaders Talk — khoảnh khắc 3"  },
  { id: "4",  src: "/4.JPG",   alt: "Leaders Talk — khoảnh khắc 4"  },
  { id: "5",  src: "/5.jpg",   alt: "Leaders Talk — khoảnh khắc 5"  },
];
const ROW_2 = [
  { id: "6",  src: "/6.jpg",   alt: "Leaders Talk — khoảnh khắc 6"  },
  { id: "7",  src: "/7.jpg",   alt: "Leaders Talk — khoảnh khắc 7"  },
  { id: "8",  src: "/8.jpg",   alt: "Leaders Talk — khoảnh khắc 8"  },
  { id: "9",  src: "/9.JPG",   alt: "Leaders Talk — khoảnh khắc 9"  },
  { id: "10", src: "/10.JPG",  alt: "Leaders Talk — khoảnh khắc 10" },
];
const ROW_3 = [
  { id: "11", src: "/11.png",  alt: "Leaders Talk — khoảnh khắc 11", objectPos: "center 75%" },
  { id: "12", src: "/12.JPG",  alt: "Leaders Talk — khoảnh khắc 12" },
  { id: "13", src: "/13.JPG",  alt: "Leaders Talk — khoảnh khắc 13" },
  { id: "14", src: "/14.JPG",  alt: "Leaders Talk — khoảnh khắc 14" },
  { id: "15", src: "/15.JPG",  alt: "Leaders Talk — khoảnh khắc 15" },
];

/* ── Photo card ──────────────────────────────────────────────────────────── */
function FilmCard({ src, alt, objectPos }: { src: string; alt: string; objectPos?: string }) {
  return (
    <div className={styles.filmCard}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="280px"
        className={styles.filmCardPhoto}
        style={objectPos ? { objectPosition: objectPos } : undefined}
        quality={80}
      />
      <div className={styles.filmCardOverlay} aria-hidden="true" />
    </div>
  );
}

/* ── Section ─────────────────────────────────────────────────────────────── */
export default function Section4Gallery() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef  = useRef<HTMLDivElement>(null);
  const stripRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Reveal heading on scroll into view
    gsap.fromTo(headerRef.current,
      { opacity: 0, y: 30, filter: "blur(8px)" },
      {
        opacity: 1, y: 0, filter: "blur(0px)",
        duration: 0.9, ease: "power3.out",
        scrollTrigger: {
          trigger: "#section-4",
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Parallax lift of the whole film strip on scroll
    gsap.to(stripRef.current, {
      y: -60,
      ease: "none",
      scrollTrigger: {
        trigger: "#section-4",
        start: "top bottom",
        end: "bottom top",
        scrub: 1.2,
      },
    });
  }, []);

  return (
    <div ref={sectionRef} className={styles.wrapper}>
      {/* Heading — stacked layout */}
      <div ref={headerRef} className={styles.headerBlock}>
        <h2 className={styles.heading} id="gallery-heading">
          <span className={styles.headingGray}>KHOẢNH KHẮC </span>
          <span className={styles.headingHighlight} aria-label="đáng nhớ">
            <span className={styles.highlightBg} aria-hidden="true" />
            <span className={styles.highlightText}>ĐÁNG NHỚ</span>
          </span>
        </h2>
        {/* Subtitle directly below heading — bold */}
        <p className={styles.subtext}>
          Những buổi chia sẻ, workshop và kết nối giữa những nhà lãnh đạo hàng đầu
        </p>
      </div>

      {/* Film strip — 3 rows going in alternating directions */}
      <div ref={stripRef} className={styles.filmOuter}>
        <div className={styles.filmInner}>

          {/* Row 1 — scroll left */}
          <div className={`${styles.filmRow} ${styles.rowLeft}`}>
            {[...ROW_1, ...ROW_1].map((c, i) => (
              <FilmCard key={`r1-${i}`} src={c.src} alt={c.alt} />
            ))}
          </div>

          {/* Row 2 — scroll right */}
          <div className={`${styles.filmRow} ${styles.rowRight}`}>
            {[...ROW_2, ...ROW_2].map((c, i) => (
              <FilmCard key={`r2-${i}`} src={c.src} alt={c.alt} />
            ))}
          </div>

          {/* Row 3 — scroll left (slower) */}
          <div className={`${styles.filmRow} ${styles.rowLeftSlow}`}>
            {[...ROW_3, ...ROW_3].map((c, i) => (
              <FilmCard key={`r3-${i}`} src={c.src} alt={c.alt} />
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
