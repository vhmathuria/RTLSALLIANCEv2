"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { FaGoogle, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AlertCircle } from "lucide-react"

interface AuthButtonsProps {
  redirectTo?: string
  showEmail?: boolean
  onEmailClick?: () => void
  className?: string
}

export function AuthButtons({ redirectTo = "/", showEmail = true, onEmailClick, className = "" }: AuthButtonsProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({
    google: false,
    linkedin: false,
    email: false,
  })
  const [error, setError] = useState<string | null>(null)
  const [envVarsAvailable, setEnvVarsAvailable] = useState<boolean>(false)

  useEffect(() => {
    // Check if environment variables are available
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    setEnvVarsAvailable(!!(supabaseUrl && supabaseKey))

    if (!supabaseUrl || !supabaseKey) {
      setError("Authentication is currently unavailable. Please contact the site administrator.")
    }
  }, [])

  const handleOAuthSignIn = async (provider: "google" | "linkedin") => {
    if (!envVarsAvailable) {
      setError("Authentication is not configured. Please contact the site administrator.")
      return
    }

    try {
      setIsLoading({ ...isLoading, [provider]: true })
      setError(null)

      // Dynamically import to avoid errors when env vars aren't available
      const { getSupabaseBrowser } = await import("@/lib/supabase-browser")
      const supabase = getSupabaseBrowser()

      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback?next=${encodeURIComponent(redirectTo)}`,
        },
      })

      if (error) {
        console.error(`Error signing in with ${provider}:`, error)
        setError(`Failed to sign in with ${provider}: ${error.message}`)
      }
    } catch (err: any) {
      console.error(`Unexpected error during ${provider} sign-in:`, err)
      setError(`An unexpected error occurred: ${err.message}`)
    } finally {
      setIsLoading({ ...isLoading, [provider]: false })
    }
  }

  const handleEmailClick = () => {
    if (onEmailClick) {
      onEmailClick()
    }
  }

  return (
    <div className={`flex flex-col gap-3 w-full ${className}`}>
      {error && (
        <div className="bg-red-50 border border-red-200 rounded-md p-4 flex items-start">
          <AlertCircle className="text-red-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
          <p className="text-sm text-red-800">{error}</p>
        </div>
      )}

      <Button
        variant="outline"
        className="flex items-center justify-center gap-2 w-full"
        onClick={() => handleOAuthSignIn("google")}
        disabled={isLoading.google || !envVarsAvailable}
      >
        <FaGoogle className="h-5 w-5 text-red-500" />
        {isLoading.google ? "Signing in..." : "Sign in with Google"}
      </Button>

      <Button
        variant="outline"
        className="flex items-center justify-center gap-2 w-full"
        onClick={() => handleOAuthSignIn("linkedin")}
        disabled={isLoading.linkedin || !envVarsAvailable}
      >
        <FaLinkedin className="h-5 w-5 text-blue-600" />
        {isLoading.linkedin ? "Signing in..." : "Sign in with LinkedIn"}
      </Button>

      {showEmail && (
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 w-full"
          onClick={handleEmailClick}
          disabled={isLoading.email || !envVarsAvailable}
        >
          <MdEmail className="h-5 w-5 text-gray-600" />
          Sign in with Email
        </Button>
      )}

      {!envVarsAvailable && (
        <div className="text-amber-600 text-sm mt-2 p-2 bg-amber-50 border border-amber-200 rounded">
          <p className="font-medium">Authentication is not configured</p>
          <p className="mt-1">The site administrator needs to set up Supabase authentication.</p>
        </div>
      )}

      <div className="text-xs text-gray-500 mt-2">
        By signing in, you agree to our Terms of Service and Privacy Policy.
      </div>
    </div>
  )
}

export default AuthButtons
