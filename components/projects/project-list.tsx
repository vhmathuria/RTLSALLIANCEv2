"use client"

import { useState, useEffect } from "react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Button } from "@/components/ui/button"
import { Search, Filter, Plus } from "lucide-react"
import ProjectCard from "./project-card"
import { getProjects } from "@/lib/project-actions"

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

const sampleProjects: Project[] = [
  {
    id: "1",
    title: "Smart Manufacturing Floor Optimization",
    description:
      "Implementing comprehensive RTLS solution for tracking production assets, personnel, and workflow optimization across 150,000 sq ft manufacturing facility. Need real-time visibility into equipment utilization, worker safety zones, and material flow.",
    category: "manufacturing",
    project_type: "implementation",
    budget_range: "250k-500k",
    timeline: "medium",
    location: "Grand Rapids, MI",
    created_at: "2024-01-15T10:30:00Z",
    bid_deadline: "2024-02-28T17:00:00Z",
    bid_count: 7,
    view_count: 34,
    status: "open",
    client_organization: "Precision Components Inc",
  },
  {
    id: "2",
    title: "Hospital Asset & Patient Flow Management",
    description:
      "Seeking RTLS deployment for 400-bed medical center to track critical equipment, monitor patient flow, and ensure regulatory compliance. Integration with existing EMR and nurse call systems required.",
    category: "healthcare",
    project_type: "implementation",
    budget_range: "500k-1m",
    timeline: "long",
    location: "Phoenix, AZ",
    created_at: "2024-01-12T14:20:00Z",
    bid_deadline: "2024-03-15T23:59:00Z",
    bid_count: 12,
    view_count: 89,
    status: "open",
    client_organization: "Desert Valley Medical Center",
  },
  {
    id: "3",
    title: "Automotive Assembly Line Digitization",
    description:
      "Digital transformation initiative requiring RTLS for vehicle tracking through assembly process, tool management, and quality control checkpoints. Must integrate with existing MES and support Industry 4.0 standards.",
    category: "automotive",
    project_type: "integration",
    budget_range: "over-1m",
    timeline: "long",
    location: "Detroit, MI",
    created_at: "2024-01-10T09:15:00Z",
    bid_deadline: "2024-04-01T17:00:00Z",
    bid_count: 15,
    view_count: 156,
    status: "open",
    client_organization: "Motor City Assembly",
  },
  {
    id: "4",
    title: "Distribution Center Automation Enhancement",
    description:
      "Upgrading existing warehouse operations with advanced RTLS for inventory tracking, picker optimization, and automated guided vehicle coordination across 500,000 sq ft facility.",
    category: "logistics",
    project_type: "upgrade",
    budget_range: "100k-250k",
    timeline: "short",
    location: "Memphis, TN",
    created_at: "2024-01-08T16:45:00Z",
    bid_deadline: "2024-02-20T17:00:00Z",
    bid_count: 9,
    view_count: 67,
    status: "open",
    client_organization: "Central Logistics Hub",
  },
  {
    id: "5",
    title: "Smart Campus Navigation & Safety",
    description:
      "University-wide RTLS deployment for student/staff navigation, emergency response, and facility utilization analytics. Covers 25 buildings with indoor/outdoor positioning requirements.",
    category: "education",
    project_type: "implementation",
    budget_range: "250k-500k",
    timeline: "medium",
    location: "Austin, TX",
    created_at: "2024-01-05T11:30:00Z",
    bid_deadline: "2024-03-01T17:00:00Z",
    bid_count: 6,
    view_count: 43,
    status: "open",
    client_organization: "State University of Texas",
  },
  {
    id: "6",
    title: "Retail Store Analytics & Loss Prevention",
    description:
      "Multi-location RTLS solution for customer behavior analytics, inventory shrinkage reduction, and staff optimization across 50+ retail locations. Privacy-compliant implementation required.",
    category: "retail",
    project_type: "implementation",
    budget_range: "500k-1m",
    timeline: "long",
    location: "Chicago, IL",
    created_at: "2024-01-03T13:20:00Z",
    bid_deadline: "2024-03-30T17:00:00Z",
    bid_count: 11,
    view_count: 78,
    status: "open",
    client_organization: "Midwest Retail Group",
  },
]

export default function ProjectList({ showCreateButton = false, onCreateClick }: ProjectListProps) {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  useEffect(() => {
    loadProjects()
  }, [])

  const loadProjects = async () => {
    setLoading(true)
    const result = await getProjects()
    if (result.success && result.data && result.data.length > 0) {
      setProjects(result.data)
    } else {
      setProjects(sampleProjects)
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
          <p className="text-gray-600">Try adjusting your search criteria or filters</p>
        </div>
      )}
    </div>
  )
}
