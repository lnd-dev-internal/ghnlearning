'use client';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from './supabase';
import { fromDB, type FormConfig, type FormField } from './formTypes';

/* ─── Types ─────────────────────────────────────────────────────────────── */
// Types + DB mappers live in ./formTypes (shared with server routes).
export type { FormConfig, FormField };

/* ─── CRUD ───────────────────────────────────────────────────────────────── */
// Public read uses the anon client but DELIBERATELY excludes apps_script_url
// so the Apps Script endpoint URL never reaches the browser bundle.
// Writes (create/update) and the full config (with URL, for the editor) go
// through guarded server API routes.

const PUBLIC_COLUMNS = 'id, title, description, header_image, fields, is_active, updated_at';

export async function getActiveFormConfig(): Promise<FormConfig | null> {
  const { data, error } = await supabase
    .from('registration_form')
    .select(PUBLIC_COLUMNS)
    .eq('is_active', true)
    .order('updated_at', { ascending: false })
    .limit(1);
  if (error) throw error;
  const row = data?.[0];
  return row ? fromDB(row) : null; // appsScriptUrl resolves to '' (column not selected)
}

/** Admin-only: full config INCLUDING apps_script_url, via the guarded route. */
export async function getAdminFormConfig(): Promise<FormConfig | null> {
  const res = await fetch('/api/admin/form', { cache: 'no-store' });
  if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error ?? `HTTP ${res.status}`);
  return res.json();
}

export async function updateFormConfig(id: string, updates: Partial<FormConfig>): Promise<void> {
  const res = await fetch('/api/admin/form', {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ id, updates }),
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error ?? `HTTP ${res.status}`);
}

export async function createFormConfig(data: Omit<FormConfig, 'id'>): Promise<FormConfig> {
  const res = await fetch('/api/admin/form', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error((await res.json().catch(() => ({})))?.error ?? `HTTP ${res.status}`);
  return res.json();
}

/* ─── React hook ─────────────────────────────────────────────────────────── */

export function useFormConfig(): { config: FormConfig | null; loaded: boolean } {
  const [config, setConfig] = useState<FormConfig | null>(null);
  const [loaded, setLoaded] = useState(false);

  const load = useCallback(async () => {
    try {
      const row = await getActiveFormConfig();
      setConfig(row);
    } catch (e) {
      console.error('useFormConfig load error:', e);
    } finally {
      setLoaded(true);
    }
  }, []);

  useEffect(() => {
    load();

    // Realtime: tự refresh khi có thay đổi từ máy khác
    const channel = supabase
      .channel('registration-form-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'registration_form' },
        () => load(),
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [load]);

  return { config, loaded };
}
