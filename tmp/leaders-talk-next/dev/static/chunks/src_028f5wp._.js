(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/src/lib/textSampler.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * textSampler.ts
 * Renders text onto an off-screen canvas, samples white pixels,
 * and returns exactly `targetCount` 3D positions in world space.
 */ __turbopack_context__.s([
    "sampleTextPositions",
    ()=>sampleTextPositions
]);
function sampleTextPositions(text, targetCount) {
    const W = 1800, H = 380;
    const canvas = document.createElement("canvas");
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext("2d", {
        willReadFrequently: true
    });
    // Black background
    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, W, H);
    // Bold white text
    ctx.fillStyle = "#fff";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    // Shrink font until it fits
    let fontSize = 240;
    ctx.font = `900 ${fontSize}px "Arial Black", "Arial Bold", Arial, sans-serif`;
    while(ctx.measureText(text).width > W * 0.94 && fontSize > 60){
        fontSize -= 4;
        ctx.font = `900 ${fontSize}px "Arial Black", "Arial Bold", Arial, sans-serif`;
    }
    ctx.fillText(text, W / 2, H / 2);
    // Collect lit pixel coordinates
    const imageData = ctx.getImageData(0, 0, W, H).data;
    const pool = [];
    // Sub-sample for performance — only check every 2nd pixel
    for(let y = 0; y < H; y += 2){
        for(let x = 0; x < W; x += 2){
            const r = imageData[(y * W + x) * 4];
            if (r > 100) pool.push(x, y);
        }
    }
    if (pool.length === 0) {
        console.warn("[textSampler] No pixels found — font may not have loaded.");
    }
    const pairLen = pool.length / 2;
    // World scale: text fills ~10 units wide
    const scaleX = 10 / W;
    const scaleY = 10 / W; // preserve aspect ratio
    const positions = new Float32Array(targetCount * 3);
    for(let i = 0; i < targetCount; i++){
        const idx = Math.floor(Math.random() * pairLen) * 2;
        const px = pool[idx];
        const py = pool[idx + 1];
        positions[i * 3] = (px - W / 2) * scaleX + (Math.random() - 0.5) * 0.03;
        positions[i * 3 + 1] = -(py - H / 2) * scaleY + (Math.random() - 0.5) * 0.03;
        positions[i * 3 + 2] = (Math.random() - 0.5) * 0.4; // slight z jitter
    }
    return positions;
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/src/lib/sphereSampler.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * fibonacciSphere — uniform particle distribution on a sphere surface.
 * Radius is kept smaller (1.0) so the sphere fits within the viewport.
 * yOffset shifts the center up so there is room for text below.
 */ __turbopack_context__.s([
    "fibonacciSphere",
    ()=>fibonacciSphere,
    "fourMiniSpheres",
    ()=>fourMiniSpheres
]);
function fibonacciSphere(count, radius = 1.0, yOffset = 0.4) {
    const positions = new Float32Array(count * 3);
    const phi = Math.PI * (3.0 - Math.sqrt(5.0)); // golden angle
    for(let i = 0; i < count; i++){
        const y = 1 - i / (count - 1) * 2;
        const r = Math.sqrt(Math.max(0, 1 - y * y));
        const theta = phi * i;
        positions[i * 3] = Math.cos(theta) * r * radius;
        positions[i * 3 + 1] = y * radius + yOffset;
        positions[i * 3 + 2] = Math.sin(theta) * r * radius;
    }
    return positions;
}
function fourMiniSpheres(count) {
    const positions = new Float32Array(count * 3);
    // Centers of 4 mini-spheres — evenly spaced, centered horizontally
    // Slightly shifted up (y=0.5) to sit in the upper half during section 3
    const centers = [
        [
            -1.65,
            0.5,
            0.0
        ],
        [
            -0.55,
            0.5,
            0.0
        ],
        [
            0.55,
            0.5,
            0.0
        ],
        [
            1.65,
            0.5,
            0.0
        ]
    ];
    const miniRadius = 0.42;
    const phi = Math.PI * (3.0 - Math.sqrt(5.0));
    const perGroup = Math.floor(count / 4);
    // Track index within each group
    const counters = [
        0,
        0,
        0,
        0
    ];
    for(let i = 0; i < count; i++){
        const g = i % 4;
        const j = counters[g]++;
        const n = g < 3 ? perGroup : count - perGroup * 3;
        const yVal = 1 - j / Math.max(n - 1, 1) * 2;
        const r = Math.sqrt(Math.max(0, 1 - yVal * yVal));
        const theta = phi * j;
        const [cx, cy, cz] = centers[g];
        positions[i * 3] = cx + Math.cos(theta) * r * miniRadius;
        positions[i * 3 + 1] = cy + yVal * miniRadius;
        positions[i * 3 + 2] = cz + Math.sin(theta) * r * miniRadius;
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
// ── Simplex 3D Noise ──────────────────────────────────────────────────────────
vec3 _mod289(vec3 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 _mod289(vec4 x){return x-floor(x*(1.0/289.0))*289.0;}
vec4 _permute(vec4 x){return _mod289(((x*34.0)+1.0)*x);}
vec4 _taylorInvSqrt(vec4 r){return 1.79284291400159-0.85373472095314*r;}
float snoise(vec3 v){
  const vec2 C=vec2(1.0/6.0,1.0/3.0);const vec4 D=vec4(0.0,0.5,1.0,2.0);
  vec3 i=floor(v+dot(v,C.yyy));vec3 x0=v-i+dot(i,C.xxx);
  vec3 g=step(x0.yzx,x0.xyz);vec3 l=1.0-g;
  vec3 i1=min(g.xyz,l.zxy);vec3 i2=max(g.xyz,l.zxy);
  vec3 x1=x0-i1+C.xxx;vec3 x2=x0-i2+C.yyy;vec3 x3=x0-D.yyy;
  i=_mod289(i);
  vec4 p=_permute(_permute(_permute(
    i.z+vec4(0.0,i1.z,i2.z,1.0))
    +i.y+vec4(0.0,i1.y,i2.y,1.0))
    +i.x+vec4(0.0,i1.x,i2.x,1.0));
  float n_=1.0/7.0;vec3 ns=n_*D.wyz-D.xzx;
  vec4 j=p-49.0*floor(p*ns.z*ns.z);
  vec4 x_=floor(j*ns.z);vec4 y_=floor(j-7.0*x_);
  vec4 x=x_*ns.x+ns.yyyy;vec4 y=y_*ns.x+ns.yyyy;
  vec4 h=1.0-abs(x)-abs(y);
  vec4 b0=vec4(x.xy,y.xy);vec4 b1=vec4(x.zw,y.zw);
  vec4 s0=floor(b0)*2.0+1.0;vec4 s1=floor(b1)*2.0+1.0;
  vec4 sh=-step(h,vec4(0.0));
  vec4 a0=b0.xzyw+s0.xzyw*sh.xxyy;vec4 a1=b1.xzyw+s1.xzyw*sh.zzww;
  vec3 p0=vec3(a0.xy,h.x);vec3 p1=vec3(a0.zw,h.y);
  vec3 p2=vec3(a1.xy,h.z);vec3 p3=vec3(a1.zw,h.w);
  vec4 norm=_taylorInvSqrt(vec4(dot(p0,p0),dot(p1,p1),dot(p2,p2),dot(p3,p3)));
  p0*=norm.x;p1*=norm.y;p2*=norm.z;p3*=norm.w;
  vec4 m=max(0.6-vec4(dot(x0,x0),dot(x1,x1),dot(x2,x2),dot(x3,x3)),0.0);m=m*m;
  return 42.0*dot(m*m,vec4(dot(p0,x0),dot(p1,x1),dot(p2,x2),dot(p3,x3)));
}

// ── Uniforms / Attributes ─────────────────────────────────────────────────────
uniform float uTime;
uniform float uIntroProgress;      // alpha: 0=hidden, 1=visible at text
uniform float uScrollProgress;     // 0=at text, 1=disintegrated
uniform float uAssemblyProgress;   // 0=flying, 1=sphere
uniform float uSplitProgress;      // 0=sphere, 1=4 mini-circles
uniform float uHideProgress;       // 0=visible, 1=fully hidden (stats section)
uniform float uPixelRatio;

attribute vec3  aTextPos;    // text pixel positions
attribute vec3  aFreePos;    // disintegration targets
attribute vec3  aSpherePos;  // big sphere surface positions
attribute vec3  aMiniPos;    // 4 mini-sphere positions
attribute float aSize;
attribute float aRandom;
attribute vec3  aColor;

varying vec3  vColor;
varying float vAlpha;

void main() {
  // ── Phase weights ──────────────────────────────────────────────────────────
  float intro      = uIntroProgress;
  float dis        = smoothstep(0.0, 0.9, uScrollProgress);
  float assemble   = smoothstep(0.0, 1.0, uAssemblyProgress);
  float split      = smoothstep(0.0, 1.0, uSplitProgress);

  // ── PHASE 1: particles at text positions (still + subtle drift) ────────────
  vec3 pos = aTextPos;

  // Micro-drift so text particles feel alive, not frozen
  float atText = (1.0 - dis) * intro;
  float dT     = uTime * 0.07 + aRandom * 6.28;
  pos += vec3(
    snoise(vec3(dT, aRandom*3.1, 0.0)),
    snoise(vec3(0.0, dT, aRandom*2.7)),
    snoise(vec3(aRandom*2.3, 0.0, dT))
  ) * 0.014 * atText;

  // ── PHASE 2: disintegration — noise flow upward ───────────────────────────
  float tN  = uTime * 0.18 + aRandom * 6.28318;
  vec3  ni  = vec3(aFreePos.x*0.35+tN, aFreePos.y*0.35+tN*0.6, aFreePos.z*0.35+tN*1.3);
  float str = 2.6 * dis * (1.0 - assemble);
  vec3  noiseOff = vec3(
    snoise(ni),
    snoise(ni+vec3(100.0,0.0,0.0)),
    snoise(ni+vec3(0.0,100.0,0.0))
  ) * str;
  pos = mix(pos, aFreePos + noiseOff, dis);

  // ── PHASE 3: sphere assembly (rotating) ───────────────────────────────────
  float angle = uTime * 0.30;
  float cosA  = cos(angle), sinA = sin(angle);
  vec3 rotSphere = vec3(
    aSpherePos.x * cosA - aSpherePos.z * sinA,
    aSpherePos.y,
    aSpherePos.x * sinA + aSpherePos.z * cosA
  );
  pos = mix(pos, rotSphere, assemble);

  // ── PHASE 4: split into 4 mini-circles ────────────────────────────────────
  // Rotate mini-spheres at the same rate for visual continuity
  vec3 rotMini = vec3(
    aMiniPos.x * cosA - aMiniPos.z * sinA,
    aMiniPos.y,
    aMiniPos.x * sinA + aMiniPos.z * cosA
  );
  pos = mix(pos, rotMini, split * assemble); // only splits from sphere state

  // ── COLOR ──────────────────────────────────────────────────────────────────
  float midFlight = dis * (1.0 - assemble);

  // Flight: deeper orange, slightly warmer
  vec3 flightColor = mix(aColor, vec3(0.88, 0.28, 0.0), 0.70);

  // Sphere: rich deep orange
  vec3 orangeColor = vec3(
    mix(aColor.r, 0.92, 0.85),
    mix(aColor.g, 0.22, 0.80),
    mix(aColor.b, 0.00, 0.95)
  );
  // Mini-circles: darker burnt orange
  vec3 miniColor = vec3(
    mix(aColor.r, 0.70, 0.88) * 0.75,
    mix(aColor.g, 0.14, 0.88) * 0.75,
    mix(aColor.b, 0.00, 0.98) * 0.75
  );

  vColor  = mix(aColor, flightColor, midFlight);
  vColor  = mix(vColor, orangeColor, assemble);
  vColor  = mix(vColor, miniColor, split * assemble);

  // No sparkle boost — not needed for NormalBlending light theme

  // ── SIZE ───────────────────────────────────────────────────────────────────
  float sizeMult = 1.0 + midFlight * 1.5;
  float sparkle  = 1.0 + snoise(vec3(aRandom*5.0, uTime*0.4, 0.0)) * 0.38;
  sizeMult = mix(sizeMult, sparkle * 1.05, assemble);
  // Mini-circles: SMALLER than sphere — reduces the overblown look
  float miniSizeBoost = 0.42 + snoise(vec3(aRandom*4.0, uTime*0.5, 1.0)) * 0.12;
  sizeMult = mix(sizeMult, miniSizeBoost, split * assemble);

  vec4 mvPos   = modelViewMatrix * vec4(pos, 1.0);
  gl_Position  = projectionMatrix * mvPos;
  gl_PointSize = aSize * sizeMult * uPixelRatio * (20.0 / -mvPos.z);
  gl_PointSize = clamp(gl_PointSize, 0.5, 8.0);  /* crisp, not blurry */

  // ── ALPHA ──────────────────────────────────────────────────────────────────
  float midAlpha  = 1.0 - midFlight * 0.08;
  float sphAlpha  = 0.72 + aRandom * 0.24;  /* high contrast point cloud */
  float miniAlpha = 0.62 + aRandom * 0.20;  // visible mini-circles
  float baseAlpha = mix(midAlpha, sphAlpha, assemble);
  baseAlpha       = mix(baseAlpha, miniAlpha, split * assemble);
  vAlpha          = intro * baseAlpha;

  // Fade out entirely during stats section
  vAlpha *= (1.0 - uHideProgress);
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
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/particleStore.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$textSampler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/src/lib/textSampler.ts [app-client] (ecmascript)");
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
const PARTICLE_COUNT = 3000;
// ── Color palette — warm orange for light theme ─────────────────────────────────
const PALETTE = [
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#FF5200"),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#FF6B20"),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#CC4200"),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#FF7540"),
    new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Color"]("#E84800")
];
const PALETTE_W = [
    0.30,
    0.55,
    0.72,
    0.88,
    1.00
];
function pickColor() {
    const r = Math.random();
    for(let i = 0; i < PALETTE_W.length; i++){
        if (r < PALETTE_W[i]) return PALETTE[i];
    }
    return PALETTE[0];
}
// ── Build per-particle geometry data ─────────────────────────────────────────
function buildParticleData(textPos) {
    const spherePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sphereSampler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fibonacciSphere"])(PARTICLE_COUNT);
    const miniSpherePos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$sphereSampler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["fourMiniSpheres"])(PARTICLE_COUNT);
    const freePos = new Float32Array(PARTICLE_COUNT * 3);
    const colors = new Float32Array(PARTICLE_COUNT * 3);
    const sizes = new Float32Array(PARTICLE_COUNT);
    const randoms = new Float32Array(PARTICLE_COUNT);
    for(let i = 0; i < PARTICLE_COUNT; i++){
        const tx = textPos[i * 3];
        const ty = textPos[i * 3 + 1];
        // Disintegration target: spread upward/outward from text
        freePos[i * 3] = tx + (Math.random() - 0.5) * 14;
        freePos[i * 3 + 1] = ty + 2.0 + Math.random() * 8;
        freePos[i * 3 + 2] = (Math.random() - 0.5) * 5;
        const c = pickColor();
        colors[i * 3] = c.r;
        colors[i * 3 + 1] = c.g;
        colors[i * 3 + 2] = c.b;
        // Small, sharp, uniform dots — tech point-cloud look
        sizes[i] = Math.random() < 0.92 ? 1.8 + Math.random() * 0.8 // core dots: 1.8-2.6
         : 3.2 + Math.random() * 1.2; // 8% accent dots slightly larger
        randoms[i] = Math.random();
    }
    return {
        spherePos,
        miniSpherePos,
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
    const pixelRatio = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "ParticleSystem.useMemo[pixelRatio]": ()=>("TURBOPACK compile-time truthy", 1) ? Math.min(window.devicePixelRatio, 2) : "TURBOPACK unreachable"
    }["ParticleSystem.useMemo[pixelRatio]"], []);
    const [ready, setReady] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // ── Initialize ────────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleSystem.useEffect": ()=>{
            const textPos = (0, __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$textSampler$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["sampleTextPositions"])("LEADERS TALK", PARTICLE_COUNT);
            const { spherePos, miniSpherePos, freePos, colors, sizes, randoms } = buildParticleData(textPos);
            const g = geomRef.current;
            g.setAttribute("position", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](textPos.slice(), 3));
            g.setAttribute("aTextPos", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](textPos, 3));
            g.setAttribute("aFreePos", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](freePos, 3));
            g.setAttribute("aSpherePos", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](spherePos, 3));
            g.setAttribute("aMiniPos", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](miniSpherePos, 3));
            g.setAttribute("aColor", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](colors, 3));
            g.setAttribute("aSize", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](sizes, 1));
            g.setAttribute("aRandom", new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BufferAttribute"](randoms, 1));
            setReady(true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
        }
    }["ParticleSystem.useEffect"], []);
    // ── Mouse tracking ────────────────────────────────────────────────────────
    const mouseRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])({
        x: 0,
        y: 0
    });
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ParticleSystem.useEffect": ()=>{
            if (!ready) return;
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
    }["ParticleSystem.useEffect"], [
        ready
    ]);
    // ── Render loop ───────────────────────────────────────────────────────────
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$react$2d$three$2f$fiber$2f$dist$2f$events$2d$b389eeca$2e$esm$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__D__as__useFrame$3e$__["useFrame"])({
        "ParticleSystem.useFrame": (state)=>{
            if (!matRef.current) return;
            const u = matRef.current.uniforms;
            u.uTime.value = state.clock.elapsedTime;
            u.uIntroProgress.value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].introProgress;
            u.uScrollProgress.value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].scrollProgress;
            u.uAssemblyProgress.value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].assemblyProgress;
            u.uSplitProgress.value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].splitProgress;
            u.uHideProgress.value = __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$lib$2f$particleStore$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleStore"].hideProgress;
            // Camera parallax
            const { camera } = state;
            camera.position.x += (mouseRef.current.x * 0.35 - camera.position.x) * 0.03;
            camera.position.y += (mouseRef.current.y * 0.18 - camera.position.y) * 0.03;
            camera.lookAt(0, 0, 0);
        }
    }["ParticleSystem.useFrame"]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("points", {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("bufferGeometry", {
                ref: geomRef
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/ParticleSystem.tsx",
                lineNumber: 129,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("shaderMaterial", {
                ref: matRef,
                vertexShader: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shaders$2f$particleVert$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleVertexShader"],
                fragmentShader: __TURBOPACK__imported__module__$5b$project$5d2f$src$2f$shaders$2f$particleFrag$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["particleFragmentShader"],
                transparent: true,
                depthWrite: false,
                blending: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["NormalBlending"],
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
                    uSplitProgress: {
                        value: 0
                    },
                    uHideProgress: {
                        value: 0
                    },
                    uPixelRatio: {
                        value: pixelRatio
                    }
                }
            }, void 0, false, {
                fileName: "[project]/src/components/canvas/ParticleSystem.tsx",
                lineNumber: 130,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/src/components/canvas/ParticleSystem.tsx",
        lineNumber: 128,
        columnNumber: 5
    }, this);
}
_s(ParticleSystem, "x0UX5RNGzBCJQ6GXjz1AkYWpZk4=", false, function() {
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
            background: "#F0EFEA",
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
                antialias: true,
                alpha: false,
                powerPreference: "high-performance",
                toneMapping: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$three$2f$build$2f$three$2e$core$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ACESFilmicToneMapping"],
                toneMappingExposure: 0.9
            },
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("color", {
                    attach: "background",
                    args: [
                        "#F0EFEA"
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
                                intensity: 0.4,
                                luminanceThreshold: 0.60,
                                luminanceSmoothing: 0.80,
                                kernelSize: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$postprocessing$2f$build$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["KernelSize"].MEDIUM,
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

//# sourceMappingURL=src_028f5wp._.js.map