import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import type { Database } from "@/types/supabase"

// Client-side Supabase client (safe for pages/ directory)
export function createBrowserClient() {
  return createClientComponentClient<Database>()
}
