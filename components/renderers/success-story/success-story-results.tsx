import Image from "next/image"
import { BarChart2, TrendingUp } from "lucide-react"

interface Metric {
  label: string
  value: string
  improvement: string
  context?: string
}

interface SuccessStoryResultsProps {
  overview: string
  metrics: Metric[]
  businessImpact: string
  roi: string
  image?: string
}

export default function SuccessStoryResults({
  overview,
  metrics,
  businessImpact,
  roi,
  image,
}: SuccessStoryResultsProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <TrendingUp className="h-6 w-6 mr-2 text-green-600" />
        Results & Impact
      </h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <p className="text-gray-700 mb-6">{overview}</p>

          {metrics && metrics.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <BarChart2 className="h-5 w-5 mr-2 text-green-600" />
                Key Performance Metrics
              </h3>
              <div className="space-y-4">
                {metrics.map((metric, index) => (
                  <div key={index} className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex justify-between items-center mb-1">
                      <h4 className="font-medium text-gray-900">{metric.label}</h4>
                      <span className="text-green-700 font-semibold">{metric.improvement}</span>
                    </div>
                    <p className="text-2xl font-bold text-green-600 mb-1">{metric.value}</p>
                    {metric.context && <p className="text-sm text-gray-600">{metric.context}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}

          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Business Impact</h3>
            <p className="text-gray-700">{businessImpact}</p>
          </div>

          {roi && (
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Return on Investment</h3>
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                <p className="text-gray-700">{roi}</p>
              </div>
            </div>
          )}
        </div>

        {image && (
          <div>
            <div className="relative h-80 w-full rounded-lg overflow-hidden shadow-md">
              <Image src={image || "/placeholder.svg"} alt="Results visualization" fill className="object-cover" />
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
