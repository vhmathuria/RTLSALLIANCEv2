-- Create projects table for the bidding portal
CREATE TABLE IF NOT EXISTS public.projects (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Project details
    title VARCHAR(255) NOT NULL,
    description TEXT NOT NULL,
    requirements TEXT,
    budget_range VARCHAR(100),
    timeline VARCHAR(100),
    location VARCHAR(255),
    
    -- Project metadata
    category VARCHAR(100) NOT NULL, -- e.g., 'automotive', 'healthcare', 'manufacturing', 'government'
    project_type VARCHAR(100) NOT NULL, -- e.g., 'implementation', 'consultation', 'integration'
    status VARCHAR(50) DEFAULT 'open', -- 'open', 'in_review', 'awarded', 'closed'
    
    -- Client information
    client_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    client_organization VARCHAR(255),
    contact_email VARCHAR(255) NOT NULL,
    contact_phone VARCHAR(50),
    
    -- Project settings
    bid_deadline TIMESTAMP WITH TIME ZONE,
    is_featured BOOLEAN DEFAULT FALSE,
    is_public BOOLEAN DEFAULT TRUE,
    
    -- Tracking
    view_count INTEGER DEFAULT 0,
    bid_count INTEGER DEFAULT 0
);

-- Add RLS policies
ALTER TABLE public.projects ENABLE ROW LEVEL SECURITY;

-- Policy: Anyone can view public projects
CREATE POLICY "Anyone can view public projects" ON public.projects
    FOR SELECT USING (is_public = true);

-- Policy: Project owners can view/edit their own projects
CREATE POLICY "Project owners can manage their projects" ON public.projects
    FOR ALL USING (auth.uid() = client_id);

-- Policy: Authenticated users can create projects
CREATE POLICY "Authenticated users can create projects" ON public.projects
    FOR INSERT WITH CHECK (auth.uid() = client_id);

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_projects_category ON public.projects(category);
CREATE INDEX IF NOT EXISTS idx_projects_status ON public.projects(status);
CREATE INDEX IF NOT EXISTS idx_projects_created_at ON public.projects(created_at DESC);
CREATE INDEX IF NOT EXISTS idx_projects_client_id ON public.projects(client_id);
