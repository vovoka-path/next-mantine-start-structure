import StructuredData from '@/components/Seo/StructuredData';
import ld from './ld.json';
import { genPageMetadata } from '@/components/Seo/genPageMetadata';

export const metadata = genPageMetadata({
  title: 'Contact',
  description: 'Contact description',
  imageUrl: '',
});

export default function ContactPage() {
  return (
    <>
      <StructuredData ldjson={ld} />
      <div>Contact page</div>
      <h1>Title</h1>
      <h2>Description</h2>
    </>
  );
}
