import type { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight, ExternalLink, Check, TrendingUp, Shield, Users, Layers, AlertTriangle } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Ventures | reu.ng Fractional Land Investment — Alalade Ayomide, MNITP',
  description: 'reu.ng — Nigeria\'s planning-backed fractional land investment platform. Own verified land from ₦5,000 with 15–30% projected annual appreciation and a built-in secondary market.',
  keywords: ['reu.ng', 'fractional land investment Nigeria', 'buy land from 5000 naira', 'Nigeria real estate investment platform', 'land investment Ibadan', 'verified land titles Nigeria'],
  openGraph: {
    title: 'reu.ng | Fractional Land Investment from ₦5,000 — Alalade Ayomide',
    description: 'Own verified Nigerian land from ₦5,000. 15–30% projected annual appreciation, secondary market liquidity, FIRS-compliant.',
    type: 'website',
  },
  alternates: {
    canonical: '/ventures',
  },
}

const benefits = [
  {
    icon: <Shield size={20} />,
    title: 'Verified Titles',
    desc: 'Every plot carries verified titles and documents, reviewed by registered Nigerian solicitors before listing. No title surprises.',
  },
  {
    icon: <Layers size={20} />,
    title: 'Fractional Ownership from ₦5,000',
    desc: 'Own a percentage of prime land from as little as ₦5,000. Each listing shows the price per unit — invest according to your budget.',
  },
  {
    icon: <TrendingUp size={20} />,
    title: '15–30% Projected Annual Appreciation',
    desc: 'Curated plots in major growth corridor cities in Nigeria, driven by urbanisation, infrastructure investment, and rising demand.',
  },
  {
    icon: <Users size={20} />,
    title: 'Secondary Market — No Lock-In',
    desc: 'List and sell your units to other platform investors any time. No minimum holding period. Ownership is fully transferable.',
  },
]

const howItWorks = [
  {
    step: '01',
    title: 'Choose a Verified Property',
    desc: 'Browse legally owned land plots in major growth corridors. Every listing includes full title documentation and an independent survey plan.',
  },
  {
    step: '02',
    title: 'Buy Fractional Units',
    desc: 'Select how many units to purchase. Pay securely via the in-app wallet — in full or via flexible instalment plans.',
  },
  {
    step: '03',
    title: 'Earn & Exit on Your Terms',
    desc: 'Track appreciation in your live dashboard. Sell units on the secondary market any time, earn rental income where applicable, or hold for long-term growth.',
  },
]

const trustPoints = [
  { label: 'Nigerian Property Law', detail: 'Fully compliant with the Land Use Act and state land regulations.' },
  { label: 'Independent Legal Audits', detail: 'All titles reviewed by registered Nigerian solicitors before listing.' },
  { label: 'FIRS Compliance', detail: 'Tax obligations on rental income and capital gains properly disclosed.' },
  { label: 'Secure Infrastructure', detail: '256-bit SSL, PCI-DSS compliant payment processing, SOC-2 aligned data handling.' },
]

export default function VenturesPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      {/* Hero */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Planning Meets Investment</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--text-primary)', maxWidth: '700px', lineHeight: 1.1, marginBottom: '1.5rem' }}>
            Where Urban Planning Expertise Meets Investment Innovation
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '580px', lineHeight: 1.75 }}>
            Beyond consulting, I build platforms that apply planning intelligence to democratise land investment for all Nigerians — not just the elite.
          </p>
        </div>
      </section>

      {/* reu.ng Feature */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '5rem', alignItems: 'start' }}>
            <div>
              {/* Platform badge */}
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', backgroundColor: 'var(--accent-green)', padding: '6px 14px', marginBottom: '2rem' }}>
                <div style={{ width: '8px', height: '8px', backgroundColor: '#FAF8F5', borderRadius: '50%' }} />
                <span style={{ fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#FAF8F5' }}>reu.ng Platform</span>
              </div>

              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.15, marginBottom: '1.25rem' }}>
                Invest, Own & Trade Land.<br />From <span style={{ color: 'var(--accent-green)' }}>₦5,000</span>.
              </h2>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.75, marginBottom: '1.5rem' }}>
                reu.ng is a fractional land investment platform offering ownership across key cities in Nigeria — with a minimum investment of ₦5,000 and projected annual appreciation of 15–30%.
              </p>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: '2rem' }}>
                Every property listed is legally verified with full title documentation and an independent survey plan. The platform is built on Nigerian property law, independently audited, and FIRS-compliant — so your investment is always on solid legal ground.
              </p>

              <div style={{ marginBottom: '2rem' }}>
                {[
                  'Fractional ownership from ₦5,000',
                  'Verified titles & independent legal audit',
                  'Live dashboard to track holdings and ROI',
                  'Secondary market — sell units any time',
                  'Digital ownership certificates issued instantly',
                  'No minimum holding period',
                  'FIRS-compliant, Nigerian property law aligned',
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem', fontSize: '0.875rem', color: 'var(--text-secondary)' }}>
                    <Check size={15} color="var(--accent-green)" /> {item}
                  </div>
                ))}
              </div>

              {/* Risk disclaimer */}
              <div style={{ display: 'flex', gap: '0.75rem', padding: '1rem', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', marginBottom: '2rem' }}>
                <AlertTriangle size={16} color="var(--accent-sand)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <p style={{ fontSize: '0.78rem', color: 'var(--text-muted)', lineHeight: 1.6, margin: 0 }}>
                  Projected returns are based on historical market data and are not guaranteed. Land investment involves risk. Read the investment disclosure before committing funds.
                </p>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                <a href="https://reu.ng/register" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'var(--accent-green)', color: '#FAF8F5', padding: '0.875rem 2rem', fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Start Investing <ExternalLink size={14} />
                </a>
                <a href="https://reu.ng/lands" target="_blank" rel="noopener noreferrer" style={{ border: '1.5px solid var(--border)', color: 'var(--text-secondary)', padding: '0.875rem 2rem', fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
                  Browse Properties <ArrowRight size={14} />
                </a>
              </div>
            </div>

            <div>
              {/* Live stats from reu.ng */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', backgroundColor: 'var(--border)', marginBottom: '1.5rem' }}>
                {[
                  { value: '₦5,000', label: 'Min. Investment' },
                  { value: '15–30%', label: 'Projected Annual ROI' },
                  { value: 'Multiple', label: 'Cities Covered' },
                  { value: '100%', label: 'Title Verified' },
                ].map((s, i) => (
                  <div key={i} style={{ backgroundColor: 'var(--bg-card)', padding: '2rem', textAlign: 'center' }}>
                    <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 600, color: 'var(--accent-green)', lineHeight: 1 }}>{s.value}</div>
                    <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.35rem' }}>{s.label}</div>
                  </div>
                ))}
              </div>

              {/* Contact details from reu.ng */}
              <div style={{ padding: '1.75rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)', marginBottom: '1.5rem' }}>
                <div className="section-label" style={{ marginBottom: '1rem' }}>Contact reu.ng</div>
                {[
                  { label: 'Email', value: 'hello@reu.ng', href: 'mailto:hello@reu.ng' },
                  { label: 'WhatsApp', value: '+234 808 132 5657', href: 'https://wa.me/2348081325657' },
                  { label: 'Location', value: 'Ibadan, Oyo State, Nigeria', href: null },
                ].map((c, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', padding: '0.6rem 0', borderBottom: '1px solid var(--border-light)', fontSize: '0.85rem' }}>
                    <span style={{ color: 'var(--text-muted)', fontWeight: 500 }}>{c.label}</span>
                    {c.href ? (
                      <a href={c.href} target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-green)', textDecoration: 'none' }}>{c.value}</a>
                    ) : (
                      <span style={{ color: 'var(--text-primary)' }}>{c.value}</span>
                    )}
                  </div>
                ))}
              </div>

              {/* Video placeholder */}
              <div style={{ backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', aspectRatio: '16/9', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
                <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.4 }} />
                <div style={{ position: 'relative', textAlign: 'center' }}>
                  <div style={{ width: '56px', height: '56px', backgroundColor: 'var(--accent-green)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1rem' }}>
                    <div style={{ width: 0, height: 0, borderTop: '10px solid transparent', borderBottom: '10px solid transparent', borderLeft: '18px solid #FAF8F5', marginLeft: '4px' }} />
                  </div>
                  <div style={{ fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-secondary)' }}>Platform Overview Video</div>
                  <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)', marginTop: '4px' }}>Embed YouTube / Vimeo URL here</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Process</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: 'var(--text-primary)', margin: 0 }}>
              Invest in Land in 3 Simple Steps
            </h2>
            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', marginTop: '0.75rem' }}>No complex paperwork. No large capital required.</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5px', backgroundColor: 'var(--border)' }}>
            {howItWorks.map((step) => (
              <div key={step.step} style={{ backgroundColor: 'var(--bg-card)', padding: '2.5rem 2rem' }}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '3rem', fontWeight: 600, color: 'var(--border)', lineHeight: 1, marginBottom: '1rem' }}>{step.step}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{step.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-primary)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Why reu.ng</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: 'var(--text-primary)' }}>
              Simple. Secure. Transparent. Profitable.
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '1.5rem' }}>
            {benefits.map((b, i) => (
              <div key={i} className="card" style={{ padding: '2rem' }}>
                <div style={{ color: 'var(--accent-green)', marginBottom: '1rem' }}>{b.icon}</div>
                <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.75rem' }}>{b.title}</h3>
                <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Regulatory trust */}
      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Compliance</div>
            <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 400, color: 'var(--text-primary)' }}>
              Built on a Foundation of Trust
            </h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '1.5rem' }}>
            {trustPoints.map((t, i) => (
              <div key={i} style={{ padding: '1.75rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
                <div style={{ width: '28px', height: '2px', backgroundColor: 'var(--accent-green)', marginBottom: '1rem' }} />
                <div style={{ fontSize: '0.875rem', fontWeight: 600, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{t.label}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.65 }}>{t.detail}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ backgroundColor: 'var(--accent-green)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <div style={{ fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.6)', marginBottom: '1.5rem' }}>Land Investment, Reimagined</div>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 400, color: '#FAF8F5', marginBottom: '2rem', lineHeight: 1.2 }}>
            Join the Future of<br />Nigerian Land Investment
          </h2>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="https://reu.ng/register" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: '#FAF8F5', color: 'var(--accent-green)', padding: '1rem 2.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
              Create Free Account <ExternalLink size={15} />
            </a>
            <a href="https://reu.ng/lands" target="_blank" rel="noopener noreferrer" style={{ backgroundColor: 'transparent', color: '#FAF8F5', padding: '1rem 2.5rem', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', border: '1.5px solid rgba(255,255,255,0.5)' }}>
              Browse Properties <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}