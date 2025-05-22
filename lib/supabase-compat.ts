// This file provides compatibility for both app/ and pages/ directories
import { createClient as createClientBase } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Create a client that works in both app/ and pages/ directories
export function createCompatClient() {
  return createClientBase<Database>(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!)
}
