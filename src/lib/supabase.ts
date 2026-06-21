import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient | null {
  if (!_supabase) {
    const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
    const anonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
    if (!url || !anonKey) {
      return null;
    }
    _supabase = createClient(url, anonKey);
  }
  return _supabase;
}

export type DemoSubmission = {
  id: string;
  name: string;
  email: string;
  whatsapp: string;
  school_name: string;
  school_year: string;
  accepted_terms: boolean;
  created_at: string;
};
