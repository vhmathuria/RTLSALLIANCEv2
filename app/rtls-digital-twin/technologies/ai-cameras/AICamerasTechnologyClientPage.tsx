"use client"

import { useEffect, useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  Camera,
  Cpu,
  ArrowLeft,
  Building,
  CheckCircle,
  XCircle,
  Zap,
  Clock,
  Ruler,
  Compass,
  Map,
  Layers,
  Radio,
} from "lucide-react"
import { getTechnologyRelatedArticles } from "@/lib/article-data"

export default function AICamerasTechnologyClientPage() {
  const [activeTab, setActiveTab] = useState("healthcare")
  const aiCamerasRelatedArticles = getTechnologyRelatedArticles("camera")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <article className="bg-white">
      <div className="container mx-auto px-4 py-12">
        <Link href="/rtls-digital-twin" className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-6">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to RTLS + Digital Twin
        </Link>

        <header className="mb-12">
          <div className="flex items-center mb-4">
            <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-600 text-white mr-4">
              <Camera className="h-6 w-6" />
              <Cpu className="h-4 w-4 absolute" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              AI + Cameras Technology
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl">
            AI-powered camera systems combine traditional video surveillance with advanced computer vision algorithms to
            detect, identify, track, and analyze the movement of people and assets without requiring tags or other
            hardware on the tracked objects.
          </p>
        </header>

        {/* Overview Section - 2 column grid */}
        <section className="mb-12 grid md:grid-cols-2 gap-8">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              AI-powered camera systems represent one of the most versatile and rapidly evolving technologies in the
              real-time location systems (RTLS) landscape. By combining traditional video surveillance hardware with
              advanced computer vision algorithms and artificial intelligence, these systems can detect, identify,
              track, and analyze the movement of people and assets without requiring tags or other hardware on the
              tracked objects.
            </p>
            <p className="mb-4">
              Modern AI camera systems leverage deep learning techniques, particularly convolutional neural networks
              (CNNs) and transformer models, to understand visual scenes with remarkable accuracy. These systems can
              distinguish between different types of objects, recognize specific individuals, detect anomalous
              behaviors, and maintain tracking even in crowded or complex environments.
            </p>
            <p>
              Unlike traditional tag-based RTLS technologies, AI camera systems provide rich contextual information
              beyond just location data, enabling advanced analytics and insights into movement patterns, behaviors, and
              interactions.
            </p>
          </div>

          <div className="bg-gray-50 p-6 rounded-xl">
            <h2 className="text-2xl font-semibold mb-4">Key Specifications</h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Range:</span>
                <span>1-100 meters (depending on camera specifications)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Accuracy:</span>
                <span>5-50 centimeters (depending on distance and resolution)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Resolution:</span>
                <span>1080p to 4K+ (higher resolutions enable tracking at greater distances)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Frame Rate:</span>
                <span>15-60 fps (higher frame rates improve tracking of fast-moving objects)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Field of View:</span>
                <span>60°-360° (depending on lens type and camera configuration)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Processing:</span>
                <span>Edge, fog, or cloud computing (or hybrid approaches)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Power Consumption:</span>
                <span>Medium to high (depending on processing location)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Lighting Dependency:</span>
                <span>Medium to high (though infrared cameras can work in darkness)</span>
              </li>
              <li className="flex items-start">
                <span className="font-semibold min-w-32 inline-block">Cost Range:</span>
                <span>$200-$2,000 per camera + processing infrastructure</span>
              </li>
            </ul>
          </div>
        </section>

        {/* How AI Cameras Work Section - 2 cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">How AI + Cameras Work for RTLS</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Camera Types & Configurations</h3>
              <p className="mb-4">
                AI camera systems used in RTLS applications can be categorized based on their hardware configuration and
                processing approach:
              </p>
              <ul className="space-y-2 mb-4">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Fixed Camera Networks:</span>
                  <span>
                    Multiple cameras with overlapping fields of view for comprehensive coverage and cross-camera
                    tracking
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Smart Cameras:</span>
                  <span>
                    Self-contained units with built-in processing capabilities for edge computing and reduced latency
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">Stereo Vision Systems:</span>
                  <span>
                    Cameras arranged in pairs to enable depth perception through triangulation for accurate 3D
                    positioning
                  </span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">PTZ Systems:</span>
                  <span>Pan-Tilt-Zoom cameras that can move and adjust their field of view based on AI detection</span>
                </li>
              </ul>
              <p>
                The choice of camera configuration depends on the specific requirements of the application, including
                coverage area, accuracy needs, and environmental conditions.
              </p>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Processing Pipeline</h3>
              <p className="mb-4">
                AI-powered camera systems for RTLS typically follow a multi-stage processing pipeline:
              </p>
              <ol className="space-y-2">
                <li className="flex items-start">
                  <span className="font-semibold mr-2">1. Image Acquisition:</span>
                  <span>Cameras capture video frames at specified resolution and frame rate</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">2. Preprocessing:</span>
                  <span>Raw images are processed to correct distortion and enhance quality</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">3. Object Detection:</span>
                  <span>AI algorithms identify and classify objects of interest in each frame</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">4. Feature Extraction:</span>
                  <span>The system extracts distinctive features from each detected object</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">5. Object Tracking:</span>
                  <span>Algorithms associate detections across frames to create continuous tracks</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">6. 3D Positioning:</span>
                  <span>2D positions are combined to calculate precise 3D coordinates</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">7. Behavior Analysis:</span>
                  <span>Advanced systems analyze movement patterns and activities</span>
                </li>
                <li className="flex items-start">
                  <span className="font-semibold mr-2">8. Data Integration:</span>
                  <span>Tracking information is formatted and transmitted to other systems</span>
                </li>
              </ol>
            </div>
          </div>
        </section>

        {/* Advantages & Limitations Section - 2 cards with colored titles */}
        <section className="mb-12">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-semibold text-green-600 mb-6">Advantages</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>No tags or beacons required on tracked objects (non-intrusive tracking)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Rich contextual information beyond just location (identity, behavior, interactions)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Ability to track multiple object types simultaneously</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Visual verification capability (actual images can be reviewed if needed)</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Leverages existing security camera infrastructure in many cases</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Software updates can add new capabilities without hardware changes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Flexible deployment options from edge to cloud processing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Can detect unexpected objects or people (not limited to pre-registered tags)</span>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-red-600 mb-6">Limitations</h2>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Performance affected by lighting conditions and visual obstructions</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Privacy concerns and regulatory compliance requirements</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Computationally intensive, requiring significant processing resources</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Accuracy can be lower than some tag-based systems, especially for precise positioning</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Challenging to track objects that look very similar</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Limited ability to track objects inside containers or behind obstacles</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>Higher bandwidth requirements compared to most other RTLS technologies</span>
                </li>
                <li className="flex items-start">
                  <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                  <span>May require periodic retraining of AI models as environments change</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Industry Applications Section - Tabs */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Industry Applications</h2>
          <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 mb-8">
              <TabsTrigger value="healthcare">Healthcare</TabsTrigger>
              <TabsTrigger value="manufacturing">Manufacturing</TabsTrigger>
              <TabsTrigger value="retail">Retail</TabsTrigger>
              <TabsTrigger value="logistics">Logistics</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="sports">Sports</TabsTrigger>
            </TabsList>

            <TabsContent value="healthcare" className="border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Healthcare Applications</h3>
                  <p className="mb-4">
                    AI camera systems in healthcare environments provide valuable insights and safety monitoring without
                    requiring patients or staff to wear tags.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Patient Monitoring:</strong> Detect falls, unusual movements, or patients leaving beds
                        without assistance
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Hand Hygiene Compliance:</strong> Monitor handwashing stations and verify proper
                        protocols
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Waiting Room Analytics:</strong> Optimize patient flow and reduce wait times
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>PPE Compliance:</strong> Ensure staff are wearing appropriate protective equipment
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Case Example: University Hospital</h4>
                  <p className="mb-4">
                    A major university hospital implemented an AI camera system to monitor hand hygiene compliance in
                    critical care units. The system automatically detected when staff entered patient rooms and verified
                    if proper handwashing procedures were followed.
                  </p>
                  <p className="font-semibold">Results:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>Increased hand hygiene compliance from 40% to 85%</li>
                    <li>25% reduction in hospital-acquired infections</li>
                    <li>Estimated annual savings of $1.2 million in infection-related costs</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="manufacturing" className="border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Manufacturing Applications</h3>
                  <p className="mb-4">
                    AI camera systems in manufacturing environments provide real-time monitoring of production
                    processes, worker safety, and quality control.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Safety Zone Monitoring:</strong> Detect unauthorized entry into hazardous areas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Process Optimization:</strong> Analyze worker movements to identify inefficiencies
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Quality Inspection:</strong> Automated visual inspection of products and components
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Tool Tracking:</strong> Monitor the location and usage of critical tools and equipment
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Case Example: Automotive Assembly Plant</h4>
                  <p className="mb-4">
                    An automotive manufacturer deployed an AI camera system to monitor assembly line operations and
                    worker movements. The system analyzed workflow patterns and identified bottlenecks in the production
                    process.
                  </p>
                  <p className="font-semibold">Results:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>15% improvement in production efficiency</li>
                    <li>40% reduction in workplace safety incidents</li>
                    <li>ROI achieved within 8 months of deployment</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="retail" className="border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Retail Applications</h3>
                  <p className="mb-4">
                    AI camera systems in retail environments provide valuable insights into customer behavior, store
                    operations, and inventory management.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Customer Journey Analysis:</strong> Track shopper paths and dwell times
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Queue Management:</strong> Monitor checkout lines and optimize staffing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Planogram Compliance:</strong> Verify product placement and shelf organization
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Loss Prevention:</strong> Detect suspicious behavior and prevent theft
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Case Example: National Retail Chain</h4>
                  <p className="mb-4">
                    A national retail chain implemented an AI camera system across 50 stores to analyze customer flow
                    and optimize store layouts. The system provided heat maps of customer traffic and identified
                    high-value merchandising areas.
                  </p>
                  <p className="font-semibold">Results:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>18% increase in conversion rate for featured products</li>
                    <li>12% reduction in checkout wait times</li>
                    <li>8% overall increase in sales per square foot</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="logistics" className="border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Logistics Applications</h3>
                  <p className="mb-4">
                    AI camera systems in logistics and warehousing environments provide real-time tracking of assets,
                    personnel, and operations without requiring extensive tagging infrastructure.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Warehouse Traffic Management:</strong> Optimize forklift and personnel movement
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Loading Dock Monitoring:</strong> Track truck arrivals, departures, and dwell times
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Package Tracking:</strong> Monitor parcels through sorting and distribution centers
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Space Utilization:</strong> Analyze storage usage and identify optimization
                        opportunities
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Case Example: E-commerce Fulfillment Center</h4>
                  <p className="mb-4">
                    A major e-commerce company deployed an AI camera system in their fulfillment centers to track picker
                    movements and optimize walking paths. The system created heat maps of warehouse activity and
                    identified congestion points.
                  </p>
                  <p className="font-semibold">Results:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>22% reduction in picker walking distance</li>
                    <li>15% increase in items picked per hour</li>
                    <li>30% decrease in congestion-related delays</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="security" className="border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Security Applications</h3>
                  <p className="mb-4">
                    AI camera systems in security applications provide advanced monitoring capabilities beyond
                    traditional surveillance, enabling proactive threat detection and response.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Perimeter Monitoring:</strong> Detect unauthorized access to restricted areas
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Anomaly Detection:</strong> Identify unusual behavior patterns or suspicious activities
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Crowd Management:</strong> Monitor crowd density and flow in public spaces
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Object Tracking:</strong> Monitor high-value assets and detect removal
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Case Example: Airport Security</h4>
                  <p className="mb-4">
                    An international airport implemented an AI camera system to enhance security monitoring across
                    terminals. The system tracked passenger flow, detected abandoned objects, and identified unusual
                    movement patterns.
                  </p>
                  <p className="font-semibold">Results:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>85% reduction in false security alerts</li>
                    <li>60% faster response time to potential security incidents</li>
                    <li>Improved resource allocation for security personnel</li>
                  </ul>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="sports" className="border rounded-lg p-6">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold mb-4">Sports Applications</h3>
                  <p className="mb-4">
                    AI camera systems in sports provide detailed tracking and analysis of player movements, team
                    formations, and game dynamics without requiring wearable sensors.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Player Tracking:</strong> Monitor position, speed, and movement patterns
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Team Formation Analysis:</strong> Evaluate tactical positioning and spacing
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Performance Metrics:</strong> Calculate distance covered, sprints, and other statistics
                      </span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <strong>Automated Highlights:</strong> Identify key moments for video compilation
                      </span>
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-50 rounded-xl p-6">
                  <h4 className="font-semibold mb-2">Case Example: Professional Soccer Team</h4>
                  <p className="mb-4">
                    A professional soccer team implemented an AI camera system in their training facility to track
                    player movements during practice sessions. The system provided detailed analytics on positioning,
                    movement patterns, and physical performance.
                  </p>
                  <p className="font-semibold">Results:</p>
                  <ul className="list-disc pl-5 space-y-1">
                    <li>25% improvement in tactical positioning during set pieces</li>
                    <li>18% reduction in player injuries through optimized training loads</li>
                    <li>Personalized performance feedback for individual player development</li>
                  </ul>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </section>

        {/* Mini Case Studies Section - 2 cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Mini Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Retail Analytics: Customer Journey Mapping</h3>
              <p className="mb-4">
                A major department store chain implemented an AI camera system across 25 locations to analyze customer
                shopping patterns and optimize store layouts.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold">Challenge:</h4>
                <p>
                  The retailer needed to understand how customers navigated their stores, which departments received the
                  most traffic, and how product placements affected sales, but without requiring customers to use an app
                  or carry a tracking device.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold">Solution:</h4>
                <p>
                  A network of ceiling-mounted cameras with AI-powered analytics was installed to anonymously track
                  customer movements throughout the stores. The system generated heat maps of traffic patterns, measured
                  dwell times at different displays, and analyzed conversion rates for various store sections.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Results:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>22% increase in conversion rate for optimized departments</li>
                  <li>15% reduction in congestion at peak shopping times</li>
                  <li>8% overall increase in sales per square foot</li>
                  <li>ROI achieved within 10 months of deployment</li>
                </ul>
              </div>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Manufacturing: Safety & Process Optimization</h3>
              <p className="mb-4">
                An electronics manufacturing facility deployed an AI camera system to monitor production lines for
                safety compliance and process efficiency.
              </p>
              <div className="mb-4">
                <h4 className="font-semibold">Challenge:</h4>
                <p>
                  The manufacturer needed to ensure worker safety around automated equipment while also identifying
                  inefficiencies in the production process, but without disrupting operations with wearable devices.
                </p>
              </div>
              <div className="mb-4">
                <h4 className="font-semibold">Solution:</h4>
                <p>
                  A comprehensive AI camera system was installed to monitor safety zones around robotic equipment,
                  analyze worker movements for ergonomic issues, and track the flow of materials through the production
                  line. The system provided real-time alerts for safety violations and generated detailed reports on
                  process efficiency.
                </p>
              </div>
              <div>
                <h4 className="font-semibold">Results:</h4>
                <ul className="list-disc pl-5 space-y-1">
                  <li>Zero safety incidents in monitored areas over 18 months</li>
                  <li>28% reduction in production bottlenecks</li>
                  <li>12% improvement in overall equipment effectiveness (OEE)</li>
                  <li>15% reduction in worker ergonomic issues</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Implementation Considerations Section - 3 cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Implementation Considerations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Technical Considerations</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-semibold">Camera Selection & Placement</p>
                  <p className="text-sm text-gray-600">
                    Choose appropriate cameras based on resolution, field of view, and environmental requirements.
                    Carefully plan camera positions to ensure comprehensive coverage without blind spots.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Processing Architecture</p>
                  <p className="text-sm text-gray-600">
                    Determine the optimal balance between edge, fog, and cloud processing based on latency requirements,
                    bandwidth constraints, and privacy considerations.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Network Infrastructure</p>
                  <p className="text-sm text-gray-600">
                    Ensure sufficient bandwidth and reliability for video transmission. Consider network segmentation
                    for security and quality of service guarantees.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">AI Model Selection</p>
                  <p className="text-sm text-gray-600">
                    Choose appropriate algorithms and models based on specific tracking requirements. Consider
                    trade-offs between accuracy, speed, and resource requirements.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Privacy & Compliance</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-semibold">Data Protection Regulations</p>
                  <p className="text-sm text-gray-600">
                    Ensure compliance with relevant privacy laws such as GDPR, CCPA, or industry-specific regulations.
                    Conduct privacy impact assessments before deployment.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Privacy-Preserving Techniques</p>
                  <p className="text-sm text-gray-600">
                    Consider implementing privacy-by-design approaches such as on-device processing, automatic blurring
                    of faces, or converting video to anonymous metadata.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Transparency & Consent</p>
                  <p className="text-sm text-gray-600">
                    Clearly communicate the presence and purpose of AI camera systems to individuals in monitored areas.
                    Provide opt-out mechanisms where appropriate.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Data Retention Policies</p>
                  <p className="text-sm text-gray-600">
                    Establish clear policies for how long video data and derived analytics are stored. Implement
                    automatic deletion procedures for data that is no longer needed.
                  </p>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Operational Factors</h3>
              <ul className="space-y-3">
                <li>
                  <p className="font-semibold">System Calibration</p>
                  <p className="text-sm text-gray-600">
                    Develop a robust calibration process to map camera views to physical space. This is critical for
                    accurate positioning and cross-camera tracking.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Lighting Conditions</p>
                  <p className="text-sm text-gray-600">
                    Assess the lighting environment and its variations throughout the day. Consider supplementary
                    lighting or IR-capable cameras for areas with poor or variable lighting.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Maintenance Requirements</p>
                  <p className="text-sm text-gray-600">
                    Plan for regular camera cleaning, software updates, and system health monitoring. Develop procedures
                    for handling camera failures or network outages.
                  </p>
                </li>
                <li>
                  <p className="font-semibold">Integration Strategy</p>
                  <p className="text-sm text-gray-600">
                    Define how the AI camera system will integrate with existing business systems such as security
                    platforms, workforce management, or analytics tools.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Technology Comparison Section - Table */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">AI + Cameras vs. Other RTLS Technologies</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200">
              <thead>
                <tr className="bg-gray-50">
                  <th className="py-3 px-4 border-b text-left">Feature</th>
                  <th className="py-3 px-4 border-b text-left">AI + Cameras</th>
                  <th className="py-3 px-4 border-b text-left">LiDAR</th>
                  <th className="py-3 px-4 border-b text-left">UWB</th>
                  <th className="py-3 px-4 border-b text-left">BLE</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="py-3 px-4 border-b">Accuracy</td>
                  <td className="py-3 px-4 border-b">5-50cm</td>
                  <td className="py-3 px-4 border-b">1-30mm</td>
                  <td className="py-3 px-4 border-b">10-30cm</td>
                  <td className="py-3 px-4 border-b">1-3m</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Tagging Required</td>
                  <td className="py-3 px-4 border-b">No</td>
                  <td className="py-3 px-4 border-b">No</td>
                  <td className="py-3 px-4 border-b">Yes</td>
                  <td className="py-3 px-4 border-b">Yes</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Identification Capability</td>
                  <td className="py-3 px-4 border-b">High</td>
                  <td className="py-3 px-4 border-b">Low</td>
                  <td className="py-3 px-4 border-b">Medium</td>
                  <td className="py-3 px-4 border-b">Medium</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Privacy Concerns</td>
                  <td className="py-3 px-4 border-b">High</td>
                  <td className="py-3 px-4 border-b">Low</td>
                  <td className="py-3 px-4 border-b">Low</td>
                  <td className="py-3 px-4 border-b">Low</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Environmental Sensitivity</td>
                  <td className="py-3 px-4 border-b">Lighting, visual obstructions</td>
                  <td className="py-3 px-4 border-b">Dust, fog, reflective surfaces</td>
                  <td className="py-3 px-4 border-b">Metal, water</td>
                  <td className="py-3 px-4 border-b">RF interference</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Processing Requirements</td>
                  <td className="py-3 px-4 border-b">High</td>
                  <td className="py-3 px-4 border-b">Medium-High</td>
                  <td className="py-3 px-4 border-b">Low</td>
                  <td className="py-3 px-4 border-b">Low</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Infrastructure Cost</td>
                  <td className="py-3 px-4 border-b">Medium-High</td>
                  <td className="py-3 px-4 border-b">High</td>
                  <td className="py-3 px-4 border-b">Medium</td>
                  <td className="py-3 px-4 border-b">Low</td>
                </tr>
                <tr>
                  <td className="py-3 px-4 border-b">Contextual Information</td>
                  <td className="py-3 px-4 border-b">Very High</td>
                  <td className="py-3 px-4 border-b">Medium</td>
                  <td className="py-3 px-4 border-b">Low</td>
                  <td className="py-3 px-4 border-b">Low</td>
                </tr>
              </tbody>
            </table>
          </div>
        </section>

        {/* Future Trends Section - 2 cards */}
        <section className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Future Trends</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Technological Advancements</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Edge AI</span>
                    <p className="text-sm text-gray-600">
                      More powerful on-device processing enabling advanced analytics without cloud connectivity,
                      improving privacy and reducing bandwidth requirements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Transformer Architectures</span>
                    <p className="text-sm text-gray-600">
                      New AI models that better understand temporal relationships and complex scenes, improving tracking
                      accuracy in challenging environments.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Multimodal Sensing</span>
                    <p className="text-sm text-gray-600">
                      Combining cameras with other sensors like thermal imaging, depth sensors, or audio for more robust
                      tracking across different environmental conditions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Digital Twins</span>
                    <p className="text-sm text-gray-600">
                      Integration with 3D virtual environments for advanced visualization, simulation, and predictive
                      analytics based on real-time tracking data.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Market & Application Trends</h3>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Privacy-Preserving Computer Vision</span>
                    <p className="text-sm text-gray-600">
                      Growing adoption of techniques that extract tracking data without storing or transmitting
                      identifiable images, addressing privacy concerns and regulatory requirements.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Federated Learning</span>
                    <p className="text-sm text-gray-600">
                      Improving AI models across distributed camera networks while maintaining data privacy, enabling
                      continuous improvement without centralized data collection.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Hybrid RTLS Solutions</span>
                    <p className="text-sm text-gray-600">
                      Integration of AI cameras with traditional tag-based RTLS technologies to combine the strengths of
                      both approaches, providing comprehensive tracking solutions.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-blue-600 mr-2 mt-0.5 flex-shrink-0" />
                  <div>
                    <span className="font-semibold">Industry-Specific AI Models</span>
                    <p className="text-sm text-gray-600">
                      Development of specialized AI models trained for specific industries and use cases, improving
                      accuracy and reducing implementation time.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Learn More - Updated with real resource links from article-data.ts */}
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
                    href="/resources/rtls-101-core-components-protocols-deployment-models"
                    className="text-primary hover:underline"
                  >
                    RTLS 101: Core Components, Protocols & Deployment Models
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

        {/* Sidebar - Technology Overview */}
        <div className="fixed top-24 right-8 w-64 hidden xl:block">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">AI + Cameras Technology Overview</h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Building className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Infrastructure</h4>
                  <p className="text-sm text-gray-600">Cameras and edge/cloud processing</p>
                </div>
              </div>

              <div className="flex items-start">
                <Ruler className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Accuracy Range</h4>
                  <p className="text-sm text-gray-600">5-50 centimeters typical</p>
                </div>
              </div>

              <div className="flex items-start">
                <Compass className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Environment</h4>
                  <p className="text-sm text-gray-600">Indoor/outdoor, retail, public spaces</p>
                </div>
              </div>

              <div className="flex items-start">
                <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Power Requirements</h4>
                  <p className="text-sm text-gray-600">Medium to high (processing intensive)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Setup Time</h4>
                  <p className="text-sm text-gray-600">Medium (camera placement and AI training)</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Ideal Applications</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Retail analytics</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">People counting</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Behavior analysis</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Security and surveillance</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Workplace safety</span>
              </li>
            </ul>

            <Link href="/contact">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded">
                Contact RTLS Expert
              </button>
            </Link>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">Related Technologies</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/lidar"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  <span>LiDAR</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/infrared"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  <span>Infrared</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/slam"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Map className="h-4 w-4 mr-2" />
                  <span>SLAM</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/sensor-fusion"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Layers className="h-4 w-4 mr-2" />
                  <span>Sensor Fusion</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/ble"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Radio className="h-4 w-4 mr-2" />
                  <span>Bluetooth Low Energy (BLE)</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </article>
  )
}
