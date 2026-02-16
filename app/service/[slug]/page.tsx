import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { SERVICES, COMPANY_NAME } from '@/constants';
import ServicePageContent from './ServicePageContent';

// SEO-optimized meta descriptions per service
const SERVICE_META_DESCRIPTIONS: Record<string, string> = {
  'standard-cleaning': 'Professional standard cleaning in San Diego. Weekly & bi-weekly house cleaning service. Dusting, mopping, sanitizing bathrooms & kitchen. Insured cleaners, 50-point checklist. Book online!',
  'deep-cleaning': 'Deep cleaning services in San Diego, La Jolla & Coronado. Inside appliances, baseboards, ceiling fans, cabinet fronts. Typically $200-$400. Insured professionals. Book today!',
  'post-construction-cleaning': 'Post-construction cleaning in San Diego. Fine dust removal, window cleaning, cabinet detailing after renovation. Insured professionals, surface-safe methods. Free quotes!',
  'vacation-rental-cleaning-airbnb': 'Vacation rental cleaning & Airbnb turnover in San Diego. Same-day turnovers, linen staging, damage reporting. Hotel-quality guest-ready results. Book now!',
  'move-in-out-cleaning': 'Move-in & move-out cleaning in San Diego. Inside cabinets, appliances, full sanitization. Meets property management standards. Insured team. Free quotes!',
};

export function generateStaticParams() {
  return SERVICES.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) return {};

  return {
    title: `${service.title} San Diego | ${COMPANY_NAME}`,
    description: SERVICE_META_DESCRIPTIONS[service.slug] || service.shortDescription,
  };
}

export default function ServiceRoute({ params }: { params: { slug: string } }) {
  const service = SERVICES.find(s => s.slug === params.slug);
  if (!service) notFound();

  return <ServicePageContent slug={params.slug} />;
}
