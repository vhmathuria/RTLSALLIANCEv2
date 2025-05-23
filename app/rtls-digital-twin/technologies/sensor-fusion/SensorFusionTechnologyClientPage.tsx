"use client"

import Image from "next/image"
import Link from "next/link"
import { Factory, Hospital, ShoppingCart, Truck, Warehouse } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useScrollToTop } from "@/hooks/useScrollToTop"

// Add the following imports at the top of the file
import { FAQSection } from "@/components/ui/faq-section"
import { FAQSchema } from "@/components/seo/faq-schema"
import { technologyFAQs } from "@/lib/faq-data"

export default function SensorFusionTechnologyClientPage() {
  useScrollToTop()

  return (
    <div className="container mx-auto py-8 px-4">
      <article className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Sensor Fusion Technology for RTLS</h1>
        <p className="text-lg text-muted-foreground mb-8">
          Sensor fusion combines data from multiple positioning technologies to create a more accurate, reliable, and
          comprehensive real-time location system that overcomes the limitations of any single technology.
        </p>

        {/* Overview Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Sensor fusion is an approach to real-time location systems that integrates data from multiple sensing
                technologies to produce positioning information that is more accurate, reliable, and comprehensive than
                what could be achieved using any single technology.
              </p>
              <p className="mb-4">
                Rather than being a standalone positioning technology, sensor fusion is a methodology that leverages the
                strengths of various positioning systems while mitigating their individual weaknesses. It's particularly
                valuable in complex environments where no single technology can provide adequate coverage or accuracy.
              </p>
              <div className="relative h-60 w-full rounded-lg overflow-hidden mt-6">
                <Image
                  src="/placeholder-rjuey.png"
                  alt="Sensor fusion diagram showing multiple data sources being combined for indoor positioning"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <div className="w-1/3 font-medium">Accuracy</div>
                  <div className="w-2/3">
                    Varies by technologies used (typically improved over individual technologies)
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="w-1/3 font-medium">Range</div>
                  <div className="w-2/3">Dependent on component technologies (can cover indoor/outdoor)</div>
                </div>
                <div className="flex items-start">
                  <div className="w-1/3 font-medium">Update Rate</div>
                  <div className="w-2/3">Varies by implementation (typically 1-10 Hz)</div>
                </div>
                <div className="flex items-start">
                  <div className="w-1/3 font-medium">Infrastructure</div>
                  <div className="w-2/3">Multiple sensor types (varies by implementation)</div>
                </div>
                <div className="flex items-start">
                  <div className="w-1/3 font-medium">Power Requirements</div>
                  <div className="w-2/3">Medium to high (multiple sensors)</div>
                </div>
                <div className="flex items-start">
                  <div className="w-1/3 font-medium">Cost</div>
                  <div className="w-2/3">Medium to high ($$-$$$)</div>
                </div>
                <div className="flex items-start">
                  <div className="w-1/3 font-medium">Deployment Complexity</div>
                  <div className="w-2/3">High (multiple systems integration)</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How Sensor Fusion Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Data Collection & Processing</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Sensor fusion begins with collecting raw positioning data from multiple technologies such as UWB, BLE,
                  WiFi, GNSS, inertial sensors, and more. Each data source provides different strengths:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>RF-based systems (UWB, BLE, WiFi) provide absolute positioning</li>
                  <li>Inertial sensors track relative movement</li>
                  <li>Visual systems provide contextual information</li>
                  <li>GNSS offers outdoor positioning</li>
                </ul>
                <p className="mt-4">
                  The data is preprocessed to normalize formats, filter noise, and align coordinate systems before being
                  fed into fusion algorithms.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Fusion Algorithms</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">Several algorithmic approaches are used to combine data from multiple sources:</p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Kalman Filtering</strong> - Statistical method for optimal estimation with noisy
                    measurements
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
                <p className="mt-4">
                  These algorithms dynamically weight inputs based on confidence levels and historical performance to
                  produce the most accurate position estimate.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advantages & Limitations Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Advantages & Limitations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Improved Accuracy</strong> - Combines multiple data sources for more precise positioning
                  </li>
                  <li>
                    <strong>Enhanced Reliability</strong> - Continues functioning when individual systems fail
                  </li>
                  <li>
                    <strong>Seamless Transitions</strong> - Maintains tracking across different environments
                    (indoor/outdoor)
                  </li>
                  <li>
                    <strong>Adaptability</strong> - Can adjust to changing conditions and requirements
                  </li>
                  <li>
                    <strong>Comprehensive Data</strong> - Provides richer contextual information beyond just position
                  </li>
                  <li>
                    <strong>Environment Flexibility</strong> - Works in challenging environments where single
                    technologies fail
                  </li>
                  <li>
                    <strong>Extended Coverage</strong> - Combines ranges of multiple technologies
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Increased Complexity</strong> - More components and integration points to manage
                  </li>
                  <li>
                    <strong>Higher Cost</strong> - Multiple technologies typically increase overall system cost
                  </li>
                  <li>
                    <strong>Processing Overhead</strong> - Fusion algorithms require computational resources
                  </li>
                  <li>
                    <strong>Calibration Challenges</strong> - Multiple systems must be aligned and calibrated together
                  </li>
                  <li>
                    <strong>Integration Complexity</strong> - Different technologies may have incompatible interfaces
                  </li>
                  <li>
                    <strong>Maintenance Burden</strong> - More components mean more potential failure points
                  </li>
                  <li>
                    <strong>Implementation Expertise</strong> - Requires specialized knowledge across multiple
                    technologies
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Applications Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
          <Tabs defaultValue="healthcare">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto mb-4">
              <TabsTrigger value="healthcare" className="flex flex-col py-2 h-auto">
                <Hospital className="h-5 w-5 mb-1" />
                Healthcare
              </TabsTrigger>
              <TabsTrigger value="manufacturing" className="flex flex-col py-2 h-auto">
                <Factory className="h-5 w-5 mb-1" />
                Manufacturing
              </TabsTrigger>
              <TabsTrigger value="logistics" className="flex flex-col py-2 h-auto">
                <Truck className="h-5 w-5 mb-1" />
                Logistics
              </TabsTrigger>
              <TabsTrigger value="retail" className="flex flex-col py-2 h-auto">
                <ShoppingCart className="h-5 w-5 mb-1" />
                Retail
              </TabsTrigger>
              <TabsTrigger value="warehouse" className="flex flex-col py-2 h-auto">
                <Warehouse className="h-5 w-5 mb-1" />
                Warehousing
              </TabsTrigger>
            </TabsList>
            <TabsContent value="healthcare" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Healthcare Applications</CardTitle>
                  <CardDescription>Sensor fusion provides critical reliability for healthcare RTLS</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">In healthcare environments, sensor fusion RTLS delivers several key benefits:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Continuous patient tracking across diverse hospital environments</li>
                    <li>Seamless tracking of equipment as it moves between departments</li>
                    <li>High-reliability tracking for critical assets and vulnerable patients</li>
                    <li>Maintaining positioning through RF-challenging areas like MRI rooms</li>
                    <li>Combining staff badge tracking with equipment location for workflow analysis</li>
                  </ul>
                  <p>
                    Hospitals typically combine BLE or RFID for general tracking with UWB or camera systems for
                    high-precision zones, and integrate with staff mobile devices for additional data points.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="manufacturing" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Manufacturing Applications</CardTitle>
                  <CardDescription>Precision tracking in complex industrial environments</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Manufacturing facilities benefit from sensor fusion RTLS in several ways:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Tracking materials through the entire production process</li>
                    <li>Monitoring tool locations in RF-challenging environments</li>
                    <li>Combining indoor and outdoor tracking for complete supply chain visibility</li>
                    <li>High-precision positioning for automated guided vehicles (AGVs)</li>
                    <li>Worker safety monitoring in hazardous areas</li>
                  </ul>
                  <p>
                    Factories often combine UWB for precision zones with BLE for general areas, and integrate with
                    machine vision systems for context-aware positioning.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="logistics" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Logistics Applications</CardTitle>
                  <CardDescription>Seamless tracking across the entire supply chain</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Logistics operations leverage sensor fusion RTLS to:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Track shipments from warehouse to final delivery</li>
                    <li>Maintain visibility as items move between indoor and outdoor environments</li>
                    <li>Monitor environmental conditions alongside location data</li>
                    <li>Optimize route planning with real-time location updates</li>
                    <li>Provide accurate delivery time estimates</li>
                  </ul>
                  <p>
                    Logistics applications typically combine GNSS for outdoor tracking with BLE or RFID for indoor
                    locations, and cellular for wide-area connectivity.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="retail" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Retail Applications</CardTitle>
                  <CardDescription>Enhanced customer experience and inventory management</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Retail environments use sensor fusion RTLS to:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Track customer journeys throughout the store</li>
                    <li>Monitor inventory location and movement in real-time</li>
                    <li>Provide location-based services to customers</li>
                    <li>Analyze foot traffic patterns and dwell times</li>
                    <li>Enable seamless omnichannel experiences</li>
                  </ul>
                  <p>
                    Retail implementations often combine BLE beacons with WiFi positioning and integrate with camera
                    systems for customer analytics.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="warehouse" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Warehousing Applications</CardTitle>
                  <CardDescription>Optimized operations and inventory management</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">Warehouses implement sensor fusion RTLS to:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Track inventory through receiving, storage, picking, and shipping</li>
                    <li>Optimize forklift and worker routes</li>
                    <li>Automate inventory counts and location verification</li>
                    <li>Monitor environmental conditions for sensitive goods</li>
                    <li>Integrate with warehouse management systems</li>
                  </ul>
                  <p>
                    Warehouse deployments typically combine UWB or camera systems for high-value areas with BLE or RFID
                    for general tracking, and often integrate with forklift-mounted sensors.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Case Studies Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Mini Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle>Hospital Equipment Tracking</CardTitle>
                <CardDescription>Major US Hospital System</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A large hospital system implemented a sensor fusion RTLS combining BLE beacons for general tracking
                  with UWB for high-precision zones like operating rooms.
                </p>
                <p className="mb-4">
                  <strong>Challenge:</strong> Equipment frequently moved between departments with different tracking
                  requirements, and RF interference in certain areas created tracking dead zones.
                </p>
                <p className="mb-4">
                  <strong>Solution:</strong> The sensor fusion approach integrated BLE, UWB, and WiFi positioning with
                  inertial sensors on high-value equipment. The system used Kalman filtering to maintain tracking
                  through transitions and challenging areas.
                </p>
                <p>
                  <strong>Results:</strong> Equipment utilization increased by 24%, rental costs decreased by 31%, and
                  staff time spent searching for equipment was reduced by 73%.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Automotive Manufacturing</CardTitle>
                <CardDescription>European Auto Manufacturer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A European automotive manufacturer implemented a sensor fusion RTLS to track vehicles, parts, and
                  tools throughout their production facility.
                </p>
                <p className="mb-4">
                  <strong>Challenge:</strong> The facility included indoor assembly areas, outdoor testing zones, and
                  RF-challenging paint booths and metal-rich environments.
                </p>
                <p className="mb-4">
                  <strong>Solution:</strong> The solution combined UWB for precision indoor tracking, GNSS for outdoor
                  areas, and camera systems with computer vision for context awareness. Machine learning algorithms
                  fused the data for seamless tracking.
                </p>
                <p>
                  <strong>Results:</strong> Production efficiency increased by 17%, quality issues were reduced by 23%,
                  and the system enabled new automated workflows that reduced labor costs by 12%.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Considerations Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Implementation Considerations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">System Architecture</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Determine centralized vs. distributed processing approach</li>
                  <li>Design for scalability as tracking needs grow</li>
                  <li>Implement redundancy for mission-critical applications</li>
                  <li>Consider edge computing for latency-sensitive use cases</li>
                  <li>Plan data storage strategy for historical analysis</li>
                  <li>Design APIs for integration with other systems</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Technology Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Choose complementary technologies that address each other's weaknesses</li>
                  <li>Consider environmental factors (indoor/outdoor, RF interference)</li>
                  <li>Balance accuracy requirements with cost constraints</li>
                  <li>Evaluate power requirements for mobile components</li>
                  <li>Assess infrastructure requirements and installation complexity</li>
                  <li>Consider future technology roadmaps and obsolescence</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Deployment & Maintenance</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Develop robust calibration procedures for all technologies</li>
                  <li>Implement monitoring tools to detect component failures</li>
                  <li>Create maintenance schedules for each technology type</li>
                  <li>Train staff on system operation and troubleshooting</li>
                  <li>Document integration points and dependencies</li>
                  <li>Plan for regular software updates and security patches</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology Comparison Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Technology Comparison</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[180px]">Feature</TableHead>
                  <TableHead>Sensor Fusion</TableHead>
                  <TableHead>UWB</TableHead>
                  <TableHead>BLE</TableHead>
                  <TableHead>WiFi</TableHead>
                  <TableHead>GNSS</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Accuracy</TableCell>
                  <TableCell>High (varies by components)</TableCell>
                  <TableCell>Very High (10-30cm)</TableCell>
                  <TableCell>Medium (1-3m)</TableCell>
                  <TableCell>Low (3-15m)</TableCell>
                  <TableCell>Medium (3-5m)</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Coverage</TableCell>
                  <TableCell>Comprehensive</TableCell>
                  <TableCell>Limited</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Wide</TableCell>
                  <TableCell>Outdoor only</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Reliability</TableCell>
                  <TableCell>Very High</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Variable</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Cost</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>Low</TableCell>
                  <TableCell>Low</TableCell>
                  <TableCell>Medium</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Complexity</TableCell>
                  <TableCell>Very High</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Low</TableCell>
                  <TableCell>Low</TableCell>
                  <TableCell>Medium</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
          <div className="mt-4 text-right">
            <Link
              href="/rtls-digital-twin/technologies"
              className="text-blue-600 hover:underline inline-flex items-center"
            >
              View all RTLS technologies →
            </Link>
          </div>
        </section>

        {/* Future Trends Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Future Trends</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle>Edge Computing Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  The future of sensor fusion RTLS will be increasingly edge-centric, with more processing happening on
                  local devices rather than in the cloud.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>On-device fusion algorithms reducing latency and bandwidth requirements</li>
                  <li>Edge AI accelerators enabling more sophisticated local processing</li>
                  <li>Distributed fusion architectures balancing local and cloud processing</li>
                  <li>5G networks supporting higher data rates for complex sensor integration</li>
                  <li>Mesh networks of fusion-capable devices creating self-organizing RTLS</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>AI-Driven Fusion</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Artificial intelligence will transform how sensor fusion systems operate, moving beyond traditional
                  algorithmic approaches.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Deep learning models replacing traditional Kalman filters for complex environments</li>
                  <li>Self-tuning systems that automatically optimize for different conditions</li>
                  <li>Predictive positioning that anticipates movement patterns</li>
                  <li>Semantic understanding of spaces improving contextual positioning</li>
                  <li>Unsupervised learning for automatic calibration and adaptation</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Resources Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Articles & Guides</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/resources/rtls-digital-twins-synchronizing-spatial-operational-data"
                    className="block group"
                  >
                    <h4 className="text-blue-600 group-hover:underline font-medium">
                      RTLS & Digital Twins: Synchronizing Spatial and Operational Data
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Learn how sensor fusion techniques enable comprehensive digital twin creation with real-time
                      location data.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/integrating-rtls-with-iot-apis-middleware-data-flows" className="block group">
                    <h4 className="text-blue-600 group-hover:underline font-medium">
                      Integrating RTLS with IoT: APIs, Middleware & Data Flows
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      Discover how sensor fusion enables comprehensive IoT integration with multiple data sources for
                      enhanced tracking.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/rtls-101-core-components-protocols-deployment-models" className="block group">
                    <h4 className="text-blue-600 group-hover:underline font-medium">
                      RTLS 101: Core Components, Protocols & Deployment Models
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      A comprehensive introduction to RTLS technologies including multi-technology approaches.
                    </p>
                  </Link>
                </li>
                <li>
                  <Link href="/resources/enterprise-rtls-step-by-step-implementation-guide" className="block group">
                    <h4 className="text-blue-600 group-hover:underline font-medium">
                      Enterprise RTLS: Step-by-Step Implementation Guide
                    </h4>
                    <p className="text-sm text-gray-600 mt-1">
                      A practical guide to implementing complex RTLS solutions in enterprise environments.
                    </p>
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Unbiased Guidance</h3>
              <div className="bg-blue-50 rounded-lg p-6">
                <h4 className="font-semibold mb-2">Need help selecting the right RTLS technology?</h4>
                <p className="mb-4 text-sm">
                  Our vendor-neutral experts can help you navigate the complex landscape of RTLS technologies and find
                  the solution that best fits your specific requirements.
                </p>
                <Link href="/contact">
                  <Button>Schedule a Consultation</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="mt-16">
          <FAQSection
            faqs={technologyFAQs.sensor_fusion}
            title="Frequently Asked Questions About Sensor Fusion"
            sectionId="sensor-fusion-faqs"
            className="bg-gray-50 p-6 rounded-lg"
          />
          <FAQSchema faqs={technologyFAQs.sensor_fusion} pageId="sensor-fusion-technology" />
        </section>
      </article>
    </div>
  )
}
