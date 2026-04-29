'use client'

import { useState } from 'react'
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react'
import { supabase } from '@/lib/supabase'

export function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus('submitting')
    try {
      const { error } = await supabase
        .from('contact_submissions')
        .insert([form])
      if (error) throw error
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <div style={{ paddingTop: '72px' }}>
      <section style={{ backgroundColor: 'var(--bg-secondary)', borderBottom: '1px solid var(--border)', padding: '5rem 2rem' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div className="section-label" style={{ marginBottom: '1rem' }}>Let&apos;s Connect</div>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 400, color: 'var(--text-primary)', maxWidth: '640px', lineHeight: 1.1 }}>
            Start Your Development Journey
          </h1>
        </div>
      </section>

      <section style={{ padding: '5rem 2rem', backgroundColor: 'var(--bg-primary)' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
            {/* Info */}
            <div>
              <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', lineHeight: 1.7, marginBottom: '2.5rem' }}>
                Whether you need planning approval, an EIA study, a feasibility report, or strategic investment advice — I&apos;m ready to help.
                Get in touch and let&apos;s discuss your project.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem', marginBottom: '3rem' }}>
                {[
                  { icon: <Mail size={18} />, label: 'Email', content: <a href="mailto:alaladeayomide01@gmail.com" style={{ fontSize: '0.9rem', color: 'var(--text-primary)', textDecoration: 'none' }}>alaladeayomide01@gmail.com</a> },
                  { icon: <Phone size={18} />, label: 'Phone', content: <a href="tel:+2348068431346" style={{ fontSize: '0.9rem', color: 'var(--text-primary)', textDecoration: 'none' }}>+234 806 843 1346</a> },
                  { icon: <MessageCircle size={18} />, label: 'WhatsApp', content: <a href="https://wa.me/2348068431346" target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.9rem', color: 'var(--text-primary)', textDecoration: 'none' }}>Chat on WhatsApp</a> },
                  { icon: <MapPin size={18} />, label: 'Office', content: <div style={{ fontSize: '0.9rem', color: 'var(--text-primary)' }}>Ibadan, Oyo State, Nigeria<br />(Consultations Nationwide)</div> },
                ].map(({ icon, label, content }) => (
                  <div key={label} style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem', padding: '1.25rem', border: '1px solid var(--border)', backgroundColor: 'var(--bg-card)' }}>
                    <div style={{ color: 'var(--accent-green)', flexShrink: 0, marginTop: '2px' }}>{icon}</div>
                    <div>
                      <div style={{ fontSize: '0.7rem', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '3px' }}>{label}</div>
                      {content}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div style={{ padding: '2.5rem', backgroundColor: 'var(--bg-card)', border: '1px solid var(--border)' }}>
              {status === 'success' ? (
                <div style={{ textAlign: 'center', padding: '3rem 1rem' }}>
                  <CheckCircle size={48} color="var(--accent-green)" style={{ marginBottom: '1rem' }} />
                  <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '0.75rem' }}>Message Sent!</h3>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Thank you for reaching out. I&apos;ll be in touch within 24-48 hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="section-label" style={{ marginBottom: '1.75rem' }}>Send a Message</div>

                  {[
                    { key: 'name', label: 'Full Name', type: 'text', placeholder: 'Your name' },
                    { key: 'email', label: 'Email Address', type: 'email', placeholder: 'your@email.com' },
                    { key: 'subject', label: 'Subject', type: 'text', placeholder: 'What can I help you with?' },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key} style={{ marginBottom: '1.25rem' }}>
                      <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                        {label}
                      </label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[key as keyof typeof form]}
                        onChange={e => setForm({ ...form, [key]: e.target.value })}
                        style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none' }}
                      />
                    </div>
                  ))}

                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={{ display: 'block', fontSize: '0.75rem', fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: '0.5rem' }}>
                      Message
                    </label>
                    <textarea
                      required
                      rows={5}
                      placeholder="Tell me about your project or inquiry..."
                      value={form.message}
                      onChange={e => setForm({ ...form, message: e.target.value })}
                      style={{ width: '100%', padding: '0.75rem', backgroundColor: 'var(--bg-subtle)', border: '1px solid var(--border)', color: 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: '0.9rem', outline: 'none', resize: 'vertical' }}
                    />
                  </div>

                  {status === 'error' && (
                    <div style={{ padding: '0.75rem', backgroundColor: 'rgba(180, 30, 30, 0.1)', border: '1px solid rgba(180, 30, 30, 0.3)', color: '#B41E1E', fontSize: '0.85rem', marginBottom: '1rem' }}>
                      Something went wrong. Please try again or email directly.
                    </div>
                  )}

                  <button
                    type="submit"
                    disabled={status === 'submitting'}
                    style={{ width: '100%', backgroundColor: 'var(--accent-green)', color: '#FAF8F5', padding: '0.875rem', border: 'none', fontFamily: 'var(--font-body)', fontSize: '0.8rem', fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: status === 'submitting' ? 'not-allowed' : 'pointer', opacity: status === 'submitting' ? 0.7 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', transition: 'all 0.2s' }}
                  >
                    {status === 'submitting' ? 'Sending...' : (<><Send size={16} /> Send Message</>)}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}