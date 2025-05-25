import { PieChart, BarChart } from "lucide-react"
import Image from "next/image"

interface Chart {
  title?: string
  description?: string
  chartType?: string
  data?: any
  imageUrl?: string
}

interface DataPoint {
  metric: string
  value: string
  source: string
  implication: string
}

interface SupportingDataTable {
  columns: string[]
  rows: Array<{
    Metric?: string
    Value?: string
    Source?: string
    Implication?: string
  }>
}

interface SupportingDataVisual {
  description: string
  link: string
}

interface TechnologyComparisonSupportingDataProps {
  charts?: Chart[]
  dataPoints?: DataPoint[]
  table?: SupportingDataTable
  visual?: SupportingDataVisual
}

export default function TechnologyComparisonSupportingData({
  charts = [],
  dataPoints = [],
  table,
  visual,
}: TechnologyComparisonSupportingDataProps) {
  // Check if we have any data to display
  const hasCharts = Array.isArray(charts) && charts.length > 0
  const hasDataPoints = Array.isArray(dataPoints) && dataPoints.length > 0
  const hasVisual = visual && visual.link

  if (!hasCharts && !hasDataPoints && !hasVisual) {
    return null
  }

  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <PieChart className="h-6 w-6 mr-2 text-blue-600" />
        Supporting Data
      </h2>

      {/* Data Points */}
      {hasDataPoints && (
        <div className="mb-8 grid md:grid-cols-2 gap-6">
          {dataPoints.map((point, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
              <div className="px-6 py-3 border-b border-gray-200 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <BarChart className="h-5 w-5 mr-2 text-blue-600" />
                  {point.metric}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-2xl font-bold text-gray-900 mb-2">{point.value}</p>
                <p className="text-sm text-gray-500 mb-4">Source: {point.source}</p>
                <p className="text-gray-700">{point.implication}</p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Visual */}
      {hasVisual && (
        <div className="mb-8">
          <div className="relative w-full bg-white" style={{ height: "500px" }}>
            <Image
              src={visual.link || "/placeholder.svg"}
              alt={visual.description || "Supporting data visualization"}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 800px"
            />
          </div>
          <p className="text-gray-700 text-center mt-4">{visual.description}</p>
        </div>
      )}

      {/* Charts */}
      {hasCharts && (
        <div className="grid md:grid-cols-2 gap-6">
          {charts.map((chart, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md bg-white">
              <div className="px-6 py-3 border-b border-gray-200 bg-white">
                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                  <PieChart className="h-5 w-5 mr-2 text-blue-600" />
                  {chart.title}
                </h3>
              </div>
              <div className="p-6">
                <div className="relative w-full bg-white" style={{ height: "400px" }}>
                  <Image
                    src={
                      chart.imageUrl ||
                      `/placeholder.svg?height=300&width=500&query=${encodeURIComponent(
                        `${chart.chartType || "chart"} for ${chart.title || "data visualization"}`,
                      )}`
                    }
                    alt={chart.title || "Chart"}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 500px"
                  />
                </div>
                <p className="text-gray-700 text-sm">{chart.description}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
