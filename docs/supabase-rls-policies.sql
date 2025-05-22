-- =======================================
-- COMPREHENSIVE RLS POLICY IMPLEMENTATION
-- =======================================

-- Step 1: Enable RLS on all tables
ALTER TABLE staging_articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE article_templates ENABLE ROW LEVEL SECURITY;

-- Step 2: Create policies for staging_articles table
-- Public can read published articles
CREATE POLICY "Public can read published articles" 
ON staging_articles FOR SELECT 
USING (is_published = true);

-- Authenticated users can read all articles based on their membership tier
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

-- Admins can do everything
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

-- Step 3: Create policies for profiles table
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

-- Step 4: Create policies for article_templates table
-- Only admins can access article templates
CREATE POLICY "Admins have full access to article templates" 
ON article_templates 
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

-- Step 5: Create a special policy for sitemap generation
-- This requires a service role token approach instead of RLS
-- We'll handle this in the application code
