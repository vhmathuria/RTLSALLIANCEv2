"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { useAuth } from "@/contexts/auth-context"
import { createBrowserClient } from "@/lib/supabase"
import { GraduationCap, Briefcase, Building, User } from "lucide-react"

export default function AccountProfile({ user, profile: initialProfile }: { user: any; profile: any }) {
  const [fullName, setFullName] = useState(initialProfile?.full_name || "")
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: "success" | "error"; text: string } | null>(null)
  const router = useRouter()
  const { signOut, refreshProfile } = useAuth()
  const supabase = createBrowserClient()

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

  // Get membership badge
  const getMembershipBadge = () => {
    const tier = initialProfile?.membership_tier || "public"

    const tierConfig = {
      public: {
        label: "Public",
        icon: <User className="h-4 w-4 mr-1" />,
        color: "bg-gray-100 text-gray-800",
      },
      student: {
        label: "Student",
        icon: <GraduationCap className="h-4 w-4 mr-1" />,
        color: "bg-blue-100 text-blue-800",
      },
      professional: {
        label: "Professional",
        icon: <Briefcase className="h-4 w-4 mr-1" />,
        color: "bg-purple-100 text-purple-800",
      },
      corporate: {
        label: "Corporate",
        icon: <Building className="h-4 w-4 mr-1" />,
        color: "bg-green-100 text-green-800",
      },
    }

    const config = tierConfig[tier.toLowerCase() as keyof typeof tierConfig] || tierConfig.public

    return (
      <Badge className={`${config.color} flex items-center`}>
        {config.icon}
        {config.label} Membership
      </Badge>
    )
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
    <Tabs defaultValue="profile">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="profile">Profile</TabsTrigger>
        <TabsTrigger value="membership">Membership</TabsTrigger>
      </TabsList>

      <TabsContent value="profile" className="p-0">
        <Card>
          <CardHeader>
            <CardTitle>Profile Information</CardTitle>
            <CardDescription>Manage your personal information and profile settings</CardDescription>
          </CardHeader>

          <CardContent>
            {message && (
              <div
                className={`mb-4 p-3 rounded ${
                  message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {message.text}
              </div>
            )}

            <form onSubmit={handleUpdateProfile} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input id="email" type="email" value={user.email} disabled />
                <p className="text-sm text-gray-500">Your email cannot be changed</p>
              </div>

              <div className="space-y-2">
                <Label htmlFor="full-name">Full Name</Label>
                <Input id="full-name" value={fullName} onChange={(e) => setFullName(e.target.value)} />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-sm font-medium">Membership:</span>
                {getMembershipBadge()}
              </div>
            </form>
          </CardContent>

          <CardFooter>
            <Button onClick={handleUpdateProfile} disabled={loading}>
              {loading ? "Saving..." : "Save Changes"}
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>

      <TabsContent value="membership">
        <Card>
          <CardHeader>
            <CardTitle>Membership Details</CardTitle>
            <CardDescription>View and manage your RTLS Alliance membership</CardDescription>
          </CardHeader>

          <CardContent>
            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <div className="mr-4">{getMembershipBadge()}</div>
                  <div>
                    <h3 className="text-lg font-semibold">
                      {initialProfile?.membership_tier === "public"
                        ? "Free Account"
                        : `${formatMembershipTier(initialProfile?.membership_tier)} Membership`}
                    </h3>
                    <p className="text-gray-500">
                      {initialProfile?.membership_status === "active" ? "Active" : "Inactive"}
                    </p>
                  </div>
                </div>
              </div>

              {initialProfile?.membership_expiry && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Membership Expiry</h4>
                  <p className="text-gray-700">{formatDate(initialProfile.membership_expiry)}</p>
                </div>
              )}

              {initialProfile?.membership_tier === "public" ? (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Upgrade Your Membership</h4>
                  <p className="text-blue-700 mb-4">
                    Upgrade to a paid membership to access premium content and features.
                  </p>
                  <Button onClick={handleUpgradeMembership}>View Membership Options</Button>
                </div>
              ) : (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Active Membership</h4>
                  <p className="text-green-700 mb-4">Thank you for being a valued member of the RTLS Alliance.</p>
                </div>
              )}
            </div>
          </CardContent>

          <CardFooter>
            <Button variant="destructive" onClick={handleSignOut}>
              Sign Out
            </Button>
          </CardFooter>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
