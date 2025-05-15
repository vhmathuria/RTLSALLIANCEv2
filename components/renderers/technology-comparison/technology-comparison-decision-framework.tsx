import { GitBranch, HelpCircle, Check, X } from "lucide-react"

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
  const hasItems = decisionItems && decisionItems.length > 0

  if (!hasItems) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <GitBranch className="h-6 w-6 mr-2 text-blue-600" />
          Decision Framework
        </h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
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
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
              <div className="px-6 py-4 border-b border-gray-200 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <GitBranch className="h-5 w-5 mr-2 text-blue-600" />
                  {item.factor}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-700 font-medium mb-4 flex items-start">
                  <HelpCircle className="h-5 w-5 mr-2 text-blue-600 flex-shrink-0 mt-0.5" />
                  <span>{item.question}</span>
                </p>

                {typeof item.guidance === "string" ? (
                  <div className="bg-white border border-gray-200 rounded-lg p-4">
                    <p className="text-gray-700">{item.guidance}</p>
                  </div>
                ) : (
                  <div className="grid md:grid-cols-2 gap-4">
                    {Object.entries(item.guidance).map(([tech, guidance], idx) => (
                      <div key={idx} className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                        <h4 className="text-sm font-medium uppercase tracking-wider mb-2 text-blue-600 flex items-center">
                          {guidance.toLowerCase().includes("yes") || guidance.toLowerCase().includes("recommended") ? (
                            <Check className="h-4 w-4 mr-2 text-blue-600" />
                          ) : guidance.toLowerCase().includes("no") || guidance.toLowerCase().includes("not") ? (
                            <X className="h-4 w-4 mr-2 text-blue-600" />
                          ) : (
                            <GitBranch className="h-4 w-4 mr-2 text-blue-600" />
                          )}
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
    </section>
  )
}
