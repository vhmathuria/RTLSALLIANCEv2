import { BookOpen } from "lucide-react"

interface Reference {
  title: string
  source: string
  link?: string
}

interface MemberInsightReferencesProps {
  references: Reference[]
}

export default function MemberInsightReferences({ references }: MemberInsightReferencesProps) {
  if (!references || references.length === 0) return null

  return (
    <section id="references" className="my-12">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
        <BookOpen className="h-5 w-5 mr-2 text-indigo-600" />
        References
      </h2>
      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 shadow-md">
        <ol className="space-y-3 pl-5">
          {references.map((reference, index) => (
            <li key={index} className="text-gray-700">
              <span className="text-indigo-700 font-medium">{reference.title}</span> -{" "}
              {reference.link ? (
                <a
                  href={reference.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-indigo-600 hover:underline italic"
                >
                  {reference.source}
                </a>
              ) : (
                <span className="italic">{reference.source}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
