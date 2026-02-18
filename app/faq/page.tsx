import type { Metadata } from 'next';
import FAQContent from './FAQContent';
import { COMPANY_NAME } from '@/constants';

export const metadata: Metadata = {
  title: `Frequently Asked Questions | ${COMPANY_NAME} San Diego`,
  description: 'Get answers to common questions about house cleaning services in San Diego. Learn about pricing, scheduling, our cleaning process, and what makes Metla different.',
  alternates: { canonical: '/faq' },
};

export default function FAQPage() {
  return <FAQContent />;
}
