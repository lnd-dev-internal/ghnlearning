'use client';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from './supabase';
import { fromDB, type Article } from './articleTypes';

/* ─── Types ─────────────────────────────────────────────────────────────── */
// Type + DB mappers live in ./articleTypes (shared with server routes).
export type { Article };

/* ─── CRUD ───────────────────────────────────────────────────────────────── */
// Writes go through guarded server API routes (service-role key + admin cookie).
// Reads stay on the anon client (SELECT is allowed by RLS).

async function writeApi(method: 'POST' | 'PUT' | 'DELETE', body: unknown): Promise<unknown> {
  const res = await fetch('/api/admin/articles', {
    method,
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });
  if (!res.ok) {
    const msg = (await res.json().catch(() => ({})))?.error ?? `HTTP ${res.status}`;
    throw new Error(msg);
  }
  return res.json();
}

export async function createArticle(data: Omit<Article, 'id'>): Promise<Article> {
  return (await writeApi('POST', data)) as Article;
}

export async function updateArticle(id: string, updates: Partial<Article>): Promise<void> {
  await writeApi('PUT', { id, updates });
}

export async function deleteArticle(id: string): Promise<void> {
  await writeApi('DELETE', { id });
}

export async function getArticles(): Promise<Article[]> {
  const { data, error } = await supabase
    .from('articles')
    .select('*')
    .order('order', { ascending: true });
  if (error) throw error;
  return (data ?? []).map(fromDB);
}

/* ─── React hook ─────────────────────────────────────────────────────────── */

export function useArticles(): Article[] {
  const [articles, setArticles] = useState<Article[]>([]);

  const load = useCallback(async () => {
    try {
      const rows = await getArticles();
      setArticles(rows);
    } catch (e) {
      console.error('useArticles load error:', e);
    }
  }, []);

  useEffect(() => {
    load();

    // Realtime: tự refresh khi có thay đổi từ máy khác
    const channel = supabase
      .channel('articles-realtime')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'articles' },
        () => load(),
      )
      .subscribe();

    return () => { supabase.removeChannel(channel); };
  }, [load]);

  return articles;
}
