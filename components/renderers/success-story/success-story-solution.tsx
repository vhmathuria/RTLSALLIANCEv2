import Image from "next/image"
import { Lightbulb } from "lucide-react"

interface Technology {
  name: string
  description: string
}

interface SuccessStorySolutionProps {
  overview: string
  technologies: Technology[]
  approach: string
  uniqueValue: string
  image?: string
}

export default function SuccessStorySolution({
  overview,
  technologies,
  approach,
  uniqueValue,
  image,
}: SuccessStorySolutionProps) {
  return (
    <section className="my-12 w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Lightbulb className="h-6 w-6 mr-2 text-blue-600" />
        The Solution
      </h2>

      <div className={image ? "grid md:grid-cols-2 gap-8" : "w-full"}>
        <div className="w-full">
          <p className="text-gray-700 mb-6">{overview}</p>

          {technologies && technologies.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technologies Implemented</h3>
              <div className="space-y-4">
                {technologies.map((tech, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
                    <h4 className="font-medium text-gray-900 mb-1">{tech.name}</h4>
                    <p className="text-gray-700 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Implementation Approach</h3>
            <p className="text-gray-700">{approach}</p>
          </div>

          {uniqueValue && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Unique Value Proposition</h3>
              <p className="text-gray-700">{uniqueValue}</p>
            </div>
          )}
        </div>

        {image && (
          <div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
              <Image src={image || "/placeholder.svg"} alt="Solution visualization" fill className="object-cover" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
