"use client"
import Link from "next/link"
import { Ruler, Radio, Building2, Factory, Truck } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useScrollToTop } from "@/hooks/useScrollToTop"
import { getTechnologyRelatedArticles } from "@/lib/article-data"

export default function RTKGPSTechnologyClientPage() {
  useScrollToTop()

  // Get RTK/GPS-related articles for the related resources section
  const rtkGpsRelatedArticles = getTechnologyRelatedArticles("gps").slice(0, 5)

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">RTK-GPS / DGPS Technology</h1>
          <p className="text-base text-muted-foreground">
            Real-Time Kinematic (RTK) GPS and Differential GPS (DGPS) technologies deliver centimeter-level positioning
            accuracy for high-precision outdoor RTLS applications through advanced correction techniques.
          </p>
        </header>

        {/* Overview and Key Specifications */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                RTK-GPS and DGPS are enhancement technologies that significantly improve the accuracy of standard GNSS
                positioning by using correction data from reference stations. RTK uses carrier-phase measurements to
                achieve centimeter-level accuracy, while DGPS uses pseudorange corrections for sub-meter accuracy.
              </p>
              <p>
                These technologies are essential for applications requiring precise outdoor positioning, such as
                precision agriculture, surveying, construction, and autonomous vehicle navigation, where standard GPS
                accuracy is insufficient.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Accuracy:</span>
                  <span>1-2 cm (RTK), 0.5-2 m (DGPS)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Range:</span>
                  <span>10-20 km from base station (RTK)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Update Rate:</span>
                  <span>1-20 Hz typical</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Correction Method:</span>
                  <span>Carrier phase (RTK), Pseudorange (DGPS)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Power Consumption:</span>
                  <span>0.5-2 W (receiver)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Environment:</span>
                  <span>Outdoor use only, clear sky view required</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How RTK-GPS Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How RTK-GPS and DGPS Work</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">RTK-GPS Positioning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  RTK-GPS achieves centimeter-level accuracy through a sophisticated process involving a base station at
                  a known location and a rover receiver. The base station calculates the difference between measured and
                  known position, then transmits correction data to the rover in real-time. The rover applies these
                  corrections and resolves carrier phase ambiguities to achieve precise positioning.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">DGPS Positioning</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  DGPS improves standard GPS accuracy through a network of precisely surveyed reference stations. Each
                  station compares its known position with GPS-derived position to calculate errors, then generates
                  correction messages for satellite pseudoranges. These corrections are broadcast to user receivers,
                  which apply them to their own measurements for sub-meter to meter-level accuracy.
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
                  <li>Exceptional accuracy (centimeter-level for RTK)</li>
                  <li>Real-time operation with instant corrections</li>
                  <li>Reliable performance with proper setup</li>
                  <li>Wide coverage through commercial correction networks</li>
                  <li>Multi-constellation support (GPS, GLONASS, Galileo, BeiDou)</li>
                  <li>No line-of-sight requirements between tracked objects</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Ineffective indoors or under heavy canopy</li>
                  <li>RTK accuracy degrades beyond 10-20 km from base station</li>
                  <li>Higher equipment costs and potential subscription fees</li>
                  <li>Requires reliable data connection for correction transmission</li>
                  <li>Initialization time needed to achieve fixed solution</li>
                  <li>Susceptible to multipath errors in urban environments</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Industry Applications */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
          <Tabs defaultValue="agriculture" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto mb-4">
              <TabsTrigger value="agriculture" className="flex flex-col py-2 h-auto">
                <Factory className="h-5 w-5 mb-1" />
                Agriculture
              </TabsTrigger>
              <TabsTrigger value="construction" className="flex flex-col py-2 h-auto">
                <Building2 className="h-5 w-5 mb-1" />
                Construction
              </TabsTrigger>
              <TabsTrigger value="surveying" className="flex flex-col py-2 h-auto">
                <Ruler className="h-5 w-5 mb-1" />
                Surveying
              </TabsTrigger>
              <TabsTrigger value="logistics" className="flex flex-col py-2 h-auto">
                <Truck className="h-5 w-5 mb-1" />
                Logistics
              </TabsTrigger>
              <TabsTrigger value="autonomous" className="flex flex-col py-2 h-auto">
                <Radio className="h-5 w-5 mb-1" />
                Autonomous
              </TabsTrigger>
            </TabsList>
            <TabsContent value="agriculture" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Precision Agriculture Applications</CardTitle>
                  <CardDescription>
                    RTK-GPS enables centimeter-level accuracy for advanced farming operations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In precision agriculture, RTK-GPS guides tractors and implements with centimeter-level accuracy,
                    enabling precise planting, spraying, and harvesting operations. This technology allows for automated
                    steering systems that reduce operator fatigue and improve efficiency.
                  </p>
                  <p>
                    RTK-GPS also enables variable rate application of seeds, fertilizers, and pesticides based on
                    precise field mapping, reducing input costs and environmental impact while maximizing yields.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Automated tractor guidance</li>
                        <li>Precision planting and seeding</li>
                        <li>Variable rate application</li>
                        <li>Field mapping and boundary surveying</li>
                        <li>Yield monitoring with precise positioning</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduced input costs (5-15% typical)</li>
                        <li>Minimized overlap and skips (up to 90%)</li>
                        <li>Improved yield through precise placement</li>
                        <li>Extended operating hours (low visibility conditions)</li>
                        <li>Reduced operator fatigue and error</li>
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
                    RTK-GPS enables precise machine control and site management in construction.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Construction companies use RTK-GPS for machine control systems on excavators, bulldozers, and
                    graders, allowing operators to achieve precise grades and elevations without traditional surveying.
                    This technology significantly reduces rework and material waste.
                  </p>
                  <p>
                    Site managers use RTK-GPS for accurate site surveying, progress monitoring, and volume calculations.
                    The technology integrates with Building Information Modeling (BIM) systems for comprehensive project
                    management.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Machine control for earthmoving equipment</li>
                        <li>Site surveying and layout</li>
                        <li>Volume calculations for excavation</li>
                        <li>As-built documentation</li>
                        <li>Equipment tracking and utilization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduced rework (typically 30-50%)</li>
                        <li>Material savings (10-30%)</li>
                        <li>Faster project completion</li>
                        <li>Improved accuracy in grading</li>
                        <li>Reduced dependency on traditional surveying</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="surveying" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Surveying Applications</CardTitle>
                  <CardDescription>
                    RTK-GPS revolutionizes land surveying with rapid, precise measurements.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Professional surveyors use RTK-GPS for boundary surveys, topographic mapping, and construction
                    staking. The technology allows a single operator to collect hundreds of precise points per day,
                    dramatically increasing productivity compared to traditional methods.
                  </p>
                  <p>
                    RTK-GPS is also used for monitoring structural deformation, establishing control networks, and
                    creating GIS databases with centimeter-level accuracy. Modern systems integrate with mobile devices
                    for seamless data collection and processing.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Boundary and cadastral surveys</li>
                        <li>Topographic mapping</li>
                        <li>Construction staking</li>
                        <li>GIS data collection</li>
                        <li>Infrastructure mapping</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Increased productivity (3-5x traditional methods)</li>
                        <li>Reduced field crew requirements</li>
                        <li>Centimeter-level accuracy</li>
                        <li>Seamless digital data workflow</li>
                        <li>Ability to work in challenging terrain</li>
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
                    RTK-GPS and DGPS enable precise tracking and navigation in logistics operations.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Logistics companies use DGPS for fleet management, route optimization, and precise delivery
                    tracking. The enhanced accuracy allows for better estimated arrival times and more efficient routing
                    decisions.
                  </p>
                  <p>
                    In port operations, RTK-GPS guides container handling equipment for precise placement and stacking.
                    For rail operations, DGPS provides accurate train positioning for safety and scheduling systems.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Fleet tracking and management</li>
                        <li>Port container operations</li>
                        <li>Rail positioning systems</li>
                        <li>Yard management</li>
                        <li>Last-mile delivery optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved delivery accuracy</li>
                        <li>Enhanced container handling efficiency</li>
                        <li>Reduced dwell time in ports</li>
                        <li>Better asset utilization</li>
                        <li>Improved safety in operations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="autonomous" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Autonomous Vehicle Applications</CardTitle>
                  <CardDescription>
                    RTK-GPS provides the precision positioning required for autonomous navigation.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Autonomous vehicle developers use RTK-GPS as a critical component of their positioning systems,
                    enabling lane-level accuracy for self-driving cars, trucks, and industrial vehicles. The technology
                    is often fused with other sensors like LiDAR and cameras for robust navigation.
                  </p>
                  <p>
                    In mining and agriculture, RTK-GPS guides fully autonomous equipment for 24/7 operations in
                    controlled environments. For drone operations, RTK-GPS enables precise flight paths and automated
                    landing capabilities.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Autonomous vehicle navigation</li>
                        <li>Autonomous mining equipment</li>
                        <li>Self-driving agricultural machinery</li>
                        <li>Drone flight path control</li>
                        <li>Automated port equipment</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Lane-level positioning accuracy</li>
                        <li>Enhanced safety through precise navigation</li>
                        <li>24/7 operation capability</li>
                        <li>Reduced labor costs</li>
                        <li>Improved operational efficiency</li>
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
                <CardTitle>Precision Agriculture Implementation</CardTitle>
                <CardDescription>Midwest Farming Cooperative</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A large farming cooperative implemented RTK-GPS across their fleet of 45 tractors and harvesters. The
                  system enabled automated steering with 2cm accuracy, allowing for precise planting and harvesting
                  operations even in low visibility conditions.
                </p>
                <p>
                  The cooperative reported a 12% reduction in seed and fertilizer costs through reduced overlap, 7%
                  increase in yield through optimized row spacing, and 30% reduction in operator fatigue. The system
                  achieved full ROI within 18 months of deployment.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Construction Machine Control</CardTitle>
                <CardDescription>Highway Infrastructure Project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A major highway construction project equipped 28 pieces of earthmoving equipment with RTK-GPS machine
                  control systems. The technology allowed operators to achieve precise grades without traditional stakes
                  and checkers, working directly from 3D digital models.
                </p>
                <p>
                  The project reported 43% faster grading operations, 22% reduction in material costs through optimized
                  cut and fill operations, and 35% reduction in rework. Survey costs were reduced by 60%, and the
                  project was completed 45 days ahead of schedule.
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
                  <li>Base station at known location or network subscription</li>
                  <li>Rover receivers for mobile assets</li>
                  <li>Communication link (radio, cellular, internet)</li>
                  <li>Multi-frequency GNSS antennas</li>
                  <li>Data processing software</li>
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
                  <li>Conduct site survey for sky visibility assessment</li>
                  <li>Establish base station at surveyed location</li>
                  <li>Test communication link reliability</li>
                  <li>Implement redundant correction sources</li>
                  <li>Calibrate and verify system accuracy</li>
                  <li>Train operators on system capabilities and limitations</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Common Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Sky visibility limitations in urban environments</li>
                  <li>Communication link reliability issues</li>
                  <li>Multipath errors near reflective surfaces</li>
                  <li>Base station range limitations</li>
                  <li>Integration with legacy systems</li>
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
                  <th className="border px-4 py-2 text-left font-semibold">RTK-GPS</th>
                  <th className="border px-4 py-2 text-left font-semibold">Standard GNSS</th>
                  <th className="border px-4 py-2 text-left font-semibold">UWB</th>
                  <th className="border px-4 py-2 text-left font-semibold">BLE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Typical Accuracy</td>
                  <td className="border px-4 py-2">1-2 cm</td>
                  <td className="border px-4 py-2">3-5 meters</td>
                  <td className="border px-4 py-2">10-30 cm</td>
                  <td className="border px-4 py-2">1-3 meters</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Environment</td>
                  <td className="border px-4 py-2">Outdoor only</td>
                  <td className="border px-4 py-2">Outdoor only</td>
                  <td className="border px-4 py-2">Indoor/Outdoor</td>
                  <td className="border px-4 py-2">Indoor/Outdoor</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Power Consumption</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Very Low</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Infrastructure Cost</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Low</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Low-Medium</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Receiver Cost</td>
                  <td className="border px-4 py-2">$1,000-10,000</td>
                  <td className="border px-4 py-2">$50-500</td>
                  <td className="border px-4 py-2">$15-50</td>
                  <td className="border px-4 py-2">$5-15</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Range</td>
                  <td className="border px-4 py-2">10-20 km from base</td>
                  <td className="border px-4 py-2">Global</td>
                  <td className="border px-4 py-2">10-50 meters</td>
                  <td className="border px-4 py-2">10-30 meters</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Update Rate</td>
                  <td className="border px-4 py-2">1-20 Hz</td>
                  <td className="border px-4 py-2">1-10 Hz</td>
                  <td className="border px-4 py-2">Up to 100 Hz</td>
                  <td className="border px-4 py-2">1-10 Hz</td>
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
                    <span className="font-medium">Low-Cost RTK:</span> Democratization of RTK technology with affordable
                    receivers for mass-market applications
                  </li>
                  <li>
                    <span className="font-medium">Multi-Band Receivers:</span> Triple and quad-frequency receivers for
                    improved performance and reliability
                  </li>
                  <li>
                    <span className="font-medium">Precise Point Positioning (PPP-RTK):</span> Convergence of PPP and RTK
                    technologies for wide-area centimeter accuracy
                  </li>
                  <li>
                    <span className="font-medium">AI-Enhanced Positioning:</span> Machine learning algorithms improving
                    RTK performance in challenging environments
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
                    <span className="font-medium">Smartphone Integration:</span> Dual-frequency GNSS in smartphones
                    enabling decimeter-level positioning for consumer applications
                  </li>
                  <li>
                    <span className="font-medium">Global RTK Networks:</span> Expansion of correction services to
                    provide worldwide centimeter-level positioning
                  </li>
                  <li>
                    <span className="font-medium">Sensor Fusion:</span> Integration with other positioning technologies
                    for seamless indoor-outdoor tracking
                  </li>
                  <li>
                    <span className="font-medium">Autonomous Systems:</span> Growing adoption in self-driving vehicles,
                    drones, and robotics for precise navigation
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learn More */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Learn More About RTK-GPS Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
              <ul className="space-y-2">
                {rtkGpsRelatedArticles.map((article) => (
                  <li key={article.slug}>
                    <Link href={`/resources/${article.slug}`} className="text-primary hover:underline">
                      {article.title}
                    </Link>
                  </li>
                ))}
                <li>
                  <Link
                    href="/resources/uwb-vs-gps-indoor-outdoor-tracking-guide"
                    className="text-primary hover:underline"
                  >
                    UWB vs GPS: Indoor vs Outdoor Tracking Guide
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Unbiased Guidance</h3>
              <p className="mb-4">Need help determining if RTK-GPS is the right technology for your RTLS project?</p>
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
