import { NextRequest } from 'next/server';
import { requireAuth } from '@/lib/adminAuth';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { fromDB, toDB, type Article } from '@/lib/articleTypes';

export const runtime = 'nodejs';

// CREATE
export async function POST(req: NextRequest) {
  const unauth = await requireAuth();
  if (unauth) return unauth;

  const data = (await req.json().catch(() => null)) as Partial<Article> | null;
  if (!data) return Response.json({ error: 'Bad request' }, { status: 400 });

  const id = crypto.randomUUID();
  const { data: row, error } = await supabaseAdmin
    .from('articles')
    .insert({ ...toDB(data), id })
    .select()
    .single();

  if (error) return Response.json({ error: error.message }, { status: 400 });
  return Response.json(fromDB(row));
}

// UPDATE  — body: { id, updates }
export async function PUT(req: NextRequest) {
  const unauth = await requireAuth();
  if (unauth) return unauth;

  const body = (await req.json().catch(() => null)) as { id?: string; updates?: Partial<Article> } | null;
  if (!body?.id || !body.updates) return Response.json({ error: 'Bad request' }, { status: 400 });

  const { error } = await supabaseAdmin
    .from('articles')
    .update(toDB(body.updates))
    .eq('id', body.id);

  if (error) return Response.json({ error: error.message }, { status: 400 });
  return Response.json({ ok: true });
}

// DELETE — body: { id }
export async function DELETE(req: NextRequest) {
  const unauth = await requireAuth();
  if (unauth) return unauth;

  const body = (await req.json().catch(() => null)) as { id?: string } | null;
  if (!body?.id) return Response.json({ error: 'Bad request' }, { status: 400 });

  const { error } = await supabaseAdmin.from('articles').delete().eq('id', body.id);
  if (error) return Response.json({ error: error.message }, { status: 400 });
  return Response.json({ ok: true });
}
