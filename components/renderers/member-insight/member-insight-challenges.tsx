interface Challenge {
  challenge: string
  mitigation: string
}

interface TableData {
  columns: string[]
  rows: Record<string, string>[]
}

interface MemberInsightChallengesProps {
  items: Challenge[]
  table: TableData | null // Keep the prop but don't use it
}

export default function MemberInsightChallenges({ items, table }: MemberInsightChallengesProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Challenges and Mitigations</h2>

      <div className="space-y-6">
        {items.map((item, index) => (
          <div key={index} className="grid md:grid-cols-2 gap-4">
            <div className="bg-red-50 border border-red-100 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-red-800 mb-2">Challenge</h3>
              <p className="text-gray-700">{item.challenge}</p>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-lg p-5">
              <h3 className="text-lg font-semibold text-green-800 mb-2">Mitigation</h3>
              <p className="text-gray-700">{item.mitigation}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
