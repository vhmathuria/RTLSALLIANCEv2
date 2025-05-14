import { BookOpen } from "lucide-react"

interface Citation {
  ref: string
  source: string
}

interface SuccessStoryCitationsProps {
  citations: Citation[]
}

export default function SuccessStoryCitations({ citations }: SuccessStoryCitationsProps) {
  if (!citations || citations.length === 0) return null

  return (
    <section id="citations" className="my-12">
      <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
        <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
        Citations
      </h2>
      <div className="border border-gray-200 rounded-lg p-6 bg-gray-50 shadow-md">
        <ol className="space-y-3 pl-5">
          {citations.map((citation, index) => (
            <li key={index} className="text-gray-700">
              <span className="text-blue-700">{citation.ref.replace(/^\[\d+\]\s*/, "")}</span> -{" "}
              <span className="italic">{citation.source}</span>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
