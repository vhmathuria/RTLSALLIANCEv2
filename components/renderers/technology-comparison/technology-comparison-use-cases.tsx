import { Target, Crosshair, CheckCircle2, Lightbulb } from "lucide-react"

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
  const hasUseCases = useCaseItems && useCaseItems.length > 0
  const hasStandardUseCases = hasUseCases && useCaseItems[0].techAPerformance
  const hasAlternativeUseCases = hasUseCases && useCaseItems[0].industry

  if (!hasUseCases) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Target className="h-6 w-6 mr-2 text-blue-600" />
          Use Cases Comparison
        </h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <p className="text-gray-500 italic">No use case comparisons available for this article.</p>
        </div>
      </section>
    )
  }

  // Determine how many technologies we have data for
  const hasTechC = hasStandardUseCases && useCaseItems.some((useCase) => useCase.techCPerformance)
  const hasTechD = hasStandardUseCases && useCaseItems.some((useCase) => useCase.techDPerformance)

  // Get technology names or use defaults
  const techAName = techNames[0] || "Tech A"
  const techBName = techNames[1] || "Tech B"
  const techCName = techNames[2] || "Tech C"
  const techDName = techNames[3] || "Tech D"

  // Define colors for each technology
  const getTextColor = (index: number) => {
    const colors = ["text-blue-600", "text-blue-600", "text-blue-600", "text-blue-600"]
    return colors[index % colors.length]
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Target className="h-6 w-6 mr-2 text-blue-600" />
        Use Cases Comparison
      </h2>

      {/* Standard use cases format */}
      {hasStandardUseCases && (
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg shadow-md">
            <thead className="bg-white">
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
      {hasAlternativeUseCases && (
        <div className="space-y-6 mb-8">
          {useCaseItems.map((useCase, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
              <div className="px-6 py-3 border-b border-gray-200 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Target className="h-5 w-5 mr-2 text-blue-600" />
                  {useCase.industry}
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2 flex items-center">
                    <Crosshair className="h-4 w-4 mr-2 text-blue-600" />
                    Scenario
                  </h4>
                  <p className="text-gray-900 font-medium">{useCase.scenario || ""}</p>
                </div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2 flex items-center">
                    <CheckCircle2 className="h-4 w-4 mr-2 text-blue-600" />
                    Recommended
                  </h4>
                  <p className="text-gray-900 font-medium">{useCase.verdict?.recommended || ""}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2 flex items-center">
                    <Lightbulb className="h-4 w-4 mr-2 text-blue-600" />
                    Reason
                  </h4>
                  <p className="text-gray-700">{useCase.verdict?.reason || ""}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
