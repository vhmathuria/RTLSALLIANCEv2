import { Building2 } from "lucide-react"

interface IndustryRecommendation {
  industry?: string
  recommendations?: any
}

interface SuccessStoryIndustryRecommendationsProps {
  recommendations: any
}

export default function SuccessStoryIndustryRecommendations({
  recommendations,
}: SuccessStoryIndustryRecommendationsProps) {
  // Function to safely render a single recommendation
  const renderSingleRecommendation = (rec: any, index: number) => {
    // Handle string recommendations
    if (typeof rec === "string") {
      return (
        <div key={index} className="mb-4">
          <p className="text-gray-700">{rec}</p>
        </div>
      )
    }

    // Handle objects with industry and recommendations
    if (rec && typeof rec === "object") {
      const industry = rec.industry || ""
      let recommendationContent = ""

      // Handle different types of recommendation content
      if (typeof rec.recommendations === "string") {
        recommendationContent = rec.recommendations
      } else if (rec.recommendations && typeof rec.recommendations === "object") {
        // Try to extract text from the recommendations object
        const recObj = rec.recommendations
        if (recObj.text) {
          recommendationContent = recObj.text
        } else if (recObj.content) {
          recommendationContent = recObj.content
        } else if (recObj.value) {
          recommendationContent = recObj.value
        } else {
          // If we can't find a suitable property, use a placeholder
          recommendationContent = "See detailed recommendations"
        }
      } else if (Array.isArray(rec.recommendations)) {
        // Join array items with commas
        recommendationContent = rec.recommendations
          .map((item: any) => (typeof item === "string" ? item : "Item"))
          .join(", ")
      }

      return (
        <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
          {industry && <h3 className="font-medium text-blue-800 mb-1">Industry: {industry}</h3>}
          <p className="text-gray-700">{recommendationContent}</p>
        </div>
      )
    }

    // Fallback for other types
    return (
      <div key={index} className="mb-4">
        <p className="text-gray-700">Recommendation {index + 1}</p>
      </div>
    )
  }

  if (!recommendations) {
    return (
      <div className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Building2 className="h-6 w-6 mr-2 text-blue-600" />
          Industry Recommendations
        </h2>
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
          <p className="text-gray-500 italic">No industry recommendations available.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Building2 className="h-6 w-6 mr-2 text-blue-600" />
        Industry Recommendations
      </h2>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-md">
        {/* Handle string recommendations */}
        {typeof recommendations === "string" ? (
          <p className="text-gray-700">{recommendations}</p>
        ) : /* Handle array of recommendations */
        Array.isArray(recommendations) ? (
          <div>{recommendations.map((rec, index) => renderSingleRecommendation(rec, index))}</div>
        ) : /* Handle single object with industry and recommendations */
        recommendations && typeof recommendations === "object" ? (
          renderSingleRecommendation(recommendations, 0)
        ) : (
          /* Fallback for other formats */
          <p className="text-gray-500 italic">Industry recommendations are in an unsupported format.</p>
        )}
      </div>
    </div>
  )
}
