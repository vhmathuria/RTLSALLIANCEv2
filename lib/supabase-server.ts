import { createClient as createSupabaseClient } from "@/lib/supabase/server"

// Export the function with the name that's being imported elsewhere
export async function createServerClient() {
  return await createSupabaseClient()
}

export async function createClient() {
  return await createSupabaseClient()
}
