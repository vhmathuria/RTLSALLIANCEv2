import { createClient } from "@supabase/supabase-js"
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { createMiddlewareClient as createMiddlewareSupabaseClient } from "@supabase/auth-helpers-nextjs"
import type { NextRequest, NextResponse } from "next/server"
import type { Database } from "@/types/supabase"

// Environment variables with fallbacks for safety
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || ""
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ""

// Check if environment variables are available
if (!supabaseUrl || !supabaseAnonKey) {
  console.error("Supabase environment variables are missing. Authentication will not work properly.")
}

// Create a singleton instance for client components
export const supabase = createClientComponentClient<Database>()

// For server components in App Router
export function createServerSupabaseClient() {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: { persistSession: false },
  })
}

// For client components (works in both App and Pages Router)
export function createBrowserSupabaseClient() {
  return createClientComponentClient<Database>()
}

// For middleware
export function createMiddlewareClient(req: NextRequest, res: NextResponse) {
  return createMiddlewareSupabaseClient({ req, res })
}

// For API routes
export function createRouteHandlerClient() {
  return createClient(supabaseUrl, supabaseAnonKey, {
    auth: {
      persistSession: true,
      autoRefreshToken: true,
      detectSessionInUrl: true,
    },
  })
}

// Utility function to get user profile
export async function getUserProfile(userId: string | undefined) {
  if (!userId) return null

  try {
    const { data, error } = await supabase.from("profiles").select("*").eq("id", userId).single()

    if (error) {
      console.error("Error fetching user profile:", error)
      return null
    }

    return data
  } catch (error) {
    console.error("Exception fetching user profile:", error)
    return null
  }
}

// Utility function to check if a user has an active membership
export async function hasActiveMembership(userId: string | undefined) {
  if (!userId) return false

  const profile = await getUserProfile(userId)
  if (!profile) return false

  // Check if user has a membership tier other than 'free'
  if (profile.membership_tier && profile.membership_tier !== "free") {
    // If there's an expiry date, check if it's in the future
    if (profile.membership_expiry) {
      const expiryDate = new Date(profile.membership_expiry)
      return expiryDate > new Date()
    }
    return true // If no expiry date but has a tier, assume it's active
  }

  return false
}
