import { notFound } from "next/navigation"
import { createServerClient } from "@/lib/supabase-server"
import { getArticleBySlug } from "@/lib/supabase"
import { createAdminClient } from "@/lib/supabase-server-admin"
import GuideRenderer from "@/components/renderers/guide/guide-renderer"
import SuccessStoryRenderer from "@/components/renderers/success-story/success-story-renderer"
import TechnologyComparisonRenderer from "@/components/renderers/technology-comparison/technology-comparison-renderer"
import MemberInsightRenderer from "@/components/renderers/member-insight/member-insight-renderer"
import ContentGate from "@/components/content-gate"
import type { Metadata } from "next"

// Add revalidation - regenerate this page once per day
export const revalidate = 86400

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  // Use admin client to fetch article metadata for SEO
  const supabaseAdmin = createAdminClient()
  const { data: article, error } = await supabaseAdmin
    .from("staging_articles")
    .select("title, meta_description, excerpt, featured_image, slug, published_at, updated_at, content_type")
    .eq("slug", params.slug)
    .single()

  if (error || !article) {
    return {
      title: "Article Not Found - RTLS Alliance",
      description: "The requested article could not be found.",
    }
  }

  // Base URL for canonical and OG URLs
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://rtlsalliance.com"
  const canonicalUrl = `${baseUrl}/resources/${article.slug}`

  // Determine content category
  const contentCategory = article.content_type || "Article"

  // Format publication date
  const pubDate = article.published_at ? new Date(article.published_at).toISOString() : new Date().toISOString()

  return {
    title: `${article.title} - RTLS Alliance`,
    description: article.meta_description || article.excerpt || `Read about ${article.title} on RTLS Alliance.`,
    openGraph: {
      title: article.title,
      description: article.meta_description || article.excerpt || `Read about ${article.title} on RTLS Alliance.`,
      url: canonicalUrl,
      siteName: "RTLS Alliance",
      images: [
        {
          url: article.featured_image || `${baseUrl}/images/rtls-alliance-logo.png`,
          width: 1200,
          height: 630,
          alt: article.title,
        },
      ],
      locale: "en_US",
      type: "article",
      publishedTime: pubDate,
      modifiedTime: article.updated_at ? new Date(article.updated_at).toISOString() : pubDate,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.meta_description || article.excerpt || `Read about ${article.title} on RTLS Alliance.`,
      images: [article.featured_image || `${baseUrl}/images/rtls-alliance-logo.png`],
    },
    alternates: {
      canonical: canonicalUrl,
    },
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
