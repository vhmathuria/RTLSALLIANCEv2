import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface SuccessStoryCallToActionProps {
  text: string
  buttonText: string
  buttonLink: string
}

export default function SuccessStoryCallToAction({ text, buttonText, buttonLink }: SuccessStoryCallToActionProps) {
  if (!text || !buttonText || !buttonLink) return null

  return (
    <div className="bg-gradient-to-r from-green-600 to-blue-600 text-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">{text}</h2>
      <Link href={buttonLink}>
        <Button size="lg" className="w-full bg-white text-green-600 hover:bg-green-50 shadow-md">
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}
