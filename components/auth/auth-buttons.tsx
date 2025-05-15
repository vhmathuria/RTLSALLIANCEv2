"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { FaGoogle, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AlertCircle } from "lucide-react"
import AuthDiagnostics from "./auth-diagnostics"
import EnvironmentDebug from "./environment-debug"

interface AuthButtonsProps {
  redirectTo?: string
  showEmail?: boolean
  onEmailClick?: () => void
  className?: string
  showDiagnostics?: boolean
}

export function AuthButtons({
  redirectTo = "/",
  showEmail = true,
  onEmailClick,
  className = "",
  showDiagnostics = false,
}: AuthButtonsProps) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({
    google: false,
    linkedin_oidc: false,
    email: false,
  })
  const [error, setError] = useState<string | null>(null)
  const [envVarsAvailable, setEnvVarsAvailable] = useState<boolean>(false)
  const [isPreviewEnvironment, setIsPreviewEnvironment] = useState<boolean>(false)

  useEffect(() => {
    // Check if environment variables are available
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
    const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

    setEnvVarsAvailable(!!(supabaseUrl && supabaseKey))

    if (!supabaseUrl || !supabaseKey) {
      setError("Authentication is currently unavailable. Please contact the site administrator.")
    }

    // Check if we're in a preview environment
    const hostname = window.location.hostname
    const isPreview =
      hostname.includes("vercel.app") &&
      !hostname.startsWith("www") &&
      (hostname.includes("-") || hostname.includes("git"))

    setIsPreviewEnvironment(isPreview)
    console.log("Environment detection:", { hostname, isPreview })
  }, [])

  const handleOAuthSignIn = async (provider: "google" | "linkedin_oidc") => {
    if (!envVarsAvailable) {
      setError("Authentication is not configured. Please contact the site administrator.")
      return
    }

    try {
      setIsLoading((prev) => ({ ...prev, [provider]: true }))
      setError(null)

      // Get the current origin
      const origin = window.location.origin
      console.log("Current origin:", origin)

      console.log("Environment detection in sign-in:", {
        hostname: window.location.hostname,
        isPreview: isPreviewEnvironment,
        origin,
      })

      // Check if we're in a preview environment
      const isPreview = isPreviewEnvironment

      if (isPreview) {
        setError(
          "OAuth sign-in is limited in preview environments. For testing, please use the deployed production URL or add this preview URL to your OAuth provider's allowed redirect URIs.",
        )
        setIsLoading((prev) => ({ ...prev, [provider]: false }))
        return
      }

      // Dynamically import to avoid errors when env vars aren't available
      const { getSupabaseBrowser } = await import("@/lib/supabase-browser")
      const supabase = getSupabaseBrowser()

      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${origin}/auth/callback?next=${encodeURIComponent(redirectTo)}`,
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
      setIsLoading((prev) => ({ ...prev, [provider]: false }))
    }
  }

  const handleEmailClick = () => {
    if (onEmailClick) {
      onEmailClick()
    } else {
      router.push(redirectTo)
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

      {isPreviewEnvironment && (
        <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-4">
          <h3 className="font-medium text-amber-800">Preview Environment Detected</h3>
          <p className="text-sm text-amber-700 mt-1">
            OAuth authentication may not work in preview environments due to redirect URI restrictions. For testing, use
            the production URL or configure your OAuth providers to allow this preview URL.
          </p>
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
        onClick={() => handleOAuthSignIn("linkedin_oidc")}
        disabled={isLoading.linkedin_oidc || !envVarsAvailable}
      >
        <FaLinkedin className="h-5 w-5 text-blue-600" />
        {isLoading.linkedin_oidc ? "Signing in..." : "Sign in with LinkedIn"}
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

      {showDiagnostics && <AuthDiagnostics />}

      <div className="text-xs text-gray-500 mt-2">
        By signing in, you agree to our Terms of Service and Privacy Policy.
      </div>
      <EnvironmentDebug />
    </div>
  )
}

export default AuthButtons
