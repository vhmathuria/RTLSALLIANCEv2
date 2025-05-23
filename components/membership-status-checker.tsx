"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { getSupabaseBrowser } from "@/lib/supabase-browser"
import { RefreshCw, CheckCircle, XCircle, AlertTriangle } from "lucide-react"

export default function MembershipStatusChecker() {
  const [status, setStatus] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [lastChecked, setLastChecked] = useState<Date | null>(null)

  const checkStatus = async () => {
    setIsLoading(true)
    try {
      const supabase = getSupabaseBrowser()

      // Get current user
      const {
        data: { user },
      } = await supabase.auth.getUser()

      if (!user) {
        setStatus({ error: "Not logged in" })
        return
      }

      // Get profile data
      const { data: profile, error } = await supabase.from("profiles").select("*").eq("id", user.id).single()

      if (error) {
        setStatus({ error: error.message })
        return
      }

      setStatus({
        user_id: user.id,
        email: user.email,
        profile_exists: !!profile,
        membership_tier: profile?.membership_tier || "unknown",
        membership_status: profile?.membership_status || "unknown",
        membership_expiry: profile?.membership_expiry,
        stripe_customer_id: profile?.stripe_customer_id,
        last_payment_date: profile?.last_payment_date,
        created_at: profile?.created_at,
        updated_at: profile?.updated_at,
      })

      setLastChecked(new Date())
    } catch (error: any) {
      setStatus({ error: error.message })
    } finally {
      setIsLoading(false)
    }
  }

  const fixStatus = async () => {
    if (!status?.user_id) return

    setIsLoading(true)
    try {
      const response = await fetch("/api/fix-membership-status", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId: status.user_id }),
      })

      const result = await response.json()

      if (result.success) {
        // Refresh status after fix
        await checkStatus()
      } else {
        console.error("Fix failed:", result.error)
      }
    } catch (error) {
      console.error("Error fixing status:", error)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    checkStatus()
  }, [])

  const getStatusIcon = (statusValue: string) => {
    switch (statusValue) {
      case "active":
        return <CheckCircle className="h-4 w-4 text-green-600" />
      case "inactive":
        return <XCircle className="h-4 w-4 text-red-600" />
      case "expired":
        return <AlertTriangle className="h-4 w-4 text-yellow-600" />
      default:
        return <XCircle className="h-4 w-4 text-gray-600" />
    }
  }

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          Membership Status Checker
          <Button variant="outline" size="sm" onClick={checkStatus} disabled={isLoading}>
            <RefreshCw className={`h-4 w-4 ${isLoading ? "animate-spin" : ""}`} />
          </Button>
        </CardTitle>
        <CardDescription>
          Check your current membership status and fix any issues
          {lastChecked && <span className="block text-xs mt-1">Last checked: {lastChecked.toLocaleTimeString()}</span>}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {status?.error ? (
          <div className="text-red-600">Error: {status.error}</div>
        ) : status ? (
          <div className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-gray-500">Email</label>
                <div>{status.email}</div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">User ID</label>
                <div className="font-mono text-xs">{status.user_id}</div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Membership Tier</label>
                <div>
                  <Badge variant="outline">{status.membership_tier}</Badge>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-500">Status</label>
                <div className="flex items-center gap-2">
                  {getStatusIcon(status.membership_status)}
                  <Badge variant={status.membership_status === "active" ? "default" : "destructive"}>
                    {status.membership_status}
                  </Badge>
                </div>
              </div>
            </div>

            {status.membership_status !== "active" && (
              <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                <div className="flex items-center gap-2 mb-2">
                  <AlertTriangle className="h-4 w-4 text-yellow-600" />
                  <span className="font-medium text-yellow-800">Status Issue Detected</span>
                </div>
                <p className="text-yellow-700 text-sm mb-3">
                  Your membership status is "{status.membership_status}" but should be "active".
                </p>
                <Button onClick={fixStatus} disabled={isLoading} size="sm">
                  Fix Status
                </Button>
              </div>
            )}

            {status.membership_expiry && (
              <div>
                <label className="text-sm font-medium text-gray-500">Expiry Date</label>
                <div>{new Date(status.membership_expiry).toLocaleDateString()}</div>
              </div>
            )}
          </div>
        ) : (
          <div>Loading...</div>
        )}
      </CardContent>
    </Card>
  )
}
