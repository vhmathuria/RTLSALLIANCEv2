"use client"

import { useState } from "react"
import Image from "next/image"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { useAuth } from "@/contexts/auth-context"

export default function AccountClient({ initialProfile, user }: any) {
  const { signOut } = useAuth()
  const router = useRouter()
  const [profile, setProfile] = useState(initialProfile)
  const [loading, setLoading] = useState(false)

  const handleManageSubscription = async () => {
    setLoading(true)
    try {
      const response = await fetch("/api/create-portal-session", {
        method: "POST",
      })

      if (!response.ok) {
        throw new Error("Failed to create portal session")
      }

      const { url } = await response.json()
      router.push(url)
    } catch (error) {
      console.error("Error creating portal session:", error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Your Account</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-1">
            <Card>
              <CardHeader>
                <CardTitle>Profile</CardTitle>
                <CardDescription>Your personal information</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center">
                  {user.user_metadata?.avatar_url && (
                    <div className="mb-4">
                      <Image
                        src={user.user_metadata.avatar_url || "/placeholder.svg"}
                        alt={user.user_metadata.full_name || "Profile"}
                        width={80}
                        height={80}
                        className="rounded-full"
                      />
                    </div>
                  )}
                  <h3 className="text-lg font-medium">
                    {user.user_metadata?.full_name || user.user_metadata?.name || user.email}
                  </h3>
                  <p className="text-gray-500">{user.email}</p>

                  <div className="mt-6 w-full">
                    <Button variant="outline" className="w-full" onClick={() => signOut()}>
                      Sign Out
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="md:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Membership</CardTitle>
                <CardDescription>Your current membership details</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Current Plan</h3>
                    <p className="text-lg font-medium capitalize">{profile?.membership_tier || "Free"}</p>
                  </div>

                  <div>
                    <h3 className="text-sm font-medium text-gray-500">Status</h3>
                    <p className="text-lg font-medium capitalize">{profile?.membership_status || "Active"}</p>
                  </div>

                  {profile?.membership_expiry && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500">Expiry Date</h3>
                      <p className="text-lg font-medium">{new Date(profile.membership_expiry).toLocaleDateString()}</p>
                    </div>
                  )}

                  <div className="pt-4">
                    <Button onClick={handleManageSubscription} disabled={loading} className="w-full md:w-auto">
                      {loading ? "Loading..." : "Manage Subscription"}
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>

            <pre className="mt-8 p-4 bg-gray-100 rounded-lg overflow-auto text-xs">
              {JSON.stringify({ user, profile }, null, 2)}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
