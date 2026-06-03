"use client";

import dynamic from "next/dynamic";

// Prevent WebGL from running on the server
const ThreeScene = dynamic(() => import("./ThreeScene"), { ssr: false });

export default function ClientScene() {
  return <ThreeScene />;
}
