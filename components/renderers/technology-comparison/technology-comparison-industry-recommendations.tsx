import { Building2, CheckCircle, Lightbulb } from "lucide-react"

interface IndustryRecommendation {
  industry: string
  recommendedTech?: string
  reason?: string
}

interface RecommendationTable {
  columns: string[]
  rows: Array<{
    Industry: string
    "Recommended Tech"?: string
    Reason?: string
  }>
}

interface TechnologyComparisonIndustryRecommendationsProps {
  recommendations?: IndustryRecommendation[] | null
  items?: IndustryRecommendation[] | null
  table?: RecommendationTable
}

export default function TechnologyComparisonIndustryRecommendations({
  recommendations,
  items,
  table,
}: TechnologyComparisonIndustryRecommendationsProps) {
  // Use items if provided, otherwise use recommendations
  const recommendationItems = items || recommendations || []

  // Check if we have any data to display
  const hasRecommendations = recommendationItems && recommendationItems.length > 0

  if (!hasRecommendations) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Building2 className="h-6 w-6 mr-2 text-blue-600" />
          Industry Recommendations
        </h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <p className="text-gray-500 italic">No industry recommendations available for this comparison.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Building2 className="h-6 w-6 mr-2 text-blue-600" />
        Industry Recommendations
      </h2>

      {hasRecommendations && (
        <div className="space-y-6 mb-8">
          {recommendationItems.map((rec, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
              <div className="px-6 py-3 border-b border-gray-200 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Building2 className="h-5 w-5 mr-2 text-blue-600" />
                  {rec.industry}
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2 flex items-center">
                    <CheckCircle className="h-4 w-4 mr-2 text-blue-600" />
                    Recommendation
                  </h4>
                  <p className="text-gray-900 font-medium">{rec.recommendedTech || ""}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2 flex items-center">
                    <Lightbulb className="h-4 w-4 mr-2 text-blue-600" />
                    Rationale
                  </h4>
                  <p className="text-gray-700">{rec.reason || ""}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
