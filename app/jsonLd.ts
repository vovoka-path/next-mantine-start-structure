import { Product, WithContext } from 'schema-dts';

export const jsonLd: WithContext<Product> = {
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: 'ServiceName - Photo session',
  image: '/imageUrl.jpg',
  description: 'Service description - photo session for tourists',
  brand: {
    '@type': 'Brand',
    name: 'Brand - CYP',
  },
  offers: {
    '@type': 'Offer',
    url: '/paris-1.html',
    priceCurrency: 'EUR',
    price: '120',
    priceValidUntil: '2030-02-07',
    availability: 'https://schema.org/InStock',
    itemCondition: 'https://schema.org/NewCondition',
  },
  aggregateRating: {
    '@type': 'AggregateRating',
    ratingValue: '5',
    bestRating: '5',
    worstRating: '',
    ratingCount: '2',
    reviewCount: '2',
  },
  review: [
    {
      '@type': 'Review',
      name: "Review's name",
      reviewBody: "Review's body",
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '',
      },
      datePublished: '2024-02-07',
      author: { '@type': 'Person', name: 'Author' },
      publisher: { '@type': 'Organization', name: 'Publisher' },
    },
    {
      '@type': 'Review',
      name: "Review's name #2",
      reviewBody: "Review's body #2",
      reviewRating: {
        '@type': 'Rating',
        ratingValue: '5',
        bestRating: '5',
        worstRating: '',
      },
      datePublished: '2023-12-21',
      author: { '@type': 'Person', name: 'Author #2' },
      publisher: { '@type': 'Organization', name: 'Publisher #2' },
    },
  ],
};
