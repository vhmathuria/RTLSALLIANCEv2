"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Factory, Hospital, ShoppingBag, Truck } from "lucide-react"
import Link from "next/link"
import { getTechnologyRelatedArticles } from "@/lib/article-data"

export default function WiFiTechnologyClientPage() {
  // Get WiFi-related articles for the related resources section
  const wifiRelatedArticles = getTechnologyRelatedArticles("wifi").slice(0, 5)

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Wi-Fi Technology for RTLS</h1>
          <p className="text-base text-muted-foreground">
            Wi-Fi based RTLS leverages existing wireless network infrastructure to provide cost-effective indoor
            positioning with 3-5 meter accuracy.
          </p>
        </header>

        {/* Overview and Key Specifications */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                Wi-Fi RTLS utilizes standard wireless access points and Wi-Fi-enabled devices to determine location
                through signal strength measurements, fingerprinting, or round-trip time calculations. It offers a
                practical solution for environments with existing Wi-Fi infrastructure.
              </p>
              <p>
                For RTLS applications, Wi-Fi typically achieves 3-5 meter accuracy in real-world environments, making it
                suitable for zone-level tracking and presence detection.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Frequency:</span>
                  <span>2.4 GHz and 5 GHz bands</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Range:</span>
                  <span>30-50 meters (indoor)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Data Rate:</span>
                  <span>Up to 9.6 Gbps (Wi-Fi 6)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Typical Accuracy:</span>
                  <span>3-5 meters (RSSI), 1-2 meters (RTT)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Power Consumption:</span>
                  <span>Medium to high</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Battery Life:</span>
                  <span>3 months to 2 years (depending on tag type)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How Wi-Fi Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How Wi-Fi Works for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">RSSI-Based Positioning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Wi-Fi devices measure the Received Signal Strength Indicator (RSSI) from multiple access points. Using
                  signal propagation models or fingerprinting techniques, the system estimates the device's position.
                  This approach leverages existing Wi-Fi infrastructure but is susceptible to environmental changes.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Wi-Fi RTT (802.11mc/FTM)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Wi-Fi Round-Trip Time (RTT), also known as Fine Time Measurement (FTM), measures the time it takes for
                  a signal to travel from a device to an access point and back. This time-based approach provides better
                  accuracy than RSSI methods but requires compatible hardware supporting the 802.11mc protocol.
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
                  <li>Leverages existing Wi-Fi infrastructure</li>
                  <li>Lower deployment cost compared to dedicated RTLS</li>
                  <li>Wide coverage area</li>
                  <li>Compatible with standard Wi-Fi devices</li>
                  <li>Supports both asset tracking and people tracking</li>
                  <li>Dual-purpose infrastructure (data + location)</li>
                  <li>Mature technology with widespread adoption</li>
                  <li>Continuous improvement with new Wi-Fi standards</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Lower accuracy compared to UWB or BLE AoA</li>
                  <li>Susceptible to environmental changes</li>
                  <li>Higher power consumption for mobile devices</li>
                  <li>Signal interference in crowded Wi-Fi environments</li>
                  <li>Requires multiple access points for reliable positioning</li>
                  <li>Fingerprinting requires regular maintenance</li>
                  <li>Limited update rate compared to dedicated RTLS</li>
                  <li>Accuracy degrades in complex environments</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
          <Tabs defaultValue="commercial" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto mb-4">
              <TabsTrigger value="commercial" className="flex flex-col py-2 h-auto">
                <Building2 className="h-5 w-5 mb-1" />
                Commercial
              </TabsTrigger>
              <TabsTrigger value="healthcare" className="flex flex-col py-2 h-auto">
                <Hospital className="h-5 w-5 mb-1" />
                Healthcare
              </TabsTrigger>
              <TabsTrigger value="retail" className="flex flex-col py-2 h-auto">
                <ShoppingBag className="h-5 w-5 mb-1" />
                Retail
              </TabsTrigger>
              <TabsTrigger value="logistics" className="flex flex-col py-2 h-auto">
                <Truck className="h-5 w-5 mb-1" />
                Logistics
              </TabsTrigger>
              <TabsTrigger value="manufacturing" className="flex flex-col py-2 h-auto">
                <Factory className="h-5 w-5 mb-1" />
                Manufacturing
              </TabsTrigger>
            </TabsList>
            <TabsContent value="commercial" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Commercial Building Applications</CardTitle>
                  <CardDescription>
                    Wi-Fi RTLS enables space utilization analysis and visitor management in commercial buildings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Commercial buildings leverage Wi-Fi RTLS for space utilization analysis, visitor wayfinding, and
                    employee hot-desking solutions. The technology provides valuable insights into how spaces are used,
                    helping optimize real estate investments.
                  </p>
                  <p>
                    Wi-Fi positioning also supports building automation systems, adjusting lighting, HVAC, and security
                    based on occupancy patterns detected through the wireless network.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Space utilization analysis</li>
                        <li>Visitor wayfinding</li>
                        <li>Hot-desking management</li>
                        <li>Meeting room utilization</li>
                        <li>Occupancy-based building automation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Optimized space utilization</li>
                        <li>Improved visitor experience</li>
                        <li>Enhanced workplace efficiency</li>
                        <li>Reduced energy consumption</li>
                        <li>Better facility management</li>
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
                    Wi-Fi RTLS supports asset tracking and workflow optimization in healthcare facilities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Healthcare facilities use Wi-Fi RTLS to track mobile equipment, monitor patient flow, and analyze
                    staff workflows. The technology leverages existing wireless infrastructure to provide zone-level
                    location data.
                  </p>
                  <p>
                    Wi-Fi positioning also supports patient wayfinding applications and visitor management systems,
                    improving the overall hospital experience while providing valuable operational data.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Mobile equipment tracking</li>
                        <li>Patient flow analysis</li>
                        <li>Staff workflow optimization</li>
                        <li>Visitor wayfinding</li>
                        <li>Environmental monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved equipment utilization</li>
                        <li>Enhanced patient experience</li>
                        <li>Optimized staff workflows</li>
                        <li>Better resource allocation</li>
                        <li>Leverages existing infrastructure</li>
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
                    Wi-Fi RTLS provides customer analytics and marketing insights in retail environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Retailers use Wi-Fi positioning to analyze customer movement patterns, dwell times, and visit
                    frequencies. This data helps optimize store layouts, staffing, and promotional placements.
                  </p>
                  <p>
                    Wi-Fi RTLS also supports proximity marketing applications, delivering targeted promotions to
                    customers based on their location within the store, and provides analytics on customer engagement
                    with different departments.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Customer journey analysis</li>
                        <li>Dwell time measurement</li>
                        <li>Department conversion rates</li>
                        <li>Proximity marketing</li>
                        <li>Staff allocation optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Enhanced customer insights</li>
                        <li>Improved store layout</li>
                        <li>Optimized staffing levels</li>
                        <li>Increased promotional effectiveness</li>
                        <li>Better inventory placement</li>
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
                    Wi-Fi RTLS enables asset tracking and workflow optimization in warehouses and distribution centers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Logistics operations use Wi-Fi positioning to track assets, vehicles, and personnel within
                    warehouses and distribution centers. The technology provides zone-level location data to optimize
                    workflows and resource allocation.
                  </p>
                  <p>
                    Wi-Fi RTLS also supports yard management applications, tracking the location of trailers and
                    containers in outdoor areas covered by the wireless network.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Forklift and vehicle tracking</li>
                        <li>Zone-based asset location</li>
                        <li>Worker productivity analysis</li>
                        <li>Yard management</li>
                        <li>Workflow optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved operational efficiency</li>
                        <li>Enhanced asset utilization</li>
                        <li>Reduced search times</li>
                        <li>Better resource allocation</li>
                        <li>Leverages existing infrastructure</li>
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
                    Wi-Fi RTLS supports workflow analysis and asset tracking in manufacturing environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Manufacturing facilities use Wi-Fi positioning to track mobile equipment, monitor work-in-progress
                    items, and analyze production workflows. The technology provides valuable insights into process
                    efficiency and bottlenecks.
                  </p>
                  <p>
                    Wi-Fi RTLS also supports worker safety applications, monitoring access to restricted areas and
                    providing location data for emergency response situations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Mobile equipment tracking</li>
                        <li>Work-in-progress monitoring</li>
                        <li>Production workflow analysis</li>
                        <li>Worker safety applications</li>
                        <li>Material flow optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved production efficiency</li>
                        <li>Enhanced equipment utilization</li>
                        <li>Better process visibility</li>
                        <li>Increased worker safety</li>
                        <li>Leverages existing infrastructure</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        {/* Mini Case Studies */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Mini Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle>University Campus Navigation</CardTitle>
                <CardDescription>Large Public University</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A large public university with over 50,000 students implemented a Wi-Fi-based indoor positioning
                  system across their 200-acre campus. The system leveraged existing wireless infrastructure to provide
                  wayfinding services through a mobile app.
                </p>
                <p>
                  The implementation improved the student experience, particularly for new students and visitors, while
                  providing valuable data on space utilization that helped optimize classroom scheduling and identify
                  underutilized facilities. The university reported a 35% reduction in late arrivals to classes.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Hospital Equipment Tracking</CardTitle>
                <CardDescription>Regional Medical Center</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A 450-bed regional medical center implemented Wi-Fi RTLS to track 3,000 mobile medical devices across
                  their facility. The system utilized the hospital's existing wireless network infrastructure,
                  supplemented with additional access points for better coverage.
                </p>
                <p>
                  The implementation reduced equipment search time by 65% and improved utilization rates by 22%. The
                  hospital achieved ROI within 18 months through reduced equipment purchases and improved staff
                  productivity. Nurses saved an average of 30 minutes per shift previously spent searching for
                  equipment.
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
                  <li>Wi-Fi access points (typically 1 per 1,000-2,000 sq ft)</li>
                  <li>Wi-Fi tags for non-Wi-Fi assets</li>
                  <li>Network infrastructure</li>
                  <li>Location engine software</li>
                  <li>Application platform</li>
                  <li>Optional: calibration tools for fingerprinting</li>
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
                  <li>Optimize access point placement for location</li>
                  <li>Create and maintain fingerprinting database</li>
                  <li>Implement proper security measures</li>
                  <li>Balance location accuracy with network performance</li>
                  <li>Regularly update calibration as environment changes</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Common Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Environmental changes affecting signal propagation</li>
                  <li>Interference from other Wi-Fi networks</li>
                  <li>Balancing network performance with location needs</li>
                  <li>Power consumption for mobile devices</li>
                  <li>Maintaining fingerprinting database</li>
                  <li>Accuracy limitations compared to dedicated RTLS</li>
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
                  <th className="border px-4 py-2 text-left font-semibold">Wi-Fi</th>
                  <th className="border px-4 py-2 text-left font-semibold">BLE</th>
                  <th className="border px-4 py-2 text-left font-semibold">UWB</th>
                  <th className="border px-4 py-2 text-left font-semibold">RFID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Typical Accuracy</td>
                  <td className="border px-4 py-2">3-5 meters (RSSI), 1-2 meters (RTT)</td>
                  <td className="border px-4 py-2">1-3 meters</td>
                  <td className="border px-4 py-2">10-30 cm</td>
                  <td className="border px-4 py-2">Proximity to reader</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Range</td>
                  <td className="border px-4 py-2">30-50 meters</td>
                  <td className="border px-4 py-2">10-30 meters</td>
                  <td className="border px-4 py-2">10-50 meters</td>
                  <td className="border px-4 py-2">1-10 meters</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Power Consumption</td>
                  <td className="border px-4 py-2">Medium-High</td>
                  <td className="border px-4 py-2">Very Low</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Passive/Low</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Infrastructure Cost</td>
                  <td className="border px-4 py-2">Low (if existing)</td>
                  <td className="border px-4 py-2">Low-Medium</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Medium</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Tag Cost</td>
                  <td className="border px-4 py-2">$10-30</td>
                  <td className="border px-4 py-2">$5-15</td>
                  <td className="border px-4 py-2">$15-50</td>
                  <td className="border px-4 py-2">$0.10-20</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Battery Life</td>
                  <td className="border px-4 py-2">3 months - 2 years</td>
                  <td className="border px-4 py-2">6 months - 5 years</td>
                  <td className="border px-4 py-2">6 months - 3 years</td>
                  <td className="border px-4 py-2">Passive/1-5 years</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Smartphone Compatible</td>
                  <td className="border px-4 py-2">Yes</td>
                  <td className="border px-4 py-2">Yes</td>
                  <td className="border px-4 py-2">Limited</td>
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
                    <span className="font-medium">Wi-Fi 6E and Wi-Fi 7:</span> Expanded spectrum and higher bandwidth
                    improving positioning capabilities
                  </li>
                  <li>
                    <span className="font-medium">Enhanced RTT Support:</span> Wider adoption of 802.11mc/FTM for
                    improved accuracy
                  </li>
                  <li>
                    <span className="font-medium">AI-Enhanced Positioning:</span> Machine learning algorithms to improve
                    accuracy and adapt to environmental changes
                  </li>
                  <li>
                    <span className="font-medium">Sensor Fusion:</span> Integration with other sensors (IMU, BLE) for
                    improved accuracy and context awareness
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
                    <span className="font-medium">Integrated Solutions:</span> Wi-Fi vendors incorporating location
                    capabilities as standard features
                  </li>
                  <li>
                    <span className="font-medium">Hybrid Systems:</span> Increasing integration of Wi-Fi with other
                    technologies like BLE for comprehensive coverage
                  </li>
                  <li>
                    <span className="font-medium">Cloud-Based Processing:</span> Shift toward cloud processing of
                    location data for improved scalability
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
          <h2 className="text-2xl font-semibold mb-6">Learn More About Wi-Fi Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
              <ul className="space-y-2">
                {wifiRelatedArticles.length > 0 ? (
                  wifiRelatedArticles.map((article) => (
                    <li key={article.slug}>
                      <Link href={`/resources/${article.slug}`} className="text-primary hover:underline">
                        {article.title}
                      </Link>
                    </li>
                  ))
                ) : (
                  <>
                    <li>
                      <Link
                        href="/resources/wifi-positioning-rssi-rtt-fingerprinting-explained"
                        className="text-primary hover:underline"
                      >
                        Wi-Fi Positioning: RSSI, RTT & Fingerprinting Explained
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/wifi-vs-ble-rtls-technology-comparison"
                        className="text-primary hover:underline"
                      >
                        Wi-Fi vs BLE: RTLS Technology Comparison
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/resources/wifi-rtt-vs-ble-best-indoor-navigation"
                        className="text-primary hover:underline"
                      >
                        Wi-Fi RTT vs BLE: Best Choice for Indoor Navigation
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Unbiased Guidance</h3>
              <p className="mb-4">Need help determining if Wi-Fi is the right technology for your RTLS project?</p>
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
