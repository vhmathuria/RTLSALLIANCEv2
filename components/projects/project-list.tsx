"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Search, Filter, Plus, Lock, Crown, Mail } from "lucide-react"
import Link from "next/link"
import ProjectCard from "./project-card"
import { getProjects, checkProjectAccess } from "@/lib/project-actions"

interface Project {
  id: string
  title: string
  description: string
  category: string
  project_type: string
  budget_range?: string
  timeline?: string
  location?: string
  created_at: string
  bid_deadline?: string
  bid_count: number
  view_count: number
  status: string
  client_organization?: string
}

interface ProjectListProps {
  showCreateButton?: boolean
  onCreateClick?: () => void
}

export default function ProjectList({ showCreateButton = false, onCreateClick }: ProjectListProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")
  const [accessInfo, setAccessInfo] = useState<any>(null)

  useEffect(() => {
    loadProjectsAndAccess()
  }, [])

  const loadProjectsAndAccess = async () => {
    setLoading(true)

    // Check access first
    const access = await checkProjectAccess()
    setAccessInfo(access)

    // Load projects
    const result = await getProjects()
    if (result.success && result.data) {
      setProjects(result.data)
    } else {
      setProjects([])
    }

    setLoading(false)
  }

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || project.category === categoryFilter
    const matchesStatus = statusFilter === "all" || project.status === statusFilter
    return matchesSearch && matchesCategory && matchesStatus
  })

  if (loading) {
    return (
      <div className="flex items-center justify-center py-12">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading projects...</p>
        </div>
      </div>
    )
  }

  if (accessInfo && !accessInfo.hasAccess) {
    return (
      <div className="max-w-2xl mx-auto p-6">
        <Card className="border-blue-200 bg-blue-50">
          <CardHeader className="text-center">
            <div className="mx-auto w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Lock className="h-6 w-6 text-blue-600" />
            </div>
            <CardTitle className="text-xl text-blue-900">Corporate Membership Required</CardTitle>
            <CardDescription className="text-blue-700">
              Access to bid requests is restricted to Corporate members with verified business email addresses.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Corporate Domain Requirement */}
            <div
              className={`flex items-start gap-3 p-4 rounded-lg ${
                accessInfo.hasCorporateDomain
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <Mail className={`h-5 w-5 mt-0.5 ${accessInfo.hasCorporateDomain ? "text-green-600" : "text-red-600"}`} />
              <div className="flex-1">
                <h3 className={`font-semibold ${accessInfo.hasCorporateDomain ? "text-green-900" : "text-red-900"}`}>
                  Corporate Email Domain {accessInfo.hasCorporateDomain ? "✓" : "✗"}
                </h3>
                <p className={`text-sm mt-1 ${accessInfo.hasCorporateDomain ? "text-green-700" : "text-red-700"}`}>
                  {accessInfo.hasCorporateDomain
                    ? "Your email domain is verified as a corporate domain."
                    : "You must use a corporate email address to view bid requests."}
                </p>
              </div>
            </div>

            {/* Corporate Membership Requirement */}
            <div
              className={`flex items-start gap-3 p-4 rounded-lg ${
                accessInfo.membershipTier === "corporate" && accessInfo.membershipStatus === "active"
                  ? "bg-green-50 border border-green-200"
                  : "bg-red-50 border border-red-200"
              }`}
            >
              <Crown
                className={`h-5 w-5 mt-0.5 ${
                  accessInfo.membershipTier === "corporate" && accessInfo.membershipStatus === "active"
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              />
              <div className="flex-1">
                <h3
                  className={`font-semibold ${
                    accessInfo.membershipTier === "corporate" && accessInfo.membershipStatus === "active"
                      ? "text-green-900"
                      : "text-red-900"
                  }`}
                >
                  Active Corporate Membership{" "}
                  {accessInfo.membershipTier === "corporate" && accessInfo.membershipStatus === "active" ? "✓" : "✗"}
                </h3>
                <p
                  className={`text-sm mt-1 ${
                    accessInfo.membershipTier === "corporate" && accessInfo.membershipStatus === "active"
                      ? "text-green-700"
                      : "text-red-700"
                  }`}
                >
                  {accessInfo.membershipTier === "corporate" && accessInfo.membershipStatus === "active"
                    ? "You have an active Corporate membership."
                    : "You need an active Corporate membership to view bid requests."}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 pt-4">
              {accessInfo.membershipTier !== "corporate" || accessInfo.membershipStatus !== "active" ? (
                <Link href="/membership" className="flex-1">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Crown className="mr-2 h-4 w-4" />
                    Upgrade to Corporate
                  </Button>
                </Link>
              ) : null}

              {!accessInfo.hasCorporateDomain && (
                <Link href="/account" className="flex-1">
                  <Button variant="outline" className="w-full bg-transparent">
                    <Mail className="mr-2 h-4 w-4" />
                    Update Email Address
                  </Button>
                </Link>
              )}
            </div>

            <div className="text-center pt-4 border-t border-blue-200">
              <p className="text-sm text-blue-700">
                Need help?{" "}
                <Link href="/contact" className="underline hover:no-underline">
                  Contact our support team
                </Link>
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Available Projects</h2>
          <p className="text-gray-600">Browse and bid on RTLS projects from organizations worldwide</p>
        </div>
        {showCreateButton && (
          <Button
            onClick={onCreateClick}
            className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
          >
            <Plus className="mr-2 h-4 w-4" />
            Create Project
          </Button>
        )}
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <Input
            placeholder="Search projects..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
        </div>
        <Select value={categoryFilter} onValueChange={setCategoryFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="automotive">Automotive</SelectItem>
            <SelectItem value="healthcare">Healthcare</SelectItem>
            <SelectItem value="manufacturing">Manufacturing</SelectItem>
            <SelectItem value="government">Government</SelectItem>
            <SelectItem value="retail">Retail</SelectItem>
            <SelectItem value="logistics">Logistics</SelectItem>
            <SelectItem value="education">Education</SelectItem>
            <SelectItem value="sports">Sports & Entertainment</SelectItem>
          </SelectContent>
        </Select>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-48">
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="open">Open</SelectItem>
            <SelectItem value="in_review">In Review</SelectItem>
            <SelectItem value="awarded">Awarded</SelectItem>
            <SelectItem value="closed">Closed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Results */}
      <div className="text-sm text-gray-600">
        Showing {filteredProjects.length} of {projects.length} projects
      </div>

      {/* Project Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <div className="text-gray-400 mb-4">
            <Filter className="h-12 w-12 mx-auto" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">No projects found</h3>
          <p className="text-gray-600">
            {projects.length === 0
              ? "No projects are currently available for bidding."
              : "Try adjusting your search criteria or filters"}
          </p>
        </div>
      )}
    </div>
  )
}
