"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"

interface Ambassador {
  name: string
  industry: string
  company: string
  image: string
}

const ambassadors: Ambassador[] = [
  {
    name: "Amar Dave",
    industry: "Automotive",
    company: "Toyota",
    image: "/images/ambassadors/amar-dave.jpg",
  },
  {
    name: "Holly Craddock",
    industry: "Tiers",
    company: "Denso",
    image: "/images/ambassadors/holly-craddock.jpg",
  },
  {
    name: "Jody Knight",
    industry: "Tiers",
    company: "Denso",
    image: "/images/ambassadors/jody-knight.jpg",
  },
  {
    name: "Jon Vargas",
    industry: "Med-Devices",
    company: "Philips",
    image: "/images/ambassadors/jon-vargas.jpg",
  },
  {
    name: "Patrice Brooks",
    industry: "Tiers",
    company: "Denso",
    image: "/images/ambassadors/patrice-brooks.jpg",
  },
  {
    name: "Purussoth Sivarajan",
    industry: "Automotive",
    company: "General Motors",
    image: "/images/ambassadors/purussoth-sivarajan.jpg",
  },
  {
    name: "Randy Fahrenbach",
    industry: "Metals",
    company: "Arconic",
    image: "/images/ambassadors/randy-fahrenbach.jpg",
  },
  {
    name: "Terry Johnson",
    industry: "Government",
    company: "Oak Ridge",
    image: "/images/ambassadors/terry-johnson.jpg",
  },
]

export default function AllianceAmbassadorsCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const scrollContainer = scrollRef.current
    if (!scrollContainer) return

    let animationId: number
    let scrollPosition = 0
    const scrollSpeed = 0.5 // pixels per frame

    const animate = () => {
      scrollPosition += scrollSpeed

      // Reset position when we've scrolled past the first set of items
      if (scrollPosition >= scrollContainer.scrollWidth / 2) {
        scrollPosition = 0
      }

      scrollContainer.scrollLeft = scrollPosition
      animationId = requestAnimationFrame(animate)
    }

    animationId = requestAnimationFrame(animate)

    // Pause animation on hover
    const handleMouseEnter = () => {
      cancelAnimationFrame(animationId)
    }

    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate)
    }

    scrollContainer.addEventListener("mouseenter", handleMouseEnter)
    scrollContainer.addEventListener("mouseleave", handleMouseLeave)

    return () => {
      cancelAnimationFrame(animationId)
      scrollContainer.removeEventListener("mouseenter", handleMouseEnter)
      scrollContainer.removeEventListener("mouseleave", handleMouseLeave)
    }
  }, [])

  // Duplicate ambassadors for seamless loop
  const duplicatedAmbassadors = [...ambassadors, ...ambassadors]

  return (
    <div className="w-full overflow-hidden">
      <div className="container mx-auto px-4">
        <div ref={scrollRef} className="flex gap-6 overflow-x-hidden" style={{ scrollBehavior: "auto" }}>
          {duplicatedAmbassadors.map((ambassador, index) => (
            <div
              key={`${ambassador.name}-${index}`}
              className="flex-shrink-0 bg-white border border-blue-600 rounded-xl shadow-sm p-6 w-80 transform transition-all hover:scale-105 hover:shadow-lg hover:bg-blue-50"
            >
              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-gradient-to-r from-blue-600 to-purple-600">
                  <Image
                    src={ambassador.image || "/placeholder.svg"}
                    alt={ambassador.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-lg text-gray-900">{ambassador.name}</h3>
                  <p className="text-sm text-gray-600">{ambassador.industry}</p>
                  <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {ambassador.company}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
