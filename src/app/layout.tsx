import type { Metadata } from 'next'
import './globals.css'
import { Providers } from '@/components/providers'
import { Navbar } from '@/components/navbar'
import { Footer } from '@/components/footer'

const siteUrl = process.env.NEXT_PUBLIC_APP_URL || "https://lalayomi.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: 'Alalade Ayomide | Town Planner & Urban Strategist — Nigeria',
    template: '%s | Alalade Ayomide',
  },

  description: 'Registered Nigerian town planner specialising in urban master plans, EIA studies, and land investment strategy. MNITP · TOPREC · Ibadan, Nigeria.',
  
  keywords: ['Alalade Ayomide', 'Town Planner', 'Urban Strategist', 'Nigeria', 'Ibadan', 'Master Plans', 'EIA Studies', 'Land Investment Strategy'],
  
  openGraph: {
    title: 'Alalade Ayomide | Town Planner & Urban Strategist',
    description: 'Planning Sustainable Cities. Designing Profitable Developments.',
    url: siteUrl,
    siteName: 'Alalade Ayomide Portfolio',
    images: [
      {
        url: `${siteUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: 'Alalade Ayomide Portfolio Open Graph Image',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Alalade Ayomide | Town Planner & Urban Strategist',
    description: 'Planning Sustainable Cities. Designing Profitable Developments.',
    images: [`${siteUrl}/og-image.jpg`],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-video-preview': -1,
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: siteUrl,
  },
}

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  "name": "Alalade Ayomide",
  "jobTitle": "Registered Town Planner",
  "description": "Alalade Ayomide is a registered Nigerian town planner specialising in urban master plans, EIA studies, and land investment strategy. MNITP · TOPREC · Ibadan, Nigeria.",
  "knownFor": [
    "Urban Master Plans",
    "Environmental Impact Assessment (EIA) Studies",
    "Land Investment Strategy"
  ],
  "url": siteUrl,
  "email": "alaladeayomide01@gmail.com",
  "telephone": "+2348068431346",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Ibadan",
    "addressRegion": "Oyo State",
    "addressCountry": "NG"
  },
  "sameAs": ["https://reu.ng"]
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <Providers>
          <Navbar />
          <main style={{ minHeight: '100vh' }}>{children}</main>
          <Footer />
        </Providers>
      </body>
    </html>
  )
}