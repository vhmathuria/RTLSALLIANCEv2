"use client"

import { useState, useEffect } from "react"
import { createSupabaseClient } from "@/lib/supabase-auth"
import { useRouter, useSearchParams } from "next/navigation"

export default function JoinAllianceClientPage() {
  const [showEmailForm, setShowEmailForm] = useState(false)
  const [user, setUser] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirectTo") || "/"

  // Check if user is signed in
  useEffect(() => {
    const checkUser = async () => {
      const supabase = createSupabaseClient()
      const { data } = await supabase.auth.getUser()
      setUser(data.user)
      setLoading(false)
    }

    checkUser()
  }, [])

  useEffect(() => {
    if (!loading && !user) {
      router.replace(`/auth?tab=signup&redirectTo=${encodeURIComponent(redirectTo)}`)
    }
  }, [router, redirectTo, loading, user])

  if (!loading && !user) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    )
  }

  return (
    <main className="bg-white pb-16">
      <section className="py-12 text-center">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Join the RTLS Alliance
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            You're one click away from joining the community of RTLS leaders.
          </p>
        </div>
      </section>
    </main>
  )
}
