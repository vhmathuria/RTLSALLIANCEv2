import Link from "next/link"
import { Button } from "@/components/ui/button"
import { CheckCircle } from "lucide-react"

export default function SignupSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="max-w-md mx-auto bg-white rounded-lg shadow-md p-8 text-center">
        <div className="flex justify-center mb-6">
          <CheckCircle className="h-16 w-16 text-green-500" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-4">Account Created Successfully!</h1>

        <p className="text-gray-600 mb-6">
          Thank you for creating an account. If you signed up with email, please check your inbox for a confirmation
          link.
        </p>

        <div className="space-y-4">
          <Link href="/login">
            <Button className="w-full">Go to Login</Button>
          </Link>

          <Link href="/">
            <Button variant="outline" className="w-full">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  )
}
