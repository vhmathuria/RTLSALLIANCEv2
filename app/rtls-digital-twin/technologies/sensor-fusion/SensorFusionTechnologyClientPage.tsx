"use client"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Navigation,
  Compass,
  Clock,
  Zap,
  Building,
  Ruler,
  Wifi,
  Radio,
  GitMerge,
  Map,
  Camera,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useScrollToTop } from "@/hooks/useScrollToTop"

export default function SensorFusionTechnologyClientPage() {
  useScrollToTop()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Sensor Fusion Technology for Real-Time Location Systems</h1>

          <div className="prose max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Sensor fusion combines data from multiple positioning technologies to create a more accurate, reliable,
              and comprehensive real-time location system that overcomes the limitations of any single technology.
            </p>

            <div className="relative h-80 w-full rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder-rjuey.png"
                alt="Sensor fusion diagram showing multiple data sources being combined for indoor positioning"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">What is Sensor Fusion Technology?</h2>
            <p className="mb-4">
              Sensor fusion is an approach to real-time location systems that integrates data from multiple sensing
              technologies to produce positioning information that is more accurate, reliable, and comprehensive than
              what could be achieved using any single technology. Rather than being a standalone positioning technology,
              sensor fusion is a methodology that leverages the strengths of various positioning systems while
              mitigating their individual weaknesses.
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>Multi-Technology Integration</strong> - Combines data from diverse positioning systems
              </li>
              <li>
                <strong>Complementary Strengths</strong> - Leverages the advantages of each technology
              </li>
              <li>
                <strong>Algorithmic Processing</strong> - Uses advanced algorithms to merge and interpret data
              </li>
              <li>
                <strong>Adaptive Weighting</strong> - Dynamically adjusts the influence of each data source
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">How Sensor Fusion Works</h2>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Core Principles of Sensor Fusion</h3>
              <p className="mb-4">Sensor fusion for RTLS typically follows these key steps:</p>

              <ol className="list-decimal pl-6 mb-4">
                <li>
                  <strong>Data Collection</strong> - Gathering raw positioning data from multiple sensors and
                  technologies
                </li>
                <li>
                  <strong>Preprocessing</strong> - Filtering, normalizing, and preparing data from each source
                </li>
                <li>
                  <strong>Alignment</strong> - Converting data to common coordinate systems and time references
                </li>
                <li>
                  <strong>Fusion Algorithm Application</strong> - Combining data using statistical or AI-based methods
                </li>
                <li>
                  <strong>Confidence Estimation</strong> - Determining reliability of the fused position estimate
                </li>
                <li>
                  <strong>Output Generation</strong> - Producing final position data with associated metadata
                </li>
              </ol>

              <h4 className="font-semibold mt-4 mb-2">Common Fusion Approaches:</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Kalman Filtering</strong> - Statistical method for optimal estimation with noisy measurements
                </li>
                <li>
                  <strong>Particle Filtering</strong> - Probabilistic approach for non-linear systems
                </li>
                <li>
                  <strong>Bayesian Methods</strong> - Probability-based fusion incorporating prior knowledge
                </li>
                <li>
                  <strong>Machine Learning</strong> - Neural networks and other AI techniques for complex fusion
                </li>
                <li>
                  <strong>Fuzzy Logic</strong> - Handling uncertainty and imprecision in sensor data
                </li>
              </ul>
            </div>

            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder-6tk4d.png"
                alt="Kalman filter sensor fusion algorithm visualization for RTLS"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4">Common Technology Combinations</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <GitMerge className="mr-2 h-5 w-5 text-blue-600" />
                    Indoor Combinations
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>BLE + Wi-Fi</strong> - Widespread coverage with varying granularity
                    </li>
                    <li>
                      <strong>UWB + Inertial</strong> - High accuracy with continuous tracking
                    </li>
                    <li>
                      <strong>Magnetic + BLE</strong> - Infrastructure-light with enhanced accuracy
                    </li>
                    <li>
                      <strong>Camera + UWB</strong> - Visual context with precise positioning
                    </li>
                    <li>
                      <strong>Ultrasound + RF</strong> - Precision with synchronization and backup
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <GitMerge className="mr-2 h-5 w-5 text-blue-600" />
                    Indoor-Outdoor Combinations
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>GNSS + Wi-Fi</strong> - Seamless transition between outdoor and indoor
                    </li>
                    <li>
                      <strong>GNSS + BLE + Inertial</strong> - Continuous tracking across environments
                    </li>
                    <li>
                      <strong>GNSS + UWB</strong> - High accuracy in both domains
                    </li>
                    <li>
                      <strong>GNSS + Cellular + Wi-Fi</strong> - Wide coverage with varying precision
                    </li>
                    <li>
                      <strong>RTK-GPS + Indoor Technologies</strong> - Centimeter-level outdoor to indoor
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Sensor Fusion for Real-Time Location Systems</h2>
            <p className="mb-4">
              When implemented as part of an RTLS solution, sensor fusion offers several unique capabilities:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Ruler className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Enhanced Accuracy</h3>
                </div>
                <p className="text-sm">Combining technologies improves overall positioning precision</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Building className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Seamless Coverage</h3>
                </div>
                <p className="text-sm">Maintains tracking across diverse environments and transitions</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Wifi className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Resilience</h3>
                </div>
                <p className="text-sm">Continues functioning when individual technologies fail</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Advantages and Limitations</h2>

            <Tabs defaultValue="advantages" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="advantages">Advantages</TabsTrigger>
                <TabsTrigger value="limitations">Limitations</TabsTrigger>
              </TabsList>
              <TabsContent value="advantages" className="p-4 bg-white border rounded-b-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Improved Accuracy</strong> - Combines multiple data sources for more precise positioning
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Enhanced Reliability</strong> - Continues functioning when individual systems fail
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Seamless Transitions</strong> - Maintains tracking across different environments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Adaptability</strong> - Can adjust to changing conditions and requirements
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Comprehensive Data</strong> - Provides richer contextual information beyond just position
                    </span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="limitations" className="p-4 bg-white border rounded-b-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Increased Complexity</strong> - More components and integration points to manage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Higher Cost</strong> - Multiple technologies typically increase overall system cost
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Processing Overhead</strong> - Fusion algorithms require computational resources
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Calibration Challenges</strong> - Multiple systems must be aligned and calibrated together
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Integration Complexity</strong> - Different technologies may have incompatible interfaces
                    </span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Considerations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">System Architecture</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Centralized vs. Distributed</strong> - Where fusion processing occurs
                    </li>
                    <li>
                      <strong>Real-time Requirements</strong> - Latency constraints for fusion processing
                    </li>
                    <li>
                      <strong>Scalability</strong> - Handling growing numbers of sensors and tracked objects
                    </li>
                    <li>
                      <strong>Fault Tolerance</strong> - Graceful degradation when components fail
                    </li>
                    <li>
                      <strong>Data Storage</strong> - Managing historical data for analysis and calibration
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Algorithm Selection</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Fusion Method</strong> - Choosing appropriate algorithms for your use case
                    </li>
                    <li>
                      <strong>Adaptive Weighting</strong> - How to adjust confidence in different data sources
                    </li>
                    <li>
                      <strong>Outlier Rejection</strong> - Handling erroneous or inconsistent measurements
                    </li>
                    <li>
                      <strong>Calibration Procedures</strong> - Aligning multiple positioning systems
                    </li>
                    <li>
                      <strong>Performance Metrics</strong> - Evaluating fusion quality and accuracy
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4">Technology Selection Matrix</h3>

            <div className="overflow-x-auto mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Primary Need</TableHead>
                    <TableHead>Recommended Technologies</TableHead>
                    <TableHead>Fusion Approach</TableHead>
                    <TableHead>Best For</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">High Accuracy</TableCell>
                    <TableCell>UWB + Inertial + Camera</TableCell>
                    <TableCell>Extended Kalman Filter</TableCell>
                    <TableCell>Manufacturing, Robotics</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Wide Coverage</TableCell>
                    <TableCell>Wi-Fi + BLE + Cellular</TableCell>
                    <TableCell>Particle Filter</TableCell>
                    <TableCell>Campus, Warehouse</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Indoor-Outdoor</TableCell>
                    <TableCell>GNSS + Wi-Fi + Inertial</TableCell>
                    <TableCell>Switching Kalman Filter</TableCell>
                    <TableCell>Logistics, Field Service</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Low Infrastructure</TableCell>
                    <TableCell>Magnetic + Inertial + BLE</TableCell>
                    <TableCell>Complementary Filter</TableCell>
                    <TableCell>Retail, Existing Buildings</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">High Reliability</TableCell>
                    <TableCell>Multiple Redundant Systems</TableCell>
                    <TableCell>Federated Fusion</TableCell>
                    <TableCell>Healthcare, Safety Critical</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Industry Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Healthcare</h3>
                <p className="text-sm mb-3">
                  Continuous patient and asset tracking across diverse hospital environments
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>High adoption rate</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Logistics & Supply Chain</h3>
                <p className="text-sm mb-3">
                  Seamless tracking from warehouse to delivery across multiple environments
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Growing rapidly</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Manufacturing</h3>
                <p className="text-sm mb-3">
                  Precise tracking of tools, materials, and personnel in complex facilities
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>High ROI use case</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Retail</h3>
                <p className="text-sm mb-3">
                  Enhanced customer experience through personalized navigation and inventory management
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>High adoption rate</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Smart Buildings</h3>
                <p className="text-sm mb-3">
                  Optimized energy consumption and improved occupant safety through real-time monitoring
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Increasing demand</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Transportation</h3>
                <p className="text-sm mb-3">
                  Enhanced vehicle tracking and navigation for improved safety and efficiency
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Emerging technology</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Future Trends in Sensor Fusion</h2>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Emerging Developments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Edge Computing Fusion</h4>
                  <p className="text-sm mb-4">
                    Moving fusion processing to edge devices for lower latency and reduced bandwidth requirements
                  </p>

                  <h4 className="font-semibold mb-2">Deep Learning Integration</h4>
                  <p className="text-sm mb-4">
                    Neural networks and other AI techniques for more sophisticated sensor fusion
                  </p>

                  <h4 className="font-semibold mb-2">Federated Fusion Architectures</h4>
                  <p className="text-sm">
                    Distributed processing frameworks that combine local and global fusion for scalability
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Adaptive Fusion Algorithms</h4>
                  <p className="text-sm mb-4">
                    Self-tuning systems that automatically adjust to changing environments and requirements
                  </p>

                  <h4 className="font-semibold mb-2">Crowdsourced Sensor Networks</h4>
                  <p className="text-sm mb-4">
                    Leveraging mobile devices and IoT sensors for wide-area fusion without dedicated infrastructure
                  </p>

                  <h4 className="font-semibold mb-2">Standardized Fusion Interfaces</h4>
                  <p className="text-sm">
                    Common APIs and protocols for easier integration of diverse positioning technologies
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Comparison with Single-Technology RTLS</h2>

            <div className="overflow-x-auto mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>Sensor Fusion</TableHead>
                    <TableHead>Single Technology</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Accuracy</TableCell>
                    <TableCell>Higher (combines strengths)</TableCell>
                    <TableCell>Limited by technology constraints</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Reliability</TableCell>
                    <TableCell>Higher (redundant systems)</TableCell>
                    <TableCell>Single point of failure</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Coverage</TableCell>
                    <TableCell>Broader (multiple technologies)</TableCell>
                    <TableCell>Limited to technology range</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Cost</TableCell>
                    <TableCell>Higher (multiple systems)</TableCell>
                    <TableCell>Lower (single system)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Complexity</TableCell>
                    <TableCell>Higher (integration challenges)</TableCell>
                    <TableCell>Lower (simpler architecture)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Adaptability</TableCell>
                    <TableCell>Higher (multiple options)</TableCell>
                    <TableCell>Limited to technology capabilities</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Best Practices</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Start with Clear Requirements</h3>
                <p className="text-sm">
                  Define accuracy, coverage, reliability, and latency requirements before selecting technologies.
                  Different applications have different needs, and the fusion approach should be tailored accordingly.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Select Complementary Technologies</h3>
                <p className="text-sm">
                  Choose technologies that address each other's weaknesses. For example, combine a high-accuracy
                  technology that requires line-of-sight with a lower-accuracy technology that works through obstacles.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Implement Proper Calibration</h3>
                <p className="text-sm">
                  Develop robust procedures for aligning coordinate systems and synchronizing timing across different
                  technologies. Regular recalibration may be necessary as environments change.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Design for Graceful Degradation</h3>
                <p className="text-sm">
                  Ensure the system can continue functioning, perhaps with reduced accuracy or coverage, when one or
                  more technologies are unavailable. Implement fallback modes and clear confidence metrics.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Monitor Fusion Performance</h3>
                <p className="text-sm">
                  Implement tools to continuously evaluate the quality of fusion results and detect when recalibration
                  or maintenance is needed. Track metrics like position error, update rate, and confidence levels.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              Sensor fusion represents the next evolution in real-time location systems, moving beyond the limitations
              of single-technology approaches to deliver more accurate, reliable, and comprehensive positioning
              solutions. By intelligently combining data from multiple technologies, sensor fusion can address the
              complex tracking requirements of modern applications across healthcare, logistics, manufacturing, and
              other industries.
            </p>
            <p className="mb-4">
              While implementing sensor fusion introduces additional complexity and cost compared to single-technology
              systems, the benefits in terms of performance and reliability often justify the investment, particularly
              for mission-critical applications or those with challenging environmental conditions.
            </p>
            <p>
              As edge computing capabilities advance and fusion algorithms become more sophisticated, we can expect
              sensor fusion to become increasingly accessible and powerful, enabling new applications and use cases that
              were previously impractical with traditional RTLS approaches.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">Sensor Fusion Technology Overview</h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Building className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Infrastructure</h4>
                  <p className="text-sm text-gray-600">Multiple sensor types (varies by implementation)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Ruler className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Accuracy Range</h4>
                  <p className="text-sm text-gray-600">Varies by sensors used (typically improved)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Compass className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Environment</h4>
                  <p className="text-sm text-gray-600">Indoor/outdoor, challenging environments</p>
                </div>
              </div>

              <div className="flex items-start">
                <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Power Requirements</h4>
                  <p className="text-sm text-gray-600">Medium to high (multiple sensors)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Setup Time</h4>
                  <p className="text-sm text-gray-600">Medium to high (multiple systems)</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Ideal Applications</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Mission-critical tracking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Indoor-outdoor transitions</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Challenging RF environments</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">High-reliability applications</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Complex multi-floor facilities</span>
              </li>
            </ul>

            <Link href="/contact">
              <Button className="w-full">Contact RTLS Expert</Button>
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">Related Technologies</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/slam"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Map className="h-4 w-4 mr-2" />
                  <span>SLAM</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/dead-reckoning"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  <span>Dead Reckoning + RTLS Anchors</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/uwb"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Radio className="h-4 w-4 mr-2" />
                  <span>Ultra-Wideband (UWB)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/ble"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Radio className="h-4 w-4 mr-2" />
                  <span>Bluetooth Low Energy (BLE)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/lidar"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  <span>LiDAR</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="resources/enterprise-rtls-step-by-step-implementation-guide"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>RTLS Implementation Guide</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/rtls-accuracy-precision-explained-sub-meter-positioning"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>RTLS Accuracy Guide</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
