"use client"

import { useEffect } from "react"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Factory, Hospital, ShoppingBag, Truck } from "lucide-react"

export default function DeadReckoningTechnologyClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">Dead Reckoning Technology</h1>
          <p className="text-base text-muted-foreground">
            Dead Reckoning is a positioning technique that calculates current location by using a previously determined
            position and advancing it based on known or estimated speeds over elapsed time.
          </p>
        </header>

        {/* Overview and Key Specifications */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                Dead Reckoning determines position by calculating displacement from a known starting point using
                velocity, time, and direction data. In RTLS applications, it's often combined with periodic corrections
                from fixed reference points to prevent cumulative errors.
              </p>
              <p>
                This approach is particularly valuable in environments where continuous tracking is essential but full
                infrastructure coverage is impractical or cost-prohibitive, such as multi-floor buildings, underground
                facilities, or large open spaces.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Sensors:</span>
                  <span>IMU (accelerometer, gyroscope, magnetometer)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Accuracy:</span>
                  <span>1-5% of distance traveled (standalone)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Range:</span>
                  <span>Unlimited (degrades with distance)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Update Rate:</span>
                  <span>10-100 Hz</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Power Consumption:</span>
                  <span>Medium (sensor dependent)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Infrastructure:</span>
                  <span>Minimal (sparse anchors for correction)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How Dead Reckoning Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How Dead Reckoning Works for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Inertial Navigation</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Dead reckoning uses inertial measurement units (IMUs) containing accelerometers, gyroscopes, and
                  magnetometers to detect movement. Accelerometers measure linear acceleration, gyroscopes track
                  rotational movement, and magnetometers provide heading information. These measurements are integrated
                  over time to calculate displacement from a known starting point.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Hybrid Correction</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  To prevent cumulative errors, dead reckoning in RTLS is typically combined with periodic position
                  corrections from fixed reference points (anchors). When a tag or device comes within range of an
                  anchor, its position is recalibrated. This hybrid approach maintains continuous tracking while
                  limiting error growth.
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
                  <li>Continuous positioning without constant infrastructure coverage</li>
                  <li>Reduced infrastructure requirements and associated costs</li>
                  <li>Functions in challenging RF environments (tunnels, metal structures)</li>
                  <li>Effective for tracking across multiple floors and elevations</li>
                  <li>High update rates for real-time movement tracking</li>
                  <li>Privacy-preserving (no constant external signals required)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Cumulative error growth without periodic corrections</li>
                  <li>Sensor quality significantly impacts accuracy</li>
                  <li>Requires sophisticated algorithms for optimal performance</li>
                  <li>Motion pattern sensitivity affects accuracy</li>
                  <li>Initial position and orientation must be known</li>
                  <li>Higher computational requirements than simple proximity systems</li>
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
              <TabsTrigger value="logistics" className="flex flex-col py-2 h-auto">
                <Truck className="h-5 w-5 mb-1" />
                Logistics
              </TabsTrigger>
              <TabsTrigger value="healthcare" className="flex flex-col py-2 h-auto">
                <Hospital className="h-5 w-5 mb-1" />
                Healthcare
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
                    Dead reckoning enhances tracking in complex industrial environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In manufacturing facilities, dead reckoning combined with sparse RTLS anchors enables continuous
                    tracking of assets, vehicles, and personnel across large factory floors with minimal infrastructure.
                    This approach is particularly valuable for tracking forklifts and automated guided vehicles (AGVs)
                    in environments with metal structures and changing layouts.
                  </p>
                  <p>
                    The technology helps optimize material flow, reduce search times for critical tools, and improve
                    safety by maintaining position awareness even in areas with poor signal coverage.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Forklift and AGV tracking in large facilities</li>
                        <li>Tool and equipment positioning</li>
                        <li>Worker safety in signal-challenged areas</li>
                        <li>Material flow optimization</li>
                        <li>Multi-level factory tracking</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Continuous tracking with minimal infrastructure</li>
                        <li>Reduced search time for critical assets</li>
                        <li>Improved safety in RF-challenged environments</li>
                        <li>Enhanced process visibility</li>
                        <li>Lower total cost of ownership</li>
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
                    Dead reckoning provides continuous tracking in complex warehouse environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In logistics and warehousing, dead reckoning with sparse anchor correction enables efficient
                    tracking of forklifts, pallet jacks, and other material handling equipment across large facilities.
                    The technology maintains positioning even when moving between zones with different coverage levels.
                  </p>
                  <p>
                    This approach is particularly valuable for multi-level warehouses and distribution centers where
                    continuous vertical tracking is essential. It helps optimize picking routes, reduce congestion, and
                    improve overall operational efficiency.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Material handling equipment tracking</li>
                        <li>Multi-level warehouse operations</li>
                        <li>Yard management with indoor/outdoor transitions</li>
                        <li>Cold storage and RF-challenging environments</li>
                        <li>High-bay warehouse navigation</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Seamless indoor/outdoor tracking</li>
                        <li>Reduced infrastructure costs</li>
                        <li>Improved vertical tracking between levels</li>
                        <li>Enhanced operational visibility</li>
                        <li>Optimized resource utilization</li>
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
                    Dead reckoning enhances staff and equipment tracking across healthcare facilities.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In healthcare environments, dead reckoning with strategic anchor placement enables continuous
                    tracking of staff, patients, and mobile equipment across complex hospital layouts. This approach is
                    particularly valuable for maintaining positioning when moving between floors or in areas with
                    limited infrastructure coverage.
                  </p>
                  <p>
                    The technology helps improve response times, optimize workflow, and ensure critical equipment can be
                    located quickly, even in areas with challenging RF conditions like imaging suites or basement
                    levels.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Staff duress and emergency response</li>
                        <li>Mobile medical equipment tracking</li>
                        <li>Patient flow and journey mapping</li>
                        <li>Multi-floor hospital navigation</li>
                        <li>Tracking in RF-challenging areas (MRI suites)</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Continuous staff safety monitoring</li>
                        <li>Reduced equipment search time</li>
                        <li>Improved emergency response</li>
                        <li>Enhanced patient experience</li>
                        <li>Lower infrastructure maintenance costs</li>
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
                    Dead reckoning enables detailed customer journey analysis with minimal infrastructure.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In retail environments, dead reckoning with strategic beacon placement allows detailed tracking of
                    shopping carts, staff, and assets with minimal infrastructure. This approach provides continuous
                    customer journey mapping even in areas with limited beacon coverage.
                  </p>
                  <p>
                    The technology helps retailers understand shopper behavior, optimize store layouts, and improve
                    staff responsiveness while maintaining a non-intrusive customer experience and controlling
                    deployment costs.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Shopping cart path analysis</li>
                        <li>Staff activity and responsiveness tracking</li>
                        <li>Multi-floor retail navigation</li>
                        <li>Stockroom to sales floor movement</li>
                        <li>Customer dwell time analysis</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Detailed customer journey insights</li>
                        <li>Reduced infrastructure costs</li>
                        <li>Improved staff efficiency</li>
                        <li>Enhanced store layout optimization</li>
                        <li>Better conversion rate analysis</li>
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
                    Dead reckoning enhances occupant tracking across complex building layouts.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In commercial buildings, dead reckoning with strategic anchor placement enables continuous tracking
                    of occupants, visitors, and assets across multi-floor environments. This approach is particularly
                    valuable for maintaining positioning in stairwells, elevators, and areas with limited infrastructure
                    coverage.
                  </p>
                  <p>
                    The technology helps improve emergency response, optimize space utilization, and enhance building
                    security while minimizing infrastructure deployment and maintenance costs.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Emergency evacuation and mustering</li>
                        <li>Visitor wayfinding and navigation</li>
                        <li>Space utilization analysis</li>
                        <li>Security personnel tracking</li>
                        <li>Asset movement monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved emergency response</li>
                        <li>Enhanced occupant experience</li>
                        <li>Optimized space utilization</li>
                        <li>Reduced infrastructure costs</li>
                        <li>Better vertical movement tracking</li>
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
                <CardTitle>Multi-Floor Hospital Tracking</CardTitle>
                <CardDescription>Regional Medical Center</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A 450-bed hospital implemented a hybrid dead reckoning system with strategic UWB anchors to track
                  3,000+ mobile medical devices across 8 floors. The system maintained continuous tracking in elevators,
                  stairwells, and RF-challenging areas like MRI suites.
                </p>
                <p>
                  Equipment search time decreased by 73%, while infrastructure costs were 42% lower than a traditional
                  full-coverage RTLS. Staff reported higher satisfaction with equipment availability, and the hospital
                  achieved ROI within 11 months through improved asset utilization.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Warehouse Vehicle Tracking</CardTitle>
                <CardDescription>Global Distribution Company</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A distribution company deployed dead reckoning with sparse BLE anchors to track 75 forklifts across a
                  320,000 sq ft multi-level facility. The system maintained continuous positioning during vertical
                  movement between floors and in areas with metal racking.
                </p>
                <p>
                  Operational efficiency improved by 18% through optimized routing and resource allocation. The company
                  reduced infrastructure costs by 65% compared to traditional RTLS while achieving 2-3 meter accuracy
                  throughout the facility. The system integrated with their warehouse management system for real-time
                  optimization.
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
                  <li>Inertial measurement units (IMUs) in tracked devices</li>
                  <li>Strategic anchor placement at key locations</li>
                  <li>Calibration zones for initial positioning</li>
                  <li>Server infrastructure for data processing</li>
                  <li>Network connectivity for anchor communication</li>
                  <li>Software platform with sensor fusion capabilities</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Deployment Best Practices</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Conduct thorough site survey for anchor placement</li>
                  <li>Place anchors at decision points and high-traffic areas</li>
                  <li>Implement regular calibration procedures</li>
                  <li>Use map constraints to improve accuracy</li>
                  <li>Select appropriate motion models for tracked objects</li>
                  <li>Tune algorithms for specific environment conditions</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Common Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Sensor drift between anchor corrections</li>
                  <li>Initial position acquisition reliability</li>
                  <li>Algorithm tuning for different movement patterns</li>
                  <li>Integration with existing systems</li>
                  <li>Battery life management for mobile devices</li>
                  <li>Maintaining accuracy during rapid movements</li>
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
                  <th className="border px-4 py-2 text-left font-semibold">Dead Reckoning + Anchors</th>
                  <th className="border px-4 py-2 text-left font-semibold">UWB</th>
                  <th className="border px-4 py-2 text-left font-semibold">BLE</th>
                  <th className="border px-4 py-2 text-left font-semibold">Wi-Fi</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Infrastructure Density</td>
                  <td className="border px-4 py-2">Low (sparse anchors)</td>
                  <td className="border px-4 py-2">High (dense anchors)</td>
                  <td className="border px-4 py-2">Medium-High</td>
                  <td className="border px-4 py-2">Low-Medium</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Typical Accuracy</td>
                  <td className="border px-4 py-2">1-3m (varies with time since correction)</td>
                  <td className="border px-4 py-2">10-30cm</td>
                  <td className="border px-4 py-2">1-3m</td>
                  <td className="border px-4 py-2">3-5m</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Continuous Tracking</td>
                  <td className="border px-4 py-2">Yes (between anchors)</td>
                  <td className="border px-4 py-2">Only in coverage areas</td>
                  <td className="border px-4 py-2">Only in coverage areas</td>
                  <td className="border px-4 py-2">Only in coverage areas</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Power Consumption</td>
                  <td className="border px-4 py-2">Medium-High</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Low</td>
                  <td className="border px-4 py-2">High</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Infrastructure Cost</td>
                  <td className="border px-4 py-2">Low-Medium</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Low (if existing)</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Multi-Floor Tracking</td>
                  <td className="border px-4 py-2">Excellent</td>
                  <td className="border px-4 py-2">Limited</td>
                  <td className="border px-4 py-2">Limited</td>
                  <td className="border px-4 py-2">Limited</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">RF Interference Resilience</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Low</td>
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
                    <span className="font-medium">MEMS Sensor Improvements:</span> Higher quality, lower cost inertial
                    sensors reducing drift and extending tracking duration
                  </li>
                  <li>
                    <span className="font-medium">AI-Enhanced Motion Models:</span> Machine learning algorithms
                    improving dead reckoning accuracy for various movement patterns
                  </li>
                  <li>
                    <span className="font-medium">Opportunistic Anchoring:</span> Using dynamic objects with known
                    positions as temporary anchors for correction
                  </li>
                  <li>
                    <span className="font-medium">Edge Computing Integration:</span> More sophisticated algorithms
                    running on low-power edge devices for better real-time performance
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
                    <span className="font-medium">Hybrid Solutions:</span> Increasing integration of dead reckoning with
                    other technologies for comprehensive coverage
                  </li>
                  <li>
                    <span className="font-medium">Collaborative Positioning:</span> Multiple devices sharing position
                    information to improve collective accuracy
                  </li>
                  <li>
                    <span className="font-medium">Context-Aware Algorithms:</span> Using environmental context and
                    activity recognition to enhance positioning accuracy
                  </li>
                  <li>
                    <span className="font-medium">Standardization:</span> Development of industry standards for dead
                    reckoning integration with RTLS systems
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learn More */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Learn More About Dead Reckoning Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/resources/indoor-outdoor-tracking-seamless-positioning-solutions"
                    className="text-primary hover:underline"
                  >
                    Indoor-Outdoor Tracking: Seamless Positioning Solutions
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
                    href="/resources/sensor-fusion-multi-technology-rtls-implementation-guide"
                    className="text-primary hover:underline"
                  >
                    Sensor Fusion: Multi-Technology RTLS Implementation Guide
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
                    href="/resources/rtls-infrastructure-planning-optimization-strategies"
                    className="text-primary hover:underline"
                  >
                    RTLS Infrastructure Planning: Optimization Strategies
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Unbiased Guidance</h3>
              <p className="mb-4">
                Need help determining if Dead Reckoning is the right technology for your RTLS project?
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
