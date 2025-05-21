"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Building2, Factory, Hospital, ShoppingBag, Truck } from "lucide-react"
import Link from "next/link"
import { getTechnologyRelatedArticles } from "@/lib/article-data"
import { useEffect } from "react"
import { FAQSection } from "@/components/ui/faq-section"
import { FAQSchema } from "@/components/seo/faq-schema"
import { technologyFAQs } from "@/lib/faq-data"

export default function AICamerasTechnologyClientPage() {
  // Get AI Camera-related articles for the related resources section
  const aiCameraRelatedArticles = getTechnologyRelatedArticles("vision").slice(0, 5)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        {/* Page Header */}
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">AI + Cameras Technology</h1>
          <p className="text-base text-muted-foreground">
            AI-powered camera systems combine traditional video surveillance with advanced computer vision algorithms to
            detect, identify, track, and analyze the movement of people and assets without requiring tags.
          </p>
        </header>

        {/* Overview and Key Specifications */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold mb-4">Overview</h2>
              <p className="mb-4">
                AI-powered camera systems represent one of the most versatile and rapidly evolving technologies in the
                real-time location systems (RTLS) landscape. By combining traditional video surveillance hardware with
                advanced computer vision algorithms and artificial intelligence, these systems can detect, identify,
                track, and analyze the movement of people and assets without requiring tags or other hardware on the
                tracked objects.
              </p>
              <p>
                Modern AI camera systems leverage deep learning techniques, particularly convolutional neural networks
                (CNNs) and transformer models, to understand visual scenes with remarkable accuracy. These systems can
                distinguish between different types of objects, recognize specific individuals, detect anomalous
                behaviors, and maintain tracking even in crowded or complex environments.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <ul className="space-y-2">
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Range:</span>
                  <span>1-100 meters (depending on camera specifications)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Accuracy:</span>
                  <span>5-50 centimeters (depending on distance and resolution)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Resolution:</span>
                  <span>1080p to 4K+ (higher resolutions enable tracking at greater distances)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Frame Rate:</span>
                  <span>15-60 fps (higher frame rates improve tracking of fast-moving objects)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Field of View:</span>
                  <span>60°-360° (depending on lens type and camera configuration)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Processing:</span>
                  <span>Edge, fog, or cloud computing (or hybrid approaches)</span>
                </li>
                <li className="flex">
                  <span className="font-medium min-w-[140px]">Power Consumption:</span>
                  <span>Medium to high (depending on processing location)</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* How AI Cameras Works */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">How AI + Cameras Work for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Processing Pipeline</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  AI-powered camera systems for RTLS typically follow a multi-stage processing pipeline: Image
                  acquisition, preprocessing, object detection, feature extraction, object tracking, 3D positioning,
                  behavior analysis, and data integration. This pipeline transforms raw video feeds into actionable
                  location data and insights.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Camera Configurations</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  AI camera systems can be deployed in various configurations, including fixed camera networks with
                  overlapping fields of view, smart cameras with built-in processing capabilities, stereo vision systems
                  for depth perception, and PTZ (Pan-Tilt-Zoom) systems that can dynamically adjust their field of view
                  based on AI detection.
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
                  <li>No tags or beacons required on tracked objects (non-intrusive tracking)</li>
                  <li>Rich contextual information beyond just location (identity, behavior, interactions)</li>
                  <li>Ability to track multiple object types simultaneously</li>
                  <li>Visual verification capability (actual images can be reviewed if needed)</li>
                  <li>Leverages existing security camera infrastructure in many cases</li>
                  <li>Software updates can add new capabilities without hardware changes</li>
                  <li>Flexible deployment options from edge to cloud processing</li>
                  <li>Can detect unexpected objects or people (not limited to pre-registered tags)</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Performance affected by lighting conditions and visual obstructions</li>
                  <li>Privacy concerns and regulatory compliance requirements</li>
                  <li>Computationally intensive, requiring significant processing resources</li>
                  <li>Accuracy can be lower than some tag-based systems, especially for precise positioning</li>
                  <li>Challenging to track objects that look very similar</li>
                  <li>Limited ability to track objects inside containers or behind obstacles</li>
                  <li>Higher bandwidth requirements compared to most other RTLS technologies</li>
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
                    AI camera systems in healthcare environments provide valuable insights without requiring patients or
                    staff to wear tags.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In healthcare settings, AI camera systems can monitor patient rooms for fall detection, track
                    movement patterns to identify potential safety issues, and ensure proper protocols are being
                    followed. The technology can also monitor hand hygiene compliance and verify proper use of personal
                    protective equipment.
                  </p>
                  <p>
                    AI cameras can also optimize patient flow through waiting areas and treatment zones, reducing
                    bottlenecks and improving the overall patient experience without requiring patients to carry
                    tracking devices.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Patient fall detection and prevention</li>
                        <li>Hand hygiene compliance monitoring</li>
                        <li>Waiting room analytics and management</li>
                        <li>PPE compliance verification</li>
                        <li>Contactless patient monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved patient safety without wearable devices</li>
                        <li>Enhanced infection control through compliance monitoring</li>
                        <li>Optimized patient flow and reduced wait times</li>
                        <li>Contactless monitoring for isolation areas</li>
                        <li>Integration with existing security camera infrastructure</li>
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
                    AI camera systems provide valuable customer insights and operational improvements in retail
                    environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Retailers use AI camera systems to analyze customer shopping patterns, optimize store layouts, and
                    improve the overall shopping experience. The technology can track customer journeys through stores,
                    measure dwell times at different displays, and identify high-traffic areas.
                  </p>
                  <p>
                    For operations, AI cameras help manage checkout queues, monitor shelf inventory levels, and detect
                    potential security issues. All of this is accomplished without requiring customers to use apps or
                    carry tracking devices.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Customer journey analysis</li>
                        <li>Queue management and optimization</li>
                        <li>Heat mapping of store traffic</li>
                        <li>Shelf inventory monitoring</li>
                        <li>Loss prevention and security</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Data-driven store layout optimization</li>
                        <li>Improved staffing based on customer traffic</li>
                        <li>Enhanced customer experience</li>
                        <li>Reduced shrinkage and theft</li>
                        <li>Better inventory management</li>
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
                    AI camera systems enhance safety, efficiency, and quality control in manufacturing environments.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    In manufacturing facilities, AI camera systems monitor production lines for safety compliance,
                    process efficiency, and quality control. The technology can detect when workers enter hazardous
                    areas, verify proper use of safety equipment, and identify ergonomic issues in real-time.
                  </p>
                  <p>
                    For production optimization, AI cameras track the movement of materials through the manufacturing
                    process, identify bottlenecks, and ensure proper assembly procedures are followed. This provides
                    valuable insights without requiring extensive tagging of equipment or materials.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Safety zone monitoring</li>
                        <li>Process compliance verification</li>
                        <li>Quality control inspection</li>
                        <li>Worker ergonomics analysis</li>
                        <li>Production line optimization</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Improved workplace safety</li>
                        <li>Enhanced quality control</li>
                        <li>Increased production efficiency</li>
                        <li>Reduced ergonomic injuries</li>
                        <li>Better process compliance</li>
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
                    AI camera systems optimize warehouse operations and improve supply chain visibility.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Logistics operations use AI camera systems to track assets, optimize warehouse traffic, and improve
                    overall operational efficiency. The technology can monitor the movement of forklifts and personnel,
                    identify congestion points, and optimize picking routes without requiring extensive tagging
                    infrastructure.
                  </p>
                  <p>
                    For loading docks, AI cameras track truck arrivals and departures, monitor loading/unloading
                    activities, and help manage yard operations. The system can also verify proper handling procedures
                    for different types of cargo.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Warehouse traffic optimization</li>
                        <li>Loading dock management</li>
                        <li>Picking route analysis</li>
                        <li>Space utilization monitoring</li>
                        <li>Safety compliance verification</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Reduced congestion and traffic issues</li>
                        <li>Improved loading/unloading efficiency</li>
                        <li>Enhanced space utilization</li>
                        <li>Better safety compliance</li>
                        <li>Optimized picking operations</li>
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
                    AI camera systems enhance building management, security, and space utilization.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    Commercial buildings implement AI camera systems for space utilization analysis, occupancy
                    monitoring, and security enhancement. The technology can track how different areas of a building are
                    used, identify underutilized spaces, and help optimize layout and resource allocation.
                  </p>
                  <p>
                    For building operations, AI cameras monitor foot traffic patterns, verify proper access control, and
                    help manage energy usage based on actual occupancy. The system can also provide wayfinding
                    assistance and monitor emergency evacuation procedures.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4 border-t pt-4">
                    <div>
                      <h4 className="font-medium mb-2">Common Use Cases:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Space utilization analysis</li>
                        <li>Occupancy monitoring</li>
                        <li>Security and access control</li>
                        <li>Energy management</li>
                        <li>Emergency response coordination</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Key Benefits:</h4>
                      <ul className="list-disc pl-5 space-y-1">
                        <li>Optimized space utilization</li>
                        <li>Enhanced building security</li>
                        <li>Improved energy efficiency</li>
                        <li>Better emergency response</li>
                        <li>Data-driven facility management</li>
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
                <CardTitle>Retail Analytics: Customer Journey Mapping</CardTitle>
                <CardDescription>Major Department Store Chain</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A major department store chain implemented an AI camera system across 25 locations to analyze customer
                  shopping patterns and optimize store layouts. The system generated heat maps of traffic patterns,
                  measured dwell times at different displays, and analyzed conversion rates for various store sections.
                </p>
                <p>
                  The retailer achieved a 22% increase in conversion rate for optimized departments, 15% reduction in
                  congestion at peak shopping times, and 8% overall increase in sales per square foot. Full ROI was
                  achieved within 10 months of deployment.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Manufacturing: Safety & Process Optimization</CardTitle>
                <CardDescription>Electronics Manufacturing Facility</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  An electronics manufacturing facility deployed an AI camera system to monitor production lines for
                  safety compliance and process efficiency. The system provided real-time alerts for safety violations
                  and generated detailed reports on process efficiency.
                </p>
                <p>
                  The manufacturer recorded zero safety incidents in monitored areas over 18 months, achieved a 28%
                  reduction in production bottlenecks, and improved overall equipment effectiveness (OEE) by 12%. Worker
                  ergonomic issues were also reduced by 15%.
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
                  <li>High-quality cameras with appropriate resolution and field of view</li>
                  <li>Sufficient lighting for consistent image quality</li>
                  <li>Computing infrastructure for AI processing (edge, fog, or cloud)</li>
                  <li>High-bandwidth network for video transmission</li>
                  <li>Storage infrastructure for video data (if required)</li>
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
                  <li>Conduct thorough site survey before installation</li>
                  <li>Place cameras strategically for optimal coverage</li>
                  <li>Consider privacy requirements in camera placement</li>
                  <li>Implement proper security measures for video data</li>
                  <li>Calibrate the system for accurate spatial mapping</li>
                  <li>Train AI models on environment-specific data</li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle className="text-lg">Common Challenges</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Privacy concerns and regulatory compliance</li>
                  <li>Lighting variations affecting performance</li>
                  <li>Occlusion in crowded or complex environments</li>
                  <li>High bandwidth and storage requirements</li>
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
                  <th className="border px-4 py-2 text-left font-semibold">AI + Cameras</th>
                  <th className="border px-4 py-2 text-left font-semibold">UWB</th>
                  <th className="border px-4 py-2 text-left font-semibold">Wi-Fi</th>
                  <th className="border px-4 py-2 text-left font-semibold">BLE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="border px-4 py-2 font-medium">Typical Accuracy</td>
                  <td className="border px-4 py-2">5-50 cm</td>
                  <td className="border px-4 py-2">10-30 cm</td>
                  <td className="border px-4 py-2">3-5 meters</td>
                  <td className="border px-4 py-2">1-3 meters</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Range</td>
                  <td className="border px-4 py-2">1-100 meters</td>
                  <td className="border px-4 py-2">10-50 meters</td>
                  <td className="border px-4 py-2">30-50 meters</td>
                  <td className="border px-4 py-2">10-30 meters</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Power Consumption</td>
                  <td className="border px-4 py-2">Medium-High</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Very Low</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Infrastructure Cost</td>
                  <td className="border px-4 py-2">Medium-High</td>
                  <td className="border px-4 py-2">High</td>
                  <td className="border px-4 py-2">Medium</td>
                  <td className="border px-4 py-2">Low-Medium</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Tag Cost</td>
                  <td className="border px-4 py-2">No tags required</td>
                  <td className="border px-4 py-2">$15-50</td>
                  <td className="border px-4 py-2">$10-30</td>
                  <td className="border px-4 py-2">$5-15</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Battery Life</td>
                  <td className="border px-4 py-2">N/A (no tags)</td>
                  <td className="border px-4 py-2">6 months - 3 years</td>
                  <td className="border px-4 py-2">3 months - 2 years</td>
                  <td className="border px-4 py-2">6 months - 5 years</td>
                </tr>
                <tr>
                  <td className="border px-4 py-2 font-medium">Contextual Information</td>
                  <td className="border px-4 py-2">Very High</td>
                  <td className="border px-4 py-2">Low</td>
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
                    <span className="font-medium">Edge AI:</span> More powerful on-device processing enabling advanced
                    analytics without cloud connectivity
                  </li>
                  <li>
                    <span className="font-medium">Multimodal Sensing:</span> Combining cameras with other sensors like
                    thermal imaging, depth sensors, or audio for more robust tracking
                  </li>
                  <li>
                    <span className="font-medium">Transformer Architectures:</span> New AI models that better understand
                    temporal relationships and complex scenes
                  </li>
                  <li>
                    <span className="font-medium">Digital Twins:</span> Integration with 3D virtual environments for
                    advanced visualization and simulation
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
                    <span className="font-medium">Privacy-Preserving Computer Vision:</span> Techniques that extract
                    tracking data without storing or transmitting identifiable images
                  </li>
                  <li>
                    <span className="font-medium">Federated Learning:</span> Improving AI models across distributed
                    camera networks while maintaining data privacy
                  </li>
                  <li>
                    <span className="font-medium">Hybrid RTLS Solutions:</span> Integration of AI cameras with
                    traditional tag-based RTLS technologies for comprehensive coverage
                  </li>
                  <li>
                    <span className="font-medium">Industry-Specific AI Models:</span> Specialized models trained for
                    specific industries and use cases
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Learn More - Updated with real resource links from article-data.ts and removed Card component */}
        <section className="mt-12">
          <h2 className="text-2xl font-semibold mb-6">Learn More About AI + Cameras Technology</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-3">Related Resources</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/resources/uwb-vs-vision-rtls-accuracy-vs-contextual-tracking"
                    className="text-primary hover:underline"
                  >
                    UWB vs Vision RTLS: Accuracy vs Contextual Tracking
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/vision-rtls-warehousing-60-percent-pick-time-improvement"
                    className="text-primary hover:underline"
                  >
                    Vision RTLS in Warehousing: 60% Pick-Time Improvement
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/vision-slam-vs-lidar-choosing-ideal-rtls"
                    className="text-primary hover:underline"
                  >
                    Vision SLAM vs LiDAR: Choosing the Ideal RTLS
                  </Link>
                </li>
                <li>
                  <Link
                    href="/resources/visual-slam-vs-uwb-vs-lidar-next-gen-indoor-positioning"
                    className="text-primary hover:underline"
                  >
                    Visual SLAM vs UWB vs LiDAR: Next-Gen Indoor Positioning
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-3">Unbiased Guidance</h3>
              <p className="mb-4">
                Need help determining if AI + Cameras is the right technology for your RTLS project?
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

        {/* FAQ Section */}
        <section id="ai-cameras-faqs" className="mt-16 mb-12 bg-gray-50 p-6 rounded-lg">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-center">Frequently Asked Questions</h2>

            {/* Get the AI Cameras FAQs */}
            {technologyFAQs.ai_cameras && technologyFAQs.ai_cameras.length > 0 && (
              <>
                <FAQSection faqs={technologyFAQs.ai_cameras} showTitle={false} className="mb-8" />
                <FAQSchema faqs={technologyFAQs.ai_cameras} pageId="ai-cameras-technology" />
              </>
            )}
          </div>
        </section>
      </article>
    </div>
  )
}
