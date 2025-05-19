import Link from "next/link"
import {
  ArrowLeft,
  BarChart3,
  PieChart,
  Map,
  Clock,
  LineChart,
  Settings,
  CheckCircle,
  BookOpen,
  GitBranch,
  Layers,
  Workflow,
  Bell,
} from "lucide-react"
import DashboardReportsModuleClientPage from "./DashboardReportsModuleClientPage"
import { generateModuleMetadata, generateModuleSchema } from "@/lib/seo-utils"

export const metadata = generateModuleMetadata(
  "Dashboard & Reports",
  "Location Intelligence Analytics",
  "Visualize location data and generate actionable insights with customizable analytics tools in the RTLS Dashboard & Reports module.",
  "RTLS dashboard, location analytics, real-time reporting, data visualization, location intelligence, asset utilization metrics, operational insights",
)

export default function DashboardReportsModulePage() {
  const title = "RTLS Dashboard & Reports Module | Location Intelligence Analytics"
  const description =
    "Visualize location data and generate actionable insights with customizable analytics tools in the RTLS Dashboard & Reports module."

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <DashboardReportsModuleClientPage />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateModuleSchema(title, description, "Dashboard & Reports"),
        }}
      />
      <div className="mb-8">
        <Link href="/rtls-digital-twin" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Digital Twin
        </Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Dashboard & Reports Module</h1>
        <p className="text-xl text-gray-600">
          Visualize location data and generate actionable insights with customizable analytics tools
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              The Dashboard & Reports Module is an essential component of RTLS-powered Digital Twin systems that
              transforms complex location data into actionable insights through intuitive visualizations and
              comprehensive analytics. By providing stakeholders with real-time visibility into operations, historical
              trends, and predictive analytics, this module enables data-driven decision making across all levels of the
              organization.
            </p>
            <p>
              According to the Data Management Association (DAMA) International's Data Management Body of Knowledge
              (DMBOK), effective data visualization and reporting are critical components of the data value chain,
              enabling organizations to derive actionable insights from raw data. In the context of RTLS, dashboards and
              reports serve as the primary interface between complex location data and the business users who need to
              make informed decisions based on that data.
            </p>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Map className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Spatial Visualization</h3>
                  <p className="text-gray-600">
                    Display real-time and historical location data on interactive 2D/3D maps following OGC standards for
                    spatial data visualization
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <BarChart3 className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Performance Metrics</h3>
                  <p className="text-gray-600">
                    Track and visualize KPIs related to location-based operations using standard business intelligence
                    methodologies
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Historical Analysis</h3>
                  <p className="text-gray-600">
                    Analyze location data over time to identify patterns and trends using established time-series
                    analysis techniques
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <LineChart className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Custom Reporting</h3>
                  <p className="text-gray-600">
                    Generate tailored reports for different stakeholders following IBCS (International Business
                    Communication Standards)
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <PieChart className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Interactive Analytics</h3>
                  <p className="text-gray-600">
                    Enable users to explore data through dynamic filtering and drill-down capabilities based on OLAP
                    (Online Analytical Processing) principles
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Bell className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Automated Alerts</h3>
                  <p className="text-gray-600">
                    Configure threshold-based notifications for key metrics and anomalies using standard event
                    processing models
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Research-Based Benefits</h2>
            <p className="mb-4">
              Research published in the International Journal of Business Intelligence Research and IEEE Transactions on
              Visualization and Computer Graphics highlights several benefits of implementing dashboards and reports in
              location-aware systems:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-xl font-bold text-blue-700">↓ Information Search Time</p>
                <p className="text-sm text-gray-600">Reduction in time spent searching for information</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-xl font-bold text-blue-700">↑ Decision-Making Speed</p>
                <p className="text-sm text-gray-600">Improvement in operational decision-making speed</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-xl font-bold text-blue-700">↑ Resource Utilization</p>
                <p className="text-sm text-gray-600">Increase in resource utilization through better visibility</p>
              </div>
            </div>
            <p>
              The Business Application Research Center (BARC) notes in their annual BI Survey that organizations
              implementing business intelligence solutions achieve significant improvements in data-driven decision
              making and operational efficiency. The IEEE Pervasive Computing Special Interest Group further documents
              that location-based analytics enable more effective resource management and process optimization.
            </p>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Implementation Considerations</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Data Volume Management</h3>
                  <p className="text-gray-600">
                    The Data Warehousing Institute (TDWI) recommends implementing data aggregation, filtering, and
                    caching strategies to manage the high volume of location data generated by RTLS systems.
                    Organizations should establish data retention policies that balance analytical needs with system
                    performance.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Visualization Design</h3>
                  <p className="text-gray-600">
                    The International Business Communication Standards (IBCS) Association provides guidelines for
                    effective data visualization that emphasize clarity, consistency, and context. Research from the
                    IEEE Transactions on Visualization and Computer Graphics recommends using progressive disclosure and
                    role-based views to manage complexity in location-based dashboards.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Data Quality Assurance</h3>
                  <p className="text-gray-600">
                    The Data Management Association (DAMA) International emphasizes the importance of data validation,
                    cleansing, and confidence indicators in business intelligence applications. For location data, this
                    includes accounting for positioning accuracy and addressing potential gaps in coverage.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Manufacturing</h3>
                <p className="mb-2">
                  Manufacturing organizations implement location-based dashboards to monitor and optimize production
                  processes. The Manufacturing Enterprise Solutions Association (MESA) International documents use cases
                  for RTLS-based analytics in manufacturing environments.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Real-time work-in-progress (WIP) visualization and tracking</li>
                  <li>Equipment utilization and performance monitoring</li>
                  <li>Labor productivity analysis based on movement patterns</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Logistics & Distribution</h3>
                <p className="mb-2">
                  Logistics providers leverage location-based dashboards to optimize warehouse operations and
                  distribution networks. The Warehouse Education and Research Council (WERC) publishes best practices
                  for location-aware analytics in distribution centers.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Inventory location and movement visualization</li>
                  <li>Picking efficiency and route optimization analysis</li>
                  <li>Yard management and dock utilization reporting</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Healthcare</h3>
                <p className="mb-2">
                  Healthcare organizations use location-based dashboards to improve patient flow and asset management.
                  The Healthcare Information and Management Systems Society (HIMSS) provides frameworks for implementing
                  location analytics in healthcare settings.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Patient flow visualization and bottleneck identification</li>
                  <li>Equipment utilization and availability monitoring</li>
                  <li>Staff movement analysis and workload distribution</li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Types of Visualizations</h2>
            <p className="mb-4">
              Research from the IEEE Transactions on Visualization and Computer Graphics and the International Journal
              of Geographical Information Science identifies several categories of visualizations commonly used in RTLS
              dashboards:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 mt-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Visualization Type</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Common Applications</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Spatial Maps</td>
                    <td className="border border-gray-300 px-4 py-2">
                      2D or 3D representations of physical spaces with overlaid location data
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Asset tracking, zone occupancy, movement patterns
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Heat Maps</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Color-coded representations of data density or intensity across space
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Traffic analysis, dwell time visualization, congestion identification
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Flow Diagrams</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Visualizations of movement patterns and transitions between areas
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Process analysis, workflow optimization, bottleneck identification
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Time-Series Charts</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Graphs showing location-based metrics over time
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Utilization trends, performance tracking, comparative analysis
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Relationship Networks</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Graphs showing connections and interactions between tracked entities
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Contact tracing, collaboration analysis, resource dependencies
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Research Citations</h2>
            <div className="space-y-3 text-sm">
              <p>
                1. Data Management Association (DAMA) International. (2017). "DAMA-DMBOK: Data Management Body of
                Knowledge." 2nd Edition. Technics Publications.
              </p>
              <p>
                2. International Business Communication Standards Association. (2020). "IBCS Standards 1.2: Rules for
                the design of comprehensible business communication."
              </p>
              <p>
                3. IEEE Transactions on Visualization and Computer Graphics. (2021). "Special Issue on Spatial Data
                Visualization." Volume 27, Issue 2.
              </p>
              <p>
                4. Business Application Research Center (BARC). (2023). "The BI & Analytics Survey 23: The world's
                largest survey of BI software users."
              </p>
              <p>
                5. Open Geospatial Consortium. (2019). "OGC Moving Features Encoding Extension - JSON." OGC
                Implementation Standard.
              </p>
              <p>
                6. Healthcare Information and Management Systems Society. (2021). "HIMSS Analytics: Location-Based
                Intelligence in Healthcare."
              </p>
              <p>
                7. Warehouse Education and Research Council. (2022). "WERC DC Measures: Industry Metrics for Warehouse
                and Distribution Operations."
              </p>
              <p>
                8. Manufacturing Enterprise Solutions Association International. (2020). "MESA Analytics That Matter:
                Metrics for Manufacturing Operations."
              </p>
              <p>
                9. International Journal of Geographical Information Science. (2022). "Advances in Movement Data
                Visualization." Volume 36, Issue 4.
              </p>
              <p>
                10. The Data Warehousing Institute. (2021). "TDWI Best Practices Report: Data Management for Analytics."
              </p>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Integration Capabilities</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Business Intelligence Platforms</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Enterprise Resource Planning (ERP)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Manufacturing Execution Systems (MES)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Warehouse Management Systems (WMS)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Customer Relationship Management (CRM)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Data Warehouses and Data Lakes</span>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">ROI Considerations</h2>
            <p className="mb-4 text-sm text-gray-600">
              Based on research from the Business Application Research Center (BARC):
            </p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Information Search Time</span>
                  <span className="text-sm font-medium text-green-600">Reduction</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Decision-Making Speed</span>
                  <span className="text-sm font-medium text-green-600">Improvement</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Resource Utilization</span>
                  <span className="text-sm font-medium text-green-600">Increase</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Reporting Effort</span>
                  <span className="text-sm font-medium text-green-600">Reduction</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Operational Efficiency</span>
                  <span className="text-sm font-medium text-green-600">Increase</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "20%" }}></div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Technology Requirements</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">RTLS Data Source</h3>
                <p className="text-sm text-gray-600">Any RTLS with consistent data quality</p>
              </div>
              <div>
                <h3 className="font-medium">Data Processing</h3>
                <p className="text-sm text-gray-600">ETL/ELT pipeline for data transformation</p>
              </div>
              <div>
                <h3 className="font-medium">Data Storage</h3>
                <p className="text-sm text-gray-600">Time-series and spatial databases</p>
              </div>
              <div>
                <h3 className="font-medium">Visualization Engine</h3>
                <p className="text-sm text-gray-600">Interactive charting and mapping libraries</p>
              </div>
              <div>
                <h3 className="font-medium">User Interface</h3>
                <p className="text-sm text-gray-600">Responsive dashboard framework with role-based access</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Standards Compliance</h2>
            <div className="space-y-3">
              <div className="flex items-start">
                <BookOpen className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm">International Business Communication Standards (IBCS)</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm">Open Geospatial Consortium (OGC) Standards</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm">ISO 8601 Date and Time Formats</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm">W3C Web Content Accessibility Guidelines (WCAG)</p>
                </div>
              </div>
              <div className="flex items-start">
                <BookOpen className="h-4 w-4 text-blue-600 mt-1 mr-2 flex-shrink-0" />
                <div>
                  <p className="text-sm">DAMA Data Management Body of Knowledge (DMBOK)</p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Related Modules</h2>
            <div className="space-y-3">
              <Link
                href="/rtls-digital-twin/modules/rules-engine"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <GitBranch className="h-4 w-4 mr-2" />
                <span>Rules Engine Module</span>
              </Link>
              <Link
                href="/rtls-digital-twin/modules/production-planning"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Layers className="h-4 w-4 mr-2" />
                <span>Production Planning Module</span>
              </Link>
              <Link
                href="/rtls-digital-twin/modules/simulation-modeling"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Workflow className="h-4 w-4 mr-2" />
                <span>Simulation & Modeling Module</span>
              </Link>
              <Link
                href="/rtls-digital-twin/modules/process-control"
                className="flex items-center text-blue-600 hover:text-blue-800"
              >
                <Settings className="h-4 w-4 mr-2" />
                <span>Process Control Module</span>
              </Link>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}
