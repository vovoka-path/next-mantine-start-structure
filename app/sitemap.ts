import { MetadataRoute } from 'next';

const domen = process.env.NEXT_PUBLIC_SITE_URL;

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${domen}/`,
      lastModified: new Date(),
      priority: 1,
    },
    {
      url: `${domen}/about`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${domen}/contacts`,
      lastModified: new Date(),
      priority: 0.5,
    },
  ];
}
