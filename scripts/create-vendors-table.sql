-- Create vendors table with all necessary fields
CREATE TABLE IF NOT EXISTS vendors (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  vendor_name VARCHAR(255) NOT NULL,
  headquarters_location VARCHAR(255),
  founding_year INTEGER,
  core_services TEXT,
  industry_verticals TEXT,
  rtls_technologies TEXT,
  unique_selling_propositions TEXT,
  is_active BOOLEAN DEFAULT true,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Create index for better performance
CREATE INDEX IF NOT EXISTS idx_vendors_active ON vendors(is_active);
CREATE INDEX IF NOT EXISTS idx_vendors_sort_order ON vendors(sort_order);

-- Enable RLS (Row Level Security)
ALTER TABLE vendors ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access for active vendors
CREATE POLICY "Allow public read access for active vendors" ON vendors
  FOR SELECT USING (is_active = true);

-- Create policy to allow admin full access
CREATE POLICY "Allow admin full access" ON vendors
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE profiles.id = auth.uid() 
      AND profiles.is_admin = true
    )
  );
