"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Factory, Hospital, ShoppingBag, Truck } from "lucide-react"
import Link from "next/link"

export default function UltrasoundTechnologyClientPage() {
  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Ultrasound Technology for RTLS</h1>
          <p className="text-base text-muted-foreground">
            Ultrasound positioning systems leverage high-frequency sound waves beyond human hearing to deliver
            centimeter-level accuracy for indoor positioning.
          </p>
        </header>

        {/* Overview and Key Specifications */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                Ultrasound positioning is a technology that uses sound waves at frequencies above the range of human
                hearing (typically 20 kHz to 100 kHz) to determine the location of objects or people in indoor
                environments. The technology relies on the measurement of time-of-flight or phase differences of
                ultrasonic signals between transmitters and receivers to calculate precise positions.
              </p>
              <p>
                For RTLS applications, ultrasound technology typically achieves 1-10 centimeter accuracy using
                time-of-flight measurements, making it one of the most precise indoor positioning technologies
                available.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Frequency:</span>
                  <span>20-100 kHz (above human hearing)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Range:</span>
                  <span>5-15 meters (indoor)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Data Rate:</span>
                  <span>Low (typically used for positioning only)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Typical Accuracy:</span>
                  <span>1-10 centimeters</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Power Consumption:</span>
                  <span>Low to medium</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Battery Life:</span>
                  <span>6 months to 3 years (depending on configuration)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How Ultrasound Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How Ultrasound Works for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Time-of-Flight Measurement</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Ultrasonic transmitters (beacons or tags) emit high-frequency sound pulses that are detected by
                  receivers installed in the environment. By measuring the time it takes for the sound to travel from
                  transmitter to receiver, the system calculates the distance between them. Using multiple receivers,
                  multilateration algorithms determine the transmitter's precise position.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">RF Synchronization</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Many ultrasound systems use RF signals for synchronization between transmitters and receivers. The RF
                  signal travels at the speed of light, while the ultrasound travels at the speed of sound
                  (approximately 343 m/s). This significant speed difference allows for precise distance calculation by
                  measuring the time difference between receiving the RF and ultrasonic signals.
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
                  <li>High accuracy (typically 1-10 cm)</li>
                  <li>Natural room containment as sound doesn't penetrate walls</li>
                  <li>Immunity to RF interference</li>
                  <li>Low power requirements for transmitters</li>
                  <li>Privacy advantages due to room containment</li>
                  <li>Not affected by lighting conditions</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Environmental sensitivity (temperature, humidity, air currents)</li>
                  <li>Line-of-sight requirements between transmitters and receivers</li>
                  <li>Susceptibility to acoustic interference in noisy environments</li>
                  <li>Limited range (typically 5-15 meters)</li>
                  <li>Requires dense infrastructure deployment</li>
                  <li>Potential issues with reflections in complex environments</li>
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
              <TabsTrigger value="manufacturing" className="flex flex-col py-2 h-auto">
                <Factory className="h-5 w-5 mb-1" />
                Manufacturing
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
            <TabsContent value="healthcare" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Healthcare Applications</CardTitle>
                  <CardDescription>
                    Ultrasound technology enables precise tracking in healthcare environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In healthcare settings, ultrasound RTLS provides centimeter-level accuracy for tracking critical
                    medical equipment, staff, and patients. The technology's natural room containment properties ensure
                    that tracking is limited to specific areas, addressing privacy concerns.
                  </p>
                  <p>
                    Ultrasound is particularly valuable for applications requiring precise positioning, such as surgical
                    instrument tracking, patient flow management in operating rooms, and monitoring hand hygiene
                    compliance at specific stations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Surgical instrument tracking</li>
                        <li>High-value medical device location</li>
                        <li>Patient flow in critical care areas</li>
                        <li>Staff workflow optimization</li>
                        <li>Hand hygiene compliance monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Centimeter-level accuracy for critical assets</li>
                        <li>Room-level containment for privacy</li>
                        <li>Reduced search time for equipment</li>
                        <li>Improved workflow efficiency</li>
                        <li>Enhanced patient safety</li>
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
                    Ultrasound technology provides precision tracking in manufacturing environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Manufacturing facilities use ultrasound RTLS for high-precision tool tracking, worker safety zones,
                    and robotic positioning. The technology's immunity to RF interference makes it ideal for
                    environments with heavy machinery and electromagnetic noise.
                  </p>
                  <p>
                    Ultrasound systems can track assets with centimeter-level accuracy, enabling precise process control
                    and quality assurance in assembly lines. The technology also supports automated tool calibration
                    verification and worker safety applications.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Precision tool tracking</li>
                        <li>Worker safety zone monitoring</li>
                        <li>Robotic positioning</li>
                        <li>Assembly line optimization</li>
                        <li>Quality control process tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>High precision in noisy RF environments</li>
                        <li>Improved tool utilization</li>
                        <li>Enhanced worker safety</li>
                        <li>Reduced production errors</li>
                        <li>Better process control</li>
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
                    Ultrasound technology enables precise asset tracking in logistics operations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In logistics and warehouse environments, ultrasound RTLS provides accurate tracking of high-value
                    items, automated guided vehicles (AGVs), and personnel. The technology's precision enables efficient
                    space utilization and optimized picking routes.
                  </p>
                  <p>
                    Ultrasound systems are particularly valuable for applications requiring zone-level containment, such
                    as secure storage areas or hazardous material zones. The technology's immunity to RF interference
                    ensures reliable operation in environments with metal shelving and machinery.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>High-value inventory tracking</li>
                        <li>AGV navigation and control</li>
                        <li>Secure zone access monitoring</li>
                        <li>Picking route optimization</li>
                        <li>Personnel safety in automated environments</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Precise location of critical assets</li>
                        <li>Improved space utilization</li>
                        <li>Enhanced security for high-value items</li>
                        <li>Reduced picking errors</li>
                        <li>Better coordination between humans and AGVs</li>
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
                    Ultrasound technology provides precise positioning for retail environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Retail environments use ultrasound RTLS for high-precision customer analytics, inventory management,
                    and interactive shopping experiences. The technology's room containment properties enable
                    zone-specific promotions and customer engagement.
                  </p>
                  <p>
                    Ultrasound systems can track shopping carts, high-value merchandise, and staff with centimeter-level
                    accuracy. This enables detailed analysis of customer behavior, optimized store layouts, and enhanced
                    security for premium products.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Premium product security</li>
                        <li>Customer journey analysis</li>
                        <li>Interactive product displays</li>
                        <li>Staff allocation optimization</li>
                        <li>Zone-specific promotions</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Precise customer behavior insights</li>
                        <li>Reduced shrinkage for high-value items</li>
                        <li>Enhanced shopping experience</li>
                        <li>Improved staff efficiency</li>
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
                    Ultrasound technology enables precise positioning in commercial spaces.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Commercial buildings implement ultrasound RTLS for precise space utilization analysis, access
                    control, and occupancy monitoring. The technology's natural room containment properties make it
                    ideal for monitoring specific zones without cross-boundary detection.
                  </p>
                  <p>
                    Ultrasound systems provide accurate data for meeting room utilization, workspace optimization, and
                    security applications. The technology can also support interactive wayfinding and personalized
                    workspace settings in smart buildings.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Meeting room utilization tracking</li>
                        <li>Secure area access monitoring</li>
                        <li>Workspace optimization</li>
                        <li>Interactive wayfinding</li>
                        <li>Personalized workspace settings</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Accurate space utilization data</li>
                        <li>Enhanced security for sensitive areas</li>
                        <li>Improved workplace efficiency</li>
                        <li>Better facility management</li>
                        <li>Enhanced user experience in smart buildings</li>
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
                <CardTitle>Surgical Instrument Tracking</CardTitle>
                <CardDescription>University Medical Center</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A major university medical center implemented an ultrasound-based RTLS to track surgical instruments
                  across 20 operating rooms. The system provided 3-5 cm accuracy, enabling real-time location of
                  critical instruments during procedures and ensuring complete instrument counts before and after
                  surgeries.
                </p>
                <p>
                  The implementation reduced instrument search time by 93% and virtually eliminated retained surgical
                  item incidents. The hospital reported annual savings of $425,000 through improved workflow efficiency
                  and reduced procedure delays, achieving ROI within 11 months.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Precision Manufacturing Tool Tracking</CardTitle>
                <CardDescription>Aerospace Components Manufacturer</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  An aerospace components manufacturer deployed an ultrasound RTLS to track 800 precision tools in their
                  quality control department. The system provided 2-3 cm positioning accuracy, enabling automated tool
                  verification for specific workstations and ensuring calibrated tools were used for critical
                  measurements.
                </p>
                <p>
                  Quality defects related to improper tool usage decreased by 87%, while tool search time was reduced by
                  76%. The manufacturer estimated annual savings of $380,000 through improved quality control and
                  reduced rework, with complete ROI achieved in 14 months.
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
                  <li>Ultrasonic transmitters/receivers</li>
                  <li>RF synchronization modules (optional)</li>
                  <li>Mounting hardware for receivers</li>
                  <li>Network infrastructure (typically Ethernet)</li>
                  <li>Server for data processing</li>
                  <li>Positioning software platform</li>
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
                  <li>Conduct acoustic site survey before installation</li>
                  <li>Place receivers for optimal coverage and line-of-sight</li>
                  <li>Account for temperature variations in calibration</li>
                  <li>Implement regular system calibration procedures</li>
                  <li>Consider environmental noise sources</li>
                  <li>Develop battery replacement schedule for tags</li>
                  <li>Test system performance in various conditions</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Common Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Environmental factors affecting sound propagation</li>
                  <li>Line-of-sight requirements between tags and receivers</li>
                  <li>Acoustic interference in noisy environments</li>
                  <li>Reflections and multipath effects</li>
                  <li>Temperature variations affecting calibration</li>
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
                  <th className="border px-4 py-2 text-left font-semibold">Ultrasound</th>
                  <th className="border px-4 py-2 text-left font-semibold">UWB</th>
                  <th className="border px-4 py-2 text-left font-semibold">BLE</th>
                  <th className="border px-4 py-2 text-left font-semibold">Wi-Fi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Typical Accuracy</td>
                  <td className="border px-4 py-2">1-10 cm</td>
                  <td className="border px-4 py-2">10-30 cm</td>
                  <td className="border px-4 py-2">1-3 m</td>
                  <td className="border px-4 py-2">3-5 m</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Range</td>
                  <td className="border px-4 py-2">5-15 m</td>
                  <td className="border px-4 py-2">10-50 m</td>
                  <td className="border px-4 py-2">10-30 m</td>
                  <td className="border px-4 py-2">30-50 m</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Power Consumption</td>
                  <td className="border px-4 py-2">Low-Medium</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Very Low</td>
                  <td className="border px-4 py-2">High</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Infrastructure Cost</td>
                  <td className="border px-4 py-2">Medium-High</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Low-Medium</td>
                  <td className="border px-4 py-2">Medium</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Tag Cost</td>
                  <td className="border px-4 py-2">$15-40</td>
                  <td className="border px-4 py-2">$15-50</td>
                  <td className="border px-4 py-2">$5-15</td>
                  <td className="border px-4 py-2">$10-30</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Battery Life</td>
                  <td className="border px-4 py-2">6 months - 3 years</td>
                  <td className="border px-4 py-2">6 months - 3 years</td>
                  <td className="border px-4 py-2">6 months - 5 years</td>
                  <td className="border px-4 py-2">3 months - 2 years</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Room Containment</td>
                  <td className="border px-4 py-2">Excellent</td>
                  <td className="border px-4 py-2">Poor</td>
                  <td className="border px-4 py-2">Poor</td>
                  <td className="border px-4 py-2">Poor</td>
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
                    <span className="font-medium">Miniaturization:</span> Smaller, more energy-efficient ultrasonic
                    transducers enabling new form factors and applications
                  </li>
                  <li>
                    <span className="font-medium">Advanced Signal Processing:</span> Machine learning algorithms
                    improving accuracy and resilience to environmental interference
                  </li>
                  <li>
                    <span className="font-medium">Smartphone Integration:</span> Leveraging standard smartphone
                    microphones for ultrasonic positioning without specialized hardware
                  </li>
                  <li>
                    <span className="font-medium">Self-Calibrating Systems:</span> Adaptive systems that automatically
                    adjust for environmental changes and optimize performance
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
                    <span className="font-medium">Hybrid Solutions:</span> Increasing integration of ultrasound with
                    other technologies like UWB and BLE for comprehensive coverage
                  </li>
                  <li>
                    <span className="font-medium">Industry Standardization:</span> Development of more robust standards
                    for interoperability between different ultrasound RTLS systems
                  </li>
                  <li>
                    <span className="font-medium">Mesh Architectures:</span> Distributed ultrasonic networks with
                    peer-to-peer capabilities for improved coverage and resilience
                  </li>
                  <li>
                    <span className="font-medium">Specialized Applications:</span> Growth in niche markets requiring
                    centimeter-level accuracy, such as surgical robotics and precision manufacturing
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learn More */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Learn More About Ultrasound Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
              <ul className="space-y-2">
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
                    href="/resources/indoor-positioning-technologies-comparative-analysis"
                    className="text-primary hover:underline"
                  >
                    Indoor Positioning Technologies: Comparative Analysis
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/precision-rtls-sub-meter-accuracy-requirements"
                    className="text-primary hover:underline"
                  >
                    Precision RTLS: When Sub-Meter Accuracy is Required
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/healthcare-asset-tracking-1-2m-savings-rtls"
                    className="text-primary hover:underline"
                  >
                    Healthcare Asset Tracking: $1.2M Savings with RTLS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/rtls-sensor-fusion-multi-technology-approach"
                    className="text-primary hover:underline"
                  >
                    RTLS Sensor Fusion: A Multi-Technology Approach
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Unbiased Guidance</h3>
              <p className="mb-4">Need help determining if ultrasound is the right technology for your RTLS project?</p>
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
