import type { Metadata } from 'next'
import Link from 'next/link'
import { Quote, ArrowRight } from 'lucide-react'
import { getTestimonials } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Testimonials | Client Reviews & Endorsements — Alalade Ayomide, MNITP',
  description: 'What developers, investors, and government agencies say about working with Alalade Ayomide — registered Nigerian town planner, EIA consultant, and urban strategist.',
  keywords: ['urban planner reviews Nigeria', 'EIA consultant testimonials Nigeria', 'planning consultant feedback', 'Alalade Ayomide reviews', 'MNITP planner testimonials'],
  openGraph: {
    title: 'Testimonials | Client Reviews — Alalade Ayomide, MNITP',
    description: 'Developer, investor, and institutional feedback for registered town planner and EIA consultant Alalade Ayomide.',
    type: 'website',
  },
  alternates: {
    canonical: '/testimonials',
  },
}

const typeOrder = ['Client', 'Developer', 'Institutional'] as const

export default async function TestimonialsPage() {
  const testimonials = await getTestimonials()

  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Social Proof</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--text-primary)', maxWidth: '640px', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            What Clients, Developers & Institutions Say
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '540px', lineHeight: 1.7 }}>
            Across 12+ years and 50+ projects, the measure of success is the trust of the people and organisations we serve.
          </p>
        </div>
      </section>

      {/* Testimonials by type */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {typeOrder.map((type) => {
            const group = testimonials.filter((t) => t.type === type)
            if (!group.length) return null
            return (
              <div key={type} style={{ marginBottom: '5rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem', borderBottom: '1px solid var(--border)', paddingBottom: '1rem' }}>
                  <div className="section-label">{type} Testimonials</div>
                  <div style={{ flex: 1, height: '1px', backgroundColor: 'var(--border-light)' }} />
                  <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{group.length} review{group.length !== 1 ? 's' : ''}</div>
                </div>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
                  {group.map((t, i) => (
                    <div key={t.id ?? i} className="card" style={{ padding: '2.25rem', display: 'flex', flexDirection: 'column', backgroundColor: 'var(--bg-card)' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                        <Quote size={28} color="var(--accent-green)" style={{ opacity: 0.5 }} />
                        <div style={{
                          fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.1em',
                          textTransform: 'uppercase', padding: '3px 8px',
                          color: type === 'Client' ? '#2D5016' : type === 'Developer' ? '#8B5E3C' : '#3C6B8B',
                          backgroundColor: type === 'Client' ? 'rgba(45,80,22,0.08)' : type === 'Developer' ? 'rgba(139,94,60,0.08)' : 'rgba(60,107,139,0.08)',
                          border: `1px solid ${type === 'Client' ? 'rgba(45,80,22,0.2)' : type === 'Developer' ? 'rgba(139,94,60,0.2)' : 'rgba(60,107,139,0.2)'}`,
                        }}>
                          {type}
                        </div>
                      </div>

                      <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.8, fontStyle: 'italic', flex: 1, marginBottom: '1.75rem' }}>
                        &ldquo;{t.quote}&rdquo;
                      </p>

                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.875rem', borderTop: '1px solid var(--border-light)', paddingTop: '1.25rem' }}>
                        <div style={{ width: '44px', height: '44px', backgroundColor: t.color ?? 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <span style={{ fontFamily: 'var(--font-display)', fontSize: '1rem', color: '#FAF8F5', fontWeight: 600 }}>
                            {t.initials ?? t.name.slice(0, 2).toUpperCase()}
                          </span>
                        </div>
                        <div>
                          <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>{t.name}</div>
                          <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '2px' }}>{t.title}</div>
                          {t.organization && (
                            <div style={{ fontSize: '0.72rem', color: 'var(--accent-earth)', fontStyle: 'italic', marginTop: '1px' }}>{t.organization}</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'center' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Start Your Project</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
              Ready to Add Your Name to This List?
            </h2>
            <p style={{ fontSize: '0.95rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem' }}>
              Whether it&apos;s a planning approval, an EIA study, or a land investment strategy — let&apos;s build something that works.
            </p>
            <Link href="/contact" style={{ backgroundColor: 'var(--accent-green)', color: '#FAF8F5', padding: '0.875rem 2rem', fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Schedule a Meeting <ArrowRight size={15} />
            </Link>
          </div>
          <div style={{ padding: '2.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
            <Quote size={32} color="var(--accent-green)" style={{ opacity: 0.4, marginBottom: '1.25rem' }} />
            <p style={{ fontFamily: 'var(--font-display)', fontSize: '1.35rem', fontStyle: 'italic', color: 'var(--text-secondary)', lineHeight: 1.65, marginBottom: '1.5rem' }}>
              &ldquo;He connects planning strategy directly to development economics in a way few practitioners can.&rdquo;
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div style={{ width: '38px', height: '38px', backgroundColor: '#5E3C8B', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: '#FAF8F5', fontWeight: 600 }}>OA</span>
              </div>
              <div>
                <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>Olawale Adeleke</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>MD · Adeleke Construction & Development</div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}