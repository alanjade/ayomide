import type { Metadata } from 'next'
import { Calendar, MapPin, Mic, Award, BookOpen, Star } from 'lucide-react'
import { getMediaItems } from '@/lib/queries'
import type { MediaItem } from '@/lib/supabase'

export const metadata: Metadata = {
  title: 'Media & Engagements | Speaking, Events & Press — Alalade Ayomide, MNITP',
  description:
    'Speaking engagements, planning forums, EIA training sessions, and press features for Alalade Ayomide — registered Nigerian town planner and urban development thought leader.',
  keywords: [
    'urban planning speaker Nigeria',
    'EIA training Nigeria',
    'planning conference Nigeria',
    'Alalade Ayomide speaking',
    'NITP forum Nigeria',
  ],
  openGraph: {
    title: 'Media & Engagements | Speaking, Events & Press — Alalade Ayomide',
    description:
      'Speaking engagements, planning forums, EIA training, and press features from registered town planner Alalade Ayomide.',
    type: 'website',
  },
  alternates: {
    canonical: '/media',
  },
}

// ─── Type config ──────────────────────────────────────────────────────────────
// Icons are rendered inline inside JSX, so the object is defined as a plain
// record mapping to a render function rather than storing JSX nodes at module
// level (which causes React element hydration issues in some Next.js configs).

type TypeConfig = {
  icon: () => React.ReactNode
  color: string
  label: string
}

const typeConfig: Record<MediaItem['type'], TypeConfig> = {
  Speaking: { icon: () => <Mic size={16} />, color: '#2D5016', label: 'Speaking' },
  Event:    { icon: () => <Star size={16} />, color: '#8B5E3C', label: 'Event' },
  Training: { icon: () => <BookOpen size={16} />, color: '#4A7C28', label: 'Training' },
  Feature:  { icon: () => <Award size={16} />, color: '#3C6B8B', label: 'Press Feature' },
}

const galleryPlaceholders = [
  'Nigeria Tourism Summit 2023',
  'NITP Annual Conference',
  'Real Estate Masterclass',
  'Urban Futures Forum',
  'EIA Practitioners Workshop',
  'Field Survey — Lekki Corridor',
]

export default async function MediaPage() {
  const mediaItems = await getMediaItems()

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section
        style={{
          backgroundColor: 'var(--bg-secondary)',
          borderBottom: '1px solid var(--border)',
          padding: '5rem 2rem',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>
            Visibility &amp; Influence
          </div>
          <h1
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.5rem, 5vw, 4rem)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              maxWidth: '640px',
              lineHeight: 1.1,
              marginBottom: '1.25rem',
            }}
          >
            Media, Events &amp; Engagements
          </h1>
          <p
            style={{
              fontSize: '0.95rem',
              color: 'var(--text-muted)',
              maxWidth: '540px',
              lineHeight: 1.7,
            }}
          >
            Speaking at national planning forums, training industry practitioners, and contributing
            to public discourse on sustainable urban development and land investment.
          </p>
        </div>
      </section>

      {/* ── Type counts ─────────────────────────────────────────────────── */}
      <div
        style={{
          backgroundColor: 'var(--bg-subtle)',
          borderBottom: '1px solid var(--border)',
          padding: '1.25rem 2rem',
        }}
      >
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            gap: '2.5rem',
            flexWrap: 'wrap',
          }}
        >
          {(Object.entries(typeConfig) as [MediaItem['type'], TypeConfig][]).map(
            ([type, config]) => {
              const count = mediaItems.filter((m) => m.type === type).length
              return (
                <div key={type} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <div style={{ color: config.color }}>{config.icon()}</div>
                  <span
                    style={{ fontSize: '0.8rem', fontWeight: 600, color: 'var(--text-primary)' }}
                  >
                    {count}
                  </span>
                  <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>
                    {config.label}
                    {count !== 1 ? 's' : ''}
                  </span>
                </div>
              )
            }
          )}
        </div>
      </div>

      {/* ── Engagements list ────────────────────────────────────────────── */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '2rem' }}>
            Engagements
          </div>

          {mediaItems.length === 0 ? (
            <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>
              No engagements found.
            </p>
          ) : (
            <div
              style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5px',
                backgroundColor: 'var(--border)',
              }}
            >
              {mediaItems.map((item) => {
                const config = typeConfig[item.type]
                // Guard against unknown types coming from the DB
                if (!config) return null

                return (
                  <div
                    key={item.id}
                    style={{
                      backgroundColor: 'var(--bg-card)',
                      display: 'grid',
                      gridTemplateColumns: 'auto 1fr',
                      overflow: 'hidden',
                    }}
                  >
                    {/* Colour stripe */}
                    <div style={{ width: '6px', backgroundColor: item.color, flexShrink: 0 }} />

                    <div
                      style={{
                        padding: '2rem 2.5rem',
                        display: 'grid',
                        gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
                        gap: '2rem',
                        alignItems: 'start',
                      }}
                    >
                      {/* Left column */}
                      <div>
                        <div
                          style={{
                            display: 'flex',
                            gap: '0.5rem',
                            alignItems: 'center',
                            marginBottom: '0.875rem',
                          }}
                        >
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              backgroundColor: 'var(--bg-subtle)',
                              border: '1px solid var(--border)',
                              padding: '3px 8px',
                              color: config.color,
                              fontSize: '0.65rem',
                              fontWeight: 600,
                              letterSpacing: '0.08em',
                              textTransform: 'uppercase',
                            }}
                          >
                            {config.icon()} {config.label}
                          </div>
                        </div>
                        <h3
                          style={{
                            fontFamily: 'var(--font-display)',
                            fontSize: '1.3rem',
                            fontWeight: 500,
                            color: 'var(--text-primary)',
                            marginBottom: '0.5rem',
                            lineHeight: 1.2,
                          }}
                        >
                          {item.title}
                        </h3>
                        <div
                          style={{
                            fontSize: '0.85rem',
                            color: 'var(--accent-green)',
                            fontStyle: 'italic',
                            marginBottom: '0.75rem',
                          }}
                        >
                          {item.subtitle}
                        </div>
                      </div>

                      {/* Right column */}
                      <div>
                        <p
                          style={{
                            fontSize: '0.875rem',
                            color: 'var(--text-secondary)',
                            lineHeight: 1.7,
                            marginBottom: '1rem',
                          }}
                        >
                          {item.description}
                        </p>
                        <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap' }}>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              fontSize: '0.78rem',
                              color: 'var(--text-muted)',
                            }}
                          >
                            <Calendar size={13} /> {item.date}
                          </div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '0.35rem',
                              fontSize: '0.78rem',
                              color: 'var(--text-muted)',
                            }}
                          >
                            <MapPin size={13} /> {item.location}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </section>

      {/* ── Photo Gallery ───────────────────────────────────────────────── */}
      <section
        style={{
          padding: '5rem 2rem',
          backgroundColor: 'var(--bg-secondary)',
          borderTop: '1px solid var(--border)',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '0.75rem' }}>
            Gallery
          </div>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(1.8rem, 3.5vw, 2.5rem)',
              fontWeight: 400,
              color: 'var(--text-primary)',
              marginBottom: '2.5rem',
            }}
          >
            In the Field &amp; On Stage
          </h2>

          {/*
            Gallery grid: first item spans 2 columns on wide screens only.
            We use a CSS class + media query approach via inline style tag to
            avoid the hard-coded `gridColumn: 'span 2'` that breaks on mobile.
          */}
          <style>{`
            @media (min-width: 640px) {
              .gallery-item-wide { grid-column: span 2; }
            }
          `}</style>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
              gap: '1rem',
            }}
          >
            {galleryPlaceholders.map((caption, i) => (
              <div
                key={i}
                className={i === 0 || i === 3 ? 'gallery-item-wide' : undefined}
                style={{
                  aspectRatio: i === 0 || i === 3 ? '16/9' : '4/3',
                  backgroundColor: 'var(--bg-subtle)',
                  border: '1px solid var(--border)',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
                <div
                  style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1rem',
                    background: 'linear-gradient(transparent, rgba(0,0,0,0.5))',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.72rem',
                      color: 'rgba(255,255,255,0.7)',
                      letterSpacing: '0.06em',
                    }}
                  >
                    {caption}
                  </div>
                </div>
                <div
                  style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                  }}
                >
                  <div
                    style={{
                      fontSize: '0.65rem',
                      fontWeight: 600,
                      letterSpacing: '0.12em',
                      textTransform: 'uppercase',
                      color: 'var(--text-muted)',
                    }}
                  >
                    Upload Photo
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Speaking CTA ────────────────────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--accent-green)', padding: '4rem 2rem' }}>
        <div
          style={{
            maxWidth: '1280px',
            margin: '0 auto',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '2rem',
          }}
        >
          <div>
            <div
              style={{
                fontSize: '0.68rem',
                letterSpacing: '0.15em',
                textTransform: 'uppercase',
                color: 'rgba(255,255,255,0.6)',
                marginBottom: '0.5rem',
              }}
            >
              Speaking Invitations
            </div>
            <h2
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 3vw, 2.5rem)',
                fontWeight: 400,
                color: '#FAF8F5',
                margin: 0,
              }}
            >
              Invite Ayomide to Speak
            </h2>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'rgba(255,255,255,0.75)',
                marginTop: '0.5rem',
              }}
            >
              Planning forums, real estate conferences, investment summits, and training programmes.
            </p>
          </div>
          <a
            href="/contact?subject=Speaking Invitation"
            style={{
              backgroundColor: '#FAF8F5',
              color: 'var(--accent-green)',
              padding: '0.875rem 2rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.78rem',
              fontWeight: 700,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
              flexShrink: 0,
            }}
          >
            Send Invitation <Mic size={15} />
          </a>
        </div>
      </section>
    </div>
  )
}