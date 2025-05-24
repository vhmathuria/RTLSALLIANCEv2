"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { FaGoogle, FaLinkedin } from "react-icons/fa"
import { MdEmail } from "react-icons/md"
import { AlertCircle } from "lucide-react"
import AuthDiagnostics from "./auth-diagnostics"
import EnvironmentDebug from "./environment-debug"
import Link from "next/link"

interface AuthButtonsProps {
  redirectTo?: string
  showEmail?: boolean
  onEmailClick?: () => void
  className?: string
  showDiagnostics?: boolean
  onEmailSignup?: () => void
  tier?: string
}

export function AuthButtons({
  redirectTo = "/",
  showEmail = true,
  onEmailClick,
  className = "",
  showDiagnostics = false,
  onEmailSignup,
  tier,
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

  const handleEmailClick = () => {
    if (onEmailClick) {
      onEmailClick()
    } else {
      router.push(redirectTo)
    }
  }

  const redirectParam = encodeURIComponent(redirectTo)
  const tierParam = tier ? `&tier=${tier}` : ""

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
        asChild
        disabled={!envVarsAvailable}
      >
        <Link href={`/api/auth/google?redirectTo=${redirectParam}${tierParam}`}>
          <FaGoogle className="h-5 w-5 text-red-500" />
          Sign in with Google
        </Link>
      </Button>

      <Button
        variant="outline"
        className="flex items-center justify-center gap-2 w-full"
        asChild
        disabled={!envVarsAvailable}
      >
        <Link href={`/api/auth/linkedin?redirectTo=${redirectParam}${tierParam}`}>
          <FaLinkedin className="h-5 w-5 text-blue-600" />
          Sign in with LinkedIn
        </Link>
      </Button>

      {showEmail && (
        <Button
          variant="outline"
          className="flex items-center justify-center gap-2 w-full"
          onClick={handleEmailClick}
          disabled={!envVarsAvailable}
        >
          <MdEmail className="h-5 w-5 text-gray-600" />
          Sign in with Email
        </Button>
      )}

      {onEmailSignup && (
        <Button className="w-full flex items-center justify-center gap-3" variant="outline" onClick={onEmailSignup}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect width="20" height="16" x="2" y="4" rx="2" />
            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
          </svg>
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
