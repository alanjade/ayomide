'use client'

import { useState, useEffect } from 'react'
import { Download, FileText, CheckSquare, BookOpen, ArrowRight, Mail, X } from 'lucide-react'
import { getResources } from '@/lib/queries'
import type { Resource } from '@/lib/supabase'

const typeIcons: Record<string, React.ReactNode> = {
  PDF: <FileText size={20} />,
  Checklist: <CheckSquare size={20} />,
  Guide: <BookOpen size={20} />,
  Template: <FileText size={20} />,
}

const typeColors: Record<string, string> = {
  PDF: '#2D5016',
  Checklist: '#8B5E3C',
  Guide: '#4A7C28',
  Template: '#3C6B8B',
}

function EmailCaptureModal({ resource, onClose, onSubmit }: {
  resource: Resource
  onClose: () => void
  onSubmit: (email: string) => void
}) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')

  return (
    <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.6)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <div style={{ backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', padding: '2.5rem', maxWidth: '440px', width: '100%', position: 'relative' }}>
        <button onClick={onClose} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'none', border: 'none', cursor: 'pointer', color: 'var(--text-muted)' }}><X size={20} /></button>
        <div style={{ color: typeColors[resource.type], marginBottom: '1rem' }}>{typeIcons[resource.type]}</div>
        <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.5rem' }}>{resource.title}</h3>
        <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '1.5rem', lineHeight: 1.6 }}>
          Enter your details to get instant access to this free resource.
        </p>
        <div style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Your Name</label>
          <input value={name} onChange={e => setName(e.target.value)} placeholder="Full name" style={{ width: '100%', padding: '0.65rem', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none' }} />
        </div>
        <div style={{ marginBottom: '1.5rem' }}>
          <label style={{ display: 'block', fontSize: '0.72rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.4rem' }}>Email Address</label>
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="your@email.com" style={{ width: '100%', padding: '0.65rem', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.875rem', outline: 'none' }} />
        </div>
        <button
          onClick={() => email && name && onSubmit(email)}
          disabled={!email || !name}
          style={{ width: '100%', backgroundColor: 'var(--accent-green)', color: '#FAF8F5', padding: '0.75rem', border: 'none', fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: email && name ? 'pointer' : 'not-allowed', opacity: email && name ? 1 : 0.6, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
        >
          <Download size={15} /> Get Free Download
        </button>
        <p style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '0.75rem', textAlign: 'center' }}>No spam. Unsubscribe anytime.</p>
      </div>
    </div>
  )
}

export default function ResourcesPage() {
  const [resources, setResources] = useState<Resource[]>([])
  const [loading, setLoading] = useState(true)
  const [activeModal, setActiveModal] = useState<Resource | null>(null)
  const [downloaded, setDownloaded] = useState<Set<string>>(new Set())

  useEffect(() => {
    getResources().then((data) => {
      setResources(data)
      setLoading(false)
    })
  }, [])

  const handleDownload = (email: string) => {
    if (activeModal) {
      console.log('Lead captured:', email, 'for resource:', activeModal.id)
      setDownloaded(prev => new Set([...prev, activeModal.id]))
      setActiveModal(null)
      // In production: trigger actual file download + save lead to Supabase
    }
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Free Downloads</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--text-primary)', maxWidth: '640px', lineHeight: 1.1, marginBottom: '1.25rem' }}>
            Planning Resources for Developers & Investors
          </h1>
          <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)', maxWidth: '540px', lineHeight: 1.7 }}>
            Practical guides, checklists, and templates to help you navigate Nigerian planning, EIA requirements, and land investment — from a registered professional.
          </p>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {loading ? (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
              {Array.from({ length: 4 }).map((_, i) => (
                <div key={i} className="card" style={{ height: '280px', backgroundColor: 'var(--bg-subtle)', animation: 'pulse 1.5s ease-in-out infinite' }} />
              ))}
            </div>
          ) : (
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '1.5rem' }}>
              {resources.map((r) => (
                <div key={r.id} className="card" style={{ padding: '2rem', display: 'flex', flexDirection: 'column' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                    <div style={{ color: typeColors[r.type], display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                      {typeIcons[r.type]}
                      <span style={{ fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', color: typeColors[r.type] }}>{r.type}</span>
                    </div>
                    {downloaded.has(r.id) && (
                      <span style={{ fontSize: '0.65rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--accent-green)', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--accent-green)', padding: '2px 8px' }}>Downloaded</span>
                    )}
                  </div>

                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.25rem', fontWeight: 500, color: 'var(--text-primary)', marginBottom: '0.75rem', lineHeight: 1.3 }}>{r.title}</h3>
                  <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', lineHeight: 1.65, flex: 1, marginBottom: '1.5rem' }}>{r.description}</p>

                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--border-light)', paddingTop: '1rem' }}>
                    <div style={{ display: 'flex', gap: '1rem' }}>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{r.pages}</span>
                      <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>{r.fileSize}</span>
                    </div>
                    <button
                      onClick={() => {
                        if (r.requiresEmail && !downloaded.has(r.id)) {
                          setActiveModal(r)
                        } else {
                          setDownloaded(prev => new Set([...prev, r.id]))
                        }
                      }}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '0.35rem',
                        backgroundColor: downloaded.has(r.id) ? 'var(--bg-subtle)' : 'var(--accent-green)',
                        color: downloaded.has(r.id) ? 'var(--text-secondary)' : '#FAF8F5',
                        border: 'none', padding: '0.5rem 1rem', cursor: 'pointer',
                        fontFamily: 'var(--font-body)', fontSize: '0.72rem', fontWeight: 600,
                        letterSpacing: '0.06em', textTransform: 'uppercase', transition: 'all 0.15s',
                      }}
                    >
                      {r.requiresEmail && !downloaded.has(r.id) ? <><Mail size={13} /> Get Free</> : <><Download size={13} /> Download</>}
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* CTA */}
          <div style={{ marginTop: '5rem', padding: '3rem', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
            <div>
              <div className="section-label" style={{ marginBottom: '0.5rem' }}>Need Custom Research?</div>
              <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.6rem', fontWeight: 400, color: 'var(--text-primary)', margin: 0 }}>Commission a Bespoke Report</h3>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>Feasibility studies, EIA scopes, land investment briefs — tailored to your project.</p>
            </div>
            <a href="/contact" style={{ backgroundColor: 'var(--accent-green)', color: '#FAF8F5', padding: '0.875rem 2rem', fontFamily: 'var(--font-body)', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
              Discuss Your Needs <ArrowRight size={15} />
            </a>
          </div>
        </div>
      </section>

      {activeModal && (
        <EmailCaptureModal
          resource={activeModal}
          onClose={() => setActiveModal(null)}
          onSubmit={handleDownload}
        />
      )}
    </div>
  )
}