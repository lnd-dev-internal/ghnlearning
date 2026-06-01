"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Section3Overlay.module.css";

gsap.registerPlugin(ScrollTrigger);

const CORE_VALUES = [
  {
    id: "cv-1",
    icon: "◎",
    color: "var(--c1)",
    title: "Góc nhìn thực chiến",
    body: "Không phải lý thuyết. Bạn được nghe cách người thật đang xử lý vấn đề thật – thứ bạn có thể đem về áp dụng ngay ngày mai.",
  },
  {
    id: "cv-2",
    icon: "✦",
    color: "var(--c2)",
    title: "Đào sâu pain point",
    body: "Những vấn đề \"đau nhưng ít ai nói\" sẽ được mang lên bàn: đội ngũ, KPI, vận hành, áp lực... và mổ xẻ đến tận gốc.",
  },
  {
    id: "cv-3",
    icon: "◈",
    color: "var(--c3)",
    title: "Tranh luận trực diện",
    body: "Không chỉ nghe – bạn được hỏi thẳng, phản biện, challenge diễn giả để tìm ra góc nhìn phù hợp nhất với mình.",
  },
  {
    id: "cv-4",
    icon: "⬡",
    color: "var(--c4)",
    title: "Giải pháp thực tế",
    body: "Rời buổi không chỉ có insight, mà có luôn cách làm cụ thể để xử lý bài toán bạn đang mắc kẹt.",
  },
];

export default function Section3Overlay() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cards = cardsRef.current?.querySelectorAll("[data-card]");

    gsap.timeline({
      scrollTrigger: {
        trigger: "#section-3",
        start: "top 60%",
        end: "top 10%",
        toggleActions: "play none none reverse",
      },
    })
      .fromTo(headingRef.current,
        { opacity: 0, y: 24, filter: "blur(6px)" },
        { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.8, ease: "power3.out" }
      )
      .fromTo(cards ?? [],
        { opacity: 0, y: 28 },
        { opacity: 1, y: 0, duration: 0.65, ease: "power2.out", stagger: 0.10 },
        "-=0.4"
      );
  }, []);

  return (
    <div className={styles.wrapper}>
      {/* Section heading — no label above */}
      <h2 ref={headingRef} className={styles.heading} id="core-values-heading">
        Bốn giá trị{" "}
        <span className={styles.headingAccent}>cốt lõi</span>
      </h2>

      {/* Frameless 4-column cards */}
      <div ref={cardsRef} className={styles.cards} id="core-values-cards">
        {CORE_VALUES.map((v) => (
          <div
            key={v.id}
            data-card=""
            className={styles.card}
            style={{ "--card-color": v.color } as React.CSSProperties}
          >
            <div className={styles.cardAccent} />
            <span className={styles.cardIcon}>{v.icon}</span>
            <h3 className={styles.cardTitle}>{v.title}</h3>
            <p className={styles.cardBody}>{v.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
