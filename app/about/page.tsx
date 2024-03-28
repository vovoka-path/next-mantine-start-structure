import LDJson from '@/components/Seo/LDJson';
import { genPageMetadata } from '@/components/Seo/genPageMetadata';
import ld from './ld.json';

export const metadata = genPageMetadata({
  title: 'About',
  description: 'About description',
  imageUrl: '',
});

export default function AboutPage() {
  return (
    <>
      <LDJson ldjson={ld} />
      <div>About page</div>
      <h1>Title</h1>
      <h2>Description</h2>
    </>
  );
}
