"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Factory, Hospital, ShoppingBag, Truck } from "lucide-react"
import Link from "next/link"
import { getTechnologyRelatedArticles } from "@/lib/article-data"
import { useScrollToTop } from "@/hooks/useScrollToTop"

export default function GNSSTechnologyClientPage() {
  useScrollToTop()

  // Get GNSS-related articles for the related resources section
  const gnssRelatedArticles = getTechnologyRelatedArticles("gps").slice(0, 5)

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Global Navigation Satellite System (GNSS) Technology</h1>
          <p className="text-base text-muted-foreground">
            Global Navigation Satellite Systems (GNSS) provide worldwide positioning capabilities through satellite
            constellations, enabling outdoor location tracking with meter-level accuracy.
          </p>
        </header>

        {/* Overview and Key Specifications */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                GNSS is an umbrella term encompassing various satellite navigation systems operated by different
                countries, including GPS (United States), GLONASS (Russia), Galileo (European Union), BeiDou (China),
                NavIC (India), and QZSS (Japan).
              </p>
              <p>
                These systems provide global positioning through a network of satellites that transmit signals
                containing time and location data. Receivers on Earth use these signals to calculate their position
                through a process called trilateration.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Coverage:</span>
                  <span>Global (outdoor areas with clear sky view)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Accuracy:</span>
                  <span>2-10 meters (standard), 1-3cm (RTK)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Update Rate:</span>
                  <span>1-20 Hz typical</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Power Consumption:</span>
                  <span>Medium to high (50-150 mW typical)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Infrastructure:</span>
                  <span>No local infrastructure required</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Frequency Bands:</span>
                  <span>L1 (1575.42 MHz), L2 (1227.60 MHz), L5 (1176.45 MHz)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How GNSS Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How GNSS Works for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Trilateration Positioning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  GNSS receivers determine position by measuring the time it takes for signals to travel from multiple
                  satellites to the receiver. Each satellite broadcasts its position and precise time from atomic
                  clocks. The receiver calculates the distance to each satellite based on signal travel time, and with
                  signals from at least four satellites, determines its 3D position (latitude, longitude, altitude) and
                  time.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">RTLS Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  For RTLS applications, GNSS receivers are integrated into tracking devices that transmit their
                  position to a central system via cellular, LoRaWAN, or other communication networks. This enables
                  real-time tracking of assets, vehicles, and personnel in outdoor environments. Advanced systems
                  combine GNSS with other sensors for improved accuracy and indoor-outdoor transitions.
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
                  <li>Global coverage with no local infrastructure required</li>
                  <li>Mature, well-established technology with widespread adoption</li>
                  <li>No subscription fees for basic GNSS services</li>
                  <li>Receivers are relatively inexpensive and widely available</li>
                  <li>Modern receivers can use multiple GNSS systems simultaneously</li>
                  <li>Ideal for outdoor tracking of vehicles and high-value assets</li>
                  <li>Seamless tracking across large geographic areas</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Poor or no performance indoors and in urban canyons</li>
                  <li>Signal can be blocked by buildings, dense foliage, and terrain</li>
                  <li>Standard accuracy (3-5 meters) may be insufficient for precise applications</li>
                  <li>Susceptible to multipath errors from signal reflections</li>
                  <li>Relatively high power consumption compared to some RTLS technologies</li>
                  <li>Signal acquisition can take 30+ seconds from cold start</li>
                  <li>Vulnerable to jamming and spoofing attacks</li>
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
                <Factory className="h-5 w-5 mb-1" />
                Agriculture
              </TabsTrigger>
              <TabsTrigger value="construction" className="flex flex-col py-2 h-auto">
                <Building2 className="h-5 w-5 mb-1" />
                Construction
              </TabsTrigger>
              <TabsTrigger value="retail" className="flex flex-col py-2 h-auto">
                <ShoppingBag className="h-5 w-5 mb-1" />
                Retail
              </TabsTrigger>
              <TabsTrigger value="healthcare" className="flex flex-col py-2 h-auto">
                <Hospital className="h-5 w-5 mb-1" />
                Healthcare
              </TabsTrigger>
            </TabsList>
            <TabsContent value="logistics" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Logistics & Transportation Applications</CardTitle>
                  <CardDescription>
                    GNSS technology enables efficient fleet management and supply chain visibility.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In logistics and transportation, GNSS is the foundation of fleet management systems, providing
                    real-time location tracking of vehicles across vast geographic areas. This enables route
                    optimization, delivery time estimation, and efficient dispatch operations.
                  </p>
                  <p>
                    For supply chain management, GNSS tracking of containers, trailers, and high-value shipments
                    provides end-to-end visibility and security. The technology also supports geofencing applications
                    for automated notifications when assets enter or leave designated areas.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Fleet tracking and management</li>
                        <li>Route optimization and navigation</li>
                        <li>Delivery time estimation</li>
                        <li>Container and trailer tracking</li>
                        <li>Cold chain monitoring with location</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduced fuel consumption (10-15% typical)</li>
                        <li>Improved delivery times and reliability</li>
                        <li>Enhanced security for high-value cargo</li>
                        <li>Better resource utilization</li>
                        <li>Reduced insurance costs</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="agriculture" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Agriculture Applications</CardTitle>
                  <CardDescription>
                    Precision agriculture relies on GNSS for field operations and asset management.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In agriculture, GNSS enables precision farming through accurate positioning of equipment for
                    planting, spraying, and harvesting. RTK-enhanced GNSS provides centimeter-level accuracy for
                    automated guidance systems, reducing overlap and improving efficiency.
                  </p>
                  <p>
                    GNSS also supports variable rate application of seeds, fertilizers, and pesticides based on field
                    mapping data. For livestock operations, GNSS tracking helps monitor animal movements and grazing
                    patterns across large areas.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Automated guidance for farm equipment</li>
                        <li>Variable rate application</li>
                        <li>Field mapping and boundary management</li>
                        <li>Livestock tracking and management</li>
                        <li>Irrigation system optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduced input costs (5-15% typical)</li>
                        <li>Increased crop yields</li>
                        <li>Minimized environmental impact</li>
                        <li>Extended equipment operating hours</li>
                        <li>Improved farm management decisions</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="construction" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Construction Applications</CardTitle>
                  <CardDescription>
                    GNSS technology improves efficiency and accuracy in construction projects.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Construction sites use GNSS for equipment tracking, site monitoring, and machine control systems.
                    High-precision GNSS receivers guide excavators, bulldozers, and graders for accurate earthmoving
                    operations according to digital site plans.
                  </p>
                  <p>
                    GNSS also supports site surveying, progress monitoring, and asset management across large
                    construction projects. The technology enables real-time coordination between different teams and
                    equipment on complex job sites.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Machine control and guidance</li>
                        <li>Equipment tracking and utilization</li>
                        <li>Site surveying and mapping</li>
                        <li>Progress monitoring and reporting</li>
                        <li>Safety zone management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Increased productivity (20-30% typical)</li>
                        <li>Reduced rework and material waste</li>
                        <li>Improved project timeline adherence</li>
                        <li>Enhanced site safety</li>
                        <li>Better resource allocation</li>
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
                  <CardDescription>GNSS supports last-mile delivery and outdoor retail operations.</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In retail, GNSS technology powers last-mile delivery tracking and optimization, providing customers
                    with real-time updates on their order status. For retail chains, GNSS helps manage delivery fleets
                    between distribution centers and stores.
                  </p>
                  <p>
                    Outdoor retail operations like garden centers and car dealerships use GNSS for inventory management
                    and loss prevention. The technology also supports location-based marketing and customer analytics
                    for retail businesses.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Last-mile delivery tracking</li>
                        <li>Store-to-store transfer management</li>
                        <li>Outdoor inventory management</li>
                        <li>Customer delivery notifications</li>
                        <li>Location-based marketing</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved delivery efficiency</li>
                        <li>Enhanced customer experience</li>
                        <li>Reduced delivery exceptions</li>
                        <li>Better inventory visibility</li>
                        <li>Optimized delivery routes</li>
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
                    GNSS enables efficient mobile healthcare services and emergency response.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Healthcare organizations use GNSS for ambulance fleet management, optimizing emergency response
                    times and routing. Mobile healthcare services rely on GNSS for efficient scheduling and navigation
                    between patient locations.
                  </p>
                  <p>
                    For home healthcare providers, GNSS helps optimize visit schedules and provides proof of service
                    through location verification. The technology also supports patient transport services and medical
                    equipment delivery logistics.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Ambulance fleet management</li>
                        <li>Mobile healthcare service routing</li>
                        <li>Home healthcare visit verification</li>
                        <li>Medical equipment delivery</li>
                        <li>Emergency response optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduced response times</li>
                        <li>Improved patient outcomes</li>
                        <li>Enhanced service coverage</li>
                        <li>Better resource utilization</li>
                        <li>Increased number of patient visits per day</li>
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
                <CardTitle>Fleet Optimization for Logistics Company</CardTitle>
                <CardDescription>National Distribution Services</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  National Distribution Services implemented a GNSS-based fleet management system for their 350 delivery
                  vehicles across 12 states. The system provided real-time location tracking, route optimization, and
                  driver behavior monitoring.
                </p>
                <p>
                  Within six months, the company reduced fuel consumption by 12%, decreased idle time by 23%, and
                  improved on-time deliveries from 89% to 96%. The system paid for itself within 9 months through
                  operational savings of approximately $425,000 annually.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Precision Agriculture Implementation</CardTitle>
                <CardDescription>Midwest Farming Cooperative</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A farming cooperative in the Midwest equipped 45 tractors and harvesters with RTK-enhanced GNSS
                  guidance systems for precision agriculture operations across 28,000 acres of cropland. The system
                  enabled centimeter-level accuracy for planting, spraying, and harvesting.
                </p>
                <p>
                  The implementation resulted in a 7% reduction in seed and fertilizer usage, 9% decrease in fuel
                  consumption, and 5% increase in crop yields. Annual savings were estimated at $32 per acre, with a
                  total return on investment period of 2.5 growing seasons.
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
                <CardTitle className="text-lg">Hardware Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Single vs. multi-frequency receivers</li>
                  <li>Multi-constellation support capabilities</li>
                  <li>Antenna quality and placement</li>
                  <li>Power requirements and battery life</li>
                  <li>Environmental durability (IP rating)</li>
                  <li>Size and form factor constraints</li>
                  <li>Integration interfaces (UART, I2C, SPI)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Software & Integration</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Data formats (NMEA 0183, proprietary)</li>
                  <li>Position update rate requirements</li>
                  <li>Communication network selection</li>
                  <li>Backend system integration</li>
                  <li>Filtering algorithms for smoother tracking</li>
                  <li>Map matching for road-based applications</li>
                  <li>Geofencing and alerting capabilities</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Common Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Indoor and urban canyon performance</li>
                  <li>Signal multipath in dense environments</li>
                  <li>Power management for mobile devices</li>
                  <li>Cold start acquisition time</li>
                  <li>Accuracy limitations for precise applications</li>
                  <li>Connectivity in remote areas</li>
                  <li>Security concerns (jamming/spoofing)</li>
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
                  <th className="border px-4 py-2 text-left font-semibold">GNSS</th>
                  <th className="border px-4 py-2 text-left font-semibold">UWB</th>
                  <th className="border px-4 py-2 text-left font-semibold">BLE</th>
                  <th className="border px-4 py-2 text-left font-semibold">Wi-Fi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Typical Accuracy</td>
                  <td className="border px-4 py-2">
                    2-10 meters (standard)
                    <br />
                    1-3cm (RTK)
                  </td>
                  <td className="border px-4 py-2">10-30 cm</td>
                  <td className="border px-4 py-2">1-3 meters</td>
                  <td className="border px-4 py-2">3-5 meters</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Indoor Performance</td>
                  <td className="border px-4 py-2">Poor</td>
                  <td className="border px-4 py-2">Excellent</td>
                  <td className="border px-4 py-2">Good</td>
                  <td className="border px-4 py-2">Good</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Outdoor Performance</td>
                  <td className="border px-4 py-2">Excellent</td>
                  <td className="border px-4 py-2">Good</td>
                  <td className="border px-4 py-2">Fair</td>
                  <td className="border px-4 py-2">Fair</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Range</td>
                  <td className="border px-4 py-2">Global</td>
                  <td className="border px-4 py-2">10-100 meters</td>
                  <td className="border px-4 py-2">10-50 meters</td>
                  <td className="border px-4 py-2">30-100 meters</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Power Consumption</td>
                  <td className="border px-4 py-2">Medium-High</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Very Low</td>
                  <td className="border px-4 py-2">High</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Infrastructure</td>
                  <td className="border px-4 py-2">None required</td>
                  <td className="border px-4 py-2">Anchors needed</td>
                  <td className="border px-4 py-2">Beacons needed</td>
                  <td className="border px-4 py-2">Access points</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Smartphone Compatible</td>
                  <td className="border px-4 py-2">Yes</td>
                  <td className="border px-4 py-2">Limited</td>
                  <td className="border px-4 py-2">Yes</td>
                  <td className="border px-4 py-2">Yes</td>
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
                    <span className="font-medium">Multi-Frequency Receivers:</span> Increasing adoption of dual and
                    triple-frequency receivers in consumer devices for improved accuracy
                  </li>
                  <li>
                    <span className="font-medium">Precise Point Positioning (PPP):</span> Democratization of
                    centimeter-level accuracy without local base stations
                  </li>
                  <li>
                    <span className="font-medium">Advanced Anti-Jamming:</span> New techniques to protect against signal
                    interference and spoofing attacks
                  </li>
                  <li>
                    <span className="font-medium">Miniaturization:</span> Smaller, more power-efficient receivers
                    enabling new wearable and IoT applications
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
                    <span className="font-medium">Hybrid Positioning:</span> Integration with other technologies
                    (inertial sensors, cameras, LiDAR) for seamless indoor-outdoor tracking
                  </li>
                  <li>
                    <span className="font-medium">AI Integration:</span> Machine learning algorithms improving position
                    estimation in challenging environments
                  </li>
                  <li>
                    <span className="font-medium">Satellite Modernization:</span> Next-generation satellites with
                    improved signals, accuracy, and reliability
                  </li>
                  <li>
                    <span className="font-medium">Low-Power GNSS:</span> New techniques to reduce power consumption for
                    IoT and long-life applications
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learn More */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Learn More About GNSS Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
              <ul className="space-y-2">
                {gnssRelatedArticles.map((article) => (
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
              <p className="mb-4">Need help determining if GNSS is the right technology for your RTLS project?</p>
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
