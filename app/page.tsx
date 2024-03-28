import { genPageMetadata } from '@/components/Seo/genPageMetadata';
import ld from './ld-home.json';
import LDJson from '@/components/Seo/LDJson';

export const metadata = genPageMetadata({
  title: 'Home',
  description: 'Home description',
  imageUrl: '',
});

export default function HomePage() {
  return (
    <>
      <LDJson ldjson={ld} />
      <div>Home page</div>
      <h1>Title</h1>
      <h2>Description</h2>
    </>
  );
}
