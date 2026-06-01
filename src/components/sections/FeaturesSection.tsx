"use client";

import { useRef } from "react";
import { useScrollReveal } from "@/hooks/useGSAP";
import styles from "./FeaturesSection.module.css";

const features = [
  {
    icon: "⬡",
    title: "React Three Fiber",
    desc: "Render 3D declaratively trong React. Tận dụng toàn bộ ecosystem của Three.js với syntax React thân thuộc.",
    color: "#7c6aff",
    id: "feature-r3f",
  },
  {
    icon: "✦",
    title: "Drei Helpers",
    desc: "Hơn 100 abstractions sẵn có: OrbitControls, loaders, shaders, physics helpers, và nhiều hơn nữa.",
    color: "#ff6ab0",
    id: "feature-drei",
  },
  {
    icon: "◈",
    title: "GSAP ScrollTrigger",
    desc: "Kích hoạt animations khi scroll với precision tuyệt đối. Pin, scrub, timeline — toàn bộ trong tầm tay.",
    color: "#00e5ff",
    id: "feature-gsap",
  },
  {
    icon: "▲",
    title: "Next.js App Router",
    desc: "Server components, streaming, built-in optimizations. Nền tảng production-ready cho creative projects.",
    color: "#ff9f43",
    id: "feature-next",
  },
];

export default function FeaturesSection() {
  const sectionRef = useRef<HTMLElement>(null);
  useScrollReveal(sectionRef, "[data-reveal]");

  return (
    <section ref={sectionRef} className={`section ${styles.features}`} id="features">
      <div className={styles.container}>
        <div className={styles.header} data-reveal>
          <span className={styles.sectionTag}>Stack & Tools</span>
          <h2 className={styles.sectionTitle}>
            Mọi thứ bạn cần để{" "}
            <span className="gradient-text">tạo ra điều kỳ diệu</span>
          </h2>
        </div>

        <div className={styles.grid}>
          {features.map((feature) => (
            <article
              key={feature.id}
              className={`glass-card ${styles.card}`}
              data-reveal
              id={feature.id}
            >
              <div
                className={styles.cardIcon}
                style={{ color: feature.color, textShadow: `0 0 20px ${feature.color}` }}
              >
                {feature.icon}
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDesc}>{feature.desc}</p>
              <div
                className={styles.cardAccent}
                style={{ background: feature.color }}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
