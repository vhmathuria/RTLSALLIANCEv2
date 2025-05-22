export const dynamic = "force-dynamic"
export const revalidate = 0

export async function GET(request: Request): Promise<Response> {
  // Simply redirect to the working endpoint
  const url = new URL(request.url)
  const baseUrl = `${url.protocol}//${url.host}`
  const response = await fetch(`${baseUrl}/api/sitemap`)
  const xml = await response.text()

  return new Response(xml, {
    headers: {
      "Content-Type": "application/xml",
      "Cache-Control": "no-store, must-revalidate",
    },
  })
}
