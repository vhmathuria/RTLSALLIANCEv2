"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { signInWithProvider } from "@/lib/supabase-auth"
import { FaGoogle, FaLinkedin } from "react-icons/fa"
import { useRouter } from "next/navigation"

export function GoogleSignInButton({ redirectTo }: { redirectTo?: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSignIn = async () => {
    try {
      setIsLoading(true)
      const { error } = await signInWithProvider("google")

      if (error) {
        throw error
      }

      // The redirect is handled by the OAuth provider callback
    } catch (error) {
      console.error("Error signing in with Google:", error)
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      type="button"
      disabled={isLoading}
      onClick={handleSignIn}
      className="w-full flex items-center justify-center gap-2"
    >
      {isLoading ? (
        <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-current"></div>
      ) : (
        <FaGoogle className="h-4 w-4" />
      )}
      <span>Sign in with Google</span>
    </Button>
  )
}

export function LinkedInSignInButton({ redirectTo }: { redirectTo?: string }) {
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleSignIn = async () => {
    try {
      setIsLoading(true)
      const { error } = await signInWithProvider("linkedin_oidc")

      if (error) {
        throw error
      }

      // The redirect is handled by the OAuth provider callback
    } catch (error) {
      console.error("Error signing in with LinkedIn:", error)
      setIsLoading(false)
    }
  }

  return (
    <Button
      variant="outline"
      type="button"
      disabled={isLoading}
      onClick={handleSignIn}
      className="w-full flex items-center justify-center gap-2"
    >
      {isLoading ? (
        <div className="h-4 w-4 animate-spin rounded-full border-b-2 border-current"></div>
      ) : (
        <FaLinkedin className="h-4 w-4" />
      )}
      <span>Sign in with LinkedIn</span>
    </Button>
  )
}
