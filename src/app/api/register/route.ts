import { NextRequest } from 'next/server';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { rateLimit, clientIp } from '@/lib/rateLimit';
import type { FormField } from '@/lib/formTypes';

export const runtime = 'nodejs';

const EMAIL_SUFFIX = '@ghn.vn';
const MAX_VALUE_LEN = 500;

type IncomingField = { id?: string; value?: unknown };

export async function POST(req: NextRequest) {
  // Rate limit: 5 submissions / minute / IP.
  if (!rateLimit(`reg:${clientIp(req)}`, 5, 60_000, Date.now())) {
    return Response.json({ error: 'Bạn gửi quá nhanh, vui lòng thử lại sau ít phút.' }, { status: 429 });
  }

  const body = (await req.json().catch(() => null)) as { fields?: IncomingField[] } | null;
  if (!body || !Array.isArray(body.fields)) {
    return Response.json({ error: 'Dữ liệu không hợp lệ.' }, { status: 400 });
  }

  // Load the active form config server-side (apps_script_url never leaves the server).
  const { data, error } = await supabaseAdmin
    .from('registration_form')
    .select('apps_script_url, fields')
    .eq('is_active', true)
    .order('updated_at', { ascending: false })
    .limit(1)
    .maybeSingle();

  if (error || !data?.apps_script_url) {
    return Response.json({ error: 'Form đăng ký chưa sẵn sàng.' }, { status: 503 });
  }

  const configFields: FormField[] = data.fields ?? [];
  const byId = new Map(configFields.map((f) => [f.id, f]));

  // Whitelist + sanitize: only known field ids, capped length, server-applied email suffix.
  const cleanFields = body.fields
    .filter((f): f is IncomingField & { id: string } => typeof f?.id === 'string' && byId.has(f.id))
    .map((f) => {
      const cfg = byId.get(f.id)!;
      let value = String(f.value ?? '').trim().slice(0, MAX_VALUE_LEN);
      if (cfg.type === 'email' && value && !value.includes('@')) value += EMAIL_SUFFIX;
      return { id: f.id, value, sheetHeader: cfg.sheetHeader };
    });

  if (cleanFields.length === 0) {
    return Response.json({ error: 'Dữ liệu không hợp lệ.' }, { status: 400 });
  }

  const sharedSecret = process.env.APPS_SCRIPT_SHARED_SECRET;
  if (!sharedSecret) {
    return Response.json({ error: 'Server chưa cấu hình APPS_SCRIPT_SHARED_SECRET.' }, { status: 500 });
  }

  // Forward server-to-server. The secret lives only here — a replayed URL alone is useless.
  const params = new URLSearchParams();
  params.append('payload', JSON.stringify({ secret: sharedSecret, fields: cleanFields }));

  try {
    const res = await fetch(data.apps_script_url, {
      method: 'POST',
      body: params,
      // Apps Script web apps follow a redirect to script.googleusercontent.com
      redirect: 'follow',
    });
    if (!res.ok) {
      return Response.json({ error: 'Gửi đăng ký thất bại, vui lòng thử lại.' }, { status: 502 });
    }
  } catch {
    return Response.json({ error: 'Không kết nối được tới máy chủ ghi dữ liệu.' }, { status: 502 });
  }

  return Response.json({ ok: true });
}
