import { TrendingUp } from "lucide-react"

interface KeyResult {
  metric: string
  value: string
  context?: string
}

interface SuccessStoryIntroProps {
  headline: string
  summaryBullets: string[]
  keyResults: KeyResult[]
}

export default function SuccessStoryIntro({ headline, summaryBullets, keyResults }: SuccessStoryIntroProps) {
  return (
    <section className="my-12 w-full">
      <div className="p-6 bg-white rounded-lg border border-gray-200 shadow-md mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">{headline}</h2>
        <ul className="space-y-2">
          {summaryBullets.map((bullet, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-blue-600 text-white mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-gray-700">{bullet}</span>
            </li>
          ))}
        </ul>
      </div>

      {keyResults && keyResults.length > 0 && (
        <div>
          <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
            <TrendingUp className="h-5 w-5 mr-2 text-blue-600" />
            Key Results
          </h3>
          <div className="grid md:grid-cols-3 gap-4">
            {keyResults.map((result, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-4 shadow-md">
                <p className="text-3xl font-bold text-blue-600 mb-2">{result.value}</p>
                <p className="text-sm font-medium text-gray-900">{result.metric}</p>
                {result.context && <p className="text-xs text-gray-500 mt-1">{result.context}</p>}
              </div>
            ))}
          </div>
        </div>
      )}
    </section>
  )
}
