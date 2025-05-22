import { revalidatePath } from "next/server"
import { type NextRequest, NextResponse } from "next/server"

export async function GET(request: NextRequest): Promise<NextResponse> {
  const secret = request.nextUrl.searchParams.get("secret")

  if (secret !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid secret" }, { status: 401 })
  }

  const paths = [
    "/",
    "/resources",
    "/sitemap.xml",
    // ... other paths
  ]

  try {
    paths.forEach((path) => {
      revalidatePath(path)
    })
    return NextResponse.json({ revalidated: true, now: Date.now() })
  } catch (error) {
    return NextResponse.json({ revalidated: false, error: error }, { status: 500 })
  }
}
