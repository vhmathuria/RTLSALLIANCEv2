import Image from "next/image"
import { Clock, AlertTriangle } from "lucide-react"

interface Phase {
  name: string
  description: string
  duration: string
}

interface SuccessStoryImplementationProps {
  timeline: string
  phases: Phase[]
  challenges: string[]
  teamStructure: string
  image?: string
}

export default function SuccessStoryImplementation({
  timeline,
  phases,
  challenges,
  teamStructure,
  image,
}: SuccessStoryImplementationProps) {
  return (
    <section className="my-12 w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Clock className="h-6 w-6 mr-2 text-blue-600" />
        Implementation
      </h2>

      <div className={image ? "grid md:grid-cols-2 gap-8" : "w-full"}>
        <div className="w-full">
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Timeline Overview</h3>
            <p className="text-gray-700">{timeline}</p>
          </div>

          {phases && phases.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Implementation Phases</h3>
              <div className="relative pl-8">
                {phases.map((phase, index) => (
                  <div key={index} className="mb-6 relative">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 w-6 h-6 rounded-full bg-blue-600 -ml-8 flex items-center justify-center text-white text-xs font-bold">
                      {index + 1}
                    </div>

                    {/* Timeline line */}
                    {index < phases.length - 1 && (
                      <div className="absolute left-0 top-6 bottom-0 w-0.5 bg-blue-200 -ml-5"></div>
                    )}

                    <h4 className="font-medium text-gray-900 mb-1 flex items-center">
                      {phase.name}
                      <span className="ml-2 text-xs text-gray-500">({phase.duration})</span>
                    </h4>
                    <p className="text-gray-700 text-sm">{phase.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {challenges && challenges.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-blue-600" />
                Implementation Challenges
              </h3>
              <ul className="space-y-2">
                {challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-blue-600 mr-3 flex-shrink-0">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span className="text-gray-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {teamStructure && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Team Structure</h3>
              <p className="text-gray-700">{teamStructure}</p>
            </div>
          )}
        </div>

        {image && (
          <div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
              <Image
                src={image || "/placeholder.svg"}
                alt="Implementation visualization"
                fill
                className="object-cover"
              />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
