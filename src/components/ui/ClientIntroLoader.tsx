"use client";
// Thin client wrapper so IntroLoader can be imported in a Server Component page.
import dynamic from "next/dynamic";

const IntroLoader = dynamic(() => import("./IntroLoader"), { ssr: false });

export default function ClientIntroLoader() {
  return <IntroLoader />;
}
