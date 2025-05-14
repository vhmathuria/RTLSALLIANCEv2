interface MemberInsightInsightOriginProps {
  background: string
  sources: string[]
}

export default function MemberInsightInsightOrigin({ background, sources }: MemberInsightInsightOriginProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Trend or Insight Origin</h2>

      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm mb-6">
        <p className="text-gray-700">{background}</p>
      </div>

      {sources && sources.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Sources</h3>
          <ul className="space-y-2 list-disc pl-5">
            {sources.map((source, index) => (
              <li key={index} className="text-gray-700">
                {source}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  )
}
