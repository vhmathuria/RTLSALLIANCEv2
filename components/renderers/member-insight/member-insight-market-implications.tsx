interface TableData {
  columns: string[]
  rows: Record<string, string>[]
}

interface MemberInsightMarketImplicationsProps {
  technology: string[]
  vendors: string[]
  buyers: string[]
  futureOutlook: string[]
  impactProfile: any[] // Keep the prop but don't use it
}

export default function MemberInsightMarketImplications({
  technology,
  vendors,
  buyers,
  futureOutlook,
  impactProfile,
}: MemberInsightMarketImplicationsProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Technology and Market Implications</h2>

      <div className="grid md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Technology</h3>
          <ul className="space-y-2 list-disc pl-5">
            {technology.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Vendors</h3>
          <ul className="space-y-2 list-disc pl-5">
            {vendors.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Buyers</h3>
          <ul className="space-y-2 list-disc pl-5">
            {buyers.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white border border-gray-200 rounded-lg p-5 shadow-sm">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Future Outlook</h3>
          <ul className="space-y-2 list-disc pl-5">
            {futureOutlook.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
