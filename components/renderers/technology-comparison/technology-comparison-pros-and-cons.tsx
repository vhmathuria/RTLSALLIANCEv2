import { ThumbsUp, ThumbsDown } from "lucide-react"

interface ProsAndCons {
  pros: string[]
  cons: string[]
  name?: string
}

interface Technology {
  name: string
  pros: string[]
  cons: string[]
}

interface ProsAndConsTable {
  columns: string[]
  rows: Array<{
    Technology?: string
    Pros?: string
    Cons?: string
  }>
}

interface TechnologyComparisonProsAndConsProps {
  techA?: ProsAndCons
  techB?: ProsAndCons
  techC?: ProsAndCons
  techD?: ProsAndCons
  techNames?: string[]
  technologies?: Technology[]
  table?: ProsAndConsTable
}

export default function TechnologyComparisonProsAndCons({
  techA = { pros: [], cons: [] },
  techB = { pros: [], cons: [] },
  techC = { pros: [], cons: [] },
  techD = { pros: [], cons: [] },
  techNames = [],
  technologies = [],
  table,
}: TechnologyComparisonProsAndConsProps) {
  // Determine which data source to use
  let techData: { name: string; pros: string[]; cons: string[] }[] = []

  if (technologies && technologies.length > 0) {
    // Use the technologies array if provided
    techData = technologies
  } else {
    // Otherwise, use the individual tech objects
    const techAPros = techA?.pros || []
    const techACons = techA?.cons || []
    const techBPros = techB?.pros || []
    const techBCons = techB?.cons || []
    const techCPros = techC?.pros || []
    const techCCons = techC?.cons || []
    const techDPros = techD?.pros || []
    const techDCons = techD?.cons || []

    // Build the techData array
    techData = [
      { name: techA?.name || techNames[0] || "Technology A", pros: techAPros, cons: techACons },
      { name: techB?.name || techNames[1] || "Technology B", pros: techBPros, cons: techBCons },
    ]

    if (techCPros.length > 0 || techCCons.length > 0) {
      techData.push({ name: techC?.name || techNames[2] || "Technology C", pros: techCPros, cons: techCCons })
    }

    if (techDPros.length > 0 || techDCons.length > 0) {
      techData.push({ name: techD?.name || techNames[3] || "Technology D", pros: techDPros, cons: techDCons })
    }
  }

  // Check if we have any data to display
  const hasTechData = techData.length > 0
  const hasTable = table && table.columns && table.columns.length > 0

  if (!hasTechData && !hasTable) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Pros and Cons</h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <p className="text-gray-500 italic">No pros and cons available for this comparison.</p>
        </div>
      </section>
    )
  }

  // Define background colors for each technology
  const getBgColor = (index: number) => {
    const colors = [
      "border-blue-200 bg-blue-600",
      "border-purple-200 bg-purple-600",
      "border-green-200 bg-green-600",
      "border-orange-200 bg-orange-600",
    ]
    return colors[index % colors.length]
  }

  const getTextColor = (index: number) => {
    const colors = ["text-blue-600", "text-purple-600", "text-green-600", "text-orange-600"]
    return colors[index % colors.length]
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Pros and Cons</h2>

      {hasTechData && (
        <div className={`grid md:grid-cols-${Math.min(techData.length, 2)} gap-6 mb-8`}>
          {techData.map((tech, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className={`px-6 py-3 text-white ${getBgColor(index)}`}>
                <h3 className="text-lg font-semibold">{tech.name}</h3>
              </div>
              <div className="p-6">
                <div className="mb-6">
                  <h4
                    className={`text-sm font-medium uppercase tracking-wider mb-3 flex items-center ${getTextColor(
                      index,
                    )}`}
                  >
                    <ThumbsUp className="h-4 w-4 mr-2" />
                    Pros
                  </h4>
                  <ul className="space-y-2">
                    {tech.pros.map((pro, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-green-100 text-green-600 mr-2 flex-shrink-0 text-xs">
                          +
                        </span>
                        <span className="text-gray-700">{pro}</span>
                      </li>
                    ))}
                    {tech.pros.length === 0 && <li className="text-gray-500 italic">No pros specified</li>}
                  </ul>
                </div>
                <div>
                  <h4
                    className={`text-sm font-medium uppercase tracking-wider mb-3 flex items-center ${getTextColor(
                      index,
                    )}`}
                  >
                    <ThumbsDown className="h-4 w-4 mr-2" />
                    Cons
                  </h4>
                  <ul className="space-y-2">
                    {tech.cons.map((con, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-red-100 text-red-600 mr-2 flex-shrink-0 text-xs">
                          -
                        </span>
                        <span className="text-gray-700">{con}</span>
                      </li>
                    ))}
                    {tech.cons.length === 0 && <li className="text-gray-500 italic">No cons specified</li>}
                  </ul>
                </div>
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
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                    {row.Technology || ""}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.Pros || ""}</td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.Cons || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
