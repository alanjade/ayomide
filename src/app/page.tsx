import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, MapPin, FileText, Building2, TrendingUp, ChevronRight, Quote, ExternalLink } from 'lucide-react'
import { getProjects, getTestimonials } from '@/lib/queries'

export const metadata: Metadata = {
  title: 'Alalade Ayomide | Town Planner & Urban Strategist — Nigeria',
  description: 'Registered Nigerian town planner specialising in urban master plans, EIA studies, land investment strategy, and sustainable city design. MNITP · TOPREC.',
  keywords: ['town planner Nigeria', 'EIA consultant Lagos', 'urban planning Nigeria', 'master plan', 'land investment Nigeria', 'NITP'],
  openGraph: {
    title: 'Alalade Ayomide — Town Planner & Urban Strategist',
    description: 'Planning sustainable cities. Designing profitable developments.',
    type: 'website',
  },
}

const services = [
  { icon: <MapPin size={20} />, title: 'Urban & Regional Planning', desc: 'Master plans and spatial frameworks for sustainable growth.' },
  { icon: <FileText size={20} />, title: 'Environmental Impact Assessment', desc: 'NESREA-compliant EIA studies meeting all federal and state requirements.' },
  { icon: <Building2 size={20} />, title: 'Development Strategy', desc: 'Site analysis, feasibility, and development control advisory.' },
  { icon: <TrendingUp size={20} />, title: 'Land Investment Advisory', desc: 'Strategic guidance for real estate and land portfolio growth.' },
]

const affiliations = [
  { short: 'NITP', full: 'Nigerian Institute of Town Planners', color: '#2D5016' },
  { short: 'TOPREC', full: 'Town Planners Registration Council', color: '#8B5E3C' },
  { short: 'NESREA', full: 'EIA Accredited Practitioner', color: '#4A7C28' },
  { short: 'ESRI', full: 'Certified GIS Professional', color: '#3C6B8B' },
]

export default async function HomePage() {
  const [projects, testimonials] = await Promise.all([
    getProjects(),
    getTestimonials(),
  ])

  const featuredProjects = projects.slice(0, 3)
  const featuredTestimonials = testimonials.slice(0, 3)

  return (
    <div>
      {/* ── HERO ─────────────────────────────────── */}
      <section style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', backgroundColor: 'var(--bg-primary)', paddingTop: '72px', position: 'relative', overflow: 'hidden' }}>
        <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
        <div style={{ position: 'absolute', top: '-200px', right: '-200px', width: '600px', height: '600px', borderRadius: '50%', border: '1px solid var(--border)', opacity: 0.5 }} />
        <div style={{ position: 'absolute', top: '-100px', right: '-100px', width: '400px', height: '400px', borderRadius: '50%', border: '1px solid var(--accent-sand)', opacity: 0.3 }} />

        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '4rem 2rem', position: 'relative', zIndex: 1, width: '100%' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>Urban Planner · EIA Specialist · Real Estate Strategist</div>
              <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.8rem, 5.5vw, 4.8rem)', fontWeight: 400, lineHeight: 1.1, color: 'var(--text-primary)', marginBottom: '1.5rem' }}>
                Planning <em>Sustainable</em> Cities.<br />
                Designing <span style={{ color: 'var(--accent-green)' }}>Profitable</span> Developments.
              </h1>
              <p style={{ fontSize: '1.05rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2.5rem', maxWidth: '520px' }}>
                With over a decade of experience in urban planning and environmental consulting,
                I help governments, developers, and investors create spaces that work — for people and for returns.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '3.5rem' }}>
                <Link href="/projects" style={{ backgroundColor: 'var(--accent-green)', color: '#FAF8F5', padding: '0.875rem 2rem', fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Projects <ArrowRight size={15} />
                </Link>
                <Link href="/contact" style={{ border: '1.5px solid var(--text-primary)', color: 'var(--text-primary)', padding: '0.875rem 2rem', fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Book Consultation
                </Link>
              </div>
            </div>

            {/* ── ABOUT SNAPSHOT ── */}
            <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', padding: '2.5rem', maxWidth: '420px' }}>
              <div style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start', marginBottom: '1.5rem' }}>
                <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--accent-green)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 600, color: '#FAF8F5' }}>AA</span>
                </div>
                <div>
                  <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.1, margin: 0 }}>Alalade Ayomide</h2>
                  <div style={{ fontSize: '0.72rem', color: 'var(--accent-green)', letterSpacing: '0.1em', textTransform: 'uppercase', marginTop: '4px' }}>MNITP · Registered Town Planner</div>
                </div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem', borderBottom: '1px solid var(--border-light)', paddingBottom: '1.5rem' }}>
                Registered town planner with 12+ years across urban master plans, EIA consultancy,
                and land investment strategy. Founder of reu.ng, Nigeria&apos;s fractional land investment platform.
              </p>
              <div className="section-label" style={{ marginBottom: '0.875rem' }}>Affiliations & Credentials</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', marginBottom: '1.75rem' }}>
                {affiliations.map((a) => (
                  <div key={a.short} style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <div style={{ minWidth: '60px', backgroundColor: a.color, padding: '3px 0', textAlign: 'center', fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.08em', color: '#FAF8F5' }}>{a.short}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{a.full}</div>
                  </div>
                ))}
              </div>
              <Link href="/about" style={{ display: 'flex', alignItems: 'center', gap: '0.35rem', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent-green)', textDecoration: 'none' }}>
                Full Profile <ChevronRight size={14} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ── TRUST SIGNALS BAR ──────────────────── */}
      <div style={{ backgroundColor: 'var(--bg-subtle)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', padding: '1.25rem 2rem', overflowX: 'auto' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap' }}>
          {[
            { label: 'Member', body: 'Nigerian Institute of Town Planners (NITP)' },
            { label: 'Registered', body: 'TOPREC — Town Planners Reg. Council' },
            { label: 'Accredited', body: 'NESREA EIA Practitioner' },
            { label: 'Certified', body: 'ESRI GIS Professional' },
            { label: 'Founded', body: 'reu.ng — Fractional Land Investment' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', textAlign: 'center', flexShrink: 0 }}>
              <span style={{ fontSize: '0.62rem', letterSpacing: '0.12em', fontWeight: 700, textTransform: 'uppercase', color: 'var(--accent-green)' }}>{item.label}</span>
              <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', whiteSpace: 'nowrap' }}>{item.body}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── SERVICES ────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>What I Do</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: 'var(--text-primary)', margin: 0 }}>Core Services</h2>
            </div>
            <Link href="/services" style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent-green)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              All Services <ChevronRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5px', backgroundColor: 'var(--border)' }}>
            {services.map((s, i) => (
              <div key={i} className="card" style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ width: '48px', height: '48px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)', marginBottom: '1.5rem' }}>{s.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{s.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.6 }}>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ───────────────────── */}
      <section style={{ padding: '6rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>Portfolio</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: 'var(--text-primary)', margin: 0 }}>Featured Projects</h2>
            </div>
            <Link href="/projects" style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent-green)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              View All <ChevronRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '1.5rem' }}>
            {featuredProjects.map((p) => (
              <Link key={p.slug} href={`/projects/${p.slug}`} style={{ textDecoration: 'none' }}>
                <div className="card" style={{ overflow: 'hidden', height: '100%' }}>
                  <div style={{ height: '180px', backgroundColor: p.color, position: 'relative', overflow: 'hidden' }}>
                    <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
                    <div style={{ position: 'absolute', top: '1rem', right: '1rem', backgroundColor: 'rgba(255,255,255,0.15)', backdropFilter: 'blur(8px)', padding: '4px 10px', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: '#fff' }}>{p.category}</div>
                  </div>
                  <div style={{ padding: '1.5rem' }}>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>{p.year}</div>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{p.title}</h3>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '0.75rem' }}>
                      <MapPin size={12} /> {p.location}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                      <ArrowRight size={12} /> {p.impact}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ────────────────────────── */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', padding: '6rem 2rem', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: '3rem', flexWrap: 'wrap', gap: '1rem' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>What Clients Say</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: 'var(--text-primary)', margin: 0 }}>Testimonials</h2>
            </div>
            <Link href="/testimonials" style={{ fontSize: '0.78rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent-green)', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
              All Reviews <ChevronRight size={14} />
            </Link>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {featuredTestimonials.map((t, i) => (
              <div key={i} className="card" style={{ padding: '2rem', backgroundColor: 'var(--bg-card)', display: 'flex', flexDirection: 'column' }}>
                <Quote size={24} color="var(--accent-green)" style={{ marginBottom: '1rem', opacity: 0.6 }} />
                <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.75, fontStyle: 'italic', flex: 1, marginBottom: '1.5rem' }}>&ldquo;{t.quote}&rdquo;</p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                  <div style={{ width: '38px', height: '38px', backgroundColor: t.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '0.9rem', color: '#FAF8F5', fontWeight: 600 }}>{t.initials}</span>
                  </div>
                  <div>
                    <div style={{ fontSize: '0.85rem', fontWeight: 600, color: 'var(--text-primary)' }}>{t.name}</div>
                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{t.title} · {t.organization}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── VENTURES TEASER ─────────────────────── */}
      <section style={{ backgroundColor: 'var(--bg-primary)', padding: '6rem 2rem', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.75rem' }}>Planning Meets Investment</div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                Democratising Land Ownership in Nigeria
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '2rem' }}>
                reu.ng is a fractional land investment platform offering ownership of verified land across key Nigerian cities — from as little as ₦5,000, with projected annual appreciation of 15–30% and a secondary market so you&apos;re never locked in.
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <Link href="/ventures" style={{ backgroundColor: 'var(--accent-green)', color: '#FAF8F5', padding: '0.875rem 2rem', fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Explore Ventures <ArrowRight size={15} />
                </Link>
                <a href="https://reu.ng" target="_blank" rel="noopener noreferrer" style={{ border: '1.5px solid var(--border)', color: 'var(--text-secondary)', padding: '0.875rem 2rem', fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Visit reu.ng <ExternalLink size={14} />
                </a>
              </div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              {[
                { value: '₦5K', label: 'Minimum Investment' },
                { value: '15–30%', label: 'Projected Annual ROI' },
                { value: '100%', label: 'Title Verified' },
                { value: '0', label: 'Min. Holding Period' },
              ].map((item, i) => (
                <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--font-display)', fontSize: '2rem', fontWeight: 600, color: 'var(--accent-green)' }}>{item.value}</div>
                  <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginTop: '0.25rem' }}>{item.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA ─────────────────────────────────── */}
      <section style={{ backgroundColor: 'var(--accent-green)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>Ready to Build?</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, color: '#FAF8F5', marginBottom: '2rem', lineHeight: 1.2 }}>
            Let&apos;s Plan Your Next<br />Development Project
          </h2>
          <Link href="/contact" style={{ backgroundColor: '#FAF8F5', color: 'var(--accent-green)', padding: '1rem 2.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            Schedule a Meeting <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  )
}