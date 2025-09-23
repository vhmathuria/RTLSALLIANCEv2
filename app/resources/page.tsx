import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getAllArticlesForUser } from "@/lib/supabase"
import { createServerClient } from "@/lib/supabase-server"
import { Suspense } from "react"
import { ResourcesClientPage } from "./resources-client"
import { PageSEO } from "@/components/seo/page-seo"
import type { Metadata } from "next"

// Add revalidation - regenerate this page once per day
export const revalidate = 86400

export const metadata: Metadata = {
  title: "Resources - RTLS Alliance",
  description: "Explore guides, case studies, and insights about Real-Time Location Systems (RTLS).",
  keywords:
    "RTLS resources, real-time location systems guides, RTLS case studies, location technology insights, positioning technology comparisons",
  openGraph: {
    title: "Resources - RTLS Alliance",
    description: "Explore guides, case studies, and insights about Real-Time Location Systems (RTLS).",
    url: "https://rtlsalliance.com/resources",
    siteName: "RTLS Alliance",
    images: [
      {
        url: "https://rtlsalliance.com/images/rtls-alliance-logo.png",
        width: 1200,
        height: 630,
        alt: "RTLS Alliance Resources",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources - RTLS Alliance",
    description: "Explore guides, case studies, and insights about Real-Time Location Systems (RTLS).",
    images: ["https://rtlsalliance.com/images/rtls-alliance-logo.png"],
  },
  alternates: {
    canonical: "https://rtlsalliance.com/resources",
  },
}

export default async function ResourcesPage() {
  // Get current user
  const supabase = createServerClient()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  // Get articles filtered by user access level
  const allArticles = await getAllArticlesForUser(user?.id)

  // Define collection data for structured data
  const collectionData = {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "RTLS Alliance Resources",
    description: "Explore guides, case studies, and insights about Real-Time Location Systems (RTLS).",
    url: "https://rtlsalliance.com/resources",
    publisher: {
      "@type": "Organization",
      name: "RTLS Alliance",
      logo: {
        "@type": "ImageObject",
        url: "https://rtlsalliance.com/images/rtls-alliance-logo.png",
      },
    },
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <PageSEO
        title={metadata.title as string}
        description={metadata.description as string}
        structuredData={collectionData}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">RTLS Knowledge Hub</h1>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Content written by practitioners with actual hands-on RTLS expertise
          </p>
        </div>
      </section>

      {/* Articles Grid */}
      <Suspense fallback={<div>Loading...</div>}>
        <ResourcesClientPage initialArticles={allArticles} />
      </Suspense>

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
