"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Factory, Hospital, ShoppingBag, Truck } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { FAQSection } from "@/components/ui/faq-section"
import { FAQSchema } from "@/components/seo/faq-schema"
import { technologyFAQs } from "@/lib/faq-data"

export default function LiDARTechnologyClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const lidarFAQs = technologyFAQs.lidar || []

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">LiDAR Technology</h1>
          <p className="text-base text-muted-foreground">
            Light Detection and Ranging (LiDAR) is an advanced remote sensing technology that uses laser light to
            measure distances and generate precise 3D information about the environment.
          </p>
        </header>

        {/* Overview and Key Specifications */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                LiDAR systems work by emitting laser pulses and measuring the time it takes for the light to return
                after hitting an object. This time-of-flight measurement allows for extremely accurate distance
                calculations, creating dense point clouds that represent the physical environment with millimeter-level
                precision.
              </p>
              <p>
                For RTLS applications, LiDAR provides exceptional accuracy and can track objects without requiring tags
                or beacons, making it ideal for applications where non-intrusive tracking is essential or where high
                precision is required.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Range:</span>
                  <span>0.1-300 meters (depending on system type)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Accuracy:</span>
                  <span>1-30 millimeters</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Scan Rate:</span>
                  <span>10-300 Hz</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Point Density:</span>
                  <span>100,000-2,000,000 points per second</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Field of View:</span>
                  <span>30°-360° horizontal, 20°-120° vertical</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Wavelength:</span>
                  <span>905nm (near-infrared) or 1550nm (infrared)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How LiDAR Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How LiDAR Works for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Infrastructure-Based LiDAR</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  LiDAR sensors are mounted in fixed positions throughout a facility, scanning the environment to detect
                  and track objects and people. These systems create a network of overlapping coverage areas that can
                  monitor large spaces with high precision. The LiDAR sensors connect to a central processing system
                  that combines their data to provide comprehensive tracking.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Mobile LiDAR</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  LiDAR sensors are mounted on mobile platforms such as robots, vehicles, or handheld devices. These
                  systems scan the environment as they move, building maps and determining their position within those
                  maps. Mobile LiDAR often combines with other technologies like inertial measurement units (IMUs) and
                  wheel encoders for more robust positioning.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advantages & Limitations - Now in separate boxes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Advantages & Limitations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-green-600">Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Exceptional accuracy and precision (millimeter to centimeter level)</li>
                  <li>Works in varying lighting conditions, including complete darkness</li>
                  <li>Provides rich 3D spatial information about the environment</li>
                  <li>No need for tags or beacons on tracked objects (non-intrusive tracking)</li>
                  <li>Can simultaneously track multiple objects without degradation in performance</li>
                  <li>Immune to radio frequency interference</li>
                  <li>Capable of detecting object size, shape, and orientation</li>
                  <li>Privacy-preserving compared to camera-based systems (no identifiable images)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Higher cost compared to many other RTLS technologies</li>
                  <li>Significant processing power required for real-time operation</li>
                  <li>Limited ability to identify specific individuals or assets without additional markers</li>
                  <li>Performance can be affected by environmental factors like dust, fog, or smoke</li>
                  <li>Potential occlusion issues in crowded or complex environments</li>
                  <li>Higher power consumption compared to passive technologies</li>
                  <li>Some systems have safety considerations due to laser emissions</li>
                  <li>Complex installation and calibration requirements</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
          <Tabs defaultValue="healthcare" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto mb-4">
              <TabsTrigger value="healthcare" className="flex flex-col py-2 h-auto">
                <Hospital className="h-5 w-5 mb-1" />
                Healthcare
              </TabsTrigger>
              <TabsTrigger value="retail" className="flex flex-col py-2 h-auto">
                <ShoppingBag className="h-5 w-5 mb-1" />
                Retail
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
            <TabsContent value="healthcare" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Healthcare Applications</CardTitle>
                  <CardDescription>
                    LiDAR technology enables advanced patient monitoring and facility management in healthcare settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In healthcare environments, LiDAR systems provide non-intrusive patient monitoring, detecting falls
                    and unusual behaviors without requiring patients to wear devices. The technology also enables
                    accurate people counting and flow analysis to optimize facility usage and improve infection control
                    measures.
                  </p>
                  <p>
                    LiDAR's ability to work in low-light conditions makes it ideal for monitoring patients at night
                    without disturbing sleep. The privacy-preserving nature of LiDAR (compared to cameras) addresses
                    patient confidentiality concerns while still providing detailed movement data.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Fall detection and prevention</li>
                        <li>Patient activity monitoring</li>
                        <li>Facility occupancy management</li>
                        <li>Social distancing enforcement</li>
                        <li>Automated door control for isolation rooms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Non-contact monitoring for infection control</li>
                        <li>Privacy-preserving patient observation</li>
                        <li>Reduced false alarms compared to other systems</li>
                        <li>24/7 monitoring capability</li>
                        <li>Integration with nurse call systems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="retail" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Retail Applications</CardTitle>
                  <CardDescription>
                    LiDAR enables advanced customer analytics and store optimization in retail environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Retailers use LiDAR to analyze customer movement patterns, dwell times, and interactions with
                    products without capturing personally identifiable information. This provides valuable insights for
                    store layout optimization and product placement while respecting customer privacy.
                  </p>
                  <p>
                    LiDAR systems also enable accurate people counting, queue management, and heat mapping of store
                    traffic. The technology can integrate with digital signage systems to deliver targeted content based
                    on customer proximity and movement patterns.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Customer flow analysis</li>
                        <li>Queue management</li>
                        <li>Store layout optimization</li>
                        <li>Conversion rate analysis</li>
                        <li>Interactive digital signage</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Privacy-compliant customer analytics</li>
                        <li>Accurate traffic counting &gt;98%</li>
                        <li>Detailed interaction analysis</li>
                        <li>Works in varying lighting conditions</li>
                        <li>Integration with retail analytics platforms</li>
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
                    LiDAR technology enhances safety and efficiency in manufacturing environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In manufacturing facilities, LiDAR systems monitor worker safety zones around dangerous machinery,
                    automatically slowing or stopping equipment when safety boundaries are breached. The technology also
                    enables precise tracking of materials and work-in-progress items throughout the production process.
                  </p>
                  <p>
                    LiDAR's ability to create detailed 3D maps of facilities supports autonomous mobile robot (AMR)
                    navigation and forklift safety systems. The technology can also detect quality issues in production
                    by identifying deviations from expected shapes and dimensions.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Safety zone monitoring</li>
                        <li>Autonomous vehicle navigation</li>
                        <li>Material flow tracking</li>
                        <li>Quality control</li>
                        <li>Facility mapping and digital twin creation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Enhanced worker safety</li>
                        <li>Reduced accidents and near-misses</li>
                        <li>Improved production efficiency</li>
                        <li>Support for automation initiatives</li>
                        <li>Detailed process analytics</li>
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
                    LiDAR improves warehouse operations and autonomous vehicle navigation in logistics.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Logistics operations use LiDAR for autonomous mobile robot (AMR) and automated guided vehicle (AGV)
                    navigation in warehouses and distribution centers. The technology enables precise mapping of
                    facilities and obstacle detection for safe and efficient robot operation.
                  </p>
                  <p>
                    LiDAR systems also support inventory management by measuring storage space utilization and
                    identifying available slots. For loading dock operations, LiDAR helps optimize trailer positioning
                    and monitors loading/unloading activities to improve throughput.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>AMR/AGV navigation</li>
                        <li>Warehouse space optimization</li>
                        <li>Pallet and package dimensioning</li>
                        <li>Loading dock management</li>
                        <li>Inventory slot management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved warehouse utilization</li>
                        <li>Enhanced automation capabilities</li>
                        <li>Reduced vehicle accidents</li>
                        <li>Optimized loading/unloading processes</li>
                        <li>Support for warehouse digital twins</li>
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
                  <CardDescription>LiDAR enables smart building functionality and space optimization.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Commercial buildings implement LiDAR for occupancy monitoring, space utilization analysis, and
                    security applications. The technology provides accurate people counting and movement tracking
                    without capturing personally identifiable information, addressing privacy concerns.
                  </p>
                  <p>
                    LiDAR systems also support building automation by triggering lighting, HVAC, and access control
                    systems based on occupancy patterns. For security applications, LiDAR can detect unauthorized access
                    to restricted areas and unusual movement patterns.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Occupancy monitoring</li>
                        <li>Space utilization analysis</li>
                        <li>Building automation</li>
                        <li>Security and access control</li>
                        <li>Social distancing monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Privacy-compliant people tracking</li>
                        <li>Energy optimization</li>
                        <li>Enhanced security</li>
                        <li>Data-driven space planning</li>
                        <li>Support for smart building initiatives</li>
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
                <CardTitle>Warehouse Automation</CardTitle>
                <CardDescription>Global E-commerce Fulfillment Center</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A global e-commerce company implemented LiDAR-based navigation for 120 autonomous mobile robots (AMRs)
                  in their 500,000 sq ft fulfillment center. The system enabled the robots to navigate safely among
                  human workers while optimizing picking routes.
                </p>
                <p>
                  The implementation reduced order fulfillment time by 32% and increased picking accuracy to 99.8%. The
                  company reported a 28% reduction in operating costs and achieved ROI within 18 months despite the
                  significant initial investment.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Manufacturing Safety</CardTitle>
                <CardDescription>Automotive Assembly Plant</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  An automotive assembly plant installed 45 LiDAR sensors to create safety zones around robotic
                  equipment and high-risk areas. The system automatically slowed or stopped machinery when workers
                  entered designated safety zones.
                </p>
                <p>
                  After implementation, the plant reported a 78% reduction in safety incidents and a 23% decrease in
                  production stoppages due to safety concerns. Worker confidence improved significantly, and the
                  solution provided comprehensive compliance documentation for safety regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Considerations - Now in separate boxes */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Implementation Considerations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Infrastructure Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>LiDAR sensors (2D or 3D based on application)</li>
                  <li>Mounting hardware and power supply</li>
                  <li>Network infrastructure (typically Ethernet)</li>
                  <li>High-performance computing hardware</li>
                  <li>Data storage for point cloud information</li>
                  <li>Software platform for processing and analytics</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Deployment Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Conduct thorough site survey before installation</li>
                  <li>Position sensors to minimize occlusion issues</li>
                  <li>Ensure proper calibration of multi-sensor systems</li>
                  <li>Implement appropriate data filtering algorithms</li>
                  <li>Consider environmental factors (dust, moisture, etc.)</li>
                  <li>Plan for regular maintenance and cleaning</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Common Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>High initial cost for quality sensors</li>
                  <li>Processing large volumes of point cloud data</li>
                  <li>Occlusion in crowded or complex environments</li>
                  <li>Integration with existing systems</li>
                  <li>Maintaining performance in harsh environments</li>
                  <li>Balancing resolution, range, and update rate</li>
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
                  <th className="border px-4 py-2 text-left font-semibold">LiDAR</th>
                  <th className="border px-4 py-2 text-left font-semibold">Camera Vision</th>
                  <th className="border px-4 py-2 text-left font-semibold">UWB</th>
                  <th className="border px-4 py-2 text-left font-semibold">BLE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Typical Accuracy</td>
                  <td className="border px-4 py-2">1-30mm</td>
                  <td className="border px-4 py-2">5-50cm</td>
                  <td className="border px-4 py-2">10-30cm</td>
                  <td className="border px-4 py-2">1-3m</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Range</td>
                  <td className="border px-4 py-2">0.1-300m</td>
                  <td className="border px-4 py-2">0.5-50m</td>
                  <td className="border px-4 py-2">10-50m</td>
                  <td className="border px-4 py-2">10-30m</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Tagging Required</td>
                  <td className="border px-4 py-2">No</td>
                  <td className="border px-4 py-2">No</td>
                  <td className="border px-4 py-2">Yes</td>
                  <td className="border px-4 py-2">Yes</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Privacy Concerns</td>
                  <td className="border px-4 py-2">Low</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Low</td>
                  <td className="border px-4 py-2">Low</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Infrastructure Cost</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Medium-High</td>
                  <td className="border px-4 py-2">Low-Medium</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Power Consumption</td>
                  <td className="border px-4 py-2">Medium-High</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Very Low</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Environmental Sensitivity</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Low</td>
                  <td className="border px-4 py-2">Medium</td>
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
                    <span className="font-medium">Solid-State LiDAR:</span> Continued development of more reliable,
                    compact, and affordable solid-state LiDAR systems without moving parts
                  </li>
                  <li>
                    <span className="font-medium">Miniaturization:</span> Smaller, more energy-efficient LiDAR sensors
                    enabling new applications and form factors
                  </li>
                  <li>
                    <span className="font-medium">Edge Computing:</span> More processing at the sensor level for reduced
                    latency and bandwidth requirements
                  </li>
                  <li>
                    <span className="font-medium">4D LiDAR:</span> Adding velocity measurement as a fourth dimension for
                    better motion tracking and prediction
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
                    <span className="font-medium">Cost Reduction:</span> Decreasing sensor costs making LiDAR more
                    accessible for a wider range of applications
                  </li>
                  <li>
                    <span className="font-medium">AI Integration:</span> Advanced machine learning algorithms for
                    improved object classification and behavior prediction
                  </li>
                  <li>
                    <span className="font-medium">Sensor Fusion:</span> Combining LiDAR with cameras, radar, and other
                    sensors for more robust tracking solutions
                  </li>
                  <li>
                    <span className="font-medium">Standardization:</span> Development of industry standards for LiDAR
                    data formats and processing pipelines
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learn More - Updated with real resource links from article-data.ts */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Learn More About LiDAR Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/resources/rtls-digital-twins-synchronizing-spatial-operational-data"
                    className="text-primary hover:underline"
                  >
                    RTLS & Digital Twins: Synchronizing Spatial and Operational Data
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/enterprise-rtls-step-by-step-implementation-guide"
                    className="text-primary hover:underline"
                  >
                    Enterprise RTLS: Step-by-Step Implementation Guide
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/5-rtls-trends-2025-ai-5g-nr-tag-free-tracking"
                    className="text-primary hover:underline"
                  >
                    5 RTLS Trends 2025: AI, 5G NR & Tag-free Tracking
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
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Unbiased Guidance</h3>
              <p className="mb-4">Need help determining if LiDAR is the right technology for your RTLS project?</p>
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

        {/* FAQ Section */}
        {lidarFAQs.length > 0 && (
          <section className="mt-16 mb-12">
            <div className="max-w-3xl mx-auto bg-gray-50 rounded-lg p-6">
              <h2 className="text-2xl font-semibold text-center mb-6">
                Frequently Asked Questions About LiDAR Technology
              </h2>
              <FAQSection faqs={lidarFAQs} sectionId="lidar-faqs" showTitle={false} />
            </div>
            <FAQSchema faqs={lidarFAQs} pageId="lidar-technology" />
          </section>
        )}
      </article>
    </div>
  )
}
