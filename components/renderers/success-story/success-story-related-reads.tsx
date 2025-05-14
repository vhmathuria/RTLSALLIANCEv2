import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface RelatedRead {
  title: string
  slug: string
}

interface SuccessStoryRelatedReadsProps {
  relatedReads: RelatedRead[]
}

export default function SuccessStoryRelatedReads({ relatedReads }: SuccessStoryRelatedReadsProps) {
  // Check if relatedReads exists and is an array
  const isValidArray = Array.isArray(relatedReads) && relatedReads.length > 0

  // Debug output
  console.log("Related Reads:", relatedReads)
  console.log("Is valid array:", isValidArray)

  // If relatedReads is not a valid array, return a placeholder
  if (!isValidArray) {
    return (
      <section id="related-reads" className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reads</h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <p className="text-gray-500 italic">No related articles available.</p>
        </div>
      </section>
    )
  }

  // Now we know relatedReads is a valid array, we can safely use map
  return (
    <section id="related-reads" className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Reads</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {relatedReads.map((article: RelatedRead, index: number) => (
          <Link
            key={index}
            href={`/resources/${article.slug}`}
            className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex justify-between items-center"
          >
            <span className="text-gray-900 font-medium">{article.title}</span>
            <ArrowRight className="h-4 w-4 text-green-600" />
          </Link>
        ))}
      </div>
    </section>
  )
}
