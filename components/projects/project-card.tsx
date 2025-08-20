"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, DollarSign, Users, Eye } from "lucide-react"
import Link from "next/link"

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

interface ProjectCardProps {
  project: Project
  showActions?: boolean
}

export default function ProjectCard({ project, showActions = true }: ProjectCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "open":
        return "bg-green-100 text-green-800"
      case "in_review":
        return "bg-yellow-100 text-yellow-800"
      case "awarded":
        return "bg-blue-100 text-blue-800"
      case "closed":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
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

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">{project.title}</CardTitle>
            {project.client_organization && (
              <CardDescription className="text-sm text-gray-600 mt-1">{project.client_organization}</CardDescription>
            )}
          </div>
          <Badge className={`ml-2 ${getStatusColor(project.status)} capitalize`}>
            {project.status.replace("_", " ")}
          </Badge>
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          <Badge variant="outline" className={getCategoryColor(project.category)}>
            {project.category}
          </Badge>
          <Badge variant="outline">{project.project_type.replace("_", " ")}</Badge>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-3">{project.description}</p>

        <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
          {project.budget_range && (
            <div className="flex items-center gap-1">
              <DollarSign className="h-4 w-4" />
              <span className="capitalize">{project.budget_range.replace("-", " - ").replace("k", "K")}</span>
            </div>
          )}
          {project.timeline && (
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              <span className="capitalize">{project.timeline.replace("-", " ")}</span>
            </div>
          )}
          {project.location && (
            <div className="flex items-center gap-1">
              <MapPin className="h-4 w-4" />
              <span>{project.location}</span>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{project.bid_count} bids</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1">
              <Eye className="h-3 w-3" />
              <span>{project.view_count} views</span>
            </div>
            <span>Posted {formatDate(project.created_at)}</span>
          </div>
          {showActions && (
            <Link href={`/bidding-portal/projects/${project.id}`}>
              <Button size="sm" variant="outline">
                View Details
              </Button>
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
