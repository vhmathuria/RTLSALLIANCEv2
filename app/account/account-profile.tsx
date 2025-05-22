"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useAuth } from "@/contexts/auth-context"
import { supabase } from "@/lib/supabase"

export default function AccountProfile({ user, profile }: { user: any; profile: any }) {
  const [fullName, setFullName] = useState(profile.full_name || "")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const router = useRouter()
  const { signOut, refreshProfile } = useAuth()

  // Format membership tier for display
  const formatMembershipTier = (tier: string) => {
    if (!tier) return "Public"
    return tier.charAt(0).toUpperCase() + tier.slice(1)
  }

  // Format date for display
  const formatDate = (dateString: string) => {
    if (!dateString) return "N/A"
    return new Date(dateString).toLocaleDateString()
  }

  // Handle profile update
  const handleUpdateProfile = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const { error } = await supabase
        .from("profiles")
        .update({
          full_name: fullName,
          updated_at: new Date().toISOString(),
        })
        .eq("id", user.id)

      if (error) {
        throw error
      }

      // Refresh profile data
      await refreshProfile()

      setMessage({
        type: "success",
        text: "Profile updated successfully",
      })
    } catch (error: any) {
      setMessage({
        type: "error",
        text: error.message || "An error occurred while updating your profile",
      })
    } finally {
      setLoading(false)
    }
  }

  // Handle sign out
  const handleSignOut = async () => {
    await signOut()
  }

  // Handle upgrade membership
  const handleUpgradeMembership = () => {
    router.push("/membership/upgrade")
  }

  return (
    <div className="space-y-8">
      {/* Profile Information */}
      <Card>
        <CardHeader>
          <CardTitle>Profile Information</CardTitle>
          <CardDescription>Update your personal information</CardDescription>
        </CardHeader>

        <form onSubmit={handleUpdateProfile}>
          <CardContent className="space-y-4">
            {message && (
              <div
                className={`p-3 rounded-md ${
                  message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {message.text}
              </div>
            )}

            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" type="email" value={user.email} disabled />
              <p className="text-sm text-gray-500">Your email cannot be changed</p>
            </div>

            <div className="space-y-2">
              <Label htmlFor="full-name">Full Name</Label>
              <Input id="full-name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
            </div>
          </CardContent>

          <CardFooter>
            <Button type="submit" disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </form>
      </Card>

      {/* Membership Information */}
      <Card>
        <CardHeader>
          <CardTitle>Membership Information</CardTitle>
          <CardDescription>Your current membership details</CardDescription>
        </CardHeader>

        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h3 className="text-sm font-medium text-gray-500">Current Tier</h3>
              <p className="mt-1 text-lg font-semibold">{formatMembershipTier(profile.membership_tier)}</p>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-500">Status</h3>
              <p className="mt-1 text-lg font-semibold capitalize">{profile.membership_status || "Active"}</p>
            </div>

            {profile.membership_expiry && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Expiry Date</h3>
                <p className="mt-1 text-lg font-semibold">{formatDate(profile.membership_expiry)}</p>
              </div>
            )}

            {profile.last_payment_date && (
              <div>
                <h3 className="text-sm font-medium text-gray-500">Last Payment</h3>
                <p className="mt-1 text-lg font-semibold">{formatDate(profile.last_payment_date)}</p>
              </div>
            )}
          </div>
        </CardContent>

        <CardFooter>
          <Button onClick={handleUpgradeMembership}>Upgrade Membership</Button>
        </CardFooter>
      </Card>

      {/* Account Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Account Actions</CardTitle>
          <CardDescription>Manage your account</CardDescription>
        </CardHeader>

        <CardContent>
          <Button variant="destructive" onClick={handleSignOut}>
            Sign Out
          </Button>
        </CardContent>
      </Card>
    </div>
  )
}
