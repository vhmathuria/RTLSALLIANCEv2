"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Calendar, MapPin, DollarSign, Users, Eye, Lock } from "lucide-react"

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
    <Card className="h-full hover:shadow-lg transition-shadow duration-200 relative overflow-hidden">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            <CardTitle className="text-lg font-semibold text-gray-900 line-clamp-2">{project.title}</CardTitle>
            {project.client_organization && (
              <div className="relative mt-1">
                <CardDescription className="text-sm text-gray-600 blur-sm select-none">
                  {project.client_organization}
                </CardDescription>
                <div className="absolute inset-0 flex items-center">
                  <div className="flex items-center gap-1 bg-gray-800 text-white px-2 py-0.5 rounded-md text-xs font-medium shadow-sm">
                    <Lock className="h-3 w-3" />
                    <span>Members Only</span>
                  </div>
                </div>
              </div>
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
        <div className="relative">
          <p className="text-sm text-gray-600 line-clamp-3 blur-sm select-none">{project.description}</p>
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/80 to-white/90 backdrop-blur-sm flex items-center justify-center">
            <div className="bg-white/90 backdrop-blur-md border border-gray-200/50 rounded-lg px-4 py-3 shadow-lg">
              <div className="flex items-center gap-2 text-gray-700">
                <Lock className="h-4 w-4 text-gray-600" />
                <span className="text-sm font-medium">Members Only</span>
              </div>
              <p className="text-xs text-gray-500 mt-1">Join to view full details</p>
            </div>
          </div>
        </div>

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
            <div className="flex items-center gap-1 relative">
              <MapPin className="h-4 w-4" />
              <span className="blur-sm select-none">{project.location}</span>
              <div className="absolute inset-0 flex items-center justify-end">
                <div className="bg-gray-800 text-white px-2 py-0.5 rounded text-xs font-medium shadow-sm flex items-center gap-1">
                  <Lock className="h-2.5 w-2.5" />
                  <span>Members Only</span>
                </div>
              </div>
            </div>
          )}
          <div className="flex items-center gap-1">
            <Users className="h-4 w-4" />
            <span>{project.bid_count} bids</span>
          </div>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-4 text-xs text-gray-500">
            <div className="flex items-center gap-1 blur-sm select-none">
              <Eye className="h-3 w-3" />
              <span>{project.view_count} views</span>
            </div>
            <span>Posted {formatDate(project.created_at)}</span>
          </div>
          {showActions && (
            <div className="relative">
              <Button size="sm" variant="outline" className="blur-sm select-none pointer-events-none bg-transparent">
                View Details
              </Button>
              <div className="absolute inset-0 flex items-center justify-center">
                <Button size="sm" className="bg-gray-800 hover:bg-gray-900 text-white shadow-lg">
                  <Lock className="h-3 w-3 mr-1" />
                  Join to View
                </Button>
              </div>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
