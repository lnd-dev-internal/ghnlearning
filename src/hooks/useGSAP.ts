"use client";

import { useEffect, useRef, RefObject } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register ScrollTrigger plugin once
gsap.registerPlugin(ScrollTrigger);

// ─── useScrollReveal ──────────────────────────────────────────────────────────
/**
 * Animates elements into view as they scroll into the viewport.
 * @param selector - CSS selector for elements to animate (within the container)
 * @param options - GSAP ScrollTrigger options
 */
export function useScrollReveal<T extends HTMLElement>(
  containerRef: RefObject<T | null>,
  selector: string = "[data-reveal]",
  fromVars: gsap.TweenVars = {},
  toVars: gsap.TweenVars = {}
) {
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = gsap.utils.toArray<HTMLElement>(selector, container);
    if (!elements.length) return;

    const ctx = gsap.context(() => {
      elements.forEach((el, i) => {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 60,
            filter: "blur(8px)",
            ...fromVars,
          },
          {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            duration: 0.9,
            delay: i * 0.1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 85%",
              end: "top 40%",
              toggleActions: "play none none reverse",
            },
            ...toVars,
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, [containerRef, selector, fromVars, toVars]);
}

// ─── useParallax ─────────────────────────────────────────────────────────────
/**
 * Applies a scroll-driven parallax effect to an element.
 * @param speed - Parallax multiplier (negative = opposite direction)
 */
export function useParallax<T extends HTMLElement>(
  ref: RefObject<T | null>,
  speed: number = 0.3
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      gsap.to(el, {
        yPercent: speed * 100,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    return () => ctx.revert();
  }, [ref, speed]);
}

// ─── useHeroTimeline ──────────────────────────────────────────────────────────
/**
 * Master timeline for hero section entrance animation.
 */
export function useHeroTimeline<T extends HTMLElement>(
  containerRef: RefObject<T | null>
) {
  const tlRef = useRef<gsap.core.Timeline | null>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        "[data-hero-tag]",
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6 }
      )
        .fromTo(
          "[data-hero-title]",
          { opacity: 0, y: 80, skewY: 3 },
          { opacity: 1, y: 0, skewY: 0, duration: 1, stagger: 0.05 },
          "-=0.3"
        )
        .fromTo(
          "[data-hero-desc]",
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.7 },
          "-=0.5"
        )
        .fromTo(
          "[data-hero-cta]",
          { opacity: 0, scale: 0.85 },
          { opacity: 1, scale: 1, duration: 0.6 },
          "-=0.4"
        );

      tlRef.current = tl;
    }, container);

    return () => ctx.revert();
  }, [containerRef]);

  return tlRef;
}

// ─── usePinSection ────────────────────────────────────────────────────────────
/**
 * Pins a section while scrolling through it.
 * @param duration - Scroll distance to pin for (px)
 */
export function usePinSection<T extends HTMLElement>(
  ref: RefObject<T | null>,
  duration: number = 500
) {
  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top top",
        end: `+=${duration}`,
        pin: true,
        pinSpacing: true,
      });
    });

    return () => ctx.revert();
  }, [ref, duration]);
}

export { gsap, ScrollTrigger };
