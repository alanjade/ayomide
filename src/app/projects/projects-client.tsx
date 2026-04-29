'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { MapPin, Calendar, ArrowRight } from 'lucide-react'
import { getProjects } from '@/lib/queries'
import type { Project } from '@/lib/supabase'

const categories = ['All', 'Residential Layout', 'EIA', 'Tourism Planning', 'Urban Development']

export function ProjectsClient() {
  const [projects, setProjects] = useState<Project[]>([])
  const [loading, setLoading] = useState(true)
  const [active, setActive] = useState('All')

  useEffect(() => {
    getProjects().then((data) => {
      setProjects(data)
      setLoading(false)
    })
  }, [])

  const filtered = active === 'All' ? projects : projects.filter((p) => p.category === active)

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Portfolio</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--text-primary)', maxWidth: '640px', lineHeight: 1.1, marginBottom: '1rem' }}>
            Projects That Shape Places and Returns
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '540px', lineHeight: 1.7 }}>
            Case studies across urban development, environmental impact assessment, residential layouts, and tourism planning — from Oyo to Port Harcourt.
          </p>
        </div>
      </section>

      <section style={{ padding: '4rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '3rem', borderBottom: '1px solid var(--border)', paddingBottom: '1.5rem' }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: '0.5rem 1.25rem', fontSize: '0.73rem', fontWeight: 500, letterSpacing: '0.06em',
                  textTransform: 'uppercase', fontFamily: 'var(--font-body)', cursor: 'pointer', transition: 'all 0.15s',
                  backgroundColor: active === cat ? 'var(--accent-green)' : 'var(--bg-card)',
                  color: active === cat ? '#FAF8F5' : 'var(--text-secondary)',
                  border: active === cat ? '1px solid var(--accent-green)' : '1px solid var(--border)',
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {loading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="card" style={{ height: '340px', backgroundColor: 'var(--bg-subtle)', animation: 'pulse 1.5s ease-in-out infinite' }} />
              ))}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '1.5rem' }}>
              {filtered.map((p) => (
                <Link key={p.slug} href={`/projects/${p.slug}`} style={{ textDecoration: 'none', display: 'block' }}>
                  <div className="card" style={{ overflow: 'hidden', height: '100%' }}>
                    <div style={{ height: '200px', backgroundColor: p.color, position: 'relative', overflow: 'hidden' }}>
                      <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
                      <div style={{ position: 'absolute', inset: 0, background: `linear-gradient(150deg, ${p.color} 0%, rgba(0,0,0,0.25) 100%)` }} />
                      <div style={{ position: 'absolute', top: '1rem', left: '1rem', right: '1rem', display: 'flex', justifyContent: 'space-between' }}>
                        <span style={{ backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)', padding: '4px 10px', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)' }}>
                          {p.category}
                        </span>
                      </div>
                      <div style={{ position: 'absolute', bottom: '1rem', left: '1rem', right: '1rem' }}>
                        <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.2rem', color: '#FAF8F5', fontWeight: 500, lineHeight: 1.3 }}>
                          {p.title}
                        </div>
                      </div>
                    </div>
                    <div style={{ padding: '1.5rem' }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '0.75rem' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                          <MapPin size={12} /> {p.location}
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', color: 'var(--text-muted)', fontSize: '0.78rem' }}>
                          <Calendar size={12} /> {p.year}
                        </div>
                      </div>
                      <div style={{ fontSize: '0.8rem', color: 'var(--accent-green)', fontWeight: 500, display: 'flex', alignItems: 'center', gap: '0.25rem', marginBottom: '0.75rem' }}>
                        <ArrowRight size={12} /> {p.impact}
                      </div>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem' }}>
                        {p.tags.slice(0, 3).map((tag) => (
                          <span key={tag} style={{ fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--text-muted)', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', padding: '2px 6px' }}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  )
}