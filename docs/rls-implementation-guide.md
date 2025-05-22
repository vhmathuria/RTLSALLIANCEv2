# Implementing Row Level Security (RLS) in RTLS Alliance

This guide outlines the steps to implement Row Level Security (RLS) in the RTLS Alliance Supabase database.

## Overview

Row Level Security (RLS) allows us to restrict access to rows in database tables based on the user making the request. This is essential for:

1. Protecting sensitive data
2. Implementing proper access control
3. Ensuring users can only access data they're authorized to see

## Implementation Steps

### 1. Enable RLS on Tables

First, enable RLS on all tables:

\`\`\`sql
ALTER TABLE staging_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_templates ENABLE ROW LEVEL SECURITY;
\`\`\`

### 2. Create RLS Policies

Create policies that define who can access what data:

#### For staging_articles:

\`\`\`sql
-- Public can read published articles
CREATE POLICY "Public can read published articles" 
ON staging_articles FOR SELECT 
USING (is_published = true);

-- Members can read articles based on membership tier
CREATE POLICY "Members can read articles based on membership tier" 
ON staging_articles FOR SELECT 
TO authenticated
USING (
  is_published = true OR 
  (membership_tier = 'public' OR 
   EXISTS (
     SELECT 1 FROM profiles 
     WHERE profiles.id = auth.uid() AND 
     (
       CASE
         WHEN staging_articles.membership_tier = 'student' THEN 
           profiles.membership_tier IN ('student', 'professional', 'corporate')
         WHEN staging_articles.membership_tier = 'professional' THEN 
           profiles.membership_tier IN ('professional', 'corporate')
         WHEN staging_articles.membership_tier = 'corporate' THEN 
           profiles.membership_tier = 'corporate'
         ELSE true
       END
     )
   )
  )
);

-- Admins have full access
CREATE POLICY "Admins have full access to articles" 
ON staging_articles 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() AND profiles.is_admin = true
  )
) 
WITH CHECK (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() AND profiles.is_admin = true
  )
);
\`\`\`

#### For profiles:

\`\`\`sql
-- Users can read their own profile
CREATE POLICY "Users can read own profile" 
ON profiles FOR SELECT 
TO authenticated
USING (id = auth.uid());

-- Users can update their own profile
CREATE POLICY "Users can update own profile" 
ON profiles FOR UPDATE 
TO authenticated
USING (id = auth.uid())
WITH CHECK (id = auth.uid());

-- Admins can read all profiles
CREATE POLICY "Admins can read all profiles" 
ON profiles FOR SELECT 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() AND profiles.is_admin = true
  )
);

-- Admins can update all profiles
CREATE POLICY "Admins can update all profiles" 
ON profiles FOR UPDATE 
TO authenticated
USING (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() AND profiles.is_admin = true
  )
)
WITH CHECK (
  EXISTS (
    SELECT 1 FROM profiles 
    WHERE profiles.id = auth.uid() AND profiles.is_admin = true
  )
);
\`\`\`

### 3. Update Application Code

For server-side operations that need to bypass RLS, use the service role key:

\`\`\`typescript
import { createClient } from "@supabase/supabase-js"

export function createAdminClient() {
  return createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!,
    {
      auth: {
        persistSession: false,
      }
    }
  )
}
\`\`\`

### 4. Testing RLS Policies

After implementing RLS, test the following scenarios:

1. **Public access**: Unauthenticated users should only see published articles
2. **Member access**: Members should see content based on their membership tier
3. **Admin access**: Admins should have full access to all content
4. **Server-side operations**: Server-side operations using the service role should bypass RLS

## Troubleshooting

If you encounter issues after implementing RLS:

1. Check the Supabase logs for policy-related errors
2. Verify that the service role key is being used correctly for server-side operations
3. Test policies directly in the Supabase SQL editor
4. Temporarily disable RLS for debugging: `ALTER TABLE table_name DISABLE ROW LEVEL SECURITY;`

## Security Considerations

1. Never expose the service role key to the client
2. Always use the service role key only in server-side code
3. Regularly audit RLS policies to ensure they're working as expected
4. Consider implementing additional security measures like API rate limiting
