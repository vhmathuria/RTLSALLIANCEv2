"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { createBrowserClient } from "@supabase/ssr"
import Link from "next/link"
import Image from "next/image"
import { formatDate } from "@/lib/utils"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Search } from "lucide-react"
import MemberOnlyBadge from "@/components/member-only-badge"

export default function ResourcesClient({ initialArticles }: { initialArticles: any[] }) {
  const [articles, setArticles] = useState(initialArticles || [])
  const [filteredArticles, setFilteredArticles] = useState(initialArticles || [])
  const [searchQuery, setSearchQuery] = useState("")
  const [activeTab, setActiveTab] = useState("all")
  const [userProfile, setUserProfile] = useState<any>(null)
  const [loading, setLoading] = useState(true)

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
  )

  useEffect(() => {
    async function getUserProfile() {
      try {
        const {
          data: { user },
        } = await supabase.auth.getUser()

        if (user) {
          const { data } = await supabase.from("profiles").select("*").eq("id", user.id).single()
          setUserProfile(data)
        }
      } catch (error) {
        console.error("Error fetching user profile:", error)
      } finally {
        setLoading(false)
      }
    }

    getUserProfile()
  }, [supabase])

  useEffect(() => {
    filterArticles(searchQuery, activeTab)
  }, [searchQuery, activeTab, articles])

  const filterArticles = (query: string, tab: string) => {
    let filtered = [...articles]

    // Filter by search query
    if (query) {
      const lowerQuery = query.toLowerCase()
      filtered = filtered.filter(
        (article) =>
          article.title?.toLowerCase().includes(lowerQuery) ||
          article.description?.toLowerCase().includes(lowerQuery) ||
          article.content_type?.toLowerCase().includes(lowerQuery),
      )
    }

    // Filter by content type
    if (tab !== "all") {
      filtered = filtered.filter((article) => article.content_type?.toLowerCase() === tab.toLowerCase())
    }

    setFilteredArticles(filtered)
  }

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    filterArticles(searchQuery, activeTab)
  }

  const handleTabChange = (value: string) => {
    setActiveTab(value)
  }

  // Check if user has access to premium content
  const hasPremiumAccess = userProfile && userProfile.membership_tier !== "public"

  // Function to determine if an article is premium
  const isPremiumArticle = (article: any) => {
    return article.premium === true || article.member_only === true
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <form onSubmit={handleSearch} className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-500" />
            <Input
              type="search"
              placeholder="Search resources..."
              className="pl-8"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          <Button type="submit">Search</Button>
        </form>
      </div>

      <Tabs defaultValue="all" onValueChange={handleTabChange}>
        <TabsList className="mb-8">
          <TabsTrigger value="all">All Resources</TabsTrigger>
          <TabsTrigger value="guide">Guides</TabsTrigger>
          <TabsTrigger value="technology comparison">Comparisons</TabsTrigger>
          <TabsTrigger value="success story">Success Stories</TabsTrigger>
          <TabsTrigger value="member insight">Member Insights</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="mt-0">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredArticles.map((article) => (
              <ResourceCard
                key={article.id}
                article={article}
                isPremium={isPremiumArticle(article)}
                hasAccess={hasPremiumAccess}
              />
            ))}
          </div>
          {filteredArticles.length === 0 && (
            <div className="text-center py-12">
              <h3 className="text-lg font-medium">No resources found</h3>
              <p className="text-gray-500 mt-2">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </TabsContent>

        {["guide", "technology comparison", "success story", "member insight"].map((contentType) => (
          <TabsContent key={contentType} value={contentType} className="mt-0">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((article) => (
                <ResourceCard
                  key={article.id}
                  article={article}
                  isPremium={isPremiumArticle(article)}
                  hasAccess={hasPremiumAccess}
                />
              ))}
            </div>
            {filteredArticles.length === 0 && (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">No resources found</h3>
                <p className="text-gray-500 mt-2">Try adjusting your search criteria</p>
              </div>
            )}
          </TabsContent>
        ))}
      </Tabs>
    </div>
  )
}

function ResourceCard({
  article,
  isPremium,
  hasAccess,
}: {
  article: any
  isPremium: boolean
  hasAccess: boolean
}) {
  const contentTypeMap: Record<string, { icon: string; color: string }> = {
    Guide: { icon: "📚", color: "bg-blue-100 text-blue-800" },
    "Technology Comparison": { icon: "⚖️", color: "bg-purple-100 text-purple-800" },
    "Success Story": { icon: "🏆", color: "bg-green-100 text-green-800" },
    "Member Insight": { icon: "💡", color: "bg-amber-100 text-amber-800" },
  }

  const contentType = article.content_type || "Guide"
  const { icon, color } = contentTypeMap[contentType] || contentTypeMap["Guide"]

  return (
    <Card className="h-full flex flex-col overflow-hidden hover:shadow-md transition-shadow">
      <CardHeader className="pb-2">
        <div className="flex justify-between items-start">
          <span className={`text-xs font-medium px-2.5 py-0.5 rounded ${color}`}>
            {icon} {contentType}
          </span>
          {isPremium && <MemberOnlyBadge />}
        </div>
        <CardTitle className="text-xl mt-2 line-clamp-2">
          {isPremium && !hasAccess ? (
            <span className="text-gray-700">{article.title}</span>
          ) : (
            <Link href={`/resources/${article.slug}`} className="hover:text-blue-600 transition-colors">
              {article.title}
            </Link>
          )}
        </CardTitle>
        <CardDescription className="line-clamp-2">{article.description}</CardDescription>
      </CardHeader>
      <CardContent className="pb-2 flex-grow">
        {article.featured_image && (
          <div className="relative h-40 mb-4 rounded-md overflow-hidden">
            <Image
              src={article.featured_image || "/placeholder.svg"}
              alt={article.title}
              fill
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="object-cover"
            />
          </div>
        )}
      </CardContent>
      <CardFooter className="pt-2 flex justify-between items-center border-t">
        <div className="text-sm text-gray-500">{article.publish_date && formatDate(article.publish_date)}</div>
        {isPremium && !hasAccess ? (
          <Link href="/membership">
            <Button variant="outline" size="sm">
              Upgrade for Access
            </Button>
          </Link>
        ) : (
          <Link href={`/resources/${article.slug}`}>
            <Button variant="outline" size="sm">
              Read More
            </Button>
          </Link>
        )}
      </CardFooter>
    </Card>
  )
}
