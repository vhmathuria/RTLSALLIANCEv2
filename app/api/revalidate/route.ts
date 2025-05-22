import { type NextRequest, NextResponse } from "next/server"
import { revalidatePath } from "next/cache"

export async function POST(request: NextRequest) {
  try {
    const paths = request.nextUrl.searchParams.getAll("path")

    if (!paths || paths.length === 0) {
      return NextResponse.json({ revalidated: false, error: "No paths provided" }, { status: 400 })
    }

    // Revalidate each path
    for (const path of paths) {
      revalidatePath(path)
    }

    return NextResponse.json({ revalidated: true, paths })
  } catch (error) {
    return NextResponse.json({ revalidated: false, error: "Failed to revalidate" }, { status: 500 })
  }
}
