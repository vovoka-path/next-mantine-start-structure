import '@mantine/core/styles.css';
import { ColorSchemeScript } from '@mantine/core';
import './global.css';
import Providers from 'providers';
import Navbar from 'components/Layout/Navbar';
import { siteMetadata } from 'data/pagesMetadata';
import PageMetadata from '@/components/Seo/PageMetadata/PageMetadata';

export const metadata = PageMetadata({
  title: siteMetadata.title,
  description: siteMetadata.description,
  imageUrl: siteMetadata.defaultOGImage,
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <head>
        <ColorSchemeScript />
        <link rel='shortcut icon' href='/favicon.svg' />
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no'
        />
      </head>
      <body>
        <Providers>
          <Navbar>{children}</Navbar>
        </Providers>
      </body>
    </html>
  );
}
