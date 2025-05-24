"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { signUpWithEmail, signInWithEmail } from "@/lib/supabase-auth"
import { useRouter } from "next/navigation"

interface EmailSignupFormProps {
  onBack?: () => void
  redirectTo?: string
  tier?: string
}

export default function EmailSignupForm({ onBack, redirectTo, tier }: EmailSignupFormProps) {
  const router = useRouter()
  const [isSignIn, setIsSignIn] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")
    setSuccessMessage("")

    if (!email || !password) {
      setError("Email and password are required")
      return
    }

    if (!isSignIn && password !== confirmPassword) {
      setError("Passwords do not match")
      return
    }

    setIsLoading(true)

    try {
      if (isSignIn) {
        // Sign in with email
        const { error } = await signInWithEmail(email, password)
        if (error) throw error

        // Redirect after successful sign in
        if (redirectTo) {
          if (tier) {
            router.push(`${redirectTo}?tier=${tier}`)
          } else {
            router.push(redirectTo)
          }
        } else {
          router.push("/")
        }
      } else {
        // Sign up with email
        const { error } = await signUpWithEmail(email, password)
        if (error) throw error

        setSuccessMessage("Check your email for the confirmation link")
      }
    } catch (error: any) {
      console.error("Authentication error:", error)
      setError(error.message || "An error occurred during authentication")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-6">
      <div className="text-center">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          {isSignIn ? "Sign In to Your Account" : "Create Your Account"}
        </h2>
        <p className="text-gray-600">
          {isSignIn ? "Enter your credentials to access your account" : "Fill in your details to create a new account"}
        </p>
      </div>

      {successMessage && <div className="p-4 bg-green-50 text-green-700 rounded-md">{successMessage}</div>}

      {error && <div className="p-4 bg-red-50 text-red-700 rounded-md">{error}</div>}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
        </div>

        <div>
          <Label htmlFor="password">Password</Label>
          <Input
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            required
          />
        </div>

        {!isSignIn && (
          <div>
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <Input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              placeholder="••••••••"
              required
            />
          </div>
        )}

        <Button type="submit" className="w-full" disabled={isLoading}>
          {isLoading ? "Processing..." : isSignIn ? "Sign In" : "Create Account"}
        </Button>
      </form>

      <div className="text-center">
        <button type="button" onClick={() => setIsSignIn(!isSignIn)} className="text-blue-600 hover:underline">
          {isSignIn ? "Don't have an account? Sign Up" : "Already have an account? Sign In"}
        </button>
      </div>

      {onBack && (
        <div className="text-center mt-4">
          <button type="button" onClick={onBack} className="text-gray-600 hover:underline">
            Back to sign in options
          </button>
        </div>
      )}
    </div>
  )
}
