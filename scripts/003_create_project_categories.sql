-- Create project categories lookup table
CREATE TABLE IF NOT EXISTS public.project_categories (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    name VARCHAR(100) UNIQUE NOT NULL,
    description TEXT,
    icon_name VARCHAR(50), -- For UI icons
    is_active BOOLEAN DEFAULT TRUE,
    sort_order INTEGER DEFAULT 0
);

-- Insert default categories
INSERT INTO public.project_categories (name, description, icon_name, sort_order) VALUES
('Automotive', 'Vehicle tracking, fleet management, and automotive manufacturing solutions', 'car', 1),
('Healthcare', 'Patient tracking, asset management, and medical device solutions', 'heart', 2),
('Manufacturing', 'Industrial asset tracking, workflow optimization, and supply chain solutions', 'factory', 3),
('Government', 'Public safety, security, and government facility management solutions', 'shield', 4),
('Retail', 'Customer analytics, inventory tracking, and retail optimization solutions', 'shopping-cart', 5),
('Logistics', 'Warehouse management, shipping, and distribution solutions', 'truck', 6),
('Education', 'Campus safety, asset tracking, and educational facility solutions', 'graduation-cap', 7),
('Sports & Entertainment', 'Venue management, fan experience, and event solutions', 'trophy', 8)
ON CONFLICT (name) DO NOTHING;

-- Add RLS policy (public read access)
ALTER TABLE public.project_categories ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can view project categories" ON public.project_categories
    FOR SELECT USING (is_active = true);
