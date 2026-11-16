import { createClient, SupabaseClient } from '@supabase/supabase-js';

const url = import.meta.env.NEXT_PUBLIC_SUPABASE_URL || import.meta.env.VITE_SUPABASE_URL;
const key =
  import.meta.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_PUBLISHABLE_KEY ||
  import.meta.env.VITE_SUPABASE_ANON_KEY;

/** null when the Supabase env vars are not set: the app then runs on localStorage only. */
export const supabase: SupabaseClient | null = url && key ? createClient(url, key) : null;

export const STATE_TABLE = 'app_state';
