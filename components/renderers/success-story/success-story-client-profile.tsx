import Image from "next/image"
import { Building2, MapPin, Users } from "lucide-react"

interface SuccessStoryClientProfileProps {
  name: string
  industry: string
  location: string
  size: string
  background: string
  logo?: string
  image?: string
}

export default function SuccessStoryClientProfile({
  name,
  industry,
  location,
  size,
  background,
  logo,
  image,
}: SuccessStoryClientProfileProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Client Profile</h2>

      <div className="grid md:grid-cols-2 gap-8">
        <div>
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-2">{name}</h3>

            <div className="space-y-3">
              <div className="flex items-center text-gray-700">
                <Building2 className="h-5 w-5 mr-2 text-green-600" />
                <span>
                  <strong>Industry:</strong> {industry}
                </span>
              </div>

              <div className="flex items-center text-gray-700">
                <MapPin className="h-5 w-5 mr-2 text-green-600" />
                <span>
                  <strong>Location:</strong> {location}
                </span>
              </div>

              <div className="flex items-center text-gray-700">
                <Users className="h-5 w-5 mr-2 text-green-600" />
                <span>
                  <strong>Size:</strong> {size}
                </span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-md font-semibold text-gray-900 mb-2">Background</h4>
            <p className="text-gray-700">{background}</p>
          </div>
        </div>

        <div>
          {image && (
            <div className="relative h-64 w-full rounded-lg overflow-hidden shadow-md mb-4">
              <Image
                src={image || "/placeholder.svg"}
                alt={`${name} facility or operations`}
                fill
                className="object-cover"
              />
            </div>
          )}

          {logo && !image && (
            <div className="relative h-40 w-full flex items-center justify-center bg-gray-50 rounded-lg border border-gray-200 p-6">
              <div className="relative h-24 w-48">
                <Image src={logo || "/placeholder.svg"} alt={`${name} logo`} fill className="object-contain" />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
