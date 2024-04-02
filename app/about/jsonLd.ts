import { Organization, WithContext } from 'schema-dts';

export const jsonLd: WithContext<Organization> = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  name: 'My Name',
  alternateName: 'My Alternate Name',
  url: 'My.com',
  logo: '/logo-url.png',
  sameAs: [
    'fb',
    'twiter',
    'instagram',
    'youtube',
    'Linkedin',
    'Pinterest',
    'website',
  ],
};
