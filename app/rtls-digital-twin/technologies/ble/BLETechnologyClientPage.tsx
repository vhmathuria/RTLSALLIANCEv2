"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Factory, Hospital, Info, ShoppingBag, Truck } from "lucide-react"
import Link from "next/link"
import { getBLERelatedArticles } from "@/lib/article-data"

export default function BLETechnologyClientPage() {
  // Get BLE-related articles for the related resources section
  const bleRelatedArticles = getBLERelatedArticles().slice(0, 3)

  return (
    <div className="container mx-auto py-12 px-4">
      <article className="max-w-5xl mx-auto">
        {/* Page Header - Enhanced with better spacing and visual hierarchy */}
        <header className="mb-16 text-center">
          <h1 className="text-5xl font-bold mb-6">Bluetooth Low Energy (BLE) Technology</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bluetooth Low Energy (BLE) is a wireless technology designed for short-range communication with minimal
            power consumption.
          </p>
        </header>

        {/* Overview and Key Specifications - Enhanced with better visual separation */}
        <section className="mb-20">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h2 className="text-3xl font-semibold">Overview</h2>
              <p className="text-lg leading-relaxed">
                BLE operates in the 2.4 GHz ISM band and is optimized for low power consumption, making it ideal for
                battery-powered devices. It provides a communication range of approximately 10-30 meters in typical
                indoor environments.
              </p>
              <p className="text-lg leading-relaxed">
                For RTLS applications, BLE typically achieves 1-3 meter accuracy using signal strength (RSSI)
                measurements, with enhanced accuracy possible through Angle of Arrival (AoA) techniques.
              </p>
            </div>
            <div className="bg-gray-50 p-8 rounded-xl border border-gray-100 shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 flex items-center">
                <Info className="mr-2 h-5 w-5 text-blue-500" />
                Key Specifications
              </h3>
              <ul className="space-y-4">
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

        {/* Visual divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16"></div>

        {/* How BLE Works - Enhanced with better card styling and spacing */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">How BLE Works for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="shadow-md border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">RSSI-Based Positioning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  BLE beacons broadcast signals that are received by gateways or mobile devices. The Received Signal
                  Strength Indicator (RSSI) is measured to estimate the distance between the beacon and receiver. Using
                  multiple receivers, trilateration algorithms determine the beacon's position.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-md border-t-4 border-t-blue-500 hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Angle of Arrival (AoA)</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="leading-relaxed">
                  BLE 5.1+ supports Angle of Arrival positioning, where specialized receivers with antenna arrays
                  measure the phase differences of incoming signals to determine the direction of the transmitting
                  beacon, enabling more precise positioning.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Advantages & Limitations - Enhanced with better visual distinction */}
        <section className="mb-20 bg-gray-50 p-10 rounded-2xl">
          <h2 className="text-3xl font-semibold mb-8 text-center">Advantages & Limitations</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-green-600 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full bg-green-100 text-green-600 mr-3 flex items-center justify-center text-lg">
                  +
                </span>
                Advantages
              </h3>
              <ul className="space-y-3 pl-4">
                <li className="pl-2">Low power consumption enabling long battery life</li>
                <li className="pl-2">Widespread compatibility with smartphones and tablets</li>
                <li className="pl-2">Relatively low infrastructure cost</li>
                <li className="pl-2">Easy deployment and maintenance</li>
                <li className="pl-2">Scalable for various environment sizes</li>
                <li className="pl-2">Support for additional sensor data (temperature, motion, etc.)</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md border border-gray-100">
              <h3 className="text-2xl font-semibold mb-4 text-red-600 flex items-center">
                <span className="inline-block w-8 h-8 rounded-full bg-red-100 text-red-600 mr-3 flex items-center justify-center text-lg">
                  -
                </span>
                Limitations
              </h3>
              <ul className="space-y-3 pl-4">
                <li className="pl-2">Limited accuracy compared to UWB or optical systems</li>
                <li className="pl-2">Susceptible to signal interference and multipath effects</li>
                <li className="pl-2">Environmental factors can affect signal propagation</li>
                <li className="pl-2">Requires regular battery replacement for beacons</li>
                <li className="pl-2">Update rate limitations compared to wired systems</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Industry Applications - Enhanced tabs with better styling */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Industry Applications</h2>
          <Tabs defaultValue="healthcare" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto mb-6 bg-gray-100 p-1 rounded-lg">
              <TabsTrigger
                value="healthcare"
                className="flex flex-col py-3 h-auto data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md transition-all"
              >
                <Hospital className="h-6 w-6 mb-2" />
                Healthcare
              </TabsTrigger>
              <TabsTrigger
                value="retail"
                className="flex flex-col py-3 h-auto data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md transition-all"
              >
                <ShoppingBag className="h-6 w-6 mb-2" />
                Retail
              </TabsTrigger>
              <TabsTrigger
                value="manufacturing"
                className="flex flex-col py-3 h-auto data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md transition-all"
              >
                <Factory className="h-6 w-6 mb-2" />
                Manufacturing
              </TabsTrigger>
              <TabsTrigger
                value="logistics"
                className="flex flex-col py-3 h-auto data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md transition-all"
              >
                <Truck className="h-6 w-6 mb-2" />
                Logistics
              </TabsTrigger>
              <TabsTrigger
                value="commercial"
                className="flex flex-col py-3 h-auto data-[state=active]:bg-white data-[state=active]:shadow-md rounded-md transition-all"
              >
                <Building2 className="h-6 w-6 mb-2" />
                Commercial
              </TabsTrigger>
            </TabsList>
            <TabsContent value="healthcare" className="mt-4">
              <Card className="shadow-md border-0 overflow-hidden">
                <CardHeader className="bg-blue-50 border-b">
                  <CardTitle>Healthcare Applications</CardTitle>
                  <CardDescription className="text-base">
                    BLE technology enables efficient asset tracking and management in healthcare settings.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <p className="leading-relaxed">
                    In healthcare environments, BLE beacons are attached to mobile medical equipment, enabling staff to
                    quickly locate vital assets like infusion pumps, wheelchairs, and portable monitors. This reduces
                    search time and improves equipment utilization.
                  </p>
                  <p className="leading-relaxed">
                    BLE is also used for patient flow management, staff duress systems, and environmental monitoring.
                    The technology's low power consumption and non-intrusive nature make it ideal for sensitive
                    healthcare settings.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 bg-gray-50 p-6 rounded-lg">
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-blue-700">Common Use Cases:</h4>
                      <ul className="space-y-2 pl-5 list-disc">
                        <li>Medical equipment tracking</li>
                        <li>Patient flow optimization</li>
                        <li>Staff workflow analysis</li>
                        <li>Temperature monitoring for medication storage</li>
                        <li>Hand hygiene compliance monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-blue-700">Key Benefits:</h4>
                      <ul className="space-y-2 pl-5 list-disc">
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
            <TabsContent value="retail" className="mt-4">
              <Card className="shadow-md border-0 overflow-hidden">
                <CardHeader className="bg-blue-50 border-b">
                  <CardTitle>Retail Applications</CardTitle>
                  <CardDescription className="text-base">
                    BLE enables proximity marketing and customer analytics in retail environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <p className="leading-relaxed">
                    Retailers use BLE beacons to enhance customer experiences through proximity marketing, sending
                    targeted promotions to shoppers' smartphones as they move through the store. The technology also
                    provides valuable analytics on customer movement patterns and dwell times.
                  </p>
                  <p className="leading-relaxed">
                    For inventory management, BLE tags help track high-value merchandise and reduce shrinkage. Staff
                    efficiency can be improved by analyzing movement patterns and optimizing workflows.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 bg-gray-50 p-6 rounded-lg">
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-blue-700">Common Use Cases:</h4>
                      <ul className="space-y-2 pl-5 list-disc">
                        <li>Proximity marketing and promotions</li>
                        <li>Customer journey analysis</li>
                        <li>High-value inventory tracking</li>
                        <li>Staff efficiency optimization</li>
                        <li>Click-and-collect order management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-blue-700">Key Benefits:</h4>
                      <ul className="space-y-2 pl-5 list-disc">
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
            <TabsContent value="manufacturing" className="mt-4">
              <Card className="shadow-md border-0 overflow-hidden">
                <CardHeader className="bg-blue-50 border-b">
                  <CardTitle>Manufacturing Applications</CardTitle>
                  <CardDescription className="text-base">
                    BLE technology improves operational efficiency in manufacturing environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <p className="leading-relaxed">
                    In manufacturing facilities, BLE beacons track tools, equipment, and work-in-progress items to
                    optimize production workflows. The technology helps prevent bottlenecks and ensures critical tools
                    are available when needed.
                  </p>
                  <p className="leading-relaxed">
                    BLE is also used for worker safety applications, monitoring environmental conditions, and providing
                    location-based work instructions to staff. The system integrates with manufacturing execution
                    systems (MES) to provide real-time visibility.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 bg-gray-50 p-6 rounded-lg">
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-blue-700">Common Use Cases:</h4>
                      <ul className="space-y-2 pl-5 list-disc">
                        <li>Tool and equipment tracking</li>
                        <li>Work-in-progress monitoring</li>
                        <li>Worker safety and evacuation management</li>
                        <li>Production line optimization</li>
                        <li>Maintenance team efficiency</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-blue-700">Key Benefits:</h4>
                      <ul className="space-y-2 pl-5 list-disc">
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
            <TabsContent value="logistics" className="mt-4">
              <Card className="shadow-md border-0 overflow-hidden">
                <CardHeader className="bg-blue-50 border-b">
                  <CardTitle>Logistics Applications</CardTitle>
                  <CardDescription className="text-base">
                    BLE improves visibility and efficiency in logistics and supply chain operations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <p className="leading-relaxed">
                    Logistics operations use BLE to track assets like pallets, containers, and vehicles within
                    warehouses and distribution centers. The technology provides zone-level location data to optimize
                    picking routes and improve inventory accuracy.
                  </p>
                  <p className="leading-relaxed">
                    BLE beacons also enable condition monitoring for sensitive shipments, tracking temperature,
                    humidity, and shock events. For yard management, BLE helps locate trailers and containers quickly,
                    reducing loading and unloading times.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 bg-gray-50 p-6 rounded-lg">
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-blue-700">Common Use Cases:</h4>
                      <ul className="space-y-2 pl-5 list-disc">
                        <li>Warehouse asset tracking</li>
                        <li>Yard management</li>
                        <li>Condition monitoring for shipments</li>
                        <li>Picking route optimization</li>
                        <li>Loading dock management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-blue-700">Key Benefits:</h4>
                      <ul className="space-y-2 pl-5 list-disc">
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
            <TabsContent value="commercial" className="mt-4">
              <Card className="shadow-md border-0 overflow-hidden">
                <CardHeader className="bg-blue-50 border-b">
                  <CardTitle>Commercial Building Applications</CardTitle>
                  <CardDescription className="text-base">
                    BLE enables smart building functionality and space optimization.
                  </CardDescription>
                </CardHeader>
                <CardContent className="p-6 space-y-6">
                  <p className="leading-relaxed">
                    Commercial buildings implement BLE for space utilization analysis, wayfinding, and occupancy
                    monitoring. The technology helps optimize workspace layouts and improve facility management
                    efficiency.
                  </p>
                  <p className="leading-relaxed">
                    BLE beacons enable indoor navigation for visitors and staff, while also supporting automated
                    check-in processes and meeting room management. The system integrates with building management
                    systems for energy optimization based on occupancy patterns.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-6 bg-gray-50 p-6 rounded-lg">
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-blue-700">Common Use Cases:</h4>
                      <ul className="space-y-2 pl-5 list-disc">
                        <li>Space utilization monitoring</li>
                        <li>Indoor navigation and wayfinding</li>
                        <li>Meeting room management</li>
                        <li>Automated attendance tracking</li>
                        <li>Energy optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-medium mb-4 text-blue-700">Key Benefits:</h4>
                      <ul className="space-y-2 pl-5 list-disc">
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

        {/* Visual divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent my-16"></div>

        {/* Case Studies - Enhanced with better visual styling */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
                <CardTitle>Healthcare Equipment Tracking</CardTitle>
                <CardDescription className="text-base">Memorial Hospital</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="leading-relaxed">
                  Memorial Hospital implemented a BLE-based RTLS to track 2,500 mobile medical devices across their
                  500-bed facility. The system reduced equipment search time by 78% and improved utilization rates by
                  26%, allowing them to reduce new equipment purchases by $320,000 annually.
                </p>
                <p className="leading-relaxed">
                  Staff satisfaction scores related to equipment availability increased from 43% to 87% within six
                  months of deployment. The hospital achieved full ROI within 14 months.
                </p>
              </CardContent>
            </Card>
            <Card className="shadow-lg border-0 overflow-hidden hover:shadow-xl transition-shadow">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
                <CardTitle>Manufacturing Tool Tracking</CardTitle>
                <CardDescription className="text-base">Aerospace Components Manufacturer</CardDescription>
              </CardHeader>
              <CardContent className="p-6 space-y-4">
                <p className="leading-relaxed">
                  An aerospace components manufacturer deployed BLE beacons on 1,200 specialized tools across their
                  180,000 sq ft facility. The system integrated with their MES to provide real-time tool location and
                  availability status.
                </p>
                <p className="leading-relaxed">
                  Production delays due to missing tools decreased by 64%, while tool calibration compliance improved to
                  99.8%. The manufacturer estimated annual savings of $450,000 through improved productivity and reduced
                  tool replacement costs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Implementation Considerations - Enhanced with better visual hierarchy */}
        <section className="mb-20 bg-gray-50 p-10 rounded-2xl">
          <h2 className="text-3xl font-semibold mb-10 text-center">Implementation Considerations</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">Infrastructure Requirements</h3>
              <ul className="space-y-3 pl-5 list-disc">
                <li>BLE beacons/tags for tracked assets</li>
                <li>BLE gateways or receivers</li>
                <li>Network infrastructure (typically Wi-Fi or Ethernet)</li>
                <li>Server for data processing (on-premises or cloud)</li>
                <li>Software platform for location management</li>
                <li>Integration middleware for existing systems</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">Deployment Best Practices</h3>
              <ul className="space-y-3 pl-5 list-disc">
                <li>Conduct RF site survey before installation</li>
                <li>Place gateways strategically for optimal coverage</li>
                <li>Configure beacon transmission intervals based on use case</li>
                <li>Implement proper security measures for BLE communications</li>
                <li>Establish battery replacement procedures</li>
                <li>Develop a calibration schedule to maintain accuracy</li>
              </ul>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-blue-700 border-b pb-2">Common Challenges</h3>
              <ul className="space-y-3 pl-5 list-disc">
                <li>Signal interference in dense environments</li>
                <li>Accuracy limitations in complex layouts</li>
                <li>Battery management for large beacon deployments</li>
                <li>Integration with legacy systems</li>
                <li>User adoption and training</li>
                <li>Maintaining system performance over time</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Comparison - Enhanced with better table styling */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Technology Comparison</h2>
          <div className="overflow-x-auto bg-white rounded-xl shadow-md">
            <table className="min-w-full border-collapse">
              <thead>
                <tr className="bg-blue-50">
                  <th className="border border-gray-200 px-6 py-4 text-left font-semibold">Feature</th>
                  <th className="border border-gray-200 px-6 py-4 text-left font-semibold">BLE</th>
                  <th className="border border-gray-200 px-6 py-4 text-left font-semibold">UWB</th>
                  <th className="border border-gray-200 px-6 py-4 text-left font-semibold">Wi-Fi</th>
                  <th className="border border-gray-200 px-6 py-4 text-left font-semibold">RFID</th>
                </tr>
              </thead>
              <tbody>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-200 px-6 py-4 font-medium">Typical Accuracy</td>
                  <td className="border border-gray-200 px-6 py-4">1-3 meters</td>
                  <td className="border border-gray-200 px-6 py-4">10-30 cm</td>
                  <td className="border border-gray-200 px-6 py-4">3-5 meters</td>
                  <td className="border border-gray-200 px-6 py-4">Proximity to reader</td>
                </tr>
                <tr className="odd:bg-white">
                  <td className="border border-gray-200 px-6 py-4 font-medium">Range</td>
                  <td className="border border-gray-200 px-6 py-4">10-30 meters</td>
                  <td className="border border-gray-200 px-6 py-4">10-50 meters</td>
                  <td className="border border-gray-200 px-6 py-4">30-50 meters</td>
                  <td className="border border-gray-200 px-6 py-4">1-10 meters</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-200 px-6 py-4 font-medium">Power Consumption</td>
                  <td className="border border-gray-200 px-6 py-4">Very Low</td>
                  <td className="border border-gray-200 px-6 py-4">Medium</td>
                  <td className="border border-gray-200 px-6 py-4">High</td>
                  <td className="border border-gray-200 px-6 py-4">Passive/Low</td>
                </tr>
                <tr className="odd:bg-white">
                  <td className="border border-gray-200 px-6 py-4 font-medium">Infrastructure Cost</td>
                  <td className="border border-gray-200 px-6 py-4">Low-Medium</td>
                  <td className="border border-gray-200 px-6 py-4">High</td>
                  <td className="border border-gray-200 px-6 py-4">Medium</td>
                  <td className="border border-gray-200 px-6 py-4">Medium</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-200 px-6 py-4 font-medium">Tag Cost</td>
                  <td className="border border-gray-200 px-6 py-4">$5-15</td>
                  <td className="border border-gray-200 px-6 py-4">$15-50</td>
                  <td className="border border-gray-200 px-6 py-4">$10-30</td>
                  <td className="border border-gray-200 px-6 py-4">$0.10-20</td>
                </tr>
                <tr className="odd:bg-white">
                  <td className="border border-gray-200 px-6 py-4 font-medium">Battery Life</td>
                  <td className="border border-gray-200 px-6 py-4">6 months - 5 years</td>
                  <td className="border border-gray-200 px-6 py-4">6 months - 3 years</td>
                  <td className="border border-gray-200 px-6 py-4">3 months - 2 years</td>
                  <td className="border border-gray-200 px-6 py-4">Passive/1-5 years</td>
                </tr>
                <tr className="even:bg-gray-50">
                  <td className="border border-gray-200 px-6 py-4 font-medium">Smartphone Compatible</td>
                  <td className="border border-gray-200 px-6 py-4">Yes</td>
                  <td className="border border-gray-200 px-6 py-4">Limited</td>
                  <td className="border border-gray-200 px-6 py-4">Yes</td>
                  <td className="border border-gray-200 px-6 py-4">Limited (NFC)</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="text-center mt-8">
            <Link href="/rtls-digital-twin/technologies" className="text-primary hover:underline text-lg font-medium">
              View all RTLS technologies →
            </Link>
          </div>
        </section>

        {/* Future Trends - Enhanced with better visual styling */}
        <section className="mb-20">
          <h2 className="text-3xl font-semibold mb-8 text-center">Future Trends</h2>
          <div className="grid md:grid-cols-2 gap-10">
            <Card className="shadow-md border-0 overflow-hidden bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="border-b">
                <CardTitle>Technological Advancements</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0 flex items-center justify-center text-xs mt-1">
                      →
                    </span>
                    <div>
                      <span className="font-medium">BLE Direction Finding:</span> Wider adoption of Angle of Arrival and
                      Angle of Departure techniques for sub-meter accuracy
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0 flex items-center justify-center text-xs mt-1">
                      →
                    </span>
                    <div>
                      <span className="font-medium">Energy Harvesting:</span> Development of beacons that can operate
                      without batteries by harvesting energy from ambient sources
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0 flex items-center justify-center text-xs mt-1">
                      →
                    </span>
                    <div>
                      <span className="font-medium">Mesh Networking:</span> Enhanced BLE mesh capabilities for improved
                      coverage and reliability in complex environments
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0 flex items-center justify-center text-xs mt-1">
                      →
                    </span>
                    <div>
                      <span className="font-medium">AI Integration:</span> Machine learning algorithms to improve
                      positioning accuracy and predict movement patterns
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="shadow-md border-0 overflow-hidden bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="border-b">
                <CardTitle>Market Evolution</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <ul className="space-y-4">
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0 flex items-center justify-center text-xs mt-1">
                      →
                    </span>
                    <div>
                      <span className="font-medium">Hybrid Solutions:</span> Increasing integration of BLE with other
                      technologies like UWB and Wi-Fi for comprehensive coverage
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0 flex items-center justify-center text-xs mt-1">
                      →
                    </span>
                    <div>
                      <span className="font-medium">Industry Standardization:</span> Development of more robust
                      standards for interoperability between different BLE RTLS systems
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0 flex items-center justify-center text-xs mt-1">
                      →
                    </span>
                    <div>
                      <span className="font-medium">Miniaturization:</span> Smaller, more durable beacons for new use
                      cases and applications
                    </div>
                  </li>
                  <li className="flex items-start">
                    <span className="inline-block w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0 flex items-center justify-center text-xs mt-1">
                      →
                    </span>
                    <div>
                      <span className="font-medium">Privacy-Focused Design:</span> Enhanced security and privacy
                      features to address growing concerns about location tracking
                    </div>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learn More - Updated with real resource links and new CTA text */}
        <section className="mt-20">
          <Card className="shadow-lg border-0 overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-600 to-blue-700 text-white">
              <CardTitle className="text-2xl">Learn More About BLE Technology</CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-10">
                <div>
                  <h3 className="text-xl font-semibold mb-6">Related Resources</h3>
                  <ul className="space-y-4">
                    {bleRelatedArticles.map((article) => (
                      <li key={article.slug} className="flex items-start">
                        <span className="inline-block w-5 h-5 rounded-full bg-blue-100 text-blue-600 mr-3 flex-shrink-0 flex items-center justify-center text-xs mt-1">
                          →
                        </span>
                        <Link href={`/resources/${article.slug}`} className="text-primary hover:underline">
                          {article.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold mb-4">Expert Guidance</h3>
                  <p className="mb-6 leading-relaxed">
                    Need unbiased advice to determine if BLE is the right technology for your RTLS project?
                  </p>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
                  >
                    Ask an Alliance member
                  </Link>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </article>
    </div>
  )
}
