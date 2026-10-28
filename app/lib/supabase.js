import { createClient } from "@supabase/supabase-js";

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// TODO: Hvis en af de to mangler, så kast en Error med en tydelig besked.

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error(
    "Missing VITE_SUPABASE_URL or VITE_SUPABASE_ANON_KEY. Copy .env.example to .env and fill in the values."
  );
}

// TODO: Lav klienten med createClient(supabaseUrl, supabaseAnonKey), og eksportér den som supabase.

export const supabase = createClient(supabaseUrl, supabaseAnonKey)