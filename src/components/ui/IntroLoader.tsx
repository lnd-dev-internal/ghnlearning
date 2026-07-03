"use client";

import { useEffect } from "react";
import { dispatchIntroComplete } from "@/lib/introEvents";

/**
 * Opening intro removed by request — no door animation.
 * We keep this component only to fire the intro-complete event immediately
 * on mount, so downstream listeners (ScrollController, etc.) still start.
 */
export default function IntroLoader() {
  useEffect(() => {
    document.body.style.overflow = "";
    dispatchIntroComplete();
  }, []);

  return null;
}
