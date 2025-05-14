interface MemberInsightConclusionProps {
  summary: string
}

export default function MemberInsightConclusion({ summary }: MemberInsightConclusionProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Conclusion</h2>

      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
        <p className="text-gray-700">{summary}</p>
      </div>
    </section>
  )
}
