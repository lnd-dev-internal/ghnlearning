"use client";

import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { MeshDistortMaterial, Sphere, MeshWobbleMaterial } from "@react-three/drei";
import * as THREE from "three";

// ─── Animated Orb ────────────────────────────────────────────────────────────
export function AnimatedOrb({
  position = [0, 0, 0] as [number, number, number],
  color = "#7c6aff",
  scale = 1,
  speed = 0.5,
}: {
  position?: [number, number, number];
  color?: string;
  scale?: number;
  speed?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime * speed;
    meshRef.current.position.y = position[1] + Math.sin(t) * 0.3;
    meshRef.current.rotation.x = t * 0.2;
    meshRef.current.rotation.z = t * 0.15;
  });

  return (
    <Sphere ref={meshRef} args={[1, 64, 64]} position={position} scale={scale}>
      <MeshDistortMaterial
        color={color}
        attach="material"
        distort={0.4}
        speed={2}
        roughness={0.1}
        metalness={0.8}
        envMapIntensity={1}
      />
    </Sphere>
  );
}

// ─── Floating Torus ──────────────────────────────────────────────────────────
export function FloatingTorus({
  position = [0, 0, 0] as [number, number, number],
  color = "#ff6ab0",
  scale = 1,
}: {
  position?: [number, number, number];
  color?: string;
  scale?: number;
}) {
  const meshRef = useRef<THREE.Mesh>(null!);

  useFrame((state) => {
    const t = state.clock.elapsedTime;
    meshRef.current.rotation.x = t * 0.3;
    meshRef.current.rotation.y = t * 0.5;
    meshRef.current.position.y = position[1] + Math.cos(t * 0.7) * 0.4;
  });

  return (
    <mesh ref={meshRef} position={position} scale={scale}>
      <torusKnotGeometry args={[1, 0.3, 128, 16]} />
      <MeshWobbleMaterial
        color={color}
        attach="material"
        factor={0.3}
        speed={1.5}
        roughness={0.05}
        metalness={0.9}
        wireframe={false}
      />
    </mesh>
  );
}

// ─── Particle Field ───────────────────────────────────────────────────────────
export function ParticleField({ count = 300 }: { count?: number }) {
  const pointsRef = useRef<THREE.Points>(null!);

  const positions = new Float32Array(count * 3);
  const colors = new Float32Array(count * 3);

  const palette = [
    new THREE.Color("#7c6aff"),
    new THREE.Color("#ff6ab0"),
    new THREE.Color("#00e5ff"),
    new THREE.Color("#ffffff"),
  ];

  for (let i = 0; i < count; i++) {
    positions[i * 3] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 10;

    const c = palette[Math.floor(Math.random() * palette.length)];
    colors[i * 3] = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;
  }

  useFrame((state) => {
    pointsRef.current.rotation.y = state.clock.elapsedTime * 0.03;
    pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.02) * 0.1;
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute
          attach="attributes-color"
          args={[colors, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        vertexColors
        transparent
        opacity={0.8}
        sizeAttenuation
      />
    </points>
  );
}
