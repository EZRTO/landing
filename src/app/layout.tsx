import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'EZRTO - Professional Vehicle Documentation Solutions',
  description:
    'Get professional RTO services including hypothecation termination, duplicate RC, address change, NOC assistance, and ownership transfer with doorstep delivery.',
  keywords:
    'RTO services, vehicle documentation, RC transfer, hypothecation termination, duplicate RC, NOC assistance, vehicle registration',
  authors: [{ name: 'EZRTO' }],
  openGraph: {
    title: 'EZRTO - Professional Vehicle Documentation Solutions',
    description:
      'Get professional RTO services including hypothecation termination, duplicate RC, address change, NOC assistance, and ownership transfer with doorstep delivery.',
    url: 'https://ezrto.in',
    siteName: 'EZRTO',
    images: [
      {
        url: 'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg',
        width: 1200,
        height: 630,
        alt: 'EZRTO - Professional RTO Services',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EZRTO - Professional Vehicle Documentation Solutions',
    description:
      'Get professional RTO services including hypothecation termination, duplicate RC, address change, NOC assistance, and ownership transfer with doorstep delivery.',
    images: ['https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="canonical" href="https://ezrto.in" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'EZRTO',
              description:
                'Professional RTO services for vehicle documentation',
              url: 'https://ezrto.in',
              logo: 'https://images.pexels.com/photos/97080/pexels-photo-97080.jpeg',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+1-555-0123',
                contactType: 'customer service',
              },
              sameAs: [
                'https://facebook.com/ezrto',
                'https://twitter.com/ezrto',
                'https://linkedin.com/company/ezrto',
              ],
            }),
          }}
        />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
