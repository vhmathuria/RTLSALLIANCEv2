import { AlertTriangle } from "lucide-react"
import { fixSpecialChars } from "@/lib/utils"

interface Step {
  step: string
  details: string
  challenges: string[]
  visual?: {
    description: string
    link: string
  }
}

interface GuideStepsProps {
  steps: Step[]
}

export default function GuideSteps({ steps }: GuideStepsProps) {
  if (!steps || steps.length === 0) return null

  return (
    <section id="steps" className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Implementation Steps</h2>
      <div className="space-y-8">
        {steps.map((step, index) => (
          <div key={index} className="relative pl-8 pb-8">
            {/* Step number circle */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-blue-600 text-white font-bold shadow-md">
              {index + 1}
            </div>

            {/* Vertical line connecting steps */}
            {index < steps.length - 1 && <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-blue-200"></div>}

            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{fixSpecialChars(step.step)}</h3>
              <p className="text-gray-700 mb-4">{fixSpecialChars(step.details)}</p>

              {step.challenges && step.challenges.length > 0 && (
                <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h4 className="text-sm font-medium text-blue-600 uppercase tracking-wider mb-2 flex items-center">
                    <AlertTriangle className="h-4 w-4 mr-1 text-blue-600" />
                    Potential Challenges
                  </h4>
                  <ul className="space-y-2">
                    {step.challenges.map((challenge, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-2 flex-shrink-0 text-xs">
                          !
                        </span>
                        <span className="text-gray-700">{fixSpecialChars(challenge)}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
