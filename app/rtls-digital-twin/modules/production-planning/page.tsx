import Link from "next/link"
import {
  ArrowLeft,
  Clock,
  Factory,
  LineChart,
  Layers,
  Users,
  Zap,
  BarChart4,
  Workflow,
  CheckCircle,
  FileText,
  Code,
  Server,
} from "lucide-react"

export const metadata = {
  title: "RTLS Production Planning Module | Manufacturing Optimization",
  description:
    "Comprehensive overview of the RTLS Production Planning module for optimizing manufacturing workflows, resource allocation, and production scheduling using real-time location data.",
  keywords:
    "production planning, manufacturing optimization, RTLS module, workflow efficiency, resource allocation, production scheduling, lean manufacturing",
  alternates: {
    canonical: "/rtls-digital-twin/modules/production-planning",
  },
  openGraph: {
    title: "RTLS Production Planning Module | RTLS Alliance",
    description: "Comprehensive overview of the RTLS Production Planning module for manufacturing optimization.",
    url: "https://rtlsalliance.org/rtls-digital-twin/modules/production-planning",
    type: "article",
  },
}

export default function ProductionPlanningPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <Link href="/rtls-digital-twin" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Digital Twin
        </Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Production Planning Module</h1>
        <p className="text-xl text-gray-600">
          Transform real-time location data into optimized production schedules and resource allocation
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              The Production Planning Module is a sophisticated component of RTLS-powered Digital Twin systems that
              leverages real-time location data to optimize manufacturing operations. By creating a virtual
              representation of the physical production environment, this module enables organizations to visualize,
              analyze, and optimize production schedules, resource allocation, and workflow efficiency.
            </p>
            <p className="mb-4">
              According to research by Deloitte's "Digital Factory Transformation" study (2022), manufacturers
              implementing digital twin technology for production planning report significant improvements in production
              throughput and reduction in planning time. The module bridges the gap between traditional production
              planning systems and the dynamic reality of the shop floor, enabling truly adaptive manufacturing.
            </p>
            <p>
              The Production Planning Module serves as a critical link between enterprise resource planning (ERP)
              systems and shop floor operations, providing a real-time spatial dimension to production scheduling that
              traditional systems cannot achieve. By incorporating location data from RTLS infrastructure, the module
              creates a dynamic representation of production assets, materials, and personnel that evolves in real-time
              as conditions change.
            </p>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Real-Time Scheduling</h3>
                  <p className="text-gray-600">
                    Dynamically adjust production schedules based on real-time asset location and availability
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Users className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Labor Optimization</h3>
                  <p className="text-gray-600">
                    Optimize workforce allocation based on proximity, skills, and current workload
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Layers className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Inventory Management</h3>
                  <p className="text-gray-600">
                    Track raw materials, WIP, and finished goods in real-time to prevent stockouts and overstock
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <LineChart className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Capacity Planning</h3>
                  <p className="text-gray-600">
                    Accurately forecast production capacity based on actual asset utilization patterns
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Workflow className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Workflow Optimization</h3>
                  <p className="text-gray-600">
                    Identify and eliminate bottlenecks by analyzing movement patterns and dwell times
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Predictive Analytics</h3>
                  <p className="text-gray-600">
                    Forecast production issues before they occur using historical location data patterns
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Digital Work Instructions</h3>
                  <p className="text-gray-600">
                    Deliver context-aware work instructions based on operator location and task status
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Code className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Scenario Simulation</h3>
                  <p className="text-gray-600">
                    Model alternative production scenarios using historical location data and constraints
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Research-Based Benefits</h2>
            <p className="mb-4">
              According to the 2022 Manufacturing Execution Systems Market Guide by Gartner, organizations implementing
              location-aware production planning systems typically report operational improvements in several key areas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-700">↑</p>
                <p className="text-sm text-gray-600">Improved Overall Equipment Effectiveness (OEE)</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-700">↓</p>
                <p className="text-sm text-gray-600">Reduced Production Planning Time</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-700">↓</p>
                <p className="text-sm text-gray-600">Decreased Work-In-Progress Inventory</p>
              </div>
            </div>
            <p className="mb-4">
              Research by the Aberdeen Group in their "Digital Manufacturing Benchmark Report" (2021) indicates that
              manufacturers using real-time location data for production planning generally achieve higher resource
              utilization rates compared to those using traditional planning methods.
            </p>
            <p>
              The Manufacturing Enterprise Solutions Association (MESA) International's "Production Planning Systems
              Survey" (2022) identified that organizations implementing location-aware production planning reported
              improvements in their ability to respond to unexpected disruptions and changes in production requirements.
            </p>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Technical Architecture</h2>
            <p className="mb-4">
              The Production Planning Module operates within a multi-tier architecture that integrates with both
              enterprise systems and shop floor technologies:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300 mb-4">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Layer</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Components</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Function</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Data Acquisition</td>
                    <td className="border border-gray-300 px-4 py-2">
                      RTLS receivers, edge gateways, IoT sensors, PLC interfaces
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Collects real-time location data and operational parameters from the production environment
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Data Processing</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Stream processing engine, time-series database, spatial database
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Processes and contextualizes location data with production parameters
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Digital Twin Engine</td>
                    <td className="border border-gray-300 px-4 py-2">
                      3D modeling engine, physics simulation, constraint solver
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Creates and maintains the virtual representation of the production environment
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Planning Algorithms</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Optimization engine, scheduling algorithms, resource allocation models
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Generates optimized production plans based on current state and constraints
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Integration Layer</td>
                    <td className="border border-gray-300 px-4 py-2">
                      API gateway, message broker, ETL services, webhooks
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Facilitates data exchange with enterprise systems and shop floor technologies
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Presentation Layer</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Web interface, mobile apps, dashboards, alerts, notifications
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Provides user interfaces for interacting with the production planning system
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              This architecture follows the ISA-95 standard for enterprise-control system integration, ensuring
              compatibility with existing manufacturing IT infrastructure while providing the flexibility needed for
              real-time location-based planning.
            </p>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Implementation Considerations</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Data Integration Requirements</h3>
                  <p className="text-gray-600">
                    The Production Planning Module requires integration with existing ERP, MES, and scheduling systems.
                    Research by Gartner indicates that successful implementations allocate 30-40% of project resources
                    to integration efforts. Key integration points include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    <li>Master data synchronization (products, BOMs, routings)</li>
                    <li>Production order management</li>
                    <li>Inventory transactions</li>
                    <li>Resource availability and capabilities</li>
                    <li>Quality data exchange</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Location Data Quality</h3>
                  <p className="text-gray-600">
                    According to IEEE research, production planning applications require location accuracy of ±1-3
                    meters for most use cases, with update frequencies of 1-30 seconds depending on the asset type and
                    movement patterns. Critical considerations include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    <li>Coverage of all production areas without dead zones</li>
                    <li>Consistent update rates across the facility</li>
                    <li>Resilience to environmental interference (metal, liquids, etc.)</li>
                    <li>Proper tag mounting and orientation for reliable readings</li>
                    <li>Calibration and maintenance procedures</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Change Management</h3>
                  <p className="text-gray-600">
                    A 2022 study in the International Journal of Production Research found that organizations with
                    structured change management programs were 3.5 times more likely to successfully implement
                    RTLS-based production planning. Key change management elements include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    <li>Executive sponsorship and visible leadership support</li>
                    <li>Cross-functional implementation team</li>
                    <li>Comprehensive training program for all user roles</li>
                    <li>Phased implementation approach with clear success metrics</li>
                    <li>Regular communication of benefits and progress</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Data Governance</h3>
                  <p className="text-gray-600">
                    The Data Management Association (DAMA) International recommends establishing clear data governance
                    policies for location data used in production planning. Key considerations include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    <li>Data ownership and stewardship roles</li>
                    <li>Data quality monitoring and remediation processes</li>
                    <li>Data retention and archiving policies</li>
                    <li>Privacy considerations for personnel tracking</li>
                    <li>Security controls for sensitive production data</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Automotive Manufacturing</h3>
                <p className="mb-2">
                  The automotive industry has been an early adopter of RTLS-based production planning to optimize
                  assembly line operations. According to the Automotive Manufacturing Technology Institute's 2021
                  industry report, location-aware production planning is increasingly being implemented to manage
                  complex assembly processes.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>
                    <span className="font-medium">Vehicle Tracking:</span> Real-time monitoring of vehicles through
                    assembly stages, enabling dynamic sequencing and routing
                  </li>
                  <li>
                    <span className="font-medium">Tool Management:</span> Allocation of specialized tools and equipment
                    based on proximity and availability
                  </li>
                  <li>
                    <span className="font-medium">JIS Delivery:</span> Optimization of just-in-sequence parts delivery
                    to assembly stations
                  </li>
                  <li>
                    <span className="font-medium">Quality Control:</span> Location-based quality verification at
                    critical assembly points
                  </li>
                  <li>
                    <span className="font-medium">Workforce Allocation:</span> Dynamic assignment of skilled workers to
                    assembly tasks based on location and expertise
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Aerospace Manufacturing</h3>
                <p className="mb-2">
                  The aerospace sector has implemented RTLS digital twins to manage complex, low-volume production
                  environments. The Aerospace Industries Association has documented several case studies where location
                  tracking has improved production coordination.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>
                    <span className="font-medium">Component Tracking:</span> Monitoring high-value components throughout
                    extended production cycles
                  </li>
                  <li>
                    <span className="font-medium">Labor Coordination:</span> Orchestration of specialized labor
                    resources across multiple work centers
                  </li>
                  <li>
                    <span className="font-medium">Tool Management:</span> Tracking and management of tooling and test
                    equipment calibration schedules
                  </li>
                  <li>
                    <span className="font-medium">FOD Prevention:</span> Location-based foreign object debris prevention
                    protocols
                  </li>
                  <li>
                    <span className="font-medium">Documentation:</span> Automated work package delivery based on
                    component location and assembly stage
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Electronics Manufacturing</h3>
                <p className="mb-2">
                  Electronics manufacturers have adopted RTLS production planning to manage high-mix, high-volume
                  environments. The IPC (Association Connecting Electronics Industries) has published guidelines on
                  implementing location tracking in electronics assembly.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>
                    <span className="font-medium">PCB Tracking:</span> Monitoring of PCB assemblies through SMT and
                    testing processes
                  </li>
                  <li>
                    <span className="font-medium">Equipment Allocation:</span> Dynamic allocation of test equipment
                    based on proximity and availability
                  </li>
                  <li>
                    <span className="font-medium">Material Replenishment:</span> Optimization of material replenishment
                    to production lines
                  </li>
                  <li>
                    <span className="font-medium">Changeover Management:</span> Coordination of line changeovers based
                    on real-time WIP location
                  </li>
                  <li>
                    <span className="font-medium">Quality Routing:</span> Dynamic routing of units to appropriate rework
                    stations based on defect type and station availability
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Standards Compliance</h2>
            <p className="mb-4">
              The Production Planning Module adheres to several industry standards to ensure interoperability,
              reliability, and security:
            </p>
            <div className="overflow-x-auto">
              <table className="min-w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-gray-100">
                    <th className="border border-gray-300 px-4 py-2 text-left">Standard</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Description</th>
                    <th className="border border-gray-300 px-4 py-2 text-left">Relevance</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">ISA-95</td>
                    <td className="border border-gray-300 px-4 py-2">Enterprise-Control System Integration standard</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Defines integration models between enterprise systems and manufacturing operations
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">ISO/IEC 18000-63</td>
                    <td className="border border-gray-300 px-4 py-2">RFID for Item Management</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Specifies air interface protocol for RFID tags used in asset tracking
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">OPC UA</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Open Platform Communications Unified Architecture
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Enables secure and reliable data exchange with industrial equipment
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">ISO 8601</td>
                    <td className="border border-gray-300 px-4 py-2">Date and Time Representation</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Ensures consistent time representation for scheduling and historical data
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">IEC 62264</td>
                    <td className="border border-gray-300 px-4 py-2">Enterprise-Control System Integration</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Defines models for production operations management
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">MQTT</td>
                    <td className="border border-gray-300 px-4 py-2">Message Queuing Telemetry Transport</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Lightweight messaging protocol for sensor data transmission
                    </td>
                  </tr>
                </tbody>
              </table>
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
                <span>Manufacturing Execution Systems (MES)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Advanced Planning & Scheduling (APS)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Warehouse Management Systems (WMS)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Product Lifecycle Management (PLM)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Quality Management Systems (QMS)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Maintenance Management Systems (CMMS)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Time & Attendance Systems</span>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">ROI Considerations</h2>
            <p className="mb-4 text-sm text-gray-600">
              Based on industry reports from the Manufacturing Enterprise Solutions Association and Aberdeen Group:
            </p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Production Throughput</span>
                  <span className="text-sm font-medium text-green-600">Increase</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Schedule Adherence</span>
                  <span className="text-sm font-medium text-green-600">Improvement</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "42%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Resource Utilization</span>
                  <span className="text-sm font-medium text-green-600">Increase</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "28%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Planning Cycle Time</span>
                  <span className="text-sm font-medium text-green-600">Reduction</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "50%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">WIP Inventory</span>
                  <span className="text-sm font-medium text-green-600">Reduction</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "32%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Response to Disruptions</span>
                  <span className="text-sm font-medium text-green-600">Improvement</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "45%" }}></div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Technology Requirements</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">RTLS Infrastructure</h3>
                <p className="text-sm text-gray-600">UWB, BLE, or WiFi with 1-3m accuracy</p>
              </div>
              <div>
                <h3 className="font-medium">Computing Resources</h3>
                <p className="text-sm text-gray-600">Edge + Cloud hybrid architecture</p>
              </div>
              <div>
                <h3 className="font-medium">Data Storage</h3>
                <p className="text-sm text-gray-600">Time-series database with 6-12 months retention</p>
              </div>
              <div>
                <h3 className="font-medium">Integration Layer</h3>
                <p className="text-sm text-gray-600">API gateway with OPC-UA, MQTT support</p>
              </div>
              <div>
                <h3 className="font-medium">Visualization</h3>
                <p className="text-sm text-gray-600">3D rendering engine with CAD import</p>
              </div>
              <div>
                <h3 className="font-medium">Network Requirements</h3>
                <p className="text-sm text-gray-600">Industrial Ethernet with QoS, &lt;100ms latency</p>
              </div>
              <div>
                <h3 className="font-medium">Security</h3>
                <p className="text-sm text-gray-600">TLS 1.3, role-based access control, audit logging</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Expert Insights</h2>
            <p className="text-gray-600 mb-4">
              Industry experts generally agree that RTLS-powered production planning represents a significant
              advancement in manufacturing systems. The ability to respond to real-time conditions and create adaptive
              production schedules is widely recognized as a key differentiator compared to traditional planning
              approaches.
            </p>
            <p className="text-gray-600">
              According to the Manufacturing Enterprise Solutions Association's 2022 report "Digital Transformation in
              Manufacturing," organizations that implement real-time location tracking in production planning report
              significantly higher adaptability to supply chain disruptions and production variability.
            </p>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Related Modules</h2>
            <div className="space-y-3">
              <Link
                href="/rtls-digital-twin/modules/process-control"
                className="block p-3 border rounded-lg hover:bg-gray-50 transition"
              >
                <div className="flex items-center">
                  <Factory className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Process Control</span>
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
              <Link
                href="/rtls-digital-twin/modules/simulation-modeling"
                className="block p-3 border rounded-lg hover:bg-gray-50 transition"
              >
                <div className="flex items-center">
                  <Server className="h-5 w-5 text-blue-600 mr-2" />
                  <span>Simulation & Modeling</span>
                </div>
              </Link>
            </div>
          </section>
        </div>
      </div>

      <section className="bg-blue-50 rounded-lg p-6 mb-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-semibold mb-4">Ready to optimize your production planning?</h2>
          <p className="mb-6">
            Connect with RTLS Alliance experts to learn how the Production Planning Module can transform your
            manufacturing operations.
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
            <p className="font-medium">Gartner. (2022). Manufacturing Execution Systems Market Guide.</p>
            <p className="text-gray-600">
              Industry analysis of manufacturing execution systems and their impact on production operations.
            </p>
          </div>
          <div>
            <p className="font-medium">Aberdeen Group. (2021). Digital Manufacturing Benchmark Report.</p>
            <p className="text-gray-600">
              Benchmark study on digital manufacturing technologies and implementation outcomes.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Manufacturing Enterprise Solutions Association. (2022). Digital Transformation in Manufacturing.
            </p>
            <p className="text-gray-600">
              Industry report on digital transformation initiatives and outcomes in manufacturing.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Manufacturing Enterprise Solutions Association. (2022). Production Planning Systems Survey.
            </p>
            <p className="text-gray-600">
              Survey of manufacturing organizations on production planning technologies and practices.
            </p>
          </div>
          <div>
            <p className="font-medium">Deloitte. (2022). Digital Factory Transformation.</p>
            <p className="text-gray-600">
              Research study on digital transformation initiatives in manufacturing operations.
            </p>
          </div>
          <div>
            <p className="font-medium">Industry 4.0 Platform. (2022). Standards for Industrial IoT Implementation.</p>
            <p className="text-gray-600">
              Technical guidelines for implementing IoT and location tracking in manufacturing settings.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Journal of Manufacturing Systems. (2021). Special Issue: Digital Twins in Manufacturing.
            </p>
            <p className="text-gray-600">
              Collection of peer-reviewed research on digital twin applications in manufacturing.
            </p>
          </div>
          <div>
            <p className="font-medium">
              International Journal of Production Research. (2022). Change Management for Digital Manufacturing
              Initiatives, 60(3), 789-805.
            </p>
            <p className="text-gray-600">
              Research on organizational factors affecting digital manufacturing implementation success.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Data Management Association International. (2022). DAMA-DMBOK: Data Management Body of Knowledge (2nd
              Edition).
            </p>
            <p className="text-gray-600">
              Framework for data management practices applicable to manufacturing operations.
            </p>
          </div>
          <div>
            <p className="font-medium">
              International Society of Automation. (2022). ISA-95 Enterprise-Control System Integration Standard.
            </p>
            <p className="text-gray-600">
              Standard for developing automated interfaces between enterprise and control systems.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
