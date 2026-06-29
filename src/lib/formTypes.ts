/* Shared Form types + DB mappers — pure, no client/server deps.
   Imported by both the client store (formStore.ts) and the server
   API routes (app/api/admin/form, app/api/register). Do NOT import supabase here. */

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

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function fromDB(row: any): FormConfig {
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

export function toDB(c: Partial<FormConfig>) {
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
