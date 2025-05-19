"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { createSupabaseClient } from "@/lib/supabase-auth"
import { AlertCircle, CheckCircle, RefreshCw } from "lucide-react"

export default function MembershipDebug() {
  const [profile, setProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [refreshing, setRefreshing] = useState(false)
  const [error, setError] = useState<string | null>(null)

  async function fetchProfile() {
    setLoading(true)
    setError(null)

    try {
      const supabase = createSupabaseClient()

      // Get current user
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        setError("No active session found")
        setLoading(false)
        return
      }

      // Get user profile
      const { data, error } = await supabase.from("profiles").select("*").eq("id", session.user.id).single()

      if (error) {
        setError(`Error fetching profile: ${error.message}`)
        setLoading(false)
        return
      }

      setProfile(data)
    } catch (err: any) {
      setError(`Unexpected error: ${err.message}`)
    } finally {
      setLoading(false)
    }
  }

  async function refreshMembership() {
    setRefreshing(true)
    setError(null)

    try {
      const supabase = createSupabaseClient()

      // Get current user
      const {
        data: { session },
      } = await supabase.auth.getSession()

      if (!session) {
        setError("No active session found")
        setRefreshing(false)
        return
      }

      // Get user profile
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("stripe_customer_id, stripe_subscription_id")
        .eq("id", session.user.id)
        .single()

      if (profileError || !profile) {
        setError(`Error fetching profile: ${profileError?.message || "Profile not found"}`)
        setRefreshing(false)
        return
      }

      if (!profile.stripe_customer_id) {
        setError("No Stripe customer ID found in profile")
        setRefreshing(false)
        return
      }

      // Call API to refresh membership from Stripe
      const response = await fetch("/api/refresh-membership", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: session.user.id,
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        setError(`Failed to refresh membership: ${errorData.error || response.statusText}`)
        setRefreshing(false)
        return
      }

      // Fetch updated profile
      await fetchProfile()
    } catch (err: any) {
      setError(`Unexpected error: ${err.message}`)
    } finally {
      setRefreshing(false)
    }
  }

  useEffect(() => {
    fetchProfile()
  }, [])

  if (loading) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Membership Diagnostics</CardTitle>
          <CardDescription>Loading membership information...</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex justify-center py-4">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
          </div>
        </CardContent>
      </Card>
    )
  }

  if (error) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Membership Diagnostics</CardTitle>
          <CardDescription>There was an error loading your membership information</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-red-50 p-4 rounded-md flex items-start">
            <AlertCircle className="h-5 w-5 text-red-500 mr-2 mt-0.5" />
            <div>
              <p className="text-red-800 font-medium">Error</p>
              <p className="text-red-700 text-sm">{error}</p>
            </div>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={fetchProfile} variant="outline" className="w-full">
            Try Again
          </Button>
        </CardFooter>
      </Card>
    )
  }

  if (!profile) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Membership Diagnostics</CardTitle>
          <CardDescription>No profile information found</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="bg-yellow-50 p-4 rounded-md">
            <p className="text-yellow-800">
              Your profile information could not be found. This may indicate an issue with your account.
            </p>
          </div>
        </CardContent>
        <CardFooter>
          <Button onClick={fetchProfile} variant="outline" className="w-full">
            Refresh
          </Button>
        </CardFooter>
      </Card>
    )
  }

  const membershipStatus = profile.membership_status || "inactive"
  const membershipTier = profile.membership_tier || "public"
  const expiryDate = profile.membership_expiry ? new Date(profile.membership_expiry) : null
  const isExpired = expiryDate && expiryDate < new Date()
  const lastPaymentDate = profile.last_payment_date ? new Date(profile.last_payment_date) : null

  return (
    <Card>
      <CardHeader>
        <CardTitle>Membership Diagnostics</CardTitle>
        <CardDescription>Detailed information about your membership status</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium text-gray-900 mb-2">Membership Status</h3>
            <div className="flex items-center mb-1">
              <span className="font-medium text-gray-700 w-32">Status:</span>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium ${
                  membershipStatus === "active"
                    ? "bg-green-100 text-green-800"
                    : membershipStatus === "expired"
                      ? "bg-red-100 text-red-800"
                      : "bg-gray-100 text-gray-800"
                }`}
              >
                {membershipStatus.charAt(0).toUpperCase() + membershipStatus.slice(1)}
              </span>
            </div>
            <div className="flex items-center mb-1">
              <span className="font-medium text-gray-700 w-32">Tier:</span>
              <span>{membershipTier.charAt(0).toUpperCase() + membershipTier.slice(1)}</span>
            </div>
            <div className="flex items-center mb-1">
              <span className="font-medium text-gray-700 w-32">Expiry Date:</span>
              <span>
                {expiryDate ? `${expiryDate.toLocaleDateString()} ${isExpired ? "(Expired)" : ""}` : "Not set"}
              </span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-gray-700 w-32">Last Payment:</span>
              <span>{lastPaymentDate ? lastPaymentDate.toLocaleDateString() : "Not recorded"}</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium text-gray-900 mb-2">Stripe Information</h3>
            <div className="flex items-center mb-1">
              <span className="font-medium text-gray-700 w-32">Customer ID:</span>
              <span className="text-sm font-mono">{profile.stripe_customer_id || "Not set"}</span>
            </div>
            <div className="flex items-center">
              <span className="font-medium text-gray-700 w-32">Subscription ID:</span>
              <span className="text-sm font-mono">{profile.stripe_subscription_id || "Not set"}</span>
            </div>
          </div>

          <div className="bg-gray-50 p-4 rounded-md">
            <h3 className="font-medium text-gray-900 mb-2">Diagnostics</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                {profile.stripe_customer_id ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                )}
                <span>Stripe Customer ID {profile.stripe_customer_id ? "present" : "missing"}</span>
              </li>
              <li className="flex items-center">
                {profile.stripe_subscription_id ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                )}
                <span>Stripe Subscription ID {profile.stripe_subscription_id ? "present" : "missing"}</span>
              </li>
              <li className="flex items-center">
                {membershipStatus === "active" ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                )}
                <span>Membership status {membershipStatus === "active" ? "active" : "not active"}</span>
              </li>
              <li className="flex items-center">
                {lastPaymentDate ? (
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                )}
                <span>Last payment date {lastPaymentDate ? "recorded" : "missing"}</span>
              </li>
              <li className="flex items-center">
                {expiryDate ? (
                  isExpired ? (
                    <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                  ) : (
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  )
                ) : (
                  <AlertCircle className="h-5 w-5 text-red-500 mr-2" />
                )}
                <span>
                  {expiryDate
                    ? isExpired
                      ? "Membership has expired"
                      : "Membership expiry date valid"
                    : "Expiry date missing"}
                </span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button onClick={fetchProfile} variant="outline">
          Refresh Data
        </Button>
        <Button onClick={refreshMembership} disabled={refreshing}>
          {refreshing ? (
            <>
              <RefreshCw className="h-4 w-4 mr-2 animate-spin" />
              Refreshing...
            </>
          ) : (
            "Sync with Stripe"
          )}
        </Button>
      </CardFooter>
    </Card>
  )
}
