"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Loader2, Send, DollarSign, Clock, FileText } from "lucide-react"
import { createBid } from "@/lib/bid-actions"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Submitting Bid...
        </>
      ) : (
        <>
          <Send className="mr-2 h-4 w-4" />
          Submit Proposal
        </>
      )}
    </Button>
  )
}

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
  client_organization?: string
  bid_deadline?: string
}

interface BidFormProps {
  project: Project
  onSuccess?: () => void
}

export default function BidForm({ project, onSuccess }: BidFormProps) {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setError(null)
    setSuccess(null)

    // Add project ID to form data
    formData.append("project_id", project.id)

    const result = await createBid(formData)

    if (result.error) {
      setError(result.error)
    } else if (result.success) {
      setSuccess("Your proposal has been submitted successfully!")
      onSuccess?.()
    }
  }

  return (
    <div className="space-y-6">
      {/* Project Summary */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
          <CardDescription>{project.client_organization}</CardDescription>
          <div className="flex flex-wrap gap-2 mt-2">
            <Badge variant="outline">{project.category}</Badge>
            <Badge variant="outline">{project.project_type.replace("_", " ")}</Badge>
          </div>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            {project.budget_range && (
              <div className="flex items-center gap-2">
                <DollarSign className="h-4 w-4 text-gray-500" />
                <span className="capitalize">{project.budget_range.replace("-", " - ").replace("k", "K")}</span>
              </div>
            )}
            {project.timeline && (
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-gray-500" />
                <span className="capitalize">{project.timeline.replace("-", " ")}</span>
              </div>
            )}
            {project.location && (
              <div className="flex items-center gap-2">
                <FileText className="h-4 w-4 text-gray-500" />
                <span>{project.location}</span>
              </div>
            )}
          </div>
          <div>
            <h4 className="font-medium text-gray-900 mb-2">Project Description</h4>
            <p className="text-gray-600 text-sm">{project.description}</p>
          </div>
          {project.requirements && (
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Technical Requirements</h4>
              <p className="text-gray-600 text-sm">{project.requirements}</p>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Bid Form */}
      <Card>
        <CardHeader>
          <CardTitle className="text-xl font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Submit Your Proposal
          </CardTitle>
          <CardDescription>Provide detailed information about your solution and approach</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={handleSubmit} className="space-y-6">
            {error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">{error}</div>
            )}

            {success && (
              <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg text-sm">
                {success}
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="proposal" className="block text-sm font-medium text-gray-700">
                Proposal Overview *
              </label>
              <Textarea
                id="proposal"
                name="proposal"
                placeholder="Provide a comprehensive overview of your proposed solution, including methodology, deliverables, and value proposition..."
                required
                className="w-full min-h-[150px]"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="estimated_cost" className="block text-sm font-medium text-gray-700">
                  Estimated Cost
                </label>
                <Input
                  id="estimated_cost"
                  name="estimated_cost"
                  type="text"
                  placeholder="e.g., $150,000 - $200,000"
                  className="w-full"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="estimated_timeline" className="block text-sm font-medium text-gray-700">
                  Estimated Timeline
                </label>
                <Input
                  id="estimated_timeline"
                  name="estimated_timeline"
                  type="text"
                  placeholder="e.g., 6-8 months"
                  className="w-full"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="approach_summary" className="block text-sm font-medium text-gray-700">
                Technical Approach
              </label>
              <Textarea
                id="approach_summary"
                name="approach_summary"
                placeholder="Describe your technical approach, technologies to be used, implementation phases, and risk mitigation strategies..."
                className="w-full min-h-[120px]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="vendor_experience" className="block text-sm font-medium text-gray-700">
                Relevant Experience
              </label>
              <Textarea
                id="vendor_experience"
                name="vendor_experience"
                placeholder="Highlight your relevant experience, similar projects completed, certifications, and team expertise..."
                className="w-full min-h-[100px]"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="portfolio_links" className="block text-sm font-medium text-gray-700">
                Portfolio Links
              </label>
              <Textarea
                id="portfolio_links"
                name="portfolio_links"
                placeholder="Provide links to case studies, previous work, company website, or relevant documentation (one per line)..."
                className="w-full min-h-[80px]"
              />
              <p className="text-xs text-gray-500">Enter one URL per line</p>
            </div>

            <div className="flex justify-end pt-4 border-t border-gray-200">
              <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
