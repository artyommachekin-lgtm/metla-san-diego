import type { Metadata } from 'next';
import HomeContent from './HomeContent';
import { SITE_CONFIG } from '@/src/config/site-config';

export const metadata: Metadata = {
  title: 'Metla House Cleaning San Diego | Premium Residential Cleaning',
  description: SITE_CONFIG.seo.metaDescription,
};

export default function HomePage() {
  return <HomeContent />;
}
