import { Target } from "lucide-react"

interface UseCase {
  useCase?: string
  techAPerformance?: string
  techBPerformance?: string
  techCPerformance?: string
  techDPerformance?: string
  recommendation?: string
  industry?: string
  scenario?: string
  verdict?: {
    recommended?: string
    reason?: string
  }
}

interface UseCaseTable {
  columns: string[]
  rows: Array<{
    Industry?: string
    Scenario?: string
    "Recommended Tech"?: string
    Reason?: string
  }>
}

interface TechnologyComparisonUseCasesProps {
  useCases?: UseCase[] | null
  items?: UseCase[] | null
  table?: UseCaseTable
  techNames?: string[]
}

export default function TechnologyComparisonUseCases({
  useCases,
  items,
  table,
  techNames = [],
}: TechnologyComparisonUseCasesProps) {
  // Use items if provided, otherwise use useCases
  const useCaseItems = items || useCases || []

  // Check if we have any data to display
  const hasUseCases = useCaseItems.length > 0
  const hasTable = table && table.columns && table.columns.length > 0

  if (!hasUseCases && !hasTable) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Target className="h-6 w-6 mr-2 text-blue-600" />
          Use Cases Comparison
        </h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <p className="text-gray-500 italic">No use case comparisons available for this article.</p>
        </div>
      </section>
    )
  }

  // Determine how many technologies we have data for
  const hasTechC = useCaseItems.some((useCase) => useCase.techCPerformance)
  const hasTechD = useCaseItems.some((useCase) => useCase.techDPerformance)

  // Get technology names or use defaults
  const techAName = techNames[0] || "Tech A"
  const techBName = techNames[1] || "Tech B"
  const techCName = techNames[2] || "Tech C"
  const techDName = techNames[3] || "Tech D"

  // Define colors for each technology
  const getTextColor = (index: number) => {
    const colors = ["text-blue-600", "text-purple-600", "text-green-600", "text-orange-600"]
    return colors[index % colors.length]
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Target className="h-6 w-6 mr-2 text-blue-600" />
        Use Cases Comparison
      </h2>

      {/* Standard use cases format */}
      {hasUseCases && useCaseItems[0].techAPerformance && (
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-gray-50">
              <tr>
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Use Case
                </th>
                <th
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${getTextColor(0)}`}
                >
                  {techAName}
                </th>
                <th
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${getTextColor(1)}`}
                >
                  {techBName}
                </th>
                {hasTechC && (
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${getTextColor(2)}`}
                  >
                    {techCName}
                  </th>
                )}
                {hasTechD && (
                  <th
                    scope="col"
                    className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${getTextColor(3)}`}
                  >
                    {techDName}
                  </th>
                )}
                <th
                  scope="col"
                  className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                >
                  Recommendation
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {useCaseItems.map((useCase, index) => (
                <tr key={index} className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {useCase.useCase || ""}
                  </td>
                  <td className={`px-6 py-4 text-sm ${getTextColor(0)}`}>{useCase.techAPerformance || ""}</td>
                  <td className={`px-6 py-4 text-sm ${getTextColor(1)}`}>{useCase.techBPerformance || ""}</td>
                  {hasTechC && (
                    <td className={`px-6 py-4 text-sm ${getTextColor(2)}`}>{useCase.techCPerformance || ""}</td>
                  )}
                  {hasTechD && (
                    <td className={`px-6 py-4 text-sm ${getTextColor(3)}`}>{useCase.techDPerformance || ""}</td>
                  )}
                  <td className="px-6 py-4 text-sm text-gray-700">{useCase.recommendation || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Alternative use cases format with industry/scenario */}
      {hasUseCases && useCaseItems[0].industry && (
        <div className="space-y-6 mb-8">
          {useCaseItems.map((useCase, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-white">
                <h3 className="text-lg font-semibold">{useCase.industry}</h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">Scenario</h4>
                  <p className="text-gray-900 font-medium">{useCase.scenario || ""}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">Recommended</h4>
                  <p className="text-gray-900 font-medium">{useCase.verdict?.recommended || ""}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">Reason</h4>
                  <p className="text-gray-700">{useCase.verdict?.reason || ""}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Table format */}
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
                  <td className="px-6 py-4 text-sm text-gray-700">{row.Scenario || ""}</td>
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
