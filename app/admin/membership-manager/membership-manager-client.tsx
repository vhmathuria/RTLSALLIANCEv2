"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { getSupabaseBrowser } from "@/lib/supabase-browser"
import { Search, RefreshCw, AlertTriangle, CheckCircle, XCircle, User } from "lucide-react"

interface Profile {
  id: string
  email: string
  full_name?: string
  membership_tier: string
  membership_status: string
  membership_expiry?: string
  stripe_customer_id?: string
  last_payment_date?: string
  created_at: string
  updated_at: string
}

export default function MembershipManagerClient({ profiles: initialProfiles }: { profiles: Profile[] }) {
  const [profiles, setProfiles] = useState<Profile[]>(initialProfiles)
  const [searchTerm, setSearchTerm] = useState("")
  const [filterTier, setFilterTier] = useState("all")
  const [filterStatus, setFilterStatus] = useState("all")
  const [isLoading, setIsLoading] = useState(false)
  const [message, setMessage] = useState({ type: "", text: "" })

  // Filter profiles based on search and filters
  const filteredProfiles = profiles.filter((profile) => {
    const matchesSearch =
      profile.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.full_name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
      profile.id.includes(searchTerm)

    const matchesTier = filterTier === "all" || profile.membership_tier === filterTier
    const matchesStatus = filterStatus === "all" || profile.membership_status === filterStatus

    return matchesSearch && matchesTier && matchesStatus
  })

  // Refresh profiles data
  const refreshProfiles = async () => {
    setIsLoading(true)
    try {
      const supabase = getSupabaseBrowser()
      const { data, error } = await supabase.from("profiles").select("*").order("created_at", { ascending: false })

      if (error) throw error

      setProfiles(data || [])
      setMessage({ type: "success", text: "Profiles refreshed successfully" })
    } catch (error: any) {
      console.error("Error refreshing profiles:", error)
      setMessage({ type: "error", text: error.message })
    } finally {
      setIsLoading(false)
    }
  }

  // Update membership for a specific user
  const updateMembership = async (userId: string, tier: string, status: string) => {
    setIsLoading(true)
    try {
      const supabase = getSupabaseBrowser()

      const updateData: any = {
        membership_tier: tier,
        membership_status: status,
        updated_at: new Date().toISOString(),
      }

      // If upgrading to a paid tier, set expiry to 1 year from now
      if (tier !== "public" && status === "active") {
        const expiryDate = new Date()
        expiryDate.setFullYear(expiryDate.getFullYear() + 1)
        updateData.membership_expiry = expiryDate.toISOString()
      }

      const { error } = await supabase.from("profiles").update(updateData).eq("id", userId)

      if (error) throw error

      // Update local state
      setProfiles((prev) => prev.map((profile) => (profile.id === userId ? { ...profile, ...updateData } : profile)))

      setMessage({ type: "success", text: "Membership updated successfully" })
    } catch (error: any) {
      console.error("Error updating membership:", error)
      setMessage({ type: "error", text: error.message })
    } finally {
      setIsLoading(false)
    }
  }

  // Fix inactive statuses (set all to active)
  const fixInactiveStatuses = async () => {
    setIsLoading(true)
    try {
      const supabase = getSupabaseBrowser()

      const { error } = await supabase
        .from("profiles")
        .update({
          membership_status: "active",
          updated_at: new Date().toISOString(),
        })
        .neq("membership_status", "active")

      if (error) throw error

      await refreshProfiles()
      setMessage({ type: "success", text: "All inactive statuses fixed" })
    } catch (error: any) {
      console.error("Error fixing statuses:", error)
      setMessage({ type: "error", text: error.message })
    } finally {
      setIsLoading(false)
    }
  }

  // Get status badge
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { color: "bg-green-100 text-green-800", icon: <CheckCircle className="h-3 w-3" /> },
      inactive: { color: "bg-red-100 text-red-800", icon: <XCircle className="h-3 w-3" /> },
      expired: { color: "bg-yellow-100 text-yellow-800", icon: <AlertTriangle className="h-3 w-3" /> },
    }

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.inactive

    return (
      <Badge className={`${config.color} flex items-center gap-1`}>
        {config.icon}
        {status}
      </Badge>
    )
  }

  // Get tier badge
  const getTierBadge = (tier: string) => {
    const tierConfig = {
      public: { color: "bg-gray-100 text-gray-800" },
      student: { color: "bg-blue-100 text-blue-800" },
      professional: { color: "bg-purple-100 text-purple-800" },
      corporate: { color: "bg-green-100 text-green-800" },
    }

    const config = tierConfig[tier as keyof typeof tierConfig] || tierConfig.public

    return <Badge className={config.color}>{tier}</Badge>
  }

  // Statistics
  const stats = {
    total: profiles.length,
    active: profiles.filter((p) => p.membership_status === "active").length,
    inactive: profiles.filter((p) => p.membership_status === "inactive").length,
    expired: profiles.filter((p) => p.membership_status === "expired").length,
    public: profiles.filter((p) => p.membership_tier === "public").length,
    student: profiles.filter((p) => p.membership_tier === "student").length,
    professional: profiles.filter((p) => p.membership_tier === "professional").length,
    corporate: profiles.filter((p) => p.membership_tier === "corporate").length,
  }

  return (
    <div className="space-y-6">
      {message.text && (
        <div
          className={`p-3 rounded ${
            message.type === "success" ? "bg-green-100 text-green-800" : "bg-red-100 text-red-800"
          }`}
        >
          {message.text}
        </div>
      )}

      <Tabs defaultValue="overview">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="profiles">Manage Profiles</TabsTrigger>
          <TabsTrigger value="tools">Admin Tools</TabsTrigger>
        </TabsList>

        <TabsContent value="overview">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Users</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{stats.total}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Active Status</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">{stats.active}</div>
                <p className="text-xs text-gray-500">
                  {stats.inactive} inactive, {stats.expired} expired
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Paid Members</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-purple-600">
                  {stats.student + stats.professional + stats.corporate}
                </div>
                <p className="text-xs text-gray-500">{stats.public} free users</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Issues</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-red-600">{stats.inactive}</div>
                <p className="text-xs text-gray-500">Inactive statuses</p>
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="profiles">
          <Card>
            <CardHeader>
              <CardTitle>User Profiles</CardTitle>
              <CardDescription>Manage user memberships and statuses</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col md:flex-row gap-4 mb-6">
                <div className="flex-1">
                  <Label htmlFor="search">Search</Label>
                  <div className="relative">
                    <Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
                    <Input
                      id="search"
                      placeholder="Search by email, name, or ID..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-8"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="tier-filter">Tier</Label>
                  <Select value={filterTier} onValueChange={setFilterTier}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Tiers</SelectItem>
                      <SelectItem value="public">Public</SelectItem>
                      <SelectItem value="student">Student</SelectItem>
                      <SelectItem value="professional">Professional</SelectItem>
                      <SelectItem value="corporate">Corporate</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="status-filter">Status</Label>
                  <Select value={filterStatus} onValueChange={setFilterStatus}>
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">All Statuses</SelectItem>
                      <SelectItem value="active">Active</SelectItem>
                      <SelectItem value="inactive">Inactive</SelectItem>
                      <SelectItem value="expired">Expired</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end">
                  <Button onClick={refreshProfiles} disabled={isLoading}>
                    <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                    Refresh
                  </Button>
                </div>
              </div>

              <div className="rounded-md border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>User</TableHead>
                      <TableHead>Tier</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Expiry</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {filteredProfiles.map((profile) => (
                      <TableRow key={profile.id}>
                        <TableCell>
                          <div className="flex items-center gap-2">
                            <User className="h-4 w-4 text-gray-400" />
                            <div>
                              <div className="font-medium">{profile.full_name || profile.email}</div>
                              <div className="text-sm text-gray-500">{profile.email}</div>
                            </div>
                          </div>
                        </TableCell>
                        <TableCell>{getTierBadge(profile.membership_tier)}</TableCell>
                        <TableCell>{getStatusBadge(profile.membership_status)}</TableCell>
                        <TableCell>
                          {profile.membership_expiry ? new Date(profile.membership_expiry).toLocaleDateString() : "—"}
                        </TableCell>
                        <TableCell>
                          <div className="flex gap-2">
                            <Select
                              onValueChange={(value) => {
                                const [tier, status] = value.split(":")
                                updateMembership(profile.id, tier, status)
                              }}
                            >
                              <SelectTrigger className="w-32">
                                <SelectValue placeholder="Update" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="public:active">Public Active</SelectItem>
                                <SelectItem value="student:active">Student Active</SelectItem>
                                <SelectItem value="professional:active">Pro Active</SelectItem>
                                <SelectItem value="corporate:active">Corp Active</SelectItem>
                                <SelectItem value={`${profile.membership_tier}:inactive`}>Set Inactive</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="tools">
          <div className="grid gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Quick Fixes</CardTitle>
                <CardDescription>Tools to fix common membership issues</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Fix Inactive Statuses</h4>
                    <p className="text-sm text-gray-500">
                      Set all users with "inactive" status to "active" (fixes new user signup issues)
                    </p>
                  </div>
                  <Button onClick={fixInactiveStatuses} disabled={isLoading}>
                    Fix All ({stats.inactive})
                  </Button>
                </div>

                <div className="flex items-center justify-between p-4 border rounded-lg">
                  <div>
                    <h4 className="font-medium">Refresh All Data</h4>
                    <p className="text-sm text-gray-500">Reload all profile data from the database</p>
                  </div>
                  <Button onClick={refreshProfiles} disabled={isLoading}>
                    <RefreshCw className={`h-4 w-4 mr-2 ${isLoading ? "animate-spin" : ""}`} />
                    Refresh
                  </Button>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Database Status</CardTitle>
                <CardDescription>Current state of the profiles table</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div className="text-center p-4 border rounded">
                    <div className="text-2xl font-bold text-green-600">{stats.active}</div>
                    <div className="text-sm text-gray-500">Active</div>
                  </div>
                  <div className="text-center p-4 border rounded">
                    <div className="text-2xl font-bold text-red-600">{stats.inactive}</div>
                    <div className="text-sm text-gray-500">Inactive</div>
                  </div>
                  <div className="text-center p-4 border rounded">
                    <div className="text-2xl font-bold text-yellow-600">{stats.expired}</div>
                    <div className="text-sm text-gray-500">Expired</div>
                  </div>
                  <div className="text-center p-4 border rounded">
                    <div className="text-2xl font-bold">{stats.total}</div>
                    <div className="text-sm text-gray-500">Total</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}
