"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search, Filter } from "lucide-react"
import { formatDate, truncateText, parseJsonSafely } from "@/lib/utils"
import type { Article } from "@/types/article"

// This would normally be a server component, but we need client-side filtering
export default function ResourcesPage() {
  const [articles, setArticles] = useState<Article[]>([])
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([])
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedContentType, setSelectedContentType] = useState<string | null>(null)
  const [selectedIndustry, setSelectedIndustry] = useState<string | null>(null)
  const [selectedTechnology, setSelectedTechnology] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(true)

  // All possible industries and technologies for filters
  const industries = [
    "Manufacturing",
    "Healthcare",
    "Logistics",
    "Retail",
    "Warehousing",
    "Automotive",
    "Construction",
    "Mining",
    "Oil & Gas",
    "Aerospace",
  ]

  const technologies = ["BLE", "UWB", "WiFi", "RFID", "Vision", "Infrared", "GPS", "Cellular", "LoRaWAN", "Ultrasound"]

  // Helper function to safely extract viewsCount from rich_text
  const getViewsCount = (article: Article): number => {
    try {
      if (!article.rich_text) return 0

      // Check if rich_text is already an object
      const content = typeof article.rich_text === "string" ? parseJsonSafely(article.rich_text, {}) : article.rich_text

      // Extract viewsCount, defaulting to 0
      const viewsCount = content?.viewsCount || "0"
      return Number.parseInt(viewsCount, 10) || 0
    } catch (e) {
      console.error("Error extracting views count:", e)
      return 0
    }
  }

  // Determine if an article is popular (threshold: 500 views)
  const isPopular = (article: Article): boolean => {
    const viewsCount = getViewsCount(article)
    return viewsCount >= 500 // Higher threshold for "truly popular"
  }

  // Fetch articles on component mount
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch("/api/articles")
        const data = await response.json()

        // Sort articles by views/popularity (if available) or fallback to publish date
        const sortedArticles = data.sort((a: Article, b: Article) => {
          // First try to sort by viewsCount
          const aViews = getViewsCount(a)
          const bViews = getViewsCount(b)

          // If both have valid view counts, sort by that (highest first)
          if (aViews > 0 || bViews > 0) {
            return bViews - aViews
          }

          // Otherwise, fall back to publish date (newest first)
          return new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime()
        })

        setArticles(sortedArticles)
        setFilteredArticles(sortedArticles)
        setIsLoading(false)
      } catch (error) {
        console.error("Error fetching articles:", error)
        setIsLoading(false)
      }
    }

    fetchArticles()
  }, [])

  // Filter articles when search or filters change
  useEffect(() => {
    let result = [...articles]

    // Filter by content type
    if (selectedContentType) {
      result = result.filter((article) => article.content_type === selectedContentType)
    }

    // Filter by industry (from tags)
    if (selectedIndustry) {
      result = result.filter((article) => {
        const tags = parseJsonSafely<string[]>(article.tags, [])
        return tags.some((tag) => tag.toLowerCase() === selectedIndustry.toLowerCase())
      })
    }

    // Filter by technology (from tags)
    if (selectedTechnology) {
      result = result.filter((article) => {
        const tags = parseJsonSafely<string[]>(article.tags, [])
        return tags.some((tag) => tag.toLowerCase() === selectedTechnology.toLowerCase())
      })
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (article) =>
          article.title.toLowerCase().includes(query) ||
          article.meta_description.toLowerCase().includes(query) ||
          (article.author && article.author.toLowerCase().includes(query)) ||
          parseJsonSafely<string[]>(article.tags, []).some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    setFilteredArticles(result)
  }, [articles, searchQuery, selectedContentType, selectedIndustry, selectedTechnology])

  // Reset all filters
  const resetFilters = () => {
    setSearchQuery("")
    setSelectedContentType(null)
    setSelectedIndustry(null)
    setSelectedTechnology(null)
  }

  // Get unique content types from articles
  const contentTypes = Array.from(new Set(articles.map((article) => article.content_type)))

  return (
    <main className="container mx-auto px-4 py-12">
      <div className="max-w-6xl mx-auto">
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            RTLS Alliance Resources
          </h1>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            Explore our comprehensive collection of guides, case studies, and articles about RTLS technology and
            implementation.
          </p>
        </header>

        {/* Search and Filters */}
        <div className="mb-8">
          <div className="flex flex-col md:flex-row gap-4 mb-4">
            <div className="relative flex-grow">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>
            <Button variant="outline" className="flex items-center gap-2" onClick={resetFilters}>
              <Filter size={18} />
              Reset Filters
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Content Type Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Content Type</label>
              <select
                value={selectedContentType || ""}
                onChange={(e) => setSelectedContentType(e.target.value || null)}
                className="w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">All Content Types</option>
                {contentTypes.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Industry Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Industry</label>
              <select
                value={selectedIndustry || ""}
                onChange={(e) => setSelectedIndustry(e.target.value || null)}
                className="w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">All Industries</option>
                {industries.map((industry) => (
                  <option key={industry} value={industry}>
                    {industry}
                  </option>
                ))}
              </select>
            </div>

            {/* Technology Filter */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Technology</label>
              <select
                value={selectedTechnology || ""}
                onChange={(e) => setSelectedTechnology(e.target.value || null)}
                className="w-full border border-gray-300 rounded-md shadow-sm p-2"
              >
                <option value="">All Technologies</option>
                {technologies.map((tech) => (
                  <option key={tech} value={tech}>
                    {tech}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-600"></div>
          </div>
        ) : filteredArticles.length === 0 ? (
          <div className="text-center py-20">
            <h3 className="text-xl font-medium text-gray-700">No resources found</h3>
            <p className="text-gray-500 mt-2">Try adjusting your search or filters</p>
            <Button
              onClick={resetFilters}
              className="mt-4 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              Reset Filters
            </Button>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article: Article) => {
              // Get tags and filter out "RTLS" tag
              const tags = parseJsonSafely<string[]>(article.tags, []).filter((tag) => tag.toLowerCase() !== "rtls")

              // Check if article is truly popular
              const articleIsPopular = isPopular(article)

              return (
                <Link key={article.slug} href={`/resources/${article.slug}`} className="group">
                  <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow h-full flex flex-col">
                    <div className="p-6 flex-1 flex flex-col">
                      <div className="flex flex-wrap gap-2 mb-3">
                        {article.content_type && (
                          <Badge
                            className={`${
                              article.content_type === "Technology Comparison"
                                ? "bg-purple-600 hover:bg-purple-700"
                                : article.content_type === "Success Story"
                                  ? "bg-green-600 hover:bg-green-700"
                                  : article.content_type === "Member Insight"
                                    ? "bg-indigo-600 hover:bg-indigo-700"
                                    : "bg-blue-600 hover:bg-blue-700"
                            }`}
                          >
                            {article.content_type}
                          </Badge>
                        )}

                        {articleIsPopular && <Badge className="bg-amber-500 hover:bg-amber-600">Popular</Badge>}

                        {article.access_level === "members" && (
                          <Badge className="bg-gray-800 hover:bg-gray-900">Members Only</Badge>
                        )}
                      </div>

                      <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h2>

                      <p className="text-gray-600 mb-4 flex-1">{truncateText(article.meta_description, 120)}</p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {tags.slice(0, 3).map((tag, index) => (
                          <Badge
                            key={index}
                            variant="outline"
                            className="bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200"
                          >
                            {tag}
                          </Badge>
                        ))}
                        {tags.length > 3 && (
                          <Badge variant="outline" className="bg-gray-50 text-gray-700">
                            +{tags.length - 3}
                          </Badge>
                        )}
                      </div>

                      <div className="flex items-center justify-between text-sm text-gray-500 mt-auto pt-4 border-t border-gray-100">
                        <span>{article.author}</span>
                        <time dateTime={article.publish_date}>{formatDate(article.publish_date)}</time>
                      </div>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        )}
      </div>
    </main>
  )
}
