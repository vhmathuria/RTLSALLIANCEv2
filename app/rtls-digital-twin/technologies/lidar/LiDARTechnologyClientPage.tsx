"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  Radar,
  ArrowLeft,
  Building,
  Ruler,
  Compass,
  Zap,
  Clock,
  CheckCircle,
  Camera,
  Map,
  Radio,
  Layers,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function LiDARTechnologyClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-white pb-16">
      <div className="container mx-auto px-4 py-12 lg:grid lg:grid-cols-4 lg:gap-8">
        <div className="lg:col-span-3">
          <Link href="/rtls-digital-twin" className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to RTLS + Digital Twin
          </Link>

          <div className="flex items-center mb-8">
            <Radar className="h-10 w-10 text-purple-600 mr-4" />
            <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent">
              LiDAR Technology
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Overview</h2>
            <p>
              Light Detection and Ranging (LiDAR) is an advanced remote sensing technology that uses laser light to
              measure distances and generate precise, three-dimensional information about the shape and surface
              characteristics of objects and environments. Originally developed for surveying and mapping applications,
              LiDAR has evolved to become a powerful technology for real-time location systems (RTLS) and indoor
              positioning.
            </p>

            <p>
              LiDAR systems work by emitting laser pulses and measuring the time it takes for the light to return after
              hitting an object. This time-of-flight measurement allows for extremely accurate distance calculations.
              Modern LiDAR systems can emit hundreds of thousands of pulses per second, creating dense point clouds that
              represent the physical environment with millimeter-level precision.
            </p>

            <div className="my-8 bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Key Characteristics</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Range:</strong> 0.1-300 meters (depending on system type)
                </li>
                <li>
                  <strong>Accuracy:</strong> 1-30 millimeters
                </li>
                <li>
                  <strong>Scan Rate:</strong> 10-300 Hz
                </li>
                <li>
                  <strong>Point Density:</strong> 100,000-2,000,000 points per second
                </li>
                <li>
                  <strong>Field of View:</strong> 30°-360° horizontal, 20°-120° vertical
                </li>
                <li>
                  <strong>Wavelength:</strong> 905nm (near-infrared) or 1550nm (infrared)
                </li>
                <li>
                  <strong>Power Consumption:</strong> Medium to high
                </li>
                <li>
                  <strong>Safety Classification:</strong> Class 1 (eye-safe) to Class 3B (requires safety measures)
                </li>
              </ul>
            </div>

            <h2>Types of LiDAR Systems</h2>
            <p>
              LiDAR systems used in RTLS applications can be categorized based on their scanning mechanism and design:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-purple-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Mechanical LiDAR</h3>
                <p>
                  Uses rotating mirrors or the entire sensor to scan the environment. These systems typically offer high
                  accuracy and long range but are larger, more expensive, and contain moving parts that can wear out
                  over time. Examples include Velodyne's HDL series and SICK's LMS series.
                </p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Solid-State LiDAR</h3>
                <p>
                  Contains no moving parts, instead using technologies like MEMS (Micro-Electro-Mechanical Systems)
                  mirrors, optical phased arrays, or flash illumination. These systems are typically smaller, more
                  durable, and less expensive, though often with reduced range or resolution. Examples include
                  Quanergy's S3 and Innoviz's InnovizOne.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-blue-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">2D LiDAR</h3>
                <p>
                  Scans in a single plane, creating a two-dimensional "slice" of the environment. These systems are
                  simpler and less expensive but provide limited spatial information. They're often used for basic
                  presence detection, people counting, and simple navigation tasks.
                </p>
              </div>

              <div className="bg-violet-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">3D LiDAR</h3>
                <p>
                  Scans in multiple planes or uses other techniques to capture full three-dimensional information. These
                  systems provide comprehensive spatial data but are more complex and expensive. They're used for
                  detailed mapping, advanced object recognition, and precise positioning.
                </p>
              </div>
            </div>

            <h2>How LiDAR Works for RTLS</h2>
            <p>In RTLS applications, LiDAR systems can be deployed in two primary configurations:</p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Infrastructure-Based LiDAR</h3>
                <p>
                  LiDAR sensors are mounted in fixed positions throughout a facility, scanning the environment to detect
                  and track objects and people. These systems create a network of overlapping coverage areas that can
                  monitor large spaces with high precision. The LiDAR sensors connect to a central processing system
                  that combines their data to provide comprehensive tracking.
                </p>
                <h4 className="font-semibold mt-4 mb-2">Key Applications:</h4>
                <ul className="list-disc pl-5">
                  <li>People counting and flow analysis</li>
                  <li>Security and intrusion detection</li>
                  <li>Social distancing monitoring</li>
                  <li>Facility usage optimization</li>
                </ul>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <h3 className="text-xl font-semibold mb-3">Mobile LiDAR</h3>
                <p>
                  LiDAR sensors are mounted on mobile platforms such as robots, vehicles, or handheld devices. These
                  systems scan the environment as they move, building maps and determining their position within those
                  maps. Mobile LiDAR often combines with other technologies like inertial measurement units (IMUs) and
                  wheel encoders for more robust positioning.
                </p>
                <h4 className="font-semibold mt-4 mb-2">Key Applications:</h4>
                <ul className="list-disc pl-5">
                  <li>Autonomous mobile robots (AMRs)</li>
                  <li>Automated guided vehicles (AGVs)</li>
                  <li>Indoor mapping and surveying</li>
                  <li>Asset tracking with mobile scanners</li>
                </ul>
              </div>
            </div>

            <h2>LiDAR RTLS Architecture</h2>
            <p>A typical LiDAR-based RTLS system consists of the following components:</p>

            <div className="my-8 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">System Components</h3>
              <ul className="space-y-4">
                <li>
                  <strong>LiDAR Sensors:</strong> The hardware devices that emit laser pulses and measure their return
                  times. These can be 2D or 3D, mechanical or solid-state, depending on the application requirements.
                </li>
                <li>
                  <strong>Processing Units:</strong> Computers or embedded systems that process the raw LiDAR data,
                  extract features, and run algorithms for object detection, classification, and tracking.
                </li>
                <li>
                  <strong>Networking Infrastructure:</strong> Wired or wireless connections that transmit data between
                  LiDAR sensors and processing units. High-bandwidth connections are often required due to the large
                  volume of point cloud data.
                </li>
                <li>
                  <strong>Software Stack:</strong> Specialized software for point cloud processing, object detection and
                  tracking, map building, and localization. This often includes machine learning components for advanced
                  object classification.
                </li>
                <li>
                  <strong>Integration Layer:</strong> APIs, middleware, and connectors that allow the LiDAR RTLS to
                  communicate with other business systems such as warehouse management systems (WMS), manufacturing
                  execution systems (MES), or security platforms.
                </li>
                <li>
                  <strong>User Interface:</strong> Dashboards, visualizations, and control panels that allow operators
                  to monitor the system, view tracking data, and configure settings.
                </li>
              </ul>
            </div>

            <h2>Positioning Methods</h2>
            <p>LiDAR-based RTLS uses several techniques to determine the position of objects and people:</p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 border-b text-left">Method</th>
                    <th className="py-3 px-4 border-b text-left">Description</th>
                    <th className="py-3 px-4 border-b text-left">Accuracy</th>
                    <th className="py-3 px-4 border-b text-left">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">Direct Detection</td>
                    <td className="py-3 px-4 border-b">
                      Identifying and tracking objects directly from point cloud data
                    </td>
                    <td className="py-3 px-4 border-b">1-5 cm</td>
                    <td className="py-3 px-4 border-b">Large objects, open spaces</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">SLAM (Simultaneous Localization and Mapping)</td>
                    <td className="py-3 px-4 border-b">
                      Building a map while simultaneously determining position within that map
                    </td>
                    <td className="py-3 px-4 border-b">2-10 cm</td>
                    <td className="py-3 px-4 border-b">Mobile platforms, unknown environments</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Feature Matching</td>
                    <td className="py-3 px-4 border-b">
                      Identifying distinctive environmental features and using them as reference points
                    </td>
                    <td className="py-3 px-4 border-b">1-5 cm</td>
                    <td className="py-3 px-4 border-b">Complex environments with distinct features</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Reflector/Marker Based</td>
                    <td className="py-3 px-4 border-b">
                      Using special reflective markers or patterns attached to tracked objects
                    </td>
                    <td className="py-3 px-4 border-b">0.5-2 cm</td>
                    <td className="py-3 px-4 border-b">High-precision applications, controlled environments</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Model Matching</td>
                    <td className="py-3 px-4 border-b">Comparing scan data to pre-defined 3D models of objects</td>
                    <td className="py-3 px-4 border-b">1-3 cm</td>
                    <td className="py-3 px-4 border-b">Known objects with distinctive shapes</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Advantages of LiDAR for RTLS</h2>
            <ul>
              <li>Exceptional accuracy and precision (millimeter to centimeter level)</li>
              <li>Works in varying lighting conditions, including complete darkness</li>
              <li>Provides rich 3D spatial information about the environment</li>
              <li>No need for tags or beacons on tracked objects (non-intrusive tracking)</li>
              <li>Can simultaneously track multiple objects without degradation in performance</li>
              <li>Immune to radio frequency interference</li>
              <li>Capable of detecting object size, shape, and orientation</li>
              <li>Privacy-preserving compared to camera-based systems (no identifiable images)</li>
            </ul>

            <h2>Limitations</h2>
            <ul>
              <li>Higher cost compared to many other RTLS technologies</li>
              <li>Significant processing power required for real-time operation</li>
              <li>Limited ability to identify specific individuals or assets without additional markers</li>
              <li>Performance can be affected by environmental factors like dust, fog, or smoke</li>
              <li>Potential occlusion issues in crowded or complex environments</li>
              <li>Higher power consumption compared to passive technologies</li>
              <li>Some systems have safety considerations due to laser emissions</li>
              <li>Complex installation and calibration requirements</li>
            </ul>

            <h2>Common Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Warehouse Automation</h3>
                <p>Guiding autonomous mobile robots and tracking inventory movement</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Manufacturing</h3>
                <p>Monitoring production lines and ensuring worker safety around machinery</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Retail Analytics</h3>
                <p>Analyzing customer flow, dwell times, and store layout effectiveness</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Security & Surveillance</h3>
                <p>Detecting unauthorized access and monitoring secure areas</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Smart Buildings</h3>
                <p>Optimizing space utilization and automating building systems</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Healthcare</h3>
                <p>Monitoring patient movement and preventing falls in care facilities</p>
              </div>
            </div>

            <h2>Implementation Considerations</h2>
            <p>When implementing a LiDAR-based RTLS solution, consider the following factors:</p>

            <div className="my-8">
              <h3 className="text-xl font-semibold mb-4">Planning and Design</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Sensor Placement</h4>
                  <p>
                    Carefully plan the positioning of LiDAR sensors to ensure comprehensive coverage without blind
                    spots. Consider mounting height, angle, and potential occlusions from fixtures or equipment.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Environmental Factors</h4>
                  <p>
                    Assess the operating environment for conditions that might affect LiDAR performance, such as dust,
                    steam, or bright light sources. Select appropriate IP-rated enclosures for industrial environments.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Processing Infrastructure</h4>
                  <p>
                    Ensure sufficient computing resources for real-time point cloud processing. This may include edge
                    computing devices near sensors or centralized high-performance servers, depending on the
                    architecture.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Network Bandwidth</h4>
                  <p>
                    Plan for the high data throughput requirements of LiDAR systems. A single 3D LiDAR can generate
                    several megabytes of data per second, requiring robust networking infrastructure.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-8">
              <h3 className="text-xl font-semibold mb-4">Technical Considerations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Sensor Selection</h4>
                  <p>
                    Choose appropriate LiDAR sensors based on range, resolution, field of view, and cost requirements.
                    Consider whether 2D or 3D LiDAR is necessary for your application.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Calibration</h4>
                  <p>
                    Develop a robust calibration process for multi-sensor deployments. Accurate extrinsic calibration
                    (determining the relative positions of sensors) is critical for precise tracking.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Software Algorithms</h4>
                  <p>
                    Select or develop appropriate algorithms for object detection, classification, and tracking.
                    Consider whether machine learning approaches are needed for complex environments.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Integration</h4>
                  <p>
                    Plan for integration with existing systems through standardized protocols and APIs. Consider whether
                    real-time data sharing is required and how the LiDAR data will be consumed by other applications.
                  </p>
                </div>
              </div>
            </div>

            <h2>LiDAR vs. Other RTLS Technologies</h2>
            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 border-b text-left">Feature</th>
                    <th className="py-3 px-4 border-b text-left">LiDAR</th>
                    <th className="py-3 px-4 border-b text-left">Camera Vision</th>
                    <th className="py-3 px-4 border-b text-left">UWB</th>
                    <th className="py-3 px-4 border-b text-left">BLE</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">Accuracy</td>
                    <td className="py-3 px-4 border-b">1-30mm</td>
                    <td className="py-3 px-4 border-b">5-50cm</td>
                    <td className="py-3 px-4 border-b">10-30cm</td>
                    <td className="py-3 px-4 border-b">1-3m</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Range</td>
                    <td className="py-3 px-4 border-b">0.1-300m</td>
                    <td className="py-3 px-4 border-b">0.5-50m</td>
                    <td className="py-3 px-4 border-b">10-50m</td>
                    <td className="py-3 px-4 border-b">10-100m</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Tagging Required</td>
                    <td className="py-3 px-4 border-b">No (optional)</td>
                    <td className="py-3 px-4 border-b">No (optional)</td>
                    <td className="py-3 px-4 border-b">Yes</td>
                    <td className="py-3 px-4 border-b">Yes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Privacy Concerns</td>
                    <td className="py-3 px-4 border-b">Low</td>
                    <td className="py-3 px-4 border-b">High</td>
                    <td className="py-3 px-4 border-b">Low</td>
                    <td className="py-3 px-4 border-b">Low</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Lighting Dependency</td>
                    <td className="py-3 px-4 border-b">None</td>
                    <td className="py-3 px-4 border-b">High</td>
                    <td className="py-3 px-4 border-b">None</td>
                    <td className="py-3 px-4 border-b">None</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Cost</td>
                    <td className="py-3 px-4 border-b">High</td>
                    <td className="py-3 px-4 border-b">Medium</td>
                    <td className="py-3 px-4 border-b">Medium-High</td>
                    <td className="py-3 px-4 border-b">Low-Medium</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>Future Trends</h2>
            <p>The LiDAR RTLS market continues to evolve with several emerging trends:</p>
            <ul>
              <li>
                <strong>Miniaturization:</strong> Smaller, more affordable LiDAR sensors enabling wider adoption
              </li>
              <li>
                <strong>Solid-State Technology:</strong> Increased reliability and reduced costs through elimination of
                moving parts
              </li>
              <li>
                <strong>Edge Computing:</strong> More processing at the sensor level for reduced latency and bandwidth
                requirements
              </li>
              <li>
                <strong>AI Integration:</strong> Advanced machine learning algorithms for improved object classification
                and behavior prediction
              </li>
              <li>
                <strong>Sensor Fusion:</strong> Combining LiDAR with cameras, radar, and other sensors for more robust
                tracking
              </li>
              <li>
                <strong>4D LiDAR:</strong> Adding velocity measurement as a fourth dimension for better motion tracking
              </li>
            </ul>

            <div className="bg-gradient-to-r from-purple-50 to-indigo-50 p-6 rounded-xl my-8">
              <h2 className="mb-4">Ready to implement LiDAR technology in your RTLS solution?</h2>
              <p className="mb-4">
                The RTLS Alliance can connect you with certified providers and implementation experts who specialize in
                LiDAR-based tracking and positioning systems.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-purple-600 hover:bg-purple-700 text-white">Contact Us</Button>
                </Link>
                <Link href="/ecosystem/directory">
                  <Button variant="outline" className="border-purple-600 text-purple-600 hover:bg-purple-50">
                    Find LiDAR Providers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6 mb-6">
            <h3 className="text-lg font-bold mb-4">LiDAR Technology Overview</h3>

            <div className="space-y-4 mb-6">
              <div className="flex items-start">
                <Building className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Infrastructure</h4>
                  <p className="text-sm text-gray-600">Fixed LiDAR sensors or mobile units</p>
                </div>
              </div>

              <div className="flex items-start">
                <Ruler className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Accuracy Range</h4>
                  <p className="text-sm text-gray-600">1-10 cm typical</p>
                </div>
              </div>

              <div className="flex items-start">
                <Compass className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Environment</h4>
                  <p className="text-sm text-gray-600">Indoor/outdoor, industrial, warehouses</p>
                </div>
              </div>

              <div className="flex items-start">
                <Zap className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Power Requirements</h4>
                  <p className="text-sm text-gray-600">Medium to high (active scanning)</p>
                </div>
              </div>

              <div className="flex items-start">
                <Clock className="h-5 w-5 text-blue-600 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold">Setup Time</h4>
                  <p className="text-sm text-gray-600">Medium (sensor placement and calibration)</p>
                </div>
              </div>
            </div>

            <h4 className="font-semibold mb-3">Ideal Applications</h4>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Autonomous vehicles</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Robotic navigation</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">3D mapping</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">People counting and tracking</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="h-4 w-4 text-green-600 mr-2" />
                <span className="text-sm">Security and surveillance</span>
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
                  href="/rtls-digital-twin/technologies/ai-cameras"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  <span>AI + Cameras</span>
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
                  href="/rtls-digital-twin/technologies/uwb"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Radio className="h-4 w-4 mr-2" />
                  <span>Ultra-Wideband (UWB)</span>
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
                  href="/rtls-digital-twin/technologies/infrared"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <Camera className="h-4 w-4 mr-2" />
                  <span>Infrared</span>
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
                  <span>RTLS Deployment Guide</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/vision-slam-vs-lidar-vio-3d-mapping-rtls"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>Mapping Optimization</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/vision-slam-vs-lidar-choosing-ideal-rtls"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>LiDAR vs SLAM Analysis</span>
                </Link>
              </li>
              <li>
                <Link
                  href="/resources/vision-rtls-warehousing-60-percent-pick-time-improvement"
                  className="flex items-center text-blue-600 hover:underline"
                >
                  <ArrowRight className="h-4 w-4 mr-2" />
                  <span>RTLS Success Story</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
  )
}
