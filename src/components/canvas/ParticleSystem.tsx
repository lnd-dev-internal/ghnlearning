"use client";

import { useRef, useState, useEffect, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { particleStore } from "@/lib/particleStore";
import { sampleTextPositions, sampleStatsPositions } from "@/lib/textSampler";
import { fibonacciSphere, fourMiniSpheres } from "@/lib/sphereSampler";
import { particleVertexShader } from "@/shaders/particleVert";
import { particleFragmentShader } from "@/shaders/particleFrag";

const PARTICLE_COUNT = 3000;

// ── Color palette — warm orange for light theme ─────────────────────────────────
const PALETTE = [
  new THREE.Color("#FF5200"),  // primary orange
  new THREE.Color("#FF6B20"),  // medium orange
  new THREE.Color("#CC4200"),  // deep orange
  new THREE.Color("#FF7540"),  // lighter orange
  new THREE.Color("#E84800"),  // rich orange
];
const PALETTE_W = [0.30, 0.55, 0.72, 0.88, 1.00];

function pickColor(): THREE.Color {
  const r = Math.random();
  for (let i = 0; i < PALETTE_W.length; i++) {
    if (r < PALETTE_W[i]) return PALETTE[i];
  }
  return PALETTE[0];
}

// ── Build per-particle geometry data ─────────────────────────────────────────
function buildParticleData(textPos: Float32Array, statsPos: Float32Array) {
  const spherePos     = fibonacciSphere(PARTICLE_COUNT);
  const miniSpherePos = fourMiniSpheres(PARTICLE_COUNT);
  const freePos       = new Float32Array(PARTICLE_COUNT * 3);
  const colors        = new Float32Array(PARTICLE_COUNT * 3);
  const sizes         = new Float32Array(PARTICLE_COUNT);
  const randoms       = new Float32Array(PARTICLE_COUNT);

  for (let i = 0; i < PARTICLE_COUNT; i++) {
    const tx = textPos[i * 3];
    const ty = textPos[i * 3 + 1];

    // Disintegration target: spread upward/outward from text
    freePos[i * 3]     = tx + (Math.random() - 0.5) * 14;
    freePos[i * 3 + 1] = ty + 2.0 + Math.random() * 8;
    freePos[i * 3 + 2] = (Math.random() - 0.5) * 5;

    const c = pickColor();
    colors[i * 3]     = c.r;
    colors[i * 3 + 1] = c.g;
    colors[i * 3 + 2] = c.b;

    // Small, sharp, uniform dots — tech point-cloud look
    sizes[i] = Math.random() < 0.92
      ? 1.8 + Math.random() * 0.8   // core dots: 1.8-2.6
      : 3.2 + Math.random() * 1.2;  // 8% accent dots slightly larger

    randoms[i] = Math.random();
  }

  return { spherePos, miniSpherePos, freePos, colors, sizes, randoms, statsPos };
}

// ── Component ─────────────────────────────────────────────────────────────────
export default function ParticleSystem() {
  const geomRef = useRef<THREE.BufferGeometry>(null!);
  const matRef  = useRef<THREE.ShaderMaterial>(null!);

  const pixelRatio = useMemo(() =>
    typeof window !== "undefined" ? Math.min(window.devicePixelRatio, 2) : 1
  , []);

  const [ready, setReady] = useState(false);

  // ── Initialize ────────────────────────────────────────────────────────────
  useEffect(() => {
    // Preload Anton font so canvas sampling gets the right thick glyphs
    const loadAndInit = async () => {
      try {
        const font = new FontFace(
          "Anton",
          "url(https://fonts.gstatic.com/s/anton/v25/1Ptgg87LROyAm0K08i4gS7lu.woff2)"
        );
        await font.load();
        (document.fonts as FontFaceSet).add(font);
        await document.fonts.ready;
      } catch {
        // fallback to Arial Black if font fails
      }

      const textPos  = sampleTextPositions("LEADERS TALK", PARTICLE_COUNT);
      const statsPos = sampleStatsPositions(PARTICLE_COUNT);
      const { spherePos, miniSpherePos, freePos, colors, sizes, randoms } =
        buildParticleData(textPos, statsPos);

      const g = geomRef.current;
      g.setAttribute("position",      new THREE.BufferAttribute(textPos.slice(), 3));
      g.setAttribute("aTextPos",      new THREE.BufferAttribute(textPos,         3));
      g.setAttribute("aFreePos",      new THREE.BufferAttribute(freePos,         3));
      g.setAttribute("aSpherePos",    new THREE.BufferAttribute(spherePos,       3));
      g.setAttribute("aMiniPos",      new THREE.BufferAttribute(miniSpherePos,   3));
      g.setAttribute("aStatsPos",     new THREE.BufferAttribute(statsPos,        3));
      g.setAttribute("aColor",        new THREE.BufferAttribute(colors,          3));
      g.setAttribute("aSize",         new THREE.BufferAttribute(sizes,           1));
      g.setAttribute("aRandom",       new THREE.BufferAttribute(randoms,         1));

      setReady(true);
    };

    loadAndInit();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── Mouse tracking ────────────────────────────────────────────────────────
  const mouseRef = useRef({ x: 0, y: 0 });
  useEffect(() => {
    if (!ready) return;
    const onMove = (e: MouseEvent) => {
      mouseRef.current.x =  (e.clientX / window.innerWidth)  * 2 - 1;
      mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [ready]);

  // ── Render loop ───────────────────────────────────────────────────────────
  useFrame((state) => {
    if (!matRef.current) return;
    const u = matRef.current.uniforms;
    u.uTime.value             = state.clock.elapsedTime;
    u.uIntroProgress.value    = particleStore.introProgress;
    u.uScrollProgress.value   = particleStore.scrollProgress;
    u.uAssemblyProgress.value = particleStore.assemblyProgress;
    u.uSplitProgress.value    = particleStore.splitProgress;
    u.uHideProgress.value     = particleStore.hideProgress;
    u.uStatsProgress.value    = particleStore.statsProgress;

    // Camera parallax
    const { camera } = state;
    camera.position.x += (mouseRef.current.x * 0.35 - camera.position.x) * 0.03;
    camera.position.y += (mouseRef.current.y * 0.18 - camera.position.y) * 0.03;
    camera.lookAt(0, 0, 0);
  });

  return (
    <points>
      <bufferGeometry ref={geomRef} />
      <shaderMaterial
        ref={matRef}
        vertexShader={particleVertexShader}
        fragmentShader={particleFragmentShader}
        transparent
        depthWrite={false}
        blending={THREE.NormalBlending}
        uniforms={{
          uTime:             { value: 0 },
          uIntroProgress:    { value: 0 },
          uScrollProgress:   { value: 0 },
          uAssemblyProgress: { value: 0 },
          uSplitProgress:    { value: 0 },
          uHideProgress:     { value: 0 },
          uStatsProgress:    { value: 0 },
          uPixelRatio:       { value: pixelRatio },
        }}
      />
    </points>
  );
}
