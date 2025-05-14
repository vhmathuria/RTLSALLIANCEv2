import { Settings } from "lucide-react"

interface DeploymentConsideration {
  consideration?: string
  details?: string
}

interface TechnologyDeployment {
  name: string
  steps: string[]
  pitfalls: string[]
}

interface DeploymentTable {
  columns: string[]
  rows: Array<{
    Technology?: string
    Steps?: string
    Pitfalls?: string
  }>
}

interface TechnologyComparisonDeploymentProps {
  considerations?: DeploymentConsideration[] | null
  technologies?: TechnologyDeployment[] | null
  table?: DeploymentTable
}

export default function TechnologyComparisonDeployment({
  considerations,
  technologies,
  table,
}: TechnologyComparisonDeploymentProps) {
  // Check if we have any data to display
  const hasConsiderations = Array.isArray(considerations) && considerations.length > 0
  const hasTechnologies = Array.isArray(technologies) && technologies.length > 0
  const hasTable = table && table.columns && table.columns.length > 0

  if (!hasConsiderations && !hasTechnologies && !hasTable) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Settings className="h-6 w-6 mr-2 text-blue-600" />
          Deployment Considerations
        </h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <p className="text-gray-500 italic">No deployment considerations available for this comparison.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Settings className="h-6 w-6 mr-2 text-blue-600" />
        Deployment Considerations
      </h2>

      {/* Standard considerations format */}
      {hasConsiderations && (
        <div className="space-y-6 mb-8">
          {considerations!.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-md">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.consideration}</h3>
              <p className="text-gray-700">{item.details}</p>
            </div>
          ))}
        </div>
      )}

      {/* Technology-specific deployment considerations */}
      {hasTechnologies && (
        <div className="space-y-6 mb-8">
          {technologies!.map((tech, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div
                className={`px-6 py-3 text-white ${
                  index === 0 ? "bg-blue-600" : index === 1 ? "bg-purple-600" : "bg-green-600"
                }`}
              >
                <h3 className="text-lg font-semibold">{tech.name}</h3>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-3">Deployment Steps</h4>
                  <ul className="space-y-2">
                    {tech.steps.map((step, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-2 flex-shrink-0 text-xs">
                          {idx + 1}
                        </span>
                        <span className="text-gray-700">{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-red-600 uppercase tracking-wider mb-3">Potential Pitfalls</h4>
                  <ul className="space-y-2">
                    {tech.pitfalls.map((pitfall, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-600 mr-2 flex-shrink-0 text-xs">
                          !
                        </span>
                        <span className="text-gray-700">{pitfall}</span>
                      </li>
                    ))}
                  </ul>
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
                    {row.Technology || ""}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.Steps || ""}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.Pitfalls || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
