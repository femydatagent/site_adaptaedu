import { createClient, type SupabaseClient } from '@supabase/supabase-js';

let _supabase: SupabaseClient | null = null;

export function getSupabase(): SupabaseClient {
  if (!_supabase) {
    _supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
    );
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
