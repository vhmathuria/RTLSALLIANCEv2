"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"
import { supabase } from "@/lib/supabase"
import { FaGoogle, FaLinkedin } from "react-icons/fa"

export default function LoginForm({ redirectTo = "/" }: { redirectTo?: string }) {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState("login")
  const router = useRouter()
  const { signIn, signUp } = useAuth()

  // Handle email login
  const handleEmailLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    try {
      const { error } = await signIn(email, password)

      if (error) {
        setError(error.message)
        return
      }

      // Redirect after successful login
      router.push(redirectTo)
    } catch (err: any) {
      setError(err.message || "An error occurred during login")
    } finally {
      setLoading(false)
    }
  }

  // Handle email signup
  const handleEmailSignup = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)

    // Check if passwords match
    if (password !== confirmPassword) {
      setError("Passwords do not match")
      setLoading(false)
      return
    }

    try {
      const { error } = await signUp(email, password)

      if (error) {
        setError(error.message)
        return
      }

      // Show success message
      router.push("/signup-success")
    } catch (err: any) {
      setError(err.message || "An error occurred during signup")
    } finally {
      setLoading(false)
    }
  }

  // Handle social login
  const handleSocialLogin = async (provider: "google" | "linkedin") => {
    setLoading(true)
    setError(null)

    try {
      const { error } = await supabase.auth.signInWithOAuth({
        provider,
        options: {
          redirectTo: `${window.location.origin}/auth/callback?redirectTo=${encodeURIComponent(redirectTo)}`,
        },
      })

      if (error) {
        setError(error.message)
      }
    } catch (err: any) {
      setError(err.message || `An error occurred during ${provider} login`)
    } finally {
      setLoading(false)
    }
  }

  return (
    <Card>
      <Tabs defaultValue="login" value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="login">Login</TabsTrigger>
          <TabsTrigger value="signup">Sign Up</TabsTrigger>
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
                  <Link href="/reset-password" className="text-sm text-blue-600 hover:underline">
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

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Logging in..." : "Login"}
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
                onClick={() => handleSocialLogin("google")}
                disabled={loading}
                className="flex items-center justify-center"
              >
                <FaGoogle className="mr-2" />
                Google
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin("linkedin")}
                disabled={loading}
                className="flex items-center justify-center"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </Button>
            </div>
          </CardContent>
        </TabsContent>

        <TabsContent value="signup">
          <CardHeader>
            <CardTitle>Create an account</CardTitle>
            <CardDescription>Enter your details to create a new account</CardDescription>
          </CardHeader>

          <CardContent>
            {error && <div className="bg-red-100 text-red-800 p-3 rounded-md mb-4">{error}</div>}

            <form onSubmit={handleEmailSignup} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input
                  id="signup-email"
                  type="email"
                  placeholder="your.email@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input
                  id="signup-password"
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

              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Creating account..." : "Create account"}
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
                onClick={() => handleSocialLogin("google")}
                disabled={loading}
                className="flex items-center justify-center"
              >
                <FaGoogle className="mr-2" />
                Google
              </Button>

              <Button
                type="button"
                variant="outline"
                onClick={() => handleSocialLogin("linkedin")}
                disabled={loading}
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
            onClick={() => setActiveTab(activeTab === "login" ? "signup" : "login")}
            className="text-blue-600 hover:underline"
          >
            {activeTab === "login" ? "Sign up" : "Login"}
          </button>
        </p>
      </CardFooter>
    </Card>
  )
}
