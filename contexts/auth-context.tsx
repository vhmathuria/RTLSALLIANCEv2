"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { supabase, getUserProfile } from "@/lib/supabase"
import { useRouter } from "next/navigation"

type User = any
type Profile = any

interface AuthContextType {
  user: User | null
  profile: Profile | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: any }>
  signUp: (email: string, password: string) => Promise<{ error: any }>
  signOut: () => Promise<void>
  refreshProfile: () => Promise<void>
}

const AuthContext = createContext<AuthContextType>({
  user: null,
  profile: null,
  loading: true,
  signIn: async () => ({ error: null }),
  signUp: async () => ({ error: null }),
  signOut: async () => {},
  refreshProfile: async () => {},
})

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [profile, setProfile] = useState<Profile | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  // Load user on mount
  useEffect(() => {
    async function loadUserAndProfile() {
      try {
        // Get initial session
        const {
          data: { session },
        } = await supabase.auth.getSession()

        if (session?.user) {
          setUser(session.user)

          // Get profile
          const profile = await getUserProfile(session.user.id)
          setProfile(profile)
        }
      } catch (error) {
        console.error("Error loading user:", error)
      } finally {
        setLoading(false)
      }
    }

    loadUserAndProfile()

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, session) => {
      console.log("Auth state changed:", event)

      if (session?.user) {
        setUser(session.user)

        // Get profile
        const profile = await getUserProfile(session.user.id)
        setProfile(profile)
      } else {
        setUser(null)
        setProfile(null)
      }

      // Force refresh
      router.refresh()
    })

    return () => {
      subscription.unsubscribe()
    }
  }, [router])

  // Sign in with email and password
  async function signIn(email: string, password: string) {
    try {
      const { error } = await supabase.auth.signInWithPassword({ email, password })
      return { error }
    } catch (error) {
      console.error("Error signing in:", error)
      return { error }
    }
  }

  // Sign up with email and password
  async function signUp(email: string, password: string) {
    try {
      const { error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback`,
        },
      })
      return { error }
    } catch (error) {
      console.error("Error signing up:", error)
      return { error }
    }
  }

  // Sign out
  async function signOut() {
    try {
      await supabase.auth.signOut()
      router.push("/")
    } catch (error) {
      console.error("Error signing out:", error)
    }
  }

  // Refresh profile
  async function refreshProfile() {
    if (!user) return

    try {
      const profile = await getUserProfile(user.id)
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
        signIn,
        signUp,
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
