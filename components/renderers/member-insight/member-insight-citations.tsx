interface Citation {
  ref: string
  topic: string
}

interface MemberInsightCitationsProps {
  citations: Citation[]
}

export default function MemberInsightCitations({ citations }: MemberInsightCitationsProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Citations</h2>

      <div className="bg-white border border-gray-200 rounded-lg overflow-hidden">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Reference
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Topic</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {citations.map((citation, index) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{citation.ref}</td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{citation.topic}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
