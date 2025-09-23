-- Create bids table for vendor proposals
CREATE TABLE IF NOT EXISTS public.bids (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
    
    -- Bid relationships
    project_id UUID REFERENCES public.projects(id) ON DELETE CASCADE,
    vendor_id UUID REFERENCES public.profiles(id) ON DELETE CASCADE,
    
    -- Bid details
    proposal TEXT NOT NULL,
    estimated_cost VARCHAR(100),
    estimated_timeline VARCHAR(100),
    approach_summary TEXT,
    
    -- Vendor information
    vendor_organization VARCHAR(255),
    vendor_experience TEXT,
    portfolio_links TEXT[], -- Array of URLs
    
    -- Bid status
    status VARCHAR(50) DEFAULT 'submitted', -- 'submitted', 'under_review', 'accepted', 'rejected', 'withdrawn'
    
    -- Client feedback
    client_notes TEXT,
    client_rating INTEGER CHECK (client_rating >= 1 AND client_rating <= 5),
    
    -- Tracking
    is_shortlisted BOOLEAN DEFAULT FALSE,
    
    UNIQUE(project_id, vendor_id) -- One bid per vendor per project
);

-- Add RLS policies
ALTER TABLE public.bids ENABLE ROW LEVEL SECURITY;

-- Policy: Project owners can view bids on their projects
CREATE POLICY "Project owners can view bids on their projects" ON public.bids
    FOR SELECT USING (
        EXISTS (
            SELECT 1 FROM public.projects 
            WHERE projects.id = bids.project_id 
            AND projects.client_id = auth.uid()
        )
    );

-- Policy: Vendors can view/edit their own bids
CREATE POLICY "Vendors can manage their own bids" ON public.bids
    FOR ALL USING (auth.uid() = vendor_id);

-- Policy: Only vendors with proper membership can create bids
CREATE POLICY "Only qualified vendors can create bids" ON public.bids
    FOR INSERT WITH CHECK (
        auth.uid() = vendor_id AND
        EXISTS (
            SELECT 1 FROM public.profiles 
            WHERE profiles.id = auth.uid() 
            AND profiles.membership_tier IN ('professional', 'corporate')
            AND profiles.membership_status = 'active'
        )
    );

-- Create indexes for better performance
CREATE INDEX IF NOT EXISTS idx_bids_project_id ON public.bids(project_id);
CREATE INDEX IF NOT EXISTS idx_bids_vendor_id ON public.bids(vendor_id);
CREATE INDEX IF NOT EXISTS idx_bids_status ON public.bids(status);
CREATE INDEX IF NOT EXISTS idx_bids_created_at ON public.bids(created_at DESC);
