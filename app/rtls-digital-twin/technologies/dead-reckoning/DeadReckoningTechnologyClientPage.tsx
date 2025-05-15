"use client"

import { useEffect } from "react"
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
  Radio,
  Smartphone,
  Layers,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export default function DeadReckoningTechnologyClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">Dead Reckoning + RTLS Anchors for Real-Time Location Systems</h1>

          <div className="prose max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Dead Reckoning combined with RTLS anchors creates a hybrid positioning system that leverages inertial
              navigation for continuous tracking while using fixed reference points to correct accumulated errors,
              delivering reliable positioning in challenging environments.
            </p>

            <div className="relative h-80 w-full rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder-rjuey.png"
                alt="Dead reckoning with RTLS anchor correction visualization"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">What is Dead Reckoning with RTLS Anchors?</h2>
            <p className="mb-4">
              Dead Reckoning with RTLS Anchors is a hybrid positioning approach that combines the continuous tracking
              capabilities of inertial navigation with periodic corrections from fixed reference points. This
              combination addresses the limitations of each individual technology, creating a more robust and accurate
              positioning solution.
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>Dead Reckoning</strong> - Calculates current position by using a previously determined position
                and advancing it based on known or estimated speeds over elapsed time
              </li>
              <li>
                <strong>RTLS Anchors</strong> - Fixed reference points that provide absolute positioning information
                when in range
              </li>
              <li>
                <strong>Error Correction</strong> - Periodic updates from anchors correct the drift inherent in dead
                reckoning
              </li>
              <li>
                <strong>Continuous Tracking</strong> - Maintains positioning even when anchors are temporarily
                unavailable
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">How Dead Reckoning with RTLS Anchors Works</h2>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Core Principles</h3>
              <p className="mb-4">This hybrid approach operates through a continuous cycle of:</p>

              <ol className="list-decimal pl-6 mb-4">
                <li>
                  <strong>Inertial Measurement</strong> - Collecting data from accelerometers, gyroscopes, and
                  magnetometers
                </li>
                <li>
                  <strong>Motion Calculation</strong> - Computing displacement and direction changes from sensor data
                </li>
                <li>
                  <strong>Position Estimation</strong> - Updating the estimated position based on calculated movement
                </li>
                <li>
                  <strong>Anchor Detection</strong> - Identifying when the device is in range of RTLS anchors
                </li>
                <li>
                  <strong>Position Correction</strong> - Adjusting the estimated position using anchor-based absolute
                  positioning
                </li>
                <li>
                  <strong>Sensor Calibration</strong> - Recalibrating inertial sensors based on anchor corrections
                </li>
              </ol>

              <h4 className="font-semibold mt-4 mb-2">Common Implementation Approaches:</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Kalman Filtering</strong> - Probabilistic technique for fusing inertial and anchor data
                </li>
                <li>
                  <strong>Particle Filtering</strong> - Maintains multiple position hypotheses until anchor correction
                </li>
                <li>
                  <strong>Sparse Anchor Deployment</strong> - Strategic placement of anchors in key locations
                </li>
                <li>
                  <strong>Multi-technology Anchors</strong> - Using different technologies (UWB, BLE, Wi-Fi) as anchors
                </li>
                <li>
                  <strong>Context-Aware Correction</strong> - Using environmental context to improve dead reckoning
                  accuracy
                </li>
              </ul>
            </div>

            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder-6tk4d.png"
                alt="Dead reckoning error correction with RTLS anchors diagram"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4">Key Technical Components</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Smartphone className="mr-2 h-5 w-5 text-blue-600" />
                    Inertial Components
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Accelerometers</strong> - Measure linear acceleration forces
                    </li>
                    <li>
                      <strong>Gyroscopes</strong> - Detect angular velocity and orientation changes
                    </li>
                    <li>
                      <strong>Magnetometers</strong> - Provide heading information relative to Earth's magnetic field
                    </li>
                    <li>
                      <strong>Barometers</strong> - Detect altitude changes through atmospheric pressure
                    </li>
                    <li>
                      <strong>Pedometers</strong> - Count steps for pedestrian dead reckoning
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Radio className="mr-2 h-5 w-5 text-blue-600" />
                    RTLS Anchor Technologies
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>UWB Anchors</strong> - High precision but require dedicated infrastructure
                    </li>
                    <li>
                      <strong>BLE Beacons</strong> - Cost-effective with moderate accuracy
                    </li>
                    <li>
                      <strong>Wi-Fi Access Points</strong> - Leverage existing infrastructure
                    </li>
                    <li>
                      <strong>RFID Checkpoints</strong> - Simple proximity detection at key locations
                    </li>
                    <li>
                      <strong>QR/Visual Markers</strong> - Camera-based positioning at specific points
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">
              Dead Reckoning with RTLS Anchors for Real-Time Location Systems
            </h2>
            <p className="mb-4">
              When implemented as part of an RTLS solution, this hybrid approach offers several unique capabilities:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Map className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Continuous Tracking</h3>
                </div>
                <p className="text-sm">Maintains positioning between anchor points</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Building className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Reduced Infrastructure</h3>
                </div>
                <p className="text-sm">Requires fewer anchors than traditional RTLS</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Compass className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Resilient Positioning</h3>
                </div>
                <p className="text-sm">Functions during temporary anchor signal loss</p>
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
                      <strong>Continuous Positioning</strong> - Maintains tracking even when out of anchor range
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Reduced Infrastructure</strong> - Requires fewer anchors than traditional RTLS
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Error Correction</strong> - Anchors prevent cumulative drift errors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Adaptability</strong> - Works in environments with partial infrastructure coverage
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Multi-level Tracking</strong> - Effective for vertical movement between floors
                    </span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="limitations" className="p-4 bg-white border rounded-b-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Sensor Quality Dependency</strong> - Accuracy heavily influenced by IMU quality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Drift Between Corrections</strong> - Position error grows between anchor encounters
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Algorithm Complexity</strong> - Requires sophisticated sensor fusion algorithms
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Motion Pattern Sensitivity</strong> - Accuracy varies with movement type (walking vs.
                      running)
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Calibration Requirements</strong> - Needs regular recalibration for optimal performance
                    </span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Considerations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Hardware Selection</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>IMU Quality</strong> - Higher-grade inertial sensors reduce drift
                    </li>
                    <li>
                      <strong>Anchor Technology</strong> - UWB, BLE, Wi-Fi based on accuracy needs
                    </li>
                    <li>
                      <strong>Form Factor</strong> - Size and weight constraints for wearable applications
                    </li>
                    <li>
                      <strong>Power Requirements</strong> - Battery life vs. sensor sampling rate trade-offs
                    </li>
                    <li>
                      <strong>Environmental Robustness</strong> - Sensor performance in varying conditions
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Algorithm Selection</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Fusion Approach</strong> - Kalman, particle, or complementary filtering
                    </li>
                    <li>
                      <strong>Motion Models</strong> - Pedestrian, vehicle, or custom movement patterns
                    </li>
                    <li>
                      <strong>Anchor Deployment Strategy</strong> - Optimal placement for correction frequency
                    </li>
                    <li>
                      <strong>Context Awareness</strong> - Using map constraints or activity recognition
                    </li>
                    <li>
                      <strong>Adaptive Calibration</strong> - Dynamic sensor bias estimation and correction
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4">Dead Reckoning Variants Comparison</h3>

            <div className="overflow-x-auto mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Variant</TableHead>
                    <TableHead>Primary Sensors</TableHead>
                    <TableHead>Typical Accuracy</TableHead>
                    <TableHead>Best For</TableHead>
                    <TableHead>Limitations</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Pedestrian Dead Reckoning (PDR)</TableCell>
                    <TableCell>IMU + Step detection</TableCell>
                    <TableCell>1-5% of distance traveled</TableCell>
                    <TableCell>Indoor personnel tracking</TableCell>
                    <TableCell>Requires consistent walking pattern</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Vehicular Dead Reckoning</TableCell>
                    <TableCell>IMU + Wheel encoders</TableCell>
                    <TableCell>0.5-2% of distance traveled</TableCell>
                    <TableCell>Warehouse vehicles, forklifts</TableCell>
                    <TableCell>Wheel slip affects accuracy</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Visual-Inertial Odometry</TableCell>
                    <TableCell>IMU + Camera</TableCell>
                    <TableCell>0.5-3% of distance traveled</TableCell>
                    <TableCell>Feature-rich environments</TableCell>
                    <TableCell>Sensitive to lighting conditions</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Map-Matched Dead Reckoning</TableCell>
                    <TableCell>IMU + Digital maps</TableCell>
                    <TableCell>1-3 meters</TableCell>
                    <TableCell>Constrained movement areas</TableCell>
                    <TableCell>Requires accurate maps</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Multi-Sensor Dead Reckoning</TableCell>
                    <TableCell>IMU + Multiple complementary sensors</TableCell>
                    <TableCell>0.5-2% of distance traveled</TableCell>
                    <TableCell>High-reliability applications</TableCell>
                    <TableCell>Complexity, higher cost</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Industry Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Warehouse Operations</h3>
                <p className="text-sm mb-3">
                  Tracking forklifts and personnel with sparse anchor deployment for cost-effective coverage
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>High ROI application</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Healthcare</h3>
                <p className="text-sm mb-3">
                  Staff and equipment tracking across hospital floors with minimal infrastructure
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Growing adoption</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Retail Analytics</h3>
                <p className="text-sm mb-3">
                  Customer journey tracking with strategic anchor placement at key locations
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Emerging application</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Underground Mining</h3>
                <p className="text-sm mb-3">Personnel and vehicle tracking in challenging RF environments</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Safety-critical use case</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Multi-Floor Buildings</h3>
                <p className="text-sm mb-3">Continuous tracking across floors with vertical movement detection</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Solves 3D tracking challenges</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Emergency Response</h3>
                <p className="text-sm mb-3">
                  First responder tracking in buildings with limited or damaged infrastructure
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Life-saving potential</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Case Studies</h2>

            <div className="space-y-6 mb-8">
              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Manufacturing Facility Optimization</h3>
                <p className="mb-4">
                  A large automotive manufacturing plant implemented a hybrid dead reckoning system with strategic UWB
                  anchors:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Deployed IMU-equipped badges for 500+ workers across a 1.2 million sq ft facility</li>
                  <li>Installed only 120 UWB anchors (vs. 400+ required for full UWB coverage)</li>
                  <li>Dead reckoning maintained tracking between anchor points</li>
                  <li>Achieved 1-2 meter accuracy throughout the facility</li>
                  <li>Reduced infrastructure costs by 65% while maintaining required positioning accuracy</li>
                  <li>Improved workflow analysis led to 12% productivity increase</li>
                </ul>
                <Link
                  href="/resources/dead-reckoning-manufacturing-case-study"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Read full case study <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>

              <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
                <h3 className="text-xl font-semibold mb-2">Hospital Asset Tracking</h3>
                <p className="mb-4">A regional hospital implemented a hybrid tracking system for critical equipment:</p>
                <ul className="list-disc pl-6 mb-4">
                  <li>Equipped 2,000+ mobile medical devices with IMU-based tracking modules</li>
                  <li>Deployed BLE beacons at key locations (room entrances, nursing stations, storage areas)</li>
                  <li>Dead reckoning maintained device locations between beacon encounters</li>
                  <li>
                    System provided room-level accuracy with 75% fewer beacons than traditional BLE-only solutions
                  </li>
                  <li>Equipment utilization increased by 26% and search time reduced by 64%</li>
                  <li>Battery life extended to 18 months due to optimized sensor usage</li>
                </ul>
                <Link
                  href="/resources/dead-reckoning-hospital-case-study"
                  className="text-blue-600 hover:underline flex items-center"
                >
                  Read full case study <ArrowRight className="h-4 w-4 ml-1" />
                </Link>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Future Trends in Dead Reckoning + RTLS</h2>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Emerging Developments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">MEMS Sensor Improvements</h4>
                  <p className="text-sm mb-4">
                    Higher quality, lower cost inertial sensors reducing drift and extending tracking duration
                  </p>

                  <h4 className="font-semibold mb-2">AI-Enhanced Motion Models</h4>
                  <p className="text-sm mb-4">
                    Machine learning algorithms improving dead reckoning accuracy for various movement patterns
                  </p>

                  <h4 className="font-semibold mb-2">Opportunistic Anchoring</h4>
                  <p className="text-sm">
                    Using dynamic objects with known positions as temporary anchors for correction
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Collaborative Positioning</h4>
                  <p className="text-sm mb-4">
                    Multiple devices sharing position information to improve collective accuracy
                  </p>

                  <h4 className="font-semibold mb-2">Context-Aware Algorithms</h4>
                  <p className="text-sm mb-4">
                    Using environmental context and activity recognition to enhance positioning accuracy
                  </p>

                  <h4 className="font-semibold mb-2">Edge Computing Integration</h4>
                  <p className="text-sm">
                    More sophisticated algorithms running on low-power edge devices for better real-time performance
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
                    <TableHead>Dead Reckoning + Anchors</TableHead>
                    <TableHead>Pure UWB</TableHead>
                    <TableHead>Pure BLE</TableHead>
                    <TableHead>Wi-Fi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Infrastructure Density</TableCell>
                    <TableCell>Low (sparse anchors)</TableCell>
                    <TableCell>High (dense anchors)</TableCell>
                    <TableCell>Medium-High</TableCell>
                    <TableCell>Low-Medium</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Typical Accuracy</TableCell>
                    <TableCell>1-3 m (varies with time since correction)</TableCell>
                    <TableCell>10-30 cm</TableCell>
                    <TableCell>1-3 m</TableCell>
                    <TableCell>3-15 m</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Continuous Tracking</TableCell>
                    <TableCell>Yes (between anchors)</TableCell>
                    <TableCell>Only in coverage areas</TableCell>
                    <TableCell>Only in coverage areas</TableCell>
                    <TableCell>Only in coverage areas</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Power Consumption</TableCell>
                    <TableCell>Medium-High</TableCell>
                    <TableCell>Medium</TableCell>
                    <TableCell>Low</TableCell>
                    <TableCell>High</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Deployment Complexity</TableCell>
                    <TableCell>Medium (algorithm tuning)</TableCell>
                    <TableCell>High (precise anchor placement)</TableCell>
                    <TableCell>Medium (beacon deployment)</TableCell>
                    <TableCell>Low (if existing)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Resilience to Signal Loss</TableCell>
                    <TableCell>High (continues functioning)</TableCell>
                    <TableCell>Low (requires constant signal)</TableCell>
                    <TableCell>Low (requires constant signal)</TableCell>
                    <TableCell>Low (requires constant signal)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Best Practices</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Strategic Anchor Placement</h3>
                <p className="text-sm">
                  Place anchors at key locations such as doorways, intersections, and decision points. This maximizes
                  correction opportunities while minimizing infrastructure requirements. Consider traffic patterns and
                  dwell times when planning anchor locations.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Sensor Calibration Routines</h3>
                <p className="text-sm">
                  Implement regular calibration procedures to account for sensor drift and bias. Use anchor encounters
                  as opportunities for dynamic recalibration. Consider environmental factors like temperature that may
                  affect sensor performance.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Motion Model Selection</h3>
                <p className="text-sm">
                  Choose appropriate motion models based on the expected movement patterns. Pedestrian dead reckoning
                  works well for people, while different models are needed for vehicles or equipment. Consider
                  implementing multiple models with automatic selection.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Fusion Algorithm Optimization</h3>
                <p className="text-sm">
                  Tune sensor fusion algorithms for your specific environment and use case. Balance between
                  responsiveness and stability. Consider extended or unscented Kalman filters for non-linear motion, or
                  particle filters for complex environments.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Environmental Constraints</h3>
                <p className="text-sm">
                  Incorporate map constraints and environmental knowledge to improve dead reckoning accuracy. Techniques
                  like map-matching can significantly reduce drift by constraining possible positions to valid areas
                  like hallways and rooms.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              Dead Reckoning combined with RTLS anchors represents a powerful hybrid approach to real-time location
              systems, offering a balance between infrastructure requirements and positioning performance. By leveraging
              the continuous tracking capabilities of inertial navigation with periodic corrections from fixed reference
              points, this approach addresses the limitations of each individual technology.
            </p>
            <p className="mb-4">
              This hybrid solution is particularly valuable in environments where continuous tracking is essential but
              full infrastructure coverage is impractical or cost-prohibitive. It enables applications ranging from
              warehouse optimization and healthcare asset tracking to retail analytics and emergency response.
            </p>
            <p>
              As inertial sensors continue to improve in quality while decreasing in cost, and as fusion algorithms
              become more sophisticated, the dead reckoning with RTLS anchors approach is poised to become an
              increasingly important component in the RTLS ecosystem, particularly for applications requiring continuous
              tracking with minimal infrastructure.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6 sticky top-6">
            <h3 className="text-lg font-bold mb-4">Dead Reckoning + RTLS Overview</h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Building className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Infrastructure</h4>
                  <p className="text-sm text-gray-600">Sparse anchors (reduced density)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Ruler className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Accuracy Range</h4>
                  <p className="text-sm text-gray-600">1-3 meters (varies with time since correction)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Compass className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Environment</h4>
                  <p className="text-sm text-gray-600">Indoor/outdoor, multi-floor, challenging RF environments</p>
                </div>
              </div>

              <div className="flex items-start">
                <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Power Requirements</h4>
                  <p className="text-sm text-gray-600">Medium (sensor sampling rate dependent)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Setup Time</h4>
                  <p className="text-sm text-gray-600">Medium (anchor placement + algorithm tuning)</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Ideal Applications</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Large facilities with partial coverage</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Multi-floor tracking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Cost-sensitive deployments</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Challenging RF environments</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Continuous tracking requirements</span>
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
                  href="/rtls-digital-twin/technologies/sensor-fusion"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Layers className="h-4 w-4 mr-2" />
                  <span>Sensor Fusion</span>
                </Link>
              </li>
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
                  href="/resources/dead-reckoning-implementation-guide"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Dead Reckoning Implementation Guide</span>
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
                <Link href="/resources/imu-selection-guide" className="flex items-center text-blue-600 hover:underline">
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>IMU Selection Guide for RTLS</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/hybrid-rtls-cost-benefit-analysis"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Hybrid RTLS Cost-Benefit Analysis</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
