"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createSupabaseClient } from "@/lib/supabase-auth"
import { FaGoogle, FaLinkedin } from "react-icons/fa"
import { AlertCircle } from "lucide-react"

interface AuthClientProps {
  defaultTab: string
  redirectTo: string
  error?: string
}

export default function AuthClient({ defaultTab, redirectTo, error: initialError }: AuthClientProps) {
  const router = useRouter()
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(initialError || null)
  const [activeTab, setActiveTab] = useState(defaultTab)
  const [isLoading, setIsLoading] = useState<{ [key: string]: boolean }>({
    google: false,
    linkedin_oidc: false,
  })
  const [isPreviewEnvironment, setIsPreviewEnvironment] = useState<boolean>(false)

  // Check if user is signed in
  useEffect(() => {
    const checkUser = async () => {
      try {
        const supabase = createSupabaseClient()
        const { data } = await supabase.auth.getUser()
        setUser(data.user)

        // If user is already logged in, redirect to the requested page
        if (data.user) {
          router.push(redirectTo)
        }
      } catch (err) {
        console.error("Error checking user:", err)
        setError("Failed to check authentication status")
      } finally {
        setLoading(false)
      }
    }

    // Check if we're in a preview environment
    const hostname = window.location.hostname
    const isPreview =
      hostname.includes("vercel.app") &&
      !hostname.startsWith("www") &&
      (hostname.includes("-") || hostname.includes("git"))

    setIsPreviewEnvironment(isPreview)
    console.log("Environment detection:", { hostname, isPreview })

    checkUser()
  }, [redirectTo, router])

  const handleOAuthSignIn = async (provider: "google" | "linkedin_oidc") => {
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
      const supabase = createSupabaseClient()

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

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-blue-600"></div>
      </div>
    )
  }

  if (user) {
    return null // Will redirect in useEffect
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50 flex flex-col justify-center py-8 px-4 sm:py-12 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-blue-100 opacity-50"></div>
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-indigo-100 opacity-50"></div>
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-200 opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/3 w-48 h-48 rounded-full bg-indigo-200 opacity-20"></div>
      </div>

      <div className="sm:mx-auto sm:w-full sm:max-w-md z-10 relative">
        <div className="text-center">
          <div className="bg-white p-4 rounded-full inline-block shadow-md mb-6">
            <Image
              src="/images/rtls-alliance-logo.png"
              alt="RTLS Alliance Logo"
              width={90}
              height={90}
              className="mx-auto"
            />
          </div>

          <Tabs defaultValue={defaultTab} className="w-full" onValueChange={(value) => setActiveTab(value)}>
            <TabsList className="grid w-full grid-cols-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl p-1.5 shadow-inner">
              <TabsTrigger
                value="login"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg py-3 text-lg font-medium transition-all duration-200 data-[state=inactive]:bg-white/80 data-[state=inactive]:text-gray-700"
              >
                Sign In
              </TabsTrigger>
              <TabsTrigger
                value="signup"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-blue-600 data-[state=active]:to-purple-600 data-[state=active]:text-white rounded-lg py-3 text-lg font-medium transition-all duration-200 data-[state=inactive]:bg-white/80 data-[state=inactive]:text-gray-700"
              >
                Join Alliance
              </TabsTrigger>
            </TabsList>

            <TabsContent value="login" className="mt-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Welcome Back</h2>
                <p className="mt-3 text-base text-gray-600">Sign in to access exclusive RTLS Alliance resources</p>
              </div>
            </TabsContent>

            <TabsContent value="signup" className="mt-8">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Join the Alliance</h2>
                <p className="mt-3 text-base text-gray-600">Become part of the leading RTLS community</p>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mt-6 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-md">
          <div className="bg-white py-8 px-6 sm:py-10 sm:px-8 shadow-xl rounded-xl border border-gray-100">
            {error && (
              <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-md flex items-start">
                <AlertCircle className="text-red-500 mr-2 flex-shrink-0 mt-0.5" size={16} />
                <p className="text-sm text-red-800">{error}</p>
              </div>
            )}

            {isPreviewEnvironment && (
              <div className="bg-amber-50 border border-amber-200 rounded-md p-4 mb-4">
                <h3 className="font-medium text-amber-800">Preview Environment Detected</h3>
                <p className="text-sm text-amber-700 mt-1">
                  OAuth authentication may not work in preview environments due to redirect URI restrictions. For
                  testing, use the production URL or configure your OAuth providers to allow this preview URL.
                </p>
              </div>
            )}

            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsContent value="login">
                <div className="flex flex-col gap-4 sm:gap-5 w-full">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-3 w-full py-5 sm:py-7 text-base sm:text-lg font-medium transition-all hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700"
                    onClick={() => handleOAuthSignIn("google")}
                    disabled={isLoading.google}
                  >
                    <FaGoogle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                    <span>{isLoading.google ? "Signing in..." : "Sign in with Google"}</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-3 w-full py-5 sm:py-7 text-base sm:text-lg font-medium transition-all hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700"
                    onClick={() => handleOAuthSignIn("linkedin_oidc")}
                    disabled={isLoading.linkedin_oidc}
                  >
                    <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    <span>{isLoading.linkedin_oidc ? "Signing in..." : "Sign in with LinkedIn"}</span>
                  </Button>

                  <div className="text-center text-sm text-gray-500 mt-4 px-4">
                    By signing in, you agree to our{" "}
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="signup">
                <div className="flex flex-col gap-4 sm:gap-5 w-full">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-3 w-full py-5 sm:py-7 text-base sm:text-lg font-medium transition-all hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700"
                    onClick={() => handleOAuthSignIn("google")}
                    disabled={isLoading.google}
                  >
                    <FaGoogle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                    <span>{isLoading.google ? "Signing up..." : "Sign up with Google"}</span>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-3 w-full py-5 sm:py-7 text-base sm:text-lg font-medium transition-all hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700"
                    onClick={() => handleOAuthSignIn("linkedin_oidc")}
                    disabled={isLoading.linkedin_oidc}
                  >
                    <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                    <span>{isLoading.linkedin_oidc ? "Signing up..." : "Sign up with LinkedIn"}</span>
                  </Button>

                  <div className="text-center text-sm text-gray-500 mt-4 px-4">
                    By signing up, you agree to our{" "}
                    <Link href="/terms" className="text-blue-600 hover:underline">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-blue-600 hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* Only show "New to RTLS Alliance" text on the login tab */}
          {activeTab === "login" && (
            <div className="mt-6 text-center">
              <p className="text-base text-gray-600">
                New to RTLS Alliance?{" "}
                <button
                  onClick={() => {
                    document.querySelector('[data-value="signup"]')?.click()
                    setActiveTab("signup")
                  }}
                  className="font-medium text-blue-600 hover:text-blue-500 text-base"
                >
                  Create an account
                </button>
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
