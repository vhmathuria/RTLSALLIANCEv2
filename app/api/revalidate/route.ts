import { type NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export async function POST(request: NextRequest) {
  try {
    // Verify the request is authorized
    const authHeader = request.headers.get("authorization")
    if (!authHeader || authHeader !== `Bearer ${process.env.REVALIDATION_TOKEN}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    // Get the paths to revalidate from the request body
    const { paths } = await request.json()

    if (!paths || !Array.isArray(paths)) {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 })
    }

    // Revalidate each path
    for (const path of paths) {
      revalidatePath(path)
    }

    return NextResponse.json({ revalidated: true, paths })
  } catch (error: any) {
    console.error("Error revalidating paths:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}

export async function GET(request: NextRequest) {
  try {
    // Verify the request is authorized
    const { searchParams } = new URL(request.url)
    const token = searchParams.get("token")
    const path = searchParams.get("path")

    if (!token || token !== process.env.REVALIDATION_TOKEN) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
    }

    if (!path) {
      return NextResponse.json({ error: "Path parameter is required" }, { status: 400 })
    }

    // Revalidate the path
    revalidatePath(path)

    return NextResponse.json({ revalidated: true, path })
  } catch (error: any) {
    console.error("Error revalidating path:", error)
    return NextResponse.json({ error: error.message }, { status: 500 })
  }
}
