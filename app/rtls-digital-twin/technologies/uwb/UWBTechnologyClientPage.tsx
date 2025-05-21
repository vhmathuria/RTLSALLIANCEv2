"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Factory, Hospital, ShoppingBag, Truck } from "lucide-react"
import Link from "next/link"
import { getUWBRelatedArticles } from "@/lib/article-data"
import { FAQSection } from "@/components/ui/faq-section"
import { FAQSchema } from "@/components/seo/faq-schema"
import { technologyFAQs } from "@/lib/faq-data"

export default function UWBTechnologyClientPage() {
  // Get UWB-related articles for the related resources section
  const uwbRelatedArticles = getUWBRelatedArticles().slice(0, 5)
  const uwbFAQs = technologyFAQs.uwb || []

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Ultra-Wideband (UWB) Technology</h1>
          <p className="text-base text-muted-foreground">
            Ultra-Wideband (UWB) is a high-precision radio technology that enables centimeter-level location accuracy
            for real-time tracking.
          </p>
        </header>

        {/* Overview and Key Specifications */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                UWB operates by transmitting ultra-short pulses across a wide spectrum of frequencies, typically between
                3.1 and 10.6 GHz. This wide bandwidth allows for precise time-of-flight measurements, enabling
                exceptional positioning accuracy.
              </p>
              <p>
                For RTLS applications, UWB typically achieves 10-30 centimeter accuracy in real-world environments,
                making it the technology of choice for high-precision tracking requirements.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Frequency:</span>
                  <span>3.1-10.6 GHz</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Range:</span>
                  <span>10-50 meters (indoor)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Data Rate:</span>
                  <span>6.8 Mbps to 27.2 Mbps</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Typical Accuracy:</span>
                  <span>10-30 centimeters</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Power Consumption:</span>
                  <span>100-500 mW (transmit)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Battery Life:</span>
                  <span>6 months to 3 years (depending on tag type and configuration)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How UWB Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How UWB Works for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Time Difference of Arrival (TDoA)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  In TDoA systems, UWB tags transmit signals that are received by multiple anchors. The system
                  calculates the time differences between signal arrivals at different anchors to determine the tag's
                  position through multilateration. This approach requires precise time synchronization between anchors
                  but allows for longer battery life in tags.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Two-Way Ranging (TWR)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  TWR involves a direct exchange of signals between the tag and each anchor, measuring the round-trip
                  time to calculate distance. This method doesn't require time synchronization between anchors but
                  results in higher power consumption for the tags due to more active transmissions.
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
                  <li>Superior accuracy (10-30 cm) compared to other RF technologies</li>
                  <li>Reliable performance in complex environments with obstacles</li>
                  <li>Low susceptibility to multipath interference</li>
                  <li>High update rates for real-time tracking</li>
                  <li>Ability to track thousands of tags simultaneously</li>
                  <li>Resistance to narrowband interference</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Higher infrastructure cost compared to BLE or Wi-Fi</li>
                  <li>Higher tag costs ($15-50 per tag)</li>
                  <li>Limited smartphone compatibility (improving with newer models)</li>
                  <li>Higher power consumption than BLE</li>
                  <li>Requires dedicated infrastructure</li>
                  <li>More complex deployment and calibration</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
          <Tabs defaultValue="manufacturing" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto mb-4">
              <TabsTrigger value="manufacturing" className="flex flex-col py-2 h-auto">
                <Factory className="h-5 w-5 mb-1" />
                Manufacturing
              </TabsTrigger>
              <TabsTrigger value="healthcare" className="flex flex-col py-2 h-auto">
                <Hospital className="h-5 w-5 mb-1" />
                Healthcare
              </TabsTrigger>
              <TabsTrigger value="logistics" className="flex flex-col py-2 h-auto">
                <Truck className="h-5 w-5 mb-1" />
                Logistics
              </TabsTrigger>
              <TabsTrigger value="retail" className="flex flex-col py-2 h-auto">
                <ShoppingBag className="h-5 w-5 mb-1" />
                Retail
              </TabsTrigger>
              <TabsTrigger value="commercial" className="flex flex-col py-2 h-auto">
                <Building2 className="h-5 w-5 mb-1" />
                Commercial
              </TabsTrigger>
            </TabsList>
            <TabsContent value="manufacturing" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Manufacturing Applications</CardTitle>
                  <CardDescription>
                    UWB enables high-precision tracking for advanced manufacturing operations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In manufacturing environments, UWB provides centimeter-level tracking of tools, assets, and
                    personnel. This precision is crucial for applications like automated guided vehicles (AGVs), robotic
                    collision avoidance, and precision assembly processes.
                  </p>
                  <p>
                    UWB is also used for worker safety applications in hazardous areas, providing real-time location
                    data to prevent accidents and ensure compliance with safety protocols.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>AGV navigation and collision avoidance</li>
                        <li>Precision tool tracking and management</li>
                        <li>Worker safety in hazardous areas</li>
                        <li>Quality control process tracking</li>
                        <li>High-value asset monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved production accuracy</li>
                        <li>Enhanced worker safety</li>
                        <li>Reduced equipment collisions</li>
                        <li>Optimized workflow efficiency</li>
                        <li>Better quality control</li>
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
                    UWB provides precise tracking for critical healthcare assets and workflows.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Healthcare facilities use UWB for tracking high-value medical equipment, monitoring patient flow,
                    and optimizing staff workflows. The technology's high precision is particularly valuable for
                    tracking specialized equipment in complex hospital environments.
                  </p>
                  <p>
                    UWB is also used for contact tracing and infection control applications, providing accurate data on
                    interactions between staff, patients, and visitors.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>High-value medical equipment tracking</li>
                        <li>Patient flow optimization</li>
                        <li>Staff workflow analysis</li>
                        <li>Contact tracing and infection control</li>
                        <li>Surgical instrument tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduced equipment search time</li>
                        <li>Improved patient care efficiency</li>
                        <li>Enhanced infection control</li>
                        <li>Better resource utilization</li>
                        <li>Increased operational visibility</li>
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
                    UWB enables precise tracking in warehouses and distribution centers.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In logistics operations, UWB provides accurate tracking of goods, vehicles, and personnel within
                    warehouses and distribution centers. The technology enables precise inventory location management
                    and optimizes picking routes.
                  </p>
                  <p>
                    UWB is particularly valuable for automated warehouse systems, providing the precision needed for
                    robotic picking and autonomous vehicle navigation in dense storage environments.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Precise inventory location management</li>
                        <li>Forklift and AGV navigation</li>
                        <li>Automated picking systems</li>
                        <li>Yard management</li>
                        <li>Worker safety and efficiency</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved inventory accuracy</li>
                        <li>Reduced picking errors</li>
                        <li>Enhanced operational efficiency</li>
                        <li>Better space utilization</li>
                        <li>Increased throughput</li>
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
                  <CardDescription>UWB provides precise customer analytics and inventory management.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Retailers use UWB for high-precision customer journey analysis, inventory management, and loss
                    prevention. The technology enables detailed heatmapping of customer movements and interactions with
                    products.
                  </p>
                  <p>
                    UWB is also used for automated checkout systems and smart shopping carts, providing the precision
                    needed to track items as customers move through the store.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Detailed customer journey analysis</li>
                        <li>High-value inventory tracking</li>
                        <li>Automated checkout systems</li>
                        <li>Smart shopping carts</li>
                        <li>Loss prevention</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Enhanced customer insights</li>
                        <li>Reduced shrinkage</li>
                        <li>Improved inventory accuracy</li>
                        <li>Streamlined checkout experience</li>
                        <li>Better store layout optimization</li>
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
                    UWB enables precise indoor navigation and space utilization analysis.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Commercial buildings implement UWB for high-precision indoor navigation, space utilization analysis,
                    and access control. The technology provides detailed insights into how spaces are used and optimizes
                    facility management.
                  </p>
                  <p>
                    UWB is also used for touchless access control systems, providing secure and convenient entry based
                    on precise location data.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Precise indoor navigation</li>
                        <li>Detailed space utilization analysis</li>
                        <li>Touchless access control</li>
                        <li>Asset and equipment tracking</li>
                        <li>Emergency response management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved visitor experience</li>
                        <li>Enhanced security</li>
                        <li>Optimized space utilization</li>
                        <li>Better emergency response</li>
                        <li>Efficient facility management</li>
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
                <CardTitle>Automotive Manufacturing</CardTitle>
                <CardDescription>European Luxury Car Manufacturer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A European luxury car manufacturer implemented UWB RTLS across their 200,000 sq ft assembly plant to
                  track vehicles through the production process. The system achieved 15 cm accuracy, enabling precise
                  positioning for automated tool operations and quality control.
                </p>
                <p>
                  The implementation reduced production errors by 37% and improved throughput by 12%. The manufacturer
                  estimated annual savings of €2.3 million through improved efficiency and quality.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Warehouse Automation</CardTitle>
                <CardDescription>E-commerce Fulfillment Center</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A major e-commerce company deployed UWB RTLS in their 500,000 sq ft fulfillment center to track 120
                  autonomous mobile robots (AMRs) and coordinate their movements with human pickers. The system achieved
                  10 cm positioning accuracy.
                </p>
                <p>
                  The implementation increased picking efficiency by 28% and reduced robot-related incidents by 94%. The
                  company achieved full ROI within 18 months and expanded the system to additional facilities.
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
                  <li>UWB tags for tracked assets</li>
                  <li>UWB anchors (typically 1 per 100-200 m²)</li>
                  <li>Network infrastructure (typically PoE)</li>
                  <li>Time synchronization system</li>
                  <li>Server for location engine (on-premises or cloud)</li>
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
                  <li>Conduct RF site survey before installation</li>
                  <li>Ensure proper anchor placement for optimal coverage</li>
                  <li>Calibrate the system after installation</li>
                  <li>Implement redundancy for critical applications</li>
                  <li>Establish regular maintenance procedures</li>
                  <li>Train staff on proper tag handling</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Common Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Higher infrastructure cost compared to other technologies</li>
                  <li>Complex installation and calibration</li>
                  <li>Potential interference from dense metal environments</li>
                  <li>Battery management for mobile tags</li>
                  <li>Integration with existing systems</li>
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
                  <th className="border px-4 py-2 text-left font-semibold">UWB</th>
                  <th className="border px-4 py-2 text-left font-semibold">BLE</th>
                  <th className="border px-4 py-2 text-left font-semibold">Wi-Fi</th>
                  <th className="border px-4 py-2 text-left font-semibold">RFID</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Typical Accuracy</td>
                  <td className="border px-4 py-2">10-30 cm</td>
                  <td className="border px-4 py-2">1-3 meters</td>
                  <td className="border px-4 py-2">3-5 meters</td>
                  <td className="border px-4 py-2">Proximity to reader</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Range</td>
                  <td className="border px-4 py-2">10-50 meters</td>
                  <td className="border px-4 py-2">10-30 meters</td>
                  <td className="border px-4 py-2">30-50 meters</td>
                  <td className="border px-4 py-2">1-10 meters</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Power Consumption</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Very Low</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Passive/Low</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Infrastructure Cost</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Low-Medium</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Medium</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Tag Cost</td>
                  <td className="border px-4 py-2">$15-50</td>
                  <td className="border px-4 py-2">$5-15</td>
                  <td className="border px-4 py-2">$10-30</td>
                  <td className="border px-4 py-2">$0.10-20</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Battery Life</td>
                  <td className="border px-4 py-2">6 months - 3 years</td>
                  <td className="border px-4 py-2">6 months - 5 years</td>
                  <td className="border px-4 py-2">3 months - 2 years</td>
                  <td className="border px-4 py-2">Passive/1-5 years</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Smartphone Compatible</td>
                  <td className="border px-4 py-2">Limited</td>
                  <td className="border px-4 py-2">Yes</td>
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
                    <span className="font-medium">Smartphone Integration:</span> Increasing adoption of UWB in
                    smartphones and wearables, expanding potential applications
                  </li>
                  <li>
                    <span className="font-medium">Miniaturization:</span> Smaller, more energy-efficient UWB chips
                    enabling new form factors and use cases
                  </li>
                  <li>
                    <span className="font-medium">Enhanced Algorithms:</span> Advanced positioning algorithms to achieve
                    sub-10 cm accuracy in complex environments
                  </li>
                  <li>
                    <span className="font-medium">Sensor Fusion:</span> Integration with other sensors (IMU, cameras)
                    for improved accuracy and context awareness
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
                    <span className="font-medium">Cost Reduction:</span> Decreasing hardware costs as adoption increases
                    and manufacturing scales
                  </li>
                  <li>
                    <span className="font-medium">Industry Standardization:</span> Development of more robust standards
                    for interoperability between different UWB systems
                  </li>
                  <li>
                    <span className="font-medium">Hybrid Solutions:</span> Increasing integration of UWB with other
                    technologies like BLE for comprehensive coverage
                  </li>
                  <li>
                    <span className="font-medium">Expanded Applications:</span> Growth in automotive, AR/VR, and smart
                    home applications leveraging UWB's precision
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learn More - Updated with real resource links from article-data.ts */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Learn More About UWB Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
              <ul className="space-y-2">
                {uwbRelatedArticles.map((article) => (
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
              <p className="mb-4">Need help determining if UWB is the right technology for your RTLS project?</p>
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
        {uwbFAQs.length > 0 && (
          <section className="mb-12 bg-gray-50 rounded-lg p-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Frequently Asked Questions About Ultra-Wideband Positioning
              </h2>
              <FAQSection faqs={uwbFAQs} sectionId="uwb-faqs" showTitle={false} />
            </div>
          </section>
        )}
      </article>

      {/* Add Schema for SEO */}
      <FAQSchema faqs={uwbFAQs} pageId="uwb-technology" />
    </div>
  )
}
