"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Plus } from "lucide-react"
import { createProject } from "@/lib/project-actions"

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
          Creating Project...
        </>
      ) : (
        <>
          <Plus className="mr-2 h-4 w-4" />
          Create Project
        </>
      )}
    </Button>
  )
}

interface ProjectFormProps {
  onSuccess?: () => void
}

export default function ProjectForm({ onSuccess }: ProjectFormProps) {
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const handleSubmit = async (formData: FormData) => {
    setError(null)
    setSuccess(null)

    const result = await createProject(formData)

    if (result.error) {
      setError(result.error)
    } else if (result.success) {
      setSuccess("Project created successfully!")
      onSuccess?.()
    }
  }

  return (
    <Card className="w-full max-w-4xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          Create New Project
        </CardTitle>
        <CardDescription>
          Post your RTLS project requirements and receive proposals from qualified vendors
        </CardDescription>
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="title" className="block text-sm font-medium text-gray-700">
                Project Title *
              </label>
              <Input
                id="title"
                name="title"
                type="text"
                placeholder="e.g., Hospital Asset Tracking Implementation"
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="category" className="block text-sm font-medium text-gray-700">
                Industry Category *
              </label>
              <Select name="category" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select category" />
                </SelectTrigger>
                <SelectContent>
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
            </div>

            <div className="space-y-2">
              <label htmlFor="project_type" className="block text-sm font-medium text-gray-700">
                Project Type *
              </label>
              <Select name="project_type" required>
                <SelectTrigger>
                  <SelectValue placeholder="Select project type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="implementation">Full Implementation</SelectItem>
                  <SelectItem value="consultation">Consultation</SelectItem>
                  <SelectItem value="integration">System Integration</SelectItem>
                  <SelectItem value="upgrade">System Upgrade</SelectItem>
                  <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="budget_range" className="block text-sm font-medium text-gray-700">
                Budget Range
              </label>
              <Select name="budget_range">
                <SelectTrigger>
                  <SelectValue placeholder="Select budget range" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="under-50k">Under $50,000</SelectItem>
                  <SelectItem value="50k-100k">$50,000 - $100,000</SelectItem>
                  <SelectItem value="100k-250k">$100,000 - $250,000</SelectItem>
                  <SelectItem value="250k-500k">$250,000 - $500,000</SelectItem>
                  <SelectItem value="500k-1m">$500,000 - $1,000,000</SelectItem>
                  <SelectItem value="over-1m">Over $1,000,000</SelectItem>
                  <SelectItem value="tbd">To Be Determined</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="timeline" className="block text-sm font-medium text-gray-700">
                Expected Timeline
              </label>
              <Select name="timeline">
                <SelectTrigger>
                  <SelectValue placeholder="Select timeline" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="immediate">Immediate (1-2 months)</SelectItem>
                  <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                  <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                  <SelectItem value="long">Long-term (12+ months)</SelectItem>
                  <SelectItem value="flexible">Flexible</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label htmlFor="location" className="block text-sm font-medium text-gray-700">
                Project Location
              </label>
              <Input
                id="location"
                name="location"
                type="text"
                placeholder="e.g., Detroit, MI or Remote"
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="description" className="block text-sm font-medium text-gray-700">
              Project Description *
            </label>
            <Textarea
              id="description"
              name="description"
              placeholder="Provide a detailed description of your project, including objectives, scope, and expected outcomes..."
              required
              className="w-full min-h-[120px]"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="requirements" className="block text-sm font-medium text-gray-700">
              Technical Requirements
            </label>
            <Textarea
              id="requirements"
              name="requirements"
              placeholder="List specific technical requirements, technologies, standards, or constraints..."
              className="w-full min-h-[100px]"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label htmlFor="contact_email" className="block text-sm font-medium text-gray-700">
                Contact Email *
              </label>
              <Input
                id="contact_email"
                name="contact_email"
                type="email"
                placeholder="project@yourcompany.com"
                required
                className="w-full"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="contact_phone" className="block text-sm font-medium text-gray-700">
                Contact Phone
              </label>
              <Input
                id="contact_phone"
                name="contact_phone"
                type="tel"
                placeholder="+1 (555) 123-4567"
                className="w-full"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="bid_deadline" className="block text-sm font-medium text-gray-700">
              Bid Submission Deadline
            </label>
            <Input id="bid_deadline" name="bid_deadline" type="datetime-local" className="w-full" />
          </div>

          <div className="flex justify-end">
            <SubmitButton />
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
