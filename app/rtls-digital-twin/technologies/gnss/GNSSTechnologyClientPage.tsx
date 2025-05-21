"use client"
import { Card, CardContent } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useScrollToTop } from "@/hooks/useScrollToTop"

export default function GNSSTechnologyClientPage() {
  useScrollToTop()

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-12">
        <h1 className="text-3xl font-bold mb-4">GNSS Technology for Real-Time Location Systems</h1>
        <p className="text-lg text-gray-700 mb-6">
          Global Navigation Satellite Systems (GNSS) provide worldwide positioning capabilities for outdoor RTLS
          applications with meter-level accuracy.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h2 className="text-2xl font-semibold mb-4">Overview</h2>
            <p className="mb-4">
              GNSS technology encompasses various satellite navigation systems including GPS (USA), GLONASS (Russia),
              Galileo (EU), and BeiDou (China). These systems provide global coverage for outdoor positioning by
              triangulating signals from multiple satellites.
            </p>
            <p className="mb-4">
              GNSS receivers calculate their position by measuring the time it takes for signals to travel from
              satellites to the receiver. With signals from multiple satellites, the receiver can determine its
              latitude, longitude, and altitude with varying degrees of accuracy.
            </p>
            <p>
              While standard GNSS provides 3-10 meter accuracy, enhanced techniques like RTK-GPS can achieve
              centimeter-level precision for specialized applications.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/satellite-positioning-system.png"
              alt="GNSS satellite positioning system diagram"
              width={500}
              height={300}
              className="rounded-lg shadow-md"
            />
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Key Characteristics</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Range & Coverage</h3>
                <p>
                  Global coverage for outdoor environments. Limited or no functionality indoors or in urban canyons with
                  poor sky visibility.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Accuracy</h3>
                <p>
                  Standard GNSS: 3-10 meters. Enhanced systems (DGPS): 1-3 meters. RTK-GPS: centimeter-level accuracy.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Power Requirements</h3>
                <p>
                  Moderate power consumption. Modern receivers are optimized for mobile devices but continuous tracking
                  can drain batteries.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Cost</h3>
                <p>
                  Basic receivers are inexpensive ($5-20). Professional-grade and RTK systems can cost hundreds to
                  thousands of dollars.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Infrastructure</h3>
                <p>
                  Minimal local infrastructure required. Relies on existing satellite constellations. May need base
                  stations for RTK corrections.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Update Rate</h3>
                <p>Typically 1-10 Hz for standard receivers. Specialized receivers can achieve 20+ Hz update rates.</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* INDUSTRY APPLICATIONS SECTION - Replicated from BLE page */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Industry Applications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Logistics & Transportation</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Fleet management and vehicle tracking across large geographic areas</li>
                  <li>Shipping container tracking in ports and during transit</li>
                  <li>Last-mile delivery optimization and route planning</li>
                  <li>Cold chain monitoring for temperature-sensitive goods</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Agriculture</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Precision agriculture and automated farm equipment</li>
                  <li>Livestock tracking and management across large pastures</li>
                  <li>Field boundary mapping and land surveying</li>
                  <li>Crop monitoring and yield optimization</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Construction</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Heavy equipment tracking and utilization monitoring</li>
                  <li>Site surveying and progress monitoring</li>
                  <li>Worker safety and geofencing in hazardous areas</li>
                  <li>Material delivery coordination and inventory management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Mining</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Vehicle and equipment tracking in open-pit mines</li>
                  <li>Personnel safety monitoring and emergency response</li>
                  <li>Autonomous vehicle navigation in mining operations</li>
                  <li>Site mapping and resource management</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Outdoor Recreation</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Hiking and adventure sports tracking</li>
                  <li>Rental equipment monitoring (bikes, boats, etc.)</li>
                  <li>Tour group management and safety monitoring</li>
                  <li>Wildlife tracking and conservation efforts</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3">Smart Cities</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Public transportation tracking and optimization</li>
                  <li>Emergency vehicle routing and response time improvement</li>
                  <li>Infrastructure monitoring and maintenance</li>
                  <li>Urban planning and traffic flow analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Positioning Techniques</h2>
          <Tabs defaultValue="standard">
            <TabsList className="mb-4">
              <TabsTrigger value="standard">Standard GNSS</TabsTrigger>
              <TabsTrigger value="assisted">Assisted GNSS</TabsTrigger>
              <TabsTrigger value="differential">Differential GNSS</TabsTrigger>
              <TabsTrigger value="rtk">RTK-GNSS</TabsTrigger>
            </TabsList>
            <TabsContent value="standard" className="p-4 border rounded-md">
              <h3 className="text-xl font-medium mb-2">Standard GNSS</h3>
              <p className="mb-3">
                Basic GNSS positioning uses signals from multiple satellites to triangulate position. The receiver
                measures the time it takes for signals to travel from satellites to calculate distance, then uses these
                distances to determine position.
              </p>
              <p>
                Accuracy: 3-10 meters in optimal conditions. Affected by atmospheric conditions, multipath interference,
                and satellite geometry.
              </p>
            </TabsContent>
            <TabsContent value="assisted" className="p-4 border rounded-md">
              <h3 className="text-xl font-medium mb-2">Assisted GNSS (A-GNSS)</h3>
              <p className="mb-3">
                A-GNSS improves startup performance by using cellular network data to provide satellite information.
                This helps receivers lock onto satellite signals faster and works better in challenging environments.
              </p>
              <p>
                Benefits: Faster time to first fix (TTFF), better performance in urban canyons and partial indoor
                environments, reduced power consumption.
              </p>
            </TabsContent>
            <TabsContent value="differential" className="p-4 border rounded-md">
              <h3 className="text-xl font-medium mb-2">Differential GNSS (DGNSS)</h3>
              <p className="mb-3">
                DGNSS uses fixed, known positions as reference stations to calculate correction factors. These
                corrections are transmitted to GNSS receivers to improve accuracy by compensating for atmospheric and
                other errors.
              </p>
              <p>Accuracy: 1-3 meters. Examples include WAAS (North America), EGNOS (Europe), and MSAS (Japan).</p>
            </TabsContent>
            <TabsContent value="rtk" className="p-4 border rounded-md">
              <h3 className="text-xl font-medium mb-2">Real-Time Kinematic (RTK) GNSS</h3>
              <p className="mb-3">
                RTK-GNSS uses carrier phase measurements and real-time corrections from base stations to achieve
                centimeter-level accuracy. It requires a local base station or network of stations to provide correction
                data.
              </p>
              <p>
                Accuracy: 1-2 centimeters. Used in precision agriculture, surveying, and construction. More expensive
                and complex than standard GNSS.
              </p>
            </TabsContent>
          </Tabs>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Advantages & Limitations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="bg-green-50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3 text-green-700">Advantages</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Global coverage without requiring local infrastructure</li>
                  <li>Works in all weather conditions with minimal degradation</li>
                  <li>Mature, well-established technology with widespread adoption</li>
                  <li>Inexpensive receivers available for mass deployment</li>
                  <li>No subscription fees for basic service</li>
                  <li>Seamless tracking across large geographic areas</li>
                  <li>Integration with other systems like cellular and IoT platforms</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-red-50">
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-3 text-red-700">Limitations</h3>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Poor or no performance indoors and in urban canyons</li>
                  <li>Limited accuracy (3-10m) without augmentation</li>
                  <li>Vulnerable to signal jamming and spoofing</li>
                  <li>Higher power consumption compared to some indoor technologies</li>
                  <li>Signal acquisition can take time (cold start)</li>
                  <li>Multipath errors in environments with reflective surfaces</li>
                  <li>High-precision solutions (RTK) require additional infrastructure</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6">Integration with Other Technologies</h2>
          <p className="mb-6">
            GNSS is often combined with other technologies to overcome its limitations and provide comprehensive
            positioning solutions:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Cellular + GNSS</h3>
                <p>
                  Combines GNSS positioning with cellular network data for improved coverage, especially in urban
                  environments. Used in fleet management and asset tracking applications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Indoor-Outdoor Handover</h3>
                <p>
                  GNSS for outdoor tracking combined with technologies like BLE, UWB, or Wi-Fi for seamless transition
                  to indoor positioning when entering buildings.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="pt-6">
                <h3 className="text-xl font-medium mb-2">Inertial Navigation</h3>
                <p>
                  Integration with IMU (Inertial Measurement Unit) sensors to provide continuous positioning during GNSS
                  signal outages in tunnels or urban canyons.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="mb-12 bg-gray-50 p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Future Developments</h2>
          <div className="space-y-4">
            <p>The GNSS technology landscape continues to evolve with several promising developments:</p>
            <ul className="list-disc pl-5 space-y-2">
              <li>
                <span className="font-medium">Multi-constellation receivers</span> that use signals from GPS, GLONASS,
                Galileo, and BeiDou simultaneously for improved accuracy and reliability
              </li>
              <li>
                <span className="font-medium">Dual-frequency receivers</span> becoming more common in consumer devices,
                reducing multipath errors and improving accuracy
              </li>
              <li>
                <span className="font-medium">Low-power GNSS chipsets</span> for IoT applications with battery life
                measured in years rather than days
              </li>
              <li>
                <span className="font-medium">Cloud-based positioning</span> where raw measurements are sent to servers
                for processing, reducing receiver complexity
              </li>
              <li>
                <span className="font-medium">Anti-jamming and anti-spoofing technologies</span> to improve security for
                critical applications
              </li>
            </ul>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="max-w-3xl w-full bg-blue-50 p-6 rounded-lg">
            <h2 className="text-2xl font-semibold mb-4 text-center">Learn More About RTLS Technologies</h2>
            <p className="text-center mb-6">
              Explore other positioning technologies to find the right solution for your specific requirements.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <Link href="/rtls-digital-twin/technologies/uwb">
                <Button variant="outline" className="w-full">
                  UWB
                </Button>
              </Link>
              <Link href="/rtls-digital-twin/technologies/ble">
                <Button variant="outline" className="w-full">
                  BLE
                </Button>
              </Link>
              <Link href="/rtls-digital-twin/technologies/wifi">
                <Button variant="outline" className="w-full">
                  Wi-Fi
                </Button>
              </Link>
              <Link href="/rtls-digital-twin/technologies/rtk-gps">
                <Button variant="outline" className="w-full">
                  RTK-GPS
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
