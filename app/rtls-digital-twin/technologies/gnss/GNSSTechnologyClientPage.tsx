"use client"
import { useScrollToTop } from "@/hooks/useScrollToTop"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Truck, Tractor, Building, Mountain, Compass, Siren } from "lucide-react"

export default function GNSSTechnologyClientPage() {
  useScrollToTop()

  return (
    <div className="container mx-auto px-4 py-8 max-w-7xl">
      <div className="space-y-12">
        <section className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight">GNSS Technology</h1>
          <p className="text-xl text-muted-foreground">
            Global Navigation Satellite Systems (GNSS) provide worldwide positioning capabilities for outdoor RTLS
            applications.
          </p>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Overview</h2>
            <p>
              Global Navigation Satellite Systems (GNSS) encompass various satellite constellations including GPS (USA),
              GLONASS (Russia), Galileo (EU), and BeiDou (China) that provide global positioning services. These systems
              enable outdoor positioning with meter-level accuracy by triangulating signals from multiple satellites.
            </p>
            <p>
              GNSS receivers calculate their position by measuring the time it takes for signals to travel from
              satellites to the receiver. With signals from at least four satellites, a receiver can determine its
              latitude, longitude, altitude, and time with reasonable accuracy.
            </p>
          </div>
          <div className="bg-muted rounded-lg p-6">
            <h3 className="text-xl font-medium mb-4">Key Characteristics</h3>
            <ul className="space-y-2">
              <li>
                <span className="font-medium">Coverage:</span> Global outdoor coverage
              </li>
              <li>
                <span className="font-medium">Accuracy:</span> 3-5 meters (standard), sub-meter with augmentation
              </li>
              <li>
                <span className="font-medium">Update Rate:</span> 1-10 Hz (typical)
              </li>
              <li>
                <span className="font-medium">Power Consumption:</span> Medium to high
              </li>
              <li>
                <span className="font-medium">Infrastructure:</span> Minimal (receivers only)
              </li>
              <li>
                <span className="font-medium">Cost:</span> Low to medium
              </li>
            </ul>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">How GNSS Works</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Trilateration Process</h3>
              <p className="mb-4">
                GNSS positioning relies on trilateration, which determines location by measuring distances from multiple
                satellites:
              </p>
              <ol className="space-y-2 list-decimal list-inside">
                <li>Each satellite continuously broadcasts its position and the precise time of transmission</li>
                <li>The receiver measures the time delay between transmission and reception</li>
                <li>This time delay is converted to distance (signal travel time × speed of light)</li>
                <li>With distances from at least four satellites, the receiver calculates its 3D position</li>
              </ol>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Signal Components</h3>
              <p className="mb-4">GNSS signals contain several key components:</p>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Carrier Wave:</span> High-frequency radio wave that carries the signal
                </li>
                <li>
                  <span className="font-medium">Ranging Code:</span> Unique pattern that identifies each satellite and
                  allows timing measurements
                </li>
                <li>
                  <span className="font-medium">Navigation Message:</span> Data containing satellite orbits, clock
                  corrections, and system status
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">GNSS Constellations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>GPS (USA)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>24+ satellites, global coverage, most widely used system. Provides civilian accuracy of ~3-5m.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>GLONASS (Russia)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>24 satellites, better performance at high latitudes. Complements GPS in challenging environments.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Galileo (EU)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>30 satellites when complete, designed for civilian use with higher accuracy and reliability.</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>BeiDou (China)</CardTitle>
              </CardHeader>
              <CardContent>
                <p>35 satellites, global coverage with enhanced service in Asia-Pacific region.</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Augmentation Systems</h2>
          <p>Several technologies enhance GNSS accuracy and reliability:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>SBAS</CardTitle>
                <CardDescription>Satellite-Based Augmentation Systems</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Regional systems like WAAS (North America), EGNOS (Europe), and MSAS (Japan) that provide correction
                  data via geostationary satellites, improving accuracy to 1-2 meters.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>DGPS</CardTitle>
                <CardDescription>Differential GPS</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Uses fixed reference stations to broadcast correction data, enabling sub-meter accuracy within the
                  coverage area of the reference station.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>RTK</CardTitle>
                <CardDescription>Real-Time Kinematic</CardDescription>
              </CardHeader>
              <CardContent>
                <p>
                  Provides centimeter-level accuracy using carrier phase measurements and real-time corrections from
                  base stations. Commonly used in precision applications.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Industry Applications</h2>

          <Tabs defaultValue="transportation" className="w-full">
            <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto">
              <TabsTrigger
                value="transportation"
                className="flex flex-col items-center justify-center py-3 px-4 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Truck className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Transportation</span>
              </TabsTrigger>
              <TabsTrigger
                value="agriculture"
                className="flex flex-col items-center justify-center py-3 px-4 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Tractor className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Agriculture</span>
              </TabsTrigger>
              <TabsTrigger
                value="construction"
                className="flex flex-col items-center justify-center py-3 px-4 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Building className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Construction</span>
              </TabsTrigger>
              <TabsTrigger
                value="mining"
                className="flex flex-col items-center justify-center py-3 px-4 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Mountain className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Mining</span>
              </TabsTrigger>
              <TabsTrigger
                value="recreation"
                className="flex flex-col items-center justify-center py-3 px-4 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Compass className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Recreation</span>
              </TabsTrigger>
              <TabsTrigger
                value="emergency"
                className="flex flex-col items-center justify-center py-3 px-4 h-auto data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
              >
                <Siren className="h-5 w-5 mb-1" />
                <span className="text-xs font-medium">Emergency</span>
              </TabsTrigger>
            </TabsList>

            <TabsContent value="transportation" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Transportation & Logistics</CardTitle>
                  <CardDescription>Fleet management and route optimization</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    GNSS technology forms the backbone of modern transportation and logistics operations, enabling
                    real-time tracking of vehicles, optimized routing, and efficient fleet management.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Applications</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Real-time fleet tracking and management</li>
                        <li>Route optimization and navigation</li>
                        <li>Geofencing for security and compliance</li>
                        <li>Driver behavior monitoring</li>
                        <li>Fuel consumption optimization</li>
                        <li>Cargo tracking and security</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Benefits</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Reduced fuel costs through optimized routing</li>
                        <li>Improved delivery time estimates</li>
                        <li>Enhanced security for high-value shipments</li>
                        <li>Better resource allocation</li>
                        <li>Reduced idle time and improved efficiency</li>
                        <li>Simplified compliance with regulations</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="agriculture" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Precision Agriculture</CardTitle>
                  <CardDescription>Optimizing farming operations with satellite positioning</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    GNSS technology has revolutionized agriculture by enabling precision farming techniques that
                    optimize resource use, reduce waste, and increase yields.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Applications</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Automated steering and guidance systems</li>
                        <li>Variable rate application of seeds, fertilizers, and pesticides</li>
                        <li>Field mapping and boundary determination</li>
                        <li>Soil sampling and mapping</li>
                        <li>Yield monitoring and mapping</li>
                        <li>Livestock tracking and management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Benefits</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Reduced input costs (seeds, fertilizers, pesticides)</li>
                        <li>Minimized environmental impact</li>
                        <li>Increased crop yields</li>
                        <li>Improved operational efficiency</li>
                        <li>Better decision-making with precise data</li>
                        <li>Reduced operator fatigue with automated systems</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="construction" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Construction & Infrastructure</CardTitle>
                  <CardDescription>Precision positioning for building and infrastructure projects</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    GNSS technology enables precise positioning and machine control in construction projects, improving
                    accuracy, efficiency, and safety across all phases of construction.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Applications</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Machine control for excavators, bulldozers, and graders</li>
                        <li>Site surveying and layout</li>
                        <li>Progress monitoring and reporting</li>
                        <li>Asset tracking and management</li>
                        <li>Structural monitoring</li>
                        <li>Safety zone enforcement</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Benefits</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Reduced rework through improved accuracy</li>
                        <li>Lower fuel consumption and equipment wear</li>
                        <li>Faster project completion</li>
                        <li>Improved worker safety</li>
                        <li>Better project documentation</li>
                        <li>Reduced material waste</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="mining" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Mining Operations</CardTitle>
                  <CardDescription>Enhancing safety and efficiency in mining environments</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    GNSS technology plays a crucial role in modern mining operations, from exploration to reclamation,
                    improving safety, efficiency, and environmental compliance.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Applications</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Autonomous and semi-autonomous vehicle guidance</li>
                        <li>Drill rig navigation and blast hole positioning</li>
                        <li>Excavation and loading optimization</li>
                        <li>Haul truck fleet management</li>
                        <li>Site mapping and volumetric calculations</li>
                        <li>Environmental monitoring and compliance</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Benefits</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Improved worker safety by reducing exposure to hazards</li>
                        <li>Increased operational efficiency</li>
                        <li>Reduced fuel consumption</li>
                        <li>Better resource management</li>
                        <li>Enhanced environmental compliance</li>
                        <li>Improved accuracy in material extraction</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="recreation" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Outdoor Recreation</CardTitle>
                  <CardDescription>Navigation and safety for outdoor activities</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    GNSS technology has transformed outdoor recreation by providing reliable navigation, tracking, and
                    safety features for hikers, cyclists, boaters, and other outdoor enthusiasts.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Applications</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Trail navigation and mapping</li>
                        <li>Activity tracking and performance analysis</li>
                        <li>Marine navigation</li>
                        <li>Geocaching and location-based games</li>
                        <li>Emergency location services</li>
                        <li>Weather and environmental monitoring</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Benefits</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Enhanced safety in remote areas</li>
                        <li>Improved navigation in unfamiliar terrain</li>
                        <li>Better trip planning and execution</li>
                        <li>Performance tracking for fitness goals</li>
                        <li>Community sharing of routes and experiences</li>
                        <li>Reduced risk of getting lost</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="emergency" className="mt-6">
              <Card>
                <CardHeader>
                  <CardTitle>Emergency Services</CardTitle>
                  <CardDescription>Critical positioning for first responders and disaster management</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p>
                    GNSS technology is essential for emergency services, providing critical location data for first
                    responders, disaster management, and search and rescue operations.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h4 className="font-medium mb-2">Key Applications</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Emergency vehicle routing and dispatch</li>
                        <li>Search and rescue operations</li>
                        <li>Disaster assessment and response</li>
                        <li>Emergency location transmitters</li>
                        <li>Personnel tracking and coordination</li>
                        <li>Evacuation planning and management</li>
                      </ul>
                    </div>
                    <div>
                      <h4 className="font-medium mb-2">Benefits</h4>
                      <ul className="list-disc list-inside space-y-1">
                        <li>Faster response times</li>
                        <li>Improved coordination between agencies</li>
                        <li>Enhanced situational awareness</li>
                        <li>Better resource allocation during emergencies</li>
                        <li>Increased success rate for search and rescue</li>
                        <li>Improved public safety</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Limitations and Challenges</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Environmental Limitations</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>
                  <span className="font-medium">Urban Canyons:</span> Tall buildings block and reflect signals, reducing
                  accuracy in cities
                </p>
                <p>
                  <span className="font-medium">Indoor Environments:</span> GNSS signals cannot penetrate most building
                  materials
                </p>
                <p>
                  <span className="font-medium">Dense Foliage:</span> Heavy tree cover can attenuate signals
                </p>
                <p>
                  <span className="font-medium">Atmospheric Effects:</span> Ionospheric and tropospheric delays affect
                  signal propagation
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Technical Challenges</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p>
                  <span className="font-medium">Multipath Errors:</span> Signal reflections cause position inaccuracies
                </p>
                <p>
                  <span className="font-medium">Clock Errors:</span> Satellite and receiver clock inaccuracies affect
                  measurements
                </p>
                <p>
                  <span className="font-medium">Satellite Geometry:</span> Poor satellite distribution reduces
                  positioning accuracy
                </p>
                <p>
                  <span className="font-medium">Interference:</span> Radio frequency interference can disrupt GNSS
                  signals
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Integration with Other Technologies</h2>
          <p>GNSS is often combined with other technologies to overcome its limitations and enhance performance:</p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Inertial Navigation Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Accelerometers and gyroscopes provide continuous positioning when GNSS signals are temporarily
                  unavailable, creating a more robust navigation solution.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Indoor Positioning Systems</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Technologies like BLE, UWB, and Wi-Fi take over when moving indoors, creating seamless indoor-outdoor
                  tracking solutions.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle>Cellular Networks</CardTitle>
              </CardHeader>
              <CardContent>
                <p>
                  Cell tower triangulation provides additional positioning data in urban environments where GNSS may be
                  compromised.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Future Developments</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Technological Advancements</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Multi-Frequency Receivers:</span> Using multiple frequency bands to
                  improve accuracy and resilience
                </li>
                <li>
                  <span className="font-medium">Multi-Constellation Integration:</span> Combining signals from all
                  available GNSS systems
                </li>
                <li>
                  <span className="font-medium">Miniaturization:</span> Smaller, more power-efficient receivers for IoT
                  and wearable applications
                </li>
                <li>
                  <span className="font-medium">Anti-Jamming Technology:</span> Enhanced resistance to interference and
                  spoofing
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Emerging Applications</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Autonomous Vehicles:</span> High-precision GNSS for self-driving cars
                  and drones
                </li>
                <li>
                  <span className="font-medium">Precision Timing:</span> Synchronization for telecommunications and
                  power grids
                </li>
                <li>
                  <span className="font-medium">Smart Cities:</span> Infrastructure monitoring and management
                </li>
                <li>
                  <span className="font-medium">Environmental Monitoring:</span> Tracking climate change effects and
                  natural resources
                </li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-muted p-6 rounded-lg">
          <h2 className="text-2xl font-semibold mb-4">Implementation Considerations</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-medium mb-3">Hardware Selection</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Receiver Quality:</span> Match receiver capabilities to accuracy
                  requirements
                </li>
                <li>
                  <span className="font-medium">Antenna Design:</span> Consider antenna placement and quality for
                  optimal signal reception
                </li>
                <li>
                  <span className="font-medium">Power Requirements:</span> Evaluate power consumption for mobile
                  applications
                </li>
                <li>
                  <span className="font-medium">Environmental Durability:</span> Select hardware rated for deployment
                  conditions
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-3">Software Considerations</h3>
              <ul className="space-y-2">
                <li>
                  <span className="font-medium">Data Processing:</span> Implement appropriate filtering and smoothing
                  algorithms
                </li>
                <li>
                  <span className="font-medium">Integration:</span> Plan for integration with existing systems and other
                  positioning technologies
                </li>
                <li>
                  <span className="font-medium">Data Management:</span> Consider storage and transmission of position
                  data
                </li>
                <li>
                  <span className="font-medium">Security:</span> Implement measures to prevent spoofing and protect
                  location data
                </li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
