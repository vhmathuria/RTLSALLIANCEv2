import Link from "next/link"
import { Button } from "@/components/ui/button"
import { getAllArticles } from "@/lib/supabase"
import { Suspense } from "react"
import { ResourcesClientPage } from "./resources-client"
import { generatePageMetadata } from "@/lib/seo-utils"

export const metadata = generatePageMetadata({
  title: "RTLS Resources | Guides, Comparisons & Case Studies",
  description:
    "Access comprehensive educational resources from our non-profit community on real-time location systems across industrial, healthcare, defense, and consumer sectors, including implementation guides, technology comparisons, and success stories.",
  keywords:
    "RTLS resources, location technology guides, RTLS case studies, technology comparisons, implementation guides, expert insights, real-time location systems, positioning technology resources, non-profit education",
  path: "/resources",
})

export default async function ResourcesPage() {
  // Get all articles
  const allArticles = await getAllArticles()

  return (
    <main className="min-h-screen bg-gray-50">
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
