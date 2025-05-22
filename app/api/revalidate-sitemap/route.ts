import { type NextRequest, NextResponse } from "next/server"
import { revalidatePath, revalidateTag } from "next/cache"

export async function GET(request: NextRequest): Promise<NextResponse> {
  const token = request.nextUrl.searchParams.get("token")
  const secret = process.env.CONTENTFUL_REVALIDATE_SECRET || process.env.REVALIDATION_TOKEN

  // Verify the token matches your secret
  if (!token || token !== secret) {
    console.error("Invalid token provided for sitemap revalidation")
    return NextResponse.json({ message: "Invalid token" }, { status: 401 })
  }

  try {
    // Revalidate the sitemap and sitemap index
    revalidatePath("/sitemap.xml", "page")
    revalidatePath("/sitemap.xml", "layout")
    revalidatePath("/", "layout")

    // Revalidate by tags if they exist
    try {
      revalidateTag("sitemap")
      revalidateTag("resources")
    } catch (e) {
      console.log("Tag revalidation not supported or failed:", e)
    }

    console.log("Sitemap revalidation triggered successfully at", new Date().toISOString())

    return NextResponse.json({
      revalidated: true,
      message: "Sitemap revalidated successfully",
      timestamp: new Date().toISOString(),
    })
  } catch (err) {
    console.error("Error during sitemap revalidation:", err)

    return NextResponse.json(
      {
        revalidated: false,
        message: "Error revalidating sitemap",
        error: err instanceof Error ? err.message : String(err),
      },
      { status: 500 },
    )
  }
}
