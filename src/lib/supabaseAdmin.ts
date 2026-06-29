/* SERVER-ONLY Supabase client using the service-role key.
   NEVER import this file from a Client Component or any file with 'use client'.
   The service-role key bypasses RLS, so it must never reach the browser bundle. */

import { createClient } from '@supabase/supabase-js';

const url        = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;

if (!url || !serviceKey) {
  // Fail loud on the server if misconfigured — never silently fall back to anon.
  throw new Error(
    'Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY. ' +
    'Set SUPABASE_SERVICE_ROLE_KEY in your environment (Vercel → Project → Settings → Environment Variables).',
  );
}

export const supabaseAdmin = createClient(url, serviceKey, {
  auth: { persistSession: false, autoRefreshToken: false },
});
