import { MetadataRoute } from 'next'

export default function robots(): MetadataRoute.Robots {
    return {
        rules: [
            {
                userAgent: [
                    'GPTBot',
                    'ChatGPT-User',
                    'Amazonbot',
                    'Claude-Web',
                    'ClaudeBot',
                    'anthropic-ai',
                    'CCBot',
                    'Google-Extended',
                    'Omgilibot',
                    'Omgili',
                    'PerplexityBot',
                    'YouBot',
                    'ByteSpider',
                    'FacebookBot',
                    'Diffbot',
                    'ImagesiftBot',
                    'cohere-ai',
                    'OAI-SearchBot',
                    'iaskspy',
                    'Search1bot',
                    'AhrefsBot',
                    'SemrushBot',
                ],
                disallow: '/',
            },
            {
                userAgent: '*',
                allow: '/',
                disallow: '/private/',
            }
        ],
        sitemap: 'https://aiyoda.app/sitemap.xml',
    }
}