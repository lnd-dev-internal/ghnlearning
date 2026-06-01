"use client";

import dynamic from "next/dynamic";

// Must be in a Client Component to use ssr: false
const HeroScene = dynamic(() => import("./HeroScene"), { ssr: false });

export default function ClientHero() {
  return <HeroScene />;
}
