"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Plus, Briefcase, Search, TrendingUp } from "lucide-react"
import ProjectList from "@/components/projects/project-list"
import ProjectForm from "@/components/projects/project-form"

export default function BiddingPortalPage() {
  const [showCreateForm, setShowCreateForm] = useState(false)
  const [activeTab, setActiveTab] = useState("browse")

  const handleCreateSuccess = () => {
    setShowCreateForm(false)
    setActiveTab("browse")
  }

  if (showCreateForm) {
    return (
      <div className="min-h-screen bg-gray-50 py-8">
        <div className="container mx-auto px-4">
          <div className="mb-6">
            <Button variant="outline" onClick={() => setShowCreateForm(false)} className="mb-4">
              ← Back to Portal
            </Button>
          </div>
          <ProjectForm onSuccess={handleCreateSuccess} />
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">RTLS Project Bidding Portal</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Connect with qualified RTLS vendors and solution providers. Post your projects and receive competitive
            proposals from industry experts.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              onClick={() => setShowCreateForm(true)}
              className="bg-white text-blue-600 hover:bg-gray-100"
            >
              <Plus className="mr-2 h-5 w-5" />
              Post a Project
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              onClick={() => setActiveTab("browse")}
            >
              <Search className="mr-2 h-5 w-5" />
              Browse Projects
            </Button>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="bg-white border-b border-gray-200 py-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="flex items-center justify-center gap-3">
              <div className="bg-blue-100 p-3 rounded-full">
                <Briefcase className="h-6 w-6 text-blue-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">500+</div>
                <div className="text-gray-600">Active Projects</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="bg-purple-100 p-3 rounded-full">
                <TrendingUp className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">95%</div>
                <div className="text-gray-600">Success Rate</div>
              </div>
            </div>
            <div className="flex items-center justify-center gap-3">
              <div className="bg-green-100 p-3 rounded-full">
                <Search className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <div className="text-2xl font-bold text-gray-900">1000+</div>
                <div className="text-gray-600">Qualified Vendors</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-2 max-w-md mx-auto">
            <TabsTrigger value="browse">Browse Projects</TabsTrigger>
            <TabsTrigger value="manage">My Projects</TabsTrigger>
          </TabsList>

          <TabsContent value="browse" className="space-y-6">
            <ProjectList showCreateButton={true} onCreateClick={() => setShowCreateForm(true)} />
          </TabsContent>

          <TabsContent value="manage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>My Projects</CardTitle>
                <CardDescription>Manage your posted projects and review submitted bids</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center py-8">
                  <Briefcase className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-gray-900 mb-2">No projects yet</h3>
                  <p className="text-gray-600 mb-4">Start by creating your first project</p>
                  <Button
                    onClick={() => setShowCreateForm(true)}
                    className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                  >
                    <Plus className="mr-2 h-4 w-4" />
                    Create Project
                  </Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
