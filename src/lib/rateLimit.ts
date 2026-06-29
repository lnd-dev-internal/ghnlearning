/* Best-effort in-memory sliding-window rate limiter (server-only).

   NOTE: On Vercel serverless this state is per-instance and resets on cold
   starts, so it is a first layer — not a hard guarantee. The real protection
   against Apps Script flooding is the shared secret checked inside doPost
   (an attacker who replays the captured URL has no valid secret). For a hard
   distributed limit, swap this for Upstash Redis / Vercel KV later. */

const buckets = new Map<string, number[]>();

export function rateLimit(key: string, limit: number, windowMs: number, now: number): boolean {
  const cutoff = now - windowMs;
  const hits = (buckets.get(key) ?? []).filter((t) => t > cutoff);
  if (hits.length >= limit) {
    buckets.set(key, hits);
    return false;
  }
  hits.push(now);
  buckets.set(key, hits);
  // Opportunistic cleanup so the Map doesn't grow unbounded.
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) {
      if (v.every((t) => t <= cutoff)) buckets.delete(k);
    }
  }
  return true;
}

export function clientIp(req: Request): string {
  const fwd = req.headers.get('x-forwarded-for');
  if (fwd) return fwd.split(',')[0].trim();
  return req.headers.get('x-real-ip')?.trim() || 'unknown';
}
