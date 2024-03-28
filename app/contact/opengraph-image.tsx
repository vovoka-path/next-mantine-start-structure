import OGGeneratedImage from 'components/Seo/OGImage';

export const runtime = 'edge';

export const alt = 'CONTACTS page OG image description';
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default async function Image() {
  return await OGGeneratedImage({
    title: 'CONTACTS page OG image title',
    description: 'CONTACTS page OG image description is not set for resolving social open graph or twitter images',
    imageUrl: '',
  });
}
