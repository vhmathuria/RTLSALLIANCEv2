interface Concept {
  term: string
  definition: string
  example: string
  visual?: {
    description: string
    link: string
  }
}

interface MemberInsightCoreConceptsProps {
  concepts: Concept[]
}

export default function MemberInsightCoreConcepts({ concepts }: MemberInsightCoreConceptsProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Core Concepts</h2>

      <div className="space-y-8">
        {concepts.map((concept, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-indigo-600 px-6 py-3">
              <h3 className="text-lg font-semibold text-white">{concept.term}</h3>
            </div>
            <div className="p-6">
              <div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Definition</h4>
                  <p className="text-gray-700">{concept.definition}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Example</h4>
                  <p className="text-gray-700">{concept.example}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
