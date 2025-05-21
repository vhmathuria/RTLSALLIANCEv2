# Content Revalidation Guide for RTLS Alliance

## Overview

The RTLS Alliance website uses Incremental Static Regeneration (ISR) to balance performance and content freshness. Pages are automatically revalidated once per day, but you can trigger immediate updates when needed.

## When to Trigger Revalidation

Trigger revalidation after:

1. **Updating article content** in the `staging_articles` table
2. **Changing membership tiers** for articles
3. **Adding new articles** to make them immediately visible
4. **Updating technology pages** content

## Paths to Revalidate

| Content Change | Paths to Revalidate |
|----------------|---------------------|
| New/updated article | `/resources/[article-slug]` and `/resources` |
| Membership tier change | The specific article page `/resources/[article-slug]` |
| Technology page update | `/rtls-digital-twin/technologies/[technology]` |
| Multiple articles | `/resources` (to update the listing page) |

## Using the Revalidation Console

1. Navigate to `/admin/revalidation`
2. Select the path you want to revalidate
3. Click "Revalidate"
4. Check the status message for confirmation

## Security

The revalidation system is protected by a security token. Only authorized team members should have access to the revalidation console.

## Troubleshooting

If revalidation doesn't seem to work:

1. Check that the path is correct (must start with `/`)
2. Verify that the page exists
3. Check the browser console for error messages
4. Ensure your REVALIDATION_TOKEN is correct

## Automatic Revalidation

Remember that all pages are automatically revalidated once per day, so immediate revalidation is only necessary when you need content changes to be visible right away.
