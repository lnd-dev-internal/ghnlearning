(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/sphereSampler.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * sphereSampler.ts
 * Fibonacci sphere distribution — uniform coverage, no poles clustering.
 * yOffset shifts the sphere up so text can appear below it in the viewport.
 */ __turbopack_context__.s([
    "fibonacciSphere",
    ()=>fibonacciSphere
]);
function fibonacciSphere(count, radius = 2.2, yOffset = 0.8) {
    const positions = new Float32Array(count * 3);
    const phi = Math.PI * (3.0 - Math.sqrt(5.0)); // golden angle
    for(let i = 0; i < count; i++){
        const y = 1 - i / (count - 1) * 2;
        const r = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = phi * i;
        positions[i * 3] = Math.cos(theta) * r * radius;
        positions[i * 3 + 1] = y * radius + yOffset; // shift up
        positions[i * 3 + 2] = Math.sin(theta) * r * radius;
    }
    return positions;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shaders/particleVert.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "particleVertexShader",
    ()=>particleVertexShader
]);
const particleVertexShader = /* glsl */ `
// ── 3D Simplex Noise ──────────────────────────────────────────────────────────
vec3 _mod289(vec3 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 _mod289(vec4 x) { return x - floor(x * (1.0/289.0)) * 289.0; }
vec4 _permute(vec4 x) { return _mod289(((x * 34.0) + 1.0) * x); }
vec4 _taylorInvSqrt(vec4 r){ return 1.79284291400159 - 0.85373472095314 * r; }

float snoise(vec3 v) {
  const vec2 C = vec2(1.0/6.0, 1.0/3.0);
  const vec4 D = vec4(0.0, 0.5, 1.0, 2.0);
  vec3 i  = floor(v + dot(v, C.yyy));
  vec3 x0 = v - i + dot(i, C.xxx);
  vec3 g  = step(x0.yzx, x0.xyz);
  vec3 l  = 1.0 - g;
  vec3 i1 = min(g.xyz, l.zxy);
  vec3 i2 = max(g.xyz, l.zxy);
  vec3 x1 = x0 - i1 + C.xxx;
  vec3 x2 = x0 - i2 + C.yyy;
  vec3 x3 = x0 - D.yyy;
  i = _mod289(i);
  vec4 p = _permute(_permute(_permute(
    i.z + vec4(0.0,i1.z,i2.z,1.0))
    + i.y + vec4(0.0,i1.y,i2.y,1.0))
    + i.x + vec4(0.0,i1.x,i2.x,1.0));
  float n_ = 1.0/7.0;
  vec3  ns = n_ * D.wyz - D.xzx;
  vec4 j   = p - 49.0 * floor(p * ns.z * ns.z);
  vec4 x_  = floor(j * ns.z);
  vec4 y_  = floor(j - 7.0 * x_);
  vec4 x   = x_ * ns.x + ns.yyyy;
  vec4 y   = y_ * ns.x + ns.yyyy;
  vec4 h   = 1.0 - abs(x) - abs(y);
  vec4 b0  = vec4(x.xy, y.xy);
  vec4 b1  = vec4(x.zw, y.zw);
  vec4 s0  = floor(b0)*2.0+1.0;
  vec4 s1  = floor(b1)*2.0+1.0;
  vec4 sh  = -step(h, vec4(0.0));
  vec4 a0  = b0.xzyw + s0.xzyw * sh.xxyy;
  vec4 a1  = b1.xzyw + s1.xzyw * sh.zzww;
  vec3 p0  = vec3(a0.xy, h.x);
  vec3 p1  = vec3(a0.zw, h.y);
  vec3 p2  = vec3(a1.xy, h.z);
  vec3 p3  = vec3(a1.zw, h.w);
  vec4 norm = _taylorInvSqrt(
    vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x; p1*=norm.y; p2*=norm.z; p3*=norm.w;
  vec4 m = max(0.6-vec4(
    dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);
  m=m*m;
  return 42.0*dot(m*m,
    vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}

// ── Uniforms / Attributes ─────────────────────────────────────────────────────
uniform float uTime;
uniform float uIntroProgress;
uniform float uScrollProgress;
uniform float uAssemblyProgress;
uniform float uPixelRatio;

attribute vec3  aTextPos;    // ambient resting positions
attribute vec3  aFreePos;    // disintegration targets
attribute vec3  aSpherePos;  // sphere assembly targets
attribute float aSize;
attribute float aRandom;
attribute vec3  aColor;

varying vec3  vColor;
varying float vAlpha;

void main() {
  float intro      = smoothstep(0.0, 1.0, uIntroProgress);
  float disintegrate = smoothstep(0.0, 0.9, uScrollProgress);
  float assemble   = smoothstep(0.0, 1.0, uAssemblyProgress);

  // ─── Phase 1: INTRO — rise from below into ambient cloud ─────────────────
  vec3 introStart = vec3(aTextPos.x * 0.5, aTextPos.y - 5.0, aTextPos.z * 0.3);
  vec3 ambientPos = mix(introStart, aTextPos, intro);

  // Gentle ambient drift (very subtle, always-on)
  float driftT = uTime * 0.12 + aRandom * 6.28;
  vec3 drift = vec3(
    snoise(vec3(driftT, aRandom * 3.1, 0.0)) * 0.04,
    snoise(vec3(0.0, driftT, aRandom * 2.7)) * 0.025,
    snoise(vec3(aRandom * 2.3, 0.0, driftT)) * 0.03
  );
  ambientPos += drift * intro;

  // ─── Phase 2: DISINTEGRATION — noise-driven flow upward ──────────────────
  float tNoise = uTime * 0.18 + aRandom * 6.28318;
  vec3  ni = vec3(
    aFreePos.x * 0.35 + tNoise,
    aFreePos.y * 0.35 + tNoise * 0.6,
    aFreePos.z * 0.35 + tNoise * 1.3
  );
  float strength = 2.6 * disintegrate * (1.0 - assemble);
  vec3 noiseOff = vec3(
    snoise(ni),
    snoise(ni + vec3(100.0, 0.0, 0.0)),
    snoise(ni + vec3(0.0, 100.0, 0.0))
  ) * strength;

  vec3 freeTarget = aFreePos + noiseOff;
  vec3 pos = mix(ambientPos, freeTarget, disintegrate);

  // ─── Phase 3: SPHERE ASSEMBLY — fibonacci sphere, slowly rotating ─────────
  float angle = uTime * 0.32;
  float cosA  = cos(angle);
  float sinA  = sin(angle);
  vec3 rotSphere = vec3(
    aSpherePos.x * cosA - aSpherePos.z * sinA,
    aSpherePos.y,
    aSpherePos.x * sinA + aSpherePos.z * cosA
  );
  pos = mix(pos, rotSphere, assemble);

  // ─── Color ────────────────────────────────────────────────────────────────
  float midFlight = disintegrate * (1.0 - assemble);

  // Flight: bright cyan/electric blue
  vec3 flightColor = mix(aColor, vec3(0.22, 0.82, 1.00), 0.55);

  // Sphere: deep purple-violet (matching reference image)
  vec3 sphereColor = vec3(
    mix(aColor.r, 0.62, 0.75),
    mix(aColor.g, 0.30, 0.75),
    mix(aColor.b, 1.00, 0.65)
  );

  vColor = mix(aColor, flightColor, midFlight);
  vColor = mix(vColor, sphereColor, assemble);

  // Brightness boost on sphere sparkle particles
  float isBig = step(2.0, aSize);
  vColor += vec3(0.15, 0.08, 0.30) * assemble * isBig;

  // ─── Size ─────────────────────────────────────────────────────────────────
  float sizeMult = 1.0 + midFlight * 1.8;
  // Sparkle effect on sphere — random size variation
  float sparkle = 1.0 + snoise(vec3(aRandom * 5.0, uTime * 0.5, 0.0)) * 0.4;
  sizeMult = mix(sizeMult, sparkle * 1.2, assemble);

  vec4 mvPos = modelViewMatrix * vec4(pos, 1.0);
  gl_Position = projectionMatrix * mvPos;
  gl_PointSize = aSize * sizeMult * uPixelRatio * (18.0 / -mvPos.z);
  gl_PointSize = clamp(gl_PointSize, 0.4, 12.0);

  // ─── Alpha ────────────────────────────────────────────────────────────────
  vAlpha = 1.0 - midFlight * 0.15;
  vAlpha *= mix(1.0, 0.7 + aRandom * 0.3, assemble); // sphere twinkle
}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/shaders/particleFrag.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * particleFrag.ts — Custom Fragment Shader
 * Renders each particle as a soft Gaussian circle for natural bloom interaction.
 */ __turbopack_context__.s([
    "particleFragmentShader",
    ()=>particleFragmentShader
]);
const particleFragmentShader = /* glsl */ `
varying vec3  vColor;
varying float vAlpha;

void main() {
  // Soft circular disc with Gaussian falloff
  vec2  uv = gl_PointCoord - 0.5;
  float d  = length(uv);

  if (d > 0.5) discard;

  // Gaussian falloff — wider → softer halo (interacts beautifully with Bloom)
  float alpha = exp(-d * d * 7.0) * vAlpha;

  gl_FragColor = vec4(vColor, alpha);
}
`;
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/ParticleSystem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ParticleSystem
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/events-b389eeca.esm.js [app-client] (ecmascript) <export D as useFrame>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/particleStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sphereSampler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/sphereSampler.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shaders$2f$particleVert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shaders/particleVert.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shaders$2f$particleFrag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/shaders/particleFrag.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
;
const PARTICLE_COUNT = 8000;
// ── Color palette — ambient phase (white / icy blue / violet) ─────────────────
const PALETTE = [
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ffffff"),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#d8eeff"),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#b0ccff"),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#c4b5fd"),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#ffffff")
];
const PALETTE_W = [
    0.45,
    0.65,
    0.82,
    0.95,
    1.00
];
function pickColor() {
    const r = Math.random();
    for(let i = 0; i < PALETTE_W.length; i++){
        if (r < PALETTE_W[i]) return PALETTE[i];
    }
    return PALETTE[0];
}
// ── Build ambient starting positions (cloud around center) ────────────────────
function buildAmbientPositions(count) {
    const pos = new Float32Array(count * 3);
    for(let i = 0; i < count; i++){
        // Three density bands for a layered, organic cloud
        const r = Math.random();
        const spread = r < 0.55 ? 0.8 : r < 0.85 ? 2.0 : 4.5;
        pos[i * 3] = (Math.random() - 0.5) * 10 * spread * 0.55;
        pos[i * 3 + 1] = (Math.random() - 0.5) * 3 * spread * 0.4;
        pos[i * 3 + 2] = (Math.random() - 0.5) * 2 * spread;
    }
    return pos;
}
// ── Build per-particle data ───────────────────────────────────────────────────
function buildParticleData(ambientPos) {
    const spherePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sphereSampler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fibonacciSphere"])(PARTICLE_COUNT, 2.2, 0.8); // shifted up
    const freePos = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const randoms = new Float32Array(PARTICLE_COUNT);
    for(let i = 0; i < PARTICLE_COUNT; i++){
        const ax = ambientPos[i * 3];
        const ay = ambientPos[i * 3 + 1];
        // Free-flight: spread upward from ambient position
        freePos[i * 3] = ax + (Math.random() - 0.5) * 14;
        freePos[i * 3 + 1] = ay + 2 + Math.random() * 8;
        freePos[i * 3 + 2] = (Math.random() - 0.5) * 5;
        const c = pickColor();
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
        sizes[i] = Math.random() < 0.95 ? 0.8 + Math.random() * 1.0 : 2.5 + Math.random() * 2.0; // sparkles
        randoms[i] = Math.random();
    }
    return {
        spherePos,
        freePos,
        colors,
        sizes,
        randoms
    };
}
function ParticleSystem() {
    _s();
    const geomRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const matRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const introRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        value: 0
    });
    const pixelRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ParticleSystem.useMemo[pixelRatio]": ()=>("TURBOPACK compile-time truthy", 1) ? Math.min(window.devicePixelRatio, 2) : "TURBOPACK unreachable"
    }["ParticleSystem.useMemo[pixelRatio]"], []);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── Initialize client-side ────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleSystem.useEffect": ()=>{
            const ambientPos = buildAmbientPositions(PARTICLE_COUNT);
            const { spherePos, freePos, colors, sizes, randoms } = buildParticleData(ambientPos);
            const g = geomRef.current;
            g.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](ambientPos, 3));
            g.setAttribute("aTextPos", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](ambientPos, 3)); // "resting" state
            g.setAttribute("aFreePos", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](freePos, 3));
            g.setAttribute("aSpherePos", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](spherePos, 3));
            g.setAttribute("aColor", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](colors, 3));
            g.setAttribute("aSize", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](sizes, 1));
            g.setAttribute("aRandom", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](randoms, 1));
            setReady(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ParticleSystem.useEffect"], []);
    // ── Intro: particles rise from below into ambient positions ───────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleSystem.useEffect": ()=>{
            if (!ready) return;
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["default"].fromTo(introRef.current, {
                value: 0
            }, {
                value: 1,
                duration: 1.8,
                delay: 0.2,
                ease: "power2.out",
                onUpdate: {
                    "ParticleSystem.useEffect": ()=>{
                        if (matRef.current) {
                            matRef.current.uniforms.uIntroProgress.value = introRef.current.value;
                        }
                    }
                }["ParticleSystem.useEffect"]
            });
        }
    }["ParticleSystem.useEffect"], [
        ready
    ]);
    // ── Mouse tracking (bypasses pointer-events:none canvas) ─────────────────
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleSystem.useEffect": ()=>{
            const onMove = {
                "ParticleSystem.useEffect.onMove": (e)=>{
                    mouseRef.current.x = e.clientX / window.innerWidth * 2 - 1;
                    mouseRef.current.y = -(e.clientY / window.innerHeight) * 2 + 1;
                }
            }["ParticleSystem.useEffect.onMove"];
            window.addEventListener("mousemove", onMove, {
                passive: true
            });
            return ({
                "ParticleSystem.useEffect": ()=>window.removeEventListener("mousemove", onMove)
            })["ParticleSystem.useEffect"];
        }
    }["ParticleSystem.useEffect"], []);
    // ── Render loop ───────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ParticleSystem.useFrame": (state)=>{
            if (!matRef.current) return;
            const u = matRef.current.uniforms;
            u.uTime.value = state.clock.elapsedTime;
            u.uScrollProgress.value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress;
            u.uAssemblyProgress.value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress;
            // Camera parallax
            const { camera } = state;
            camera.position.x += (mouseRef.current.x * 0.5 - camera.position.x) * 0.04;
            camera.position.y += (mouseRef.current.y * 0.25 - camera.position.y) * 0.04;
            camera.lookAt(0, 0, 0);
        }
    }["ParticleSystem.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                ref: geomRef
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/ParticleSystem.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                ref: matRef,
                vertexShader: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shaders$2f$particleVert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleVertexShader"],
                fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shaders$2f$particleFrag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleFragmentShader"],
                transparent: true,
                depthWrite: false,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["AdditiveBlending"],
                uniforms: {
                    uTime: {
                        value: 0
                    },
                    uIntroProgress: {
                        value: 0
                    },
                    uScrollProgress: {
                        value: 0
                    },
                    uAssemblyProgress: {
                        value: 0
                    },
                    uPixelRatio: {
                        value: pixelRatio
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/ParticleSystem.tsx",
                lineNumber: 158,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/ParticleSystem.tsx",
        lineNumber: 156,
        columnNumber: 5
    }, this);
}
_s(ParticleSystem, "ym30/DCz9pg0QKeJsOktyHI4E7w=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"]
    ];
});
_c = ParticleSystem;
var _c;
__turbopack_context__.k.register(_c, "ParticleSystem");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/ThreeScene.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ThreeScene
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/@react-three/fiber/dist/react-three-fiber.esm.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@react-three/postprocessing/dist/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/postprocessing/build/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/three/build/three.core.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$ParticleSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/components/canvas/ParticleSystem.tsx [app-client] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function ThreeScene() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        "data-canvas-wrapper": "",
        style: {
            position: "fixed",
            inset: 0,
            zIndex: 0,
            background: "#000510",
            pointerEvents: "none"
        },
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$react$2d$three$2d$fiber$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["Canvas"], {
            camera: {
                position: [
                    0,
                    0,
                    6
                ],
                fov: 60,
                near: 0.1,
                far: 100
            },
            dpr: [
                1,
                2
            ],
            style: {
                pointerEvents: "none"
            },
            gl: {
                antialias: false,
                alpha: false,
                powerPreference: "high-performance",
                toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"],
                toneMappingExposure: 1.1
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                    attach: "background",
                    args: [
                        "#000510"
                    ]
                }, void 0, false, {
                    fileName: "[project]/src/components/canvas/ThreeScene.tsx",
                    lineNumber: 35,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Suspense"], {
                    fallback: null,
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$src$2f$components$2f$canvas$2f$ParticleSystem$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                            fileName: "[project]/src/components/canvas/ThreeScene.tsx",
                            lineNumber: 38,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["EffectComposer"], {
                            multisampling: 0,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$postprocessing$2f$dist$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bloom"], {
                                intensity: 2.6,
                                luminanceThreshold: 0.04,
                                luminanceSmoothing: 0.88,
                                kernelSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KernelSize"].LARGE,
                                mipmapBlur: true
                            }, void 0, false, {
                                fileName: "[project]/src/components/canvas/ThreeScene.tsx",
                                lineNumber: 42,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/src/components/canvas/ThreeScene.tsx",
                            lineNumber: 41,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/src/components/canvas/ThreeScene.tsx",
                    lineNumber: 37,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/src/components/canvas/ThreeScene.tsx",
            lineNumber: 22,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/src/components/canvas/ThreeScene.tsx",
        lineNumber: 12,
        columnNumber: 5
    }, this);
}
_c = ThreeScene;
var _c;
__turbopack_context__.k.register(_c, "ThreeScene");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/components/canvas/ThreeScene.tsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/src/components/canvas/ThreeScene.tsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=src_12j_ln8._.js.map