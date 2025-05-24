import { type NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export const dynamic = "force-dynamic"

export async function GET(request: NextRequest) {
  try {
    // Get token from query params
    const token = request.nextUrl.searchParams.get("token")

    // Get the revalidation token from environment variables
    const validToken = process.env.REVALIDATION_TOKEN || process.env.CONTENTFUL_REVALIDATE_SECRET

    // Check if token is valid
    if (!token) {
      return NextResponse.json(
        {
          success: false,
          message: "Missing token parameter",
        },
        { status: 400 },
      )
    }

    if (token !== validToken) {
      return NextResponse.json(
        {
          success: false,
          message: "Invalid token",
          providedToken: token?.substring(0, 3) + "...", // Show first 3 chars for debugging
        },
        { status: 401 },
      )
    }

    // Revalidate the sitemap
    revalidatePath("/sitemap.xml")

    return NextResponse.json({
      success: true,
      message: "Sitemap revalidated successfully",
      timestamp: new Date().toISOString(),
      paths: ["/sitemap.xml"],
    })
  } catch (error) {
    console.error("Error revalidating sitemap:", error)

    return NextResponse.json(
      {
        success: false,
        message: "Error revalidating sitemap",
        error: error instanceof Error ? error.message : String(error),
      },
      { status: 500 },
    )
  }
}
