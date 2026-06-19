/**
 * fibonacciSphere — uniform particle distribution on a sphere surface.
 * Radius is kept smaller (1.0) so the sphere fits within the viewport.
 * yOffset shifts the center up so there is room for text below.
 */
export function fibonacciSphere(
  count: number,
  radius = 1.0,
  yOffset = 0.4
): Float32Array {
  const positions = new Float32Array(count * 3);
  const phi = Math.PI * (3.0 - Math.sqrt(5.0)); // golden angle

  for (let i = 0; i < count; i++) {
    const y     = 1 - (i / (count - 1)) * 2;
    const r     = Math.sqrt(Math.max(0, 1 - y * y));
    const theta = phi * i;

    positions[i * 3]     = Math.cos(theta) * r * radius;
    positions[i * 3 + 1] = y * radius + yOffset;
    positions[i * 3 + 2] = Math.sin(theta) * r * radius;
  }

  return positions;
}

/**
 * Build 4 mini fibonacci spheres arranged horizontally.
 * Each particle is assigned to a group by (index % 4).
 * Returns per-particle positions that are used in the split phase.
 */
export function fourMiniSpheres(count: number): Float32Array {
  const positions = new Float32Array(count * 3);

  // Centers of 4 mini-spheres — evenly spaced, centered horizontally
  // Shifted up (y=1.15) to sit in the upper half during section 3 and clear the card text below
  const centers = [
    [-1.65, 1.15, 0.0],
    [-0.55, 1.15, 0.0],
    [ 0.55, 1.15, 0.0],
    [ 1.65, 1.15, 0.0],
  ] as const;

  const miniRadius = 0.42;
  const phi = Math.PI * (3.0 - Math.sqrt(5.0));
  const perGroup = Math.floor(count / 4);

  // Track index within each group
  const counters = [0, 0, 0, 0];

  for (let i = 0; i < count; i++) {
    const g = i % 4;
    const j = counters[g]++;
    const n = g < 3 ? perGroup : count - perGroup * 3;

    const yVal  = 1 - (j / Math.max(n - 1, 1)) * 2;
    const r     = Math.sqrt(Math.max(0, 1 - yVal * yVal));
    const theta = phi * j;

    const [cx, cy, cz] = centers[g];
    positions[i * 3]     = cx + Math.cos(theta) * r * miniRadius;
    positions[i * 3 + 1] = cy + yVal * miniRadius;
    positions[i * 3 + 2] = cz + Math.sin(theta) * r * miniRadius;
  }

  return positions;
}
