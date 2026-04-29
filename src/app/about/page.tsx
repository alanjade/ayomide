import type { Metadata } from 'next'
import Link from 'next/link'
import { Award, BookOpen, Users, Calendar, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'About Alalade Ayomide | Registered Town Planner MNITP — Ibadan, Nigeria',
  description: 'Registered Nigerian town planner with 12+ years delivering urban master plans, EIA studies, and land investment strategy. MNITP · TOPREC-licensed · Based in Ibadan, Oyo State.',
  keywords: ['Alalade Ayomide', 'Nigerian town planner', 'MNITP', 'urban planner Oyo', 'EIA consultant Nigeria', 'TOPREC', 'town planner Ibadan'],
  openGraph: {
    title: 'About Alalade Ayomide | Registered Town Planner MNITP',
    description: 'Registered Nigerian town planner with 12+ years delivering urban master plans, EIA studies, and land investment strategy.',
    type: 'profile',
  },
  alternates: {
    canonical: '/about',
  },
}

const timeline = [
  { year: '2024', role: 'Principal Consultant', org: 'Ayomide Alalade & Associates', desc: 'Leading multidisciplinary planning and EIA consultancy with projects across 8 Nigerian states.' },
  { year: '2022', role: 'Founder', org: 'reu.ng', desc: 'Launched Nigeria\'s first planning-backed fractional land investment platform, democratising access to verified real estate.' },
  { year: '2021', role: 'Senior Urban Planner', org: 'Federal Ministry of Works & Housing', desc: 'Managed national spatial development frameworks and urban renewal programs under the SURP initiative.' },
  { year: '2018', role: 'Urban Planner', org: 'Oyo State Physical Planning Authority', desc: 'Development control, layout approvals, and zoning advisory for Oyo mainland and island projects.' },
  { year: '2015', role: 'Planning Consultant', org: 'Tayo Consulting Ltd', desc: 'EIA studies and site analysis for private developers in Ogun, Oyo, and Oyo states.' },
  { year: '2013', role: 'Graduate Planner', org: 'Rivers State Urban Development Board', desc: 'Foundational practice in physical planning, land tenure, and community engagement in Port Harcourt.' },
]

const affiliations = [
  { short: 'NITP', full: 'Nigerian Institute of Town Planners', since: 'Member since 2014', color: '#2D5016', detail: 'The professional body of registered town planners in Nigeria. Full member in good standing.' },
  { short: 'TOPREC', full: 'Town Planners Registration Council of Nigeria', since: 'Registered 2014', color: '#8B5E3C', detail: 'Statutory body overseeing the registration and licensing of practicing town planners in Nigeria.' },
  { short: 'NESREA', full: 'EIA Accredited Practitioner', since: 'Accredited 2016', color: '#4A7C28', detail: 'Accredited to conduct and sign off Environmental Impact Assessment studies per NESREA guidelines.' },
  { short: 'ESRI', full: 'Certified GIS Professional', since: 'Certified 2019', color: '#3C6B8B', detail: 'Certified in ArcGIS spatial analysis, land use mapping, and urban data visualisation tools.' },
]

const values = [
  { title: 'Rigour Over Shortcuts', desc: 'Every study, plan, or strategy is built on thorough analysis — not templates or assumptions. Regulatory corners are never cut.' },
  { title: 'Planning Serves People', desc: 'Good planning creates places where people thrive. Return on investment and community benefit are not competing goals.' },
  { title: 'Transparency in Practice', desc: 'Clients receive plain-language explanations of complex regulatory processes. No mystification, no unnecessary gatekeeping.' },
  { title: 'Innovation-Backed Expertise', desc: 'Traditional planning knowledge plus modern tools — GIS, PropTech, data analytics — produce sharper, more actionable recommendations.' },
]

export default function AboutPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Header */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>The Planner</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--text-primary)', maxWidth: '700px', lineHeight: 1.1 }}>
            Bridging Urban Vision with Investable Outcomes
          </h1>
        </div>
      </section>

      {/* Bio + Profile */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '5rem', alignItems: 'start' }}>
            {/* Left column */}
            <div>
              {/* Profile image */}
              <div style={{ width: '100%', aspectRatio: '4/3', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', marginBottom: '2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.6 }} />
                <div style={{ position: 'relative', textAlign: 'center' }}>
                  <div style={{ width: '80px', height: '80px', backgroundColor: 'var(--accent-green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 0.75rem' }}>
                    <span style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: '#FAF8F5', fontWeight: 600 }}>AA</span>
                  </div>
                  <div style={{ fontSize: '0.7rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>Profile Photo</div>
                  <div style={{ fontSize: '0.62rem', color: 'var(--text-muted)', marginTop: '3px', opacity: 0.7 }}>Replace with /public/ayomide.jpg</div>
                </div>
              </div>

              {/* Quick stats */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '2rem' }}>
                {[
                  { icon: <Award size={16} />, label: 'MNITP Certified', sub: 'Since 2014' },
                  { icon: <BookOpen size={16} />, label: 'B.Sc. Urban Planning', sub: 'OAU' },
                  { icon: <Users size={16} />, label: 'Gov. & Private Clients', sub: 'Nationwide' },
                  { icon: <Calendar size={16} />, label: '12+ Years Active', sub: 'Practice' },
                ].map((item, i) => (
                  <div key={i} style={{ padding: '1.25rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', display: 'flex', gap: '0.75rem', alignItems: 'flex-start' }}>
                    <div style={{ color: 'var(--accent-green)', marginTop: '2px', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)' }}>{item.label}</div>
                      <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '2px' }}>{item.sub}</div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Affiliations trust signals */}
              <div style={{ padding: '1.75rem', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)' }}>
                <div className="section-label" style={{ marginBottom: '1.25rem' }}>Credentials & Affiliations</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                  {affiliations.map((a) => (
                    <div key={a.short} style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                      <div style={{ minWidth: '68px', backgroundColor: a.color, padding: '5px 0', textAlign: 'center', fontSize: '0.62rem', fontWeight: 800, letterSpacing: '0.06em', color: '#FAF8F5', flexShrink: 0 }}>
                        {a.short}
                      </div>
                      <div>
                        <div style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--text-primary)', lineHeight: 1.2 }}>{a.full}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--accent-green)', marginTop: '2px' }}>{a.since}</div>
                        <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '3px', lineHeight: 1.5 }}>{a.detail}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right column */}
            <div>
              <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                Alalade Ayomide is a registered town planner with over 12 years of experience delivering spatial planning solutions, environmental impact assessments, and land investment strategies across Nigeria.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                His career spans government service at state and federal levels, private sector consultancy, and investment platform innovation. He has worked with Oyo State Physical Planning Authority, the Federal Ministry of Works and Housing, and dozens of private developers and investors across Nigeria&apos;s south and north.
              </p>
              <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '3rem' }}>
                In 2022, he founded <strong style={{ color: 'var(--text-primary)' }}>reu.ng</strong>, a fractional land investment platform that applies his planning expertise to democratise access to verified, appreciation-potential land for ordinary Nigerians. He holds a strong belief that sustainable cities and profitable developments are not opposing goals — they are the same goal, pursued with different tools.
              </p>

              {/* Values */}
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>Practice Philosophy</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', marginBottom: '3rem' }}>
                {values.map((v, i) => (
                  <div key={i} style={{ padding: '1.5rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
                    <div style={{ width: '24px', height: '2px', backgroundColor: 'var(--accent-green)', marginBottom: '0.75rem' }} />
                    <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{v.title}</div>
                    <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{v.desc}</div>
                  </div>
                ))}
              </div>

              {/* Career Timeline */}
              <div className="section-label" style={{ marginBottom: '1.5rem' }}>Career Timeline</div>
              <div style={{ position: 'relative' }}>
                <div style={{ position: 'absolute', left: '44px', top: 0, bottom: 0, width: '1px', backgroundColor: 'var(--border)' }} />
                {timeline.map((t, i) => (
                  <div key={i} style={{ display: 'flex', gap: '1.25rem', marginBottom: '2rem', position: 'relative' }}>
                    <div style={{ minWidth: '60px', fontSize: '0.72rem', fontWeight: 700, color: 'var(--accent-green)', paddingTop: '2px', textAlign: 'right', fontFamily: 'var(--font-body)' }}>{t.year}</div>
                    <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: 'var(--accent-green)', border: '2px solid var(--bg-primary)', marginTop: '3px', flexShrink: 0, zIndex: 1, position: 'relative' }} />
                    <div>
                      <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '2px' }}>{t.role}</div>
                      <div style={{ fontSize: '0.78rem', color: 'var(--accent-earth)', marginBottom: '4px', fontStyle: 'italic' }}>{t.org}</div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{t.desc}</div>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: '2rem', display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                <Link href="/projects" style={{ backgroundColor: 'var(--accent-green)', color: '#FAF8F5', padding: '0.75rem 1.75rem', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  View Projects <ArrowRight size={14} />
                </Link>
                <Link href="/contact" style={{ border: '1.5px solid var(--border)', color: 'var(--text-secondary)', padding: '0.75rem 1.75rem', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Schedule Meeting
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
