/* SERVER-ONLY admin session helpers.
   Stateless HMAC-signed session token stored in an httpOnly cookie.
   Replaces the old client-side hardcoded password check. */

import crypto from 'node:crypto';
import { cookies } from 'next/headers';

export const ADMIN_COOKIE = 'lt_admin_session';
const MAX_AGE_SECONDS = 60 * 60 * 8; // 8 hours

function secret(): string {
  const s = process.env.ADMIN_SESSION_SECRET;
  if (!s || s.length < 16) {
    throw new Error('ADMIN_SESSION_SECRET is not set (need a random string ≥ 16 chars).');
  }
  return s;
}

function sign(payload: string): string {
  return crypto.createHmac('sha256', secret()).update(payload).digest('base64url');
}

export function createSessionToken(now: number): string {
  const exp = now + MAX_AGE_SECONDS * 1000;
  const payload = `v1.${exp}`;
  return `${payload}.${sign(payload)}`;
}

export function verifySessionToken(token: string | undefined, now: number): boolean {
  if (!token) return false;
  const parts = token.split('.');
  if (parts.length !== 3) return false;
  const [v, exp, sig] = parts;
  const payload = `${v}.${exp}`;
  let expected: string;
  try {
    expected = sign(payload);
  } catch {
    return false;
  }
  const a = Buffer.from(sig);
  const b = Buffer.from(expected);
  if (a.length !== b.length) return false;
  if (!crypto.timingSafeEqual(a, b)) return false;
  if (!Number.isFinite(Number(exp)) || Number(exp) < now) return false;
  return true;
}

export async function setSessionCookie(): Promise<void> {
  const store = await cookies();
  store.set(ADMIN_COOKIE, createSessionToken(Date.now()), {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE_SECONDS,
  });
}

export async function clearSessionCookie(): Promise<void> {
  const store = await cookies();
  store.delete(ADMIN_COOKIE);
}

export async function isAuthed(): Promise<boolean> {
  const store = await cookies();
  return verifySessionToken(store.get(ADMIN_COOKIE)?.value, Date.now());
}

/** Returns a 401 Response if not authed, otherwise null. Use at the top of guarded routes. */
export async function requireAuth(): Promise<Response | null> {
  if (await isAuthed()) return null;
  return Response.json({ error: 'Unauthorized' }, { status: 401 });
}
