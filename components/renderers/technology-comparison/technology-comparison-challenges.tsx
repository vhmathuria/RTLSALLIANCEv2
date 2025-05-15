import { AlertTriangle, ShieldCheck } from "lucide-react"

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
  const hasChallenges = challengeItems && challengeItems.length > 0

  if (!hasChallenges) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <AlertTriangle className="h-6 w-6 mr-2 text-blue-600" />
          Challenges and Mitigations
        </h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-white">
          <p className="text-gray-500 italic">No challenges and mitigations available for this comparison.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <AlertTriangle className="h-6 w-6 mr-2 text-blue-600" />
        Challenges and Mitigations
      </h2>

      {hasChallenges && (
        <div className="space-y-6 mb-8">
          {challengeItems.map((item, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
              <div className="px-6 py-4 border-b border-gray-200 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <AlertTriangle className="h-5 w-5 mr-2 text-blue-600" />
                  {item.challenge}
                </h3>
              </div>
              <div className="p-6 bg-white">
                <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2 flex items-center">
                  <ShieldCheck className="h-4 w-4 mr-2 text-blue-600" />
                  Mitigation Strategy
                </h4>
                <p className="text-gray-700">{item.mitigation}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
