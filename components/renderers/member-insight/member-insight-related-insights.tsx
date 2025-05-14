import Link from "next/link"
import { ArrowRight } from "lucide-react"

interface RelatedInsight {
  title: string
  slug: string
  description?: string
}

interface MemberInsightRelatedInsightsProps {
  relatedInsights: RelatedInsight[]
}

export default function MemberInsightRelatedInsights({ relatedInsights }: MemberInsightRelatedInsightsProps) {
  if (!relatedInsights || relatedInsights.length === 0) return null

  return (
    <section id="related-insights" className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Related Insights</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {relatedInsights.map((insight, index) => (
          <Link
            key={index}
            href={`/resources/${insight.slug}`}
            className="border border-gray-200 rounded-lg p-5 hover:shadow-md transition-shadow flex flex-col"
          >
            <div className="flex justify-between items-start mb-2">
              <h3 className="text-lg font-medium text-gray-900">{insight.title}</h3>
              <ArrowRight className="h-4 w-4 text-indigo-600 mt-1 flex-shrink-0" />
            </div>
            {insight.description && <p className="text-gray-600 text-sm">{insight.description}</p>}
          </Link>
        ))}
      </div>
    </section>
  )
}
