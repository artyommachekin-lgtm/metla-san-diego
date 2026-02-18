import type { Metadata } from 'next';
import BookingContent from './BookingContent';
import { COMPANY_NAME } from '@/constants';

export const metadata: Metadata = {
  title: `Request a Quote | ${COMPANY_NAME}`,
  description: 'Get a free quote for professional house cleaning in San Diego. Book online in 60 seconds. No phone call required.',
  alternates: { canonical: '/booking' },
};

export default function BookingPage() {
  return <BookingContent />;
}
