import { createClient } from "@supabase/supabase-js"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs"
import { createMiddlewareClient as createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs"
import { cookies } from "next/headers"
import type { NextRequest, NextResponse } from "next/server"

// Environment variables
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

// For server components
export function createServerSupabaseClient() {
  try {
    return createServerComponentClient({ cookies })
  } catch (error) {
    console.error("Error creating server supabase client:", error)
    // Fallback to direct client if cookies() fails
    return createClient(supabaseUrl, supabaseAnonKey, {
      auth: { persistSession: false },
    })
  }
}

// For client components
export function createBrowserSupabaseClient() {
  return createClientComponentClient()
}

// For middleware
export function createMiddlewareClient(req: NextRequest, res: NextResponse) {
  return createMiddlewareSupabaseClient({ req, res })
}

// For API routes
export function createRouteHandlerClient() {
  try {
    const cookieStore = cookies()
    return createClient(supabaseUrl, supabaseAnonKey, {
      auth: {
        persistSession: true,
        autoRefreshToken: true,
        detectSessionInUrl: true,
      },
    })
  } catch (error) {
    console.error("Error creating route handler supabase client:", error)
    return createClient(supabaseUrl, supabaseAnonKey)
  }
}
