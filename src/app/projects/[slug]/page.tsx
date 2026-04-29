import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Calendar, ArrowLeft, ArrowRight, Users } from 'lucide-react'
import { getProjectBySlug, getProjectSlugs, getAdjacentProjects } from '@/lib/queries'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  const slugs = await getProjectSlugs()
  return slugs.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const project = await getProjectBySlug(slug)
  if (!project) return { title: 'Project Not Found' }
  return {
    title: `${project.title} | ${project.category} Case Study — Alalade Ayomide`,
    description: `${project.overview.slice(0, 155)}…`,
    keywords: [...project.tags, 'urban planning Nigeria', project.location, project.category, 'MNITP planner'],
    openGraph: {
      title: `${project.title} | ${project.category} — Alalade Ayomide`,
      description: project.overview.slice(0, 155),
      type: 'article',
    },
    alternates: {
      canonical: `/projects/${slug}`,
    },
  }
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params
  const [project, { prev, next }] = await Promise.all([
    getProjectBySlug(slug),
    getAdjacentProjects(slug),
  ])

  if (!project) notFound()

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <section style={{ backgroundColor: project.color, padding: '5rem 2rem 4rem', position: 'relative', overflow: 'hidden', minHeight: '320px' }}>
        <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.15 }} />
        <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(160deg, ${project.color} 40%, rgba(0,0,0,0.4) 100%)` }} />
        <div style={{ maxWidth: '1280px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <Link href="/projects" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.7)', textDecoration: 'none', marginBottom: '2rem' }}>
            <ArrowLeft size={14} /> Back to Projects
          </Link>
          <div style={{ display: 'inline-block', backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', padding: '4px 12px', fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', marginBottom: '1rem' }}>
            {project.category}
          </div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, color: '#FAF8F5', lineHeight: 1.1, maxWidth: '700px', marginBottom: '1.5rem' }}>
            {project.title}
          </h1>
          <div style={{ display: 'flex', gap: '2rem', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
              <MapPin size={14} /> {project.location}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
              <Calendar size={14} /> {project.year}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
              <Users size={14} /> {project.client}
            </div>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <div style={{ backgroundColor: 'var(--bg-subtle)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 2rem' }}>
          <div style={{ display: 'grid', gridTemplateColumns: `repeat(${project.metrics.length}, 1fr)`, gap: 0 }}>
            {project.metrics.map((m, i) => (
              <div key={i} style={{ padding: '1.5rem 1rem', textAlign: 'center', borderRight: i < project.metrics.length - 1 ? '1px solid var(--border)' : 'none' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1 }}>{m.value}</div>
                <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.25rem', letterSpacing: '0.03em' }}>{m.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Case Study Body */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'start' }}>
            {/* Main content */}
            <div style={{ maxWidth: '680px' }}>
              {[
                { label: 'Project Overview', content: project.overview },
                { label: 'Problem Statement', content: project.problem },
                { label: 'Planning Approach', content: project.approach },
                { label: 'Outcome & Impact', content: project.outcome },
              ].map((section) => (
                <div key={section.label} style={{ marginBottom: '3rem' }}>
                  <div className="section-label" style={{ marginBottom: '0.75rem' }}>{section.label}</div>
                  <div style={{ width: '32px', height: '2px', backgroundColor: 'var(--accent-green)', marginBottom: '1.25rem' }} />
                  <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.8 }}>{section.content}</p>
                </div>
              ))}

              {/* Visuals placeholder */}
              <div style={{ marginBottom: '3rem' }}>
                <div className="section-label" style={{ marginBottom: '0.75rem' }}>Visuals & Documentation</div>
                <div style={{ width: '32px', height: '2px', backgroundColor: 'var(--accent-green)', marginBottom: '1.25rem' }} />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                  {['Site Layout Plan', 'Land Use Map', 'Infrastructure Diagram', 'Photographic Survey'].map((label, i) => (
                    <div key={i} style={{ aspectRatio: '4/3', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', position: 'relative', overflow: 'hidden' }}>
                      <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
                      <div style={{ position: 'relative', textAlign: 'center', padding: '1rem' }}>
                        <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{label}</div>
                        <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginTop: '4px', opacity: 0.7 }}>Upload image</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div style={{ position: 'sticky', top: '100px' }}>
              <div style={{ padding: '1.75rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', marginBottom: '1.5rem' }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>Project Details</div>
                {[
                  { label: 'Client', value: project.client },
                  { label: 'Location', value: project.location },
                  { label: 'Year', value: project.year },
                  { label: 'Category', value: project.category },
                ].map(({ label, value }) => (
                  <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid var(--border-light)', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{label}</span>
                    <span style={{ color: 'var(--text-primary)', textAlign: 'right', maxWidth: '60%' }}>{value}</span>
                  </div>
                ))}
              </div>

              <div style={{ padding: '1.75rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', marginBottom: '1.5rem' }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>Tags</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem' }}>
                  {project.tags.map((tag) => (
                    <span key={tag} style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent-green)', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', padding: '3px 8px' }}>{tag}</span>
                  ))}
                </div>
              </div>

              <div style={{ padding: '1.75rem', backgroundColor: 'var(--accent-green)' }}>
                <div style={{ fontSize: '0.68rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.65)', marginBottom: '0.5rem' }}>Similar Project?</div>
                <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6, marginBottom: '1.25rem' }}>
                  Discuss your development needs with a registered professional.
                </p>
                <Link href="/contact" style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem', backgroundColor: '#FAF8F5', color: 'var(--accent-green)', padding: '0.625rem 1.25rem', fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>
                  Get in Touch <ArrowRight size={13} />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <div style={{ borderTop: '1px solid var(--border)', backgroundColor: 'var(--bg-secondary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
          {prev ? (
            <Link href={`/projects/${prev.slug}`} style={{ padding: '2rem', borderRight: '1px solid var(--border)', textDecoration: 'none', transition: 'background 0.2s' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                <ArrowLeft size={12} /> Previous
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--text-primary)' }}>{prev.title}</div>
            </Link>
          ) : <div />}
          {next && (
            <Link href={`/projects/${next.slug}`} style={{ padding: '2rem', textAlign: 'right', textDecoration: 'none', transition: 'background 0.2s' }}>
              <div style={{ fontSize: '0.65rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '0.35rem' }}>
                Next <ArrowRight size={12} />
              </div>
              <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.1rem', color: 'var(--text-primary)' }}>{next.title}</div>
            </Link>
          )}
        </div>
      </div>
    </div>
  )
}