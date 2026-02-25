import type { Metadata } from 'next';
import BookingContent from './BookingContent';
import { COMPANY_NAME } from '@/constants';
import { SITE_CONFIG } from '@/src/config/site-config';

const pageTitle = `Request a Quote | ${COMPANY_NAME}`;
const pageDescription = 'Get a free quote for professional house cleaning in San Diego. Book online in 60 seconds. No phone call required.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/booking' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/booking',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
};

export default function BookingPage() {
  const baseUrl = SITE_CONFIG.baseUrl;

  const bookingSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": pageTitle,
    "url": `${baseUrl}/booking`,
    "description": pageDescription,
    "potentialAction": {
      "@type": "ReserveAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": `${baseUrl}/booking`,
        "actionPlatform": [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      "result": {
        "@type": "Reservation",
        "name": "Book a Cleaning",
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(bookingSchema) }}
      />
      <BookingContent />
    </>
  );
}
