import { createClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"

// Create a Supabase client with the service role key for admin operations
// This bypasses RLS policies for server-side operations that need full access
export function createAdminClient() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseServiceRole = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !supabaseServiceRole) {
    console.error("Missing Supabase admin credentials. Check environment variables.")
    throw new Error("Missing Supabase admin credentials")
  }

  return createClient<Database>(supabaseUrl, supabaseServiceRole, {
    auth: {
      persistSession: false,
    },
  })
}
