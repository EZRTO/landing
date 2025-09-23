import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "EZRTO | Easy RTO Services, Hypothecation Termination & Vehicle Documentation",
  description:
    "EZRTO provides professional RTO services with doorstep delivery. We specialize in hypothecation termination, hypothecation removal, RC transfer, NOC assistance, and complete vehicle documentation services.",
    keywords:
    "easy rto, ezrto, hypothecation termination, hypothecation removal, rto service, vehicle documentation, RC transfer, NOC assistance, vehicle hypothecation, car loan removal, bike loan hypothecation, RTO hypothecation termination online",
  
  authors: [{ name: "EZRTO" }],
  openGraph: {
    title: "EZRTO - Easy RTO Services & Vehicle Documentation Solutions",
    description:
      "Get hassle-free RTO services including hypothecation termination, RC transfer, NOC assistance, and more. Doorstep service with trusted professionals.",
    url: "https://ezrto.in",
    siteName: "EZRTO",
    images: [
      {
        url: "https://ezrto.in/android-chrome-512x512.png",
        width: 1200,
        height: 630,
        alt: "EZRTO - Easy RTO Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "EZRTO | Easy RTO Services & Hypothecation Termination",
    description:
      "EZRTO provides reliable RTO services including hypothecation removal, RC transfer, and NOC assistance. Simple, fast, and professional vehicle documentation.",
    images: ["https://ezrto.in/android-chrome-512x512.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://ezrto.in",
    languages: {
      'en-IN': 'https://ezrto.in',
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
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="canonical" href="https://ezrto.in" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "EZRTO",
              url: "https://ezrto.in",
              logo: "https://ezrto.in/android-chrome-512x512.png",
              image: "https://ezrto.in/android-chrome-512x512.png",
              description:
                "EZRTO provides professional RTO services including hypothecation termination, RC transfer, and NOC assistance with doorstep delivery.",
              telephone: "+91-XXXXXXXXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "Your Street Address",
                addressLocality: "Your City",
                addressRegion: "Your State",
                postalCode: "000000",
                addressCountry: "India",
              },
              priceRange: "₹₹",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+91-XXXXXXXXXX",
                  contactType: "customer service",
                  areaServed: "IN",
                  availableLanguage: ["English", "Hindi"],
                },
              ],
              sameAs: [
                "https://facebook.com/ezrto",
                "https://twitter.com/ezrto",
                "https://linkedin.com/company/ezrto",
              ],
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "RTO Services",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Hypothecation Termination",
                      description: "Get hypothecation terminated quickly and hassle-free with EZRTO's doorstep RTO services.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Hypothecation Removal",
                      description: "Remove hypothecation from your vehicle RC seamlessly with our professional RTO assistance.",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "RTO Services",
                      description: "Complete RTO services including RC transfer, NOC, and vehicle documentation.",
                    },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body className={inter.className}>
        <div className="min-h-screen bg-white">
          <Header />
            {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
