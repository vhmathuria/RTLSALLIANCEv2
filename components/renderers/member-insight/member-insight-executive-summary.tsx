import { Lightbulb } from "lucide-react"

interface MemberInsightExecutiveSummaryProps {
  headline: string
  highlights: string[] | any[]
  keyPoints?: string[] | any[]
}

export default function MemberInsightExecutiveSummary({
  headline,
  highlights,
  keyPoints,
}: MemberInsightExecutiveSummaryProps) {
  // Handle different data structures for highlights
  const processedHighlights = Array.isArray(highlights)
    ? highlights.map((h) => (typeof h === "string" ? h : h.text || h.content || JSON.stringify(h)))
    : typeof highlights === "string"
      ? [highlights]
      : []

  // Handle different data structures for keyPoints
  const processedKeyPoints = Array.isArray(keyPoints)
    ? keyPoints.map((p) => (typeof p === "string" ? p : p.text || p.content || JSON.stringify(p)))
    : typeof keyPoints === "string"
      ? [keyPoints]
      : []

  return (
    <section className="my-12">
      <div className="p-6 bg-indigo-50 rounded-lg border border-indigo-100 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{headline}</h2>
        {processedHighlights.length > 0 && (
          <ul className="space-y-2">
            {processedHighlights.map((highlight, index) => (
              <li key={index} className="flex items-start">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-indigo-600 text-white mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-700">{highlight}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      {processedKeyPoints.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <Lightbulb className="h-5 w-5 mr-2 text-indigo-600" />
            Key Points
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {processedKeyPoints.map((point, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                <p className="text-gray-700">{point}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
