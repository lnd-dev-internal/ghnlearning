/* Shared Article type + DB mappers — pure, no client/server deps.
   Imported by both the client store (articleStore.ts) and the server
   API routes (app/api/admin/articles). Do NOT import supabase here. */

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDB(row: any): Article {
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

export function toDB(a: Partial<Article>) {
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
