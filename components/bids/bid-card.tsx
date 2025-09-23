"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { DollarSign, Clock, ExternalLink, Star } from "lucide-react"

interface Bid {
  id: string
  proposal: string
  estimated_cost?: string
  estimated_timeline?: string
  approach_summary?: string
  vendor_experience?: string
  portfolio_links?: string[]
  status: string
  created_at: string
  vendor_organization?: string
  client_rating?: number
  is_shortlisted: boolean
  vendor_id: string
}

interface BidCardProps {
  bid: Bid
  showVendorInfo?: boolean
  showProjectInfo?: boolean
  projectTitle?: string
}

export default function BidCard({ bid, showVendorInfo = true, showProjectInfo = false, projectTitle }: BidCardProps) {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    })
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "submitted":
        return "bg-blue-100 text-blue-800"
      case "under_review":
        return "bg-yellow-100 text-yellow-800"
      case "accepted":
        return "bg-green-100 text-green-800"
      case "rejected":
        return "bg-red-100 text-red-800"
      case "withdrawn":
        return "bg-gray-100 text-gray-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-200">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex-1">
            {showProjectInfo && projectTitle && (
              <CardTitle className="text-lg font-semibold text-gray-900 mb-1">{projectTitle}</CardTitle>
            )}
            {showVendorInfo && bid.vendor_organization && (
              <CardTitle className="text-lg font-semibold text-gray-900">{bid.vendor_organization}</CardTitle>
            )}
            <CardDescription className="text-sm text-gray-600 mt-1">
              Submitted {formatDate(bid.created_at)}
            </CardDescription>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Badge className={`${getStatusColor(bid.status)} capitalize`}>{bid.status.replace("_", " ")}</Badge>
            {bid.is_shortlisted && (
              <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
                <Star className="h-3 w-3 mr-1" />
                Shortlisted
              </Badge>
            )}
          </div>
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <p className="text-sm text-gray-600 line-clamp-3">{bid.proposal}</p>

        {(bid.estimated_cost || bid.estimated_timeline) && (
          <div className="grid grid-cols-2 gap-4 text-sm text-gray-500">
            {bid.estimated_cost && (
              <div className="flex items-center gap-1">
                <DollarSign className="h-4 w-4" />
                <span>{bid.estimated_cost}</span>
              </div>
            )}
            {bid.estimated_timeline && (
              <div className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                <span>{bid.estimated_timeline}</span>
              </div>
            )}
          </div>
        )}

        {bid.approach_summary && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-1">Technical Approach</h4>
            <p className="text-sm text-gray-600 line-clamp-2">{bid.approach_summary}</p>
          </div>
        )}

        {bid.vendor_experience && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-1">Experience</h4>
            <p className="text-sm text-gray-600 line-clamp-2">{bid.vendor_experience}</p>
          </div>
        )}

        {bid.portfolio_links && bid.portfolio_links.length > 0 && (
          <div>
            <h4 className="text-sm font-medium text-gray-900 mb-2">Portfolio</h4>
            <div className="space-y-1">
              {bid.portfolio_links.slice(0, 2).map((link, index) => (
                <a
                  key={index}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sm text-blue-600 hover:text-blue-700"
                >
                  <ExternalLink className="h-3 w-3" />
                  <span className="truncate">{link}</span>
                </a>
              ))}
              {bid.portfolio_links.length > 2 && (
                <p className="text-xs text-gray-500">+{bid.portfolio_links.length - 2} more links</p>
              )}
            </div>
          </div>
        )}

        {bid.client_rating && (
          <div className="flex items-center gap-1 pt-2 border-t border-gray-100">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-4 w-4 ${i < bid.client_rating! ? "text-yellow-400 fill-current" : "text-gray-300"}`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">Client Rating</span>
          </div>
        )}

        <div className="flex justify-end pt-2 border-t border-gray-100">
          <Button size="sm" variant="outline">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
