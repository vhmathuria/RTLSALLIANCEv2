import Image from "next/image"
import { TrendingUp, AlertTriangle } from "lucide-react"

interface MemberInsightBusinessContextProps {
  overview: string
  challenges: string[] | any[]
  opportunities: string[] | any[]
  marketTrends?: string[] | any[]
  image?: string
}

export default function MemberInsightBusinessContext({
  overview,
  challenges,
  opportunities,
  marketTrends,
  image,
}: MemberInsightBusinessContextProps) {
  // Process arrays to handle different data structures
  const processArray = (arr: any[]): string[] => {
    if (!Array.isArray(arr)) return []

    return arr.map((item) => {
      if (typeof item === "string") return item
      if (item && typeof item === "object") {
        return item.text || item.content || item.description || JSON.stringify(item)
      }
      return String(item)
    })
  }

  const processedChallenges = processArray(challenges)
  const processedOpportunities = processArray(opportunities)
  const processedMarketTrends = marketTrends ? processArray(marketTrends) : []

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Business Context</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 mb-6">{overview}</p>

          {processedChallenges.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-amber-600" />
                Key Challenges
              </h3>
              <ul className="space-y-2">
                {processedChallenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600 mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {processedOpportunities.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <TrendingUp className="h-5 w-5 mr-2 text-green-600" />
                Opportunities
              </h3>
              <ul className="space-y-2">
                {processedOpportunities.map((opportunity, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{opportunity}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {processedMarketTrends.length > 0 && (
            <div className="mt-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Market Trends</h3>
              <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                <ul className="space-y-2">
                  {processedMarketTrends.map((trend, index) => (
                    <li key={index} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 mr-2 flex-shrink-0 text-xs">
                        {index + 1}
                      </span>
                      <span className="text-gray-700">{trend}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )}
        </div>

        {image && (
          <div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src={image || "/placeholder.svg"}
                alt="Business context visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
