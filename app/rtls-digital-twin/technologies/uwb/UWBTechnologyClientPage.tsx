"use client"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Compass,
  Clock,
  Zap,
  Building,
  Ruler,
  Radio,
  Smartphone,
  Server,
  Layers,
  AlertTriangle,
  Wifi,
  Satellite,
  Camera,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useScrollToTop } from "@/hooks/useScrollToTop"
import Image from "next/image"

export default function UWBTechnologyClientPage() {
  useScrollToTop()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">UWB Technology for Real-Time Location Systems</h1>

          <div className="prose max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Ultra-Wideband (UWB) is a radio technology that uses very low energy levels for short-range,
              high-bandwidth communications over a large portion of the radio spectrum.
            </p>

            <div className="relative h-80 w-full rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder-yj8h8.png"
                alt="UWB satellite constellations providing global positioning"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">What is UWB Technology?</h2>
            <p>
              Ultra-Wideband (UWB) is a radio technology that uses very low energy levels for short-range,
              high-bandwidth communications over a large portion of the radio spectrum.
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>High Bandwidth</strong> - Exceeding 500 MHz
              </li>
              <li>
                <strong>Short Range</strong> - Typically 10-50 meters
              </li>
              <li>
                <strong>Precise Positioning</strong> - Centimeter-level accuracy
              </li>
              <li>
                <strong>Time-Based Measurements</strong> - Relies on time-of-flight for accuracy
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">How UWB Works for RTLS</h2>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Core Principles of UWB Positioning</h3>
              <p className="mb-4">
                UWB receivers determine their position through a process called trilateration, which involves measuring
                the time it takes for signals to travel from multiple anchors to the receiver:
              </p>
              <ol className="list-decimal pl-6 mb-4">
                <li>
                  <strong>Signal Transmission</strong> - Anchors continuously broadcast signals containing their
                  position and unique identifier
                </li>
                <li>
                  <strong>Signal Reception</strong> - UWB receivers capture these signals
                </li>
                <li>
                  <strong>Time Calculation</strong> - The receiver calculates the time it takes for the signal to travel
                  from each anchor
                </li>
                <li>
                  <strong>Distance Determination</strong> - This time is converted to distance using the speed of light
                </li>
                <li>
                  <strong>Position Calculation</strong> - With distances from at least three anchors, the receiver can
                  determine its 2D position (latitude, longitude)
                </li>
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Radio className="mr-2 h-5 w-5 text-blue-600" />
                    UWB Signal Components
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Short Pulses</strong> - Very short duration radio pulses
                    </li>
                    <li>
                      <strong>Wide Bandwidth</strong> - Occupies a large portion of the radio spectrum
                    </li>
                    <li>
                      <strong>Time of Arrival (ToA)</strong> - Precise timing measurements
                    </li>
                    <li>
                      <strong>Channel Impulse Response (CIR)</strong> - Characterizes the signal propagation
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <AlertTriangle className="mr-2 h-5 w-5 text-amber-600" />
                    Error Sources
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Multipath</strong> - Signal reflections from buildings and terrain
                    </li>
                    <li>
                      <strong>Non-Line-of-Sight (NLOS)</strong> - Obstructions blocking direct signal path
                    </li>
                    <li>
                      <strong>Clock Drift</strong> - Inaccuracies in anchor and tag clocks
                    </li>
                    <li>
                      <strong>Calibration Errors</strong> - Inaccuracies in anchor positions
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">UWB for Real-Time Location Systems</h2>
            <p className="mb-4">
              When implemented as part of an RTLS solution, UWB technology offers several key capabilities and
              integration points:
            </p>

            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder-gwyj5.png"
                alt="UWB integration with IoT and cloud services"
                fill
                className="object-cover"
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Smartphone className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Device Integration</h3>
                </div>
                <p className="text-sm">
                  UWB receivers embedded in tracking devices, vehicles, smartphones, and wearables
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Radio className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Data Transmission</h3>
                </div>
                <p className="text-sm">
                  Position data transmitted via cellular, LoRaWAN, or other communication networks
                </p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Server className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Backend Processing</h3>
                </div>
                <p className="text-sm">Cloud platforms for data storage, analysis, and visualization</p>
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
                      <strong>High Accuracy</strong> - Centimeter-level positioning for precise tracking
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Robustness</strong> - Resistant to multipath and interference
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>High Update Rate</strong> - Real-time tracking of fast-moving objects
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Secure Ranging</strong> - Prevents spoofing and relay attacks
                    </span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="limitations" className="p-4 bg-white border rounded-b-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Infrastructure Required</strong> - Needs dedicated anchors throughout the coverage area
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Higher Cost</strong> - More expensive than alternatives like BLE or Wi-Fi
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Limited Range</strong> - Typical effective range of 10-50 meters
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Power Consumption</strong> - Higher power usage than BLE
                    </span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>

            <h2 className="text-2xl font-bold mt-8 mb-4">UWB Positioning Methods</h2>
            <p className="mb-4">Several methods can be used to determine location with UWB:</p>

            <div className="overflow-x-auto mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Method</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Accuracy</TableHead>
                    <TableHead>Requirements</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Time of Flight (ToF)</TableCell>
                    <TableCell>Measures signal travel time between transmitter and receiver</TableCell>
                    <TableCell>10-30 cm</TableCell>
                    <TableCell>Precise timing synchronization</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Time Difference of Arrival (TDoA)</TableCell>
                    <TableCell>Compares arrival times of signal at multiple receivers</TableCell>
                    <TableCell>10-50 cm</TableCell>
                    <TableCell>Precise time synchronization between receivers</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Two-Way Ranging (TWR)</TableCell>
                    <TableCell>Measures round-trip time between two devices</TableCell>
                    <TableCell>10-30 cm</TableCell>
                    <TableCell>No clock synchronization needed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Angle of Arrival (AoA)</TableCell>
                    <TableCell>Uses antenna arrays to determine signal direction</TableCell>
                    <TableCell>5-15 cm</TableCell>
                    <TableCell>Specialized antenna arrays required</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Industry Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Manufacturing</h3>
                <p className="text-sm mb-3">
                  Precise tool tracking, worker safety zones, and automated guided vehicles
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>High accuracy requirements</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Healthcare</h3>
                <p className="text-sm mb-3">
                  Real-time tracking of medical equipment, patients, and staff in hospitals
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Critical for asset management</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Logistics</h3>
                <p className="text-sm mb-3">
                  High-precision tracking of inventory and assets in warehouses and distribution centers
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Improves efficiency and reduces losses</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Automotive</h3>
                <p className="text-sm mb-3">Secure access systems, keyless entry, and in-cabin passenger detection</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Enhanced security and convenience</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Sports Analytics</h3>
                <p className="text-sm mb-3">
                  Precise tracking of players, balls, and equipment for performance analysis
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Real-time data for coaching and training</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Robotics</h3>
                <p className="text-sm mb-3">
                  Precise positioning for autonomous robots and collaborative robot systems
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Enables advanced automation</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Case Studies</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Automotive Manufacturing</h3>
                <p className="mb-4">
                  A major automotive manufacturer implemented UWB-based RTLS to track vehicles through the assembly
                  process. The system provided centimeter-level positioning of vehicles and critical tools across a
                  100,000 square meter facility.
                </p>
                <h4 className="font-semibold mb-2">Results:</h4>
                <ul className="list-disc pl-6 mb-4">
                  <li>Reduced production errors by 37% through precise tool positioning verification</li>
                  <li>Improved production throughput by 12% with optimized workflow</li>
                  <li>Enhanced quality control with accurate vehicle history tracking</li>
                  <li>ROI achieved in 14 months despite higher initial investment</li>
                </ul>
                <Link href="/resources/automotive-manufacturing-case-study" className="text-blue-600 hover:underline">
                  Read full case study <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Warehouse Automation</h3>
                <p className="mb-4">
                  A distribution center deployed UWB technology to create a digital twin of their operation, tracking
                  forklifts, AGVs, and high-value inventory in real-time with 15cm accuracy.
                </p>
                <h4 className="font-semibold mb-2">Results:</h4>
                <ul className="list-disc pl-5 mb-4">
                  <li>Reduced picking errors by 82% through precise location guidance</li>
                  <li>Improved forklift utilization by 23% with optimized routing</li>
                  <li>Decreased safety incidents by 45% with proximity warnings</li>
                  <li>Enhanced inventory accuracy to 99.98% with real-time tracking</li>
                </ul>
                <Link href="/resources/warehouse-automation-case-study" className="text-blue-600 hover:underline">
                  Read full case study <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Future Trends</h2>
            <p>The UWB RTLS market continues to evolve with several emerging trends:</p>
            <ul>
              <li>
                <strong>Consumer Device Integration:</strong> Increasing adoption in smartphones, wearables, and IoT
                devices, creating new possibilities for seamless indoor navigation and interaction
              </li>
              <li>
                <strong>Miniaturization:</strong> Smaller, more energy-efficient UWB chips enabling new form factors and
                applications
              </li>
              <li>
                <strong>AI Integration:</strong> Machine learning algorithms enhancing positioning accuracy and enabling
                predictive analytics based on movement patterns
              </li>
              <li>
                <strong>Sensor Fusion:</strong> Combining UWB with complementary technologies like inertial sensors,
                cameras, and LiDAR for enhanced performance
              </li>
              <li>
                <strong>Edge Computing:</strong> Moving processing closer to the data source for reduced latency and
                improved privacy
              </li>
              <li>
                <strong>Standardization:</strong> Continued development of interoperability standards through
                organizations like FiRa and omlox
              </li>
              <li>
                <strong>Battery-free Tags:</strong> Research into energy harvesting and passive UWB tags to reduce
                maintenance requirements
              </li>
            </ul>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl my-8">
              <h2 className="mb-4">Need VendorNeutral RTLS Advice</h2>
              <p className="mb-4">
                The RTLS Alliance can connect you with certified providers and implementation experts who specialize in
                UWB-based high-precision location systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-blue-600 hover:bg-blue-700 text-white">Contact Us</Button>
                </Link>
                <Link href="/ecosystem/directory">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    Find UWB Providers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6 sticky top-6">
            <h3 className="text-lg font-bold mb-4">UWB Technology Overview</h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Building className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Infrastructure</h4>
                  <p className="text-sm text-gray-600">Anchors and tags</p>
                </div>
              </div>

              <div className="flex items-start">
                <Ruler className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Accuracy Range</h4>
                  <p className="text-sm text-gray-600">10-30 cm typical</p>
                </div>
              </div>

              <div className="flex items-start">
                <Compass className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Environment</h4>
                  <p className="text-sm text-gray-600">Indoor industrial, healthcare, manufacturing</p>
                </div>
              </div>

              <div className="flex items-start">
                <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Power Requirements</h4>
                  <p className="text-sm text-gray-600">Medium (active tags)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Setup Time</h4>
                  <p className="text-sm text-gray-600">Medium to high (precise anchor placement)</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Ideal Applications</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">High-precision manufacturing</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Surgical tool tracking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Automated guided vehicles</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Worker safety zones</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Robotic positioning</span>
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
                  href="/rtls-digital-twin/technologies/ble"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Radio className="h-4 w-4 mr-2" />
                  <span>Bluetooth Low Energy (BLE)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/wifi"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Wifi className="h-4 w-4 mr-2" />
                  <span>Wi-Fi</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/rtk-gps"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Satellite className="h-4 w-4 mr-2" />
                  <span>RTK-GPS / DGPS</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/sensor-fusion"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Layers className="h-4 w-4 mr-2" />
                  <span>Sensor Fusion</span>
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
                  href="/resources/uwb-implementation-guide"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>UWB Implementation Guide</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/anchor-placement-optimization"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Anchor Placement Optimization</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/uwb-vs-ble-comparison"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>UWB vs BLE Comparison</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/uwb-rtls-case-studies"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>UWB RTLS Case Studies</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
