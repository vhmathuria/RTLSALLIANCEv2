import Image from "next/image"
import { BarChart2 } from "lucide-react"

interface Finding {
  metric?: string
  value?: string
  insight?: string
  title?: string
  data?: string
  description?: string
  [key: string]: any
}

interface Visualization {
  type?: string
  data?: any
  description?: string
  imageUrl?: string
  title?: string
  image?: string
  [key: string]: any
}

interface MemberInsightDataAnalysisProps {
  overview: string
  findings: Finding[]
  visualization?: Visualization | null
}

export default function MemberInsightDataAnalysis({
  overview,
  findings,
  visualization,
}: MemberInsightDataAnalysisProps) {
  if (!findings || findings.length === 0) return null

  // Process findings to handle different data structures
  const processedFindings = findings.map((finding) => ({
    metric: finding.metric || finding.title || "Metric",
    value: finding.value || finding.data || "",
    insight: finding.insight || finding.description || "",
  }))

  // Process visualization to handle different data structures
  let processedVisualization = null
  if (visualization) {
    processedVisualization = {
      type: visualization.type || visualization.title || "Visualization",
      description: visualization.description || "",
      imageUrl: visualization.imageUrl || visualization.image || "",
    }
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <BarChart2 className="h-6 w-6 mr-2 text-indigo-600" />
        Data Analysis
      </h2>

      <p className="text-gray-700 mb-6">{overview}</p>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {processedFindings.map((finding, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{finding.metric}</h3>
              <p className="text-2xl font-bold text-indigo-600 mb-3">{finding.value}</p>
              <p className="text-gray-700 mt-auto">{finding.insight}</p>
            </div>
          </div>
        ))}
      </div>

      {processedVisualization && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-md">
          <h3 className="text-lg font-semibold text-gray-900 mb-4">{processedVisualization.type}</h3>

          {processedVisualization.imageUrl && (
            <div className="relative h-80 w-full mb-4">
              <Image
                src={processedVisualization.imageUrl || "/placeholder.svg"}
                alt={processedVisualization.type}
                fill
                className="object-contain"
              />
            </div>
          )}

          <p className="text-gray-700">{processedVisualization.description}</p>
        </div>
      )}
    </section>
  )
}
