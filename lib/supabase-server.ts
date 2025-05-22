import { createClient as createClientBase } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Create a client that doesn't rely on headers
export function createClient() {
  if (!process.env.SUPABASE_URL || !process.env.SUPABASE_ANON_KEY) {
    console.error("Missing Supabase environment variables")
    throw new Error("Missing Supabase environment variables")
  }

  return createClientBase<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY)
}

// For compatibility with existing code that expects the createServerClient function
export function createServerClient() {
  return createClient()
}
