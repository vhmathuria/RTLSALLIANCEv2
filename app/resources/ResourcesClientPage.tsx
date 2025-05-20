"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Search } from "lucide-react"
import Link from "next/link"

// Define resource types
type Resource = {
  id: string
  title: string
  description: string
  category: "guide" | "technology" | "case-study" | "insight"
  image: string
  slug: string
  date: string
  memberOnly?: boolean
}

export default function ResourcesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")

  // Sample resources data
  const resources: Resource[] = [
    {
      id: "1",
      title: "RTLS Implementation Guide",
      description: "A comprehensive guide to implementing real-time location systems in your facility",
      category: "guide",
      image: "/rtls-implementation.png",
      slug: "rtls-implementation-guide",
      date: "2023-05-15",
    },
    {
      id: "2",
      title: "Comparing UWB and BLE Technologies",
      description: "An in-depth comparison of Ultra-Wideband and Bluetooth Low Energy for positioning",
      category: "technology",
      image: "/uwb-vs-ble.png",
      slug: "uwb-vs-ble-comparison",
      date: "2023-06-22",
    },
    {
      id: "3",
      title: "Healthcare Asset Tracking Case Study",
      description: "How Memorial Hospital improved equipment utilization with RTLS",
      category: "case-study",
      image: "/healthcare-asset-tracking.png",
      slug: "healthcare-asset-tracking-case-study",
      date: "2023-04-10",
      memberOnly: true,
    },
    {
      id: "4",
      title: "Future of Indoor Positioning",
      description: "Expert insights on emerging technologies and trends in indoor positioning",
      category: "insight",
      image: "/placeholder.svg?height=200&width=300&query=Future+Indoor+Positioning",
      slug: "future-of-indoor-positioning",
      date: "2023-07-05",
      memberOnly: true,
    },
    {
      id: "5",
      title: "RTLS ROI Calculator Guide",
      description: "How to calculate and maximize return on investment for RTLS projects",
      category: "guide",
      image: "/placeholder.svg?height=200&width=300&query=RTLS+ROI+Calculator",
      slug: "rtls-roi-calculator-guide",
      date: "2023-03-18",
    },
    {
      id: "6",
      title: "Wi-Fi RTT Positioning Technology",
      description: "Understanding the capabilities and limitations of Wi-Fi RTT for indoor positioning",
      category: "technology",
      image: "/placeholder.svg?height=200&width=300&query=WiFi+RTT+Positioning",
      slug: "wifi-rtt-positioning-technology",
      date: "2023-02-28",
    },
  ]

  // Filter resources based on search query and active tab
  const filteredResources = resources.filter((resource) => {
    const matchesSearch =
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase())

    if (activeTab === "all") return matchesSearch
    return matchesSearch && resource.category === activeTab
  })

  // Get category label
  const getCategoryLabel = (category: Resource["category"]) => {
    switch (category) {
      case "guide":
        return "Guide"
      case "technology":
        return "Technology"
      case "case-study":
        return "Case Study"
      case "insight":
        return "Insight"
      default:
        return category
    }
  }

  // Get category color
  const getCategoryColor = (category: Resource["category"]) => {
    switch (category) {
      case "guide":
        return "bg-blue-100 text-blue-800"
      case "technology":
        return "bg-purple-100 text-purple-800"
      case "case-study":
        return "bg-green-100 text-green-800"
      case "insight":
        return "bg-amber-100 text-amber-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold tracking-tight mb-4">Resources</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explore our collection of guides, technology comparisons, case studies, and expert insights.
          </p>
        </div>

        <div className="mb-8">
          <div className="relative mb-6">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <Input
              type="search"
              placeholder="Search resources..."
              className="pl-10"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>

          <Tabs defaultValue="all" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-5 mb-8">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="guide">Guides</TabsTrigger>
              <TabsTrigger value="technology">Technology</TabsTrigger>
              <TabsTrigger value="case-study">Case Studies</TabsTrigger>
              <TabsTrigger value="insight">Insights</TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              <ResourceGrid resources={filteredResources} />
            </TabsContent>

            <TabsContent value="guide" className="mt-0">
              <ResourceGrid resources={filteredResources} />
            </TabsContent>

            <TabsContent value="technology" className="mt-0">
              <ResourceGrid resources={filteredResources} />
            </TabsContent>

            <TabsContent value="case-study" className="mt-0">
              <ResourceGrid resources={filteredResources} />
            </TabsContent>

            <TabsContent value="insight" className="mt-0">
              <ResourceGrid resources={filteredResources} />
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )

  // Resource grid component
  function ResourceGrid({ resources }: { resources: Resource[] }) {
    if (resources.length === 0) {
      return (
        <div className="text-center py-12">
          <p className="text-gray-500">No resources found matching your criteria.</p>
          <Button
            variant="outline"
            className="mt-4"
            onClick={() => {
              setSearchQuery("")
              setActiveTab("all")
            }}
          >
            Clear filters
          </Button>
        </div>
      )
    }

    return (
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {resources.map((resource) => (
          <Card key={resource.id} className="overflow-hidden flex flex-col h-full">
            <div className="relative h-48 bg-gray-100">
              <img
                src={resource.image || "/placeholder.svg"}
                alt={resource.title}
                className="w-full h-full object-cover"
              />
              {resource.memberOnly && (
                <div className="absolute top-2 right-2">
                  <Badge variant="secondary" className="bg-black text-white">
                    Member Only
                  </Badge>
                </div>
              )}
            </div>
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start mb-2">
                <Badge className={getCategoryColor(resource.category)}>{getCategoryLabel(resource.category)}</Badge>
                <span className="text-xs text-gray-500">{resource.date}</span>
              </div>
              <CardTitle className="text-lg">{resource.title}</CardTitle>
            </CardHeader>
            <CardContent className="pb-2 flex-grow">
              <p className="text-gray-600 text-sm">{resource.description}</p>
            </CardContent>
            <CardFooter>
              <Link href={`/resources/${resource.slug}`} className="w-full">
                <Button variant="outline" className="w-full">
                  Read More
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    )
  }
}
