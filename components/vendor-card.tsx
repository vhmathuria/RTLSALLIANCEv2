import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface VendorCardProps {
  vendor: {
    id: string
    vendor_name: string
    headquarters_location?: string
    founding_year?: number
    core_services?: string
    industry_verticals?: string
    rtls_technologies?: string
    unique_selling_propositions?: string
  }
}

export function VendorCard({ vendor }: VendorCardProps) {
  const technologies = vendor.rtls_technologies?.split(", ").filter(Boolean) || []
  const industries = vendor.industry_verticals?.split(", ").filter(Boolean) || []

  return (
    <Card className="h-full hover:shadow-lg transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="text-lg font-semibold text-primary">{vendor.vendor_name}</CardTitle>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          {vendor.headquarters_location && <span>{vendor.headquarters_location}</span>}
          {vendor.founding_year && (
            <>
              <span>•</span>
              <span>Est. {vendor.founding_year}</span>
            </>
          )}
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        {vendor.core_services && (
          <div>
            <h4 className="font-medium text-sm mb-2">Core Services</h4>
            <p className="text-sm text-muted-foreground line-clamp-3">{vendor.core_services}</p>
          </div>
        )}

        {technologies.length > 0 && (
          <div>
            <h4 className="font-medium text-sm mb-2">Technologies</h4>
            <div className="flex flex-wrap gap-1">
              {technologies.slice(0, 4).map((tech, index) => (
                <Badge key={index} variant="secondary" className="text-xs">
                  {tech.trim()}
                </Badge>
              ))}
              {technologies.length > 4 && (
                <Badge variant="outline" className="text-xs">
                  +{technologies.length - 4} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {industries.length > 0 && (
          <div>
            <h4 className="font-medium text-sm mb-2">Industries</h4>
            <div className="flex flex-wrap gap-1">
              {industries.slice(0, 3).map((industry, index) => (
                <Badge key={index} variant="outline" className="text-xs">
                  {industry.trim()}
                </Badge>
              ))}
              {industries.length > 3 && (
                <Badge variant="outline" className="text-xs">
                  +{industries.length - 3} more
                </Badge>
              )}
            </div>
          </div>
        )}

        {vendor.unique_selling_propositions && (
          <div>
            <h4 className="font-medium text-sm mb-2">Key Differentiators</h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{vendor.unique_selling_propositions}</p>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
