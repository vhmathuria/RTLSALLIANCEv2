"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, DollarSign, Clock, Building, ArrowLeft, Send } from "lucide-react"
import Link from "next/link"
import BidForm from "@/components/bids/bid-form"
import VendorAccessGate from "@/components/bids/vendor-access-gate"
import { getProject } from "@/lib/project-actions"
import { checkVendorAccess } from "@/lib/bid-actions"

interface Project {
  id: string
  title: string
  description: string
  requirements?: string
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
  contact_email: string
  contact_phone?: string
}

export default function ProjectDetailPage() {
  const params = useParams()
  const projectId = params.id as string
  const [project, setProject] = useState<Project | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [vendorAccess, setVendorAccess] = useState<any>(null)
  const [showBidForm, setShowBidForm] = useState(false)

  useEffect(() => {
    loadProject()
    checkAccess()
  }, [projectId])

  const loadProject = async () => {
    const result = await getProject(projectId)
    if (result.success) {
      setProject(result.data)
    } else {
      setError(result.error || "Failed to load project")
    }
    setLoading(false)
  }

  const checkAccess = async () => {
    const access = await checkVendorAccess()
    setVendorAccess(access)
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  const getCategoryColor = (category: string) => {
    const colors: Record<string, string> = {
      automotive: "bg-red-100 text-red-800",
      healthcare: "bg-blue-100 text-blue-800",
      manufacturing: "bg-orange-100 text-orange-800",
      government: "bg-purple-100 text-purple-800",
      retail: "bg-pink-100 text-pink-800",
      logistics: "bg-green-100 text-green-800",
      education: "bg-indigo-100 text-indigo-800",
      sports: "bg-yellow-100 text-yellow-800",
    }
    return colors[category] || "bg-gray-100 text-gray-800"
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mx-auto"></div>
          <p className="mt-2 text-gray-600">Loading project...</p>
        </div>
      </div>
    )
  }

  if (error || !project) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <Card className="w-full max-w-md mx-auto">
          <CardContent className="text-center py-8">
            <p className="text-red-600 mb-4">{error || "Project not found"}</p>
            <Link href="/bidding-portal">
              <Button variant="outline">Back to Portal</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    )
  }

  if (vendorAccess && !vendorAccess.hasAccess) {
    return (
      <VendorAccessGate
        userMembershipTier={vendorAccess.membershipTier}
        userMembershipStatus={vendorAccess.membershipStatus}
        hasCorporateDomain={vendorAccess.hasCorporateDomain}
        corporateDomainMessage={vendorAccess.corporateDomainMessage}
      />
    )
  }

  if (showBidForm) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button variant="outline" onClick={() => setShowBidForm(false)} className="mb-4">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Project
            </Button>
          </div>
          <BidForm project={project} onSuccess={() => setShowBidForm(false)} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-6">
          <Link href="/bidding-portal">
            <Button variant="outline" className="mb-4 bg-transparent">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Portal
            </Button>
          </Link>
        </div>

        {/* Project Details */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <Card>
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-2xl font-bold text-gray-900 mb-2">{project.title}</CardTitle>
                    {project.client_organization && (
                      <CardDescription className="text-lg text-gray-600 flex items-center gap-2">
                        <Building className="h-4 w-4" />
                        {project.client_organization}
                      </CardDescription>
                    )}
                  </div>
                  <Badge className="bg-green-100 text-green-800 capitalize">{project.status.replace("_", " ")}</Badge>
                </div>
                <div className="flex flex-wrap gap-2 mt-4">
                  <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                  <Badge variant="outline">{project.project_type.replace("_", " ")}</Badge>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Description</h3>
                  <p className="text-gray-700 leading-relaxed">{project.description}</p>
                </div>

                {project.requirements && (
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Requirements</h3>
                    <p className="text-gray-700 leading-relaxed">{project.requirements}</p>
                  </div>
                )}

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-gray-200">
                  {project.budget_range && (
                    <div className="flex items-center gap-3">
                      <DollarSign className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Budget Range</p>
                        <p className="font-medium capitalize">
                          {project.budget_range.replace("-", " - ").replace("k", "K")}
                        </p>
                      </div>
                    </div>
                  )}
                  {project.timeline && (
                    <div className="flex items-center gap-3">
                      <Clock className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Timeline</p>
                        <p className="font-medium capitalize">{project.timeline.replace("-", " ")}</p>
                      </div>
                    </div>
                  )}
                  {project.location && (
                    <div className="flex items-center gap-3">
                      <MapPin className="h-5 w-5 text-gray-500" />
                      <div>
                        <p className="text-sm text-gray-500">Location</p>
                        <p className="font-medium">{project.location}</p>
                      </div>
                    </div>
                  )}
                  <div className="flex items-center gap-3">
                    <Calendar className="h-5 w-5 text-gray-500" />
                    <div>
                      <p className="text-sm text-gray-500">Posted</p>
                      <p className="font-medium">{formatDate(project.created_at)}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Submit Your Proposal</CardTitle>
                <CardDescription>Join {project.bid_count} other vendors competing for this project</CardDescription>
              </CardHeader>
              <CardContent>
                <Button
                  onClick={() => setShowBidForm(true)}
                  className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  <Send className="mr-2 h-4 w-4" />
                  Submit Bid
                </Button>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg font-semibold">Project Stats</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex justify-between">
                  <span className="text-gray-600">Total Bids</span>
                  <span className="font-medium">{project.bid_count}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Views</span>
                  <span className="font-medium">{project.view_count}</span>
                </div>
                {project.bid_deadline && (
                  <div className="flex justify-between">
                    <span className="text-gray-600">Deadline</span>
                    <span className="font-medium">{formatDate(project.bid_deadline)}</span>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
