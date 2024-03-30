import LDJson from '@/components/Seo/LDJson';
import { genPageMetadata } from '@/components/Seo/genPageMetadata';
import ld from './ld.json';

export const metadata = genPageMetadata({
  title: 'Contact',
  description: 'Contact description',
  imageUrl: '',
});

export default function ContactPage() {
  return (
    <>
      <LDJson ldjson={ld} />
      <div>Contact page</div>
      <h1>Title</h1>
      <h2>Description</h2>
    </>
  );
}
