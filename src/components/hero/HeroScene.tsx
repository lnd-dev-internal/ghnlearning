"use client";

import { useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { KernelSize } from "postprocessing";
import { Suspense } from "react";
import * as THREE from "three";
import ParticleText from "./ParticleText";

// ─── Camera Rig: follows mouse for 3D parallax feel ──────────────────────────
function CameraRig() {
  const { camera, mouse } = useThree();
  const target = useRef(new THREE.Vector3(0, 0, 6));

  useFrame(() => {
    target.current.set(
      mouse.x * 0.8,   // ±0.8 units X
      mouse.y * 0.4,   // ±0.4 units Y
      6
    );
    // Smooth lerp — feels weighty, not snappy
    camera.position.lerp(target.current, 0.04);
    camera.lookAt(0, 0, 0);
  });

  return null;
}

// ─── Main Scene ───────────────────────────────────────────────────────────────
export default function HeroScene() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        background: "#000000",
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 6], fov: 60, near: 0.1, far: 100 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance",
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2,
        }}
      >
        {/* Pure black background */}
        <color attach="background" args={["#000000"]} />

        <Suspense fallback={null}>
          {/* 10 000-particle "LEADERS TALK" logo */}
          <ParticleText text="LEADERS TALK" particleCount={10000} />

          {/* Camera follows mouse */}
          <CameraRig />

          {/* Bloom — makes particles glow like phosphor dots */}
          <EffectComposer multisampling={0}>
            <Bloom
              intensity={2.8}
              luminanceThreshold={0.05}
              luminanceSmoothing={0.85}
              kernelSize={KernelSize.LARGE}
              mipmapBlur
            />
          </EffectComposer>
        </Suspense>
      </Canvas>
    </div>
  );
}
