"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { createSupabaseClient, ensureUserProfile } from "@/lib/supabase-auth"
import { useRouter } from "next/navigation"
import type { User } from "@supabase/supabase-js"

interface Profile {
  id: string
  email: string
  full_name?: string
  membership_tier: string
  membership_status: string
  membership_expiry?: string
  last_payment_date?: string
  stripe_customer_id?: string
  created_at: string
  updated_at: string
}

interface AuthContextType {
  user: User | null
  profile: Profile | null
  loading: boolean
  signInWithProvider: (provider: "google" | "linkedin_oidc") => Promise<{ error: any }>
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signInWithProvider: async () => ({ error: null }),
  signOut: async () => {},
  refreshProfile: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createSupabaseClient()

  // Load initial session and profile
  useEffect(() => {
    async function loadSession() {
      try {
        const {
          data: { session },
        } = await supabase.auth.getSession()

        if (session?.user) {
          setUser(session.user)
          await loadProfile(session.user)
        }
      } catch (error) {
        console.error("Error loading session:", error)
      } finally {
        setLoading(false)
      }
    }

    loadSession()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event)

      if (session?.user) {
        setUser(session.user)
        await loadProfile(session.user)
      } else {
        setUser(null)
        setProfile(null)
      }

      setLoading(false)
      router.refresh()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [supabase, router])

  // Load user profile
  async function loadProfile(user: User) {
    try {
      // Ensure profile exists
      const fullName = user.user_metadata?.full_name || user.user_metadata?.name
      const profile = await ensureUserProfile(user.id, user.email!, fullName)
      setProfile(profile)
    } catch (error) {
      console.error("Error loading profile:", error)
    }
  }

  // Sign in with OAuth provider
  async function signInWithProvider(provider: "google" | "linkedin_oidc") {
    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      return { error }
    } catch (error) {
      return { error }
    }
  }

  // Sign out
  async function signOut() {
    try {
      await supabase.auth.signOut()
      setUser(null)
      setProfile(null)
      router.push("/")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  // Refresh profile
  async function refreshProfile() {
    if (!user) return

    try {
      const fullName = user.user_metadata?.full_name || user.user_metadata?.name
      const profile = await ensureUserProfile(user.id, user.email!, fullName)
      setProfile(profile)
    } catch (error) {
      console.error("Error refreshing profile:", error)
    }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        profile,
        loading,
        signInWithProvider,
        signOut,
        refreshProfile,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
