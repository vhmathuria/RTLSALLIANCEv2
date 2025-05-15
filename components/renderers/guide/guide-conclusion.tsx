import { CheckCircle } from "lucide-react"
import { fixSpecialChars } from "@/lib/utils"

interface GuideConclusionProps {
  summary: string
}

export default function GuideConclusion({ summary }: GuideConclusionProps) {
  if (!summary) return null

  return (
    <section id="conclusion" className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <CheckCircle className="h-6 w-6 mr-2 text-blue-600" />
        Conclusion
      </h2>
      <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-md">
        <p className="text-gray-700">{fixSpecialChars(summary)}</p>
      </div>
    </section>
  )
}
