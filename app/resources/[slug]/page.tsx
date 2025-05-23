// Add force-dynamic to prevent stale data
export const dynamic = "force-dynamic"

// Add revalidation - regenerate this page once per day
export const revalidate = 86400

import { notFound } from "next/navigation"
import { createClient } from "@/lib/supabase-server"
import { getArticleBySlug } from "@/lib/supabase"
import GuideRenderer from "@/components/renderers/guide/guide-renderer"
import SuccessStoryRenderer from "@/components/renderers/success-story/success-story-renderer"
import TechnologyComparisonRenderer from "@/components/renderers/technology-comparison/technology-comparison-renderer"
import MemberInsightRenderer from "@/components/renderers/member-insight/member-insight-renderer"
import ContentGate from "@/components/content-gate"
import { checkMembershipAccess } from "@/lib/membership-actions"
import { getCurrentMembership } from "@/lib/membership-actions"
import { revalidatePath } from "next/cache"
import type { Metadata } from "next"

export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
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
  // Force revalidation to ensure fresh data
  revalidatePath(`/resources/${params.slug}`)

  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  // Check if article requires membership
  const requiredTier = article.membership_tier?.toLowerCase() || "public"

  console.log(`Article ${params.slug} requires tier:`, requiredTier)

  // If article is public, no need to check membership
  if (requiredTier !== "public") {
    // Get current user's membership status directly - don't rely on cached data
    const supabase = createClient()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    // If no user is logged in and content is gated, show content gate
    if (!user) {
      console.log("No user logged in, showing content gate")
      return <ContentGate requiredTier={requiredTier as any} userTier="public" content={article.content} />
    }

    // Get user profile to check membership tier - fresh query
    const { data: profile, error: profileError } = await supabase
      .from("profiles")
      .select("membership_tier, membership_status, membership_expiry")
      .eq("id", user.id)
      .single()

    if (profileError) {
      console.error("Error fetching user profile:", profileError)
    }

    // Check if user has access using membership-actions function
    const hasAccess = await checkMembershipAccess(requiredTier)
    const membership = await getCurrentMembership()

    console.log("Membership check:", {
      userId: user.id,
      requiredTier,
      userTier: profile?.membership_tier || "public",
      userStatus: profile?.membership_status?.toLowerCase() || "inactive",
      hasAccess,
      profileFromGetCurrent: membership,
    })

    if (!hasAccess) {
      const userTier = profile?.membership_tier?.toLowerCase() || "public"
      console.log(`Access denied for user ${user.id}. Required: ${requiredTier}, User has: ${userTier}`)
      return <ContentGate requiredTier={requiredTier as any} userTier={userTier as any} content={article.content} />
    }

    console.log(`Access granted for user ${user.id} to article ${params.slug}`)
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
