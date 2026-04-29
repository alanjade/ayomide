import type { Metadata } from 'next'
import { ContactForm } from './contact-form'

export const metadata: Metadata = {
  title: 'Contact | Hire a Registered Town Planner — Alalade Ayomide',
  description: 'Get in touch with Alalade Ayomide for planning approvals, EIA studies, feasibility reports, or land investment advice. Based in Ibadan — consultations nationwide.',
  keywords: ['hire town planner Nigeria', 'EIA consultant contact', 'planning approval Nigeria', 'Alalade Ayomide contact'],
  openGraph: {
    title: 'Contact Alalade Ayomide | Town Planner & Urban Strategist',
    description: 'Planning approvals, EIA studies, feasibility reports, and land investment advice across Nigeria.',
    type: 'website',
  },
  alternates: {
    canonical: '/contact',
  },
}

export default function ContactPage() {
  return <ContactForm />
}