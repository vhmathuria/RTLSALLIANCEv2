-- Enable RLS on contact_messages table
ALTER TABLE contact_messages ENABLE ROW LEVEL SECURITY;

-- Create policy to allow anyone to insert contact messages
CREATE POLICY "Anyone can insert contact messages"
ON contact_messages
FOR INSERT
WITH CHECK (true);

-- Optional: Allow admins to read all messages
CREATE POLICY "Admins can read all contact messages"
ON contact_messages
FOR SELECT
USING (
  auth.jwt() ->> 'email' IN (
    SELECT email FROM profiles WHERE role = 'admin'
  )
);
