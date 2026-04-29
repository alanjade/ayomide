import { createClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// ─── Type Definitions ────────────────────────────────────────────────────────

export type Project = {
  id?: string
  slug: string
  title: string
  location: string
  state: string
  lat: number
  lng: number
  category: 'Residential Layout' | 'EIA' | 'Tourism Planning' | 'Urban Development' | 'Feasibility' | 'Urban Renewal'
  year: string
  color: string
  image_url?: string
  client: string
  overview: string
  problem: string
  approach: string
  outcome: string
  impact: string
  impact_detail?: string
  metrics: { label: string; value: string }[]
  tags: string[]
  created_at?: string
}

export type Testimonial = {
  id?: string
  name: string
  title: string
  organization?: string
  type?: 'Client' | 'Institutional' | 'Developer'
  quote: string
  initials?: string   
  color?: string      
  created_at?: string
}
/**
 * Matches the camelCase shape used throughout the app.
 * The DB stores `requires_email` and `file_size`; queries.ts
 * maps those to `requiresEmail` and `fileSize` before returning.
 */
export type Resource = {
  id: string
  title: string
  description: string
  type: 'PDF' | 'Checklist' | 'Template' | 'Guide'
  pages: string
  requiresEmail: boolean
  fileSize: string
}

export type MediaItem = {
  id: string
  type: 'Event' | 'Speaking' | 'Training' | 'Feature'
  title: string
  subtitle: string
  date: string
  location: string
  description: string
  color: string
  created_at?: string
}

// ─── Raw DB row types (snake_case as stored in Supabase) ─────────────────────

type ResourceRow = Omit<Resource, 'requiresEmail' | 'fileSize'> & {
  requires_email: boolean
  file_size: string
  created_at: string
}

export type Database = {
  public: {
    Tables: {
      projects: {
        Row: Project
        Insert: Omit<Project, 'id' | 'created_at'>
      }
      testimonials: {
        Row: Testimonial & { id: string; created_at: string }
        Insert: Omit<Testimonial, 'id' | 'created_at'>
      }
      resources: {
        Row: ResourceRow
        Insert: Omit<ResourceRow, 'id' | 'created_at'>
      }
      media_items: {
        Row: MediaItem
        Insert: Omit<MediaItem, 'id' | 'created_at'>
      }
      contact_submissions: {
        Insert: {
          name: string
          email: string
          subject: string
          message: string
        }
        Row: {
          id: string
          name: string
          email: string
          subject: string
          message: string
          created_at: string
        }
      }
    }
  }
}