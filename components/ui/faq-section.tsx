"use client"

import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { cn } from "@/lib/utils"
import type { FAQItem as FAQDataItem } from "@/lib/faq-data"

interface FAQSectionProps {
  faqs: FAQDataItem[]
  title?: string
  sectionId?: string
  className?: string
  showTitle?: boolean
}

export function FAQSection({
  faqs,
  title = "Frequently Asked Questions",
  sectionId = "faqs",
  className = "",
  showTitle = true,
}: FAQSectionProps) {
  // If no FAQs, don't render anything
  if (!faqs || faqs.length === 0) {
    return null
  }

  return (
    <section id={sectionId} className={cn("py-8", className)}>
      {showTitle && <h2 className="text-2xl font-bold mb-8 text-center">{title}</h2>}
      <div className="max-w-3xl mx-auto">
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <FAQItemComponent
              key={index}
              question={faq.question}
              answer={faq.answer}
              index={index}
              sectionId={sectionId}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

function FAQItemComponent({
  question,
  answer,
  index,
  sectionId,
}: { question: string; answer: string; index: number; sectionId: string }) {
  const [isOpen, setIsOpen] = useState(false)
  const itemId = `${sectionId}-item-${index}`
  const headingId = `${itemId}-heading`
  const panelId = `${itemId}-panel`

  return (
    <div className="border rounded-lg overflow-hidden">
      <h3>
        <button
          id={headingId}
          aria-expanded={isOpen}
          aria-controls={panelId}
          className={cn(
            "flex justify-between items-center w-full p-4 text-left font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary",
            isOpen ? "bg-muted" : "hover:bg-muted/50",
          )}
          onClick={() => setIsOpen(!isOpen)}
        >
          <span>{question}</span>
          <ChevronDown
            className={cn("h-5 w-5 text-primary transition-transform duration-200", isOpen ? "rotate-180" : "")}
          />
        </button>
      </h3>
      <div
        id={panelId}
        role="region"
        aria-labelledby={headingId}
        className={cn("overflow-hidden transition-all duration-200", isOpen ? "max-h-96" : "max-h-0")}
      >
        <div className="p-4 border-t">{answer}</div>
      </div>
    </div>
  )
}
