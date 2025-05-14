import { PieChart } from "lucide-react"
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
  const hasTable = table && table.columns && table.columns.length > 0
  const hasVisual = visual && visual.link

  if (!hasCharts && !hasDataPoints && !hasTable && !hasVisual) {
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
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-white">
                <h3 className="text-lg font-semibold">{point.metric}</h3>
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

      {/* Table */}
      {hasTable && (
        <div className="mb-8 overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200 rounded-lg shadow-sm">
            <thead className="bg-gray-50">
              <tr>
                {table.columns.map((column, index) => (
                  <th
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{row.Metric || ""}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{row.Value || ""}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{row.Source || ""}</td>
                  <td className="px-6 py-4 text-sm text-gray-500">{row.Implication || ""}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Visual */}
      {hasVisual && (
        <div className="mb-8">
          <div className="relative h-64 w-full overflow-hidden rounded-lg shadow-md">
            <Image
              src={visual.link || "/placeholder.svg"}
              alt={visual.description || "Supporting data visualization"}
              fill
              className="object-contain"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white text-xs p-2">
              {visual.description}
            </div>
          </div>
        </div>
      )}

      {/* Charts */}
      {hasCharts && (
        <div className="grid md:grid-cols-2 gap-6">
          {charts.map((chart, index) => (
            <div key={index} className="border border-gray-200 rounded-lg overflow-hidden shadow-md">
              <div className="bg-gradient-to-r from-blue-600 to-blue-700 px-6 py-3 text-white">
                <h3 className="text-lg font-semibold">{chart.title}</h3>
              </div>
              <div className="p-6">
                <div className="relative h-64 w-full mb-4">
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
