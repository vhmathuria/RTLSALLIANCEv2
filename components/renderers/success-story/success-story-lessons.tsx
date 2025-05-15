import { BookOpen, CheckCircle } from "lucide-react"

interface SuccessStoryLessonsProps {
  overview: string
  keyLessons: string[]
  bestPractices: string[]
}

export default function SuccessStoryLessons({ overview, keyLessons, bestPractices }: SuccessStoryLessonsProps) {
  // Only render if we have at least some content
  const hasContent = overview || (keyLessons && keyLessons.length > 0) || (bestPractices && bestPractices.length > 0)

  if (!hasContent) {
    return (
      <div className="my-12 w-full">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
          Key Takeaways
        </h2>
        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
          <p className="text-gray-500 italic">No key takeaways available.</p>
        </div>
      </div>
    )
  }

  return (
    <section className="my-12 w-full">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <BookOpen className="h-6 w-6 mr-2 text-blue-600" />
        {keyLessons && keyLessons.length > 0 ? "Key Takeaways" : "Lessons Learned"}
      </h2>

      {overview && <p className="text-gray-700 mb-6">{overview}</p>}

      <div className="grid md:grid-cols-2 gap-8">
        {keyLessons && keyLessons.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Points</h3>
            <ul className="space-y-3">
              {keyLessons.map((lesson, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-blue-600 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                      <path
                        fillRule="evenodd"
                        d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{lesson}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {bestPractices && bestPractices.length > 0 && (
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
              <CheckCircle className="h-5 w-5 mr-2 text-blue-600" />
              Best Practices
            </h3>
            <ul className="space-y-3">
              {bestPractices.map((practice, index) => (
                <li key={index} className="flex items-start">
                  <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-white border border-gray-200 text-blue-600 mr-3 flex-shrink-0">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-gray-700">{practice}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </section>
  )
}
