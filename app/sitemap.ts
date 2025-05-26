import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.recipea.net'
  
  // 定义所有主要页面
  const routes = [
    '',
    '/features',
    '/pricing',
    '/membership',
    '/privacy-policy',
    '/terms-of-service',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  return routes
} 