"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import Link from "next/link"
import { useScrollToTop } from "@/hooks/useScrollToTop"

export default function MagneticFieldTechnologyClientPage() {
  useScrollToTop()

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        <h1 className="text-3xl font-bold mb-4">Magnetic Field Mapping for Indoor Positioning</h1>
        <p className="text-base text-muted-foreground">
          Magnetic field mapping leverages the Earth's magnetic field and structural distortions to create unique
          location fingerprints for infrastructure-light indoor positioning.
        </p>

        {/* Overview Section */}
        <section className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Magnetic field mapping is an innovative indoor positioning technology that utilizes the Earth's magnetic
                field as distorted by building structures to create unique location fingerprints. Unlike many other RTLS
                technologies, magnetic positioning requires minimal or no additional infrastructure, as it leverages the
                ambient magnetic fields and structural distortions naturally present in buildings.
              </p>
              <p className="mb-4">
                This technology works by measuring the variations in the Earth's magnetic field caused by steel beams,
                concrete reinforcement, electrical systems, and other metal objects in buildings. These variations
                create a unique magnetic "fingerprint" for each location, which can be mapped and later used for
                positioning.
              </p>
              <p>
                Magnetic field mapping is particularly valuable in environments where installing and maintaining
                positioning infrastructure is challenging or cost-prohibitive. It's often combined with other sensors
                (accelerometer, gyroscope) to provide a complete indoor positioning solution.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <span className="font-medium mr-2 min-w-[120px]">Accuracy:</span>
                  <span>1-3 meters typical</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 min-w-[120px]">Range:</span>
                  <span>Indoor environments only</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 min-w-[120px]">Infrastructure:</span>
                  <span>Minimal to none required</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 min-w-[120px]">Power Consumption:</span>
                  <span>Low (device-based)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 min-w-[120px]">Cost:</span>
                  <span>Low (minimal hardware, primarily software)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 min-w-[120px]">Setup Complexity:</span>
                  <span>Moderate (requires initial mapping)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 min-w-[120px]">Maintenance:</span>
                  <span>Low (periodic remapping after major changes)</span>
                </li>
                <li className="flex items-start">
                  <span className="font-medium mr-2 min-w-[120px]">Primary Use:</span>
                  <span>Indoor navigation, retail analytics, workplace optimization</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">How Magnetic Field Mapping Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Mapping Phase</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">The mapping phase creates a magnetic field map of the environment:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>The environment is surveyed by walking through the space with a mapping device</li>
                  <li>The device records magnetic field strength and direction at numerous points</li>
                  <li>These readings are combined with inertial data to create a spatial magnetic fingerprint</li>
                  <li>The data is processed to create a magnetic field map of the environment</li>
                </ol>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Positioning Phase</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">The positioning phase uses the map to determine location in real-time:</p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>A mobile device measures the local magnetic field using its magnetometer</li>
                  <li>The readings are compared to the stored magnetic map</li>
                  <li>Pattern matching algorithms identify the most likely location</li>
                  <li>Inertial sensors help track movement between readings</li>
                  <li>Kalman filtering or similar techniques smooth the position estimates</li>
                </ol>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advantages & Limitations Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Advantages & Limitations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>No additional infrastructure required - uses existing building structures</li>
                  <li>Works in challenging areas like stairwells, elevators, and basements</li>
                  <li>Privacy-preserving - device-based positioning without constant server communication</li>
                  <li>Energy efficient - magnetometers consume less power than many other positioning technologies</li>
                  <li>Ubiquitous coverage throughout indoor environments</li>
                  <li>Complements other positioning technologies in hybrid systems</li>
                  <li>Not affected by lighting conditions or visual obstructions</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Requires comprehensive initial mapping of the environment</li>
                  <li>Moderate accuracy (1-3 meters) compared to some alternatives</li>
                  <li>Environmental changes may require remapping</li>
                  <li>Temporary magnetic disturbances can affect accuracy</li>
                  <li>Position accuracy may degrade without periodic updates from other systems</li>
                  <li>Requires sensor fusion for optimal performance</li>
                  <li>Not suitable for outdoor positioning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Applications Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
          <Tabs defaultValue="retail">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto mb-4">
              <TabsTrigger value="retail" className="flex flex-col py-2 h-auto">
                <span>Retail</span>
              </TabsTrigger>
              <TabsTrigger value="healthcare" className="flex flex-col py-2 h-auto">
                <span>Healthcare</span>
              </TabsTrigger>
              <TabsTrigger value="enterprise" className="flex flex-col py-2 h-auto">
                <span>Enterprise</span>
              </TabsTrigger>
              <TabsTrigger value="public" className="flex flex-col py-2 h-auto">
                <span>Public Venues</span>
              </TabsTrigger>
              <TabsTrigger value="emergency" className="flex flex-col py-2 h-auto">
                <span>Emergency</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="retail" className="mt-2">
              <Card className="border">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Retail Applications</h3>
                  <p className="mb-4">Magnetic field mapping provides valuable insights for retail environments:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Customer journey tracking and heatmap analysis</li>
                    <li>Store layout optimization based on traffic patterns</li>
                    <li>Personalized in-store navigation for shoppers</li>
                    <li>Product location services within large stores</li>
                    <li>Staff allocation based on real-time customer density</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="healthcare" className="mt-2">
              <Card className="border">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Healthcare Applications</h3>
                  <p className="mb-4">In healthcare settings, magnetic positioning offers unique benefits:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Visitor wayfinding in complex hospital layouts</li>
                    <li>Staff location awareness in emergency situations</li>
                    <li>Equipment tracking when combined with other technologies</li>
                    <li>Patient flow optimization and bottleneck identification</li>
                    <li>Infection control through contact tracing</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="enterprise" className="mt-2">
              <Card className="border">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Enterprise Applications</h3>
                  <p className="mb-4">Corporate environments benefit from magnetic positioning through:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Workspace utilization analysis and optimization</li>
                    <li>Meeting room finding and availability services</li>
                    <li>Employee movement patterns and collaboration insights</li>
                    <li>Visitor guidance in complex office buildings</li>
                    <li>Emergency evacuation support and planning</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="public" className="mt-2">
              <Card className="border">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Public Venue Applications</h3>
                  <p className="mb-4">Large public spaces leverage magnetic positioning for:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Indoor navigation in shopping malls, airports, and stations</li>
                    <li>Point-of-interest discovery and information delivery</li>
                    <li>Crowd flow management and congestion prevention</li>
                    <li>Location-based advertising and promotions</li>
                    <li>Facility management and maintenance optimization</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="emergency" className="mt-2">
              <Card className="border">
                <CardContent className="pt-6">
                  <h3 className="text-lg font-semibold mb-2">Emergency Response Applications</h3>
                  <p className="mb-4">Emergency services benefit from magnetic positioning through:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>First responder tracking in buildings without reliance on infrastructure</li>
                    <li>Navigation in smoke-filled or visually obstructed environments</li>
                    <li>Building evacuation planning and simulation</li>
                    <li>Personnel accountability during emergency operations</li>
                    <li>Post-incident analysis and training improvements</li>
                  </ul>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Case Studies Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Mini Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle>Shopping Mall Navigation System</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A large shopping mall implemented magnetic field mapping to provide indoor navigation for visitors
                  without installing additional hardware throughout the facility.
                </p>
                <p className="mb-4">
                  <strong>Challenge:</strong> The mall needed a cost-effective wayfinding solution that would work
                  reliably across multiple floors, including areas with poor Wi-Fi coverage.
                </p>
                <p className="mb-4">
                  <strong>Solution:</strong> A comprehensive magnetic map was created during off-hours. The mall's
                  mobile app used this map along with smartphone sensors to provide turn-by-turn directions to stores,
                  restaurants, and facilities.
                </p>
                <p>
                  <strong>Results:</strong> Customer satisfaction increased by 35%, with a 22% reduction in reported
                  cases of visitors getting lost. The solution required minimal maintenance and continued to function
                  effectively even during network outages.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Corporate Campus Workplace Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A technology company with a large corporate campus implemented magnetic positioning to analyze
                  workspace utilization and optimize their office layout.
                </p>
                <p className="mb-4">
                  <strong>Challenge:</strong> The company needed to understand how employees used different spaces
                  without installing visible tracking infrastructure that might raise privacy concerns.
                </p>
                <p className="mb-4">
                  <strong>Solution:</strong> An opt-in employee app used magnetic positioning to anonymously track
                  movement patterns throughout the campus, providing heatmaps and utilization metrics.
                </p>
                <p>
                  <strong>Results:</strong> The company identified underutilized areas and optimized their workspace
                  layout, resulting in a 15% improvement in space efficiency and a 28% increase in reported
                  collaboration opportunities among teams.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Considerations Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Implementation Considerations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Mapping Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Comprehensive walking of all accessible areas</li>
                  <li>Multiple passes in different directions for robust fingerprinting</li>
                  <li>Special attention to transition areas (stairs, elevators)</li>
                  <li>Regular validation and updates after significant changes</li>
                  <li>Proper mapping device calibration before surveys</li>
                  <li>Consistent walking pace during mapping</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Device Considerations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Magnetometer quality and calibration procedures</li>
                  <li>Sensor fusion with accelerometer and gyroscope</li>
                  <li>Processing power requirements for algorithms</li>
                  <li>Battery impact optimization strategies</li>
                  <li>Handling of device orientation variations</li>
                  <li>Compatibility with different smartphone models</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Integration Strategies</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Hybrid positioning with complementary technologies</li>
                  <li>API design for location services</li>
                  <li>Map storage and distribution approach</li>
                  <li>Privacy considerations and data handling</li>
                  <li>Graceful degradation when magnetic disturbances occur</li>
                  <li>User experience design for position uncertainty</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Technology Comparison Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Technology Comparison</h2>
          <div className="overflow-x-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Feature</TableHead>
                  <TableHead>Magnetic Field</TableHead>
                  <TableHead>Wi-Fi</TableHead>
                  <TableHead>BLE</TableHead>
                  <TableHead>UWB</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell className="font-medium">Typical Accuracy</TableCell>
                  <TableCell>1-3 meters</TableCell>
                  <TableCell>3-15 meters</TableCell>
                  <TableCell>1-3 meters</TableCell>
                  <TableCell>10-30 cm</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Infrastructure Requirements</TableCell>
                  <TableCell>Minimal to none</TableCell>
                  <TableCell>Wi-Fi access points</TableCell>
                  <TableCell>BLE beacons</TableCell>
                  <TableCell>UWB anchors</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Setup Complexity</TableCell>
                  <TableCell>High (initial mapping)</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>High</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Power Consumption</TableCell>
                  <TableCell>Low</TableCell>
                  <TableCell>High</TableCell>
                  <TableCell>Low</TableCell>
                  <TableCell>Medium</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Maintenance</TableCell>
                  <TableCell>Periodic remapping</TableCell>
                  <TableCell>AP maintenance</TableCell>
                  <TableCell>Battery replacement</TableCell>
                  <TableCell>Anchor calibration</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell className="font-medium">Privacy</TableCell>
                  <TableCell>High (device-based)</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Medium</TableCell>
                  <TableCell>Low</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </section>

        {/* Future Trends Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-4">Future Trends</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle>Technical Advancements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Crowdsourced Mapping:</strong> Collaborative creation and maintenance of magnetic maps
                    through normal user movement
                  </li>
                  <li>
                    <strong>Deep Learning Integration:</strong> Advanced neural networks for improved pattern
                    recognition and positioning accuracy
                  </li>
                  <li>
                    <strong>Adaptive Mapping:</strong> Self-updating maps that adjust to environmental changes
                    automatically
                  </li>
                  <li>
                    <strong>Enhanced Sensor Fusion:</strong> Tighter integration with other positioning technologies for
                    sub-meter accuracy
                  </li>
                  <li>
                    <strong>Specialized Hardware:</strong> Purpose-built sensors with higher sensitivity for improved
                    performance
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Market & Application Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Augmented Reality Integration:</strong> Precise indoor positioning for AR experiences and
                    wayfinding
                  </li>
                  <li>
                    <strong>Smart Building Systems:</strong> Integration with building management and automation systems
                  </li>
                  <li>
                    <strong>Emergency Response:</strong> Enhanced solutions for first responders in challenging
                    environments
                  </li>
                  <li>
                    <strong>Retail Analytics:</strong> More sophisticated customer journey tracking and behavior
                    analysis
                  </li>
                  <li>
                    <strong>Standardized APIs:</strong> Common interfaces for magnetic positioning across platforms and
                    applications
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Related Resources Section */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Articles</h3>
              <ul className="space-y-3">
                <li>
                  <Link href="/resources/indoor-positioning-basics" className="text-blue-600 hover:underline">
                    Indoor Positioning Basics: Technologies & Use Cases
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/rtls-101-core-components-protocols-deployment-models"
                    className="text-blue-600 hover:underline"
                  >
                    RTLS 101: Core Components, Protocols & Deployment Models
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/vision-slam-vs-lidar-vio-3d-mapping-rtls"
                    className="text-blue-600 hover:underline"
                  >
                    Vision SLAM vs LiDAR vs VIO: 3D Mapping for RTLS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/integrating-rtls-with-iot-apis-middleware-data-flows"
                    className="text-blue-600 hover:underline"
                  >
                    Integrating RTLS with IoT: APIs, Middleware & Data Flows
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Related Technologies</h3>
              <ul className="space-y-3">
                <li>
                  <Link
                    href="/rtls-digital-twin/technologies/wifi"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <span className="mr-2">→</span> Wi-Fi Positioning
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rtls-digital-twin/technologies/ble"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <span className="mr-2">→</span> Bluetooth Low Energy (BLE)
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rtls-digital-twin/technologies/sensor-fusion"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <span className="mr-2">→</span> Sensor Fusion
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rtls-digital-twin/technologies/slam"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <span className="mr-2">→</span> SLAM
                  </Link>
                </li>
                <li>
                  <Link
                    href="/rtls-digital-twin/technologies/dead-reckoning"
                    className="text-blue-600 hover:underline flex items-center"
                  >
                    <span className="mr-2">→</span> Dead Reckoning
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
