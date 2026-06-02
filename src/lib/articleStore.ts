'use client';
import { useState, useEffect, useCallback } from 'react';
import { supabase } from './supabase';

/* ─── Types ─────────────────────────────────────────────────────────────── */

export interface Article {
  id: string;
  title: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  coverImage: string;
  content: string;
  status: 'published' | 'draft';
  pinned: boolean;
  order: number;
}

/* ─── DB ↔ App mappers ───────────────────────────────────────────────────── */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
function fromDB(row: any): Article {
  return {
    id:         row.id,
    title:      row.title       ?? '',
    category:   row.category    ?? '',
    date:       row.date        ?? '',
    author:     row.author      ?? '',
    excerpt:    row.excerpt     ?? '',
    coverImage: row.cover_image ?? '',
    content:    row.content     ?? '',
    status:     row.status      ?? 'draft',
    pinned:     row.pinned      ?? false,
    order:      row.order       ?? 0,
  };
}

function toDB(a: Partial<Article>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const db: any = {};
  if (a.id         !== undefined) db.id          = a.id;
  if (a.title      !== undefined) db.title        = a.title;
  if (a.category   !== undefined) db.category     = a.category;
  if (a.date       !== undefined) db.date         = a.date;
  if (a.author     !== undefined) db.author       = a.author;
  if (a.excerpt    !== undefined) db.excerpt      = a.excerpt;
  if (a.coverImage !== undefined) db.cover_image  = a.coverImage;
  if (a.content    !== undefined) db.content      = a.content;
  if (a.status     !== undefined) db.status       = a.status;
  if (a.pinned     !== undefined) db.pinned       = a.pinned;
  if (a.order      !== undefined) db.order        = a.order;
  return db;
}

/* ─── CRUD ───────────────────────────────────────────────────────────────── */

export async function createArticle(data: Omit<Article, 'id'>): Promise<Article> {
  const id = crypto.randomUUID();
  const { data: row, error } = await supabase
    .from('articles')
    .insert({ ...toDB(data as Article), id })
    .select()
    .single();
  if (error) throw error;
  return fromDB(row);
}

export async function updateArticle(id: string, updates: Partial<Article>): Promise<void> {
  const { error } = await supabase
    .from('articles')
    .update(toDB(updates))
    .eq('id', id);
  if (error) throw error;
}

export async function deleteArticle(id: string): Promise<void> {
  const { error } = await supabase
    .from('articles')
    .delete()
    .eq('id', id);
  if (error) throw error;
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
