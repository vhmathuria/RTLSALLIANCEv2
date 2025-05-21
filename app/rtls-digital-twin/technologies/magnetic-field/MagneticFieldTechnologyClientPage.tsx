"use client"
import Link from "next/link"
import { Building2, Factory, Hospital, ShoppingBag, Truck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useScrollToTop } from "@/hooks/useScrollToTop"

export default function MagneticFieldTechnologyClientPage() {
  useScrollToTop()

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Magnetic Field Mapping Technology</h1>
          <p className="text-base text-muted-foreground">
            Magnetic field mapping leverages the Earth's magnetic field and structural distortions to create unique
            location fingerprints for infrastructure-light indoor positioning.
          </p>
        </header>

        {/* Overview and Key Specifications */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                Magnetic field mapping is an innovative indoor positioning technology that utilizes the Earth's magnetic
                field as distorted by building structures to create unique location fingerprints. Unlike many other RTLS
                technologies, magnetic positioning requires minimal or no additional infrastructure, as it leverages the
                ambient magnetic fields and structural distortions naturally present in buildings.
              </p>
              <p>
                This technology works by measuring the variations in the Earth's magnetic field caused by steel beams,
                concrete reinforcement, electrical systems, and other metal objects in buildings. These variations
                create a unique magnetic "fingerprint" for each location, which can be mapped and later used for
                positioning.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Accuracy:</span>
                  <span>1-3 meters typical</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Range:</span>
                  <span>Indoor environments only</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Infrastructure:</span>
                  <span>Minimal to none required</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Power Consumption:</span>
                  <span>Low (device-based)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Setup Complexity:</span>
                  <span>Moderate (requires initial mapping)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Maintenance:</span>
                  <span>Periodic remapping after major changes</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How Magnetic Field Mapping Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How Magnetic Field Mapping Works for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Mapping Phase</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The mapping phase creates a magnetic field map of the environment. The environment is surveyed by
                  walking through the space with a mapping device that records magnetic field strength and direction at
                  numerous points. These readings are combined with inertial data to create a spatial magnetic
                  fingerprint, which is then processed to create a magnetic field map of the environment.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Positioning Phase</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  The positioning phase uses the map to determine location in real-time. A mobile device measures the
                  local magnetic field using its magnetometer, and these readings are compared to the stored magnetic
                  map. Pattern matching algorithms identify the most likely location, while inertial sensors help track
                  movement between readings. Kalman filtering or similar techniques smooth the position estimates.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advantages & Limitations */}
        <section className="mb-12">
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
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
          <Tabs defaultValue="retail" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto mb-4">
              <TabsTrigger value="retail" className="flex flex-col py-2 h-auto">
                <ShoppingBag className="h-5 w-5 mb-1" />
                Retail
              </TabsTrigger>
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
              <TabsTrigger value="commercial" className="flex flex-col py-2 h-auto">
                <Building2 className="h-5 w-5 mb-1" />
                Commercial
              </TabsTrigger>
            </TabsList>
            <TabsContent value="retail" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Retail Applications</CardTitle>
                  <CardDescription>
                    Magnetic field mapping enables customer analytics and navigation in retail environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In retail environments, magnetic field mapping provides valuable insights through customer journey
                    tracking and heatmap analysis. The technology enables personalized in-store navigation for shoppers
                    without requiring the installation of beacons throughout the store.
                  </p>
                  <p>
                    Retailers can analyze traffic patterns to optimize store layouts and product placement. The
                    technology is particularly valuable in large shopping malls where traditional positioning systems
                    may struggle with multi-floor navigation and areas with poor wireless connectivity.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Customer journey tracking and heatmap analysis</li>
                        <li>Store layout optimization based on traffic patterns</li>
                        <li>Personalized in-store navigation for shoppers</li>
                        <li>Product location services within large stores</li>
                        <li>Staff allocation based on real-time customer density</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>No visible infrastructure required</li>
                        <li>Works in areas with poor wireless connectivity</li>
                        <li>Seamless multi-floor navigation</li>
                        <li>Lower maintenance costs than beacon-based systems</li>
                        <li>Enhanced customer experience</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="healthcare" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Healthcare Applications</CardTitle>
                  <CardDescription>
                    Magnetic positioning provides wayfinding and staff location awareness in healthcare settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Healthcare facilities use magnetic field mapping to provide wayfinding services for visitors in
                    complex hospital layouts. The technology helps patients and visitors navigate to appointments,
                    reducing missed appointments and improving the patient experience.
                  </p>
                  <p>
                    For staff, magnetic positioning provides location awareness in emergency situations and helps
                    optimize workflows. When combined with other technologies, it can also support equipment tracking
                    and patient flow optimization.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Visitor wayfinding in complex hospital layouts</li>
                        <li>Staff location awareness in emergency situations</li>
                        <li>Equipment tracking when combined with other technologies</li>
                        <li>Patient flow optimization and bottleneck identification</li>
                        <li>Infection control through contact tracing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduced missed appointments</li>
                        <li>Improved patient experience</li>
                        <li>Enhanced emergency response</li>
                        <li>Works in areas with sensitive medical equipment</li>
                        <li>No interference with medical devices</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="manufacturing" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Manufacturing Applications</CardTitle>
                  <CardDescription>
                    Magnetic field mapping supports navigation in complex industrial environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In manufacturing facilities, magnetic field mapping provides navigation assistance in complex
                    industrial environments where traditional positioning systems may struggle due to metal structures
                    and equipment. The technology helps maintenance personnel locate equipment quickly and efficiently.
                  </p>
                  <p>
                    When combined with other positioning technologies, magnetic mapping can enhance the accuracy of
                    worker safety systems and emergency evacuation procedures. It's particularly valuable in areas with
                    high metal content where RF-based systems may experience interference.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Maintenance personnel navigation</li>
                        <li>Emergency evacuation support</li>
                        <li>Visitor guidance in complex facilities</li>
                        <li>Training and onboarding of new personnel</li>
                        <li>Hybrid positioning for asset tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Works in environments with high metal content</li>
                        <li>No interference with industrial equipment</li>
                        <li>Reduced maintenance compared to beacon systems</li>
                        <li>Functions in areas with poor wireless connectivity</li>
                        <li>Enhances safety systems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="logistics" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Logistics Applications</CardTitle>
                  <CardDescription>
                    Magnetic positioning enhances navigation in warehouses and distribution centers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Logistics operations use magnetic field mapping to provide navigation assistance in large warehouses
                    and distribution centers. The technology helps new or temporary workers navigate efficiently to
                    picking locations, reducing training time and improving productivity.
                  </p>
                  <p>
                    When integrated with warehouse management systems, magnetic positioning can optimize picking routes
                    and provide real-time navigation updates. It's particularly valuable in facilities that undergo
                    frequent layout changes where fixed infrastructure would require regular updates.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Worker navigation to picking locations</li>
                        <li>Optimized picking route guidance</li>
                        <li>Training and onboarding of temporary workers</li>
                        <li>Facility navigation for visitors and contractors</li>
                        <li>Emergency evacuation support</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduced training time for new workers</li>
                        <li>Improved picking efficiency</li>
                        <li>Adaptable to changing warehouse layouts</li>
                        <li>Works in areas with poor wireless connectivity</li>
                        <li>Low maintenance requirements</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="commercial" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Commercial Building Applications</CardTitle>
                  <CardDescription>
                    Magnetic field mapping enables smart building functionality and space optimization.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Commercial buildings implement magnetic field mapping for space utilization analysis, wayfinding,
                    and occupancy monitoring. The technology helps optimize workspace layouts and improve facility
                    management efficiency without installing visible tracking infrastructure.
                  </p>
                  <p>
                    For visitors and new employees, magnetic positioning provides indoor navigation assistance to locate
                    meeting rooms, offices, and amenities. The system integrates with building management systems for
                    energy optimization based on occupancy patterns.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Space utilization monitoring and analysis</li>
                        <li>Indoor navigation and wayfinding</li>
                        <li>Meeting room finding and availability services</li>
                        <li>Visitor guidance in complex office buildings</li>
                        <li>Emergency evacuation support and planning</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>No visible tracking infrastructure</li>
                        <li>Enhanced privacy compared to camera-based systems</li>
                        <li>Improved space utilization</li>
                        <li>Enhanced visitor experience</li>
                        <li>Reduced energy consumption through occupancy data</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Case Studies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mini Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle>Shopping Mall Navigation System</CardTitle>
                <CardDescription>Major European Shopping Center</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A large shopping mall implemented magnetic field mapping to provide indoor navigation for visitors
                  without installing additional hardware throughout the facility.
                </p>
                <p>
                  The mall needed a cost-effective wayfinding solution that would work reliably across multiple floors,
                  including areas with poor Wi-Fi coverage. A comprehensive magnetic map was created during off-hours,
                  and the mall's mobile app used this map along with smartphone sensors to provide turn-by-turn
                  directions to stores, restaurants, and facilities.
                </p>
                <p className="mt-4">
                  Customer satisfaction increased by 35%, with a 22% reduction in reported cases of visitors getting
                  lost. The solution required minimal maintenance and continued to function effectively even during
                  network outages.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Corporate Campus Workplace Analytics</CardTitle>
                <CardDescription>Technology Company Headquarters</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A technology company with a large corporate campus implemented magnetic positioning to analyze
                  workspace utilization and optimize their office layout.
                </p>
                <p>
                  The company needed to understand how employees used different spaces without installing visible
                  tracking infrastructure that might raise privacy concerns. An opt-in employee app used magnetic
                  positioning to anonymously track movement patterns throughout the campus, providing heatmaps and
                  utilization metrics.
                </p>
                <p className="mt-4">
                  The company identified underutilized areas and optimized their workspace layout, resulting in a 15%
                  improvement in space efficiency and a 28% increase in reported collaboration opportunities among
                  teams.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Considerations */}
        <section className="mb-12">
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

        {/* Technology Comparison */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Technology Comparison</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border-collapse">
              <thead>
                <tr>
                  <th className="border px-4 py-2 text-left font-semibold">Feature</th>
                  <th className="border px-4 py-2 text-left font-semibold">Magnetic Field</th>
                  <th className="border px-4 py-2 text-left font-semibold">BLE</th>
                  <th className="border px-4 py-2 text-left font-semibold">Wi-Fi</th>
                  <th className="border px-4 py-2 text-left font-semibold">UWB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Typical Accuracy</td>
                  <td className="border px-4 py-2">1-3 meters</td>
                  <td className="border px-4 py-2">1-3 meters</td>
                  <td className="border px-4 py-2">3-5 meters</td>
                  <td className="border px-4 py-2">10-30 cm</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Infrastructure</td>
                  <td className="border px-4 py-2">Minimal to none</td>
                  <td className="border px-4 py-2">BLE beacons</td>
                  <td className="border px-4 py-2">Wi-Fi access points</td>
                  <td className="border px-4 py-2">UWB anchors</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Setup Complexity</td>
                  <td className="border px-4 py-2">High (initial mapping)</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">High</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Power Consumption</td>
                  <td className="border px-4 py-2">Low</td>
                  <td className="border px-4 py-2">Very Low</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Medium</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Maintenance</td>
                  <td className="border px-4 py-2">Periodic remapping</td>
                  <td className="border px-4 py-2">Battery replacement</td>
                  <td className="border px-4 py-2">AP maintenance</td>
                  <td className="border px-4 py-2">Anchor calibration</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Smartphone Compatible</td>
                  <td className="border px-4 py-2">Yes</td>
                  <td className="border px-4 py-2">Yes</td>
                  <td className="border px-4 py-2">Yes</td>
                  <td className="border px-4 py-2">Limited</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Privacy</td>
                  <td className="border px-4 py-2">High (device-based)</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Low</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-4">
            <Link href="/rtls-digital-twin/technologies" className="text-primary hover:underline">
              View all RTLS technologies →
            </Link>
          </div>
        </section>

        {/* Future Trends */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Future Trends</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle>Technological Advancements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Crowdsourced Mapping:</span> Collaborative creation and maintenance of
                    magnetic maps through normal user movement
                  </li>
                  <li>
                    <span className="font-medium">Deep Learning Integration:</span> Advanced neural networks for
                    improved pattern recognition and positioning accuracy
                  </li>
                  <li>
                    <span className="font-medium">Adaptive Mapping:</span> Self-updating maps that adjust to
                    environmental changes automatically
                  </li>
                  <li>
                    <span className="font-medium">Enhanced Sensor Fusion:</span> Tighter integration with other
                    positioning technologies for sub-meter accuracy
                  </li>
                  <li>
                    <span className="font-medium">Specialized Hardware:</span> Purpose-built sensors with higher
                    sensitivity for improved performance
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Market Evolution</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  <li>
                    <span className="font-medium">Augmented Reality Integration:</span> Precise indoor positioning for
                    AR experiences and wayfinding
                  </li>
                  <li>
                    <span className="font-medium">Smart Building Systems:</span> Integration with building management
                    and automation systems
                  </li>
                  <li>
                    <span className="font-medium">Emergency Response:</span> Enhanced solutions for first responders in
                    challenging environments
                  </li>
                  <li>
                    <span className="font-medium">Retail Analytics:</span> More sophisticated customer journey tracking
                    and behavior analysis
                  </li>
                  <li>
                    <span className="font-medium">Standardized APIs:</span> Common interfaces for magnetic positioning
                    across platforms and applications
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learn More */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Learn More About Magnetic Field Mapping</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link href="/resources/indoor-positioning-basics" className="text-primary hover:underline">
                    Indoor Positioning Basics: Technologies & Use Cases
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/rtls-101-core-components-protocols-deployment-models"
                    className="text-primary hover:underline"
                  >
                    RTLS 101: Core Components, Protocols & Deployment Models
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/vision-slam-vs-lidar-vio-3d-mapping-rtls"
                    className="text-primary hover:underline"
                  >
                    Vision SLAM vs LiDAR vs VIO: 3D Mapping for RTLS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/integrating-rtls-with-iot-apis-middleware-data-flows"
                    className="text-primary hover:underline"
                  >
                    Integrating RTLS with IoT: APIs, Middleware & Data Flows
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/sensor-fusion-algorithms-rtls-accuracy"
                    className="text-primary hover:underline"
                  >
                    Sensor Fusion Algorithms for Enhanced RTLS Accuracy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Unbiased Guidance</h3>
              <p className="mb-4">
                Need help determining if magnetic field mapping is the right technology for your RTLS project?
              </p>
              <p className="mb-6">
                RTLS Alliance Practitioners can provide personalized guidance based on your specific requirements.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90 mt-2"
              >
                Ask an Alliance Member
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
