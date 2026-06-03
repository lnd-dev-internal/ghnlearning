"use client";

import { useRef, useMemo, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";

// ─── Shaders ─────────────────────────────────────────────────────────────────

const vertexShader = /* glsl */ `
  uniform float uTime;
  uniform float uPixelRatio;
  attribute float aSize;
  attribute vec3 aColor;
  varying vec3  vColor;
  varying float vDepth;

  void main() {
    vColor = aColor;

    vec3 pos = position;

    // Gentle per-particle breathing in Z
    float phase = uTime * 0.6 + pos.x * 1.8 + pos.y * 2.3;
    pos.z += sin(phase) * 0.12;

    vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
    gl_Position = projectionMatrix * mvPos;

    // Perspective size attenuation
    gl_PointSize = aSize * uPixelRatio * (18.0 / -mvPos.z);
    gl_PointSize = clamp(gl_PointSize, 0.5, 10.0);

    // Depth factor for alpha fade (particles behind look dimmer)
    vDepth = smoothstep(-1.5, 1.5, pos.z);
  }
`;

const fragmentShader = /* glsl */ `
  varying vec3  vColor;
  varying float vDepth;

  void main() {
    // Gaussian soft circle – produces natural glow halo
    vec2 uv = gl_PointCoord - vec2(0.5);
    float d  = length(uv);
    if (d > 0.5) discard;

    float alpha = exp(-d * d * 10.0);   // gaussian falloff
    alpha *= mix(0.55, 1.0, vDepth);    // dim particles behind

    gl_FragColor = vec4(vColor, alpha);
  }
`;

// ─── Canvas → Particle Sampling ──────────────────────────────────────────────

function sampleTextPositions(text: string, count: number) {
  const W = 1600, H = 340;
  const canvas = document.createElement("canvas");
  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;

  // Black background
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, W, H);

  // Bold text
  ctx.fillStyle = "#fff";
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";

  // Adaptive font size — Anton is naturally bold/condensed, no weight needed
  let fontSize = 240;
  ctx.font = `${fontSize}px Anton, "Arial Black", Arial, sans-serif`;

  // Shrink until it fits
  while (ctx.measureText(text).width > W * 0.92 && fontSize > 80) {
    fontSize -= 5;
    ctx.font = `${fontSize}px Anton, "Arial Black", Arial, sans-serif`;
  }

  ctx.fillText(text, W / 2, H / 2);

  // Collect white pixels
  const { data } = ctx.getImageData(0, 0, W, H);
  const pool: number[] = [];

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      if (data[(y * W + x) * 4] > 100) pool.push(x, y);
    }
  }

  const pairLen = pool.length / 2;
  if (pairLen === 0) console.warn("[ParticleText] No text pixels found!");

  // World-space scale  (10 units wide, aspect-correct height)
  const scaleX = 10 / W;
  const scaleY = 10 / W;

  const positions = new Float32Array(count * 3);
  const colors    = new Float32Array(count * 3);
  const sizes     = new Float32Array(count);

  // Color palette  – mostly white, accent tints
  const palette = [
    new THREE.Color("#ffffff"),  // white      (60%)
    new THREE.Color("#e8e0ff"),  // soft lilac (20%)
    new THREE.Color("#c4b5fd"),  // violet     (12%)
    new THREE.Color("#a78bfa"),  // purple     ( 8%)
  ];

  for (let i = 0; i < count; i++) {
    const idx = Math.floor(Math.random() * pairLen) * 2;
    const px  = pool[idx];
    const py  = pool[idx + 1];

    // Position with tiny jitter + z-depth
    positions[i * 3]     = (px - W / 2) * scaleX + (Math.random() - 0.5) * 0.04;
    positions[i * 3 + 1] = -(py - H / 2) * scaleY + (Math.random() - 0.5) * 0.04;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 3.0; // ±1.5 z-depth

    // Color
    const t  = Math.random();
    const ci = t < 0.60 ? 0 : t < 0.80 ? 1 : t < 0.92 ? 2 : 3;
    const c  = palette[ci];
    colors[i * 3]     = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;

    // Size: 95% regular, 5% sparkle
    sizes[i] = Math.random() < 0.95
      ? 1.0 + Math.random() * 1.2   // 1.0 – 2.2
      : 3.0 + Math.random() * 2.5;  // 3.0 – 5.5 (sparkle)
  }

  return { positions, colors, sizes };
}

// ─── Ambient dust particles ───────────────────────────────────────────────────

function AmbientParticles({ count = 1800 }: { count?: number }) {
  const ref = useRef<THREE.Points>(null!);

  const { positions, colors } = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3]     = (Math.random() - 0.5) * 18;
      pos[i * 3 + 1] = (Math.random() - 0.5) *  6;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
      const v = 0.2 + Math.random() * 0.3;
      col[i * 3] = col[i * 3 + 1] = col[i * 3 + 2] = v;
    }
    return { positions: pos, colors: col };
  }, [count]);

  useFrame((s) => {
    if (ref.current) ref.current.rotation.y = s.clock.elapsedTime * 0.015;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
        <bufferAttribute attach="attributes-color"    args={[colors, 3]}    />
      </bufferGeometry>
      <pointsMaterial
        size={0.018}
        sizeAttenuation
        vertexColors
        transparent
        opacity={0.45}
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface ParticleTextProps {
  text?:          string;
  particleCount?: number;
}

export default function ParticleText({
  text          = "LEADERS TALK",
  particleCount = 10000,
}: ParticleTextProps) {
  const pointsRef = useRef<THREE.Points>(null!);
  const matRef    = useRef<THREE.ShaderMaterial>(null!);

  // --- Client-only particle data (canvas API not available on server) ---
  const emptyData = useMemo(() => ({
    positions: new Float32Array(particleCount * 3),
    colors:    new Float32Array(particleCount * 3).fill(1),
    sizes:     new Float32Array(particleCount).fill(1),
  }), [particleCount]);

  const [particleData, setParticleData] = useState(emptyData);
  const [pixelRatio, setPixelRatio]     = useState(1);

  useEffect(() => {
    // Ensure Anton font is loaded before canvas sampling
    const loadAndSample = async () => {
      try {
        // Force Anton font to be loaded via FontFace API
        const font = new FontFace(
          "Anton",
          "url(https://fonts.gstatic.com/s/anton/v25/1Ptgg87LROyAm0K08i4gS7lu.woff2)"
        );
        await font.load();
        (document.fonts as FontFaceSet).add(font);
        await document.fonts.ready;
      } catch (e) {
        console.warn("[ParticleText] Anton font load failed, using fallback", e);
      }
      setParticleData(sampleTextPositions(text, particleCount));
      setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };
    loadAndSample();
  }, [text, particleCount]);

  // Update pixelRatio uniform when it becomes known
  useEffect(() => {
    if (matRef.current) {
      matRef.current.uniforms.uPixelRatio.value = pixelRatio;
    }
  }, [pixelRatio]);

  // Animate uTime
  useFrame((state) => {
    if (matRef.current) {
      matRef.current.uniforms.uTime.value = state.clock.elapsedTime;
    }
    if (pointsRef.current) {
      pointsRef.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.1) * 0.06;
    }
  });

  const { positions, colors, sizes } = particleData;

  return (
    <group>
      {/* Main text particles */}
      <points ref={pointsRef}>
        <bufferGeometry>
          <bufferAttribute attach="attributes-position" args={[positions, 3]} />
          <bufferAttribute attach="attributes-aColor"   args={[colors, 3]}    />
          <bufferAttribute attach="attributes-aSize"    args={[sizes, 1]}     />
        </bufferGeometry>
        <shaderMaterial
          ref={matRef}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          transparent
          depthWrite={false}
          blending={THREE.AdditiveBlending}
          uniforms={{
            uTime:       { value: 0 },
            uPixelRatio: { value: 1 },
          }}
        />
      </points>

      {/* Ambient dust */}
      <AmbientParticles count={1800} />
    </group>
  );
}
