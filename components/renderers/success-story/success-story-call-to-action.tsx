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
    <div className="bg-white border border-blue-300 text-gray-800 rounded-lg p-6 shadow-md">
      <h2 className="text-xl font-bold mb-4">{text}</h2>
      <Link href={buttonLink}>
        <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white shadow-md">
          {"Contact an RTLS Expert"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}
