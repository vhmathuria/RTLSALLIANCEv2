"use client"
import Image from "next/image"
import Link from "next/link"
import {
  ArrowRight,
  CheckCircle,
  XCircle,
  Navigation,
  Compass,
  Clock,
  Zap,
  Building,
  Ruler,
  Server,
  Radio,
  Layers,
  Map,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { useScrollToTop } from "@/hooks/useScrollToTop"

export default function SLAMTechnologyClientPage() {
  useScrollToTop()

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Main Content */}
        <div className="lg:col-span-2">
          <h1 className="text-3xl font-bold mb-6">SLAM Technology for Real-Time Location Systems</h1>

          <div className="prose max-w-none">
            <p className="lead text-xl text-gray-700 mb-8">
              Simultaneous Localization and Mapping (SLAM) enables devices to build maps of unknown environments while
              simultaneously tracking their position within those maps, providing a powerful solution for dynamic
              environments without pre-existing infrastructure.
            </p>

            <div className="relative h-80 w-full rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder-krmsq.png"
                alt="SLAM algorithm visualization showing robot mapping and localization"
                fill
                className="object-cover"
              />
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">What is SLAM Technology?</h2>
            <p className="mb-4">
              Simultaneous Localization and Mapping (SLAM) is a computational technique that enables devices to
              construct or update a map of an unknown environment while simultaneously keeping track of their location
              within it. Unlike traditional positioning systems that rely on pre-installed infrastructure or
              pre-existing maps, SLAM creates its own spatial reference framework in real-time, making it particularly
              valuable for dynamic environments or places where installing positioning infrastructure is impractical.
            </p>

            <ul className="list-disc pl-6 mb-6">
              <li>
                <strong>Dual Process</strong> - Simultaneously builds maps and determines position
              </li>
              <li>
                <strong>Self-Contained</strong> - Operates without pre-installed infrastructure
              </li>
              <li>
                <strong>Sensor-Based</strong> - Uses cameras, LiDAR, radar, or other sensors
              </li>
              <li>
                <strong>Dynamic Adaptation</strong> - Updates maps as environments change
              </li>
            </ul>

            <h2 className="text-2xl font-bold mt-8 mb-4">How SLAM Works</h2>

            <div className="bg-blue-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Core Principles of SLAM</h3>
              <p className="mb-4">SLAM operates through a continuous cycle of key processes:</p>

              <ol className="list-decimal pl-6 mb-4">
                <li>
                  <strong>Sensor Data Collection</strong> - Gathering raw data from cameras, LiDAR, or other sensors
                </li>
                <li>
                  <strong>Feature Extraction</strong> - Identifying distinctive landmarks or features in the environment
                </li>
                <li>
                  <strong>Data Association</strong> - Matching observed features with previously mapped features
                </li>
                <li>
                  <strong>State Estimation</strong> - Updating the estimated position based on matched features
                </li>
                <li>
                  <strong>Map Update</strong> - Refining the map with newly observed features and positions
                </li>
                <li>
                  <strong>Loop Closure</strong> - Recognizing previously visited locations to correct accumulated errors
                </li>
              </ol>

              <h4 className="font-semibold mt-4 mb-2">Common SLAM Approaches:</h4>
              <ul className="list-disc pl-6 mb-4">
                <li>
                  <strong>Filter-Based SLAM</strong> - Uses probabilistic filters like Extended Kalman Filters (EKF) or
                  Particle Filters
                </li>
                <li>
                  <strong>Graph-Based SLAM</strong> - Represents the problem as a graph optimization challenge
                </li>
                <li>
                  <strong>Visual SLAM</strong> - Primarily uses camera images for mapping and localization
                </li>
                <li>
                  <strong>LiDAR SLAM</strong> - Uses laser scanning for precise distance measurements
                </li>
                <li>
                  <strong>RGB-D SLAM</strong> - Combines color images with depth information
                </li>
              </ul>
            </div>

            <div className="relative h-64 w-full rounded-xl overflow-hidden mb-8">
              <Image
                src="/placeholder-h6yht.png"
                alt="SLAM feature extraction and mapping process visualization"
                fill
                className="object-cover"
              />
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4">Key Technical Components</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Map className="mr-2 h-5 w-5 text-blue-600" />
                    Sensing Technologies
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Cameras</strong> - Monocular, stereo, or RGB-D for visual features
                    </li>
                    <li>
                      <strong>LiDAR</strong> - Precise distance measurements using laser
                    </li>
                    <li>
                      <strong>Radar</strong> - Radio waves for feature detection through various conditions
                    </li>
                    <li>
                      <strong>Inertial Sensors</strong> - Accelerometers and gyroscopes for motion tracking
                    </li>
                    <li>
                      <strong>Wheel Encoders</strong> - Odometry data for ground vehicles
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4 flex items-center">
                    <Server className="mr-2 h-5 w-5 text-blue-600" />
                    Algorithmic Components
                  </h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Feature Detectors</strong> - Algorithms to identify distinctive landmarks
                    </li>
                    <li>
                      <strong>State Estimators</strong> - Kalman filters, particle filters, or optimization methods
                    </li>
                    <li>
                      <strong>Loop Closure Detection</strong> - Recognizing previously visited locations
                    </li>
                    <li>
                      <strong>Map Representation</strong> - Point clouds, occupancy grids, or feature maps
                    </li>
                    <li>
                      <strong>Global Optimization</strong> - Techniques to refine the entire map and trajectory
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">SLAM for Real-Time Location Systems</h2>
            <p className="mb-4">
              When implemented as part of an RTLS solution, SLAM technology offers several unique capabilities:
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Building className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Infrastructure-Free</h3>
                </div>
                <p className="text-sm">Operates without pre-installed beacons or anchors</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Map className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Dynamic Mapping</h3>
                </div>
                <p className="text-sm">Adapts to changing environments in real-time</p>
              </div>

              <div className="bg-white p-4 rounded-lg border border-gray-200 shadow-sm">
                <div className="flex items-center mb-3">
                  <Compass className="h-5 w-5 text-blue-600 mr-2" />
                  <h3 className="font-semibold">Self-Contained</h3>
                </div>
                <p className="text-sm">Provides both positioning and environmental mapping</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Advantages and Limitations</h2>

            <Tabs defaultValue="advantages" className="mb-8">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="advantages">Advantages</TabsTrigger>
                <TabsTrigger value="limitations">Limitations</TabsTrigger>
              </TabsList>
              <TabsContent value="advantages" className="p-4 bg-white border rounded-b-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>No Infrastructure Required</strong> - Functions without pre-installed beacons or anchors
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Adaptability</strong> - Works in unknown or changing environments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Dual Functionality</strong> - Provides both positioning and mapping capabilities
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Scalability</strong> - Can be deployed in environments of various sizes
                    </span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="h-5 w-5 text-green-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Rich Environmental Data</strong> - Captures detailed information about surroundings
                    </span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="limitations" className="p-4 bg-white border rounded-b-lg">
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Computational Intensity</strong> - Requires significant processing power
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Feature Dependency</strong> - Struggles in featureless or highly repetitive environments
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Drift Accumulation</strong> - Errors can compound over time without loop closure
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Sensor Quality Dependency</strong> - Performance heavily influenced by sensor quality
                    </span>
                  </li>
                  <li className="flex items-start">
                    <XCircle className="h-5 w-5 text-red-600 mr-2 mt-0.5 flex-shrink-0" />
                    <span>
                      <strong>Environmental Sensitivity</strong> - Performance affected by lighting, motion blur, etc.
                    </span>
                  </li>
                </ul>
              </TabsContent>
            </Tabs>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Considerations</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Hardware Selection</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>Sensor Type</strong> - Camera, LiDAR, or multi-sensor approach
                    </li>
                    <li>
                      <strong>Processing Platform</strong> - On-device, edge, or cloud computing
                    </li>
                    <li>
                      <strong>Power Requirements</strong> - Battery life vs. performance trade-offs
                    </li>
                    <li>
                      <strong>Form Factor</strong> - Size and weight constraints for mobile applications
                    </li>
                    <li>
                      <strong>Environmental Robustness</strong> - Dust, moisture, lighting conditions
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-4">Algorithm Selection</h3>
                  <ul className="space-y-2">
                    <li>
                      <strong>SLAM Approach</strong> - Filter-based, graph-based, or visual methods
                    </li>
                    <li>
                      <strong>Map Representation</strong> - Point cloud, feature-based, or occupancy grid
                    </li>
                    <li>
                      <strong>Loop Closure Strategy</strong> - Visual, geometric, or hybrid techniques
                    </li>
                    <li>
                      <strong>Real-time Requirements</strong> - Latency constraints and update frequency
                    </li>
                    <li>
                      <strong>Accuracy Needs</strong> - Precision requirements for the application
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <h3 className="text-xl font-semibold mt-6 mb-4">SLAM Variants Comparison</h3>

            <div className="overflow-x-auto mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>SLAM Variant</TableHead>
                    <TableHead>Primary Sensors</TableHead>
                    <TableHead>Typical Accuracy</TableHead>
                    <TableHead>Best For</TableHead>
                    <TableHead>Limitations</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Visual SLAM</TableCell>
                    <TableCell>Cameras (mono/stereo)</TableCell>
                    <TableCell>0.1-5% of distance traveled</TableCell>
                    <TableCell>Feature-rich environments, low-cost deployments</TableCell>
                    <TableCell>Sensitive to lighting, requires texture</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">LiDAR SLAM</TableCell>
                    <TableCell>LiDAR sensors</TableCell>
                    <TableCell>1-10 cm</TableCell>
                    <TableCell>Precise mapping, variable lighting conditions</TableCell>
                    <TableCell>Higher cost, larger hardware footprint</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">RGB-D SLAM</TableCell>
                    <TableCell>Depth cameras</TableCell>
                    <TableCell>1-10 cm</TableCell>
                    <TableCell>Indoor environments, moderate cost</TableCell>
                    <TableCell>Limited range, indoor use only</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Inertial-Visual SLAM</TableCell>
                    <TableCell>Cameras + IMU</TableCell>
                    <TableCell>0.5-3% of distance traveled</TableCell>
                    <TableCell>Dynamic motion, handheld devices</TableCell>
                    <TableCell>Drift during rapid movements</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Multi-Sensor SLAM</TableCell>
                    <TableCell>Combination of multiple sensors</TableCell>
                    <TableCell>0.5-5 cm</TableCell>
                    <TableCell>Challenging environments, high reliability needs</TableCell>
                    <TableCell>Complexity, higher cost, calibration challenges</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Key Industry Applications</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Robotics & Automation</h3>
                <p className="text-sm mb-3">
                  Autonomous navigation for robots in warehouses, factories, and dynamic environments
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Primary application</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Augmented Reality</h3>
                <p className="text-sm mb-3">
                  Spatial mapping and positioning for immersive AR experiences without markers
                </p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Growing rapidly</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Autonomous Vehicles</h3>
                <p className="text-sm mb-3">Environmental mapping and localization for self-driving cars and drones</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>High growth sector</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Construction & Surveying</h3>
                <p className="text-sm mb-3">Real-time mapping and progress monitoring of construction sites</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Emerging application</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Search & Rescue</h3>
                <p className="text-sm mb-3">Mapping unknown or disaster-affected areas for emergency response</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>Critical application</span>
                </div>
              </div>

              <div className="bg-white p-5 rounded-lg border border-gray-200 shadow-sm">
                <h3 className="font-semibold text-lg mb-2">Logistics & Inventory</h3>
                <p className="text-sm mb-3">Automated inventory scanning and warehouse mapping</p>
                <div className="flex items-center text-blue-600 text-sm">
                  <CheckCircle className="h-4 w-4 mr-1" />
                  <span>High ROI potential</span>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Future Trends in SLAM Technology</h2>

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-xl mb-8">
              <h3 className="text-xl font-semibold mb-4">Emerging Developments</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4 className="font-semibold mb-2">Deep Learning Integration</h4>
                  <p className="text-sm mb-4">
                    Neural networks enhancing feature detection, loop closure, and semantic understanding
                  </p>

                  <h4 className="font-semibold mb-2">Collaborative SLAM</h4>
                  <p className="text-sm mb-4">
                    Multiple devices sharing mapping data for faster and more accurate environmental modeling
                  </p>

                  <h4 className="font-semibold mb-2">Edge Computing Optimization</h4>
                  <p className="text-sm">More efficient algorithms enabling SLAM on resource-constrained devices</p>
                </div>

                <div>
                  <h4 className="font-semibold mb-2">Semantic SLAM</h4>
                  <p className="text-sm mb-4">
                    Adding object recognition and scene understanding to traditional geometric mapping
                  </p>

                  <h4 className="font-semibold mb-2">Dynamic Environment Handling</h4>
                  <p className="text-sm mb-4">
                    Better techniques for mapping and navigating in environments with moving objects
                  </p>

                  <h4 className="font-semibold mb-2">Miniaturization</h4>
                  <p className="text-sm">
                    Smaller, more energy-efficient sensors enabling SLAM on wearable and IoT devices
                  </p>
                </div>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Comparison with Other RTLS Technologies</h2>

            <div className="overflow-x-auto mb-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Feature</TableHead>
                    <TableHead>SLAM</TableHead>
                    <TableHead>UWB</TableHead>
                    <TableHead>BLE</TableHead>
                    <TableHead>Wi-Fi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="font-medium">Infrastructure Requirements</TableCell>
                    <TableCell>Minimal to none</TableCell>
                    <TableCell>Anchors needed</TableCell>
                    <TableCell>Beacons needed</TableCell>
                    <TableCell>Access points needed</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Typical Accuracy</TableCell>
                    <TableCell>1-10 cm (varies by sensor)</TableCell>
                    <TableCell>10-30 cm</TableCell>
                    <TableCell>1-3 m</TableCell>
                    <TableCell>3-15 m</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Environmental Mapping</TableCell>
                    <TableCell>Yes (core feature)</TableCell>
                    <TableCell>No</TableCell>
                    <TableCell>No</TableCell>
                    <TableCell>No</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Computational Requirements</TableCell>
                    <TableCell>High</TableCell>
                    <TableCell>Low</TableCell>
                    <TableCell>Low</TableCell>
                    <TableCell>Medium</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Deployment Complexity</TableCell>
                    <TableCell>Medium (algorithm tuning)</TableCell>
                    <TableCell>High (precise anchor placement)</TableCell>
                    <TableCell>Medium (beacon deployment)</TableCell>
                    <TableCell>Low (if existing)</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium">Adaptability to Changes</TableCell>
                    <TableCell>High (self-mapping)</TableCell>
                    <TableCell>Low (fixed infrastructure)</TableCell>
                    <TableCell>Low (fixed infrastructure)</TableCell>
                    <TableCell>Low (fixed infrastructure)</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Implementation Best Practices</h2>

            <div className="space-y-4 mb-8">
              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Select Appropriate Sensors</h3>
                <p className="text-sm">
                  Choose sensors based on the environment and accuracy requirements. LiDAR provides excellent precision
                  but at higher cost, while cameras offer a more economical solution for feature-rich environments.
                  Consider multi-sensor approaches for challenging conditions.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Optimize for the Environment</h3>
                <p className="text-sm">
                  Tune SLAM parameters for the specific deployment environment. Consider lighting conditions for visual
                  SLAM, feature density for all SLAM types, and the dynamic nature of the space. Test thoroughly in
                  representative conditions.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Balance Performance and Resources</h3>
                <p className="text-sm">
                  Find the right trade-off between accuracy, update rate, and computational requirements. Consider edge
                  computing for latency-sensitive applications and cloud processing for complex environments or when
                  power is constrained.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Implement Loop Closure</h3>
                <p className="text-sm">
                  Ensure robust loop closure detection to correct accumulated drift. This is critical for long-term
                  operation and large environments. Consider global features, visual place recognition, or geometric
                  consistency checks.
                </p>
              </div>

              <div className="bg-white p-5 rounded-lg border-l-4 border-blue-600">
                <h3 className="font-semibold mb-2">Consider Hybrid Approaches</h3>
                <p className="text-sm">
                  For mission-critical applications, combine SLAM with complementary positioning technologies. This can
                  provide redundancy, improve accuracy, and address SLAM's limitations in certain scenarios.
                </p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mt-8 mb-4">Conclusion</h2>
            <p className="mb-4">
              Simultaneous Localization and Mapping (SLAM) represents a paradigm shift in real-time location systems,
              moving away from infrastructure-dependent approaches to self-contained, adaptive positioning solutions. By
              simultaneously building maps and determining position within those maps, SLAM offers unique advantages for
              dynamic environments, unknown spaces, and applications where installing positioning infrastructure is
              impractical.
            </p>
            <p className="mb-4">
              While SLAM introduces computational complexity and has specific environmental requirements, its ability to
              operate without pre-installed infrastructure and adapt to changing environments makes it an increasingly
              valuable technology for robotics, augmented reality, autonomous vehicles, and other emerging applications.
            </p>
            <p>
              As sensors become more affordable, algorithms more efficient, and computing power more accessible, SLAM is
              poised to become an increasingly important component in the RTLS ecosystem, particularly in applications
              requiring both positioning and environmental understanding.
            </p>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">SLAM Technology Overview</h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Building className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Infrastructure</h4>
                  <p className="text-sm text-gray-600">Minimal to none required</p>
                </div>
              </div>

              <div className="flex items-start">
                <Ruler className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Accuracy Range</h4>
                  <p className="text-sm text-gray-600">1-10 cm typical (sensor dependent)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Compass className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Environment</h4>
                  <p className="text-sm text-gray-600">Feature-rich indoor/outdoor spaces</p>
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
                  <p className="text-sm text-gray-600">Low (no infrastructure) to medium (algorithm tuning)</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Ideal Applications</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Autonomous mobile robots</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Augmented reality</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Drone navigation</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Dynamic environments</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Temporary deployments</span>
              </li>
            </ul>

            <Link href="/contact">
              <Button className="w-full">Contact RTLS Expert</Button>
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
                  <Radio className="h-4 w-4 mr-2" />
                  <span>LiDAR</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/ai-cameras"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Radio className="h-4 w-4 mr-2" />
                  <span>AI + Cameras</span>
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
                  href="/rtls-digital-twin/technologies/dead-reckoning"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Navigation className="h-4 w-4 mr-2" />
                  <span>Dead Reckoning + RTLS Anchors</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/rtls-digital-twin/technologies/magnetic-field"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Compass className="h-4 w-4 mr-2" />
                  <span>Magnetic Field Mapping</span>
                </Link>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
            <h3 className="text-lg font-bold mb-4">Resources</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/resources/enterprise-rtls-step-by-step-implementation-guide"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>RTLS Implementation Guide</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/vision-slam-vs-lidar-choosing-ideal-rtls"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Visual vs. LiDAR SLAM Analysis</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/vision-slam-vs-lidar-vio-3d-mapping-rtls"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>SLAM Mapping Strategies</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
