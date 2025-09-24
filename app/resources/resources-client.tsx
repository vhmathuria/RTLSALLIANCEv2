"use client"

import { useState, useEffect, useMemo } from "react"
import Link from "next/link"
import { useSearchParams, useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import type { Article } from "@/types/article"
import { formatDate, truncateText, parseJsonSafely } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Search, X } from "lucide-react"
import MemberOnlyBadge from "@/components/member-only-badge"

interface ResourcesClientPageProps {
  initialArticles: Article[]
}

export function ResourcesClientPage({ initialArticles }: ResourcesClientPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get filter parameters from URL
  const typeParam = searchParams.get("type")
  const tierParam = searchParams.get("tier")

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState("")
  const [contentTypeFilter, setContentTypeFilter] = useState<string | null>(typeParam)
  const [membershipTierFilter, setMembershipTierFilter] = useState<string | null>(tierParam)

  // Update URL when filters change
  useEffect(() => {
    const params = new URLSearchParams()
    if (contentTypeFilter && contentTypeFilter !== "all") params.set("type", contentTypeFilter)
    if (membershipTierFilter) params.set("tier", membershipTierFilter)

    const newUrl = `/resources${params.toString() ? `?${params.toString()}` : ""}`
    window.history.replaceState({}, "", newUrl)
  }, [contentTypeFilter, membershipTierFilter])

  // Filter articles based on search query and filters
  const filteredArticles = useMemo(() => {
    return initialArticles.filter((article) => {
      // Filter by search query
      if (searchQuery) {
        const query = searchQuery.toLowerCase()
        const matchesTitle = article.title?.toLowerCase().includes(query)
        const matchesDescription = article.meta_description?.toLowerCase().includes(query)
        const matchesAuthor = article.author?.toLowerCase().includes(query)
        const matchesTags = parseJsonSafely<string[]>(article.tags, []).some((tag) => tag.toLowerCase().includes(query))

        if (!(matchesTitle || matchesDescription || matchesAuthor || matchesTags)) {
          return false
        }
      }

      // Filter by content type
      if (contentTypeFilter && contentTypeFilter !== "all") {
        const contentTypeMap: Record<string, string> = {
          guide: "Guide",
          comparison: "Technology Comparison",
          success: "Success Story",
          insight: "Member Insight",
        }

        if (article.content_type !== contentTypeMap[contentTypeFilter]) {
          return false
        }
      }

      // Filter by membership tier
      if (membershipTierFilter) {
        const articleTier = article.membership_tier || "public"
        if (articleTier !== membershipTierFilter) {
          return false
        }
      }

      return true
    })
  }, [initialArticles, searchQuery, contentTypeFilter, membershipTierFilter])

  // Handle filter button clicks
  const handleContentTypeFilter = (type: string | null) => {
    setContentTypeFilter(type)
  }

  const handleMembershipTierFilter = (tier: string | null) => {
    setMembershipTierFilter(tier)
  }

  // Clear all filters
  const clearFilters = () => {
    setSearchQuery("")
    setContentTypeFilter(null)
    setMembershipTierFilter(null)
  }

  // Check if any filters are active
  const hasActiveFilters = searchQuery || contentTypeFilter || membershipTierFilter

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold">
              {filteredArticles.length} {filteredArticles.length === 1 ? "Resource" : "Resources"}
            </h2>
            {hasActiveFilters && (
              <Button variant="outline" size="sm" onClick={clearFilters} className="flex items-center gap-1 text-sm">
                <X className="h-3 w-3" /> Clear filters
              </Button>
            )}
          </div>

          <div className="relative w-64">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-blue-300 text-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery("")}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
              >
                <X className="h-4 w-4" />
              </button>
            )}
          </div>
        </div>

        <div className="mb-8 flex flex-wrap gap-6">
          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Content Type</p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={contentTypeFilter === null || contentTypeFilter === "all" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => handleContentTypeFilter("all")}
              >
                All Resources
              </Button>
              <Button
                variant={contentTypeFilter === "guide" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => handleContentTypeFilter("guide")}
              >
                Guides
              </Button>
              <Button
                variant={contentTypeFilter === "comparison" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => handleContentTypeFilter("comparison")}
              >
                Technology Comparisons
              </Button>
              <Button
                variant={contentTypeFilter === "success" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => handleContentTypeFilter("success")}
              >
                Success Stories
              </Button>
              <Button
                variant={contentTypeFilter === "insight" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => handleContentTypeFilter("insight")}
              >
                Member Insights
              </Button>
            </div>
          </div>

          <div className="space-y-2">
            <p className="text-sm font-medium text-gray-500">Membership Tier</p>
            <div className="flex flex-wrap gap-2">
              <Button
                variant={membershipTierFilter === "public" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => handleMembershipTierFilter("public")}
              >
                Public
              </Button>
              <Button
                variant={membershipTierFilter === "student" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => handleMembershipTierFilter("student")}
              >
                Student
              </Button>
              <Button
                variant={membershipTierFilter === "professional" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => handleMembershipTierFilter("professional")}
              >
                Professional
              </Button>
              <Button
                variant={membershipTierFilter === "vendor" ? "default" : "outline"}
                className="rounded-full"
                onClick={() => handleMembershipTierFilter("vendor")}
              >
                Corporate
              </Button>
            </div>
          </div>
        </div>

        {filteredArticles.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredArticles.map((article: Article) => {
              const tags = parseJsonSafely<string[]>(article.tags, [])
              const membershipTier = article.membership_tier || "public"

              return (
                <Link key={article.slug} href={`/resources/${article.slug}`} className="group">
                  <div className="bg-white border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all transform hover:scale-105 h-full flex flex-col">
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

                        {/* Member-Only Badge */}
                        {membershipTier !== "public" && <MemberOnlyBadge tier={membershipTier as any} />}

                        {tags
                          .filter((tag) => tag !== "RTLS")
                          .slice(0, 2)
                          .map((tag, index) => (
                            <Badge
                              key={index}
                              variant="outline"
                              className="bg-gray-50 text-gray-700 hover:bg-gray-100 border-gray-200"
                            >
                              {tag}
                            </Badge>
                          ))}
                      </div>

                      <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                        {article.title}
                      </h3>

                      <p className="text-gray-600 mb-4 flex-1">{truncateText(article.meta_description, 120)}</p>

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
        ) : (
          <div className="text-center py-16">
            <h3 className="text-xl font-medium text-gray-700 mb-2">No resources found</h3>
            <p className="text-gray-500 mb-6">Try adjusting your search or filters to find what you're looking for.</p>
            <Button onClick={clearFilters}>Clear all filters</Button>
          </div>
        )}

        {filteredArticles.length > 9 && (
          <div className="mt-12 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
              Load More Resources
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </div>
    </section>
  )
}
