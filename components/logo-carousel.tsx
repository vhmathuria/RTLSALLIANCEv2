"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Logo {
  src: string
  alt: string
}

interface LogoCarouselProps {
  logos: Logo[]
  autoScroll?: boolean
  scrollInterval?: number
}

export default function LogoCarousel({ logos, autoScroll = true, scrollInterval = 5000 }: LogoCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isHovering, setIsHovering] = useState(false)
  const carouselRef = useRef<HTMLDivElement>(null)
  const visibleLogos = 6 // Number of logos visible at once on desktop

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.max(1, logos.length - visibleLogos + 1))
  }

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) =>
        (prevIndex - 1 + Math.max(1, logos.length - visibleLogos + 1)) % Math.max(1, logos.length - visibleLogos + 1),
    )
  }

  useEffect(() => {
    if (autoScroll && !isHovering && logos.length > visibleLogos) {
      const interval = setInterval(nextSlide, scrollInterval)
      return () => clearInterval(interval)
    }
  }, [autoScroll, isHovering, logos.length, scrollInterval])

  useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current.style.transform = `translateX(-${(currentIndex * 100) / visibleLogos}%)`
    }
  }, [currentIndex])

  return (
    <div className="relative w-full" onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>
      {logos.length > visibleLogos && (
        <button
          onClick={prevSlide}
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all"
          aria-label="Previous logos"
        >
          <ChevronLeft className="h-6 w-6 text-gray-500" />
        </button>
      )}

      <div className="overflow-hidden mx-10">
        <div
          ref={carouselRef}
          className="flex transition-transform duration-1000 ease-in-out"
          style={{ width: `${(logos.length / visibleLogos) * 100}%` }}
        >
          {logos.map((logo, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-white p-6 rounded-lg flex items-center justify-center h-24"
              style={{ width: `${100 / logos.length}%` }}
            >
              <Image
                src={logo.src || "/placeholder.svg"}
                alt={logo.alt}
                width={120}
                height={60}
                className="object-contain max-h-12"
              />
            </div>
          ))}
        </div>
      </div>

      {logos.length > visibleLogos && (
        <button
          onClick={nextSlide}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-2 shadow-md hover:bg-gray-100 transition-all"
          aria-label="Next logos"
        >
          <ChevronRight className="h-6 w-6 text-gray-500" />
        </button>
      )}
    </div>
  )
}
