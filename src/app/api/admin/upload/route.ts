import { NextRequest } from 'next/server';
import { requireAuth } from '@/lib/adminAuth';
import { supabaseAdmin } from '@/lib/supabaseAdmin';

export const runtime = 'nodejs';

const BUCKETS = new Set(['form-assets', 'article-covers']);
const MAX_BYTES = 25 * 1024 * 1024;

function sanitize(name: string): string {
  return name.replace(/[^a-zA-Z0-9._-]/g, '_').slice(-100);
}

// POST multipart: file, bucket, prefix(optional) → { publicUrl }
export async function POST(req: NextRequest) {
  const unauth = await requireAuth();
  if (unauth) return unauth;

  const form = await req.formData().catch(() => null);
  const file = form?.get('file');
  const bucket = String(form?.get('bucket') ?? '');
  const prefix = String(form?.get('prefix') ?? '').replace(/[^a-zA-Z0-9/_-]/g, '');

  if (!(file instanceof File)) return Response.json({ error: 'Thiếu file' }, { status: 400 });
  if (!BUCKETS.has(bucket)) return Response.json({ error: 'Bucket không hợp lệ' }, { status: 400 });
  if (file.size > MAX_BYTES) return Response.json({ error: 'File quá lớn (tối đa 25MB)' }, { status: 413 });
  if (!file.type.startsWith('image/')) return Response.json({ error: 'Chỉ chấp nhận ảnh' }, { status: 415 });

  const stamp = `${Date.now()}_${crypto.randomUUID().slice(0, 8)}`;
  const path = `${prefix ? prefix + '/' : ''}${stamp}_${sanitize(file.name)}`;

  const bytes = Buffer.from(await file.arrayBuffer());
  const { error } = await supabaseAdmin.storage
    .from(bucket)
    .upload(path, bytes, { contentType: file.type, upsert: false });
  if (error) return Response.json({ error: error.message }, { status: 400 });

  const { data } = supabaseAdmin.storage.from(bucket).getPublicUrl(path);
  return Response.json({ publicUrl: data.publicUrl });
}

// DELETE — body: { bucket, path }
export async function DELETE(req: NextRequest) {
  const unauth = await requireAuth();
  if (unauth) return unauth;

  const body = (await req.json().catch(() => null)) as { bucket?: string; path?: string } | null;
  if (!body?.bucket || !body.path || !BUCKETS.has(body.bucket)) {
    return Response.json({ error: 'Bad request' }, { status: 400 });
  }
  const { error } = await supabaseAdmin.storage.from(body.bucket).remove([body.path]);
  if (error) return Response.json({ error: error.message }, { status: 400 });
  return Response.json({ ok: true });
}
