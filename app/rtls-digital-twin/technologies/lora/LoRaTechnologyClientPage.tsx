"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Factory, Hospital, ShoppingBag, Truck } from "lucide-react"
import Link from "next/link"
import { useEffect } from "react"
import { FAQSection } from "@/components/ui/faq-section"
import { FAQSchema } from "@/components/seo/faq-schema"
import { technologyFAQs } from "@/lib/faq-data"

export default function LoRaTechnologyClientPage() {
  // Get LoRa FAQs
  const loraFAQs = technologyFAQs.lora || []

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">LoRa Technology for RTLS</h1>
          <p className="text-base text-muted-foreground">
            LoRa (Long Range) is a low-power wide-area network (LPWAN) technology designed for long-range communication
            with minimal power consumption, ideal for IoT and RTLS applications covering large areas.
          </p>
        </header>

        {/* Overview and Key Specifications */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                LoRa operates in unlicensed ISM bands (433 MHz, 868 MHz, 915 MHz depending on region) and is optimized
                for long-range, low-power communication. It provides exceptional coverage of 2-15 km in urban areas and
                up to 30+ km in rural areas with line of sight.
              </p>
              <p>
                For RTLS applications, LoRa typically achieves 20-200 meter accuracy using RSSI or TDOA techniques,
                making it suitable for tracking assets across large areas where high precision is not required.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Frequency:</span>
                  <span>433/868/915 MHz ISM bands</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Range:</span>
                  <span>2-15 km urban, up to 30+ km rural</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Data Rate:</span>
                  <span>0.3-50 kbps (depending on spreading factor)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Typical Accuracy:</span>
                  <span>20-200 meters (RSSI/TDOA)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Power Consumption:</span>
                  <span>0.01-0.05 W (transmit)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Battery Life:</span>
                  <span>5-10+ years (depending on transmission frequency)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How LoRa Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How LoRa Works for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">RSSI-Based Positioning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  LoRa end devices broadcast signals that are received by multiple gateways. The Received Signal
                  Strength Indicator (RSSI) is measured to estimate the distance between the device and gateway. Using
                  multiple gateways, trilateration algorithms determine the device's position with 50-200 meter
                  accuracy.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Time Difference of Arrival (TDOA)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  TDOA measures the time difference of a signal arriving at multiple synchronized gateways. This
                  approach provides better accuracy (20-50 meters) than RSSI but requires precise time synchronization
                  between gateways, typically using GPS receivers for accurate timestamping.
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
                  <li>Exceptional range (2-15 km urban, 30+ km rural)</li>
                  <li>Extremely low power consumption enabling 5-10+ year battery life</li>
                  <li>Excellent building penetration with sub-GHz frequencies</li>
                  <li>Cost-effective infrastructure (fewer gateways needed)</li>
                  <li>License-free operation in ISM bands</li>
                  <li>Robust in noisy environments due to spread spectrum modulation</li>
                  <li>Scalable network supporting thousands of devices per gateway</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Limited positioning accuracy (20-200 meters)</li>
                  <li>Low data rate (0.3-50 kbps) limiting update frequency</li>
                  <li>Duty cycle restrictions in some regions (e.g., 1% in EU868)</li>
                  <li>Limited real-time capability for frequent location updates</li>
                  <li>Uplink-dominated protocol with limitations on downlink</li>
                  <li>Gateway synchronization challenges for TDOA positioning</li>
                  <li>Environmental factors affecting RSSI-based positioning</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
          <Tabs defaultValue="logistics" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto mb-4">
              <TabsTrigger value="logistics" className="flex flex-col py-2 h-auto">
                <Truck className="h-5 w-5 mb-1" />
                Logistics
              </TabsTrigger>
              <TabsTrigger value="agriculture" className="flex flex-col py-2 h-auto">
                <ShoppingBag className="h-5 w-5 mb-1" />
                Agriculture
              </TabsTrigger>
              <TabsTrigger value="manufacturing" className="flex flex-col py-2 h-auto">
                <Factory className="h-5 w-5 mb-1" />
                Manufacturing
              </TabsTrigger>
              <TabsTrigger value="smartcity" className="flex flex-col py-2 h-auto">
                <Building2 className="h-5 w-5 mb-1" />
                Smart City
              </TabsTrigger>
              <TabsTrigger value="healthcare" className="flex flex-col py-2 h-auto">
                <Hospital className="h-5 w-5 mb-1" />
                Healthcare
              </TabsTrigger>
            </TabsList>
            <TabsContent value="logistics" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Logistics Applications</CardTitle>
                  <CardDescription>
                    LoRa technology enables efficient tracking across large supply chain operations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In logistics environments, LoRa is used to track shipping containers, vehicles, and high-value
                    assets across ports, rail yards, and large distribution centers. The technology provides zone-level
                    location data with minimal infrastructure requirements.
                  </p>
                  <p>
                    LoRa is also used for condition monitoring of sensitive shipments, tracking temperature, humidity,
                    and shock events across long-distance transportation routes. For yard management, LoRa helps locate
                    trailers and containers quickly in large facilities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Container tracking in ports and terminals</li>
                        <li>Fleet management across wide geographic areas</li>
                        <li>Cold chain monitoring for sensitive goods</li>
                        <li>Yard management in large facilities</li>
                        <li>Rural delivery tracking in remote areas</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Wide-area coverage with minimal infrastructure</li>
                        <li>Long battery life for tracking devices (5+ years)</li>
                        <li>Reduced infrastructure costs for large areas</li>
                        <li>Ability to track assets in remote locations</li>
                        <li>Low maintenance requirements for deployed devices</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="agriculture" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Agricultural Applications</CardTitle>
                  <CardDescription>
                    LoRa enables livestock tracking and agricultural asset monitoring across vast rural areas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Agricultural operations use LoRa to track livestock across large grazing areas, monitoring location
                    and health metrics of animals. The technology's long range and low power consumption make it ideal
                    for remote farming applications where cellular coverage may be limited.
                  </p>
                  <p>
                    LoRa is also used for tracking agricultural equipment, irrigation systems, and environmental
                    monitoring stations across large farms. The system integrates with farm management software to
                    optimize operations and resource usage.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Livestock tracking and health monitoring</li>
                        <li>Farm equipment location management</li>
                        <li>Environmental condition monitoring</li>
                        <li>Irrigation system tracking and control</li>
                        <li>Fence breach detection and alerts</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Coverage across vast rural properties</li>
                        <li>Solar-powered options for continuous operation</li>
                        <li>Reduced livestock losses through early detection</li>
                        <li>Improved resource management</li>
                        <li>Operation in areas without cellular coverage</li>
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
                    LoRa technology enables tracking across large industrial facilities and campuses.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In manufacturing environments, LoRa is used to track large equipment, materials, and assets across
                    expansive industrial sites and between multiple buildings. The technology helps monitor the movement
                    of goods through production processes and outdoor storage areas.
                  </p>
                  <p>
                    LoRa is particularly valuable for tracking assets in challenging RF environments like metal-rich
                    facilities, where its sub-GHz frequencies provide better penetration than higher frequency
                    technologies. The system can integrate with manufacturing execution systems for production
                    visibility.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Large equipment tracking across facilities</li>
                        <li>Inter-building material movement monitoring</li>
                        <li>Yard management for incoming/outgoing goods</li>
                        <li>Environmental monitoring in production areas</li>
                        <li>Worker safety in hazardous environments</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Coverage across multi-building campuses</li>
                        <li>Reduced infrastructure costs for large facilities</li>
                        <li>Better signal penetration in industrial environments</li>
                        <li>Long battery life reducing maintenance needs</li>
                        <li>Ability to combine location with sensor data</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="smartcity" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Smart City Applications</CardTitle>
                  <CardDescription>
                    LoRa enables municipal asset tracking and infrastructure monitoring across urban areas.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Smart cities implement LoRa for tracking and monitoring municipal assets like waste bins, street
                    lights, parking spaces, and public infrastructure. The technology provides city-wide coverage with
                    minimal gateway infrastructure, making it cost-effective for large-scale deployments.
                  </p>
                  <p>
                    LoRa networks enable cities to monitor environmental conditions, traffic patterns, and utility usage
                    across urban areas. The long battery life of LoRa devices reduces maintenance requirements for city
                    operations teams.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Waste management container tracking</li>
                        <li>Street light monitoring and control</li>
                        <li>Parking space occupancy detection</li>
                        <li>Public transportation asset tracking</li>
                        <li>Environmental monitoring stations</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>City-wide coverage with minimal infrastructure</li>
                        <li>Reduced operational costs through optimization</li>
                        <li>Improved service delivery to citizens</li>
                        <li>Low maintenance requirements for deployed devices</li>
                        <li>Scalable solution for growing urban areas</li>
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
                    LoRa enables tracking across large healthcare campuses and remote patient monitoring.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Healthcare organizations use LoRa for tracking assets and monitoring patients across large hospital
                    campuses, particularly for outdoor areas and inter-building transfers. The technology helps locate
                    equipment as it moves between different facilities within a healthcare system.
                  </p>
                  <p>
                    LoRa is also valuable for remote patient monitoring applications, tracking the location and usage of
                    home healthcare equipment. For ambulance and emergency services, LoRa can provide location tracking
                    across wide service areas.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Campus-wide equipment tracking</li>
                        <li>Patient wandering prevention in large facilities</li>
                        <li>Ambulance and emergency vehicle tracking</li>
                        <li>Remote patient monitoring equipment</li>
                        <li>Environmental monitoring in sensitive areas</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Coverage across multi-building healthcare campuses</li>
                        <li>Long battery life reducing maintenance burden</li>
                        <li>Ability to track assets in outdoor areas</li>
                        <li>Low infrastructure costs for wide area coverage</li>
                        <li>Integration with existing healthcare systems</li>
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
                <CardTitle>Smart Agriculture</CardTitle>
                <CardDescription>Australian Cattle Ranch</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A large cattle ranch in Australia implemented a LoRa-based RTLS to track 5,000 head of cattle across
                  50,000 acres of grazing land. The system used solar-powered LoRa tags attached to ear tags, with
                  gateways mounted on windmills and water towers.
                </p>
                <p>
                  The solution reduced cattle loss by 85% through early detection of straying animals and improved
                  grazing management by identifying underutilized pasture areas. Battery life exceeded 3 years with
                  daily location updates, and the ranch achieved full ROI within 18 months through reduced losses and
                  labor costs.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Port Logistics</CardTitle>
                <CardDescription>European Container Terminal</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A major European port deployed a LoRa-based RTLS to track containers, vehicles, and equipment across a
                  1,200-acre facility. The system integrated with existing management software to optimize operations
                  and improve security with just 12 gateways covering the entire port.
                </p>
                <p>
                  Container location time decreased by 70% through real-time visibility, while yard utilization improved
                  by 23% through better space management. The port also reduced fuel consumption by 15% through
                  optimized vehicle routing and enhanced security with geofencing alerts for unauthorized movement.
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
                  <li>LoRa end devices/tags for tracked assets</li>
                  <li>LoRa gateways with backhaul connectivity</li>
                  <li>Network server for LoRaWAN management</li>
                  <li>Location solver for positioning calculations</li>
                  <li>Application server for business logic</li>
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
                  <li>Select appropriate spreading factors for range/battery life</li>
                  <li>Implement proper security measures for data protection</li>
                  <li>Consider gateway time synchronization for TDOA</li>
                  <li>Develop a power strategy for end devices</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Common Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Duty cycle restrictions in certain regions</li>
                  <li>Accuracy limitations for precise positioning</li>
                  <li>Gateway synchronization for TDOA positioning</li>
                  <li>Integration with existing enterprise systems</li>
                  <li>Managing spreading factors for optimal performance</li>
                  <li>Balancing update frequency with battery life</li>
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
                  <th className="border px-4 py-2 text-left font-semibold">LoRa</th>
                  <th className="border px-4 py-2 text-left font-semibold">BLE</th>
                  <th className="border px-4 py-2 text-left font-semibold">Wi-Fi</th>
                  <th className="border px-4 py-2 text-left font-semibold">UWB</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Typical Accuracy</td>
                  <td className="border px-4 py-2">20-200 meters</td>
                  <td className="border px-4 py-2">1-3 meters</td>
                  <td className="border px-4 py-2">3-5 meters</td>
                  <td className="border px-4 py-2">10-30 cm</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Range</td>
                  <td className="border px-4 py-2">2-15 km urban, 30+ km rural</td>
                  <td className="border px-4 py-2">10-30 meters</td>
                  <td className="border px-4 py-2">30-50 meters</td>
                  <td className="border px-4 py-2">10-50 meters</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Power Consumption</td>
                  <td className="border px-4 py-2">Extremely Low</td>
                  <td className="border px-4 py-2">Very Low</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Medium</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Infrastructure Cost</td>
                  <td className="border px-4 py-2">Low (few gateways)</td>
                  <td className="border px-4 py-2">Low-Medium</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">High</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Tag Cost</td>
                  <td className="border px-4 py-2">$15-50</td>
                  <td className="border px-4 py-2">$5-15</td>
                  <td className="border px-4 py-2">$10-30</td>
                  <td className="border px-4 py-2">$15-50</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Battery Life</td>
                  <td className="border px-4 py-2">5-10+ years</td>
                  <td className="border px-4 py-2">6 months - 5 years</td>
                  <td className="border px-4 py-2">3 months - 2 years</td>
                  <td className="border px-4 py-2">6 months - 3 years</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Best For</td>
                  <td className="border px-4 py-2">Large outdoor areas</td>
                  <td className="border px-4 py-2">Indoor, medium precision</td>
                  <td className="border px-4 py-2">Data-intensive applications</td>
                  <td className="border px-4 py-2">High precision indoor</td>
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
                    <span className="font-medium">Enhanced Positioning Techniques:</span> Development of more accurate
                    positioning algorithms specifically optimized for LoRa
                  </li>
                  <li>
                    <span className="font-medium">Multi-Technology Integration:</span> Combining LoRa with other
                    technologies (GPS, Wi-Fi, BLE) for seamless indoor/outdoor tracking
                  </li>
                  <li>
                    <span className="font-medium">AI and Machine Learning:</span> Advanced algorithms improving
                    positioning accuracy by learning from historical data and environmental patterns
                  </li>
                  <li>
                    <span className="font-medium">Energy Harvesting:</span> Integration of solar, kinetic, or RF energy
                    harvesting to extend battery life or enable battery-free operation
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
                    <span className="font-medium">Satellite Integration:</span> LoRa satellite connectivity for truly
                    global coverage without terrestrial infrastructure
                  </li>
                  <li>
                    <span className="font-medium">Industry Standardization:</span> Development of standardized
                    approaches to LoRa positioning within the LoRaWAN specification
                  </li>
                  <li>
                    <span className="font-medium">Smart City Adoption:</span> Increasing implementation in municipal
                    asset tracking and infrastructure monitoring
                  </li>
                  <li>
                    <span className="font-medium">Enhanced Security:</span> Advanced security features to protect
                    sensitive location data and prevent spoofing or tampering
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learn More - Related Resources */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Learn More About LoRa Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
              <ul className="space-y-2">
                {/* Use general RTLS resources since we may not have LoRa-specific ones */}
                <li>
                  <Link
                    href="/resources/rtls-101-core-components-protocols-deployment-models"
                    className="text-primary hover:underline"
                  >
                    RTLS 101: Core Components, Protocols & Deployment Models
                  </Link>
                </li>
                <li>
                  <Link href="/resources/rtls-technology-selection-guide" className="text-primary hover:underline">
                    RTLS Technology Selection Guide: Choosing the Right Solution
                  </Link>
                </li>
                <li>
                  <Link href="/resources/rtls-deployment-guide" className="text-primary hover:underline">
                    RTLS Deployment Guide: From Planning to Optimization
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/rtls-security-encryption-authentication-privacy-best-practices"
                    className="text-primary hover:underline"
                  >
                    RTLS Security: Encryption, Authentication & Privacy Best Practices
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/rtls-roi-quantify-efficiency-gains-cost-savings"
                    className="text-primary hover:underline"
                  >
                    RTLS ROI: Quantify Efficiency Gains & Cost Savings
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Unbiased Guidance</h3>
              <p className="mb-4">Need help determining if LoRa is the right technology for your RTLS project?</p>
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
        {loraFAQs.length > 0 && (
          <section className="mt-16 mb-12 bg-gray-50 rounded-lg p-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-semibold mb-6 text-center">
                Frequently Asked Questions About LoRa Positioning
              </h2>
              <FAQSection faqs={loraFAQs} sectionId="lora-faqs" showTitle={false} />
            </div>
          </section>
        )}

        {/* Add Schema for SEO */}
        <FAQSchema faqs={loraFAQs} pageId="lora-technology" />
      </article>
    </div>
  )
}
