import { Lightbulb } from "lucide-react"

interface SuccessStoryCrossIndustryProps {
  insights: any
}

export default function SuccessStoryCrossIndustry({ insights }: SuccessStoryCrossIndustryProps) {
  if (!insights) return null

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Lightbulb className="h-6 w-6 mr-2 text-blue-600" />
        Cross-Industry Insights
      </h2>

      {/* Display insights by industry */}
      {insights.insights && Array.isArray(insights.insights) && (
        <div className="space-y-6 mb-8">
          {insights.insights.map((insight: any, index: number) => (
            <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{insight.industry}</h3>
              <ul className="space-y-2">
                {Array.isArray(insight.recommendations) &&
                  insight.recommendations.map((rec: string, idx: number) => (
                    <li key={idx} className="flex items-start">
                      <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0">
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
                      <span className="text-gray-700">{rec}</span>
                    </li>
                  ))}
              </ul>
            </div>
          ))}
        </div>
      )}

      {/* Display table if available */}
      {insights.table && insights.table.columns && insights.table.rows && (
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-50">
              <tr>
                {insights.table.columns.map((column: string, index: number) => (
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
              {insights.table.rows.map((row: any, rowIndex: number) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.Industry || ""}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.Recommendations || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
