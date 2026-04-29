import type { Metadata } from 'next'
import Link from 'next/link'
import { MapPin, FileText, Building2, TrendingUp, Compass, BarChart3, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Services | Planning, EIA & Land Investment — Alalade Ayomide, MNITP',
  description: 'Professional town planning services: physical layout design, NESREA-compliant EIA studies, feasibility reports, development control advisory, and land investment strategy across Nigeria.',
  keywords: ['EIA consultant Nigeria', 'physical planning Nigeria', 'development control Oyo', 'land investment strategy Nigeria', 'feasibility study Nigeria', 'NESREA EIA'],
  openGraph: {
    title: 'Services | Planning, EIA & Land Investment — Alalade Ayomide',
    description: 'Physical planning, EIA studies, feasibility reports, development control, and land investment strategy across Nigeria.',
    type: 'website',
  },
  alternates: {
    canonical: '/services',
  },
}

const services = [
  {
    icon: <MapPin size={24} />,
    title: 'Physical Planning & Layout Design',
    description: 'Comprehensive physical development plans that balance land use efficiency with community needs. From master plans to subdivision layouts, every design is grounded in Nigerian planning law and best practice.',
    deliverables: ['Master Plan Document', 'Land Use Zoning Maps', 'Layout Design & Survey', 'Development Brief'],
    clients: 'State governments, local councils, private estate developers',
  },
  {
    icon: <FileText size={24} />,
    title: 'Environmental Impact Assessment (EIA)',
    description: 'NESREA-compliant EIA studies for industrial, residential, commercial, and infrastructure projects. We ensure your development meets all regulatory requirements while identifying genuine environmental risks early.',
    deliverables: ['EIA Report (Full & Abridged)', 'Environmental Management Plan', 'Baseline Survey', 'Stakeholder Consultation Report'],
    clients: 'Manufacturers, real estate developers, infrastructure agencies',
  },
  {
    icon: <BarChart3 size={24} />,
    title: 'Feasibility & Viability Studies',
    description: 'Rigorous analysis of proposed developments combining market research, planning assessments, and financial modelling to give investors and developers a clear picture before committing capital.',
    deliverables: ['Site Analysis Report', 'Market Demand Assessment', 'Financial Projections', 'Risk Matrix'],
    clients: 'Investors, banks, development finance institutions',
  },
  {
    icon: <Compass size={24} />,
    title: 'Development Control Advisory',
    description: 'Expert guidance through the planning approval process in Oyo, Abuja, and other states. We manage application submissions, respond to queries, and liaise with planning authorities on your behalf.',
    deliverables: ['Planning Application Package', 'Regulatory Compliance Review', 'Liaison with Planning Authority', 'Conditions Discharge'],
    clients: 'Property owners, architects, developers',
  },
  {
    icon: <Building2 size={24} />,
    title: 'Urban Renewal & Regeneration',
    description: 'Transforming underperforming urban areas into vibrant, economically productive districts. Specializing in brownfield redevelopment, slum upgrading, and city-centre revitalisation strategies.',
    deliverables: ['Regeneration Framework', 'Stakeholder Engagement Plan', 'Infrastructure Assessment', 'Phasing Strategy'],
    clients: 'State development authorities, federal agencies, PPP consortiums',
  },
  {
    icon: <TrendingUp size={24} />,
    title: 'Real Estate & Land Investment Strategy',
    description: 'Translating planning intelligence into investment returns. We identify high-potential land corridors, assess regulatory risk, and advise on land banking, subdivision, and exit strategies.',
    deliverables: ['Investment Memorandum', 'Land Value Analysis', 'Planning Risk Assessment', 'Portfolio Strategy'],
    clients: 'HNW individuals, family offices, real estate funds',
  },
]

export default function ServicesPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>What I Offer</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--text-primary)', maxWidth: '640px', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Expert Planning Services for Every Development Challenge
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '560px', lineHeight: 1.7 }}>
            From initial feasibility through to regulatory approval and investment strategy, each service is designed to move your project forward with confidence.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5px', backgroundColor: 'var(--border)' }}>
            {services.map((s, i) => (
              <div key={i} style={{ backgroundColor: 'var(--bg-card)', padding: '3rem' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '3rem', alignItems: 'start' }}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.25rem' }}>
                      <div style={{ width: '52px', height: '52px', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-green)', flexShrink: 0 }}>
                        {s.icon}
                      </div>
                      <div style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                        Service {String(i + 1).padStart(2, '0')}
                      </div>
                    </div>
                    <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '1rem', lineHeight: 1.2 }}>
                      {s.title}
                    </h2>
                    <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7 }}>
                      {s.description}
                    </p>
                  </div>
                  <div>
                    <div style={{ marginBottom: '1.5rem' }}>
                      <div className="section-label" style={{ marginBottom: '0.75rem' }}>Deliverables</div>
                      {s.deliverables.map((d, j) => (
                        <div key={j} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem', fontSize: '0.85rem', color: 'var(--text-secondary)' }}>
                          <div style={{ width: '4px', height: '4px', backgroundColor: 'var(--accent-green)', borderRadius: '50%' }} />
                          {d}
                        </div>
                      ))}
                    </div>
                    <div>
                      <div className="section-label" style={{ marginBottom: '0.5rem' }}>Ideal For</div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', fontStyle: 'italic' }}>{s.clients}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '4rem', textAlign: 'center' }}>
            <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '1.5rem' }}>
              Not sure which service fits your needs?
            </p>
            <Link href="/contact" style={{
              backgroundColor: 'var(--accent-green)',
              color: '#FAF8F5',
              padding: '0.875rem 2rem',
              fontFamily: 'var(--font-body)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.08em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.5rem',
            }}>
              Get a Free Consultation <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
