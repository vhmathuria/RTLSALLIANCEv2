"use client"

import { useEffect } from "react"
import Link from "next/link"
import {
  Camera,
  Cpu,
  ArrowLeft,
  Building,
  Ruler,
  Compass,
  Zap,
  Clock,
  CheckCircle,
  Map,
  Layers,
  Radio,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function AICamerasTechnologyClientPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <main className="bg-white pb-16">
      <div className="container mx-auto px-4 py-12 lg:grid grid-cols-4 gap-8">
        <div className="lg:col-span-3">
          <Link href="/rtls-digital-twin" className="flex items-center text-blue-600 hover:text-blue-800 mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to RTLS + Digital Twin
          </Link>

          <div className="flex items-center mb-8">
            <div className="flex items-center justify-center h-10 w-10 bg-red-600 text-white rounded-full mr-4">
              <Camera className="h-6 w-6" />
              <Cpu className="h-4 w-4 absolute" />
            </div>
            <h1 className="text-4xl font-bold bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              AI + Cameras Technology
            </h1>
          </div>

          <div className="prose prose-lg max-w-none">
            <h2>Overview</h2>
            <p>
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

            <div className="my-8 bg-gray-50 p-6 rounded-xl shadow-sm">
              <h3 className="text-xl font-semibold mb-4">Key Characteristics</h3>
              <ul className="space-y-2">
                <li>
                  <strong>Range:</strong> 1-100 meters (depending on camera specifications)
                </li>
                <li>
                  <strong>Accuracy:</strong> 5-50 centimeters (depending on distance and resolution)
                </li>
                <li>
                  <strong>Resolution:</strong> 1080p to 4K+ (higher resolutions enable tracking at greater distances)
                </li>
                <li>
                  <strong>Frame Rate:</strong> 15-60 fps (higher frame rates improve tracking of fast-moving objects)
                </li>
                <li>
                  <strong>Field of View:</strong> 60°-360° (depending on lens type and camera configuration)
                </li>
                <li>
                  <strong>Processing:</strong> Edge, fog, or cloud computing (or hybrid approaches)
                </li>
                <li>
                  <strong>Power Consumption:</strong> Medium to high (depending on processing location)
                </li>
                <li>
                  <strong>Lighting Dependency:</strong> Medium to high (though infrared cameras can work in darkness)
                </li>
              </ul>
            </div>

            <h2>Types of AI Camera Systems</h2>
            <p>
              AI camera systems used in RTLS applications can be categorized based on their hardware configuration and
              processing approach:
            </p>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-red-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Fixed Camera Networks</h3>
                <p>
                  Multiple cameras installed throughout a facility with overlapping fields of view. These systems
                  provide comprehensive coverage and can track objects as they move between camera zones. They typically
                  require more extensive installation but offer the most complete tracking solution.
                </p>
              </div>

              <div className="bg-orange-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Smart Cameras</h3>
                <p>
                  Self-contained units with built-in processing capabilities. These cameras perform AI analysis directly
                  on the device (edge computing), reducing bandwidth requirements and latency. They're easier to deploy
                  but may have more limited processing power than centralized systems.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 my-8">
              <div className="bg-amber-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">Stereo Vision Systems</h3>
                <p>
                  Cameras arranged in pairs to enable depth perception through triangulation, similar to human vision.
                  These systems provide accurate 3D positioning without requiring multiple viewpoints, making them
                  suitable for specific zones where precise depth information is needed.
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-xl">
                <h3 className="text-xl font-semibold mb-3">PTZ (Pan-Tilt-Zoom) Systems</h3>
                <p>
                  Cameras that can move and adjust their field of view based on AI detection. These systems can cover
                  large areas with fewer cameras by dynamically focusing on areas of interest. They're particularly
                  useful for security applications and tracking in large open spaces.
                </p>
              </div>
            </div>

            <h2>How AI + Cameras Work for RTLS</h2>
            <p>AI-powered camera systems for RTLS typically follow a multi-stage processing pipeline:</p>

            <div className="my-8 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">Processing Pipeline</h3>
              <ol className="space-y-4">
                <li>
                  <strong>Image Acquisition:</strong> Cameras capture video frames at a specified resolution and frame
                  rate. Multiple cameras may be synchronized to enable cross-camera tracking.
                </li>
                <li>
                  <strong>Preprocessing:</strong> Raw images are processed to correct for distortion, enhance contrast,
                  or normalize lighting conditions. This step may also include background subtraction to identify moving
                  objects.
                </li>
                <li>
                  <strong>Object Detection:</strong> AI algorithms (typically deep neural networks) identify and
                  classify objects of interest in each frame, creating bounding boxes around people, vehicles,
                  equipment, or other relevant items.
                </li>
                <li>
                  <strong>Feature Extraction:</strong> The system extracts distinctive features from each detected
                  object to enable tracking and re-identification across frames and between different cameras.
                </li>
                <li>
                  <strong>Object Tracking:</strong> Algorithms associate detections across consecutive frames to create
                  continuous tracks, maintaining object identity even when temporarily occluded or moving between
                  cameras.
                </li>
                <li>
                  <strong>3D Positioning:</strong> For systems with multiple viewpoints or stereo vision, the 2D
                  positions from each camera are combined to calculate precise 3D coordinates in the physical space.
                </li>
                <li>
                  <strong>Behavior Analysis:</strong> Advanced systems may analyze movement patterns, interactions, and
                  activities to identify specific behaviors or anomalies.
                </li>
                <li>
                  <strong>Data Integration:</strong> Tracking information is formatted and transmitted to other systems
                  for visualization, analysis, or integration with business processes.
                </li>
              </ol>
            </div>

            <h2>AI Algorithms and Techniques</h2>
            <p>Modern AI camera systems leverage several key technologies to achieve accurate and reliable tracking:</p>

            <div className="overflow-x-auto my-8">
              <table className="min-w-full bg-white border border-gray-200">
                <thead>
                  <tr className="bg-gray-50">
                    <th className="py-3 px-4 border-b text-left">Technology</th>
                    <th className="py-3 px-4 border-b text-left">Description</th>
                    <th className="py-3 px-4 border-b text-left">Common Algorithms</th>
                    <th className="py-3 px-4 border-b text-left">Best For</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="py-3 px-4 border-b">Object Detection</td>
                    <td className="py-3 px-4 border-b">Identifying and classifying objects in images</td>
                    <td className="py-3 px-4 border-b">YOLO, Faster R-CNN, SSD, EfficientDet</td>
                    <td className="py-3 px-4 border-b">Initial detection of people and assets</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Re-identification</td>
                    <td className="py-3 px-4 border-b">
                      Matching the same object across different views or time periods
                    </td>
                    <td className="py-3 px-4 border-b">Siamese Networks, Triplet Loss Networks</td>
                    <td className="py-3 px-4 border-b">Cross-camera tracking, maintaining identity</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Multi-Object Tracking</td>
                    <td className="py-3 px-4 border-b">Following multiple objects simultaneously</td>
                    <td className="py-3 px-4 border-b">SORT, DeepSORT, ByteTrack</td>
                    <td className="py-3 px-4 border-b">Continuous tracking in crowded scenes</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Pose Estimation</td>
                    <td className="py-3 px-4 border-b">Determining the position of body joints</td>
                    <td className="py-3 px-4 border-b">OpenPose, HRNet, AlphaPose</td>
                    <td className="py-3 px-4 border-b">Detailed human movement analysis</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 border-b">Activity Recognition</td>
                    <td className="py-3 px-4 border-b">Identifying specific actions or behaviors</td>
                    <td className="py-3 px-4 border-b">3D ConvNets, Transformer-based models</td>
                    <td className="py-3 px-4 border-b">Process monitoring, safety applications</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h2>AI Camera RTLS Architecture</h2>
            <p>A typical AI camera-based RTLS system consists of the following components:</p>

            <div className="my-8 bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4">System Components</h3>
              <ul className="space-y-4">
                <li>
                  <strong>Cameras:</strong> The hardware devices that capture video feeds. These may include standard IP
                  cameras, specialized stereo cameras, PTZ cameras, or cameras with built-in processing capabilities.
                </li>
                <li>
                  <strong>Processing Infrastructure:</strong> The computing resources that run AI algorithms. This may
                  be distributed across edge devices (at the camera), fog computing (local servers), or cloud platforms,
                  depending on latency requirements and bandwidth constraints.
                </li>
                <li>
                  <strong>Networking:</strong> Infrastructure for transmitting video feeds and processed data. This
                  typically includes high-bandwidth wired or wireless connections, with considerations for security and
                  reliability.
                </li>
                <li>
                  <strong>AI Software Stack:</strong> The collection of algorithms and models that process video data to
                  extract location information. This includes object detection, tracking, and analysis components.
                </li>
                <li>
                  <strong>Calibration System:</strong> Tools and processes for mapping camera pixels to real-world
                  coordinates, ensuring accurate positioning across the coverage area.
                </li>
                <li>
                  <strong>Management Platform:</strong> Software for configuring, monitoring, and maintaining the camera
                  network and AI components. This often includes tools for camera health monitoring and software
                  updates.
                </li>
                <li>
                  <strong>Integration Layer:</strong> APIs and connectors that allow the AI camera system to share data
                  with other business systems such as security platforms, workforce management, or analytics tools.
                </li>
                <li>
                  <strong>User Interface:</strong> Dashboards and visualization tools that present tracking data to
                  operators and analysts in an intuitive format.
                </li>
              </ul>
            </div>

            <h2>Advantages of AI + Cameras for RTLS</h2>
            <ul>
              <li>No tags or beacons required on tracked objects (non-intrusive tracking)</li>
              <li>Rich contextual information beyond just location (identity, behavior, interactions)</li>
              <li>Ability to track multiple object types simultaneously</li>
              <li>Visual verification capability (actual images can be reviewed if needed)</li>
              <li>Leverages existing security camera infrastructure in many cases</li>
              <li>Software updates can add new capabilities without hardware changes</li>
              <li>Flexible deployment options from edge to cloud processing</li>
              <li>Can detect unexpected objects or people (not limited to pre-registered tags)</li>
            </ul>

            <h2>Limitations</h2>
            <ul>
              <li>Performance affected by lighting conditions and visual obstructions</li>
              <li>Privacy concerns and regulatory compliance requirements</li>
              <li>Computationally intensive, requiring significant processing resources</li>
              <li>Accuracy can be lower than some tag-based systems, especially for precise positioning</li>
              <li>Challenging to track objects that look very similar</li>
              <li>Limited ability to track objects inside containers or behind obstacles</li>
              <li>Higher bandwidth requirements compared to most other RTLS technologies</li>
              <li>May require periodic retraining of AI models as environments change</li>
            </ul>

            <h2>Common Use Cases</h2>
            <div className="grid md:grid-cols-3 gap-4 my-8">
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Retail Analytics</h3>
                <p>Analyzing customer flow, dwell times, and interactions with products</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Workplace Safety</h3>
                <p>Monitoring hazardous areas and ensuring proper procedures are followed</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Security & Surveillance</h3>
                <p>Tracking unauthorized access and suspicious behavior</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Manufacturing</h3>
                <p>Monitoring production lines and worker-machine interactions</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Healthcare</h3>
                <p>Ensuring proper hand hygiene and monitoring patient activity</p>
              </div>
              <div className="border border-gray-200 p-4 rounded-lg">
                <h3 className="font-semibold">Sports Analytics</h3>
                <p>Tracking player movements and analyzing team performance</p>
              </div>
            </div>

            <h2>Implementation Considerations</h2>
            <p>When implementing an AI camera-based RTLS solution, consider the following factors:</p>

            <div className="my-8">
              <h3 className="text-xl font-semibold mb-4">Planning and Design</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Camera Placement</h4>
                  <p>
                    Carefully plan camera positions to ensure comprehensive coverage without blind spots. Consider
                    mounting height, angle, and potential occlusions from fixtures, equipment, or people.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Lighting Conditions</h4>
                  <p>
                    Assess the lighting environment and its variations throughout the day. Consider supplementary
                    lighting or IR-capable cameras for areas with poor or variable lighting.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Privacy Considerations</h4>
                  <p>
                    Develop clear policies for data collection, storage, and access. Consider privacy-preserving
                    techniques such as on-device processing, automatic blurring, or converting video to anonymous
                    metadata.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Processing Architecture</h4>
                  <p>
                    Determine the optimal balance between edge, fog, and cloud processing based on latency requirements,
                    bandwidth constraints, and privacy considerations.
                  </p>
                </div>
              </div>
            </div>

            <div className="my-8">
              <h3 className="text-xl font-semibold mb-4">Technical Considerations</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2">Camera Selection</h4>
                  <p>
                    Choose appropriate cameras based on resolution, field of view, frame rate, and environmental
                    requirements. Consider specialized cameras for challenging conditions.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Calibration</h4>
                  <p>
                    Develop a robust calibration process to map camera views to physical space. This is critical for
                    accurate positioning and cross-camera tracking.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">AI Model Selection</h4>
                  <p>
                    Choose appropriate algorithms and models based on the specific tracking requirements. Consider
                    trade-offs between accuracy, speed, and resource requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Network Infrastructure</h4>
                  <p>
                    Ensure sufficient bandwidth and reliability for video transmission. Consider network segmentation
                    for security and quality of service guarantees for critical video feeds.
                  </p>
                </div>
              </div>
            </div>

            <h2>AI + Cameras vs. Other RTLS Technologies</h2>
            <div className="overflow-x-auto my-8">
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
                </tbody>
              </table>
            </div>

            <h2>Future Trends</h2>
            <p>The AI camera RTLS market continues to evolve with several emerging trends:</p>
            <ul>
              <li>
                <strong>Edge AI:</strong> More powerful on-device processing enabling advanced analytics without cloud
                connectivity
              </li>
              <li>
                <strong>Privacy-Preserving Computer Vision:</strong> Techniques that extract tracking data without
                storing or transmitting identifiable images
              </li>
              <li>
                <strong>Multimodal Sensing:</strong> Combining cameras with other sensors like thermal imaging, depth
                sensors, or audio for more robust tracking
              </li>
              <li>
                <strong>Federated Learning:</strong> Improving AI models across distributed camera networks while
                maintaining data privacy
              </li>
              <li>
                <strong>Transformer Architectures:</strong> New AI models that better understand temporal relationships
                and complex scenes
              </li>
              <li>
                <strong>Digital Twins:</strong> Integration with 3D virtual environments for advanced visualization and
                simulation
              </li>
            </ul>

            <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-xl my-8">
              <h2 className="mb-4">Ready to implement AI + Cameras technology in your RTLS solution?</h2>
              <p className="mb-4">
                The RTLS Alliance can connect you with certified providers and implementation experts who specialize in
                AI-powered computer vision systems for tracking and analytics.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact">
                  <Button className="bg-red-600 hover:bg-red-700 text-white">Contact Us</Button>
                </Link>
                <Link href="/ecosystem/directory">
                  <Button variant="outline" className="border-red-600 text-red-600 hover:bg-red-50">
                    Find AI Camera Providers
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
        {/* Sidebar */}
        <div className="lg:col-span-1">
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
                  <p className="text-sm text-gray-600">0.5-3 meters typical</p>
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
