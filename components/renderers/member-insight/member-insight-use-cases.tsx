interface UseCase {
  name: string
  details: string[]
}

interface TableData {
  columns: string[]
  rows: Record<string, string>[]
}

interface MemberInsightUseCasesProps {
  items: UseCase[]
  table: TableData | null // Keep the prop but don't use it
}

export default function MemberInsightUseCases({ items, table }: MemberInsightUseCasesProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Use Cases or Trends</h2>

      <div className="grid md:grid-cols-2 gap-6">
        {items.map((item, index) => (
          <div key={index} className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">{item.name}</h3>
            <ul className="space-y-2 list-disc pl-5">
              {item.details.map((detail, detailIndex) => (
                <li key={detailIndex} className="text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}
