"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createSupabaseClient } from "@/lib/supabase-auth"
import { FaGoogle, FaLinkedin } from "react-icons/fa"
import { motion } from "framer-motion"

export default function AuthPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirectTo") || "/"
  const defaultTab = searchParams.get("tab") || "login"
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState(defaultTab)

  // Check if user is signed in
  useEffect(() => {
    const checkUser = async () => {
      const supabase = createSupabaseClient()
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
      setLoading(false)

      // If user is already logged in, redirect to the requested page
      if (data.user) {
        router.push(redirectTo)
      }
    }

    checkUser()
  }, [redirectTo, router])

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
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
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
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Welcome Back</h2>
                <p className="mt-3 text-base text-gray-600">Sign in to access exclusive RTLS Alliance resources</p>
              </motion.div>
            </TabsContent>

            <TabsContent value="signup" className="mt-8">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <h2 className="text-3xl sm:text-4xl font-bold text-gray-900">Join the Alliance</h2>
                <p className="mt-3 text-base text-gray-600">Become part of the leading RTLS community</p>
              </motion.div>
            </TabsContent>
          </Tabs>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 sm:mt-8 sm:mx-auto sm:w-full sm:max-w-md"
        >
          <div className="bg-white py-8 px-6 sm:py-10 sm:px-8 shadow-xl rounded-xl border border-gray-100">
            <Tabs defaultValue={defaultTab} className="w-full">
              <TabsContent value="login">
                <div className="flex flex-col gap-4 sm:gap-5 w-full">
                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-3 w-full py-5 sm:py-7 text-base sm:text-lg font-medium transition-all hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700"
                    asChild
                  >
                    <Link href={`/api/auth/google?redirectTo=${encodeURIComponent(redirectTo)}`}>
                      <FaGoogle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                      <span>Sign in with Google</span>
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-3 w-full py-5 sm:py-7 text-base sm:text-lg font-medium transition-all hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700"
                    asChild
                  >
                    <Link href={`/api/auth/linkedin?redirectTo=${encodeURIComponent(redirectTo)}`}>
                      <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      <span>Sign in with LinkedIn</span>
                    </Link>
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
                    asChild
                  >
                    <Link href={`/api/auth/google?redirectTo=${encodeURIComponent(redirectTo)}`}>
                      <FaGoogle className="h-5 w-5 sm:h-6 sm:w-6 text-red-500" />
                      <span>Sign up with Google</span>
                    </Link>
                  </Button>

                  <Button
                    variant="outline"
                    className="flex items-center justify-center gap-3 w-full py-5 sm:py-7 text-base sm:text-lg font-medium transition-all hover:bg-blue-50 hover:border-blue-200 hover:text-blue-700"
                    asChild
                  >
                    <Link href={`/api/auth/linkedin?redirectTo=${encodeURIComponent(redirectTo)}`}>
                      <FaLinkedin className="h-5 w-5 sm:h-6 sm:w-6 text-blue-600" />
                      <span>Sign up with LinkedIn</span>
                    </Link>
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
        </motion.div>
      </div>
    </div>
  )
}
