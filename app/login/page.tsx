"use client"

import { useEffect } from "react"
import { useRouter, useSearchParams } from "next/navigation"

export default function LoginRedirect() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const redirectTo = searchParams.get("redirectTo") || "/"

  useEffect(() => {
    router.replace(`/auth?tab=login&redirectTo=${encodeURIComponent(redirectTo)}`)
  }, [router, redirectTo])

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  )
}
