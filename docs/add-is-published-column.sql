-- Add is_published column to staging_articles table if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_name = 'staging_articles' AND column_name = 'is_published'
    ) THEN
        ALTER TABLE staging_articles ADD COLUMN is_published BOOLEAN DEFAULT true;
    END IF;
END $$;

-- Update all existing articles to be published
UPDATE staging_articles SET is_published = true WHERE is_published IS NULL;

-- Add is_admin column to profiles table if it doesn't exist
DO $$
BEGIN
    IF NOT EXISTS (
        SELECT FROM information_schema.columns 
        WHERE table_name = 'profiles' AND column_name = 'is_admin'
    ) THEN
        ALTER TABLE profiles ADD COLUMN is_admin BOOLEAN DEFAULT false;
    END IF;
END $$;
