import { NextRequest } from 'next/server';
import { requireAuth } from '@/lib/adminAuth';
import { supabaseAdmin } from '@/lib/supabaseAdmin';
import { fromDB, toDB, type FormConfig } from '@/lib/formTypes';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// GET — full active config INCLUDING apps_script_url (admin editor only).
// The public form fetch (formStore.getActiveFormConfig) deliberately omits the URL.
export async function GET() {
  const unauth = await requireAuth();
  if (unauth) return unauth;

  const { data, error } = await supabaseAdmin
    .from('registration_form')
    .select('*')
    .eq('is_active', true)
    .order('updated_at', { ascending: false })
    .limit(1);

  if (error) return Response.json({ error: error.message }, { status: 400 });
  const row = data?.[0];
  return Response.json(row ? fromDB(row) : null);
}

// CREATE
export async function POST(req: NextRequest) {
  const unauth = await requireAuth();
  if (unauth) return unauth;

  const data = (await req.json().catch(() => null)) as Partial<FormConfig> | null;
  if (!data) return Response.json({ error: 'Bad request' }, { status: 400 });

  const id = crypto.randomUUID();
  const { data: row, error } = await supabaseAdmin
    .from('registration_form')
    .insert({ ...toDB(data), id })
    .select()
    .single();

  if (error) return Response.json({ error: error.message }, { status: 400 });
  return Response.json(fromDB(row));
}

// UPDATE — body: { id, updates }
export async function PUT(req: NextRequest) {
  const unauth = await requireAuth();
  if (unauth) return unauth;

  const body = (await req.json().catch(() => null)) as { id?: string; updates?: Partial<FormConfig> } | null;
  if (!body?.id || !body.updates) return Response.json({ error: 'Bad request' }, { status: 400 });

  const { error } = await supabaseAdmin
    .from('registration_form')
    .update(toDB(body.updates))
    .eq('id', body.id);

  if (error) return Response.json({ error: error.message }, { status: 400 });
  return Response.json({ ok: true });
}
