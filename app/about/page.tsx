import PageMetadata from '@/components/Seo/PageMetadata/PageMetadata';
import StructuredData from '@/components/Seo/StructuredData';
import { jsonLd } from './jsonLd';

export const metadata = PageMetadata({
  title: 'About',
  description: 'About description',
  imageUrl: '',
});

export default function AboutPage() {
  return (
    <>
      <StructuredData jsonLd={jsonLd} />
      <div>About page</div>
      <h1>Title</h1>
      <h2>Description</h2>
    </>
  );
}
