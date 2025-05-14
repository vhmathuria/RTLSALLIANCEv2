import { AlertTriangle } from "lucide-react"

interface Challenge {
  challenge: string
  mitigation: string
}

interface ChallengeTable {
  columns: string[]
  rows: Array<{
    Challenge: string
    Mitigation: string
  }>
}

interface TechnologyComparisonChallengesProps {
  challenges?: Challenge[] | null
  items?: Challenge[] | null
  table?: ChallengeTable
}

export default function TechnologyComparisonChallenges({
  challenges,
  items,
  table,
}: TechnologyComparisonChallengesProps) {
  // Use items if provided, otherwise use challenges
  const challengeItems = items || challenges || []

  // Check if we have any data to display
  const hasChallenges = challengeItems.length > 0
  const hasTable = table && table.columns && table.columns.length > 0

  if (!hasChallenges && !hasTable) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <AlertTriangle className="h-6 w-6 mr-2 text-red-600" />
          Challenges and Mitigations
        </h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <p className="text-gray-500 italic">No challenges and mitigations available for this comparison.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <AlertTriangle className="h-6 w-6 mr-2 text-red-600" />
        Challenges and Mitigations
      </h2>

      {hasChallenges && (
        <div className="space-y-6 mb-8">
          {challengeItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="bg-red-50 px-6 py-4 border-b border-red-200">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                  {item.challenge}
                </h3>
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">Mitigation Strategy</h4>
                <p className="text-gray-700">{item.mitigation}</p>
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
                    {row.Challenge || ""}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-700">{row.Mitigation || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </section>
  )
}
