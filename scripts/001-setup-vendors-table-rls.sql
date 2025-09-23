-- Enable RLS on vendors table and create public read policy
ALTER TABLE vendors ENABLE ROW LEVEL SECURITY;

-- Allow public read access to active vendors
CREATE POLICY "Allow public read access to active vendors" 
ON vendors FOR SELECT 
USING (is_active = true);

-- Allow authenticated users to read all vendors (for admin)
CREATE POLICY "Allow authenticated users to read all vendors" 
ON vendors FOR SELECT 
USING (auth.role() = 'authenticated');

-- Allow service role to manage vendors (for admin operations)
CREATE POLICY "Allow service role to manage vendors" 
ON vendors FOR ALL 
USING (auth.role() = 'service_role');
