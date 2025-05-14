interface CaseStudy {
  type: string
  name: string
  details: {
    scenario: string
    highlight: string
  }
}

interface TableData {
  columns: string[]
  rows: Record<string, string>[]
}

interface MemberInsightCaseStudiesProps {
  items: CaseStudy[]
  table: TableData | null
}

export default function MemberInsightCaseStudies({ items, table }: MemberInsightCaseStudiesProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Case Studies</h2>

      <div className="space-y-6 mb-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg overflow-hidden shadow-sm">
            <div className="bg-indigo-600 px-6 py-3 flex justify-between items-center">
              <h3 className="text-lg font-semibold text-white">{item.name}</h3>
              <span className="bg-white text-indigo-600 px-2 py-1 rounded text-xs font-medium">{item.type}</span>
            </div>
            <div className="p-6">
              <div className="mb-4">
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Scenario</h4>
                <p className="text-gray-700">{item.details.scenario}</p>
              </div>
              <div>
                <h4 className="text-sm font-medium text-gray-500 uppercase tracking-wider mb-1">Highlight</h4>
                <p className="text-gray-700">{item.details.highlight}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {table && (
        <div className="overflow-x-auto">
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
    </section>
  )
}
