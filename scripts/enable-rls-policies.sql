-- Enable Row Level Security (RLS) on all tables
ALTER TABLE profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE bids ENABLE ROW LEVEL SECURITY;
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;
ALTER TABLE Newsletter_signup ENABLE ROW LEVEL SECURITY;
ALTER TABLE project_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE staging_articles ENABLE ROW LEVEL SECURITY;

-- Profiles table policies
CREATE POLICY "Users can view their own profile" ON profiles
  FOR SELECT USING (auth.uid() = id);

CREATE POLICY "Users can update their own profile" ON profiles
  FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert their own profile" ON profiles
  FOR INSERT WITH CHECK (auth.uid() = id);

CREATE POLICY "Admins can view all profiles" ON profiles
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

CREATE POLICY "Admins can update all profiles" ON profiles
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Articles table policies
CREATE POLICY "Anyone can view published articles" ON articles
  FOR SELECT USING (published_at IS NOT NULL);

CREATE POLICY "Admins can manage all articles" ON articles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Projects table policies
CREATE POLICY "Anyone can view public projects" ON projects
  FOR SELECT USING (is_public = true);

CREATE POLICY "Project owners can view their projects" ON projects
  FOR SELECT USING (client_id = auth.uid());

CREATE POLICY "Authenticated users can create projects" ON projects
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL AND client_id = auth.uid());

CREATE POLICY "Project owners can update their projects" ON projects
  FOR UPDATE USING (client_id = auth.uid());

CREATE POLICY "Admins can manage all projects" ON projects
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Bids table policies
CREATE POLICY "Project owners can view bids on their projects" ON bids
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM projects 
      WHERE id = bids.project_id AND client_id = auth.uid()
    )
  );

CREATE POLICY "Bid owners can view their own bids" ON bids
  FOR SELECT USING (vendor_id = auth.uid());

CREATE POLICY "Authenticated users can create bids" ON bids
  FOR INSERT WITH CHECK (auth.uid() IS NOT NULL AND vendor_id = auth.uid());

CREATE POLICY "Bid owners can update their own bids" ON bids
  FOR UPDATE USING (vendor_id = auth.uid());

CREATE POLICY "Project owners can update bids on their projects" ON bids
  FOR UPDATE USING (
    EXISTS (
      SELECT 1 FROM projects 
      WHERE id = bids.project_id AND client_id = auth.uid()
    )
  );

CREATE POLICY "Admins can manage all bids" ON bids
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Contact messages policies
CREATE POLICY "Anyone can insert contact messages" ON contact_messages
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view all contact messages" ON contact_messages
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Newsletter signup policies
CREATE POLICY "Anyone can sign up for newsletter" ON Newsletter_signup
  FOR INSERT WITH CHECK (true);

CREATE POLICY "Admins can view newsletter signups" ON Newsletter_signup
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Project categories policies
CREATE POLICY "Anyone can view active project categories" ON project_categories
  FOR SELECT USING (is_active = true);

CREATE POLICY "Admins can manage project categories" ON project_categories
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Staging articles policies
CREATE POLICY "Admins can manage staging articles" ON staging_articles
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Art table policies (if needed)
CREATE POLICY "Anyone can view art" ON art
  FOR SELECT USING (true);

CREATE POLICY "Admins can manage art" ON art
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );

-- Article templates policies
CREATE POLICY "Admins can manage article templates" ON article_templates
  FOR ALL USING (
    EXISTS (
      SELECT 1 FROM profiles 
      WHERE id = auth.uid() AND is_admin = true
    )
  );
