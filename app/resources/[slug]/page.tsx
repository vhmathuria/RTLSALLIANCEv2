import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { createServerClient, type CookieOptions } from "@supabase/ssr"
import { cookies } from "next/headers"
import GuideRenderer from "@/components/renderers/guide/guide-renderer"
import SuccessStoryRenderer from "@/components/renderers/success-story/success-story-renderer"
import TechnologyComparisonRenderer from "@/components/renderers/technology-comparison/technology-comparison-renderer"
import MemberInsightRenderer from "@/components/renderers/member-insight/member-insight-renderer"
import ContentGate from "@/components/content-gate"
import PageLayout from "@/components/layout/page-layout"
import ResourceSEO from "@/components/seo/resource-seo"
import ResourceBreadcrumbs from "@/components/resource-breadcrumbs"
import { formatDate } from "@/lib/utils"

type Props = {
  params: { slug: string }
}

// Add revalidation - regenerate this page once per day
export const revalidate = 86400

export async function generateMetadata({ params }: Props): Promise<Metadata> {
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

async function getArticleBySlug(slug: string) {
  const cookieStore = cookies()
  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name: string) {
          return cookieStore.get(name)?.value
        },
        set(name: string, value: string, options: CookieOptions) {
          cookieStore.set({ name, value, ...options })
        },
        remove(name: string, options: CookieOptions) {
          cookieStore.delete({ name, ...options })
        },
      },
    },
  )

  const { data, error } = await supabase.from("articles").select("*").eq("slug", slug).single()

  if (error) {
    console.error(`Error fetching article with slug ${slug}:`, error)
    return null
  }

  return data
}

export default async function ResourcePage({ params }: Props) {
  const article = await getArticleBySlug(params.slug)

  if (!article) {
    notFound()
  }

  // Check if article requires membership
  const requiredTier = article.membership_tier || "public"

  // If article is public, no need to check membership
  if (requiredTier !== "public") {
    // Get current user
    const cookieStore = cookies()
    const supabase = createServerClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        cookies: {
          get(name: string) {
            return cookieStore.get(name)?.value
          },
          set(name: string, value: string, options: CookieOptions) {
            cookieStore.set({ name, value, ...options })
          },
          remove(name: string, options: CookieOptions) {
            cookieStore.delete({ name, ...options })
          },
        },
      },
    )

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
  const renderContent = () => {
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
          <div className="prose max-w-none">
            <h1>{article.title}</h1>
            <div dangerouslySetInnerHTML={{ __html: article.content || "" }} />
          </div>
        )
    }
  }

  return (
    <>
      <ResourceSEO
        title={article.title}
        description={article.meta_description || article.excerpt || `Read about ${article.title} on RTLS Alliance.`}
        canonicalUrl={`/resources/${article.slug}`}
        publishDate={article.published_at}
        modifiedDate={article.updated_at}
        imageUrl={article.featured_image}
        type={article.content_type || "Article"}
      />

      <PageLayout>
        <div className="container mx-auto px-4 py-8">
          <ResourceBreadcrumbs
            title={article.title}
            contentType={article.content_type || "Resource"}
            slug={article.slug}
          />

          <div className="mb-4 text-sm text-gray-500">
            {article.published_at && (
              <time dateTime={article.published_at}>Published: {formatDate(article.published_at)}</time>
            )}
            {article.updated_at && article.updated_at !== article.published_at && (
              <> • Updated: {formatDate(article.updated_at)}</>
            )}
          </div>

          {renderContent()}
        </div>
      </PageLayout>
    </>
  )
}
