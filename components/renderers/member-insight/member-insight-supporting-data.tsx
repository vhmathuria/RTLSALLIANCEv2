import Image from "next/image"
import { BarChart2 } from "lucide-react"

interface DataPoint {
  metric: string
  value: string
  source: string
  implication: string
}

interface TableData {
  columns: string[]
  rows: Record<string, string>[]
}

interface Visual {
  description: string
  link: string
}

interface MemberInsightSupportingDataProps {
  dataPoints: DataPoint[]
  table: TableData | null
  visual: Visual | null
}

export default function MemberInsightSupportingData({ dataPoints, table, visual }: MemberInsightSupportingDataProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
        <BarChart2 className="h-6 w-6 mr-2 text-indigo-600" />
        Supporting Data
      </h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        {dataPoints.map((point, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <div className="flex flex-col h-full">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{point.metric}</h3>
              <p className="text-2xl font-bold text-indigo-600 mb-3">{point.value}</p>
              <p className="text-gray-700 mb-2">{point.implication}</p>
              <p className="text-sm text-gray-500 mt-auto">Source: {point.source}</p>
            </div>
          </div>
        ))}
      </div>

      {table && (
        <div className="overflow-x-auto mb-8">
          <table className="min-w-full bg-white border border-gray-200 rounded-lg overflow-hidden">
            <thead className="bg-gray-50">
              <tr>
                {table.columns.map((column, index) => (
                  <th
                    key={index}
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    {column}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {table.rows.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {table.columns.map((column, colIndex) => (
                    <td key={colIndex} className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                      {row[column]}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {visual && (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 shadow-md">
          <div className="relative h-80 w-full mb-4">
            <Image src={visual.link || "/placeholder.svg"} alt={visual.description} fill className="object-contain" />
          </div>
          <p className="text-gray-700 text-center">{visual.description}</p>
        </div>
      )}
    </section>
  )
}
