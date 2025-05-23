import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface RelatedRead {
  title: string
  slug?: string
  link?: string
}

interface GuideRelatedReadsProps {
  relatedReads: RelatedRead[]
}

export default function GuideRelatedReads({ relatedReads }: GuideRelatedReadsProps) {
  if (!relatedReads || relatedReads.length === 0) return null

  return (
    <section id="related-reads" className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reads</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {relatedReads.map((article, index) => {
          // Use link if available, otherwise construct from slug
          const href = article.link || (article.slug ? `/resources/${article.slug}` : "#")

          return (
            <Link
              key={index}
              href={href}
              className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex justify-between items-center bg-white"
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
