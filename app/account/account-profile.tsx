"use client"

import type React from "react"
import Link from "next/link"
import { useState, useEffect } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { createSupabaseClient } from "@/lib/supabase-auth"
import { GraduationCap, Briefcase, Building, User, MapPin, BookOpen, CommandIcon as CompanyIcon } from "lucide-react"

export default function AccountProfile({ user, profile }: { user: any; profile: any }) {
  console.log("Profile data:", profile)
  console.log("Membership details:", {
    tier: profile?.membership_tier,
    status: profile?.membership_status,
    expiry: profile?.membership_expiry,
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
  const [membershipDetails, setMembershipDetails] = useState({
    tier: profile?.membership_tier || "public",
    status: profile?.membership_status || "inactive",
    expiry: profile?.membership_expiry || null,
  })

  // Fetch latest membership details on component mount
  useEffect(() => {
    const fetchMembershipDetails = async () => {
      try {
        const supabase = createSupabaseClient()
        const { data, error } = await supabase
          .from("profiles")
          .select("membership_tier, membership_status, membership_expiry")
          .eq("id", user.id)
          .single()

        if (error) throw error

        if (data) {
          setMembershipDetails({
            tier: data.membership_tier || "public",
            status: data.membership_status || "inactive",
            expiry: data.membership_expiry,
          })
        }
      } catch (error) {
        console.error("Error fetching membership details:", error)
      }
    }

    fetchMembershipDetails()
  }, [user.id])

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setMessage({ type: "", text: "" })

    try {
      const supabase = createSupabaseClient()
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

    const config = tierConfig[tier as keyof typeof tierConfig] || tierConfig.public

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
                  <p className="text-gray-500">{membershipDetails.status === "active" ? "Active" : "Inactive"}</p>
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
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button asChild>
                      <Link href="/membership/upgrade">Upgrade Membership</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/membership">View All Plans</Link>
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-medium text-green-800 mb-2">Active Membership</h4>
                  <p className="text-green-700 mb-4">Thank you for being a valued member of the RTLS Alliance.</p>
                  <div className="flex flex-col sm:flex-row gap-2">
                    <Button variant="outline" asChild>
                      <Link href="/membership/manage">Manage Subscription</Link>
                    </Button>
                    <Button variant="outline" asChild>
                      <Link href="/membership/upgrade">Change Plan</Link>
                    </Button>
                  </div>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  )
}
