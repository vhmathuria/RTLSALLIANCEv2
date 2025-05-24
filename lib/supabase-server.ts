import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"
import type { Database } from "@/types/supabase"

// Add a check for environment variables
const getSupabaseUrl = () => {
  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  if (!url) {
    console.warn("Missing NEXT_PUBLIC_SUPABASE_URL")
    return "https://placeholder-url.supabase.co" // Placeholder during build
  }
  return url
}

const getSupabaseAnonKey = () => {
  const key = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
  if (!key) {
    console.warn("Missing NEXT_PUBLIC_SUPABASE_ANON_KEY")
    return "placeholder-key" // Placeholder during build
  }
  return key
}

export const createClient = createServerClient

export const createServerSupabaseClient = () => {
  const cookieStore = cookies()
  return createServerClient<Database>(getSupabaseUrl(), getSupabaseAnonKey(), {
    cookies: {
      get(name: string) {
        return cookieStore.get(name)?.value
      },
      set(name: string, value: string, options: CookieOptions) {
        cookieStore.set({ name, value, ...options })
      },
      remove(name: string, options: CookieOptions) {
        cookieStore.delete({ name, ...options })
      },
    },
  })
}

export async function getServerSession() {
  const supabase = createServerSupabaseClient()
  try {
    const {
      data: { session },
    } = await supabase.auth.getSession()
    return session
  } catch (error) {
    console.error("Error getting server session:", error)
    return null
  }
}

export async function getServerUser() {
  const session = await getServerSession()
  return session?.user || null
}
