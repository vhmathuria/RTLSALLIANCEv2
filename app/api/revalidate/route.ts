import { revalidatePath } from "next/cache"
import { type NextRequest, NextResponse } from "next/server"

export async function POST(request: NextRequest) {
  try {
    const { path, token } = await request.json()

    // Validate secret token
    if (token !== process.env.REVALIDATION_TOKEN) {
      return NextResponse.json({ error: "Invalid token" }, { status: 401 })
    }

    // Revalidate the specific path
    revalidatePath(path)

    return NextResponse.json({ revalidated: true, path })
  } catch (error) {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 })
  }
}
