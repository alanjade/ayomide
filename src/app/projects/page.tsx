import type { Metadata } from 'next'
import { ProjectsClient } from './projects-client'

export const metadata: Metadata = {
  title: 'Projects | Urban Planning & EIA Portfolio — Alalade Ayomide, MNITP',
  description: 'Case studies in urban master plans, EIA studies, residential layouts, and tourism planning across Nigeria — Oyo, Abuja, Ogun, Imo, Rivers State and more.',
  keywords: ['urban planning projects Nigeria', 'EIA projects Nigeria', 'master plan portfolio', 'residential layout Nigeria', 'town planner case studies'],
  openGraph: {
    title: 'Projects | Urban Planning & EIA Portfolio — Alalade Ayomide',
    description: 'Case studies in urban master plans, EIA studies, and residential layouts across Nigeria.',
    type: 'website',
  },
  alternates: {
    canonical: '/projects',
  },
}

export default function ProjectsPage() {
  return <ProjectsClient />
}