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
          <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
            <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-4 text-white">
              <h3 className="text-xl font-semibold">{fixSpecialChars(concept.term)}</h3>
            </div>
            <div className="p-6">
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
                      <ImageIcon className="h-4 w-4 mr-1" />
                      Visual
                    </h4>
                    <figure className="relative h-48 w-full overflow-hidden rounded-lg shadow-md">
                      <Image
                        src={concept.visual.link || "/placeholder.svg"}
                        alt={concept.visual.description || `Visualization of ${concept.term}`}
                        fill
                        className="object-cover"
                      />
                      <figcaption className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs p-2">
                        {fixSpecialChars(concept.visual.description || `Visualization of ${concept.term}`)}
                      </figcaption>
                    </figure>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
