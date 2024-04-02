import { ImageResponse } from '@vercel/og';
import { siteMetadata } from '@/data/siteMetadata';
// import { Nunito } from "next/font/google";

// Route segment config
export const runtime = 'edge';

export type ImageProps = {
  title?: string;
  description?: string;
  imageUrl?: string;
};

export default async function OGImage(
  props?: ImageProps
): Promise<ImageResponse> {
  const { title, description, imageUrl } = {
    title: siteMetadata.title,
    description: siteMetadata.description,
    ...props,
  };

  // Font
  const fontSemiBold = fetch(
    new URL('@/assets/fonts/Nunito/Nunito-SemiBold.ttf', import.meta.url)
  ).then((res) => res.arrayBuffer());

  const calcFontSize = (text: string): number => {
    const titleLength = text?.length || 0;

    if (titleLength >= 100) {
      return 56;
    } else if (titleLength >= 50) {
      return 72;
    } else if (titleLength >= 30) {
      return 96;
    }

    return 120;
  };

  return new ImageResponse(
    (
      <div
        style={{
          color: 'white',
          background: '#6ec1e4',
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          textAlign: 'center',
          opacity: imageUrl ? 0.3 : 1,
          backgroundImage: imageUrl
            ? `url(${imageUrl})`
            : 'linear-gradient(to bottom, #6ec1e4 25%, #98cbe1 50%, #f97352 75%)',
        }}
      >
        <p style={{ width: '80%', fontSize: calcFontSize(title), color: 'white' }}>{title}</p>
        <p style={{ width: '80%', fontSize: calcFontSize(description) / 2, color: 'white' }}>{description}</p>
        <p style={{ marginBottom: 20, fontSize: 24, color: 'black' }}>{siteMetadata.siteUrl}</p>
      </div>
    ),
    {
      // For convenience, we can re-use the exported opengraph-image
      // size config to also set the ImageResponse's width and height.
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'Nunito',
          data: await fontSemiBold,
          style: 'normal',
          weight: 400,
        },
      ],
    }
  );
}
