import type { Metadata } from "next"
import { notFound, redirect } from "next/navigation"
import { getArticleBySlug } from "@/lib/supabase"
import type { Article } from "@/types/article"
import GuideRenderer from "@/components/renderers/guide/guide-renderer"
import TechnologyComparisonRenderer from "@/components/renderers/technology-comparison/technology-comparison-renderer"
import SuccessStoryRenderer from "@/components/renderers/success-story/success-story-renderer"
import MemberInsightRenderer from "@/components/renderers/member-insight/member-insight-renderer"
import ContentGate from "@/components/content-gate"
import { checkMembershipAccess, getCurrentMembership } from "@/lib/membership-actions"
import { createClient } from "@/lib/supabase-server"

interface ResourcePageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: ResourcePageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Article Not Found",
      description: "The requested article could not be found.",
    }
  }

  return {
    title: article.title,
    description: article.meta_description,
    openGraph: {
      title: article.title,
      description: article.meta_description,
      type: "article",
      publishedTime: article.publish_date,
      authors: [article.author],
      images: article.thumbnail_image ? [article.thumbnail_image] : [],
    },
  }
}

export default async function ResourcePage({ params }: ResourcePageProps) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  // Check if user is logged in
  const supabase = createClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Get article membership tier (default to public if not set)
  const requiredTier = article.membership_tier || "public"

  // Check if user has access to this article
  const hasAccess = await checkMembershipAccess(requiredTier)

  // If user doesn't have access and not logged in, redirect to login
  if (!hasAccess && !user) {
    redirect(`/login?redirectTo=/resources/${params.slug}`)
  }

  // Get current user's membership info for the content gate
  const membership = await getCurrentMembership()

  // Log the article content type for debugging
  console.log(`Rendering article with content_type: ${article.content_type}`)

  return (
    <main>
      {/* Show content gate if user doesn't have access */}
      {!hasAccess && requiredTier !== "public" && (
        <div className="container mx-auto px-4 py-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">{article.title}</h1>
          <ContentGate requiredTier={requiredTier as any} userTier={membership.tier} />
        </div>
      )}

      {/* Show article content if user has access */}
      {hasAccess && (
        <>
          {article.content_type === "Guide" && <GuideRenderer article={article as Article} />}
          {article.content_type === "Technology Comparison" && (
            <TechnologyComparisonRenderer article={article as Article} />
          )}
          {article.content_type === "Success Story" && <SuccessStoryRenderer article={article as Article} />}
          {article.content_type === "Member Insight" && <MemberInsightRenderer article={article as Article} />}

          {/* Fallback for unknown content types */}
          {!["Guide", "Technology Comparison", "Success Story", "Member Insight"].includes(article.content_type) && (
            <div className="container mx-auto px-4 py-12">
              <div className="text-center">
                <h2 className="text-2xl font-bold text-gray-800">Unsupported Content Type</h2>
                <p className="text-gray-600 mt-2">
                  The content type "{article.content_type}" is not currently supported.
                </p>
              </div>
            </div>
          )}
        </>
      )}
    </main>
  )
}
