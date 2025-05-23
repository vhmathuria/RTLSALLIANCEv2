import { Settings, ListChecks, AlertTriangle } from "lucide-react"

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

  if (!hasConsiderations && !hasTechnologies) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Settings className="h-6 w-6 mr-2 text-blue-600" />
          Deployment Considerations
        </h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
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
            <div key={index} className="border border-gray-200 rounded-lg p-6 shadow-md bg-white">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-blue-600" />
                {item.consideration}
              </h3>
              <p className="text-gray-700">{item.details}</p>
            </div>
          ))}
        </div>
      )}

      {/* Technology-specific deployment considerations */}
      {hasTechnologies && (
        <div className="space-y-6 mb-8">
          {technologies!.map((tech, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
              <div className="px-6 py-3 border-b border-gray-200 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <Settings className="h-5 w-5 mr-2 text-blue-600" />
                  {tech.name}
                </h3>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-3 flex items-center">
                    <ListChecks className="h-4 w-4 mr-2 text-blue-600" />
                    Deployment Steps
                  </h4>
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
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-3 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-2 text-blue-600" />
                    Potential Pitfalls
                  </h4>
                  <ul className="space-y-2">
                    {tech.pitfalls.map((pitfall, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-2 flex-shrink-0 text-xs">
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
    </section>
  )
}
