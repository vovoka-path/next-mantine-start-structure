import { Metadata } from 'next';
import {
  siteMetadata,
  defaultOpenGraph,
  defaultTwitter,
} from '@/data/pagesMetadata';

interface PageSEOProps {
  title: string;
  description?: string;
  imageUrl?: string;
  [key: string]: string | undefined;
}

export default function PageMetadata({
  title,
  description,
  imageUrl,
  ...rest
}: PageSEOProps): Metadata {
  const images = imageUrl ? [imageUrl] : [siteMetadata.defaultOGImage];

  return {
    title: `${title} | ${siteMetadata.title}`,
    description: description || siteMetadata.description,
    openGraph: {
      ...defaultOpenGraph,
      title: `${title} | ${siteMetadata.title}`,
      description: description || siteMetadata.description,
      url: './',
      siteName: siteMetadata.title,
      images: images,
    },
    twitter: {
      ...defaultTwitter,
      title: `${title} | ${siteMetadata.title}`,
      images: images,
    },
    ...rest,
  };
}
