-- Instructions for the staging_articles table

-- After updating article content, membership tier, or adding new articles,
-- you should trigger revalidation to make the changes visible immediately.

-- 1. For updating existing articles:
-- After running an UPDATE query like this:
UPDATE staging_articles 
SET title = 'Updated Title', 
    rich_text = '{"updated": "content"}', 
    membership_tier = 'professional' 
WHERE slug = 'article-slug';

-- 2. For adding new articles:
-- After running an INSERT query like this:
INSERT INTO staging_articles (
  title, 
  slug, 
  content_type, 
  rich_text, 
  publish_date, 
  membership_tier
) VALUES (
  'New Article Title',
  'new-article-slug',
  'Guide',
  '{"content": "here"}',
  CURRENT_TIMESTAMP,
  'free'
);

-- 3. For changing membership tiers:
-- After running an UPDATE query like this:
UPDATE staging_articles 
SET membership_tier = 'professional' 
WHERE slug = 'article-slug';

-- IMPORTANT: After any of these operations, visit the Revalidation Console at:
-- /admin/revalidation
--
-- Select the appropriate path to revalidate:
-- - For a specific article: /resources/article-slug
-- - For the resources listing page: /resources
--
-- This will make your changes visible immediately without waiting for the
-- daily automatic revalidation.
