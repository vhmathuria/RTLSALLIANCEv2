import { Lightbulb } from "lucide-react"

interface KeyInsightsTable {
  columns: string[]
  rows: Array<{
    Insight: string
    Detail: string
    Impact: string
  }>
}

interface NarrativeBox {
  title: string
  content: string
}

interface TechnologyComparisonKeyInsightsProps {
  table?: KeyInsightsTable
  narrativeBox?: NarrativeBox
}

export default function TechnologyComparisonKeyInsights({
  table = { columns: [], rows: [] },
  narrativeBox = { title: "", content: "" },
}: TechnologyComparisonKeyInsightsProps) {
  // Ensure columns and rows exist
  const columns = table?.columns || []
  const rows = table?.rows || []

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Lightbulb className="h-6 w-6 mr-2 text-blue-600" />
        Key Insights
      </h2>

      {/* Key Insights Table */}
      {columns.length > 0 && rows.length > 0 && (
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-50">
              <tr>
                {columns.map((column, index) => (
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
              {rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.Insight || ""}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{row.Detail || ""}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{row.Impact || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Narrative Box */}
      {narrativeBox && (narrativeBox.title || narrativeBox.content) && (
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg p-6 shadow-md">
          <h3 className="text-xl font-bold mb-3">{narrativeBox.title || "Key Insight"}</h3>
          <p>{narrativeBox.content || ""}</p>
        </div>
      )}
    </section>
  )
}
