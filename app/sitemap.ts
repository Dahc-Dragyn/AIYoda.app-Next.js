import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://aiyoda.app'

    // Add new pages to this simple list
    const routes = [
        '',         // Homepage
        '/privacy',
        '/terms',
        '/safety',
        '/directory',
    ]

    return routes.map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly',
        priority: route === '' ? 1 : 0.8,
    }))
}