import { type NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export async function GET(request: NextRequest): Promise<NextResponse> {
  const token = request.nextUrl.searchParams.get("token")

  // Verify the token matches your secret
  if (token !== process.env.CONTENTFUL_REVALIDATE_SECRET) {
    return NextResponse.json({ message: "Invalid token" }, { status: 401 })
  }

  try {
    // Revalidate the sitemap
    revalidatePath("/sitemap.xml")

    return NextResponse.json({
      revalidated: true,
      message: "Sitemap revalidated successfully",
      timestamp: new Date().toISOString(),
    })
  } catch (err) {
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
