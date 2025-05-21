"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Factory, Hospital, ShoppingBag, Truck } from "lucide-react"
import Link from "next/link"
import { getBLERelatedArticles } from "@/lib/article-data"

export default function BLETechnologyClientPage() {
  // Get BLE-related articles for the related resources section
  const bleRelatedArticles = getBLERelatedArticles().slice(0, 5)

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Bluetooth Low Energy (BLE) Technology</h1>
          <p className="text-base text-muted-foreground">
            Bluetooth Low Energy (BLE) is a wireless technology designed for short-range communication with minimal
            power consumption.
          </p>
        </header>

        {/* Overview and Key Specifications */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                BLE operates in the 2.4 GHz ISM band and is optimized for low power consumption, making it ideal for
                battery-powered devices. It provides a communication range of approximately 10-30 meters in typical
                indoor environments.
              </p>
              <p>
                For RTLS applications, BLE typically achieves 1-3 meter accuracy using signal strength (RSSI)
                measurements, with enhanced accuracy possible through Angle of Arrival (AoA) techniques.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Frequency:</span>
                  <span>2.4 GHz ISM band</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Range:</span>
                  <span>10-30 meters (indoor)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Data Rate:</span>
                  <span>1 Mbps (BLE 4.2), 2 Mbps (BLE 5.0+)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Typical Accuracy:</span>
                  <span>1-3 meters (RSSI), 0.5-1 meter (AoA)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Power Consumption:</span>
                  <span>0.01-0.5 W (transmit)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Battery Life:</span>
                  <span>6 months to 5+ years (depending on beacon type and configuration)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How BLE Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How BLE Works for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">RSSI-Based Positioning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  BLE beacons broadcast signals that are received by gateways or mobile devices. The Received Signal
                  Strength Indicator (RSSI) is measured to estimate the distance between the beacon and receiver. Using
                  multiple receivers, trilateration algorithms determine the beacon's position.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Angle of Arrival (AoA)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  BLE 5.1+ supports Angle of Arrival positioning, where specialized receivers with antenna arrays
                  measure the phase differences of incoming signals to determine the direction of the transmitting
                  beacon, enabling more precise positioning.
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
                  <li>Low power consumption enabling long battery life</li>
                  <li>Widespread compatibility with smartphones and tablets</li>
                  <li>Relatively low infrastructure cost</li>
                  <li>Easy deployment and maintenance</li>
                  <li>Scalable for various environment sizes</li>
                  <li>Support for additional sensor data (temperature, motion, etc.)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Limited accuracy compared to UWB or optical systems</li>
                  <li>Susceptible to signal interference and multipath effects</li>
                  <li>Environmental factors can affect signal propagation</li>
                  <li>Requires regular battery replacement for beacons</li>
                  <li>Update rate limitations compared to wired systems</li>
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
                    BLE technology enables efficient asset tracking and management in healthcare settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In healthcare environments, BLE beacons are attached to mobile medical equipment, enabling staff to
                    quickly locate vital assets like infusion pumps, wheelchairs, and portable monitors. This reduces
                    search time and improves equipment utilization.
                  </p>
                  <p>
                    BLE is also used for patient flow management, staff duress systems, and environmental monitoring.
                    The technology's low power consumption and non-intrusive nature make it ideal for sensitive
                    healthcare settings.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Medical equipment tracking</li>
                        <li>Patient flow optimization</li>
                        <li>Staff workflow analysis</li>
                        <li>Temperature monitoring for medication storage</li>
                        <li>Hand hygiene compliance monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduced equipment search time (typically 60-80%)</li>
                        <li>Improved asset utilization rates</li>
                        <li>Enhanced patient experience</li>
                        <li>Compliance with regulatory requirements</li>
                        <li>Low infrastructure impact during installation</li>
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
                    BLE enables proximity marketing and customer analytics in retail environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Retailers use BLE beacons to enhance customer experiences through proximity marketing, sending
                    targeted promotions to shoppers' smartphones as they move through the store. The technology also
                    provides valuable analytics on customer movement patterns and dwell times.
                  </p>
                  <p>
                    For inventory management, BLE tags help track high-value merchandise and reduce shrinkage. Staff
                    efficiency can be improved by analyzing movement patterns and optimizing workflows.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Proximity marketing and promotions</li>
                        <li>Customer journey analysis</li>
                        <li>High-value inventory tracking</li>
                        <li>Staff efficiency optimization</li>
                        <li>Click-and-collect order management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Increased customer engagement</li>
                        <li>Enhanced shopping experience</li>
                        <li>Improved conversion rates</li>
                        <li>Reduced shrinkage</li>
                        <li>Data-driven store layout optimization</li>
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
                    BLE technology improves operational efficiency in manufacturing environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In manufacturing facilities, BLE beacons track tools, equipment, and work-in-progress items to
                    optimize production workflows. The technology helps prevent bottlenecks and ensures critical tools
                    are available when needed.
                  </p>
                  <p>
                    BLE is also used for worker safety applications, monitoring environmental conditions, and providing
                    location-based work instructions to staff. The system integrates with manufacturing execution
                    systems (MES) to provide real-time visibility.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Tool and equipment tracking</li>
                        <li>Work-in-progress monitoring</li>
                        <li>Worker safety and evacuation management</li>
                        <li>Production line optimization</li>
                        <li>Maintenance team efficiency</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduced production delays</li>
                        <li>Improved tool utilization</li>
                        <li>Enhanced worker safety</li>
                        <li>Streamlined maintenance processes</li>
                        <li>Better production planning</li>
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
                    BLE improves visibility and efficiency in logistics and supply chain operations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Logistics operations use BLE to track assets like pallets, containers, and vehicles within
                    warehouses and distribution centers. The technology provides zone-level location data to optimize
                    picking routes and improve inventory accuracy.
                  </p>
                  <p>
                    BLE beacons also enable condition monitoring for sensitive shipments, tracking temperature,
                    humidity, and shock events. For yard management, BLE helps locate trailers and containers quickly,
                    reducing loading and unloading times.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Warehouse asset tracking</li>
                        <li>Yard management</li>
                        <li>Condition monitoring for shipments</li>
                        <li>Picking route optimization</li>
                        <li>Loading dock management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved inventory accuracy</li>
                        <li>Reduced search times</li>
                        <li>Enhanced shipment visibility</li>
                        <li>Better resource utilization</li>
                        <li>Streamlined loading/unloading processes</li>
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
                  <CardDescription>BLE enables smart building functionality and space optimization.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Commercial buildings implement BLE for space utilization analysis, wayfinding, and occupancy
                    monitoring. The technology helps optimize workspace layouts and improve facility management
                    efficiency.
                  </p>
                  <p>
                    BLE beacons enable indoor navigation for visitors and staff, while also supporting automated
                    check-in processes and meeting room management. The system integrates with building management
                    systems for energy optimization based on occupancy patterns.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Space utilization monitoring</li>
                        <li>Indoor navigation and wayfinding</li>
                        <li>Meeting room management</li>
                        <li>Automated attendance tracking</li>
                        <li>Energy optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved space utilization</li>
                        <li>Enhanced visitor experience</li>
                        <li>Reduced energy consumption</li>
                        <li>Streamlined facility management</li>
                        <li>Data-driven space planning</li>
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
                <CardTitle>Healthcare Equipment Tracking</CardTitle>
                <CardDescription>Memorial Hospital</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Memorial Hospital implemented a BLE-based RTLS to track 2,500 mobile medical devices across their
                  500-bed facility. The system reduced equipment search time by 78% and improved utilization rates by
                  26%, allowing them to reduce new equipment purchases by $320,000 annually.
                </p>
                <p>
                  Staff satisfaction scores related to equipment availability increased from 43% to 87% within six
                  months of deployment. The hospital achieved full ROI within 14 months.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Manufacturing Tool Tracking</CardTitle>
                <CardDescription>Aerospace Components Manufacturer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  An aerospace components manufacturer deployed BLE beacons on 1,200 specialized tools across their
                  180,000 sq ft facility. The system integrated with their MES to provide real-time tool location and
                  availability status.
                </p>
                <p>
                  Production delays due to missing tools decreased by 64%, while tool calibration compliance improved to
                  99.8%. The manufacturer estimated annual savings of $450,000 through improved productivity and reduced
                  tool replacement costs.
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
                  <li>BLE beacons/tags for tracked assets</li>
                  <li>BLE gateways or receivers</li>
                  <li>Network infrastructure (typically Wi-Fi or Ethernet)</li>
                  <li>Server for data processing (on-premises or cloud)</li>
                  <li>Software platform for location management</li>
                  <li>Integration middleware for existing systems</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Deployment Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Conduct RF site survey before installation</li>
                  <li>Place gateways strategically for optimal coverage</li>
                  <li>Configure beacon transmission intervals based on use case</li>
                  <li>Implement proper security measures for BLE communications</li>
                  <li>Establish battery replacement procedures</li>
                  <li>Develop a calibration schedule to maintain accuracy</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Common Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Signal interference in dense environments</li>
                  <li>Accuracy limitations in complex layouts</li>
                  <li>Battery management for large beacon deployments</li>
                  <li>Integration with legacy systems</li>
                  <li>User adoption and training</li>
                  <li>Maintaining system performance over time</li>
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
                  <th className="border px-4 py-2 text-left font-semibold">BLE</th>
                  <th className="border px-4 py-2 text-left font-semibold">UWB</th>
                  <th className="border px-4 py-2 text-left font-semibold">Wi-Fi</th>
                  <th className="border px-4 py-2 text-left font-semibold">RFID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Typical Accuracy</td>
                  <td className="border px-4 py-2">1-3 meters</td>
                  <td className="border px-4 py-2">10-30 cm</td>
                  <td className="border px-4 py-2">3-5 meters</td>
                  <td className="border px-4 py-2">Proximity to reader</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Range</td>
                  <td className="border px-4 py-2">10-30 meters</td>
                  <td className="border px-4 py-2">10-50 meters</td>
                  <td className="border px-4 py-2">30-50 meters</td>
                  <td className="border px-4 py-2">1-10 meters</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Power Consumption</td>
                  <td className="border px-4 py-2">Very Low</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Passive/Low</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Infrastructure Cost</td>
                  <td className="border px-4 py-2">Low-Medium</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Medium</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Tag Cost</td>
                  <td className="border px-4 py-2">$5-15</td>
                  <td className="border px-4 py-2">$15-50</td>
                  <td className="border px-4 py-2">$10-30</td>
                  <td className="border px-4 py-2">$0.10-20</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Battery Life</td>
                  <td className="border px-4 py-2">6 months - 5 years</td>
                  <td className="border px-4 py-2">6 months - 3 years</td>
                  <td className="border px-4 py-2">3 months - 2 years</td>
                  <td className="border px-4 py-2">Passive/1-5 years</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Smartphone Compatible</td>
                  <td className="border px-4 py-2">Yes</td>
                  <td className="border px-4 py-2">Limited</td>
                  <td className="border px-4 py-2">Yes</td>
                  <td className="border px-4 py-2">Limited (NFC)</td>
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
                    <span className="font-medium">BLE Direction Finding:</span> Wider adoption of Angle of Arrival and
                    Angle of Departure techniques for sub-meter accuracy
                  </li>
                  <li>
                    <span className="font-medium">Energy Harvesting:</span> Development of beacons that can operate
                    without batteries by harvesting energy from ambient sources
                  </li>
                  <li>
                    <span className="font-medium">Mesh Networking:</span> Enhanced BLE mesh capabilities for improved
                    coverage and reliability in complex environments
                  </li>
                  <li>
                    <span className="font-medium">AI Integration:</span> Machine learning algorithms to improve
                    positioning accuracy and predict movement patterns
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
                    <span className="font-medium">Hybrid Solutions:</span> Increasing integration of BLE with other
                    technologies like UWB and Wi-Fi for comprehensive coverage
                  </li>
                  <li>
                    <span className="font-medium">Industry Standardization:</span> Development of more robust standards
                    for interoperability between different BLE RTLS systems
                  </li>
                  <li>
                    <span className="font-medium">Miniaturization:</span> Smaller, more durable beacons for new use
                    cases and applications
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

        {/* Learn More - Updated with real resource links from article-data.ts and removed Card component */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Learn More About BLE Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
              <ul className="space-y-2">
                {bleRelatedArticles.map((article) => (
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
              <p className="mb-4">Need help determining if BLE is the right technology for your RTLS project?</p>
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
