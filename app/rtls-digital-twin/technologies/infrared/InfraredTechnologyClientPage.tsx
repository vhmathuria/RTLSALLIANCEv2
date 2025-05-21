"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Hospital, ShoppingBag, Factory, Truck, Building2 } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { articles } from "@/lib/article-data"

export default function InfraredTechnologyClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Get general RTLS articles for related resources since there might not be enough infrared-specific ones
  const relatedArticles = articles.slice(0, 5)

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Infrared (IR) Technology</h1>
          <p className="text-base text-muted-foreground">
            Infrared technology for RTLS utilizes invisible infrared light to determine the location of people and
            assets within indoor environments.
          </p>
        </header>

        {/* Overview and Key Specifications */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                Infrared (IR) technology for Real-Time Location Systems (RTLS) utilizes invisible infrared light to
                determine the location of people and assets within indoor environments. Operating in the electromagnetic
                spectrum between visible light and radio waves (wavelengths from 780 nm to 1 mm), infrared systems
                provide reliable room-level or sub-room positioning with high accuracy in controlled environments.
              </p>
              <p>
                IR-based RTLS solutions are particularly valued for their precision in confined spaces, immunity to
                radio frequency interference, and inherent security due to the line-of-sight nature of infrared light.
                While not as widely deployed as RF-based technologies, infrared systems continue to serve important
                roles in healthcare, secure facilities, and other applications where reliable room-level presence
                detection is critical.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Wavelength:</span>
                  <span>Near-infrared (780 nm - 3 μm)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Range:</span>
                  <span>3-10 meters (typical effective range)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Positioning Accuracy:</span>
                  <span>Room-level or sub-room (0.3-3 meters)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Line of Sight:</span>
                  <span>Required (cannot penetrate walls or solid objects)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Power Consumption:</span>
                  <span>Low to moderate (depends on implementation)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Data Rate:</span>
                  <span>9.6 kbps to 4 Mbps (depending on modulation technique)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How IR Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How Infrared Works for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Active IR Beaconing</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  In this approach, battery-powered IR tags or badges worn by personnel or attached to assets emit
                  unique infrared identification signals. Fixed IR receivers installed in rooms or areas detect these
                  signals and report the presence of specific tags to a central system. This method provides reliable
                  room-level accuracy and is commonly used in healthcare settings.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Passive IR Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Fixed IR transmitters broadcast location codes within defined areas. Wearable badges or tags receive
                  these signals and report their location via a secondary communication channel (typically RF). This
                  approach reduces power consumption in the wearable device and can provide longer battery life.
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
                  <li>Definitive room-level accuracy (IR signals do not pass through walls)</li>
                  <li>Immunity to RF interference and electromagnetic noise</li>
                  <li>Enhanced privacy and security due to physical containment</li>
                  <li>No radio frequency regulatory issues or licensing requirements</li>
                  <li>Reliable performance in RF-dense environments</li>
                  <li>Simple deployment logic aligned with building organization</li>
                  <li>Compatible with sensitive medical equipment and restricted RF areas</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Line of sight requirement between tags and sensors</li>
                  <li>Limited range (typically 3-10 meters)</li>
                  <li>Susceptibility to optical interference (sunlight, certain lighting)</li>
                  <li>Higher infrastructure density requirements (sensors in every room)</li>
                  <li>Limited outdoor applicability</li>
                  <li>Primarily room-level rather than precise coordinate positioning</li>
                  <li>Badge orientation sensitivity in some implementations</li>
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
                    Infrared RTLS provides definitive room-level tracking for patient care and staff efficiency.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In healthcare environments, IR-based RTLS is used to track staff presence in patient rooms, enabling
                    workflow analysis, contact tracing, and hand hygiene compliance monitoring. The technology's
                    immunity to RF interference makes it ideal for use around sensitive medical equipment.
                  </p>
                  <p>
                    Infrared systems provide definitive room-level location data, which is critical for applications
                    like automatic nurse presence recording, patient flow management, and asset tracking within specific
                    rooms or zones.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Staff tracking for workflow optimization</li>
                        <li>Patient flow management</li>
                        <li>Hand hygiene compliance monitoring</li>
                        <li>Contact tracing during disease outbreaks</li>
                        <li>Equipment location within specific rooms</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Increased direct patient care time</li>
                        <li>Reduced response times to patient calls</li>
                        <li>Improved infection control</li>
                        <li>Enhanced staff efficiency</li>
                        <li>Safe for use around medical equipment</li>
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
                    Infrared RTLS enables zone-based tracking for customer service and operations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In retail environments, infrared RTLS can provide zone-based tracking for customer service,
                    security, and operations management. The technology helps track staff presence in different
                    departments and monitor access to high-value merchandise areas.
                  </p>
                  <p>
                    IR systems can alert managers when specific areas are understaffed or notify associates when
                    customers enter fitting rooms or specialized service areas, improving response times and customer
                    satisfaction.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Staff allocation across departments</li>
                        <li>Fitting room management</li>
                        <li>High-value merchandise area monitoring</li>
                        <li>Customer service response time improvement</li>
                        <li>Store layout optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved customer service response</li>
                        <li>Enhanced security for high-value items</li>
                        <li>Optimized staff allocation</li>
                        <li>Better fitting room management</li>
                        <li>Data-driven store layout decisions</li>
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
                    Infrared RTLS provides reliable tracking in RF-challenging industrial environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In manufacturing facilities, infrared RTLS is particularly valuable in areas with high RF
                    interference or where RF emissions must be limited. The technology helps track personnel in
                    specialized work cells, clean rooms, and restricted areas.
                  </p>
                  <p>
                    IR systems can verify worker presence in specific production areas, ensuring proper process sequence
                    and compliance with safety protocols. They also support emergency mustering and evacuation
                    management in industrial settings.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Clean room access monitoring</li>
                        <li>Restricted area security</li>
                        <li>Process sequence verification</li>
                        <li>Safety protocol compliance</li>
                        <li>Emergency mustering and evacuation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reliable operation in RF-noisy environments</li>
                        <li>Enhanced safety compliance</li>
                        <li>Improved process adherence</li>
                        <li>Better emergency response</li>
                        <li>Definitive zone-based tracking</li>
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
                    Infrared RTLS enables zone-based tracking in warehouses and distribution centers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In logistics operations, infrared RTLS can provide zone-based tracking in specific areas where RF
                    coverage is problematic or where definitive room-level presence detection is required. The
                    technology helps monitor personnel in loading docks, cold storage areas, and hazardous material
                    zones.
                  </p>
                  <p>
                    IR systems can verify worker presence in quality control areas, ensure proper protocols in
                    specialized storage zones, and support emergency response in large warehouse facilities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Loading dock management</li>
                        <li>Cold storage monitoring</li>
                        <li>Hazardous material zone compliance</li>
                        <li>Quality control area verification</li>
                        <li>Secure storage access monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Definitive zone presence verification</li>
                        <li>Enhanced safety in hazardous areas</li>
                        <li>Improved protocol compliance</li>
                        <li>Better security for high-value inventory</li>
                        <li>Reliable operation in RF-challenging areas</li>
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
                    Infrared RTLS provides privacy-friendly tracking for security and space management.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Commercial buildings implement infrared RTLS for secure facility access, meeting room utilization
                    tracking, and emergency mustering. The technology's room-level accuracy and privacy-friendly nature
                    make it ideal for workplace applications.
                  </p>
                  <p>
                    IR systems can monitor access to restricted areas, verify meeting room usage patterns, and provide
                    accurate personnel accounting during emergency evacuations. The technology also supports space
                    utilization analysis for workplace optimization.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Secure area access monitoring</li>
                        <li>Meeting room utilization tracking</li>
                        <li>Emergency mustering and evacuation</li>
                        <li>Visitor management</li>
                        <li>Space utilization analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Enhanced security for restricted areas</li>
                        <li>Improved emergency response</li>
                        <li>Better space utilization</li>
                        <li>Privacy-friendly tracking</li>
                        <li>Data-driven workplace design</li>
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
                <CardTitle>Hospital Staff Tracking</CardTitle>
                <CardDescription>Memorial Hospital</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A 350-bed hospital implemented an IR-based RTLS to track staff presence in patient rooms, automate
                  contact tracing, and analyze workflow patterns. The system used ceiling-mounted IR receivers in all
                  patient rooms and key work areas, with staff wearing dual-technology IR/RF badges.
                </p>
                <p>
                  Staff satisfaction scores related to equipment availability increased from 43% to 87% within six
                  months of deployment. The hospital achieved full ROI within 14 months.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Secure Research Facility</CardTitle>
                <CardDescription>Government Research Laboratory</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A government research laboratory deployed an IR-based personnel tracking system to enhance security,
                  ensure compliance with access protocols, and improve emergency response capabilities. The system
                  covered 200+ rooms across multiple security zones.
                </p>
                <p>
                  Security incidents decreased by 65% through real-time monitoring and alerts, while emergency
                  evacuation time improved by 40% with real-time personnel accounting. The system provided 100% accurate
                  verification of personnel presence in classified areas.
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
                <CardTitle className="text-lg">Infrastructure Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>IR receivers/sensors in each room or zone</li>
                  <li>IR tags/badges for tracked assets and personnel</li>
                  <li>Room controllers for data aggregation</li>
                  <li>Network infrastructure (typically Wi-Fi or Ethernet)</li>
                  <li>Server for data processing (on-premises or cloud)</li>
                  <li>Software platform for location management</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Deployment Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Conduct site survey to identify potential IR interference</li>
                  <li>Place sensors strategically for optimal coverage</li>
                  <li>Consider window treatments to block direct sunlight</li>
                  <li>Design badge form factor for proper orientation</li>
                  <li>Implement hybrid IR/RF approach for comprehensive coverage</li>
                  <li>Develop clear battery replacement procedures</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Common Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Optical interference from sunlight and lighting</li>
                  <li>Line of sight obstructions</li>
                  <li>Badge orientation issues</li>
                  <li>Battery management for large deployments</li>
                  <li>Integration with existing systems</li>
                  <li>Coverage gaps in large open spaces</li>
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
                  <th className="border px-4 py-2 text-left font-semibold">Infrared</th>
                  <th className="border px-4 py-2 text-left font-semibold">BLE</th>
                  <th className="border px-4 py-2 text-left font-semibold">Wi-Fi</th>
                  <th className="border px-4 py-2 text-left font-semibold">UWB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Typical Accuracy</td>
                  <td className="border px-4 py-2">Room-level (definitive)</td>
                  <td className="border px-4 py-2">1-3 meters</td>
                  <td className="border px-4 py-2">3-5 meters</td>
                  <td className="border px-4 py-2">10-30 cm</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Range</td>
                  <td className="border px-4 py-2">3-10 meters</td>
                  <td className="border px-4 py-2">10-30 meters</td>
                  <td className="border px-4 py-2">30-50 meters</td>
                  <td className="border px-4 py-2">10-50 meters</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Power Consumption</td>
                  <td className="border px-4 py-2">Low-Medium</td>
                  <td className="border px-4 py-2">Very Low</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Medium</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Infrastructure Cost</td>
                  <td className="border px-4 py-2">Medium-High</td>
                  <td className="border px-4 py-2">Low-Medium</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">High</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Tag Cost</td>
                  <td className="border px-4 py-2">$10-30</td>
                  <td className="border px-4 py-2">$5-15</td>
                  <td className="border px-4 py-2">$10-30</td>
                  <td className="border px-4 py-2">$15-50</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Battery Life</td>
                  <td className="border px-4 py-2">1-3 years</td>
                  <td className="border px-4 py-2">6 months - 5 years</td>
                  <td className="border px-4 py-2">3 months - 2 years</td>
                  <td className="border px-4 py-2">6 months - 3 years</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Line of Sight Required</td>
                  <td className="border px-4 py-2">Yes</td>
                  <td className="border px-4 py-2">No</td>
                  <td className="border px-4 py-2">No</td>
                  <td className="border px-4 py-2">Partial</td>
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
                    <span className="font-medium">Miniaturization:</span> Smaller, more energy-efficient IR components
                    enabling less obtrusive tags and sensors
                  </li>
                  <li>
                    <span className="font-medium">Advanced Optics:</span> Improved IR lenses and detectors expanding
                    coverage areas and reducing infrastructure requirements
                  </li>
                  <li>
                    <span className="font-medium">Multi-Technology Integration:</span> Tighter integration of IR with
                    RF, ultrasound, and other technologies for comprehensive positioning solutions
                  </li>
                  <li>
                    <span className="font-medium">Enhanced Analytics:</span> Advanced software using IR location data to
                    derive deeper insights into workflow and behavior patterns
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
                    <span className="font-medium">Hybrid Solutions:</span> Increasing integration of IR with other
                    technologies like BLE and UWB for comprehensive coverage
                  </li>
                  <li>
                    <span className="font-medium">IoT Convergence:</span> Integration with broader Internet of Things
                    ecosystems for more comprehensive facility management
                  </li>
                  <li>
                    <span className="font-medium">Embedded IR Capabilities:</span> IR sensors built into lighting
                    fixtures, ceiling tiles, and other building elements for less intrusive deployment
                  </li>
                  <li>
                    <span className="font-medium">Privacy-Focused Design:</span> Enhanced security and privacy features
                    to address growing concerns about location tracking
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learn More */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Learn More About Infrared Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
              <ul className="space-y-2">
                {relatedArticles.map((article) => (
                  <li key={article.slug}>
                    <Link href={`/resources/${article.slug}`} className="text-primary hover:underline">
                      {article.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Unbiased Guidance</h3>
              <p className="mb-4">Need help determining if Infrared is the right technology for your RTLS project?</p>
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
