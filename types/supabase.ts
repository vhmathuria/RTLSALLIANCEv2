export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          bio: string | null
          company: string | null
          education: string | null
          location: string | null
          profile_image: string | null
          membership_tier: string | null
          membership_status: string | null
          membership_expiry: string | null
          stripe_customer_id: string | null
          last_payment_date: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          bio?: string | null
          company?: string | null
          education?: string | null
          location?: string | null
          profile_image?: string | null
          membership_tier?: string | null
          membership_status?: string | null
          membership_expiry?: string | null
          stripe_customer_id?: string | null
          last_payment_date?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          bio?: string | null
          company?: string | null
          education?: string | null
          location?: string | null
          profile_image?: string | null
          membership_tier?: string | null
          membership_status?: string | null
          membership_expiry?: string | null
          stripe_customer_id?: string | null
          last_payment_date?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      staging_articles: {
        Row: {
          id: string
          slug: string
          title: string
          content: string
          excerpt: string | null
          featured_image: string | null
          author: string | null
          published_at: string | null
          updated_at: string | null
          content_type: string | null
          membership_tier: string | null
          is_published: boolean
          meta_description: string | null
        }
        Insert: {
          id?: string
          slug: string
          title: string
          content: string
          excerpt?: string | null
          featured_image?: string | null
          author?: string | null
          published_at?: string | null
          updated_at?: string | null
          content_type?: string | null
          membership_tier?: string | null
          is_published?: boolean
          meta_description?: string | null
        }
        Update: {
          id?: string
          slug?: string
          title?: string
          content?: string
          excerpt?: string | null
          featured_image?: string | null
          author?: string | null
          published_at?: string | null
          updated_at?: string | null
          content_type?: string | null
          membership_tier?: string | null
          is_published?: boolean
          meta_description?: string | null
        }
      }
    }
  }
}
