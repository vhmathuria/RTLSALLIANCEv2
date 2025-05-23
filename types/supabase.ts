export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[]

export interface Database {
  public: {
    Tables: {
      staging_articles: {
        Row: {
          id: number
          title: string
          slug: string
          content_type: string
          rich_text: string
          publish_date: string
          author: string | null
          featured_image: string | null
          excerpt: string | null
          created_at: string
          updated_at: string
        }
        Insert: {
          id?: number
          title: string
          slug: string
          content_type: string
          rich_text: string
          publish_date?: string
          author?: string | null
          featured_image?: string | null
          excerpt?: string | null
          created_at?: string
          updated_at?: string
        }
        Update: {
          id?: number
          title?: string
          slug?: string
          content_type?: string
          rich_text?: string
          publish_date?: string
          author?: string | null
          featured_image?: string | null
          excerpt?: string | null
          created_at?: string
          updated_at?: string
        }
      }
      article_templates: {
        Row: {
          id: number
          template: string
          structure: string
          created_at: string
        }
        Insert: {
          id?: number
          template: string
          structure: string
          created_at?: string
        }
        Update: {
          id?: number
          template?: string
          structure?: string
          created_at?: string
        }
      }
      profiles: {
        Row: {
          id: string
          email: string
          full_name: string | null
          organization: string | null
          role: string | null
          membership_tier: string | null
          created_at: string
        }
        Insert: {
          id: string
          email: string
          full_name?: string | null
          organization?: string | null
          role?: string | null
          membership_tier?: string | null
          created_at?: string
        }
        Update: {
          id?: string
          email?: string
          full_name?: string | null
          organization?: string | null
          role?: string | null
          membership_tier?: string | null
          created_at?: string
        }
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
  }
}
