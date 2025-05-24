import { type NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export async function POST(request: NextRequest) {
  try {
    // Verify the request is authorized
    const authHeader = request.headers.get("authorization")
    if (!authHeader || authHeader !== `Bearer ${process.env.REVALIDATION_TOKEN}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Revalidate the sitemap
    revalidatePath("/sitemap.xml")
    revalidatePath("/sitemap-index.xml")

    return NextResponse.json({ revalidated: true })
  } catch (error: any) {
    console.error("Error revalidating sitemap:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verify the request is authorized
    const { searchParams } = new URL(request.url)
    const token = searchParams.get("token")

    if (!token || token !== process.env.REVALIDATION_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Revalidate the sitemap
    revalidatePath("/sitemap.xml")
    revalidatePath("/sitemap-index.xml")

    return NextResponse.json({ revalidated: true })
  } catch (error: any) {
    console.error("Error revalidating sitemap:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
