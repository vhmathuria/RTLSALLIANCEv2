import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface RelatedRead {
  title: string
  slug?: string
  link?: string
}

interface RelatedReadsData {
  articles?: RelatedRead[]
  lastUpdated?: string
}

interface TechnologyComparisonRelatedReadsProps {
  relatedReads: RelatedReadsData | RelatedRead[] | null | undefined
}

export default function TechnologyComparisonRelatedReads({ relatedReads }: TechnologyComparisonRelatedReadsProps) {
  // Handle both formats: array of articles or object with articles array
  let articlesArray: RelatedRead[] = []

  if (relatedReads) {
    if (Array.isArray(relatedReads)) {
      articlesArray = relatedReads
    } else if (relatedReads.articles && Array.isArray(relatedReads.articles)) {
      articlesArray = relatedReads.articles
    }
  }

  const hasRelatedReads = articlesArray.length > 0

  if (!hasRelatedReads) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reads</h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <p className="text-gray-500 italic">No related articles available for this comparison.</p>
        </div>
      </section>
    )
  }

  return (
    <section id="related-reads" className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reads</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {articlesArray.map((article, index) => {
          // Use link if available, otherwise construct from slug
          const href = article.link || (article.slug ? `/resources/${article.slug}` : "#")

          return (
            <Link
              key={index}
              href={href}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex justify-between items-center"
            >
              <span className="text-gray-900 font-medium">{article.title}</span>
              <ArrowRight className="h-4 w-4 text-blue-600" />
            </Link>
          )
        })}
      </div>
    </section>
  )
}
