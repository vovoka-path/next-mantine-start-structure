import PageMetadata from '@/components/Seo/PageMetadata/PageMetadata';
import StructuredData from '@/components/Seo/StructuredData';
import { jsonLd } from './jsonLd';

export const metadata = PageMetadata({
  title: 'Contact',
  description: 'Contact description',
  imageUrl: '',
});

export default function ContactPage() {
  return (
    <>
      <StructuredData jsonLd={jsonLd} />
      <div>Contact page</div>
      <h1>Title</h1>
      <h2>Description</h2>
    </>
  );
}
