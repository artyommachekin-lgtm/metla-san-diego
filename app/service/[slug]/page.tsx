import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, COMPANY_NAME } from '@/constants';
import ServicePageContent from './ServicePageContent';

// SEO-optimized meta descriptions per service
const SERVICE_META_DESCRIPTIONS: Record<string, string> = {
  'standard-cleaning': 'Professional standard cleaning in San Diego. Weekly, biweekly & monthly house cleaning service. Dusting, mopping, sanitizing bathrooms & kitchen. Insured cleaners, 50-point checklist. Book online!',
  'deep-cleaning': 'Whole house deep cleaning in San Diego, La Jolla & Coronado. One time or recurring. Inside appliances, baseboards, ceiling fans, cabinet fronts. Insured professionals. Book today!',
  'post-construction-cleaning': 'Post-construction & post-renovation cleaning in San Diego. Construction dust removal, window cleaning, cabinet detailing after remodel. Insured professionals, surface-safe methods. Free quotes!',
  'vacation-rental-cleaning-airbnb': 'Airbnb & VRBO cleaning in San Diego. Vacation rental turnover cleaning, same-day turnovers, linen staging, damage reporting. Hotel-quality guest-ready results. Book now!',
  'move-in-out-cleaning': 'Move-in & move-out cleaning in San Diego. End of lease & apartment cleaning. Inside cabinets, appliances, full sanitization. Meets property management standards. Insured team. Free quotes!',
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) return {};

  const title = `${service.title} San Diego | ${COMPANY_NAME}`;
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
