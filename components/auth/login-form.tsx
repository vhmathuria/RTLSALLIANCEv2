"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { createBrowserSupabaseClient } from "@/lib/supabase-client"
import { FaGoogle, FaLinkedin } from "react-icons/fa"

export default function LoginForm({ redirectTo = "/account" }: { redirectTo?: string }) {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [activeTab, setActiveTab] = useState("login")

  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    try {
      console.log(`[Login Form] Attempting email login for: ${email}`)
      const supabase = createBrowserSupabaseClient()
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      console.log(`[Login Form] Login successful, redirecting to: ${redirectTo}`)
      router.push(redirectTo)
      router.refresh()
    } catch (error: any) {
      console.error("[Login Form] Login error:", error)
      setError(error.message || "Failed to log in")
    } finally {
      setIsLoading(false)
    }
  }

  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setIsLoading(false)
      return
    }

    try {
      console.log(`[Login Form] Attempting email signup for: ${email}`)
      const supabase = createBrowserSupabaseClient()
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo: `${window.location.origin}/auth/callback?returnTo=/account`,
        },
      })

      if (error) throw error

      console.log(`[Login Form] Signup successful, showing confirmation`)
      router.push("/auth?tab=check-email")
    } catch (error: any) {
      console.error("[Login Form] Signup error:", error)
      setError(error.message || "Failed to sign up")
    } finally {
      setIsLoading(false)
    }
  }

  const handleProviderLogin = async (provider: "google" | "linkedin") => {
    setIsLoading(true)
    setError(null)

    try {
      console.log(`[Login Form] Attempting ${provider} login`)
      const supabase = createBrowserSupabaseClient()

      const { data, error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback?returnTo=${encodeURIComponent(redirectTo || "/account")}`,
        },
      })

      if (error) throw error

      console.log(`[Login Form] ${provider} auth initiated`)
      // The redirect is handled by the provider
    } catch (error: any) {
      console.error(`[Login Form] ${provider} login error:`, error)
      setError(error.message || `Failed to log in with ${provider}`)
      setIsLoading(false)
    }
  }

  return (
    <Card className="w-full">
      <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="register">Register</TabsTrigger>
        </TabsList>

        <TabsContent value="login">
          <CardHeader>
            <CardTitle>Login to your account</CardTitle>
            <CardDescription>Enter your email and password to access your account</CardDescription>
          </CardHeader>
          <CardContent>
            {error && <div className="bg-red-100 text-red-800 p-3 rounded-md mb-4">{error}</div>}

            <form onSubmit={handleEmailLogin} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <Label htmlFor="password">Password</Label>
                  <Link href="/auth/reset-password" className="text-sm text-blue-600 hover:underline">
                    Forgot password?
                  </Link>
                </div>
                <Input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Logging in..." : "Login"}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleProviderLogin("google")}
                disabled={isLoading}
                className="flex items-center justify-center"
              >
                <FaGoogle className="mr-2" />
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleProviderLogin("linkedin")}
                disabled={isLoading}
                className="flex items-center justify-center"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </Button>
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="register">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Enter your details to create a new account</CardDescription>
          </CardHeader>
          <CardContent>
            {error && <div className="bg-red-100 text-red-800 p-3 rounded-md mb-4">{error}</div>}

            <form onSubmit={handleEmailSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="register-email">Email</Label>
                <Input
                  id="register-email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="register-password">Password</Label>
                <Input
                  id="register-password"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </div>
              <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Creating account..." : "Create account"}
              </Button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Button
                type="button"
                variant="outline"
                onClick={() => handleProviderLogin("google")}
                disabled={isLoading}
                className="flex items-center justify-center"
              >
                <FaGoogle className="mr-2" />
                Google
              </Button>
              <Button
                type="button"
                variant="outline"
                onClick={() => handleProviderLogin("linkedin")}
                disabled={isLoading}
                className="flex items-center justify-center"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </Button>
            </div>
          </CardContent>
        </TabsContent>
      </Tabs>

      <CardFooter className="flex justify-center">
        <p className="text-sm text-gray-500">
          {activeTab === "login" ? "Don't have an account? " : "Already have an account? "}
          <button
            type="button"
            onClick={() => setActiveTab(activeTab === "login" ? "register" : "login")}
            className="text-blue-600 hover:underline"
          >
            {activeTab === "login" ? "Register" : "Login"}
          </button>
        </p>
      </CardFooter>
    </Card>
  )
}
