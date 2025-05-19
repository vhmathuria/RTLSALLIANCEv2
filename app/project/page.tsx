import ProjectPageClient from "./ProjectPageClient"

export const metadata = {
  title: "RTLS Project Planning | Implementation Resources",
  description:
    "Access comprehensive resources for planning and implementing successful RTLS projects, including requirements analysis, technology selection, and deployment strategies.",
  keywords:
    "RTLS project planning, implementation resources, technology selection, deployment strategy, requirements analysis, project management, system integration",
  alternates: {
    canonical: "/project",
  },
  openGraph: {
    title: "RTLS Project Planning | Implementation Resources",
    description: "Access comprehensive resources for planning and implementing successful RTLS projects.",
    url: "https://rtlsalliance.org/project",
    type: "website",
  },
}

export default function ProjectPage() {
  return <ProjectPageClient />
}
