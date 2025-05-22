"use client"

import { useEffect, useState } from "react"
import { createBrowserSupabaseClient } from "@/lib/supabase-client"

export default function AuthDebug() {
  const [user, setUser] = useState<any>(null)
  const [session, setSession] = useState<any>(null)
  const [cookies, setCookies] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function checkAuth() {
      const supabase = createBrowserSupabaseClient()

      // Get user
      const { data: userData } = await supabase.auth.getUser()
      setUser(userData.user)

      // Get session
      const { data: sessionData } = await supabase.auth.getSession()
      setSession(sessionData.session)

      // Get cookies
      setCookies(document.cookie.split(";").map((c) => c.trim()))

      setLoading(false)
    }

    checkAuth()
  }, [])

  if (loading) {
    return <div>Loading auth debug info...</div>
  }

  return (
    <div className="bg-gray-100 p-4 rounded-lg my-4 text-sm">
      <h2 className="font-bold mb-2">Auth Debug Info</h2>

      <div className="mb-2">
        <strong>User Authenticated:</strong> {user ? "Yes" : "No"}
        {user && (
          <div className="ml-4">
            <div>ID: {user.id}</div>
            <div>Email: {user.email}</div>
          </div>
        )}
      </div>

      <div className="mb-2">
        <strong>Session Exists:</strong> {session ? "Yes" : "No"}
        {session && (
          <div className="ml-4">
            <div>Expires: {new Date(session.expires_at * 1000).toLocaleString()}</div>
          </div>
        )}
      </div>

      <div>
        <strong>Auth Cookies:</strong>
        <ul className="ml-4">
          {cookies
            .filter((c) => c.includes("supabase"))
            .map((cookie, i) => (
              <li key={i}>{cookie}</li>
            ))}
          {cookies.filter((c) => c.includes("supabase")).length === 0 && <li>No Supabase cookies found</li>}
        </ul>
      </div>
    </div>
  )
}
