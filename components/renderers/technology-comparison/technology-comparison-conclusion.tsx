import { CheckCircle } from "lucide-react"

interface TechnologyComparisonConclusionProps {
  summary: string
}

export default function TechnologyComparisonConclusion({ summary }: TechnologyComparisonConclusionProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <CheckCircle className="h-6 w-6 mr-2 text-blue-600" />
        Conclusion
      </h2>
      <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 shadow-md">
        <p className="text-gray-700">{summary}</p>
      </div>
    </section>
  )
}
