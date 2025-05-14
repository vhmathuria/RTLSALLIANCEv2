"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { subscribeToNewsletter } from "@/lib/newsletter-actions"

export default function NewsletterSignup() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [message, setMessage] = useState("")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!email) {
      setStatus("error")
      setMessage("Please enter your email address")
      return
    }

    setStatus("loading")

    try {
      // Add a small delay to improve user experience
      const subscribePromise = subscribeToNewsletter(email)
      const delayPromise = new Promise((resolve) => setTimeout(resolve, 800))

      // Wait for both the subscription and the minimum delay
      const [result] = await Promise.all([subscribePromise, delayPromise])

      if (result.success) {
        setStatus("success")
        setMessage(result.message || "Thank you for subscribing to our newsletter!")
        setEmail("")
      } else {
        setStatus("error")
        setMessage(result.error || "There was an error subscribing. Please try again.")
      }
    } catch (error) {
      console.error("Client-side error subscribing to newsletter:", error)
      setStatus("error")
      setMessage("There was an error subscribing. Please try again.")
    }
  }

  return (
    <div className="max-w-md mx-auto">
      <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
        <Input
          type="email"
          id="email"
          name="email"
          placeholder="Your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="bg-white text-gray-900"
          disabled={status === "loading" || status === "success"}
          aria-label="Email address for newsletter"
          required
        />
        <Button
          type="submit"
          className="bg-white text-blue-600 hover:bg-blue-50"
          disabled={status === "loading" || status === "success"}
        >
          {status === "loading" ? "Subscribing..." : "Subscribe"}
        </Button>
      </form>

      {status === "success" && (
        <p className="mt-3 text-blue-100 font-medium" role="status">
          {message}
        </p>
      )}

      {status === "error" && (
        <p className="mt-3 text-red-300 font-medium" role="alert">
          {message}
        </p>
      )}
    </div>
  )
}
