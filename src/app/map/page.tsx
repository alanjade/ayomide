import type { Metadata } from 'next'
import { MapClient } from './map-client'

export const metadata: Metadata = {
  title: 'Project Map | Nigeria Planning & EIA Portfolio — Alalade Ayomide',
  description: 'Interactive map of urban planning projects, EIA studies, and spatial interventions across Nigeria. Filter by project type and explore work by location.',
  keywords: ['Nigeria planning map', 'GIS urban planning Nigeria', 'EIA project locations Nigeria', 'town planner portfolio map'],
  openGraph: {
    title: 'Project Map | Nigeria Planning & EIA Portfolio',
    description: 'Interactive map of urban planning projects and EIA studies across Nigeria by registered town planner Alalade Ayomide.',
    type: 'website',
  },
  alternates: {
    canonical: '/map',
  },
}

export default function MapPage() {
  return <MapClient />
}