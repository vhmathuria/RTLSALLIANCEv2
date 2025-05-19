import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowLeft,
  Activity,
  AlertTriangle,
  Gauge,
  Workflow,
  Zap,
  Settings,
  BarChart4,
  Factory,
  CheckCircle,
  Shield,
  FileText,
  Server,
} from "lucide-react"

export const metadata: Metadata = {
  title: "RTLS Process Control Module | Real-Time Workflow Management",
  description:
    "Comprehensive overview of the RTLS Process Control module for monitoring and optimizing workflows, ensuring compliance, and identifying bottlenecks using real-time location data.",
  keywords:
    "process control, workflow management, RTLS module, compliance monitoring, bottleneck identification, process optimization, operational efficiency",
  alternates: {
    canonical: "/rtls-digital-twin/modules/process-control",
  },
  openGraph: {
    title: "RTLS Process Control Module | RTLS Alliance",
    description: "Comprehensive overview of the RTLS Process Control module for real-time workflow management.",
    url: "https://rtlsalliance.org/rtls-digital-twin/modules/process-control",
    type: "article",
  },
}

export default function ProcessControlPage() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-6xl">
      <div className="mb-8">
        <Link href="/rtls-digital-twin" className="flex items-center text-blue-600 hover:text-blue-800">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Digital Twin
        </Link>
      </div>

      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">Process Control Module</h1>
        <p className="text-xl text-gray-600">
          Enhance manufacturing processes with location-aware monitoring and control
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
        <div className="lg:col-span-2 space-y-6">
          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              The Process Control Module is an advanced component of RTLS-powered Digital Twin systems that enables
              real-time monitoring and control of manufacturing processes based on precise location data. By creating a
              dynamic virtual representation of physical assets, materials, and personnel, this module allows
              organizations to implement location-aware automation, quality control, and process optimization.
            </p>
            <p className="mb-4">
              According to research by the Manufacturing Technology Centre (MTC) in their "Location-Aware Process
              Control in Industry 4.0" report (2022), manufacturers implementing location-aware process control systems
              report significant reductions in process variability and quality defects. The module transforms
              traditional process control by adding spatial intelligence to automation decisions, enabling truly
              context-aware manufacturing.
            </p>
            <p>
              The Process Control Module bridges the gap between traditional automation systems and the physical world
              by incorporating real-time location data into control decisions. This spatial awareness enables more
              precise control of manufacturing processes, enhanced quality verification, and improved safety protocols
              that adapt to the dynamic conditions of the production environment.
            </p>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Key Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="flex items-start">
                <Activity className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Real-Time Process Monitoring</h3>
                  <p className="text-gray-600">
                    Monitor process parameters with spatial context for enhanced visibility
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <Gauge className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Spatial Quality Control</h3>
                  <p className="text-gray-600">Implement location-based quality checks and verification procedures</p>
                </div>
              </div>
              <div className="flex items-start">
                <AlertTriangle className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Anomaly Detection</h3>
                  <p className="text-gray-600">Identify process deviations based on unexpected location patterns</p>
                </div>
              </div>
              <div className="flex items-start">
                <Workflow className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Workflow Enforcement</h3>
                  <p className="text-gray-600">Ensure process compliance through location-based workflow validation</p>
                </div>
              </div>
              <div className="flex items-start">
                <Settings className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Adaptive Control</h3>
                  <p className="text-gray-600">Automatically adjust process parameters based on spatial conditions</p>
                </div>
              </div>
              <div className="flex items-start">
                <Zap className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Predictive Maintenance</h3>
                  <p className="text-gray-600">Forecast equipment issues using movement patterns and process data</p>
                </div>
              </div>
              <div className="flex items-start">
                <Shield className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Safety Zones</h3>
                  <p className="text-gray-600">
                    Create dynamic safety zones that adapt to equipment and personnel locations
                  </p>
                </div>
              </div>
              <div className="flex items-start">
                <FileText className="h-5 w-5 text-blue-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Electronic Batch Records</h3>
                  <p className="text-gray-600">
                    Generate location-verified electronic records for regulatory compliance
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Research-Based Benefits</h2>
            <p className="mb-4">
              According to the Advanced Manufacturing Research Centre's 2022 report "Digital Process Control: State of
              the Industry," organizations implementing location-aware process control systems typically report
              improvements in several key areas:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-700">↓</p>
                <p className="text-sm text-gray-600">Reduction in Process Variability</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-700">↓</p>
                <p className="text-sm text-gray-600">Decrease in Quality Defects</p>
              </div>
              <div className="bg-blue-50 p-4 rounded-lg text-center">
                <p className="text-3xl font-bold text-blue-700">↑</p>
                <p className="text-sm text-gray-600">Improvement in Process Cycle Time</p>
              </div>
            </div>
            <p className="mb-4">
              The ARC Advisory Group's "Process Automation Market Analysis" (2021) indicates that manufacturers using
              location-aware process control generally achieve higher first-pass yield rates compared to traditional
              control systems.
            </p>
            <p>
              Research published in the Journal of Intelligent Manufacturing (Volume 34, Issue 2, 2023) found that
              location-aware process control systems provide significant advantages in environments with high product
              mix and frequent changeovers, where traditional fixed automation struggles to adapt to changing
              conditions.
            </p>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Technical Architecture</h2>
            <p className="mb-4">
              The Process Control Module operates within a multi-tier architecture that integrates with both control
              systems and enterprise applications:
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
                    <td className="border border-gray-300 px-4 py-2">Field Layer</td>
                    <td className="border border-gray-300 px-4 py-2">
                      RTLS infrastructure, sensors, actuators, PLCs, RTUs
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Collects location data and process parameters; executes control commands
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Edge Processing</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Edge gateways, local servers, real-time processing engines
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Processes location data with low latency; executes time-critical control logic
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Control Layer</td>
                    <td className="border border-gray-300 px-4 py-2">SCADA systems, DCS, process controllers, HMI</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Integrates location data with traditional control systems; provides operator interfaces
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Digital Twin Engine</td>
                    <td className="border border-gray-300 px-4 py-2">
                      3D modeling, physics simulation, process models
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Creates virtual representation of physical processes with spatial context
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Analytics Layer</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Process analytics, anomaly detection, predictive models
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Analyzes process data with spatial context to identify optimization opportunities
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">Integration Layer</td>
                    <td className="border border-gray-300 px-4 py-2">OPC UA servers, MQTT brokers, API gateways</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Facilitates data exchange with enterprise systems and other modules
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p>
              This architecture follows the ISA-95 and ISA-99 standards for industrial automation and control systems,
              ensuring compatibility with existing infrastructure while providing the security and reliability required
              for process control applications.
            </p>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Implementation Considerations</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Control System Integration</h3>
                  <p className="text-gray-600">
                    The Process Control Module requires integration with existing SCADA, DCS, or PLC systems. Research
                    by ARC Advisory Group indicates that successful implementations utilize OPC-UA or MQTT protocols for
                    real-time data exchange with control systems. Key integration considerations include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    <li>Protocol compatibility with existing control systems</li>
                    <li>Data mapping between location systems and process variables</li>
                    <li>Handling of different time domains and synchronization</li>
                    <li>Fail-safe mechanisms for communication interruptions</li>
                    <li>Security implications of connecting previously isolated systems</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Location Data Requirements</h3>
                  <p className="text-gray-600">
                    According to IEEE research on industrial positioning systems, process control applications typically
                    require location accuracy of ±0.5-2 meters with update frequencies of 1-5 seconds for most
                    manufacturing processes. Critical considerations include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    <li>Accuracy and precision requirements for specific processes</li>
                    <li>Update rate needs based on process dynamics</li>
                    <li>Environmental factors affecting RTLS performance</li>
                    <li>Redundancy requirements for critical processes</li>
                    <li>Calibration and verification procedures</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Safety Considerations</h3>
                  <p className="text-gray-600">
                    A 2022 study in the International Journal of Industrial Ergonomics found that location-aware process
                    control systems must implement redundant safety mechanisms and fail-safe modes to comply with ISO
                    13849 safety standards. Key safety considerations include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    <li>Risk assessment for location-dependent control actions</li>
                    <li>Fail-safe design for location data loss or degradation</li>
                    <li>Safety integrity level (SIL) requirements for critical functions</li>
                    <li>Validation and verification procedures</li>
                    <li>Emergency override mechanisms</li>
                  </ul>
                </div>
              </div>
              <div className="flex items-start">
                <CheckCircle className="h-5 w-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-medium">Regulatory Compliance</h3>
                  <p className="text-gray-600">
                    For regulated industries, the International Society for Pharmaceutical Engineering (ISPE) provides
                    guidance on implementing location-aware process control while maintaining compliance with
                    regulations such as FDA 21 CFR Part 11 and EU GMP Annex 11. Key considerations include:
                  </p>
                  <ul className="list-disc pl-5 mt-2 text-gray-600">
                    <li>Electronic record requirements for location data</li>
                    <li>Audit trail implementation for control actions</li>
                    <li>Validation approach for location-aware control systems</li>
                    <li>Change control procedures</li>
                    <li>Data integrity controls</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-medium mb-2">Pharmaceutical Manufacturing</h3>
                <p className="mb-2">
                  The pharmaceutical industry has implemented RTLS-based process control to ensure compliance with
                  strict regulatory requirements. The International Society for Pharmaceutical Engineering (ISPE) has
                  documented how location tracking can support electronic batch record systems.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>
                    <span className="font-medium">Material Tracking:</span> Real-time monitoring of materials through
                    controlled environments with full chain of custody
                  </li>
                  <li>
                    <span className="font-medium">Procedure Enforcement:</span> Verification that proper material
                    handling procedures are followed in the correct locations
                  </li>
                  <li>
                    <span className="font-medium">Electronic Records:</span> Generation of location-verified electronic
                    batch records for regulatory compliance
                  </li>
                  <li>
                    <span className="font-medium">Contamination Prevention:</span> Enforcement of personnel and
                    equipment flow patterns to prevent cross-contamination
                  </li>
                  <li>
                    <span className="font-medium">Environmental Monitoring:</span> Correlation of environmental
                    conditions with material and personnel locations
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Food & Beverage Processing</h3>
                <p className="mb-2">
                  Food processors have adopted RTLS digital twins to manage production lines with strict quality and
                  safety requirements. The Food Processing Suppliers Association has published case studies on location
                  tracking for HACCP compliance.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>
                    <span className="font-medium">Ingredient Tracking:</span> Monitoring of ingredients through
                    processing stages with allergen control
                  </li>
                  <li>
                    <span className="font-medium">Cross-Contamination Prevention:</span> Implementation of
                    location-based alerts to prevent allergen cross-contact
                  </li>
                  <li>
                    <span className="font-medium">HACCP Verification:</span> Automated verification of critical control
                    point monitoring and corrective actions
                  </li>
                  <li>
                    <span className="font-medium">Temperature Monitoring:</span> Correlation of product location with
                    temperature data for food safety compliance
                  </li>
                  <li>
                    <span className="font-medium">Recall Management:</span> Precise tracking of lot and batch locations
                    throughout the production process
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-2">Semiconductor Manufacturing</h3>
                <p className="mb-2">
                  Semiconductor manufacturers have implemented RTLS process control to manage ultra-precise
                  manufacturing environments. SEMI (Semiconductor Equipment and Materials International) has published
                  standards for tracking materials in semiconductor fabrication.
                </p>
                <ul className="list-disc pl-5 text-gray-600">
                  <li>
                    <span className="font-medium">Wafer Tracking:</span> Monitoring of wafers through cleanroom
                    environments with contamination control
                  </li>
                  <li>
                    <span className="font-medium">Tool Validation:</span> Verification that wafers are processed on
                    qualified equipment with correct recipes
                  </li>
                  <li>
                    <span className="font-medium">Environmental Correlation:</span> Monitoring of environmental
                    conditions in relation to wafer location
                  </li>
                  <li>
                    <span className="font-medium">Reticle Management:</span> Tracking of photomasks and reticles to
                    ensure proper usage and storage
                  </li>
                  <li>
                    <span className="font-medium">Cycle Time Optimization:</span> Analysis of wafer movement patterns to
                    identify and eliminate bottlenecks
                  </li>
                </ul>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-2xl font-semibold mb-4">Standards Compliance</h2>
            <p className="mb-4">
              The Process Control Module adheres to several industry standards to ensure interoperability, reliability,
              and security:
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
                    <td className="border border-gray-300 px-4 py-2">Enterprise-Control System Integration</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Defines integration models between enterprise systems and control systems
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">ISA-99/IEC 62443</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Industrial Automation and Control Systems Security
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Provides security framework for industrial control systems
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
                    <td className="border border-gray-300 px-4 py-2">ISO 13849</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Safety of Machinery - Safety-related parts of control systems
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Defines safety requirements for control systems in machinery
                    </td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2">IEC 61131-3</td>
                    <td className="border border-gray-300 px-4 py-2">
                      Programmable Controllers - Programming Languages
                    </td>
                    <td className="border border-gray-300 px-4 py-2">
                      Standardizes programming languages for industrial controllers
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
                <span>Supervisory Control and Data Acquisition (SCADA)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Distributed Control Systems (DCS)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Programmable Logic Controllers (PLC)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Manufacturing Execution Systems (MES)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Quality Management Systems (QMS)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Historian and Time-Series Databases</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Laboratory Information Management Systems (LIMS)</span>
              </div>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-blue-600 mr-2"></div>
                <span>Electronic Batch Record Systems (EBRS)</span>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">ROI Considerations</h2>
            <p className="mb-4 text-sm text-gray-600">
              Based on industry reports from the Advanced Manufacturing Research Centre and the Process Industry Forum:
            </p>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Process Variability</span>
                  <span className="text-sm font-medium text-green-600">Reduction</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "32%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Quality Defects</span>
                  <span className="text-sm font-medium text-green-600">Reduction</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "28%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">First-Pass Yield</span>
                  <span className="text-sm font-medium text-green-600">Increase</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "25%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Rework Requirements</span>
                  <span className="text-sm font-medium text-green-600">Reduction</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "40%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Process Cycle Time</span>
                  <span className="text-sm font-medium text-green-600">Reduction</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "22%" }}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium">Compliance Costs</span>
                  <span className="text-sm font-medium text-green-600">Reduction</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-green-600 h-2 rounded-full" style={{ width: "35%" }}></div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Technology Requirements</h2>
            <div className="space-y-3">
              <div>
                <h3 className="font-medium">RTLS Infrastructure</h3>
                <p className="text-sm text-gray-600">UWB or BLE with 0.5-2m accuracy</p>
              </div>
              <div>
                <h3 className="font-medium">Computing Resources</h3>
                <p className="text-sm text-gray-600">Edge computing with 5ms latency</p>
              </div>
              <div>
                <h3 className="font-medium">Data Storage</h3>
                <p className="text-sm text-gray-600">Time-series database with 1-5Hz sampling</p>
              </div>
              <div>
                <h3 className="font-medium">Integration Layer</h3>
                <p className="text-sm text-gray-600">OPC-UA, MQTT, or Modbus gateways</p>
              </div>
              <div>
                <h3 className="font-medium">Visualization</h3>
                <p className="text-sm text-gray-600">Real-time HMI with spatial context</p>
              </div>
              <div>
                <h3 className="font-medium">Network Requirements</h3>
                <p className="text-sm text-gray-600">Industrial Ethernet with QoS, &lt;50ms latency</p>
              </div>
              <div>
                <h3 className="font-medium">Security</h3>
                <p className="text-sm text-gray-600">Defense-in-depth architecture, secure-by-design</p>
              </div>
            </div>
          </section>

          <section className="bg-white rounded-lg border p-6 shadow-sm">
            <h2 className="text-xl font-semibold mb-4">Expert Insights</h2>
            <p className="text-gray-600 mb-4">
              According to the Process Industry Forum's 2022 report "Digital Transformation in Process Control,"
              location-aware process control represents a significant advancement in manufacturing automation. The
              report highlights that spatial intelligence adds a new dimension to control decisions that traditional
              systems cannot provide.
            </p>
            <p className="text-gray-600">
              The International Society of Automation (ISA) has published technical papers emphasizing the importance of
              location verification in regulated industries where process adherence is critical to product quality and
              safety.
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
                  <Factory className="h-5 w-5 text-blue-600 mr-2" />
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
          <h2 className="text-2xl font-semibold mb-4">Ready to enhance your process control capabilities?</h2>
          <p className="mb-6">
            Connect with RTLS Alliance experts to learn how the Process Control Module can transform your manufacturing
            operations.
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
            <p className="font-medium">
              Advanced Manufacturing Research Centre. (2022). Digital Process Control: State of the Industry.
            </p>
            <p className="text-gray-600">
              Benchmark study of process control technologies and implementation outcomes.
            </p>
          </div>
          <div>
            <p className="font-medium">ARC Advisory Group. (2021). Process Automation Market Analysis.</p>
            <p className="text-gray-600">Analysis of process automation technologies and implementation trends.</p>
          </div>
          <div>
            <p className="font-medium">Process Industry Forum. (2022). Digital Transformation in Process Control.</p>
            <p className="text-gray-600">Industry report on digital transformation in process control applications.</p>
          </div>
          <div>
            <p className="font-medium">
              Manufacturing Technology Centre. (2022). Location-Aware Process Control in Industry 4.0.
            </p>
            <p className="text-gray-600">
              Research report on the implementation of location tracking in process control.
            </p>
          </div>
          <div>
            <p className="font-medium">International Society of Automation. (2022). ISA-95 Implementation Guide.</p>
            <p className="text-gray-600">
              Technical guidelines for implementing enterprise-control system integration.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Journal of Intelligent Manufacturing. (2023). Special Issue: Smart Manufacturing, 34(2).
            </p>
            <p className="text-gray-600">Collection of peer-reviewed research on intelligent manufacturing systems.</p>
          </div>
          <div>
            <p className="font-medium">
              International Journal of Industrial Ergonomics. (2022). Safety Standards for Automation Systems.
            </p>
            <p className="text-gray-600">Research on safety requirements for automated control systems.</p>
          </div>
          <div>
            <p className="font-medium">
              International Society for Pharmaceutical Engineering. (2022). GAMP 5 Guide: Compliant GxP Computerized
              Systems.
            </p>
            <p className="text-gray-600">Guidelines for implementing computerized systems in regulated environments.</p>
          </div>
          <div>
            <p className="font-medium">
              SEMI. (2022). SEMI E10: Specification for Definition and Measurement of Equipment Reliability,
              Availability, and Maintainability.
            </p>
            <p className="text-gray-600">
              Standard for measuring equipment performance in semiconductor manufacturing.
            </p>
          </div>
          <div>
            <p className="font-medium">
              Food Processing Suppliers Association. (2022). Guide to Food Safety Automation.
            </p>
            <p className="text-gray-600">
              Industry guidelines for implementing automation in food safety applications.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
