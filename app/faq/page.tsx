import type { Metadata } from 'next';
import FAQContent from './FAQContent';
import { COMPANY_NAME } from '@/constants';

const pageTitle = `Frequently Asked Questions | ${COMPANY_NAME} San Diego`;
const pageDescription = 'Get answers to common questions about house cleaning services in San Diego. Learn about pricing, scheduling, our cleaning process, and what makes Metla different.';

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/faq' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/faq',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
};

export default function FAQPage() {
  return <FAQContent />;
}
