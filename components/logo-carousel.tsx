"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

interface LogoCarouselProps {
  logos: {
    src: string
    alt: string
  }[]
}

export default function LogoCarousel({ logos }: LogoCarouselProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [duplicatedLogos, setDuplicatedLogos] = useState<typeof logos>([])

  useEffect(() => {
    // Duplicate the logos array to create a seamless loop
    setDuplicatedLogos([...logos, ...logos, ...logos])
  }, [logos])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    // Animation for continuous scrolling - slowed down to 60s
    const animation = container.animate(
      [{ transform: "translateX(0)" }, { transform: `translateX(-${logos.length * 100}%)` }],
      {
        duration: 60000, // 60 seconds duration
        iterations: Number.POSITIVE_INFINITY,
        easing: "linear",
      },
    )

    return () => {
      animation.cancel()
    }
  }, [logos, duplicatedLogos])

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div ref={containerRef} className="flex items-center">
          {duplicatedLogos.map((logo, index) => (
            <div key={index} className="flex-shrink-0 px-6 py-2" style={{ width: `${100 / logos.length}%` }}>
              <div className="flex items-center justify-center h-20 grayscale hover:grayscale-0 transition-all">
                <Image
                  src={logo.src || "/placeholder.svg"}
                  alt={logo.alt}
                  width={120} // Increased logo width
                  height={60} // Increased logo height
                  className="object-contain max-h-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
