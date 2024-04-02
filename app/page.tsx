import PageMetadata from '@/components/Seo/PageMetadata/PageMetadata';
import StructuredData from '@/components/Seo/StructuredData';
import { jsonLd } from './jsonLd';

export const metadata = PageMetadata({
  title: 'Home',
  description: 'Home description',
  imageUrl: '',
});

export default function HomePage() {
  return (
    <>
      <StructuredData jsonLd={jsonLd} />
      <div>Home page</div>
      <h1>Title</h1>
      <h2>Description</h2>
    </>
  );
}
