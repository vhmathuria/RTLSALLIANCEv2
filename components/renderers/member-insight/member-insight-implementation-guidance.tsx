import { CheckSquare, BookOpen } from "lucide-react"

interface ImplementationStep {
  step: string
  description: string
  considerations: string[]
}

interface Resource {
  title: string
  type: string
  link: string
}

interface MemberInsightImplementationGuidanceProps {
  steps: ImplementationStep[]
  resources?: Resource[]
}

export default function MemberInsightImplementationGuidance({
  steps,
  resources,
}: MemberInsightImplementationGuidanceProps) {
  if (!steps || steps.length === 0) return null

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <CheckSquare className="h-6 w-6 mr-2 text-indigo-600" />
        Implementation Guidance
      </h2>

      <div className="space-y-8 mb-8">
        {steps.map((step, index) => (
          <div key={index} className="relative pl-8 pb-8">
            {/* Step number circle */}
            <div className="absolute left-0 top-0 flex items-center justify-center w-8 h-8 rounded-full bg-gradient-to-r from-indigo-500 to-indigo-700 text-white font-bold shadow-md">
              {index + 1}
            </div>

            {/* Vertical line connecting steps */}
            {index < steps.length - 1 && <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-indigo-200"></div>}

            <div className="ml-4">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{step.step}</h3>
              <p className="text-gray-700 mb-4">{step.description}</p>

              {step.considerations && step.considerations.length > 0 && (
                <div className="bg-gray-50 border border-gray-200 rounded-lg p-4 shadow-sm">
                  <h4 className="text-sm font-medium text-gray-800 uppercase tracking-wider mb-2">
                    Key Considerations
                  </h4>
                  <ul className="space-y-2">
                    {step.considerations.map((consideration, idx) => (
                      <li key={idx} className="flex items-start">
                        <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 mr-2 flex-shrink-0 text-xs">
                          •
                        </span>
                        <span className="text-gray-700">{consideration}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {resources && resources.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
            <BookOpen className="h-5 w-5 mr-2 text-indigo-600" />
            Helpful Resources
          </h3>
          <div className="grid md:grid-cols-2 gap-4">
            {resources.map((resource, index) => (
              <a
                key={index}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow flex flex-col"
              >
                <h4 className="text-indigo-600 font-medium mb-1">{resource.title}</h4>
                <span className="text-sm text-gray-500">{resource.type}</span>
              </a>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
