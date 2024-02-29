import { genPageMetadata } from 'components/Seo/genPageMetadata';
import { getJsonLdString } from 'services/seo';
import ld from './ld.json';

export const metadata = genPageMetadata({
  title: 'About',
  description: 'About description',
  imageUrl: '',
});

export default function AboutPage() {
  return (
    <>
      <head>
        <script
          type='application/ld+json'
          dangerouslySetInnerHTML={getJsonLdString(ld)}
          key='product-jsonld'
        />
      </head>
      <div>About page</div>
      <h1>Title</h1>
      <h2>Description</h2>
    </>
  );
}