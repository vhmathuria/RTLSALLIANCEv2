import { BarChart2 } from "lucide-react"

interface TechnologyComparisonTableProps {
  technologies: string[]
  features: Record<string, string[]>
}

export default function TechnologyComparisonTable({
  technologies = [],
  features = {},
}: TechnologyComparisonTableProps) {
  // If no technologies or features, don't render the section
  if (!technologies || technologies.length === 0 || !features || Object.keys(features).length === 0) {
    return null
  }

  // Generate background colors for technology columns
  const getColumnColor = (index: number) => {
    const colors = ["text-blue-600", "text-purple-600", "text-green-600", "text-orange-600", "text-red-600"]
    return colors[index % colors.length]
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <BarChart2 className="h-6 w-6 mr-2 text-blue-600" />
        Comparison Table
      </h2>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg shadow-md">
          <thead className="bg-gray-50">
            <tr>
              <th
                scope="col"
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Feature
              </th>
              {technologies.map((tech, index) => (
                <th
                  key={index}
                  scope="col"
                  className={`px-6 py-3 text-left text-xs font-medium uppercase tracking-wider ${getColumnColor(index)}`}
                >
                  {tech}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {Object.entries(features).map(([feature, values], rowIndex) => (
              <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{feature}</td>
                {(values || []).map((value, colIndex) => (
                  <td key={colIndex} className={`px-6 py-4 text-sm ${getColumnColor(colIndex)}`}>
                    {value || "-"}
                  </td>
                ))}
                {/* Add empty cells if values array is shorter than technologies array */}
                {values &&
                  values.length < technologies.length &&
                  Array(technologies.length - values.length)
                    .fill("")
                    .map((_, i) => (
                      <td key={`empty-${i}`} className="px-6 py-4 text-sm text-gray-500">
                        -
                      </td>
                    ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
