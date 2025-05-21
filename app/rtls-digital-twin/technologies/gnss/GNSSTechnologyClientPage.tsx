"use client"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  AlertTriangle,
  Navigation,
  Satellite,
  Clock,
  Zap,
  Building,
  Ruler,
  Radio,
  Smartphone,
  Server,
  Layers,
  Compass,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useScrollToTop } from "@/hooks/useScrollToTop"

export default function GNSSTechnologyClientPage() {
  useScrollToTop()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">GNSS Technology for Real-Time Location Systems</h1>

          <div className="prose max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Global Navigation Satellite Systems (GNSS) provide worldwide positioning capabilities through satellite
              constellations, enabling outdoor location tracking with meter-level accuracy for a wide range of
              applications.
            </p>

            <div className="relative h-80 w-full rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder-yj8h8.png"
                alt="GNSS satellite constellations providing global positioning"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">What is GNSS Technology?</h2>
            <p>
              Global Navigation Satellite Systems (GNSS) is an umbrella term that encompasses various satellite
              navigation systems operated by different countries and regions. The most well-known GNSS is the Global
              Positioning System (GPS) operated by the United States, but there are several other systems:
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>GPS (United States)</strong> - The original and most widely used GNSS with 31+ operational
                satellites
              </li>
              <li>
                <strong>GLONASS (Russia)</strong> - 24+ satellites providing global coverage
              </li>
              <li>
                <strong>Galileo (European Union)</strong> - Europe's civilian GNSS with 30 planned satellites
              </li>
              <li>
                <strong>BeiDou/Compass (China)</strong> - 35+ satellites providing global service
              </li>
              <li>
                <strong>NavIC (India)</strong> - Regional navigation system with 7 satellites
              </li>
              <li>
                <strong>QZSS (Japan)</strong> - Regional system enhancing GPS in East Asia
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">How GNSS Works for RTLS</h2>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Core Principles of GNSS Positioning</h3>
              <p className="mb-4">
                GNSS receivers determine their position through a process called trilateration, which involves measuring
                the time it takes for signals to travel from multiple satellites to the receiver:
              </p>
              <ol className="list-decimal pl-6 mb-4">
                <li>
                  <strong>Signal Transmission</strong> - Satellites continuously broadcast signals containing their
                  position and precise time from atomic clocks
                </li>
                <li>
                  <strong>Signal Reception</strong> - GNSS receivers capture these signals
                </li>
                <li>
                  <strong>Time Calculation</strong> - The receiver calculates the time difference between when the
                  signal was sent and when it was received
                </li>
                <li>
                  <strong>Distance Determination</strong> - This time difference is converted to distance (signal travel
                  time × speed of light)
                </li>
                <li>
                  <strong>Position Calculation</strong> - With distances from at least four satellites, the receiver can
                  determine its 3D position (latitude, longitude, altitude) and time
                </li>
              </ol>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Satellite className="mr-2 h-5 w-5 text-blue-600" />
                    GNSS Signal Components
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Carrier Wave</strong> - High-frequency radio waves
                    </li>
                    <li>
                      <strong>Ranging Code</strong> - Unique patterns for satellite identification
                    </li>
                    <li>
                      <strong>Navigation Message</strong> - Satellite ephemeris, clock corrections, almanac
                    </li>
                    <li>
                      <strong>Multiple Frequencies</strong> - L1, L2, L5 bands for improved accuracy
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
                      <strong>Atmospheric Delays</strong> - Ionospheric and tropospheric effects
                    </li>
                    <li>
                      <strong>Multipath</strong> - Signal reflections from buildings and terrain
                    </li>
                    <li>
                      <strong>Satellite Clock Errors</strong> - Small inaccuracies in satellite clocks
                    </li>
                    <li>
                      <strong>Orbital Errors</strong> - Inaccuracies in satellite position data
                    </li>
                    <li>
                      <strong>Receiver Noise</strong> - Electronic noise in the receiver
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">GNSS for Real-Time Location Systems</h2>
            <p className="mb-4">
              When implemented as part of an RTLS solution, GNSS technology offers several key capabilities and
              integration points:
            </p>

            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder-gwyj5.png"
                alt="GNSS integration with IoT and cloud services"
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
                  GNSS receivers embedded in tracking devices, vehicles, smartphones, and wearables
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
                      <strong>Global Coverage</strong> - Works anywhere with clear sky view, requiring no local
                      infrastructure
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Mature Technology</strong> - Well-established, reliable systems with widespread adoption
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Cost-Effective</strong> - Receivers are inexpensive and widely available
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>No Subscription Fees</strong> - Basic GNSS services are free to use
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Multi-Constellation Support</strong> - Modern receivers can use multiple GNSS systems
                      simultaneously for improved performance
                    </span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="limitations" className="p-4 bg-white border rounded-b-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Indoor Performance</strong> - Signals are blocked or severely attenuated by buildings and
                      structures
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Urban Canyon Effects</strong> - Tall buildings can block signals and cause multipath
                      errors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Standard Accuracy Limitations</strong> - Typical accuracy of 3-5 meters may be
                      insufficient for precise applications
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Power Consumption</strong> - Continuous GNSS operation can drain battery life in mobile
                      devices
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Signal Acquisition Time</strong> - Cold starts can take 30+ seconds to acquire position
                    </span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>

            <h2 className="text-2xl font-bold mt-8 mb-4">GNSS Accuracy Enhancement Techniques</h2>
            <p className="mb-4">Several techniques can improve the accuracy of standard GNSS positioning:</p>

            <div className="overflow-x-auto mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Technique</TableHead>
                    <TableHead>Description</TableHead>
                    <TableHead>Typical Accuracy</TableHead>
                    <TableHead>Applications</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">SBAS</TableCell>
                    <TableCell>
                      Satellite-Based Augmentation Systems (WAAS, EGNOS, MSAS) provide correction data via geostationary
                      satellites
                    </TableCell>
                    <TableCell>1-3 meters</TableCell>
                    <TableCell>Aviation, maritime, consumer navigation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">DGPS</TableCell>
                    <TableCell>
                      Differential GPS uses ground-based reference stations to broadcast correction data
                    </TableCell>
                    <TableCell>0.5-2 meters</TableCell>
                    <TableCell>Precision agriculture, surveying, marine navigation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">RTK</TableCell>
                    <TableCell>
                      Real-Time Kinematic positioning uses carrier phase measurements with local base stations
                    </TableCell>
                    <TableCell>1-2 centimeters</TableCell>
                    <TableCell>Surveying, precision agriculture, construction</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">PPP</TableCell>
                    <TableCell>Precise Point Positioning uses precise satellite orbit and clock data</TableCell>
                    <TableCell>10-20 centimeters</TableCell>
                    <TableCell>Offshore operations, remote areas</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">A-GNSS</TableCell>
                    <TableCell>Assisted GNSS uses cellular network data to speed up acquisition</TableCell>
                    <TableCell>3-5 meters</TableCell>
                    <TableCell>Smartphones, emergency services</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Considerations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Hardware Selection</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Receiver Type</strong> - Single or multi-frequency, multi-constellation support
                    </li>
                    <li>
                      <strong>Antenna Quality</strong> - Critical for signal reception quality
                    </li>
                    <li>
                      <strong>Form Factor</strong> - Size, weight, and power constraints
                    </li>
                    <li>
                      <strong>Environmental Durability</strong> - IP rating for outdoor use
                    </li>
                    <li>
                      <strong>Integration Capabilities</strong> - Communication interfaces (UART, I2C, SPI)
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Software & Integration</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Data Formats</strong> - NMEA 0183, proprietary protocols
                    </li>
                    <li>
                      <strong>Update Rate</strong> - Position refresh frequency (1-20 Hz typical)
                    </li>
                    <li>
                      <strong>Filtering Algorithms</strong> - Kalman filters for smoother tracking
                    </li>
                    <li>
                      <strong>Map Matching</strong> - Aligning positions to known routes/roads
                    </li>
                    <li>
                      <strong>Hybrid Positioning</strong> - Integration with other sensors
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Industry Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Fleet Management</h3>
                <p className="text-sm mb-3">
                  Real-time tracking of vehicles, route optimization, and driver behavior monitoring
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>High adoption rate</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Asset Tracking</h3>
                <p className="text-sm mb-3">
                  Monitoring high-value equipment, containers, and shipments across global supply chains
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Growing rapidly</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Precision Agriculture</h3>
                <p className="text-sm mb-3">
                  Automated guidance for farm equipment, variable rate application, and field mapping
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>High ROI potential</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Construction</h3>
                <p className="text-sm mb-3">Equipment tracking, site monitoring, and machine control systems</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Increasing adoption</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Emergency Services</h3>
                <p className="text-sm mb-3">Dispatch optimization, personnel tracking, and incident location</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Critical application</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Outdoor Recreation</h3>
                <p className="text-sm mb-3">Hiking, cycling, and adventure sports tracking and safety applications</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Consumer growth</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Future Trends in GNSS Technology</h2>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Emerging Developments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Multi-Frequency Receivers</h4>
                  <p className="text-sm mb-4">
                    Increasing adoption of dual and triple-frequency receivers in consumer devices, improving accuracy
                    and resilience
                  </p>

                  <h4 className="font-semibold mb-2">Advanced Anti-Jamming</h4>
                  <p className="text-sm mb-4">
                    New techniques to protect against signal interference and spoofing attacks
                  </p>

                  <h4 className="font-semibold mb-2">Miniaturization</h4>
                  <p className="text-sm">
                    Smaller, more power-efficient receivers enabling new wearable and IoT applications
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Satellite Modernization</h4>
                  <p className="text-sm mb-4">
                    Next-generation satellites with improved signals, accuracy, and reliability
                  </p>

                  <h4 className="font-semibold mb-2">Precise Point Positioning (PPP)</h4>
                  <p className="text-sm mb-4">
                    Democratization of centimeter-level accuracy without local base stations
                  </p>

                  <h4 className="font-semibold mb-2">AI Integration</h4>
                  <p className="text-sm">
                    Machine learning algorithms improving position estimation in challenging environments
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Comparison with Other RTLS Technologies</h2>

            <div className="overflow-x-auto mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>GNSS</TableHead>
                    <TableHead>UWB</TableHead>
                    <TableHead>BLE</TableHead>
                    <TableHead>Wi-Fi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Typical Accuracy</TableCell>
                    <TableCell>
                      3-5 meters (standard)
                      <br />
                      1-3cm (RTK)
                    </TableCell>
                    <TableCell>10-30 cm</TableCell>
                    <TableCell>1-3 meters</TableCell>
                    <TableCell>3-15 meters</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Indoor Performance</TableCell>
                    <TableCell>Poor</TableCell>
                    <TableCell>Excellent</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>Good</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Outdoor Performance</TableCell>
                    <TableCell>Excellent</TableCell>
                    <TableCell>Good</TableCell>
                    <TableCell>Fair</TableCell>
                    <TableCell>Fair</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Range</TableCell>
                    <TableCell>Global</TableCell>
                    <TableCell>10-100 meters</TableCell>
                    <TableCell>10-50 meters</TableCell>
                    <TableCell>30-100 meters</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Power Consumption</TableCell>
                    <TableCell>High</TableCell>
                    <TableCell>Medium</TableCell>
                    <TableCell>Low</TableCell>
                    <TableCell>Medium</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Infrastructure</TableCell>
                    <TableCell>None required</TableCell>
                    <TableCell>Anchors needed</TableCell>
                    <TableCell>Beacons needed</TableCell>
                    <TableCell>Access points</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Best Practices</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Conduct Site Survey</h3>
                <p className="text-sm">
                  Assess the deployment environment for potential signal obstructions, multipath issues, and sky
                  visibility. Identify areas where GNSS performance may be compromised.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Select Appropriate Hardware</h3>
                <p className="text-sm">
                  Choose receivers and antennas based on accuracy requirements, environmental conditions, and power
                  constraints. Consider multi-constellation support for improved reliability.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Implement Hybrid Solutions</h3>
                <p className="text-sm">
                  Combine GNSS with complementary technologies like inertial sensors, cellular positioning, or Wi-Fi for
                  continuous tracking in GNSS-challenged environments.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Optimize Power Management</h3>
                <p className="text-sm">
                  Implement intelligent duty cycling, assisted GNSS, and context-aware positioning to extend battery
                  life in mobile applications.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Apply Filtering and Smoothing</h3>
                <p className="text-sm">
                  Use Kalman filters and other algorithms to reduce position noise and improve tracking consistency,
                  especially in challenging environments.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              GNSS technology provides a robust foundation for outdoor real-time location systems with global coverage
              and no infrastructure requirements. While it faces limitations in indoor and urban canyon environments,
              its integration with complementary technologies and ongoing advancements continue to expand its
              capabilities and applications.
            </p>
            <p className="mb-4">
              For organizations implementing RTLS solutions, GNSS offers a mature, cost-effective option for outdoor
              tracking needs. The selection of appropriate hardware, software integration approaches, and complementary
              technologies is critical to maximizing the benefits of GNSS-based positioning systems.
            </p>
            <p>
              As satellite systems continue to modernize and receiver technology advances, GNSS will remain a
              cornerstone technology in the RTLS ecosystem, providing essential outdoor positioning capabilities for a
              wide range of applications.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">GNSS Technology Overview</h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Building className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Infrastructure</h4>
                  <p className="text-sm text-gray-600">Satellite-based (no local infrastructure)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Ruler className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Accuracy Range</h4>
                  <p className="text-sm text-gray-600">2-10 meters typical</p>
                </div>
              </div>

              <div className="flex items-start">
                <Compass className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Environment</h4>
                  <p className="text-sm text-gray-600">Outdoor, open-sky conditions</p>
                </div>
              </div>

              <div className="flex items-start">
                <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Power Requirements</h4>
                  <p className="text-sm text-gray-600">Medium (active receivers)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Setup Time</h4>
                  <p className="text-sm text-gray-600">Low (receivers only)</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Ideal Applications</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Fleet management</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Outdoor asset tracking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Logistics and supply chain</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Construction equipment</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Agriculture and forestry</span>
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
                  href="/rtls-digital-twin/technologies/dead-reckoning"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  <span>Dead Reckoning + RTLS Anchors</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/lora"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Radio className="h-4 w-4 mr-2" />
                  <span>LoRa</span>
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
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/resources/enterprise-rtls-step-by-step-implementation-guide"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>RTLS Deployment Guide</span>
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
              <li>
                <Link
                  href="/resources/uwb-vs-gps-indoor-outdoor-tracking-guide"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>GNSS (GPS) vs UWB Analysis</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/automotive-oem-40-throughput-boost-uwb-rtls"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>RTLS Success Story</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
