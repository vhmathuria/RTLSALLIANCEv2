import { Building2 } from "lucide-react"

interface IndustryRecommendation {
  industry: string
  recommendation?: string
  rationale?: string
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
  const hasRecommendations = recommendationItems.length > 0
  const hasTable = table && table.columns && table.columns.length > 0

  if (!hasRecommendations && !hasTable) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Building2 className="h-6 w-6 mr-2 text-blue-600" />
          Industry Recommendations
        </h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
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
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-white">
                <h3 className="text-lg font-semibold">{rec.industry}</h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">Recommendation</h4>
                  <p className="text-gray-900 font-medium">{rec.recommendedTech || rec.recommendation || ""}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">Rationale</h4>
                  <p className="text-gray-700">{rec.reason || rec.rationale || ""}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {hasTable && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-50">
              <tr>
                {table.columns.map((column, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.Industry || ""}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row["Recommended Tech"] || ""}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.Reason || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
