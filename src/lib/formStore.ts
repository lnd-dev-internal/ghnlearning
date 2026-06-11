'use client';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from './supabase';

/* ─── Types ─────────────────────────────────────────────────────────────── */

export interface FormField {
  id: string;
  label: string;
  type: 'text' | 'email' | 'select' | 'radio' | 'textarea';
  required: boolean;
  placeholder?: string;
  options?: string[];       // for select/radio
  sheetHeader: string;      // maps to Google Sheet column name
}

export interface FormConfig {
  id: string;
  title: string;
  description: string;
  headerImage: string;
  fields: FormField[];
  appsScriptUrl: string;
  isActive: boolean;
}

/* ─── DB ↔ App mappers ───────────────────────────────────────────────────── */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromDB(row: any): FormConfig {
  return {
    id:            row.id,
    title:         row.title           ?? '',
    description:   row.description     ?? '',
    headerImage:   row.header_image    ?? '',
    fields:        row.fields          ?? [],
    appsScriptUrl: row.apps_script_url ?? '',
    isActive:      row.is_active       ?? false,
  };
}

function toDB(c: Partial<FormConfig>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db: any = {};
  if (c.id            !== undefined) db.id              = c.id;
  if (c.title         !== undefined) db.title           = c.title;
  if (c.description   !== undefined) db.description     = c.description;
  if (c.headerImage   !== undefined) db.header_image    = c.headerImage;
  if (c.fields        !== undefined) db.fields          = c.fields;
  if (c.appsScriptUrl !== undefined) db.apps_script_url = c.appsScriptUrl;
  if (c.isActive      !== undefined) db.is_active       = c.isActive;
  return db;
}

/* ─── CRUD ───────────────────────────────────────────────────────────────── */

export async function getActiveFormConfig(): Promise<FormConfig | null> {
  const { data, error } = await supabase
    .from('registration_form')
    .select('*')
    .eq('is_active', true)
    .order('updated_at', { ascending: false })
    .limit(1);
  if (error) throw error;
  const row = data?.[0];
  return row ? fromDB(row) : null;
}

export async function updateFormConfig(id: string, updates: Partial<FormConfig>): Promise<void> {
  const { error } = await supabase
    .from('registration_form')
    .update(toDB(updates))
    .eq('id', id);
  if (error) throw error;
}

export async function createFormConfig(data: Omit<FormConfig, 'id'>): Promise<FormConfig> {
  const id = crypto.randomUUID();
  const { data: row, error } = await supabase
    .from('registration_form')
    .insert({ ...toDB(data as FormConfig), id })
    .select()
    .single();
  if (error) throw error;
  return fromDB(row);
}

/* ─── React hook ─────────────────────────────────────────────────────────── */

export function useFormConfig(): FormConfig | null {
  const [config, setConfig] = useState<FormConfig | null>(null);

  const load = useCallback(async () => {
    try {
      const row = await getActiveFormConfig();
      setConfig(row);
    } catch (e) {
      console.error('useFormConfig load error:', e);
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

  return config;
}
