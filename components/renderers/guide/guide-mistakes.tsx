import { AlertTriangle } from "lucide-react"
import { fixSpecialChars } from "@/lib/utils"

interface GuideMistakesProps {
  mistakes: string[]
}

export default function GuideMistakes({ mistakes }: GuideMistakesProps) {
  if (!mistakes || mistakes.length === 0) return null

  return (
    <section id="mistakes" className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <AlertTriangle className="h-6 w-6 mr-2 text-red-600" />
        Common Mistakes to Avoid
      </h2>
      <div className="bg-red-50 border border-red-200 rounded-lg p-6 shadow-md">
        <ul className="space-y-4">
          {mistakes.map((mistake, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-red-100 text-red-600 mr-3 flex-shrink-0">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              <span className="text-gray-700">{fixSpecialChars(mistake)}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
