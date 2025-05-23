import type { SupabaseClient } from "@supabase/supabase-js"
import type { Database } from "@/types/supabase"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"

const clientInstance: SupabaseClient<Database> | null = null

export function getSupabaseBrowser() {
  console.log("BROWSER: Creating new Supabase client")
  return createClientComponentClient<Database>()
}
