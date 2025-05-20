import type { MetadataRoute } from "next"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/admin/", "/auth/", "/auth-error/", "/debug/"],
    },
    sitemap: "https://rtlsalliance.com/sitemap.xml",
  }
}
