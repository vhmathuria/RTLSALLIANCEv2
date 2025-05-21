"use client"
import Link from "next/link"
import { ArrowRight, Building, Cpu, Database, Layers, Map } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { useScrollToTop } from "@/hooks/useScrollToTop"

export default function SLAMTechnologyClientPage() {
  useScrollToTop()

  return (
    <div className="container mx-auto py-8 px-4">
      <article>
        <header className="mb-10">
          <h1 className="text-3xl font-bold mb-4">SLAM Technology for Real-Time Location Systems</h1>
          <p className="text-lg text-muted-foreground mb-8">
            Simultaneous Localization and Mapping (SLAM) enables devices to build maps of unknown environments while
            simultaneously tracking their position within those maps, providing a powerful solution for dynamic
            environments without pre-existing infrastructure.
          </p>
        </header>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Overview</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <p className="mb-4">
                Simultaneous Localization and Mapping (SLAM) is a computational technique that enables devices to
                construct or update a map of an unknown environment while simultaneously keeping track of their location
                within it. Unlike traditional positioning systems that rely on pre-installed infrastructure or
                pre-existing maps, SLAM creates its own spatial reference framework in real-time.
              </p>
              <p className="mb-4">
                SLAM technology has revolutionized autonomous navigation by allowing devices to operate in previously
                unmapped environments. It combines data from various sensors such as cameras, LiDAR, radar, and inertial
                measurement units to create a coherent understanding of the surrounding space.
              </p>
            </div>
            <div className="border rounded-md p-6">
              <h3 className="text-lg font-semibold mb-4">Key Specifications</h3>
              <div className="space-y-2">
                <div className="flex items-start">
                  <span className="font-medium w-32">Accuracy:</span>
                  <span>1-10 cm (sensor dependent)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium w-32">Range:</span>
                  <span>Environment dependent (typically 1-100m)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium w-32">Infrastructure:</span>
                  <span>Minimal to none required</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium w-32">Power Consumption:</span>
                  <span>Medium to high (processing intensive)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium w-32">Cost:</span>
                  <span>Medium to high (sensor dependent)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium w-32">Deployment:</span>
                  <span>Low complexity (no infrastructure) to medium (algorithm tuning)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium w-32">Update Rate:</span>
                  <span>10-60 Hz (processing power dependent)</span>
                </div>
                <div className="flex items-start">
                  <span className="font-medium w-32">Environment:</span>
                  <span>Indoor/outdoor, feature-rich environments</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">How SLAM Works</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Core Principles</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  SLAM operates through a continuous cycle of key processes that work together to build a map while
                  tracking position:
                </p>
                <ol className="list-decimal pl-5 space-y-1">
                  <li>
                    <strong>Sensor Data Collection</strong> - Gathering raw data from cameras, LiDAR, or other sensors
                  </li>
                  <li>
                    <strong>Feature Extraction</strong> - Identifying distinctive landmarks or features in the
                    environment
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
                    <strong>Loop Closure</strong> - Recognizing previously visited locations to correct accumulated
                    errors
                  </li>
                </ol>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">SLAM Approaches</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  Different SLAM implementations use various algorithms and sensor combinations to achieve optimal
                  performance:
                </p>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Filter-Based SLAM</strong> - Uses probabilistic filters like Extended Kalman Filters (EKF)
                    or Particle Filters
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
                  <li>
                    <strong>Inertial-Visual SLAM</strong> - Fuses camera data with inertial measurements
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Advantages & Limitations</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-green-600">Advantages</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>No Infrastructure Required</strong> - Functions without pre-installed beacons or anchors
                  </li>
                  <li>
                    <strong>Adaptability</strong> - Works in unknown or changing environments
                  </li>
                  <li>
                    <strong>Dual Functionality</strong> - Provides both positioning and mapping capabilities
                  </li>
                  <li>
                    <strong>Scalability</strong> - Can be deployed in environments of various sizes
                  </li>
                  <li>
                    <strong>Rich Environmental Data</strong> - Captures detailed information about surroundings
                  </li>
                  <li>
                    <strong>Self-Contained</strong> - Operates independently of external reference systems
                  </li>
                  <li>
                    <strong>Dynamic Adaptation</strong> - Updates maps as environments change
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-red-600">Limitations</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Computational Intensity</strong> - Requires significant processing power
                  </li>
                  <li>
                    <strong>Feature Dependency</strong> - Struggles in featureless or highly repetitive environments
                  </li>
                  <li>
                    <strong>Drift Accumulation</strong> - Errors can compound over time without loop closure
                  </li>
                  <li>
                    <strong>Sensor Quality Dependency</strong> - Performance heavily influenced by sensor quality
                  </li>
                  <li>
                    <strong>Environmental Sensitivity</strong> - Performance affected by lighting, motion blur, etc.
                  </li>
                  <li>
                    <strong>Initialization Challenges</strong> - May require specific procedures to start mapping
                  </li>
                  <li>
                    <strong>Power Consumption</strong> - Higher energy requirements than simpler positioning methods
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Industry Applications</h2>
          <Tabs defaultValue="robotics">
            <TabsList className="grid grid-cols-2 md:grid-cols-5 h-auto mb-4">
              <TabsTrigger value="robotics" className="flex flex-col py-2 h-auto">
                <Cpu className="h-5 w-5 mb-1" />
                <span>Robotics</span>
              </TabsTrigger>
              <TabsTrigger value="ar" className="flex flex-col py-2 h-auto">
                <Layers className="h-5 w-5 mb-1" />
                <span>AR/VR</span>
              </TabsTrigger>
              <TabsTrigger value="automotive" className="flex flex-col py-2 h-auto">
                <Map className="h-5 w-5 mb-1" />
                <span>Automotive</span>
              </TabsTrigger>
              <TabsTrigger value="construction" className="flex flex-col py-2 h-auto">
                <Building className="h-5 w-5 mb-1" />
                <span>Construction</span>
              </TabsTrigger>
              <TabsTrigger value="logistics" className="flex flex-col py-2 h-auto">
                <Database className="h-5 w-5 mb-1" />
                <span>Logistics</span>
              </TabsTrigger>
            </TabsList>
            <TabsContent value="robotics" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Robotics & Automation</CardTitle>
                  <CardDescription>
                    SLAM enables autonomous navigation in dynamic industrial environments
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    In robotics and automation, SLAM technology provides the foundation for autonomous navigation in
                    warehouses, factories, and other industrial settings. Mobile robots use SLAM to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Navigate complex and changing factory floors without fixed infrastructure</li>
                    <li>Perform autonomous inventory management and material transport</li>
                    <li>Adapt to dynamic environments where obstacles and pathways change frequently</li>
                    <li>Create and maintain accurate facility maps for fleet management</li>
                    <li>Enable collaborative operation between multiple robots sharing map data</li>
                  </ul>
                  <p>
                    Leading robotics companies have reported 30-40% increases in operational efficiency when
                    implementing SLAM-based navigation compared to traditional path-following systems.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="ar" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Augmented & Virtual Reality</CardTitle>
                  <CardDescription>SLAM provides spatial awareness for immersive AR/VR experiences</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    In AR/VR applications, SLAM technology enables devices to understand their position and orientation
                    relative to the physical world, allowing for:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Persistent AR content placement in real-world locations</li>
                    <li>Markerless AR experiences that work in any environment</li>
                    <li>Real-time occlusion of virtual objects by physical objects</li>
                    <li>Shared AR experiences where multiple users see the same virtual content</li>
                    <li>Indoor navigation with AR wayfinding overlays</li>
                  </ul>
                  <p>
                    Modern AR platforms like Apple's ARKit and Google's ARCore rely heavily on SLAM algorithms to
                    deliver convincing mixed reality experiences without requiring external tracking systems.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="automotive" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Automotive & Autonomous Vehicles</CardTitle>
                  <CardDescription>
                    SLAM provides critical environmental mapping for self-driving systems
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    In autonomous vehicles and advanced driver assistance systems, SLAM technology contributes to:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>High-definition map creation and updates for autonomous navigation</li>
                    <li>Real-time obstacle detection and avoidance</li>
                    <li>Precise localization in GPS-denied environments like tunnels and urban canyons</li>
                    <li>Parking assistance systems with centimeter-level accuracy</li>
                    <li>Traffic infrastructure mapping and recognition</li>
                  </ul>
                  <p>
                    Autonomous vehicle developers combine SLAM with other sensing technologies to create redundant,
                    fault-tolerant navigation systems that can operate safely in complex urban environments.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="construction" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Construction & Surveying</CardTitle>
                  <CardDescription>SLAM enables rapid 3D mapping and progress monitoring</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">
                    In construction and surveying applications, SLAM technology provides valuable capabilities for:
                  </p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Rapid as-built documentation of construction sites</li>
                    <li>Progress monitoring through comparison of current state to design models</li>
                    <li>Safety inspection of hazardous or difficult-to-access areas</li>
                    <li>Equipment tracking and utilization analysis</li>
                    <li>Reality capture for Building Information Modeling (BIM) integration</li>
                  </ul>
                  <p>
                    Construction firms using SLAM-based scanning report up to 80% time savings compared to traditional
                    surveying methods, with the added benefit of comprehensive visual documentation.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="logistics" className="mt-2">
              <Card className="border">
                <CardHeader>
                  <CardTitle>Logistics & Inventory Management</CardTitle>
                  <CardDescription>
                    SLAM enables automated inventory tracking and warehouse optimization
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="mb-4">In logistics and inventory management, SLAM technology supports:</p>
                  <ul className="list-disc pl-5 space-y-1 mb-4">
                    <li>Automated inventory scanning and cycle counting</li>
                    <li>Warehouse mapping and optimization</li>
                    <li>Dynamic routing of autonomous mobile robots (AMRs)</li>
                    <li>Asset tracking and location verification</li>
                    <li>Space utilization analysis and planning</li>
                  </ul>
                  <p>
                    Distribution centers implementing SLAM-based inventory systems have reported inventory accuracy
                    improvements from typical levels of 65-75% to over 95%, while reducing manual labor requirements by
                    up to 30%.
                  </p>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Case Studies</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader>
                <CardTitle>Warehouse Automation with Visual SLAM</CardTitle>
                <CardDescription>Major e-commerce fulfillment center</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A leading e-commerce company implemented a fleet of autonomous mobile robots (AMRs) using visual SLAM
                  technology in their 500,000 sq ft fulfillment center.
                </p>
                <p className="mb-4">
                  <strong>Challenge:</strong> The warehouse layout changed frequently based on inventory needs, making
                  traditional fixed-path robots ineffective. The company needed a flexible solution that could adapt to
                  changing environments without requiring infrastructure installation.
                </p>
                <p className="mb-4">
                  <strong>Solution:</strong> A fleet of 50 AMRs equipped with stereo cameras and visual SLAM algorithms
                  was deployed. The robots collaboratively mapped the facility and shared map updates in real-time
                  through a central server.
                </p>
                <p>
                  <strong>Results:</strong> The implementation reduced order fulfillment time by 28%, increased picking
                  accuracy to 99.8%, and eliminated the need for fixed infrastructure. The system adapted seamlessly to
                  layout changes, with robots automatically updating their shared map when detecting changes.
                </p>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader>
                <CardTitle>Construction Progress Monitoring with LiDAR SLAM</CardTitle>
                <CardDescription>High-rise commercial building project</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="mb-4">
                  A construction firm managing a 40-story commercial building project implemented LiDAR SLAM technology
                  for progress monitoring and quality control.
                </p>
                <p className="mb-4">
                  <strong>Challenge:</strong> Traditional progress monitoring relied on manual measurements and
                  inspections, which were time-consuming, error-prone, and provided limited coverage. The project team
                  needed a more comprehensive and efficient solution.
                </p>
                <p className="mb-4">
                  <strong>Solution:</strong> Weekly scans using handheld LiDAR SLAM devices captured the entire
                  construction site in 3D. The resulting point clouds were compared against the BIM model to identify
                  discrepancies and track progress.
                </p>
                <p>
                  <strong>Results:</strong> The implementation reduced inspection time by 75%, identified construction
                  errors before they became costly problems, and provided comprehensive documentation for client
                  updates. The team estimated cost savings of over $2 million through early error detection and improved
                  coordination.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Implementation Considerations</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Hardware Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Sensor Type</strong> - Choose appropriate sensors (camera, LiDAR, etc.) based on environment
                    and accuracy requirements
                  </li>
                  <li>
                    <strong>Processing Platform</strong> - Select hardware with sufficient computational power for
                    real-time operation
                  </li>
                  <li>
                    <strong>Power Requirements</strong> - Consider battery life for mobile applications
                  </li>
                  <li>
                    <strong>Form Factor</strong> - Ensure size and weight are appropriate for the intended use case
                  </li>
                  <li>
                    <strong>Environmental Robustness</strong> - Select sensors that can handle lighting, dust, and other
                    environmental factors
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Algorithm Selection</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>SLAM Approach</strong> - Choose filter-based, graph-based, or visual methods based on
                    application needs
                  </li>
                  <li>
                    <strong>Map Representation</strong> - Select point cloud, feature-based, or occupancy grid based on
                    use case
                  </li>
                  <li>
                    <strong>Loop Closure Strategy</strong> - Implement robust loop closure for long-term operation
                  </li>
                  <li>
                    <strong>Real-time Requirements</strong> - Balance accuracy with processing speed
                  </li>
                  <li>
                    <strong>Robustness Features</strong> - Include outlier rejection and error recovery mechanisms
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Deployment Strategy</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Environment Testing</strong> - Validate performance in the target environment
                  </li>
                  <li>
                    <strong>Map Management</strong> - Implement strategies for map storage, updates, and sharing
                  </li>
                  <li>
                    <strong>Initialization Process</strong> - Define clear procedures for starting the SLAM system
                  </li>
                  <li>
                    <strong>Failure Recovery</strong> - Plan for sensor failures or algorithm breakdowns
                  </li>
                  <li>
                    <strong>Integration</strong> - Consider how SLAM data will interface with other systems
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Technology Comparison</h2>
          <div className="overflow-x-auto">
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
          <div className="mt-4 text-right">
            <Link
              href="/rtls-digital-twin/technologies"
              className="text-blue-600 hover:underline flex items-center justify-end"
            >
              <span>View all RTLS technologies</span>
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </div>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4">Future Trends</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Technological Advancements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Deep Learning Integration</strong> - Neural networks enhancing feature detection, loop
                    closure, and semantic understanding
                  </li>
                  <li>
                    <strong>Edge Computing Optimization</strong> - More efficient algorithms enabling SLAM on
                    resource-constrained devices
                  </li>
                  <li>
                    <strong>Semantic SLAM</strong> - Adding object recognition and scene understanding to traditional
                    geometric mapping
                  </li>
                  <li>
                    <strong>Dynamic Environment Handling</strong> - Better techniques for mapping and navigating in
                    environments with moving objects
                  </li>
                  <li>
                    <strong>Sensor Miniaturization</strong> - Smaller, more energy-efficient sensors enabling SLAM on
                    wearable and IoT devices
                  </li>
                </ul>
              </CardContent>
            </Card>
            <Card className="border">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">Market & Application Trends</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-1">
                  <li>
                    <strong>Collaborative SLAM</strong> - Multiple devices sharing mapping data for faster and more
                    accurate environmental modeling
                  </li>
                  <li>
                    <strong>Cloud-SLAM Hybrid Systems</strong> - Combining on-device processing with cloud resources for
                    enhanced capabilities
                  </li>
                  <li>
                    <strong>Consumer Applications</strong> - SLAM becoming more common in smartphones and consumer
                    electronics
                  </li>
                  <li>
                    <strong>Digital Twin Integration</strong> - SLAM-generated maps feeding into digital twin platforms
                    for facility management
                  </li>
                  <li>
                    <strong>Cross-Platform Standardization</strong> - Development of common formats and protocols for
                    SLAM data exchange
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-6">Related Resources</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/resources/vision-slam-vs-lidar-choosing-ideal-rtls"
                    className="text-blue-600 hover:underline"
                  >
                    Vision SLAM vs LiDAR: Choosing the Ideal RTLS
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    Compare visual and LiDAR SLAM approaches for different industrial applications and environments.
                  </p>
                </li>
                <li>
                  <Link
                    href="/resources/rtls-101-core-components-protocols-deployment-models"
                    className="text-blue-600 hover:underline"
                  >
                    RTLS 101: Core Components, Protocols & Deployment Models
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    Learn how SLAM fits into the broader RTLS ecosystem and complements other positioning technologies.
                  </p>
                </li>
                <li>
                  <Link
                    href="/resources/indoor-outdoor-tracking-seamless-positioning"
                    className="text-blue-600 hover:underline"
                  >
                    Indoor-Outdoor Tracking: Seamless Positioning Solutions
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    Discover how SLAM can bridge the gap between GPS-based outdoor tracking and indoor positioning
                    systems.
                  </p>
                </li>
                <li>
                  <Link
                    href="/resources/3d-mapping-digital-twin-creation-guide"
                    className="text-blue-600 hover:underline"
                  >
                    3D Mapping & Digital Twin Creation Guide
                  </Link>
                  <p className="text-sm text-gray-600 mt-1">
                    Explore how SLAM technology enables rapid 3D mapping for digital twin applications.
                  </p>
                </li>
              </ul>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="font-semibold text-lg mb-4">Get Expert Guidance</h3>
              <p className="mb-6">
                Need help determining if SLAM technology is right for your specific use case? Our alliance experts can
                provide vendor-neutral advice tailored to your requirements.
              </p>
              <Link href="/contact">
                <Button>Request Consultation</Button>
              </Link>
            </div>
          </div>
        </section>
      </article>
    </div>
  )
}
