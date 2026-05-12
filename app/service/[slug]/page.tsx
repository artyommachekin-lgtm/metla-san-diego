import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, COMPANY_NAME } from '@/constants';
import ServicePageContent from './ServicePageContent';

// SEO-optimized meta descriptions per service
const SERVICE_META_DESCRIPTIONS: Record<string, string> = {
  'standard-cleaning': 'Professional standard cleaning in San Diego. Weekly, biweekly & monthly house cleaning service. Dusting, mopping, sanitizing bathrooms & kitchen. Insured cleaners, 50-point checklist. Book online!',
  'deep-cleaning': 'Whole house deep cleaning in San Diego, La Jolla & Coronado. One time or recurring. Baseboards, ceiling fans, blinds, cabinet fronts, appliance exteriors. Insured professionals. Book today!',
  'post-construction-cleaning': 'Drywall dust removal & post-renovation cleaning in San Diego. Fine particulate extraction, window tracks, cabinet interiors, vent screens. Surface-safe methods for new finishes. Insured.',
  'vacation-rental-cleaning-airbnb': 'Airbnb & VRBO turnover cleaning in San Diego built around the 11am→3pm checkout-to-checkin window. Linen staging, damage photos, guest-ready. 245+ five-star reviews.',
  'move-in-out-cleaning': 'Move-in & move-out cleaning in San Diego. End of lease & apartment cleaning. Inside cabinets, appliances, full sanitization. Meets property management standards. Insured team. Free quotes!',
};

// Service-specific title overrides (for SEO — most descriptive than default "${service.title} San Diego")
const SERVICE_TITLE_OVERRIDES: Record<string, string> = {
  'post-construction-cleaning': 'Post-Construction Cleaning San Diego | Drywall Dust Removal',
  'vacation-rental-cleaning-airbnb': 'Airbnb Turnover Cleaning San Diego | 11→3 Window | Same-Day',
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) return {};

  const titleOverride = SERVICE_TITLE_OVERRIDES[service.slug];
  const title = titleOverride
    ? `${titleOverride} | ${COMPANY_NAME}`
    : `${service.title} San Diego | ${COMPANY_NAME}`;
  const description = SERVICE_META_DESCRIPTIONS[service.slug] || service.shortDescription;

  return {
    title,
    description,
    alternates: { canonical: `/service/${params.slug}` },
    openGraph: {
      title,
      description,
      url: `/service/${params.slug}`,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
  };
}

export default function ServiceRoute({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) notFound();

  return <ServicePageContent slug={params.slug} />;
}
