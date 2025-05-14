interface MemberInsightAudienceProps {
  whoShouldRead: string
  whyItMatters: string
}

export default function MemberInsightAudience({ whoShouldRead, whyItMatters }: MemberInsightAudienceProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Who Should Read This</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Target Audience</h3>
          <p className="text-gray-700">{whoShouldRead}</p>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Why It Matters</h3>
          <p className="text-gray-700">{whyItMatters}</p>
        </div>
      </div>
    </section>
  )
}
