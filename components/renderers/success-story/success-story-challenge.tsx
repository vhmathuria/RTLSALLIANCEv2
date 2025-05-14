import Image from "next/image"
import { AlertTriangle } from "lucide-react"

interface SuccessStoryChallengeProps {
  overview: string
  painPoints: string[]
  businessImpact: string
  previousSolutions: string
  image?: string
}

export default function SuccessStoryChallenge({
  overview,
  painPoints,
  businessImpact,
  previousSolutions,
  image,
}: SuccessStoryChallengeProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <AlertTriangle className="h-6 w-6 mr-2 text-amber-600" />
        The Challenge
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 mb-6">{overview}</p>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Pain Points</h3>
            <ul className="space-y-2">
              {painPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-amber-100 text-amber-600 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{point}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Impact</h3>
            <p className="text-gray-700">{businessImpact}</p>
          </div>

          {previousSolutions && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Previous Solutions Attempted</h3>
              <p className="text-gray-700">{previousSolutions}</p>
            </div>
          )}
        </div>

        {image && (
          <div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
              <Image src={image || "/placeholder.svg"} alt="Challenge visualization" fill className="object-cover" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
