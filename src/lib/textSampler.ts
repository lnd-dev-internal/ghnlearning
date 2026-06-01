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
