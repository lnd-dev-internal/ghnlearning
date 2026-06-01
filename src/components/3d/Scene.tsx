"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, Preload } from "@react-three/drei";
import { Suspense } from "react";
import { AnimatedOrb, FloatingTorus, ParticleField } from "./SceneObjects";
import styles from "./Scene.module.css";

function SceneFallback() {
  return null;
}

interface SceneProps {
  interactive?: boolean;
  showOrbitControls?: boolean;
}

export default function Scene({ interactive = false, showOrbitControls = false }: SceneProps) {
  return (
    <div className={`canvas-container ${interactive ? "interactive" : ""} ${styles.sceneWrapper}`}>
      <Canvas
        camera={{ position: [0, 0, 6], fov: 70 }}
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance",
        }}
      >
        <Suspense fallback={<SceneFallback />}>
          {/* Lighting */}
          <ambientLight intensity={0.3} />
          <pointLight position={[5, 5, 5]} intensity={1.5} color="#7c6aff" />
          <pointLight position={[-5, -5, -5]} intensity={1} color="#ff6ab0" />
          <pointLight position={[0, 5, -5]} intensity={0.8} color="#00e5ff" />

          {/* 3D Objects */}
          <AnimatedOrb position={[-2.5, 0, 0]} color="#7c6aff" scale={1.2} speed={0.4} />
          <FloatingTorus position={[2.5, 0, -1]} color="#ff6ab0" scale={0.8} />
          <ParticleField count={400} />

          {/* Environment & Controls */}
          <Environment preset="city" />
          {showOrbitControls && (
            <OrbitControls
              enableZoom={false}
              enablePan={false}
              autoRotate
              autoRotateSpeed={0.5}
              maxPolarAngle={Math.PI / 1.5}
              minPolarAngle={Math.PI / 3}
            />
          )}

          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
}
