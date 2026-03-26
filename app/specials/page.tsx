import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Star,
  Phone,
  ArrowRight,
  MapPin,
  Tag,
  Calendar,
  CheckCircle,
  Shield,
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, LOCATIONS } from '@/constants';
import { SITE_CONFIG } from '@/src/config/site-config';
import FAQSchema, { FAQItem } from '@/components/FAQSchema';
import { BLOG_POSTS } from '@/data/blog-posts';

const pageTitle = `House Cleaning Specials & Discounts | San Diego | ${COMPANY_NAME}`;
const pageDescription = `Save on San Diego house cleaning — $40 off your first clean or 15% off spring deep cleaning. Call ${PHONE_NUMBER} and mention your Google code to redeem.`;

export const metadata: Metadata = {
  title: pageTitle,
  description: pageDescription,
  alternates: { canonical: '/specials' },
  openGraph: {
    title: pageTitle,
    description: pageDescription,
    url: '/specials',
  },
  twitter: {
    card: 'summary_large_image',
    title: pageTitle,
    description: pageDescription,
  },
};

export default function SpecialsPage() {
  const baseUrl = SITE_CONFIG.baseUrl;

  const faqs: FAQItem[] = [
    {
      question: 'Can I combine the $40-off and the spring deep clean special?',
      answer: 'No, only one promotional code can be applied per booking. However, new clients can use WELCOME40 on their first clean and then book a separate deep clean appointment using SPRING15.',
    },
    {
      question: 'What services qualify for the $40-off first-time discount?',
      answer: 'Any of our cleaning services qualifies — standard cleaning, deep cleaning, move-in/move-out cleaning, vacation rental turnover, or post-construction cleaning. The $40 discount applies to your first booking, regardless of which service you choose.',
    },
    {
      question: 'How do I redeem a Google special?',
      answer: `Call us at ${PHONE_NUMBER} during business hours (Monday through Sunday, 8 AM to 7 PM). Let our team know you found us on Google and mention your code — either WELCOME40 or SPRING15. We'll apply the discount to your booking.`,
    },
    {
      question: 'Do specials apply to recurring cleaning plans?',
      answer: 'The $40-off code applies to your first cleaning only. After that, recurring clients automatically receive preferential pricing on their ongoing service. The spring 15% off applies to any single deep clean booked before June 1, 2026.',
    },
    {
      question: 'Are these specials available in my San Diego neighborhood?',
      answer: 'Yes. All specials are available throughout San Diego County — from La Jolla and Coronado on the coast to Poway and Rancho Bernardo inland, and everywhere in between including Hillcrest, North Park, and Mission Valley.',
    },
  ];

  const offerCatalogSchema = {
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'House Cleaning Specials - San Diego',
    description: `Current cleaning specials and discounts from ${COMPANY_NAME} in San Diego`,
    numberOfItems: 2,
    itemListElement: [
      {
        '@type': 'Offer',
        name: '$40 Off Your First Cleaning',
        description:
          'Get $40 off any cleaning service — standard, deep clean, or move-in/move-out. New clients only. Mention code WELCOME40.',
        priceValidUntil: '2026-06-30',
        availability: 'https://schema.org/InStock',
        availableAtOrFrom: {
          '@type': 'LocalBusiness',
          name: `${COMPANY_NAME} San Diego`,
          telephone: SITE_CONFIG.phone,
          areaServed: { '@type': 'City', name: 'San Diego' },
        },
        potentialAction: {
          '@type': 'ReserveAction',
          target: `${baseUrl}/booking`,
        },
      },
      {
        '@type': 'Offer',
        name: 'Spring Deep Clean Special — 15% Off',
        description:
          '15% off any deep cleaning service through June 1, 2026. Mention code SPRING15.',
        priceValidUntil: '2026-06-01',
        availability: 'https://schema.org/InStock',
        availableAtOrFrom: {
          '@type': 'LocalBusiness',
          name: `${COMPANY_NAME} San Diego`,
          telephone: SITE_CONFIG.phone,
        },
      },
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: `${baseUrl}/`,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'House Cleaning Specials',
        item: `${baseUrl}/specials`,
      },
    ],
  };

  const featuredLocations = LOCATIONS.slice(0, 12);

  return (
    <div className="bg-white min-h-screen">
      {/* Schema Markup */}
      <FAQSchema faqs={faqs} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(offerCatalogSchema, null, 2) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema, null, 2) }}
      />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-32 pb-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-6">
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>
              <span className="text-slate-300">
                {SITE_CONFIG.socialProof.aggregateRating.ratingValue}/5 Rating &bull;{' '}
                {SITE_CONFIG.socialProof.aggregateRating.ratingCount}+ Reviews
              </span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
              House Cleaning Specials in San Diego
            </h1>
            <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
              Exclusive offers for first-time clients and seasonal deep cleans. Available across all
              San Diego neighborhoods.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call {PHONE_NUMBER} to Redeem
              </a>
              <Link
                href="/booking"
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 rounded transition-colors"
              >
                Request a Quote Online
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Answer Box */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8 quick-answer">
              <h2 className="text-lg font-bold text-teal-800 mb-2">Quick Answer</h2>
              <p className="text-slate-700">
                {COMPANY_NAME} offers two active specials for San Diego residents: <strong>$40 off
                your first cleaning</strong> (any service) and a seasonal <strong>spring deep clean
                discount of 15% off</strong>. Call us at{' '}
                <a href={`tel:${PHONE_NUMBER}`} className="text-teal-700 font-medium underline">
                  {PHONE_NUMBER}
                </a>
                , mention you found us on Google, and give your code to redeem.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Current Offers Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
              Current Offers
            </h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Card 1: $40 Off */}
              <div className="bg-white border-2 border-teal-500 rounded-xl p-8">
                <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Always Available
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mt-4 mb-3">
                  $40 Off Your First Cleaning
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-slate-600 font-medium">Your code:</span>
                  <span className="bg-slate-100 px-4 py-2 rounded font-mono font-bold text-lg">
                    WELCOME40
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-4">Valid through: June 30, 2026</p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Maybe you&apos;ve thought about hiring a professional cleaning team but figured it
                  wasn&apos;t in the budget. We get it. That&apos;s exactly why this offer exists — we
                  want to show you what a real deep clean feels like, earn your trust, and hopefully
                  keep you as a long-term client. Use code WELCOME40 and get $40 off your first
                  cleaning, no matter which service you choose.
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 mb-2">Applies to:</h4>
                  <ul className="space-y-1">
                    <li>
                      <Link
                        href="/service/standard-cleaning"
                        className="text-teal-600 hover:text-teal-700 hover:underline font-medium"
                      >
                        Standard Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service/deep-cleaning"
                        className="text-teal-600 hover:text-teal-700 hover:underline font-medium"
                      >
                        Deep Cleaning
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service/move-in-out-cleaning"
                        className="text-teal-600 hover:text-teal-700 hover:underline font-medium"
                      >
                        Move-In / Move-Out Cleaning
                      </Link>
                    </li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-slate-900 mb-3">How to Redeem</h4>
                  <ol className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Call {PHONE_NUMBER}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Tell our team you found us on Google</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Mention code WELCOME40</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-teal-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>We&apos;ll apply $40 off your first cleaning invoice</span>
                    </li>
                  </ol>
                </div>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call {PHONE_NUMBER} to Book
                </a>
              </div>

              {/* Card 2: Spring Deep Clean */}
              <div className="bg-white border-2 border-amber-500 rounded-xl p-8">
                <span className="bg-amber-100 text-amber-800 px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Spring 2026 — Ends June 1
                </span>
                <h3 className="text-2xl font-serif font-bold text-slate-900 mt-4 mb-3">
                  Spring Deep Clean Special — 15% Off
                </h3>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-sm text-slate-600 font-medium">Your code:</span>
                  <span className="bg-slate-100 px-4 py-2 rounded font-mono font-bold text-lg">
                    SPRING15
                  </span>
                </div>
                <p className="text-sm text-slate-500 mb-4">Valid through: June 1, 2026</p>

                <p className="text-slate-600 leading-relaxed mb-6">
                  Spring in San Diego means open windows, longer days — and months of dust, pollen,
                  and grime you&apos;ve been putting off. If you&apos;ve been on the fence about a
                  professional deep clean, this is the push: 15% off any deep cleaning service
                  through June 1. We want you to see firsthand what 1-2 experienced cleaners can do
                  to your home in a single visit — every baseboard wiped, every ceiling fan dusted,
                  every bathroom sanitized top to bottom. Once you see the difference, you&apos;ll
                  understand why San Diego families keep coming back.
                </p>

                <div className="mb-4">
                  <h4 className="font-bold text-slate-900 mb-2">Deep clean includes:</h4>
                  <ul className="grid grid-cols-2 gap-1 text-sm text-slate-600">
                    <li className="flex items-start gap-1.5">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>Appliance exteriors</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>Baseboards</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>Door frames</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>Ceiling fans</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>Blinds</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>Light fixtures</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>Window sills</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                      <span>Full bathroom sanitization</span>
                    </li>
                  </ul>
                </div>

                <div className="mb-6">
                  <h4 className="font-bold text-slate-900 mb-2">Add-ons (at extra cost):</h4>
                  <ul className="text-sm text-slate-600 space-y-1">
                    <li>Inside refrigerator</li>
                    <li>Inside oven</li>
                    <li>Inside cabinets</li>
                    <li>Interior windows</li>
                  </ul>
                </div>

                <div className="bg-slate-50 rounded-lg p-4 mb-6">
                  <h4 className="font-bold text-slate-900 mb-3">How to Redeem</h4>
                  <ol className="space-y-2 text-slate-600 text-sm">
                    <li className="flex items-start gap-2">
                      <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        1
                      </span>
                      <span>Call {PHONE_NUMBER}</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        2
                      </span>
                      <span>Tell our team you found us on Google</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        3
                      </span>
                      <span>Mention code SPRING15</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="bg-amber-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                        4
                      </span>
                      <span>We&apos;ll apply 15% off your deep cleaning invoice</span>
                    </li>
                  </ol>
                </div>

                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="inline-flex items-center justify-center w-full px-6 py-3 bg-amber-500 hover:bg-amber-400 text-white font-bold rounded transition-colors"
                >
                  <Phone className="mr-2 w-5 h-5" />
                  Call {PHONE_NUMBER} to Book
                </a>
              </div>
            </div>

            <p className="text-center text-slate-400 text-sm mt-8">
              Last updated: March 25, 2026
            </p>
          </div>
        </div>
      </section>

      {/* How to Redeem Section */}
      <section className="py-16 bg-teal-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
              How to Redeem Your Special
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-teal-600 mb-2">1</div>
                <h3 className="font-bold text-slate-900 mb-1">Call Us</h3>
                <p className="text-slate-600 text-sm">
                  Call{' '}
                  <a href={`tel:${PHONE_NUMBER}`} className="text-teal-600 font-medium">
                    {PHONE_NUMBER}
                  </a>{' '}
                  (Mon&ndash;Sun, 8 AM &ndash; 7 PM)
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-teal-600 mb-2">2</div>
                <h3 className="font-bold text-slate-900 mb-1">Tell Us How You Found Us</h3>
                <p className="text-slate-600 text-sm">
                  Let our team know you found us on Google Business
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Tag className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-teal-600 mb-2">3</div>
                <h3 className="font-bold text-slate-900 mb-1">Mention Your Code</h3>
                <p className="text-slate-600 text-sm">
                  Say WELCOME40 or SPRING15 so we know to apply the discount
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Calendar className="w-8 h-8 text-teal-600" />
                </div>
                <div className="text-2xl font-bold text-teal-600 mb-2">4</div>
                <h3 className="font-bold text-slate-900 mb-1">Schedule Your Cleaning</h3>
                <p className="text-slate-600 text-sm">
                  We&apos;ll confirm the discounted price before booking
                </p>
              </div>
            </div>

            <div className="mt-10 bg-white rounded-lg p-4 text-center text-sm text-slate-500">
              Specials cannot be combined with each other. New clients can use WELCOME40 on their
              first clean and book a spring deep clean with SPRING15 as a separate appointment.
            </div>
          </div>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
              What&apos;s Included in Each Service
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
              All three services qualify for the $40-off first-time discount. The spring 15% off
              applies to deep cleaning.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Standard Cleaning */}
              <Link
                href="/service/standard-cleaning"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                  Standard Cleaning
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Routine maintenance — dusting, vacuuming, mopping, bathroom sanitization, kitchen
                  surfaces. Best for weekly or bi-weekly upkeep.
                </p>
                <p className="text-xs text-slate-400">
                  Add-ons available: inside fridge, inside oven, inside cabinets, interior windows
                  ($35-$50 each)
                </p>
                <span className="text-teal-600 font-medium text-sm inline-flex items-center mt-3">
                  View full checklist <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>

              {/* Deep Cleaning */}
              <Link
                href="/service/deep-cleaning"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                  Deep Cleaning
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Top-to-bottom detail — baseboards, ceiling fans, blinds, cabinet fronts, appliance
                  exteriors, full bathroom scrub. Ideal for first-time cleans or quarterly resets.
                </p>
                <p className="text-xs text-slate-400">
                  Add-ons available: inside fridge, inside oven, inside cabinets, interior windows
                  ($35-$50 each)
                </p>
                <span className="text-teal-600 font-medium text-sm inline-flex items-center mt-3">
                  View full checklist <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>

              {/* Move-In/Move-Out */}
              <Link
                href="/service/move-in-out-cleaning"
                className="bg-white border border-slate-200 rounded-xl p-6 hover:border-teal-300 hover:shadow-lg transition-all group"
              >
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-teal-600 transition-colors">
                  Move-In / Move-Out
                </h3>
                <p className="text-slate-600 text-sm mb-4">
                  Empty-home detail — inside cabinets, inside fridge and oven, interior windows
                  all included. Meets property management and lease-end standards.
                </p>
                <p className="text-xs text-slate-400">
                  Ideal for lease transitions, property closings, and new-tenant prep
                </p>
                <span className="text-teal-600 font-medium text-sm inline-flex items-center mt-3">
                  View full checklist <ArrowRight className="ml-1 w-4 h-4" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Serving All San Diego Neighborhoods */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
              Serving All San Diego Neighborhoods
            </h2>
            <p className="text-slate-600 text-center mb-12 max-w-3xl mx-auto">
              Our specials are available across San Diego County — from coastal La Jolla near Torrey Pines
              State Reserve to suburban Scripps Ranch and Poway to urban Hillcrest minutes from Balboa Park.
              Whether you live near Mission Bay, the UCSD campus, or Miramar Lake, our team reaches every
              corner of the county.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {featuredLocations.map((loc) => (
                <Link
                  key={loc.slug}
                  href={`/location/${loc.slug}`}
                  className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-all"
                >
                  <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
                  <span className="text-slate-700 font-medium text-sm">{loc.name}</span>
                </Link>
              ))}
            </div>

            <div className="text-center">
              <Link
                href="/locations"
                className="inline-flex items-center text-teal-700 font-medium hover:text-teal-800 transition-colors"
              >
                See all {LOCATIONS.length} locations <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
              Frequently Asked Questions About Our Specials
            </h2>

            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <div key={index} className="bg-slate-50 rounded-xl p-6">
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{faq.question}</h3>
                  <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Guides Section */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
              Helpful Cleaning Guides
            </h2>
            <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
              Learn more about the services covered by our specials.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                'how-much-does-a-deep-house-cleaning-cost',
                'deep-cleaning-guide-san-diego',
                'benefits-of-regular-cleaning-service',
                'standard-vs-deep-cleaning-san-diego',
              ].map((blogSlug) => {
                const post = BLOG_POSTS.find((p) => p.slug === blogSlug);
                if (!post) return null;
                return (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:bg-teal-50 transition-colors group"
                  >
                    <ArrowRight className="w-4 h-4 text-teal-500 flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors text-sm">
                        {post.title}
                      </h3>
                      <p className="text-xs text-slate-500 mt-0.5">{post.readTime}</p>
                    </div>
                  </Link>
                );
              })}
            </div>
            <div className="text-center mt-6">
              <Link
                href="/blog"
                className="inline-flex items-center text-teal-700 font-medium hover:text-teal-800 transition-colors"
              >
                View All Cleaning Guides <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-teal-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
            Ready to Save on Your First Clean?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of San Diego families who trust {COMPANY_NAME}. Call today, mention your
            code, and experience the difference.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href={`tel:${PHONE_NUMBER}`}
              className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-700 font-bold rounded hover:bg-teal-50 transition-colors"
            >
              <Phone className="mr-2 w-5 h-5" />
              Call {PHONE_NUMBER}
            </a>
            <Link
              href="/booking"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 rounded transition-colors"
            >
              Request a Quote Online
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>
          <p className="mt-8 text-teal-200 text-sm">
            <Shield className="w-4 h-4 inline-block mr-1 -mt-0.5" />
            Fully Insured &bull; Background-Checked &bull;{' '}
            {SITE_CONFIG.socialProof.aggregateRating.ratingCount}+ Five-Star Reviews
          </p>
        </div>
      </section>
    </div>
  );
}
