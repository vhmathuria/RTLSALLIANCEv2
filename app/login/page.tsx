import type { Metadata } from "next"
import Link from "next/link"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { GoogleSignInButton, LinkedInSignInButton } from "@/components/auth/auth-buttons"
import LoginForm from "./login-form"
import PageSEO from "@/components/seo/page-seo"

export const metadata: Metadata = {
  title: "Login | RTLS Alliance",
  description: "Sign in to your RTLS Alliance account to access exclusive resources and member benefits.",
}

export default function LoginPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const redirectTo = searchParams.redirectTo as string | undefined

  return (
    <div className="container flex h-screen w-screen flex-col items-center justify-center">
      <PageSEO
        title="Login | RTLS Alliance"
        description="Sign in to your RTLS Alliance account to access exclusive resources and member benefits."
        canonicalUrl="/login"
        noIndex={true}
      />

      <Link
        href="/"
        className="absolute left-4 top-4 md:left-8 md:top-8 inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-medium shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="mr-1 h-4 w-4"
        >
          <polyline points="15 18 9 12 15 6" />
        </svg>
        Back
      </Link>

      <Card className="w-full max-w-md">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl font-bold">Sign in to your account</CardTitle>
          <CardDescription>Choose your preferred sign in method</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Tabs defaultValue="credentials" className="space-y-4">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="credentials">Email</TabsTrigger>
              <TabsTrigger value="oauth">OAuth</TabsTrigger>
            </TabsList>
            <TabsContent value="credentials">
              <LoginForm redirectTo={redirectTo} />
            </TabsContent>
            <TabsContent value="oauth" className="space-y-4">
              <GoogleSignInButton redirectTo={redirectTo} />
              <LinkedInSignInButton redirectTo={redirectTo} />
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex flex-col space-y-4">
          <div className="text-sm text-gray-500 text-center">
            Don&apos;t have an account?{" "}
            <Link href="/join-alliance" className="text-blue-600 hover:text-blue-800">
              Join the Alliance
            </Link>
          </div>
        </CardFooter>
      </Card>
    </div>
  )
}
