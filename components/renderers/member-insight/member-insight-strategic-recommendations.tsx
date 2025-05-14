import { Lightbulb } from "lucide-react"

interface Recommendation {
  title?: string
  description?: string
  impact?: string
  timeline?: string
  recommendation?: string
  rationale?: string
  implementation?: string
  [key: string]: any
}

interface MemberInsightStrategicRecommendationsProps {
  overview: string
  recommendations: Recommendation[]
}

export default function MemberInsightStrategicRecommendations({
  overview,
  recommendations,
}: MemberInsightStrategicRecommendationsProps) {
  if (!recommendations || recommendations.length === 0) return null

  // Process recommendations to handle different data structures
  const processedRecommendations = recommendations.map((rec) => ({
    title: rec.title || rec.recommendation || "Recommendation",
    description: rec.description || rec.rationale || "",
    impact: rec.impact || rec.implementation || "",
    timeline: rec.timeline || "",
  }))

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Lightbulb className="h-6 w-6 mr-2 text-indigo-600" />
        Strategic Recommendations
      </h2>

      <p className="text-gray-700 mb-6">{overview}</p>

      <div className="space-y-6">
        {processedRecommendations.map((recommendation, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <div className="bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-4 text-white">
              <h3 className="text-lg font-semibold">{recommendation.title}</h3>
            </div>
            <div className="p-6">
              <p className="text-gray-700 mb-4">{recommendation.description}</p>

              <div className="grid md:grid-cols-2 gap-4">
                {recommendation.impact && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-green-800 uppercase tracking-wider mb-2">
                      Expected Impact
                    </h4>
                    <p className="text-gray-700">{recommendation.impact}</p>
                  </div>
                )}

                {recommendation.timeline && (
                  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                    <h4 className="text-sm font-medium text-blue-800 uppercase tracking-wider mb-2">Timeline</h4>
                    <p className="text-gray-700">{recommendation.timeline}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
