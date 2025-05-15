"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export default function AuthDiagnostics() {
  const [diagnosticInfo, setDiagnosticInfo] = useState<{
    origin: string
    isPreview: boolean
    previewType: string | null
    supabaseUrl: string | null
    redirectUri: string
  } | null>(null)

  useEffect(() => {
    // Get environment information
    const origin = window.location.origin
    const hostname = window.location.hostname

    // Check if we're in a Vercel preview environment
    const isPreview = hostname.includes("vercel.app") && !hostname.startsWith("www")

    // Determine preview type
    let previewType = null
    if (isPreview) {
      if (hostname.includes("vercel-preview.app")) {
        previewType = "Branch Preview"
      } else if (hostname.includes("vercel-staging.app")) {
        previewType = "Staging Preview"
      } else if (hostname.includes("vercel-dev.app")) {
        previewType = "Development Preview"
      } else {
        previewType = "Standard Preview"
      }
    }

    // Get Supabase URL (without exposing the key)
    const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || null

    // Calculate the redirect URI that would be used
    const redirectUri = `${origin}/auth/callback`

    setDiagnosticInfo({
      origin,
      isPreview,
      previewType,
      supabaseUrl,
      redirectUri,
    })
  }, [])

  const copyToClipboard = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => alert("Copied to clipboard!"))
      .catch((err) => console.error("Failed to copy: ", err))
  }

  if (!diagnosticInfo) return <div>Loading diagnostic information...</div>

  return (
    <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 my-4">
      <h2 className="text-lg font-semibold mb-3">Authentication Diagnostics</h2>

      <div className="space-y-3">
        <div>
          <p className="text-sm font-medium text-gray-700">Current Origin:</p>
          <div className="flex items-center gap-2">
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">{diagnosticInfo.origin}</code>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(diagnosticInfo.origin)}
              className="h-7 text-xs"
            >
              Copy
            </Button>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700">Environment:</p>
          <p className="text-sm">
            {diagnosticInfo.isPreview
              ? `Vercel Preview (${diagnosticInfo.previewType})`
              : "Production or Local Development"}
          </p>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700">Redirect URI (needs to be allowed in OAuth providers):</p>
          <div className="flex items-center gap-2">
            <code className="bg-gray-100 px-2 py-1 rounded text-sm">{diagnosticInfo.redirectUri}</code>
            <Button
              variant="outline"
              size="sm"
              onClick={() => copyToClipboard(diagnosticInfo.redirectUri)}
              className="h-7 text-xs"
            >
              Copy
            </Button>
          </div>
        </div>

        <div>
          <p className="text-sm font-medium text-gray-700">Supabase URL:</p>
          <p className="text-sm">{diagnosticInfo.supabaseUrl ? "Configured ✓" : "Missing ✗"}</p>
        </div>

        <div className="pt-2">
          <h3 className="text-sm font-semibold text-gray-700">Required Redirect URIs:</h3>
          <p className="text-xs text-gray-600 mb-2">Add these to your OAuth provider configurations:</p>
          <ol className="list-decimal list-inside space-y-1 text-xs">
            <li>
              <div className="flex items-center gap-2">
                <code className="bg-gray-100 px-2 py-1 rounded">{diagnosticInfo.redirectUri}</code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => copyToClipboard(diagnosticInfo.redirectUri)}
                  className="h-6 text-xs"
                >
                  Copy
                </Button>
              </div>
            </li>
            <li>
              <div className="flex items-center gap-2">
                <code className="bg-gray-100 px-2 py-1 rounded">
                  {diagnosticInfo.supabaseUrl
                    ? `${diagnosticInfo.supabaseUrl}/auth/v1/callback`
                    : "[SUPABASE_URL]/auth/v1/callback"}
                </code>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() =>
                    copyToClipboard(
                      diagnosticInfo.supabaseUrl
                        ? `${diagnosticInfo.supabaseUrl}/auth/v1/callback`
                        : "[SUPABASE_URL]/auth/v1/callback",
                    )
                  }
                  className="h-6 text-xs"
                >
                  Copy
                </Button>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </div>
  )
}
