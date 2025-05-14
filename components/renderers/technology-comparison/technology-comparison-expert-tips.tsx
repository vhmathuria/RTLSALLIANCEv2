import { Lightbulb } from "lucide-react"

interface TechnologyComparisonExpertTipsProps {
  tips: string[] | null | undefined
}

export default function TechnologyComparisonExpertTips({ tips }: TechnologyComparisonExpertTipsProps) {
  // Check if tips is an array and has items
  const hasTips = Array.isArray(tips) && tips.length > 0

  if (!hasTips) {
    return (
      <section className="my-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
          <Lightbulb className="h-6 w-6 mr-2 text-green-600" />
          Expert Tips
        </h2>
        <div className="border border-gray-200 rounded-lg p-6 bg-gray-50">
          <p className="text-gray-500 italic">No expert tips available for this comparison.</p>
        </div>
      </section>
    )
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <Lightbulb className="h-6 w-6 mr-2 text-green-600" />
        Expert Tips
      </h2>
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 shadow-md">
        <ul className="space-y-4">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-green-100 text-green-600 mr-3 flex-shrink-0">
                <Lightbulb className="h-4 w-4" />
              </span>
              <span className="text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
