-- Create function to update bid_count on projects
CREATE OR REPLACE FUNCTION update_project_bid_count()
RETURNS TRIGGER AS $$
BEGIN
    IF TG_OP = 'INSERT' THEN
        UPDATE public.projects 
        SET bid_count = bid_count + 1 
        WHERE id = NEW.project_id;
        RETURN NEW;
    ELSIF TG_OP = 'DELETE' THEN
        UPDATE public.projects 
        SET bid_count = bid_count - 1 
        WHERE id = OLD.project_id;
        RETURN OLD;
    END IF;
    RETURN NULL;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for bid count updates
DROP TRIGGER IF EXISTS trigger_update_project_bid_count ON public.bids;
CREATE TRIGGER trigger_update_project_bid_count
    AFTER INSERT OR DELETE ON public.bids
    FOR EACH ROW EXECUTE FUNCTION update_project_bid_count();

-- Create function to update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create triggers for updated_at
DROP TRIGGER IF EXISTS trigger_projects_updated_at ON public.projects;
CREATE TRIGGER trigger_projects_updated_at
    BEFORE UPDATE ON public.projects
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

DROP TRIGGER IF EXISTS trigger_bids_updated_at ON public.bids;
CREATE TRIGGER trigger_bids_updated_at
    BEFORE UPDATE ON public.bids
    FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
