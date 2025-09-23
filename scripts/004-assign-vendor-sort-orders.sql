-- Script to assign sort_order values to vendors
-- Fixed positions for specific vendors, random for others

-- First, assign fixed sort_order values to specific vendors
UPDATE vendors 
SET sort_order = CASE 
    WHEN LOWER(vendor_name) LIKE '%locaxion%' THEN 1
    WHEN LOWER(vendor_name) LIKE '%slamcore%' THEN 2
    WHEN LOWER(vendor_name) LIKE '%sick%' THEN 3
    WHEN LOWER(vendor_name) LIKE '%red lore%' OR LOWER(vendor_name) LIKE '%redlore%' THEN 4
    WHEN LOWER(vendor_name) LIKE '%zebra%' THEN 5
    WHEN LOWER(vendor_name) LIKE '%quuppa%' THEN 6
    WHEN LOWER(vendor_name) LIKE '%kinexon%' THEN 7
    ELSE sort_order -- Keep existing value for now
END;

-- Now assign random sort_order values to all vendors that don't have fixed positions
-- We'll use a range from 8 to 1000 to ensure no conflicts with fixed positions
WITH random_orders AS (
    SELECT 
        id,
        vendor_name,
        sort_order,
        -- Generate random number between 8 and 1000 for vendors without fixed positions
        CASE 
            WHEN sort_order NOT IN (1, 2, 3, 4, 5, 6, 7) 
            THEN FLOOR(RANDOM() * 993) + 8  -- Random between 8-1000
            ELSE sort_order 
        END as new_sort_order
    FROM vendors
)
UPDATE vendors 
SET sort_order = random_orders.new_sort_order
FROM random_orders 
WHERE vendors.id = random_orders.id;

-- Verify the results
SELECT vendor_name, sort_order 
FROM vendors 
WHERE sort_order IN (1, 2, 3, 4, 5, 6, 7)
ORDER BY sort_order;
