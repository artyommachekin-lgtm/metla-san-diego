import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Navigation from '@/components/Navigation';
import Breadcrumbs from '@/components/Breadcrumbs';
import Footer from '@/components/Footer';
import { SITE_CONFIG } from '@/src/config/site-config';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({
  subsets: ['latin'],
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: SITE_CONFIG.seo.siteTitle,
    template: '%s',
  },
  description: SITE_CONFIG.seo.metaDescription,
  keywords: SITE_CONFIG.seo.keywords,
  openGraph: {
    type: 'website',
    siteName: 'Metla House Cleaning San Diego',
    title: SITE_CONFIG.seo.siteTitle,
    description: SITE_CONFIG.seo.metaDescription,
    url: SITE_CONFIG.baseUrl,
    images: [
      {
        url: `${SITE_CONFIG.baseUrl}${SITE_CONFIG.social.ogImage}`,
        width: SITE_CONFIG.social.ogImageWidth,
        height: SITE_CONFIG.social.ogImageHeight,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_CONFIG.seo.siteTitle,
    description: 'Premium residential cleaning services in San Diego County. Insured professionals serving La Jolla, Coronado, Pacific Beach & more.',
    images: [`${SITE_CONFIG.baseUrl}${SITE_CONFIG.social.ogImage}`],
  },
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico', type: 'image/x-icon' },
    ],
    apple: '/apple-touch-icon.png',
  },
  other: {
    'geo.region': 'US-CA',
    'geo.placename': 'San Diego',
    'geo.position': `${SITE_CONFIG.coordinates.latitude};${SITE_CONFIG.coordinates.longitude}`,
    'ICBM': `${SITE_CONFIG.coordinates.latitude}, ${SITE_CONFIG.coordinates.longitude}`,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <head>
        <link rel="preconnect" href="https://images.unsplash.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://images.unsplash.com" />
        <link rel="dns-prefetch" href="https://d3ey4dbjkt2f6s.cloudfront.net" />
        <link rel="dns-prefetch" href="https://clienthub.getjobber.com" />
        <link rel="dns-prefetch" href="https://maps.google.com" />
      </head>
      <body className="font-sans text-slate-900 antialiased selection:bg-teal-100 selection:text-teal-900">
        <Navigation />
        <Breadcrumbs />
        {children}
        <Footer />
      </body>
    </html>
  );
}
