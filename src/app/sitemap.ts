import { MetadataRoute } from 'next'
import { projects } from '@/lib/data'

export default function sitemap(): MetadataRoute.Sitemap {
  const projectUrls = projects.map(p => ({
    url: `${process.env.NEXT_PUBLIC_APP_URL}/projects/${p.slug}`,
    lastModified: new Date(),
  }))
  return [
    { url: `${process.env.NEXT_PUBLIC_APP_URL}`, lastModified: new Date() },
    { url: `${process.env.NEXT_PUBLIC_APP_URL}/about`, lastModified: new Date() },
    { url: `${process.env.NEXT_PUBLIC_APP_URL}/services`, lastModified: new Date() },
    { url: `${process.env.NEXT_PUBLIC_APP_URL}/projects`, lastModified: new Date() },
    { url: `${process.env.NEXT_PUBLIC_APP_URL}/contact`, lastModified: new Date() },
    ...projectUrls,
  ]
}