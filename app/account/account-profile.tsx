"use client"

import type React from "react"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { getSupabaseBrowser } from "@/lib/supabase-browser"
import { GraduationCap, Briefcase, Building, User, MapPin, BookOpen, GroupIcon as CompanyIcon } from "lucide-react"

export default function AccountProfile({ user, profile }: { user: any; profile: any }) {
  // DEBUG: Log the exact profile data received from server
  console.log("PROFILE DATA RECEIVED:", {
    id: profile?.id,
    email: profile?.email,
    membership_tier: profile?.membership_tier,
    membership_status: profile?.membership_status,
    membership_status_type: typeof profile?.membership_status,
  })

  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    full_name: profile?.full_name || "",
    bio: profile?.bio || "",
    company: profile?.company || "",
    education: profile?.education || "",
    location: profile?.location || "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  // FIXED: Normalize status to lowercase and default to "active" if it's a new profile
  // This ensures we don't show "inactive" for new users who should be active
  const [membershipDetails, setMembershipDetails] = useState({
    tier: profile?.membership_tier || "public",
    status: profile?.membership_status ? profile.membership_status.toLowerCase() : profile?.id ? "inactive" : "active", // Default to active for new profiles
    expiry: profile?.membership_expiry || null,
  })

  // DEBUG: Log the initial state
  console.log("INITIAL STATE:", membershipDetails)

  // Add 3-second refresh interval (faster than before)
  const [refreshTimestamp, setRefreshTimestamp] = useState(Date.now())

  useEffect(() => {
    const interval = setInterval(() => {
      setRefreshTimestamp(Date.now())
      console.log("REFRESH TRIGGERED at", new Date().toISOString())
    }, 3000) // 3 seconds for faster refresh
    return () => clearInterval(interval)
  }, [])

  // Fetch latest membership details with retry logic
  const fetchMembershipDetails = async (retryCount = 0) => {
    try {
      console.log("FETCHING MEMBERSHIP DETAILS, attempt:", retryCount + 1)
      const supabase = getSupabaseBrowser()

      // Refresh session before fetching
      try {
        await supabase.auth.refreshSession()
        console.log("SESSION REFRESHED successfully")
      } catch (sessionError) {
        console.error("SESSION REFRESH FAILED:", sessionError)
        // Continue anyway - we might still be able to fetch data
      }

      // FIXED: Added logging for the query
      console.log("QUERYING profiles table for user ID:", user.id)
      const { data, error } = await supabase
        .from("profiles")
        .select("membership_tier, membership_status, membership_expiry")
        .eq("id", user.id)
        .single()

      if (error) {
        console.error(`ERROR FETCHING MEMBERSHIP DETAILS (attempt ${retryCount + 1}):`, error)
        throw error
      }

      if (data) {
        // FIXED: Added detailed logging of the raw data
        console.log("RAW DATA FROM DATABASE:", data)

        // Normalize status to lowercase for consistency
        // FIXED: Added fallback to "active" for null/undefined status
        const status = data.membership_status ? data.membership_status.toLowerCase() : "active" // Default to active if null/undefined

        console.log("NORMALIZED STATUS:", status)

        setMembershipDetails({
          tier: data.membership_tier || "public",
          status: status,
          expiry: data.membership_expiry,
        })

        console.log("MEMBERSHIP DETAILS UPDATED:", {
          tier: data.membership_tier || "public",
          status: status,
          expiry: data.membership_expiry,
        })
      } else {
        console.log("NO DATA RETURNED from query")
      }
    } catch (error) {
      console.error(`ERROR IN fetchMembershipDetails (attempt ${retryCount + 1}):`, error)

      // Retry twice as requested
      if (retryCount < 2) {
        console.log(`RETRYING membership details fetch in 1 second (attempt ${retryCount + 1}/3)...`)
        setTimeout(() => fetchMembershipDetails(retryCount + 1), 1000)
      } else {
        console.error("FAILED TO FETCH membership details after 3 attempts:", error)
        // Fall back to profile prop values
        if (profile) {
          // FIXED: Added fallback to "active" for null/undefined status
          const status = profile.membership_status ? profile.membership_status.toLowerCase() : "active" // Default to active if null/undefined

          console.log("FALLING BACK to profile props with status:", status)

          setMembershipDetails({
            tier: profile.membership_tier || "public",
            status: status,
            expiry: profile.membership_expiry,
          })
        }
      }
    }
  }

  useEffect(() => {
    if (user?.id) {
      console.log("EFFECT TRIGGERED: Fetching membership details")
      fetchMembershipDetails()

      // Add real-time subscription for profile changes
      const supabase = getSupabaseBrowser()

      console.log("SETTING UP real-time subscription for user:", user.id)
      const subscription = supabase
        .channel("profile-changes")
        .on(
          "postgres_changes",
          {
            event: "UPDATE",
            schema: "public",
            table: "profiles",
            filter: `id=eq.${user.id}`,
          },
          (payload) => {
            console.log("REAL-TIME UPDATE received:", payload)
            if (payload.new) {
              const newData = payload.new as any
              // FIXED: Added fallback to "active" for null/undefined status
              const status = newData.membership_status ? newData.membership_status.toLowerCase() : "active" // Default to active if null/undefined

              console.log("REAL-TIME STATUS:", status)

              setMembershipDetails({
                tier: newData.membership_tier || "public",
                status: status,
                expiry: newData.membership_expiry,
              })
            }
          },
        )
        .subscribe()

      return () => {
        console.log("CLEANING UP real-time subscription")
        supabase.removeChannel(subscription)
      }
    }
  }, [user?.id, refreshTimestamp])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: "", text: "" })

    try {
      const supabase = getSupabaseBrowser()
      const { error } = await supabase.from("profiles").update(formData).eq("id", user.id)

      if (error) throw error

      setMessage({ type: "success", text: "Profile updated successfully!" })
      setIsEditing(false)
    } catch (error: any) {
      console.error("Error updating profile:", error)
      setMessage({ type: "error", text: error.message || "Failed to update profile" })
    } finally {
      setIsLoading(false)
    }
  }

  // Helper function to get membership tier badge
  const getMembershipBadge = () => {
    const tier = membershipDetails.tier || "public"

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

  // Format membership tier for display
  const formatMembershipTier = (tier: string) => {
    if (!tier) return "Public"
    return tier.charAt(0).toUpperCase() + tier.slice(1)
  }

  // DEBUG: Log current state before rendering
  console.log("CURRENT STATE BEFORE RENDER:", membershipDetails)

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
            {message.text && (
              <div
                className={`mb-4 p-3 rounded ${
                  message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
                }`}
              >
                {message.text}
              </div>
            )}

            {isEditing ? (
              <form onSubmit={handleSubmit}>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="full_name">Full Name</Label>
                    <Input
                      id="full_name"
                      name="full_name"
                      value={formData.full_name}
                      onChange={handleChange}
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <Label htmlFor="bio">Bio</Label>
                    <Textarea
                      id="bio"
                      name="bio"
                      value={formData.bio}
                      onChange={handleChange}
                      placeholder="Tell us about yourself"
                      rows={4}
                    />
                  </div>

                  <div>
                    <Label htmlFor="company">Company</Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Your company or organization"
                    />
                  </div>

                  <div>
                    <Label htmlFor="education">Education</Label>
                    <Input
                      id="education"
                      name="education"
                      value={formData.education}
                      onChange={handleChange}
                      placeholder="Your educational background"
                    />
                  </div>

                  <div>
                    <Label htmlFor="location">Location</Label>
                    <Input
                      id="location"
                      name="location"
                      value={formData.location}
                      onChange={handleChange}
                      placeholder="Your location"
                    />
                  </div>
                </div>
              </form>
            ) : (
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="h-20 w-20 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 overflow-hidden">
                    {profile?.profile_image ? (
                      <Image
                        src={profile.profile_image || "/placeholder.svg"}
                        alt={profile.full_name || "Profile"}
                        width={80}
                        height={80}
                        className="object-cover"
                      />
                    ) : (
                      <User className="h-10 w-10" />
                    )}
                  </div>
                  <div className="ml-4">
                    <h3 className="text-xl font-semibold">{profile?.full_name || user.email}</h3>
                    <p className="text-gray-500">{user.email}</p>
                    {getMembershipBadge()}
                  </div>
                </div>

                {profile?.bio && (
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 mb-1">Bio</h4>
                    <p className="text-gray-700">{profile.bio}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {profile?.company && (
                    <div className="flex items-center">
                      <CompanyIcon className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Company</h4>
                        <p className="text-gray-700">{profile.company}</p>
                      </div>
                    </div>
                  )}

                  {profile?.education && (
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Education</h4>
                        <p className="text-gray-700">{profile.education}</p>
                      </div>
                    </div>
                  )}

                  {profile?.location && (
                    <div className="flex items-center">
                      <MapPin className="h-5 w-5 text-gray-400 mr-2" />
                      <div>
                        <h4 className="text-sm font-medium text-gray-500">Location</h4>
                        <p className="text-gray-700">{profile.location}</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </CardContent>

          <CardFooter className="flex justify-end">
            {isEditing ? (
              <div className="flex gap-2">
                <Button variant="outline" onClick={() => setIsEditing(false)} disabled={isLoading}>
                  Cancel
                </Button>
                <Button onClick={handleSubmit} disabled={isLoading}>
                  {isLoading ? "Saving..." : "Save Changes"}
                </Button>
              </div>
            ) : (
              <Button onClick={() => setIsEditing(true)}>Edit Profile</Button>
            )}
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
              <div className="flex items-center">
                <div className="mr-4">{getMembershipBadge()}</div>
                <div>
                  <h3 className="text-lg font-semibold">
                    {membershipDetails.tier === "public"
                      ? "Free Account"
                      : `${formatMembershipTier(membershipDetails.tier)} Membership`}
                  </h3>
                  {/* FIXED: Added debug info to help troubleshoot */}
                  <p className="text-gray-500">
                    {membershipDetails.status === "active" ? "Active" : "Inactive"}
                    <span className="text-xs text-gray-400 ml-2">(Status: {membershipDetails.status})</span>
                  </p>
                </div>
              </div>

              {membershipDetails.expiry && (
                <div>
                  <h4 className="text-sm font-medium text-gray-500 mb-1">Membership Expiry</h4>
                  <p className="text-gray-700">{new Date(membershipDetails.expiry).toLocaleDateString()}</p>
                </div>
              )}

              {membershipDetails.tier === "public" ? (
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h4 className="font-medium text-blue-800 mb-2">Upgrade Your Membership</h4>
                  <p className="text-blue-700 mb-4">
                    Upgrade to a paid membership to access premium content and features.
                  </p>
                  <Button asChild>
                    <a href="/membership/upgrade">View Membership Options</a>
                  </Button>
                </div>
              ) : (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Active Membership</h4>
                  <p className="text-green-700 mb-4">Thank you for being a valued member of the RTLS Alliance.</p>
                  <Button variant="outline" asChild>
                    <a href="/membership/manage">Manage Subscription</a>
                  </Button>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
