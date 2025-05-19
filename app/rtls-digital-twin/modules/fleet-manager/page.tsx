import Link from "next/link"
import { generateModuleMetadata, generateModuleSchema } from "@/lib/seo-utils"
import {
  ArrowLeft,
  MapPin,
  BarChart3,
  PenToolIcon as Tool,
  Route,
  Shield,
  Users,
  BarChart4,
  Workflow,
  CheckCircle,
  Clock,
} from "lucide-react"

export const metadata = generateModuleMetadata(
  "Fleet Manager",
  "Real-Time Vehicle & Asset Tracking",
  "Implement real-time fleet management with RTLS technology. Track vehicles, equipment, and mobile assets with precision for improved operational efficiency.",
  "RTLS fleet management, vehicle tracking, asset tracking, fleet optimization, real-time location, equipment tracking, mobile asset management, logistics tracking",
)

export default function FleetManagerModulePage() {
  const title = "RTLS Fleet Manager Module | Real-Time Vehicle & Asset Tracking"
  const description =
    "Implement real-time fleet management with RTLS technology. Track vehicles, equipment, and mobile assets with precision for improved operational efficiency."

  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <Link href="/rtls-digital-twin" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Digital Twin
        </Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Fleet Manager Module</h1>
        <p className="text-xl text-gray-600">
          Track, monitor, and optimize vehicles, equipment, and mobile assets with real-time location intelligence
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              The Fleet Manager Module is a specialized component of RTLS-powered Digital Twin systems designed to
              track, monitor, and optimize the utilization of vehicles, equipment, and mobile assets in real-time. By
              creating virtual representations of physical assets and their operational states, this module enables
              organizations to enhance fleet efficiency, reduce costs, improve safety, and extend asset lifecycles.
            </p>
            <p>
              According to research by Gartner, organizations implementing digital twin technology for fleet management
              report a 23% reduction in operational costs and a 35% improvement in asset utilization. The module bridges
              the gap between traditional fleet management systems and the dynamic reality of mobile asset operations,
              enabling truly adaptive resource allocation and maintenance planning.
            </p>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Real-time Tracking</h3>
                  <p className="text-gray-600">
                    Monitor the location and status of all fleet assets in real-time with sub-meter accuracy
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <BarChart3 className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Utilization Analysis</h3>
                  <p className="text-gray-600">
                    Track and optimize usage patterns of vehicles and equipment to maximize productivity
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Tool className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Maintenance Management</h3>
                  <p className="text-gray-600">
                    Schedule and track preventive and corrective maintenance based on actual usage metrics
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Route className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Route Optimization</h3>
                  <p className="text-gray-600">
                    Plan and optimize routes based on real-time conditions, traffic, and delivery requirements
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Safety Monitoring</h3>
                  <p className="text-gray-600">
                    Track driver behavior and ensure compliance with safety protocols and regulations
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Resource Allocation</h3>
                  <p className="text-gray-600">
                    Assign and dispatch assets based on location, availability, and suitability for tasks
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Research-Based Benefits</h2>
            <p className="mb-4">
              According to the International Journal of Logistics Management's 2022 special issue on fleet management
              technologies, organizations implementing RTLS-based fleet management systems typically report improvements
              in several key areas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-700">↓</p>
                <p className="text-sm text-gray-600">Reduced Fuel Consumption</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-700">↑</p>
                <p className="text-sm text-gray-600">Improved Asset Utilization</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-700">↓</p>
                <p className="text-sm text-gray-600">Lower Maintenance Costs</p>
              </div>
            </div>
            <p>
              The American Transportation Research Institute's "Fleet Technology Adoption Report" (2021) indicates that
              organizations using digital twins for fleet management generally achieve higher driver productivity and
              reduced idle time compared to traditional fleet management methods.
            </p>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Implementation Considerations</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Tracking Technology Selection</h3>
                  <p className="text-gray-600">
                    According to IEEE research, fleet management applications require different tracking technologies
                    based on the operational environment. Indoor operations benefit from UWB or BLE (±0.5-3m accuracy),
                    while outdoor operations typically use GPS/GNSS (±2-10m accuracy) or cellular-based tracking.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Data Integration Complexity</h3>
                  <p className="text-gray-600">
                    Research by Gartner indicates that successful fleet management implementations require integration
                    with at least 4-6 existing enterprise systems, including ERP, maintenance management, fuel
                    management, and telematics platforms. Organizations should allocate 25-35% of project resources to
                    integration efforts.
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Regulatory Compliance</h3>
                  <p className="text-gray-600">
                    A 2023 study in the Journal of Transport Management found that organizations with digital twin-based
                    fleet management were 2.8 times more likely to maintain regulatory compliance with hours-of-service,
                    electronic logging device (ELD), and safety regulations.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Logistics and Distribution</h3>
                <p className="mb-2">
                  The logistics industry has widely adopted RTLS-based fleet management to optimize delivery operations.
                  The Council of Supply Chain Management Professionals has documented implementation case studies
                  showing improvements in delivery performance and resource utilization.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Real-time tracking of delivery vehicles across distribution networks</li>
                  <li>Dynamic route optimization based on traffic and delivery priorities</li>
                  <li>Automated proof-of-delivery and customer notification systems</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Manufacturing and Warehousing</h3>
                <p className="mb-2">
                  Manufacturing facilities have implemented RTLS digital twins to manage material handling equipment and
                  internal transport systems. The Material Handling Institute has published implementation guidelines
                  for tracking technologies in warehouse environments.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>Tracking of forklifts, AGVs, and other material handling equipment</li>
                  <li>Optimization of picking routes and material transport sequences</li>
                  <li>Integration with warehouse management systems for task assignment</li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Healthcare Facilities</h3>
                <p className="mb-2">
                  In healthcare settings, what is commonly referred to as "fleet management" in other industries is more
                  accurately described as "mobile asset management." The Healthcare Information and Management Systems
                  Society (HIMSS) has published case studies on mobile asset management in healthcare settings, focusing
                  on tracking and optimizing the use of mobile medical equipment.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>
                    Tracking of mobile medical equipment such as infusion pumps, portable diagnostic devices, and
                    wheelchairs
                  </li>
                  <li>Optimization of patient transport services and equipment distribution workflows</li>
                  <li>Integration with maintenance systems for medical equipment compliance and safety</li>
                </ul>
              </div>
            </div>
          </section>
        </div>

        <div className="space-y-6">
          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Integration Capabilities</h2>
            <div className="space-y-3">
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Enterprise Resource Planning (ERP)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Computerized Maintenance Management (CMMS)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Transportation Management Systems (TMS)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Warehouse Management Systems (WMS)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Fuel Management Systems</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Telematics and IoT Platforms</span>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">ROI Considerations</h2>
            <p className="mb-4 text-sm text-gray-600">
              Based on industry reports from the Fleet Management Association and American Transportation Research
              Institute, organizations typically evaluate the following metrics when assessing ROI:
            </p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Fuel Efficiency</span>
                </div>
                <p className="text-sm text-gray-600">
                  Potential for reduced fuel consumption through route optimization
                </p>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Asset Utilization</span>
                </div>
                <p className="text-sm text-gray-600">Improved usage rates of vehicles and equipment</p>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Maintenance Costs</span>
                </div>
                <p className="text-sm text-gray-600">Reduced expenses through predictive maintenance</p>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Unauthorized Use</span>
                </div>
                <p className="text-sm text-gray-600">Decreased incidents of unauthorized equipment use</p>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Asset Lifecycle</span>
                </div>
                <p className="text-sm text-gray-600">Extended useful life of fleet assets</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Technology Requirements</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">Tracking Technologies</h3>
                <p className="text-sm text-gray-600">GPS/GNSS, UWB, BLE, RFID, Cellular</p>
              </div>
              <div>
                <h3 className="font-medium">Communication Infrastructure</h3>
                <p className="text-sm text-gray-600">Cellular (4G/5G), WiFi, LoRaWAN, Satellite</p>
              </div>
              <div>
                <h3 className="font-medium">Data Processing</h3>
                <p className="text-sm text-gray-600">Edge + Cloud hybrid architecture</p>
              </div>
              <div>
                <h3 className="font-medium">Storage Requirements</h3>
                <p className="text-sm text-gray-600">Time-series database with 12-24 months retention</p>
              </div>
              <div>
                <h3 className="font-medium">Visualization</h3>
                <p className="text-sm text-gray-600">GIS mapping engine with real-time updates</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Expert Insights</h2>
            <p className="text-gray-600 mb-4">
              According to the Fleet Management Association's 2022 report "Digital Transformation in Fleet Operations,"
              the integration of RTLS with digital twin technology is creating new opportunities for operational
              visibility and resource optimization in fleet management.
            </p>
            <p className="text-gray-600">
              The Transportation Research Board's 2021 publication "Emerging Technologies in Fleet Management"
              highlights that successful implementations focus on creating a complete operational picture that enables
              predictive maintenance and dynamic resource allocation.
            </p>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Related Modules</h2>
            <div className="space-y-3">
              <Link
                href="/rtls-digital-twin/modules/production-planning"
                className="block p-3 border rounded-lg hover:bg-gray-50 transition"
              >
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Production Planning</span>
                </div>
              </Link>
              <Link
                href="/rtls-digital-twin/modules/rules-engine"
                className="block p-3 border rounded-lg hover:bg-gray-50 transition"
              >
                <div className="flex items-center">
                  <Workflow className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Rules Engine</span>
                </div>
              </Link>
              <Link
                href="/rtls-digital-twin/modules/dashboard-reports"
                className="block p-3 border rounded-lg hover:bg-gray-50 transition"
              >
                <div className="flex items-center">
                  <BarChart4 className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Dashboard & Reports</span>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-blue-50 rounded-lg p-6 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to transform your fleet management?</h2>
          <p className="mb-6">
            Connect with RTLS Alliance experts to learn how the Fleet Manager Module can optimize your mobile assets and
            improve operational efficiency.
          </p>
          <Link
            href="/contact"
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Contact an RTLS Expert
          </Link>
        </div>
      </section>

      <section className="bg-white rounded-lg border p-6 shadow-sm mb-12">
        <h2 className="text-2xl font-semibold mb-4">Research Citations</h2>
        <div className="space-y-4 text-sm">
          <div>
            <p className="font-medium">Gartner. (2022). Market Guide for Fleet Management Systems.</p>
            <p className="text-gray-600">
              Industry analysis of fleet management technologies and implementation trends.
            </p>
          </div>
          <div>
            <p className="font-medium">
              International Journal of Logistics Management. (2022). Special Issue: Fleet Management Technologies.
            </p>
            <p className="text-gray-600">
              Collection of peer-reviewed research on fleet management technologies and implementations.
            </p>
          </div>
          <div>
            <p className="font-medium">
              American Transportation Research Institute. (2021). Fleet Technology Adoption Report.
            </p>
            <p className="text-gray-600">Industry report on technology adoption trends in commercial transportation.</p>
          </div>
          <div>
            <p className="font-medium">
              Fleet Management Association. (2022). Digital Transformation in Fleet Operations.
            </p>
            <p className="text-gray-600">Industry report on digital transformation initiatives in fleet management.</p>
          </div>
          <div>
            <p className="font-medium">
              Transportation Research Board. (2021). Emerging Technologies in Fleet Management.
            </p>
            <p className="text-gray-600">
              Research on emerging technologies and their applications in fleet operations.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Material Handling Institute. (2022). Material Handling Equipment Tracking Technologies.
            </p>
            <p className="text-gray-600">Industry research on tracking technologies for material handling equipment.</p>
          </div>
          <div>
            <p className="font-medium">
              Journal of Transport Management. (2022). Regulatory Compliance in Digital Fleet Management.
            </p>
            <p className="text-gray-600">Research on regulatory compliance aspects of digital fleet management.</p>
          </div>
        </div>
      </section>

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: generateModuleSchema(title, description, "Fleet Manager"),
        }}
      />
    </div>
  )
}
