import OGImage from 'components/Seo/OGImage';

export const runtime = 'edge';

export const alt = 'Default root OG image description';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return await OGImage({
    title: 'Default root OG image title',
    description: 'Default root OG image description',
    imageUrl: '',
  });
}
