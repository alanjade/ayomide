import { supabase, type Project, type Testimonial, type Resource, type MediaItem } from './supabase'

// ─── Projects ────────────────────────────────────────────────────────────────

export async function getProjects(): Promise<Project[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('year', { ascending: false })

  if (error) {
    console.error('Error fetching projects:', error)
    return []
  }
  return data ?? []
}

export async function getProjectBySlug(slug: string): Promise<Project | null> {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .eq('slug', slug)
    .single()

  if (error) {
    console.error('Error fetching project:', error)
    return null
  }
  return data
}

export async function getProjectSlugs(): Promise<{ slug: string }[]> {
  const { data, error } = await supabase
    .from('projects')
    .select('slug')

  if (error) {
    console.error('Error fetching project slugs:', error)
    return []
  }
  return data ?? []
}

export async function getAdjacentProjects(
  slug: string
): Promise<{ prev: Project | null; next: Project | null }> {
  const projects = await getProjects()
  const index = projects.findIndex((p) => p.slug === slug)
  return {
    prev: index > 0 ? projects[index - 1] : null,
    next: index < projects.length - 1 ? projects[index + 1] : null,
  }
}

// ─── Testimonials ─────────────────────────────────────────────────────────────

export async function getTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from('testimonials')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching testimonials:', error)
    return []
  }
  return data ?? []
}

// ─── Resources ────────────────────────────────────────────────────────────────

export async function getResources(): Promise<Resource[]> {
  const { data, error } = await supabase
    .from('resources')
    .select('*')
    .order('created_at', { ascending: true })

  if (error) {
    console.error('Error fetching resources:', error)
    return []
  }

  // Map snake_case DB columns → camelCase app type
  return (data ?? []).map((row) => ({
    id: row.id,
    title: row.title,
    description: row.description,
    type: row.type,
    pages: row.pages,
    requiresEmail: row.requires_email,
    fileSize: row.file_size,
  }))
}

// ─── Media Items ──────────────────────────────────────────────────────────────

export async function getMediaItems(): Promise<MediaItem[]> {
  const { data, error } = await supabase
    .from('media_items')
    .select('*')
    .order('created_at', { ascending: false })

  if (error) {
    console.error('Error fetching media items:', error.message, error.details, error.hint)
    return []
  }

  if (!data || data.length === 0) {
    console.warn('media_items query returned no rows — check RLS policies on the table.')
    return []
  }

  const validTypes = new Set<MediaItem['type']>(['Speaking', 'Event', 'Training', 'Feature'])

  return data.reduce<MediaItem[]>((acc, row) => {
    const type = (row.type ?? '').trim() as MediaItem['type']
    if (!validTypes.has(type)) {
      console.warn(`media_items: unknown type "${row.type}" on row id="${row.id}" — skipping`)
      return acc
    }
    acc.push({ ...row, type })
    return acc
  }, [])
}

// ─── Contact Submissions ──────────────────────────────────────────────────────

export async function submitContactForm(payload: {
  name: string
  email: string
  subject: string
  message: string
}): Promise<{ success: boolean; error?: string }> {
  const { error } = await supabase
    .from('contact_submissions')
    .insert([payload])

  if (error) {
    console.error('Error submitting contact form:', error)
    return { success: false, error: error.message }
  }
  return { success: true }
}