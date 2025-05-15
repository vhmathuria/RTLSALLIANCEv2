"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { AlertCircle, ArrowLeft, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

export default function AuthErrorPage() {
  const searchParams = useSearchParams()
  const error = searchParams.get("error") || "Unknown authentication error"
  const description = searchParams.get("description") || ""

  const [environmentInfo, setEnvironmentInfo] = useState<{
    isPreview: boolean
    hostname: string
    origin: string
  } | null>(null)

  useEffect(() => {
    const hostname = window.location.hostname
    const isPreview =
      hostname.includes("vercel.app") &&
      !hostname.startsWith("www") &&
      (hostname.includes("-") || hostname.includes("git"))

    setEnvironmentInfo({
      isPreview,
      hostname,
      origin: window.location.origin,
    })

    console.log("Auth Error - Environment detection:", { hostname, isPreview })
  }, [])

  const getErrorExplanation = () => {
    if (error.includes("content blocked")) {
      return "The authentication provider is blocking the redirect to this domain. This typically happens in preview environments."
    }

    if (error.includes("provider is not enabled")) {
      return "The authentication provider is not enabled in your Supabase project settings."
    }

    if (error.includes("redirect_uri_mismatch")) {
      return "The redirect URI doesn't match any of the allowed redirect URIs in your OAuth provider settings."
    }

    return description || "There was a problem with the authentication process."
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-4">
      <div className="w-full max-w-2xl p-6 bg-white rounded-lg shadow-md">
        <div className="flex items-center gap-3 mb-6">
          <AlertCircle className="h-8 w-8 text-red-500" />
          <h1 className="text-2xl font-bold text-gray-900">Authentication Error</h1>
        </div>

        <div className="p-4 bg-red-50 border border-red-200 rounded-md mb-6">
          <p className="font-medium text-red-800">{error}</p>
          {description && <p className="mt-2 text-sm text-red-700">{description}</p>}
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-semibold mb-2">What happened?</h2>
          <p className="text-gray-700">{getErrorExplanation()}</p>
        </div>

        {environmentInfo?.isPreview && (
          <div className="p-4 bg-amber-50 border border-amber-200 rounded-md mb-6">
            <h3 className="font-medium text-amber-800">Preview Environment Detected</h3>
            <p className="mt-1 text-amber-700">
              You're using a Vercel preview environment ({environmentInfo.hostname}). OAuth providers typically block
              authentication in preview environments unless specifically configured.
            </p>
            <div className="mt-3">
              <p className="text-sm font-medium text-amber-800">Solutions:</p>
              <ul className="list-disc pl-5 mt-1 space-y-1 text-sm text-amber-700">
                <li>Test authentication on your production domain instead</li>
                <li>
                  Add this preview URL to your OAuth provider's allowed redirect URIs:
                  <div className="mt-1">
                    <code className="bg-amber-100 px-2 py-1 rounded text-xs break-all">
                      {environmentInfo.origin}/auth/callback
                    </code>
                  </div>
                </li>
                <li>Add this URL to your Supabase project's Site URL and Redirect URLs</li>
              </ul>
            </div>
          </div>
        )}

        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold mb-2">How to Fix This:</h2>
            <ul className="list-disc pl-5 space-y-2 text-gray-700">
              <li>
                <span className="font-medium">Check OAuth Provider Configuration:</span> Ensure Google and LinkedIn are
                properly configured in your Supabase dashboard.
              </li>
              <li>
                <span className="font-medium">Verify Redirect URIs:</span> Add the following redirect URIs to your OAuth
                provider settings:
                <ul className="list-disc pl-5 mt-1 space-y-1 text-sm">
                  <li>
                    <code className="bg-gray-100 px-1 rounded">[YOUR_SUPABASE_URL]/auth/v1/callback</code>
                  </li>
                  <li>
                    <code className="bg-gray-100 px-1 rounded">[YOUR_SITE_URL]/auth/callback</code>
                  </li>
                </ul>
              </li>
              <li>
                <span className="font-medium">LinkedIn Provider Name:</span> Ensure the LinkedIn provider is configured
                as <code className="bg-gray-100 px-1 rounded">linkedin_oidc</code> in both your code and Supabase
                dashboard.
              </li>
              <li>
                <span className="font-medium">Clear Browser Cache:</span> Try clearing your browser cookies and cache.
              </li>
            </ul>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row gap-3">
            <Link href="/">
              <Button className="w-full sm:w-auto" variant="outline">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Return to Home
              </Button>
            </Link>
            <Link href="/membership">
              <Button className="w-full sm:w-auto">Try Again</Button>
            </Link>
            <a href="https://supabase.com/dashboard" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="w-full sm:w-auto">
                Supabase Dashboard
                <ExternalLink className="ml-2 h-4 w-4" />
              </Button>
            </a>
          </div>
        </div>
      </div>
    </main>
  )
}
