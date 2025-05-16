import { notFound } from "next/navigation"
import { createServerClient } from "@/lib/supabase-server"
import { getArticleBySlug } from "@/lib/supabase"
import GuideRenderer from "@/components/renderers/guide/guide-renderer"
import SuccessStoryRenderer from "@/components/renderers/success-story/success-story-renderer"
import TechnologyComparisonRenderer from "@/components/renderers/technology-comparison/technology-comparison-renderer"
import MemberInsightRenderer from "@/components/renderers/member-insight/member-insight-renderer"
import ContentGate from "@/components/content-gate"

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    return {
      title: "Article Not Found - RTLS Alliance",
      description: "The requested article could not be found.",
    }
  }

  return {
    title: `${article.title} - RTLS Alliance`,
    description: article.meta_description || `Read about ${article.title} on RTLS Alliance.`,
  }
}

export default async function ArticlePage({ params }: { params: { slug: string } }) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  // Check if article requires membership
  const requiredTier = article.membership_tier || "public"

  // If article is public, no need to check membership
  if (requiredTier !== "public") {
    // Get current user
    const supabase = createServerClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    // If no user is logged in and content is gated, show content gate
    if (!user) {
      return <ContentGate requiredTier={requiredTier as any} userTier="public" />
    }

    // Get user profile to check membership tier
    const { data: profile } = await supabase
      .from("profiles")
      .select("membership_tier, membership_status, membership_expiry")
      .eq("id", user.id)
      .single()

    // Define tier levels for comparison
    const tierLevels = {
      public: 0,
      student: 1,
      professional: 2,
      corporate: 3,
    }

    // Check if user has access
    const userTier = profile?.membership_tier || "public"
    const userTierLevel = tierLevels[userTier as keyof typeof tierLevels] || 0
    const requiredTierLevel = tierLevels[requiredTier as keyof typeof tierLevels] || 0

    // If user's tier is lower than required, show content gate
    if (userTierLevel < requiredTierLevel) {
      return <ContentGate requiredTier={requiredTier as any} userTier={userTier as any} />
    }
  }

  // Render the appropriate article type
  switch (article.content_type) {
    case "Guide":
      return <GuideRenderer article={article} />
    case "Success Story":
      return <SuccessStoryRenderer article={article} />
    case "Technology Comparison":
      return <TechnologyComparisonRenderer article={article} />
    case "Member Insight":
      return <MemberInsightRenderer article={article} />
    default:
      return (
        <div className="container mx-auto px-4 py-12">
          <h1 className="text-3xl font-bold mb-6">{article.title}</h1>
          <div className="prose max-w-none">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
        </div>
      )
  }
}
