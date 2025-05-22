import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import type { Database } from "@/types/supabase"
import { createAdminClient as adminClient } from "./supabase-server-admin"

// Export the function with the name that's being imported elsewhere
export const createAdminClient = adminClient

// Export the function with the name that's being imported elsewhere
export function createServerClient() {
  const cookieStore = cookies()
  return createServerComponentClient<Database>({ cookies: () => cookieStore })
}

// Keep the original function for backward compatibility
export function createClient() {
  const cookieStore = cookies()
  return createServerComponentClient<Database>({ cookies: () => cookieStore })
}
