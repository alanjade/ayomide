import { Metadata} from 'next'
import { Calendar, Tag, ArrowRight } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Planning Insights | Urban Development & Land Investment — Alalade Ayomide',
  description: 'Expert commentary on Nigerian urban development, EIA requirements, zoning law, peri-urban land investment, and PropTech. Written by a registered MNITP town planner.',
  keywords: ['Nigeria urban planning insights', 'land investment Nigeria', 'EIA requirements Nigeria', 'zoning law Nigeria', 'peri-urban investment'],
  openGraph: {
    title: 'Planning Insights | Urban Development & Land Investment',
    description: 'Expert commentary on Nigerian urban development, EIA requirements, zoning, and land investment by a registered MNITP planner.',
    type: 'website',
  },
  alternates: {
    canonical: '/insights',
  },
}

const posts = [
  {
    title: 'Why Peri-Urban Zones Are Nigeria\'s Biggest Investment Opportunity in 2024',
    excerpt: 'As Oyo and Abuja expand outward, the land corridors between established cities and new growth poles are quietly becoming the most valuable land in Nigeria. Here\'s how to read the signals.',
    date: 'March 15, 2024',
    tags: ['Investment', 'Land Market'],
    readTime: '6 min read',
    color: '#2D5016',
  },
  {
    title: 'Understanding EIA Requirements for Residential Estate Developments',
    excerpt: 'Many developers are caught off-guard by NESREA requirements. This guide clarifies exactly when you need a full EIA versus an Environmental Audit — and what each process involves.',
    date: 'February 28, 2024',
    tags: ['EIA', 'Regulatory'],
    readTime: '8 min read',
    color: '#8B5E3C',
  },
  {
    title: 'The Case for Fractional Land Ownership in Emerging Markets',
    excerpt: 'Most Nigerians are priced out of prime real estate. Fractional ownership models — like those pioneered by reu.ng — are changing that. A planning perspective on the opportunity.',
    date: 'January 20, 2024',
    tags: ['PropTech', 'Investment'],
    readTime: '5 min read',
    color: '#4A7C28',
  },
  {
    title: 'Mixed-Use Zoning: What Planners Wish Developers Understood',
    excerpt: 'Mixed-use developments are often proposed but rarely executed well in Nigeria. The gap usually lies in zoning knowledge. A frank breakdown of what\'s allowed, what isn\'t, and why.',
    date: 'December 10, 2023',
    tags: ['Planning', 'Zoning'],
    readTime: '7 min read',
    color: '#3C6B8B',
  },
]

export default function InsightsPage() {
  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Thought Leadership</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--text-primary)', maxWidth: '640px', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Planning Intelligence for Developers & Investors
          </h1>
          <p style={{ fontSize: '1rem', color: 'var(--text-muted)', maxWidth: '540px', lineHeight: 1.7 }}>
            Practical insights on urban development trends, land investment, regulatory frameworks, and the future of Nigerian cities.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Featured post */}
          <div className="card" style={{ marginBottom: '3rem', overflow: 'hidden', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))' }}>
            <div style={{ height: '280px', backgroundColor: posts[0].color, position: 'relative', overflow: 'hidden', minHeight: '220px' }}>
              <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
              <div style={{ position: 'absolute', top: '1.5rem', left: '1.5rem' }}>
                <span style={{ backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)', padding: '4px 10px', fontSize: '0.65rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)' }}>
                  Featured
                </span>
              </div>
            </div>
            <div style={{ padding: '2.5rem' }}>
              <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
                {posts[0].tags.map(tag => (
                  <span key={tag} style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-green)', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', padding: '3px 8px' }}>
                    <Tag size={10} /> {tag}
                  </span>
                ))}
              </div>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.2, marginBottom: '1rem' }}>
                {posts[0].title}
              </h2>
              <p style={{ fontSize: '0.9rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>
                {posts[0].excerpt}
              </p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '1rem', fontSize: '0.78rem', color: 'var(--text-muted)' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}><Calendar size={12} /> {posts[0].date}</span>
                  <span>{posts[0].readTime}</span>
                </div>
                <button style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.78rem', fontWeight: 600, color: 'var(--accent-green)', background: 'none', border: 'none', cursor: 'pointer', letterSpacing: '0.05em', textTransform: 'uppercase' }}>
                  Read More <ArrowRight size={14} />
                </button>
              </div>
            </div>
          </div>

          {/* Grid posts */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '1.5rem' }}>
            {posts.slice(1).map((p, i) => (
              <div key={i} className="card" style={{ overflow: 'hidden' }}>
                <div style={{ height: '140px', backgroundColor: p.color, position: 'relative', overflow: 'hidden' }}>
                  <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
                </div>
                <div style={{ padding: '1.5rem' }}>
                  <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem', flexWrap: 'wrap' }}>
                    {p.tags.map(tag => (
                      <span key={tag} style={{ fontSize: '0.65rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-green)', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', padding: '2px 6px' }}>
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--text-primary)', lineHeight: 1.3, marginBottom: '0.75rem' }}>
                    {p.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '1rem' }}>
                    {p.excerpt}
                  </p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '0.75rem' }}>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.date}</span>
                    <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{p.readTime}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
