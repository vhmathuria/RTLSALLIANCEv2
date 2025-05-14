interface NarrativeBox {
  title: string
  content: string
}

interface MemberInsightKeyInsightsProps {
  narrativeBox: NarrativeBox | null
}

export default function MemberInsightKeyInsights({ narrativeBox }: MemberInsightKeyInsightsProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Key Insights</h2>

      {narrativeBox && (
        <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">{narrativeBox.title}</h3>
          <p className="text-gray-700">{narrativeBox.content}</p>
        </div>
      )}
    </section>
  )
}
