import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { LOCATIONS, COMPANY_NAME } from '@/constants';
import LocationPageContent from './LocationPageContent';

export function generateStaticParams() {
  return LOCATIONS.map((location) => ({
    slug: location.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const location = LOCATIONS.find(l => l.slug === params.slug);
  if (!location) return {};

  return {
    title: `Top-Rated House Cleaning in ${location.name}, San Diego | Professional Cleaning Services`,
    description: `Professional house cleaning and maid services in ${location.name}, San Diego. ${location.description} Insured, background-checked cleaners. Book today!`,
  };
}

export default function LocationRoute({ params }: { params: { slug: string } }) {
  const location = LOCATIONS.find(l => l.slug === params.slug);
  if (!location) notFound();

  return <LocationPageContent slug={params.slug} />;
}
