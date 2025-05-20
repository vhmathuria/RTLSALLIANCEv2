"use client"
import Image from "next/image"
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
  Server,
  Wifi,
  Radio,
  Layers,
  Volume2,
  Camera,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useScrollToTop } from "@/hooks/useScrollToTop"

export default function UltrasoundTechnologyClientPage() {
  useScrollToTop()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Ultrasound Technology for Real-Time Location Systems</h1>

          <div className="prose max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Ultrasound positioning systems leverage high-frequency sound waves beyond human hearing to deliver
              centimeter-level accuracy for indoor positioning, offering a unique combination of precision and
              reliability in complex environments.
            </p>

            <div className="relative h-80 w-full rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder.svg?key=eo8o1"
                alt="Ultrasound positioning system with transmitters and receivers"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">What is Ultrasound Positioning Technology?</h2>
            <p className="mb-4">
              Ultrasound positioning is a technology that uses sound waves at frequencies above the range of human
              hearing (typically 20 kHz to 100 kHz) to determine the location of objects or people in indoor
              environments. The technology relies on the measurement of time-of-flight or phase differences of
              ultrasonic signals between transmitters and receivers to calculate precise positions.
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>High-Frequency Sound Waves</strong> - Operates beyond human hearing range (&gt;20 kHz)
              </li>
              <li>
                <strong>Time-of-Flight Measurement</strong> - Calculates distances based on sound propagation time
              </li>
              <li>
                <strong>Multilateration</strong> - Determines position using distances from multiple reference points
              </li>
              <li>
                <strong>Controlled Propagation</strong> - Sound waves don't penetrate walls, reducing interference
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">How Ultrasound Positioning Works</h2>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <Volume2 className="mr-2 h-5 w-5 text-blue-600" />
                Hardware Components
              </h3>
              <ul className="space-y-2">
                <li>
                  <strong>Ultrasonic Transducers</strong> - Convert electrical energy to sound waves and vice versa
                </li>
                <li>
                  <strong>Microcontrollers</strong> - Control signal generation and processing
                </li>
                <li>
                  <strong>RF Modules</strong> - Often used for synchronization and data transmission
                </li>
                <li>
                  <strong>Power Management</strong> - Especially important for battery-powered tags
                </li>
              </ul>
            </div>

            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder.svg?key=55s1i"
                alt="Ultrasound positioning system diagram showing time of flight measurement"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4">Key Technical Components</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Volume2 className="mr-2 h-5 w-5 text-blue-600" />
                    Hardware Components
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Ultrasonic Transducers</strong> - Convert electrical energy to sound waves and vice versa
                    </li>
                    <li>
                      <strong>Microcontrollers</strong> - Control signal generation and processing
                    </li>
                    <li>
                      <strong>RF Modules</strong> - Often used for synchronization and data transmission
                    </li>
                    <li>
                      <strong>Power Management</strong> - Especially important for battery-powered tags
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Server className="mr-2 h-5 w-5 text-blue-600" />
                    Software Components
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Signal Processing</strong> - Filtering, amplification, and detection algorithms
                    </li>
                    <li>
                      <strong>Multilateration Algorithms</strong> - Calculate position from multiple distance
                      measurements
                    </li>
                    <li>
                      <strong>Kalman Filtering</strong> - Smoothing and prediction of movement trajectories
                    </li>
                    <li>
                      <strong>Calibration Software</strong> - Accounts for environmental factors affecting sound speed
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Ultrasound for Real-Time Location Systems</h2>
            <p className="mb-4">
              When implemented as part of an RTLS solution, ultrasound technology offers several unique capabilities:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Ruler className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">High Precision</h3>
                </div>
                <p className="text-sm">Centimeter-level accuracy in properly configured environments</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Building className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Room-Level Containment</h3>
                </div>
                <p className="text-sm">Sound waves don't penetrate walls, providing natural zone isolation</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Wifi className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">RF Independence</h3>
                </div>
                <p className="text-sm">Functions in environments with RF interference or restrictions</p>
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
                      <strong>High Accuracy</strong> - Typically 1-10 cm positioning accuracy in ideal conditions
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Room Containment</strong> - Natural isolation by walls prevents signal bleeding between
                      rooms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>RF Immunity</strong> - Not affected by radio frequency interference
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Low Power Requirements</strong> - Ultrasonic transducers can be very energy efficient
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Privacy Advantages</strong> - Sound waves don't penetrate walls, limiting tracking to
                      defined areas
                    </span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="limitations" className="p-4 bg-white border rounded-b-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Environmental Sensitivity</strong> - Performance affected by temperature, humidity, and
                      air currents
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Line-of-Sight Requirements</strong> - Obstacles can block ultrasonic signals
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Acoustic Interference</strong> - Some industrial environments may have ultrasonic noise
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Infrastructure Requirements</strong> - Typically requires dense deployment of
                      receivers/transmitters
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Limited Range</strong> - Effective range typically limited to 10-15 meters
                    </span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Considerations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Environmental Factors</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Temperature Variations</strong> - Affects speed of sound (approximately 0.6 m/s per °C)
                    </li>
                    <li>
                      <strong>Humidity</strong> - Influences sound propagation characteristics
                    </li>
                    <li>
                      <strong>Air Currents</strong> - Can affect signal path and timing
                    </li>
                    <li>
                      <strong>Ambient Noise</strong> - Industrial equipment may generate ultrasonic interference
                    </li>
                    <li>
                      <strong>Room Acoustics</strong> - Reflections and reverberations can affect signal quality
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Deployment Considerations</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Transducer Placement</strong> - Strategic positioning for optimal coverage
                    </li>
                    <li>
                      <strong>Density Requirements</strong> - Typically 1 receiver per 10-30 square meters
                    </li>
                    <li>
                      <strong>Calibration Procedures</strong> - Initial and periodic calibration for accuracy
                    </li>
                    <li>
                      <strong>Power Supply</strong> - Wired or battery options with appropriate maintenance schedules
                    </li>
                    <li>
                      <strong>Mounting Considerations</strong> - Height, orientation, and stability of devices
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4">Integration with Other Technologies</h3>

            <div className="overflow-x-auto mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Complementary Technology</TableHead>
                    <TableHead>Integration Benefit</TableHead>
                    <TableHead>Implementation Approach</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">RF Synchronization</TableCell>
                    <TableCell>Provides timing reference for improved accuracy</TableCell>
                    <TableCell>Combined RF/ultrasound tags and receivers</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Inertial Sensors</TableCell>
                    <TableCell>Continuous tracking between ultrasonic updates</TableCell>
                    <TableCell>Sensor fusion algorithms with Kalman filtering</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">BLE</TableCell>
                    <TableCell>Extended coverage in areas with limited ultrasound infrastructure</TableCell>
                    <TableCell>Hybrid positioning system with handover between technologies</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Computer Vision</TableCell>
                    <TableCell>Additional context and identification capabilities</TableCell>
                    <TableCell>Multi-modal tracking with position correlation</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Wi-Fi</TableCell>
                    <TableCell>Data backhaul and coarse positioning when ultrasound unavailable</TableCell>
                    <TableCell>Fallback positioning with confidence metrics</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Industry Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Healthcare</h3>
                <p className="text-sm mb-3">Precise tracking of medical equipment, staff, and patients in hospitals</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>High adoption rate</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Manufacturing</h3>
                <p className="text-sm mb-3">Tool tracking, worker safety zones, and process optimization</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Growing application</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Laboratory Environments</h3>
                <p className="text-sm mb-3">Tracking samples, equipment, and ensuring proper procedures</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Precision-critical use case</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Robotics</h3>
                <p className="text-sm mb-3">Indoor navigation and positioning for autonomous robots</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Emerging application</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Virtual/Augmented Reality</h3>
                <p className="text-sm mb-3">Precise indoor positioning for immersive experiences</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>High growth potential</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Secure Facilities</h3>
                <p className="text-sm mb-3">Access control and personnel tracking in high-security environments</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Specialized application</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Future Trends in Ultrasound Positioning</h2>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Emerging Developments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Miniaturization</h4>
                  <p className="text-sm mb-4">
                    Smaller, more energy-efficient ultrasonic transducers enabling new form factors and applications
                  </p>

                  <h4 className="font-semibold mb-2">Advanced Signal Processing</h4>
                  <p className="text-sm mb-4">
                    Machine learning algorithms improving accuracy and resilience to environmental interference
                  </p>

                  <h4 className="font-semibold mb-2">Smartphone Integration</h4>
                  <p className="text-sm">
                    Leveraging standard smartphone microphones for ultrasonic positioning without specialized hardware
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Multi-Modal Systems</h4>
                  <p className="text-sm mb-4">
                    Tighter integration with complementary technologies for seamless indoor/outdoor tracking
                  </p>

                  <h4 className="font-semibold mb-2">Self-Calibrating Networks</h4>
                  <p className="text-sm mb-4">
                    Systems that automatically adjust for environmental changes and optimize performance
                  </p>

                  <h4 className="font-semibold mb-2">Mesh Architectures</h4>
                  <p className="text-sm">
                    Distributed ultrasonic networks with peer-to-peer capabilities for improved coverage and resilience
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
                    <TableHead>Ultrasound</TableHead>
                    <TableHead>UWB</TableHead>
                    <TableHead>BLE</TableHead>
                    <TableHead>Wi-Fi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Typical Accuracy</TableCell>
                    <TableCell>1-10 cm</TableCell>
                    <TableCell>10-30 cm</TableCell>
                    <TableCell>1-3 m</TableCell>
                    <TableCell>3-15 m</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Range</TableCell>
                    <TableCell>5-15 m</TableCell>
                    <TableCell>10-100 m</TableCell>
                    <TableCell>10-50 m</TableCell>
                    <TableCell>20-100 m</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Infrastructure Density</TableCell>
                    <TableCell>High</TableCell>
                    <TableCell>Medium</TableCell>
                    <TableCell>Medium</TableCell>
                    <TableCell>Low</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Power Consumption</TableCell>
                    <TableCell>Low-Medium</TableCell>
                    <TableCell>Medium</TableCell>
                    <TableCell>Low</TableCell>
                    <TableCell>High</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Environmental Sensitivity</TableCell>
                    <TableCell>High</TableCell>
                    <TableCell>Medium</TableCell>
                    <TableCell>Low</TableCell>
                    <TableCell>Low</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Room Containment</TableCell>
                    <TableCell>Excellent</TableCell>
                    <TableCell>Poor</TableCell>
                    <TableCell>Poor</TableCell>
                    <TableCell>Poor</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Best Practices</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Environmental Assessment</h3>
                <p className="text-sm">
                  Conduct a thorough evaluation of the deployment environment, including temperature variations, air
                  currents, ambient noise sources, and acoustic properties. This baseline understanding will inform
                  system design and calibration requirements.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Strategic Receiver Placement</h3>
                <p className="text-sm">
                  Position ultrasonic receivers to maximize coverage while minimizing dead zones. Consider ceiling
                  mounting with overlapping coverage patterns and account for potential obstacles that could block
                  line-of-sight.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Regular Calibration</h3>
                <p className="text-sm">
                  Implement a schedule for system calibration that accounts for seasonal temperature changes and any
                  modifications to the physical environment. Consider automated calibration routines using reference
                  tags at known positions.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Hybrid Technology Approach</h3>
                <p className="text-sm">
                  Complement ultrasound positioning with RF technologies for synchronization and as a fallback when
                  ultrasonic signals are compromised. This creates a more robust overall system with higher
                  availability.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Signal Processing Optimization</h3>
                <p className="text-sm">
                  Implement advanced signal processing techniques to filter noise, detect multipath reflections, and
                  improve timing accuracy. Consider adaptive algorithms that can adjust to changing environmental
                  conditions.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              Ultrasound positioning technology offers a unique combination of high accuracy and room-level containment
              that makes it particularly valuable for applications requiring precise indoor positioning. While it comes
              with certain environmental sensitivities and infrastructure requirements, its centimeter-level accuracy
              and immunity to RF interference make it an excellent choice for many specialized RTLS applications.
            </p>
            <p className="mb-4">
              The technology is particularly well-suited to healthcare, manufacturing, and laboratory environments where
              precision positioning is critical and the controlled indoor environment mitigates many of the technology's
              limitations. As advances in signal processing, miniaturization, and integration with complementary
              technologies continue, ultrasound positioning is likely to become even more versatile and accessible.
            </p>
            <p>
              For organizations seeking highly accurate indoor positioning in controlled environments, ultrasound
              technology offers a proven solution with demonstrable ROI across numerous industry applications.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">Ultrasound Technology Overview</h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Building className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Infrastructure</h4>
                  <p className="text-sm text-gray-600">Ultrasonic beacons and receivers</p>
                </div>
              </div>

              <div className="flex items-start">
                <Ruler className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Accuracy Range</h4>
                  <p className="text-sm text-gray-600">1-10 cm typical</p>
                </div>
              </div>

              <div className="flex items-start">
                <Compass className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Environment</h4>
                  <p className="text-sm text-gray-600">Indoor, controlled environments</p>
                </div>
              </div>

              <div className="flex items-start">
                <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Power Requirements</h4>
                  <p className="text-sm text-gray-600">Low to medium</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Setup Time</h4>
                  <p className="text-sm text-gray-600">Medium (beacon placement and calibration)</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Ideal Applications</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Precision manufacturing</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Medical device tracking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Laboratory equipment</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Robotic positioning</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Small room environments</span>
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
                  href="/rtls-digital-twin/technologies/uwb"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Radio className="h-4 w-4 mr-2" />
                  <span>Ultra-Wideband (UWB)</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/infrared"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  <span>Infrared</span>
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
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/magnetic-field"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Compass className="h-4 w-4 mr-2" />
                  <span>Magnetic Field Mapping</span>
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
                  <span>RTLS Implementation Guide</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/hospital-asset-tracking-1-2m-savings-rtls"
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
