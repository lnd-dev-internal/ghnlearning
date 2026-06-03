"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import styles from "./Section2Overlay.module.css";

gsap.registerPlugin(ScrollTrigger);

export default function Section2Overlay() {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const bodyRef    = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: "#section-2",
        start: "top 65%",
        end: "top 15%",
        toggleActions: "play none none reverse",
      },
    });

    tl.fromTo(headingRef.current,
      { opacity: 0, y: 30, filter: "blur(10px)" },
      { opacity: 1, y: 0, filter: "blur(0px)", duration: 0.9, ease: "power3.out" }
    )
    .fromTo(bodyRef.current,
      { opacity: 0, y: 20 },
      { opacity: 1, y: 0, duration: 0.7, ease: "power2.out" },
      "-=0.4"
    );
  }, []);

  return (
    <div className={styles.wrapper}>
      <h2 ref={headingRef} className={styles.heading}>
        Mục đích
      </h2>
      <p ref={bodyRef} className={styles.body}>
        Leaders Talk tập hợp những nhà lãnh đạo tầm nhìn nhất thế giới
        trong một hệ sinh thái ý tưởng sống động — nơi mỗi ý tưởng được
        rèn giũa từ tiềm năng và hội tụ thành hiện thực.
      </p>
    </div>
  );
}
