export const url = process.env.NEXT_PUBLIC_SITE_URL;
export const domain = url?.split('/')[2] || 'example.com';

export const siteMetadata = {
  metadataBase: new URL(url || `http://localhost:${process.env.PORT || 3000}`),
  siteUrl: domain,
  title: 'Website Title',
  description: 'Website description',
  siteLogo: '/static/images/logo.png',
  defaultOGImage: '/images/snippets/default-og-image.jpg',
  author: 'author Firstname Lastname',
  headerTitle: 'headerTitle',
  language: 'en-us',
  locale: 'en-US',
  theme: 'system', // system, dark or light
  siteRepo: 'https://github.com/timlrx/tailwind-nextjs-starter-blog',
  email: 'address@yoursite.com',
  github: 'https://github.com/username',
  twitter: 'https://twitter.com/username',
  facebook: 'https://facebook.com/username',
  youtube: 'https://youtube.com/username',
  linkedin: 'https://www.linkedin.com/username',
  threads: 'https://www.threads.net/username',
  instagram: 'https://www.instagram.com/username',
};

export const defaultOpenGraph = {
  url: url,
  siteName: domain,
  locale: siteMetadata.locale,
  type: 'website',
};

export const defaultTwitter = {
  card: 'summary_large_image',
};
