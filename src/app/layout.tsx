import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Head from "next/head";
import JsonLd from "../components/JsonLd";

export const metadata = {
  metadataBase: new URL('https://rtoease.in'),
  title: "RTOEase - Simplify Vehicle Formalities in India",
  description: "RTOEase helps you simplify vehicle formalities in India. Fast, reliable, and hassle-free service across India.",
  openGraph: {
    title: "RTOEase - Simplify Vehicle Formalities in India",
    description: "RTOEase helps you simplify vehicle formalities in India. Fast, reliable, and hassle-free service across India.",
    url: "https://rtoease.in/",
    siteName: "RTOEase",
    images: [
      {
        url: "/globe.svg",
        width: 1200,
        height: 630,
        alt: "RTOEase Logo",
      },
    ],
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "RTOEase - Simplify Vehicle Formalities in India",
    description: "RTOEase helps you simplify vehicle formalities in India. Fast, reliable, and hassle-free service across India.",
    images: ["/globe.svg"],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "RTOEase",
    "url": "https://rtoease.in/",
    "logo": "https://rtoease.in/globe.svg",
    "contactPoint": [{
      "@type": "ContactPoint",
      "email": "support@rtoease.in",
      "contactType": "customer support",
    }],
    "sameAs": [
      "https://wa.me/919999999999"
    ]
  };
  const localBizJsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "RTOEase",
    "image": "https://rtoease.in/globe.svg",
    "@id": "https://rtoease.in/",
    "url": "https://rtoease.in/",
    "telephone": "+919999999999",
    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },
    "areaServed": "IN",
    "email": "support@rtoease.in"
  };
  return (
    <html lang="en">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#2563eb" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content="RTOEase" />
      </Head>
      <body className="font-sans bg-white text-gray-900 min-h-screen flex flex-col">
        <JsonLd data={orgJsonLd} />
        <JsonLd data={localBizJsonLd} />
        <Navbar />
        <main className="flex-1 flex flex-col">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
