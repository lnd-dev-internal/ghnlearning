"use client";

import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
import * as THREE from "three";
import ParticleSystem from "./ParticleSystem";

export default function ThreeScene() {
  return (
    <div
      data-canvas-wrapper=""
      style={{
        position: "fixed",
        top: 64,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 0,
        background: "#F0EFEA",
        pointerEvents: "none",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        style={{ pointerEvents: "none" }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 0.9,
        }}
      >
        {/* Warm cream background */}
        <color attach="background" args={["#F0EFEA"]} />

        <Suspense fallback={null}>
          <ParticleSystem />

          {/* Subtle bloom — light theme needs much lower intensity */}
          <EffectComposer multisampling={0}>
            <Bloom
              intensity={0.4}
              luminanceThreshold={0.60}
              luminanceSmoothing={0.80}
              kernelSize={KernelSize.MEDIUM}
              mipmapBlur
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
