'use client'

import { useEffect, useRef, useState } from 'react'
import Link from 'next/link'
import { MapPin, X, ArrowRight } from 'lucide-react'
import { projects, type Project } from '@/lib/data'

type LeafletMap = import('leaflet').Map
type LeafletLib = typeof import('leaflet')

const categoryColors: Record<string, string> = {
  'Urban Development': '#2D5016',
  'EIA': '#8B5E3C',
  'Residential Layout': '#4A7C28',
  'Tourism Planning': '#5E3C8B',
}

export function MapClient() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [selected, setSelected] = useState<Project | null>(null)
  const [activeFilter, setActiveFilter] = useState('All')
  const [mapLoaded, setMapLoaded] = useState(false)
  const mapInstanceRef = useRef<LeafletMap | null>(null)
  const LRef = useRef<LeafletLib | null>(null)

  const categories = ['All', 'Urban Development', 'EIA', 'Residential Layout', 'Tourism Planning']
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter)

  useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return

    import('leaflet').then((L) => {
      if (!mapRef.current || mapInstanceRef.current) return
      LRef.current = L

      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      delete (L.Icon.Default.prototype as any)._getIconUrl
      L.Icon.Default.mergeOptions({
        iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
        iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
        shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
      })

      const map = L.map(mapRef.current, {
        center: [7.5, 5.5],
        zoom: 6,
        zoomControl: true,
        scrollWheelZoom: false,
        attributionControl: false,
      })

      mapInstanceRef.current = map

      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '© OpenStreetMap contributors © CARTO',
        subdomains: 'abcd',
        maxZoom: 20,
      }).addTo(map)

      setMapLoaded(true)

      projects.forEach((project) => {
        const color = categoryColors[project.category] || '#2D5016'
        const icon = L.divIcon({
          className: '',
          html: `<div style="width:34px;height:34px;background:${color};border:3px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 2px 8px rgba(0,0,0,0.3);cursor:pointer;"></div>`,
          iconSize: [34, 34],
          iconAnchor: [17, 34],
          popupAnchor: [0, -34],
        })

        L.marker([project.lat, project.lng], { icon })
          .addTo(map)
          .on('click', () => setSelected(project))
      })
    })

    return () => {
      mapInstanceRef.current?.remove()
      mapInstanceRef.current = null
    }
  }, [])

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '4rem 2rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '0.75rem' }}>Spatial Intelligence</div>
            <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 400, color: 'var(--text-primary)', lineHeight: 1.1, margin: 0 }}>
              Project Location Map
            </h1>
            <p style={{ fontSize: '0.875rem', color: 'var(--text-muted)', marginTop: '0.75rem', maxWidth: '420px' }}>
              Click any marker to view project details. Filter by type below.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
            {categories.map((cat) => (
              <button key={cat} onClick={() => setActiveFilter(cat)} style={{
                padding: '0.4rem 1rem', fontSize: '0.7rem', fontWeight: 500, letterSpacing: '0.06em',
                textTransform: 'uppercase', fontFamily: 'var(--font-body)', cursor: 'pointer', transition: 'all 0.15s',
                backgroundColor: activeFilter === cat ? 'var(--accent-green)' : 'var(--bg-card)',
                color: activeFilter === cat ? '#FAF8F5' : 'var(--text-secondary)',
                border: activeFilter === cat ? '1px solid var(--accent-green)' : '1px solid var(--border)',
              }}>
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      <div style={{ display: 'grid', gridTemplateColumns: selected ? '1fr 380px' : '1fr', minHeight: 'calc(100vh - 200px)', transition: 'grid-template-columns 0.3s ease' }}>
        {/* Map */}
        <div style={{ position: 'relative' }}>
          <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />
          {!mapLoaded && (
            <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: 'var(--bg-subtle)', zIndex: 5, flexDirection: 'column', gap: '1rem' }}>
              <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.5 }} />
              <MapPin size={32} color="var(--accent-green)" style={{ position: 'relative' }} />
              <div style={{ position: 'relative', fontSize: '0.8rem', color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>Loading Map...</div>
            </div>
          )}
          <div ref={mapRef} style={{ width: '100%', height: 'calc(100vh - 220px)', minHeight: '500px' }} />

          {/* Legend */}
          <div style={{ position: 'absolute', bottom: '24px', left: '16px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', padding: '1rem', zIndex: 1000, boxShadow: '0 4px 16px var(--shadow)' }}>
            <div className="section-label" style={{ marginBottom: '0.6rem' }}>Legend</div>
            {Object.entries(categoryColors).map(([cat, color]) => (
              <div key={cat} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.35rem', fontSize: '0.75rem', color: 'var(--text-secondary)' }}>
                <div style={{ width: '12px', height: '12px', backgroundColor: color, borderRadius: '50%', flexShrink: 0 }} />
                {cat}
              </div>
            ))}
          </div>

          <div style={{ position: 'absolute', top: '16px', right: '16px', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)', padding: '0.5rem 1rem', zIndex: 1000, fontSize: '0.78rem', color: 'var(--text-secondary)' }}>
            {filtered.length} project{filtered.length !== 1 ? 's' : ''}
          </div>
        </div>

        {/* Detail panel */}
        {selected && (
          <div style={{ backgroundColor: 'var(--bg-card)', borderLeft: '1px solid var(--border)', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
            <div style={{ height: '200px', backgroundColor: selected.color, position: 'relative', overflow: 'hidden', flexShrink: 0 }}>
              <div className="map-grid" style={{ position: 'absolute', inset: 0, opacity: 0.2 }} />
              <button onClick={() => setSelected(null)} style={{ position: 'absolute', top: '1rem', right: '1rem', background: 'rgba(0,0,0,0.3)', border: 'none', color: '#fff', cursor: 'pointer', width: '32px', height: '32px', display: 'flex', alignItems: 'center', justifyContent: 'center', backdropFilter: 'blur(4px)', zIndex: 1 }}>
                <X size={16} />
              </button>
              <div style={{ position: 'absolute', bottom: '1rem', left: '1.25rem', right: '1.25rem' }}>
                <div style={{ display: 'inline-block', backgroundColor: 'rgba(0,0,0,0.3)', backdropFilter: 'blur(8px)', padding: '3px 8px', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.9)', marginBottom: '0.5rem' }}>{selected.category}</div>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', color: '#FAF8F5', fontWeight: 500, lineHeight: 1.2 }}>{selected.title}</div>
              </div>
            </div>
            <div style={{ padding: '1.5rem', flex: 1 }}>
              <div style={{ display: 'flex', gap: '1rem', marginBottom: '1.25rem', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.25rem', fontSize: '0.8rem', color: 'var(--text-muted)' }}><MapPin size={12} /> {selected.location}</div>
                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{selected.year}</div>
              </div>
              <p style={{ fontSize: '0.875rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '1.5rem' }}>{selected.overview}</p>
              <div style={{ marginBottom: '1.5rem' }}>
                <div className="section-label" style={{ marginBottom: '0.75rem' }}>Key Metrics</div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                  {selected.metrics.map((m, i) => (
                    <div key={i} style={{ padding: '0.875rem', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', textAlign: 'center' }}>
                      <div style={{ fontFamily: 'var(--font-display)', fontSize: '1.3rem', fontWeight: 600, color: 'var(--text-primary)' }}>{m.value}</div>
                      <div style={{ fontSize: '0.68rem', color: 'var(--text-muted)', marginTop: '2px' }}>{m.label}</div>
                    </div>
                  ))}
                </div>
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.35rem', marginBottom: '1.5rem' }}>
                {selected.tags.map(tag => (
                  <span key={tag} style={{ fontSize: '0.62rem', fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', color: 'var(--accent-green)', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', padding: '2px 6px' }}>{tag}</span>
                ))}
              </div>
              <Link href={`/projects/${selected.slug}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', backgroundColor: 'var(--accent-green)', color: '#FAF8F5', padding: '0.75rem', fontFamily: 'var(--font-body)', fontSize: '0.75rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', textDecoration: 'none' }}>
                Full Case Study <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        )}
      </div>

      {/* Bottom list */}
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderTop: '1px solid var(--border)', padding: '3rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1.5rem' }}>All Mapped Projects</div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '1rem' }}>
            {filtered.map((p) => (
              <button key={p.slug} onClick={() => setSelected(p)} style={{
                display: 'flex', alignItems: 'center', gap: '0.875rem', padding: '0.875rem 1rem',
                backgroundColor: selected?.slug === p.slug ? 'var(--bg-subtle)' : 'var(--bg-card)',
                border: selected?.slug === p.slug ? '1px solid var(--accent-green)' : '1px solid var(--border)',
                cursor: 'pointer', textAlign: 'left', transition: 'all 0.15s',
              }}>
                <div style={{ width: '10px', height: '10px', borderRadius: '50%', backgroundColor: categoryColors[p.category], flexShrink: 0 }} />
                <div>
                  <div style={{ fontSize: '0.85rem', fontWeight: 500, color: 'var(--text-primary)', fontFamily: 'var(--font-body)' }}>{p.title}</div>
                  <div style={{ fontSize: '0.72rem', color: 'var(--text-muted)', marginTop: '1px' }}>{p.location}</div>
                </div>
              </button>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
