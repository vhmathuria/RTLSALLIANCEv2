import Image from "next/image"
import { Lightbulb, BookOpen, ImageIcon } from "lucide-react"
import { fixSpecialChars } from "@/lib/utils"

interface Concept {
  term: string
  definition: string
  example: string
  visual?: {
    description: string
    link: string
  }
}

interface GuideConceptsProps {
  concepts: Concept[]
}

export default function GuideConcepts({ concepts }: GuideConceptsProps) {
  if (!concepts || concepts.length === 0) return null

  return (
    <section id="concepts" className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Lightbulb className="h-6 w-6 mr-2 text-blue-600" />
        Core Concepts
      </h2>
      <div className="space-y-8">
        {concepts.map((concept, index) => (
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white p-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">{fixSpecialChars(concept.term)}</h3>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <div className="mb-4">
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2 flex items-center">
                    <BookOpen className="h-4 w-4 mr-1" />
                    Definition
                  </h4>
                  <p className="text-gray-700">{fixSpecialChars(concept.definition)}</p>
                </div>
                <div>
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2">Example</h4>
                  <p className="text-gray-700">{fixSpecialChars(concept.example)}</p>
                </div>
              </div>
              {concept.visual && (
                <div>
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2 flex items-center">
                  </h4>
                  <figure className="relative w-full max-w-[600px] mx-auto rounded-lg shadow-md" style={{ aspectRatio: "1/1" }}>
                    <Image
                      src={concept.visual.link || "/placeholder.svg"}
                      alt={concept.visual.description || `Visualization of ${concept.term}`}
                      layout="responsive"
                      width={800}
                      height={800}
                      className="object-contain"
                    />
                  </figure>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
