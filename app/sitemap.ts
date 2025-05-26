import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.recipea.net'
  
  // 基础路由
  const routes = [
    {
      route: '',
      priority: 1.0,
      changeFrequency: 'daily' as const,
    },
    {
      route: '/waitlist',
      priority: 0.9,
      changeFrequency: 'daily' as const,
    },
    {
      route: '/pricing',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/membership',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    },
    {
      route: '/contact',
      priority: 0.7,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/privacy-policy',
      priority: 0.5,
      changeFrequency: 'monthly' as const,
    },
    {
      route: '/features',
      priority: 0.8,
      changeFrequency: 'weekly' as const,
    }
  ].map(({ route, priority, changeFrequency }) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency,
    priority,
  }))

  return routes
} 