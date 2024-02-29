import { genPageMetadata } from '@/components/Seo/genPageMetadata';

export const metadata = genPageMetadata({
  title: 'Home',
  description: 'Home description',
  imageUrl: '',
})

export default function HomePage() {
  return (
    <>
      <div>Home page</div>
      <h1>Title</h1>
      <h2>Description</h2>
    </>
  );
}
