import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

interface MemberInsightCallToActionProps {
  text: string
  buttonText: string
  buttonLink: string
}

export default function MemberInsightCallToAction({ text, buttonText, buttonLink }: MemberInsightCallToActionProps) {
  if (!text || !buttonText || !buttonLink) return null

  return (
    <div className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg p-6 shadow-lg">
      <h2 className="text-xl font-bold mb-4">{text}</h2>
      <Link href={buttonLink}>
        <Button size="lg" className="w-full bg-white text-indigo-600 hover:bg-indigo-50 shadow-md">
          {buttonText}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </Link>
    </div>
  )
}
