import { createServerClient } from "@supabase/ssr"
import { cookies } from "next/headers"
import { cache } from "react"

// Check if Supabase environment variables are available
export const isSupabaseConfigured =
  typeof process.env.NEXT_PUBLIC_SUPABASE_URL === "string" &&
  process.env.NEXT_PUBLIC_SUPABASE_URL.length > 0 &&
  typeof process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY === "string" &&
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY.length > 0

export const createClient = cache(async () => {
  const cookieStore = await cookies()

  if (!isSupabaseConfigured) {
    console.warn("Supabase environment variables are not set. Using dummy client.")
    return {
      auth: {
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
          }),
          order: () => Promise.resolve({ data: [], error: null }),
        }),
        insert: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
        }),
      }),
    } as any
  }

  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return cookieStore.getAll()
      },
      setAll(cookiesToSet) {
        try {
          cookiesToSet.forEach(({ name, value, options }) => cookieStore.set(name, value, options))
        } catch {
          // The "setAll" method was called from a Server Component.
          // This can be ignored if you have middleware refreshing
          // user sessions.
        }
      },
    },
  })
})

export function createClientSync() {
  if (!isSupabaseConfigured) {
    console.warn("Supabase environment variables are not set. Using dummy client.")
    return {
      auth: {
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
          }),
          order: () => Promise.resolve({ data: [], error: null }),
        }),
        insert: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
        }),
      }),
    } as any
  }

  // For build time, return a client without cookies
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    cookies: {
      getAll() {
        return []
      },
      setAll() {
        // No-op during build
      },
    },
  })
}

export const createServiceRoleClient = cache(() => {
  console.log("[v0] Creating service role client")
  console.log("[v0] Supabase URL configured:", !!process.env.NEXT_PUBLIC_SUPABASE_URL)
  console.log("[v0] Service role key configured:", !!process.env.SUPABASE_SERVICE_ROLE_KEY)

  if (!isSupabaseConfigured) {
    console.error("[v0] Supabase base configuration missing (URL or anon key)")
    return {
      auth: {
        getUser: () => Promise.resolve({ data: { user: null }, error: null }),
        getSession: () => Promise.resolve({ data: { session: null }, error: null }),
      },
      from: () => ({
        select: () => ({
          eq: () => ({
            single: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
          }),
          order: () => Promise.resolve({ data: [], error: null }),
        }),
        insert: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
        update: () => ({
          eq: () => Promise.resolve({ data: null, error: { message: "Supabase not configured" } }),
        }),
      }),
    } as any
  }

  if (!process.env.SUPABASE_SERVICE_ROLE_KEY) {
    console.error("[v0] ========================================")
    console.error("[v0] CRITICAL CONFIGURATION ERROR")
    console.error("[v0] ========================================")
    console.error("[v0] SUPABASE_SERVICE_ROLE_KEY environment variable is NOT SET")
    console.error("[v0] This is REQUIRED for:")
    console.error("[v0]   - Contact form submissions")
    console.error("[v0]   - Newsletter signups")
    console.error("[v0]   - Any public form that needs to bypass RLS")
    console.error("[v0] ========================================")
    console.error("[v0] To fix this:")
    console.error("[v0] 1. Go to your Supabase project settings")
    console.error("[v0] 2. Navigate to API settings")
    console.error("[v0] 3. Copy the 'service_role' key (NOT the anon key)")
    console.error("[v0] 4. Add it as SUPABASE_SERVICE_ROLE_KEY environment variable")
    console.error("[v0] 5. Redeploy your application")
    console.error("[v0] ========================================")

    // Return anon client as fallback, but it will fail for inserts due to RLS
    return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
      cookies: {
        getAll() {
          return []
        },
        setAll() {
          // No-op
        },
      },
    })
  }

  console.log("[v0] Service role client created successfully with service role key")
  // Create client with service role key to bypass RLS
  return createServerClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.SUPABASE_SERVICE_ROLE_KEY, {
    cookies: {
      getAll() {
        return []
      },
      setAll() {
        // No-op for service role client
      },
    },
  })
})

export { createClient as createServerClient }
