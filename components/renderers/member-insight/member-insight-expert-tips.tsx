import { Lightbulb } from "lucide-react"

interface MemberInsightExpertTipsProps {
  tips: string[]
}

export default function MemberInsightExpertTips({ tips }: MemberInsightExpertTipsProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Expert Tips</h2>

      <div className="bg-amber-50 border border-amber-100 rounded-lg p-6">
        <ul className="space-y-4">
          {tips.map((tip, index) => (
            <li key={index} className="flex items-start">
              <Lightbulb className="h-6 w-6 text-amber-600 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{tip}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
