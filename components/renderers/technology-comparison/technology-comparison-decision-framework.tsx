import { GitBranch } from "lucide-react"

interface DecisionFrameworkItem {
  factor: string
  question: string
  guidance: string | { [key: string]: string }
}

interface DecisionMatrixItem {
  factor: string
  question: string
  guidance: { [key: string]: string }
}

interface DecisionTable {
  columns: string[]
  rows: Array<{
    Factor: string
    Question: string
    "Tech A Guidance": string
    "Tech B Guidance": string
  }>
}

interface TechnologyComparisonDecisionFrameworkProps {
  framework?: DecisionFrameworkItem[] | null
  items?: DecisionMatrixItem[] | null
  table?: DecisionTable
}

export default function TechnologyComparisonDecisionFramework({
  framework,
  items,
  table,
}: TechnologyComparisonDecisionFrameworkProps) {
  // Use items if provided, otherwise use framework
  const decisionItems = items || framework || []

  // Check if we have any data to display
  const hasItems = decisionItems.length > 0
  const hasTable = table && table.columns && table.columns.length > 0

  if (!hasItems && !hasTable) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <GitBranch className="h-6 w-6 mr-2 text-blue-600" />
          Decision Framework
        </h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <p className="text-gray-500 italic">No decision framework available for this comparison.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <GitBranch className="h-6 w-6 mr-2 text-blue-600" />
        Decision Framework
      </h2>

      {hasItems && (
        <div className="space-y-6 mb-8">
          {decisionItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
                <h3 className="text-lg font-semibold">{item.factor}</h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 font-medium mb-4">{item.question}</p>

                {typeof item.guidance === "string" ? (
                  <div className="bg-gray-50 border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700">{item.guidance}</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(item.guidance).map(([tech, guidance], idx) => (
                      <div
                        key={idx}
                        className={`${
                          idx === 0 ? "bg-blue-50 border border-blue-200" : "bg-purple-50 border border-purple-200"
                        } rounded-lg p-4 shadow-sm`}
                      >
                        <h4
                          className={`text-sm font-medium uppercase tracking-wider mb-2 ${
                            idx === 0 ? "text-blue-800" : "text-purple-800"
                          }`}
                        >
                          {tech}
                        </h4>
                        <p className="text-gray-700">{guidance}</p>
                      </div>
                    ))}
                  </div>
                )}
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.Factor || ""}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.Question || ""}</td>
                  <td className="px-6 py-4 text-sm text-blue-700">{row["Tech A Guidance"] || ""}</td>
                  <td className="px-6 py-4 text-sm text-purple-700">{row["Tech B Guidance"] || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
