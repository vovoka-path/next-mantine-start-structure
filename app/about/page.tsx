import StructuredData from '@/components/Seo/StructuredData';
import ld from './ld.json';
import { genPageMetadata } from '@/components/Seo/genPageMetadata';

export const metadata = genPageMetadata({
  title: 'About',
  description: 'About description',
  imageUrl: '',
});

export default function AboutPage() {
  return (
    <>
      <StructuredData ldjson={ld} />
      <div>About page</div>
      <h1>Title</h1>
      <h2>Description</h2>
    </>
  );
}
