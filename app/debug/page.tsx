"use client"

import { useState, useEffect } from "react"
import { getSupabaseBrowser } from "@/lib/supabase-browser"

// Debug page that should be removed in production
// DELETE THIS FILE

export default function DebugPage() {
  const [envStatus, setEnvStatus] = useState({
    supabaseUrl: false,
    supabaseAnonKey: false,
  })
  const [authProviders, setAuthProviders] = useState<string[]>([])
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    // Check environment variables
    setEnvStatus({
      supabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      supabaseAnonKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY,
    })

    // Check available auth providers
    const checkAuthProviders = async () => {
      try {
        const supabase = getSupabaseBrowser()
        const { data, error } = await supabase.auth.getSession()

        if (error) {
          setError(`Session error: ${error.message}`)
          return
        }

        // This is just a placeholder - Supabase JS client doesn't expose available providers
        // In a real implementation, you might want to check this from your backend
        setAuthProviders(["google", "linkedin", "email"])
      } catch (err: any) {
        setError(`Error checking auth providers: ${err.message}`)
      }
    }

    checkAuthProviders()
  }, [])

  return (
    <div className="container mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Environment Debug</h1>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Environment Variables</h2>
        <ul className="space-y-2">
          <li className="flex items-center">
            <span
              className={`w-4 h-4 rounded-full mr-2 ${envStatus.supabaseUrl ? "bg-green-500" : "bg-red-500"}`}
            ></span>
            <span className="font-medium">NEXT_PUBLIC_SUPABASE_URL:</span>
            <span className="ml-2">{envStatus.supabaseUrl ? "Available" : "Missing"}</span>
          </li>
          <li className="flex items-center">
            <span
              className={`w-4 h-4 rounded-full mr-2 ${envStatus.supabaseAnonKey ? "bg-green-500" : "bg-red-500"}`}
            ></span>
            <span className="font-medium">NEXT_PUBLIC_SUPABASE_ANON_KEY:</span>
            <span className="ml-2">{envStatus.supabaseAnonKey ? "Available" : "Missing"}</span>
          </li>
        </ul>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md mb-8">
        <h2 className="text-xl font-semibold mb-4">Auth Providers</h2>
        {authProviders.length > 0 ? (
          <ul className="space-y-2">
            {authProviders.map((provider) => (
              <li key={provider} className="flex items-center">
                <span className="w-4 h-4 rounded-full mr-2 bg-green-500"></span>
                <span>{provider}</span>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No auth providers detected</p>
        )}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 p-4 rounded-md">
          <h3 className="text-red-800 font-medium">Error</h3>
          <p className="text-red-600">{error}</p>
        </div>
      )}

      <div className="mt-8 bg-yellow-50 border border-yellow-200 p-4 rounded-md">
        <h3 className="text-yellow-800 font-medium mb-2">Troubleshooting Steps</h3>
        <ol className="list-decimal pl-5 space-y-2 text-yellow-700">
          <li>Ensure your .env.local file contains the required environment variables</li>
          <li>Verify that your Supabase project is active and properly configured</li>
          <li>Check that OAuth providers (Google, LinkedIn) are set up in your Supabase dashboard</li>
          <li>Restart your development server after making changes to environment variables</li>
          <li>Clear your browser cache and cookies</li>
        </ol>
      </div>
    </div>
  )
}
