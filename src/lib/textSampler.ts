/**
 * textSampler.ts
 * Renders text onto an off-screen canvas, samples white pixels,
 * and returns exactly `targetCount` 3D positions in world space.
 */
export function sampleTextPositions(
  text: string,
  targetCount: number
): Float32Array {
  const W = 1800, H = 380;

  const canvas = document.createElement("canvas");
  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;

  // Black background
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, W, H);

  // Bold white text
  ctx.fillStyle  = "#fff";
  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";

  // Shrink font until it fits
  let fontSize = 240;
  ctx.font = `900 ${fontSize}px "Arial Black", "Arial Bold", Arial, sans-serif`;
  while (ctx.measureText(text).width > W * 0.94 && fontSize > 60) {
    fontSize -= 4;
    ctx.font = `900 ${fontSize}px "Arial Black", "Arial Bold", Arial, sans-serif`;
  }
  ctx.fillText(text, W / 2, H / 2);

  // Collect lit pixel coordinates
  const imageData = ctx.getImageData(0, 0, W, H).data;
  const pool: number[] = [];

  // Sub-sample for performance — only check every 2nd pixel
  for (let y = 0; y < H; y += 2) {
    for (let x = 0; x < W; x += 2) {
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
  const scaleY = 10 / W;   // preserve aspect ratio

  const positions = new Float32Array(targetCount * 3);

  for (let i = 0; i < targetCount; i++) {
    const idx = Math.floor(Math.random() * pairLen) * 2;
    const px  = pool[idx];
    const py  = pool[idx + 1];

    positions[i * 3]     = (px - W / 2) * scaleX + (Math.random() - 0.5) * 0.03;
    positions[i * 3 + 1] = -(py - H / 2) * scaleY + (Math.random() - 0.5) * 0.03;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.4; // slight z jitter
  }

  return positions;
}
/**
 * sampleStatsPositions
 * Renders "20+" (left) and "500+" (right) using Anton font as STROKE ONLY
 * (outline / khuôn rỗng), then samples pixel positions along the stroke path.
 *
 * Left number  → particles[0 .. count/2)
 * Right number → particles[count/2 .. count)
 *
 * The stroke-only approach gives a "mold" outline that particles pour into,
 * rather than filling the entire solid glyph area.
 */
export function sampleStatsPositions(count: number): Float32Array {
  const W = 1800, H = 460;

  const canvas = document.createElement("canvas");
  canvas.width  = W;
  canvas.height = H;
  const ctx = canvas.getContext("2d", { willReadFrequently: true })!;

  // Black background — we'll sample white stroke pixels
  ctx.fillStyle = "#000";
  ctx.fillRect(0, 0, W, H);

  ctx.textAlign    = "center";
  ctx.textBaseline = "middle";

  const leftText  = "20+";
  const rightText = "500+";
  const halfW = W / 2;

  // Find font size that fits both texts in their halves
  let fontSize = 280;
  ctx.font = `${fontSize}px Anton, "Arial Black", Arial, sans-serif`;
  while (
    (ctx.measureText(leftText).width  > halfW * 0.82 ||
     ctx.measureText(rightText).width > halfW * 0.82) &&
    fontSize > 80
  ) {
    fontSize -= 6;
    ctx.font = `${fontSize}px Anton, "Arial Black", Arial, sans-serif`;
  }

  // ── Draw STROKE ONLY — creates the hollow outline "mold" ─────────────────
  // lineWidth ~7% of fontSize gives a crisp, thick border ring for particles
  const strokeW = Math.round(fontSize * 0.072);
  ctx.lineWidth  = strokeW;
  ctx.lineJoin   = "round";
  ctx.lineCap    = "round";
  ctx.strokeStyle = "#fff";

  ctx.strokeText(leftText,  halfW * 0.5, H / 2);
  ctx.strokeText(rightText, halfW * 1.5, H / 2);

  const imageData = ctx.getImageData(0, 0, W, H).data;

  // Sample every pixel (step=1) for maximum outline density
  const poolLeft: number[]  = [];
  const poolRight: number[] = [];

  for (let y = 0; y < H; y++) {
    for (let x = 0; x < W; x++) {
      // Only take pixels that are clearly part of the stroke (brightness > 80)
      if (imageData[(y * W + x) * 4] > 80) {
        if (x < halfW) poolLeft.push(x, y);
        else           poolRight.push(x, y);
      }
    }
  }

  if (poolLeft.length === 0 || poolRight.length === 0) {
    console.warn("[textSampler] Stats stroke pixels not found — font may not be loaded.");
  }

  // World-space scale — 10 units spans the full canvas width
  const scaleX = 10 / W;
  const scaleY = 10 / W;

  const positions = new Float32Array(count * 3);
  const half = Math.floor(count / 2);

  // Left half → "20+"
  const pairLenL = poolLeft.length / 2;
  for (let i = 0; i < half; i++) {
    const idx = Math.floor(Math.random() * pairLenL) * 2;
    const px  = poolLeft[idx];
    const py  = poolLeft[idx + 1];
    // Tiny jitter (< 1px in world-space) so adjacent particles aren't perfectly stacked
    positions[i * 3]     = (px - W / 2) * scaleX + (Math.random() - 0.5) * 0.018;
    positions[i * 3 + 1] = -(py - H / 2) * scaleY - 1.5 + (Math.random() - 0.5) * 0.018;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
  }

  // Right half → "500+"
  const pairLenR = poolRight.length / 2;
  for (let i = half; i < count; i++) {
    const idx = Math.floor(Math.random() * pairLenR) * 2;
    const px  = poolRight[idx];
    const py  = poolRight[idx + 1];
    positions[i * 3]     = (px - W / 2) * scaleX + (Math.random() - 0.5) * 0.018;
    positions[i * 3 + 1] = -(py - H / 2) * scaleY - 1.5 + (Math.random() - 0.5) * 0.018;
    positions[i * 3 + 2] = (Math.random() - 0.5) * 0.15;
  }

  return positions;
}
