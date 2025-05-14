import { Users } from "lucide-react"

interface TechnologyComparisonAudienceProps {
  whoShouldRead: string
  whyItMatters: string
}

export default function TechnologyComparisonAudience({
  whoShouldRead,
  whyItMatters,
}: TechnologyComparisonAudienceProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
        <Users className="h-6 w-6 mr-2 text-blue-600" />
        {whoShouldRead || "Who Should Read This Comparison"}
      </h2>
      <div className="bg-gray-50 p-6 rounded-lg border border-gray-200 shadow-md">
        <p className="text-gray-700">{whyItMatters}</p>
      </div>
    </section>
  )
}
