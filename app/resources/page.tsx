import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getArticlesByContentType } from "@/lib/supabase"
import type { Article } from "@/types/article"
import { formatDate, truncateText, parseJsonSafely } from "@/lib/utils"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Filter, Search } from "lucide-react"
import MemberOnlyBadge from "@/components/member-only-badge"

export const metadata = {
  title: "Resources - RTLS Alliance",
  description: "Explore guides, case studies, and insights about Real-Time Location Systems (RTLS).",
}

export default async function ResourcesPage() {
  // Get articles for each content type
  const guideArticles = await getArticlesByContentType("Guide")
  const comparisonArticles = await getArticlesByContentType("Technology Comparison")
  const successStoryArticles = await getArticlesByContentType("Success Story")
  const memberInsightArticles = await getArticlesByContentType("Member Insight")

  // Combine all articles
  const allArticles = [...guideArticles, ...comparisonArticles, ...successStoryArticles, ...memberInsightArticles]

  // Sort by publish date (newest first)
  const sortedArticles = allArticles.sort(
    (a, b) => new Date(b.publish_date).getTime() - new Date(a.publish_date).getTime(),
  )

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">RTLS Alliance Resources</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Explore our collection of guides, case studies, technology comparisons, and expert insights on Real-Time
            Location Systems
          </p>
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search resources..."
              className="w-full pl-10 pr-4 py-3 rounded-full border-none focus:ring-2 focus:ring-blue-300 text-gray-800"
            />
          </div>
        </div>
      </section>

      {/* Content Type Filters */}
      <section className="py-8 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link href="/resources?type=all">
              <Button variant="outline" className="rounded-full">
                All Resources
              </Button>
            </Link>
            <Link href="/resources?type=guide">
              <Button variant="outline" className="rounded-full">
                Guides
              </Button>
            </Link>
            <Link href="/resources?type=comparison">
              <Button variant="outline" className="rounded-full">
                Technology Comparisons
              </Button>
            </Link>
            <Link href="/resources?type=success">
              <Button variant="outline" className="rounded-full">
                Success Stories
              </Button>
            </Link>
            <Link href="/resources?type=insight">
              <Button variant="outline" className="rounded-full">
                Member Insights
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Articles Grid */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Latest Resources</h2>
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              Filter
            </Button>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArticles.map((article: Article) => {
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

          <div className="mt-12 text-center">
            <Button className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2">
              Load More Resources
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Contribute to Our Knowledge Base</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Share your expertise and insights with the RTLS community. Submit your articles, case studies, or research
            papers to be featured in our resources.
          </p>
          <Link href="/contact">
            <Button className="bg-white text-blue-600 hover:bg-gray-100">Submit Your Content</Button>
          </Link>
        </div>
      </section>
    </main>
  )
}
