"use client"

import { useState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, Plus, Building2, MapPin, Clock, DollarSign, Zap } from "lucide-react"
import { createProject } from "@/lib/project-actions"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      size="lg"
      className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-5 w-5 animate-spin" />
          Creating Your Project...
        </>
      ) : (
        <>
          <Plus className="mr-2 h-5 w-5" />
          Launch Project & Start Receiving Bids
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
  const [selectedTechnologies, setSelectedTechnologies] = useState<string[]>([])

  const handleSubmit = async (formData: FormData) => {
    setError(null)
    setSuccess(null)

    // Add selected technologies to form data
    formData.append("technologies", selectedTechnologies.join(","))

    const result = await createProject(formData)

    if (result.error) {
      setError(result.error)
    } else if (result.success) {
      setSuccess("Project created successfully!")
      onSuccess?.()
    }
  }

  const toggleTechnology = (tech: string) => {
    setSelectedTechnologies((prev) => (prev.includes(tech) ? prev.filter((t) => t !== tech) : [...prev, tech]))
  }

  const rtlsTechnologies = [
    "BLE/Bluetooth",
    "UWB",
    "WiFi",
    "RFID",
    "NFC",
    "LoRa/LoRaWAN",
    "Infrared",
    "LiDAR",
    "AI Cameras",
    "GNSS/GPS",
    "RTK GPS",
    "Magnetic Field",
    "Ultrasound",
    "Sensor Fusion",
    "SLAM",
    "Dead Reckoning",
  ]

  const useCases = [
    "Asset Tracking",
    "Personnel Tracking",
    "Vehicle Tracking",
    "Inventory Management",
    "Workflow Optimization",
    "Safety & Security",
    "Navigation & Wayfinding",
    "Environmental Monitoring",
    "Quality Control",
    "Compliance & Audit",
  ]

  return (
    <div className="max-w-5xl mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
          Create Your RTLS Project
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Tell us about your Real-Time Location System needs and connect with qualified vendors who can deliver the
          perfect solution
        </p>
      </div>

      <form action={handleSubmit} className="space-y-8">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-6 py-4 rounded-xl text-sm font-medium">
            {error}
          </div>
        )}

        {success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-6 py-4 rounded-xl text-sm font-medium">
            {success}
          </div>
        )}

        {/* Project Overview Section */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 rounded-lg">
                <Building2 className="h-5 w-5 text-blue-600" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-900">Project Overview</CardTitle>
                <CardDescription>Basic information about your RTLS project</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="title" className="block text-sm font-semibold text-gray-700">
                  Project Title *
                </label>
                <Input
                  id="title"
                  name="title"
                  type="text"
                  placeholder="e.g., Smart Hospital Asset Tracking System"
                  required
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="organization" className="block text-sm font-semibold text-gray-700">
                  Organization Name *
                </label>
                <Input
                  id="organization"
                  name="organization"
                  type="text"
                  placeholder="e.g., Metro General Hospital"
                  required
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="category" className="block text-sm font-semibold text-gray-700">
                  Industry Sector *
                </label>
                <Select name="category" required>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Select your industry" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="healthcare">Healthcare & Medical</SelectItem>
                    <SelectItem value="manufacturing">Manufacturing & Industrial</SelectItem>
                    <SelectItem value="automotive">Automotive & Transportation</SelectItem>
                    <SelectItem value="logistics">Logistics & Warehousing</SelectItem>
                    <SelectItem value="retail">Retail & Consumer</SelectItem>
                    <SelectItem value="government">Government & Public Sector</SelectItem>
                    <SelectItem value="education">Education & Research</SelectItem>
                    <SelectItem value="sports">Sports & Entertainment</SelectItem>
                    <SelectItem value="construction">Construction & Real Estate</SelectItem>
                    <SelectItem value="agriculture">Agriculture & Farming</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="project_type" className="block text-sm font-semibold text-gray-700">
                  Project Scope *
                </label>
                <Select name="project_type" required>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="What type of engagement?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="implementation">Complete System Implementation</SelectItem>
                    <SelectItem value="consultation">Consultation & Planning</SelectItem>
                    <SelectItem value="integration">System Integration & Upgrade</SelectItem>
                    <SelectItem value="pilot">Pilot Program & Testing</SelectItem>
                    <SelectItem value="maintenance">Maintenance & Support</SelectItem>
                    <SelectItem value="training">Training & Education</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="description" className="block text-sm font-semibold text-gray-700">
                Project Description *
              </label>
              <Textarea
                id="description"
                name="description"
                placeholder="Describe your project goals, current challenges, and what success looks like. Include any specific requirements or constraints..."
                required
                className="min-h-[120px] text-base"
              />
            </div>
          </CardContent>
        </Card>

        {/* Technical Requirements Section */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 rounded-lg">
                <Zap className="h-5 w-5 text-purple-600" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-900">Technical Requirements</CardTitle>
                <CardDescription>Specify the technologies and capabilities you need</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-3">
              <label className="block text-sm font-semibold text-gray-700">
                RTLS Technologies (Select all that apply)
              </label>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {rtlsTechnologies.map((tech) => (
                  <div
                    key={tech}
                    onClick={() => toggleTechnology(tech)}
                    className={`p-3 rounded-lg border-2 cursor-pointer transition-all ${
                      selectedTechnologies.includes(tech)
                        ? "border-blue-500 bg-blue-50 text-blue-700"
                        : "border-gray-200 hover:border-gray-300 bg-white"
                    }`}
                  >
                    <div className="text-sm font-medium text-center">{tech}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="use_case" className="block text-sm font-semibold text-gray-700">
                Primary Use Case *
              </label>
              <Select name="use_case" required>
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="What will you primarily track?" />
                </SelectTrigger>
                <SelectContent>
                  {useCases.map((useCase) => (
                    <SelectItem key={useCase} value={useCase.toLowerCase().replace(/\s+/g, "_")}>
                      {useCase}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="accuracy_requirement" className="block text-sm font-semibold text-gray-700">
                  Required Accuracy
                </label>
                <Select name="accuracy_requirement">
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="How precise do you need it?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="room_level">Room Level (3-5 meters)</SelectItem>
                    <SelectItem value="zone_level">Zone Level (1-3 meters)</SelectItem>
                    <SelectItem value="sub_meter">Sub-meter (0.3-1 meter)</SelectItem>
                    <SelectItem value="centimeter">Centimeter Level (&lt; 30 cm)</SelectItem>
                    <SelectItem value="not_sure">Not Sure - Need Guidance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="coverage_area" className="block text-sm font-semibold text-gray-700">
                  Coverage Area Size
                </label>
                <Select name="coverage_area">
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="How large is the area?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="small">Small (&lt; 1,000 sq ft)</SelectItem>
                    <SelectItem value="medium">Medium (1,000 - 10,000 sq ft)</SelectItem>
                    <SelectItem value="large">Large (10,000 - 100,000 sq ft)</SelectItem>
                    <SelectItem value="very_large">Very Large (&gt; 100,000 sq ft)</SelectItem>
                    <SelectItem value="multiple_sites">Multiple Sites/Buildings</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="requirements" className="block text-sm font-semibold text-gray-700">
                Additional Technical Requirements
              </label>
              <Textarea
                id="requirements"
                name="requirements"
                placeholder="Specify integration requirements, data formats, reporting needs, compliance standards, environmental conditions, etc..."
                className="min-h-[100px] text-base"
              />
            </div>
          </CardContent>
        </Card>

        {/* Facility & Environment Section */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 rounded-lg">
                <MapPin className="h-5 w-5 text-green-600" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-900">Facility & Environment</CardTitle>
                <CardDescription>Details about your physical environment</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="location" className="block text-sm font-semibold text-gray-700">
                  Project Location *
                </label>
                <Input
                  id="location"
                  name="location"
                  type="text"
                  placeholder="e.g., Detroit, MI, USA"
                  required
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="environment_type" className="block text-sm font-semibold text-gray-700">
                  Environment Type
                </label>
                <Select name="environment_type">
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Describe your environment" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="indoor_office">Indoor Office/Corporate</SelectItem>
                    <SelectItem value="indoor_industrial">Indoor Industrial/Manufacturing</SelectItem>
                    <SelectItem value="indoor_healthcare">Indoor Healthcare/Hospital</SelectItem>
                    <SelectItem value="indoor_retail">Indoor Retail/Warehouse</SelectItem>
                    <SelectItem value="outdoor">Outdoor/Open Area</SelectItem>
                    <SelectItem value="mixed">Mixed Indoor/Outdoor</SelectItem>
                    <SelectItem value="harsh">Harsh/Extreme Conditions</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="infrastructure" className="block text-sm font-semibold text-gray-700">
                Existing Infrastructure
              </label>
              <Textarea
                id="infrastructure"
                name="infrastructure"
                placeholder="Describe existing WiFi, network infrastructure, power availability, mounting options, IT systems, etc..."
                className="min-h-[80px] text-base"
              />
            </div>
          </CardContent>
        </Card>

        {/* Project Specifics Section */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-orange-100 rounded-lg">
                <Clock className="h-5 w-5 text-orange-600" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-900">Project Specifics</CardTitle>
                <CardDescription>Timeline, budget, and delivery requirements</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label htmlFor="timeline" className="block text-sm font-semibold text-gray-700">
                  Project Timeline *
                </label>
                <Select name="timeline" required>
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="When do you need this?" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgent (&lt; 1 month)</SelectItem>
                    <SelectItem value="immediate">Immediate (1-3 months)</SelectItem>
                    <SelectItem value="short">Short-term (3-6 months)</SelectItem>
                    <SelectItem value="medium">Medium-term (6-12 months)</SelectItem>
                    <SelectItem value="long">Long-term (12+ months)</SelectItem>
                    <SelectItem value="flexible">Flexible Timeline</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="budget_range" className="block text-sm font-semibold text-gray-700">
                  Budget Range
                </label>
                <Select name="budget_range">
                  <SelectTrigger className="h-12 text-base">
                    <SelectValue placeholder="Investment level" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="under_25k">Under $25,000</SelectItem>
                    <SelectItem value="25k_50k">$25,000 - $50,000</SelectItem>
                    <SelectItem value="50k_100k">$50,000 - $100,000</SelectItem>
                    <SelectItem value="100k_250k">$100,000 - $250,000</SelectItem>
                    <SelectItem value="250k_500k">$250,000 - $500,000</SelectItem>
                    <SelectItem value="500k_1m">$500,000 - $1,000,000</SelectItem>
                    <SelectItem value="over_1m">Over $1,000,000</SelectItem>
                    <SelectItem value="tbd">To Be Determined</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="bid_deadline" className="block text-sm font-semibold text-gray-700">
                  Bid Deadline
                </label>
                <Input id="bid_deadline" name="bid_deadline" type="datetime-local" className="h-12 text-base" />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="success_criteria" className="block text-sm font-semibold text-gray-700">
                Success Criteria & KPIs
              </label>
              <Textarea
                id="success_criteria"
                name="success_criteria"
                placeholder="How will you measure project success? Include ROI expectations, performance metrics, user adoption goals, etc..."
                className="min-h-[80px] text-base"
              />
            </div>
          </CardContent>
        </Card>

        {/* Contact Information Section */}
        <Card className="shadow-lg border-0 bg-gradient-to-br from-white to-gray-50">
          <CardHeader className="pb-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-indigo-100 rounded-lg">
                <DollarSign className="h-5 w-5 text-indigo-600" />
              </div>
              <div>
                <CardTitle className="text-xl text-gray-900">Contact Information</CardTitle>
                <CardDescription>How vendors can reach you</CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="contact_name" className="block text-sm font-semibold text-gray-700">
                  Contact Name *
                </label>
                <Input
                  id="contact_name"
                  name="contact_name"
                  type="text"
                  placeholder="Your full name"
                  required
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact_title" className="block text-sm font-semibold text-gray-700">
                  Job Title
                </label>
                <Input
                  id="contact_title"
                  name="contact_title"
                  type="text"
                  placeholder="e.g., IT Director, Operations Manager"
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact_email" className="block text-sm font-semibold text-gray-700">
                  Email Address *
                </label>
                <Input
                  id="contact_email"
                  name="contact_email"
                  type="email"
                  placeholder="your.email@company.com"
                  required
                  className="h-12 text-base"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contact_phone" className="block text-sm font-semibold text-gray-700">
                  Phone Number
                </label>
                <Input
                  id="contact_phone"
                  name="contact_phone"
                  type="tel"
                  placeholder="+1 (555) 123-4567"
                  className="h-12 text-base"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="preferred_contact" className="block text-sm font-semibold text-gray-700">
                Preferred Communication Method
              </label>
              <Select name="preferred_contact">
                <SelectTrigger className="h-12 text-base">
                  <SelectValue placeholder="How should vendors contact you?" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="email">Email</SelectItem>
                  <SelectItem value="phone">Phone Call</SelectItem>
                  <SelectItem value="both">Email and Phone</SelectItem>
                  <SelectItem value="portal">Through Portal Only</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <div className="pt-4">
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}
