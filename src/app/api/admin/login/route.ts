import { NextRequest } from 'next/server';
import crypto from 'node:crypto';
import { setSessionCookie } from '@/lib/adminAuth';
import { rateLimit, clientIp } from '@/lib/rateLimit';

export const runtime = 'nodejs';

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a);
  const bb = Buffer.from(b);
  if (ba.length !== bb.length) return false;
  return crypto.timingSafeEqual(ba, bb);
}

export async function POST(req: NextRequest) {
  // Throttle brute-force: 10 attempts / 5 min per IP.
  if (!rateLimit(`login:${clientIp(req)}`, 10, 5 * 60_000, Date.now())) {
    return Response.json({ error: 'Thử lại sau ít phút.' }, { status: 429 });
  }

  const expected = process.env.ADMIN_PASSWORD;
  if (!expected) {
    return Response.json({ error: 'Server chưa cấu hình ADMIN_PASSWORD.' }, { status: 500 });
  }

  const body = await req.json().catch(() => null);
  const password = body?.password;
  if (typeof password !== 'string' || !safeEqual(password, expected)) {
    return Response.json({ error: 'Mật khẩu không đúng.' }, { status: 401 });
  }

  await setSessionCookie();
  return Response.json({ ok: true });
}
