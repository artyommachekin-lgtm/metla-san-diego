import React, { useEffect } from 'react';
import { useParams, Navigate, Link, useLocation as useRouterLocation } from 'react-router-dom';
import { LOCATIONS, COMPANY_NAME, PHONE_NUMBER } from '../constants';
import {
  MapPin,
  CheckCircle,
  Building2,
  Phone,
  ArrowRight,
  Users,
  Star,
  Shield,
  HelpCircle
} from 'lucide-react';
import { updatePageSEO, resetSEO } from '../utils/seo';
import LocalBusinessSchema from '../components/LocalBusinessSchema';
import FAQSchema, { FAQItem } from '../components/FAQSchema';

// Map location type to primary recommended service
const getRecommendedService = (locationType: string) => {
  switch (locationType) {
    case 'Coastal':
      return {
        slug: 'vacation-rental-cleaning-airbnb',
        title: 'Vacation Rental Cleaning',
        description: 'Fast, thorough turnover cleaning for Airbnb and VRBO properties. We handle same-day turnovers, sanitize high-touch surfaces, and prepare your rental for five-star reviews.'
      };
    case 'Urban Core':
      return {
        slug: 'standard-cleaning',
        title: 'Standard Cleaning',
        description: 'Recurring maintenance cleaning on your schedule — weekly, bi-weekly, or monthly. We handle the dusting, kitchen, bathrooms, and floors so you can focus on everything else.'
      };
    default: // Suburban, North Inland, South Bay, East County
      return {
        slug: 'deep-cleaning',
        title: 'Deep Cleaning',
        description: 'A complete reset for your home. We clean appliance exteriors, baseboards, ceiling fans, blinds, light fixtures, and every surface that standard cleaning misses.'
      };
  }
};

const LocationPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const location = LOCATIONS.find(l => l.slug === slug);
  const routerLocation = useRouterLocation();

  useEffect(() => {
    if (location) {
      updatePageSEO({
        title: `Top-Rated House Cleaning in ${location.name}, San Diego | ${COMPANY_NAME}`,
        description: `Professional house cleaning and maid services in ${location.name}, San Diego. ${location.description} Insured, background-checked cleaners. Book today!`,
        path: routerLocation.pathname,
      });
    }
    return () => {
      resetSEO();
    };
  }, [location, routerLocation.pathname]);

  if (!location) return <Navigate to="/" />;

  const recommendedService = getRecommendedService(location.type);

  // Use location-specific FAQs if available, fallback to generic
  const faqData: FAQItem[] = location.faqs && location.faqs.length > 0
    ? location.faqs
    : [
        {
          question: `How much does house cleaning cost in ${location.name}?`,
          answer: `House cleaning prices in ${location.name} vary based on home size and service type. Standard cleaning typically ranges from $120-$300, deep cleaning from $200-$500, and specialized services are quoted based on specific needs. Contact us for a free personalized estimate.`
        },
        {
          question: `Do you serve all areas of ${location.name}?`,
          answer: `Yes, Metla House Cleaning provides full coverage throughout ${location.name} and surrounding areas. Our team knows the area well and can typically accommodate same-week or even same-day appointments depending on availability.`
        },
        {
          question: `Are your ${location.name} cleaners background checked?`,
          answer: `Every member of our ${location.name} cleaning team undergoes a thorough background check, is fully insured and bonded, and receives professional training. Your safety and peace of mind are our top priorities.`
        },
      ];

  return (
    <div className="bg-white min-h-screen">
      <LocalBusinessSchema location={location} />
      <FAQSchema faqs={faqData} />

      {/* Hero Section */}
      <section className="bg-slate-900 text-white pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-teal-900/30 to-slate-900" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center bg-white/10 px-4 py-2 rounded-full text-sm mb-6 backdrop-blur-sm">
              <MapPin className="w-4 h-4 mr-2 text-teal-400" />
              <span>Proudly Serving {location.name}</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-serif font-bold mb-4">
              Top-Rated House Cleaning in{' '}
              <span className="text-teal-400">{location.name}</span>, San Diego
            </h1>
            <p className="text-lg text-slate-400 mb-6">
              Metla House Cleaning serving San Diego since 2022
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/booking"
                className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded transition-colors"
              >
                Get Your Free Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <a
                href={`tel:${PHONE_NUMBER}`}
                className="inline-flex items-center justify-center px-8 py-4 border border-white/20 hover:bg-white/10 rounded transition-colors"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call {PHONE_NUMBER}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Left Column - Main Content */}
            <div className="lg:col-span-2">

              {/* Section 1: Introduction / Local Hook */}
              <div className="prose prose-lg max-w-none mb-12">
                <p className="text-slate-600 leading-relaxed whitespace-pre-line">
                  {location.detailedContent}
                </p>
              </div>

              {/* Section 2: Why Residents Choose Metla */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                  Why {location.name} Residents Choose Metla
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="p-5 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <CheckCircle className="w-6 h-6 text-teal-600" />
                      <h3 className="font-bold text-slate-900">Reliability</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      We show up on time, every time. We use systems, not guesswork — so your {location.name} home is cleaned on schedule.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Shield className="w-6 h-6 text-teal-600" />
                      <h3 className="font-bold text-slate-900">Vetted Professionals</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      We work with experienced, background-checked and vetted cleaners who are fully insured and familiar with {location.name} homes.
                    </p>
                  </div>
                  <div className="p-5 bg-slate-50 rounded-xl">
                    <div className="flex items-center gap-3 mb-2">
                      <Building2 className="w-6 h-6 text-teal-600" />
                      <h3 className="font-bold text-slate-900">Local Expertise</h3>
                    </div>
                    <p className="text-sm text-slate-600">
                      {location.housingTypes
                        ? `We understand the specific needs of ${location.name} homes — from ${location.housingTypes.slice(0, 2).join(' to ')}.`
                        : `We understand the specific cleaning needs of ${location.name} homes and local building protocols.`
                      }
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 3: Cleaning Challenge (via contentSections) */}
              {location.contentSections && location.contentSections.length > 0 && (
                <div className="mb-12 space-y-12">
                  {location.contentSections.map((section, index) => {
                    if (!section || !section.title || !section.content) {
                      console.warn(`Invalid content section at index ${index} for ${location.name}`, section);
                      return null;
                    }
                    return (
                      <div key={index} className="prose prose-lg max-w-none">
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                          {section.title}
                        </h2>
                        <div className="text-slate-600 leading-relaxed whitespace-pre-line">
                          {section.content}
                        </div>
                      </div>
                    );
                  })}
                </div>
              )}

              {/* Section 4: Neighborhoods We Serve */}
              {(location.landmarks || location.neighborhoods || location.housingTypes) && (
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                    Neighborhoods We Serve in {location.name}
                  </h2>

                  {location.housingTypes && location.housingTypes.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3">
                        Property Types We Clean
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {location.housingTypes.map((type, i) => (
                          <span key={i} className="px-3 py-1 bg-teal-50 text-teal-700 rounded-full text-sm">
                            {type}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {location.landmarks && location.landmarks.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3">
                        Key Landmarks Near Our Service Routes
                      </h3>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                        {location.landmarks.map((landmark, i) => (
                          <div key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                            <MapPin className="w-4 h-4 text-teal-500 flex-shrink-0" />
                            {landmark}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {location.neighborhoods && location.neighborhoods.length > 0 && (
                    <div className="mb-6">
                      <h3 className="text-lg font-bold text-slate-900 mb-3">
                        {location.name} Areas Served
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {location.neighborhoods.map((area, i) => (
                          <span key={i} className="px-3 py-1 bg-slate-100 text-slate-700 rounded text-sm">
                            {area}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {location.zipCodes && location.zipCodes.length > 0 && (
                    <p className="text-sm text-slate-500">
                      <strong>ZIP Codes:</strong> {location.zipCodes.join(', ')}
                    </p>
                  )}
                </div>
              )}

              {/* Section 5: Recommended Services */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                  Recommended Services for {location.name}
                </h2>
                <div className="space-y-4">
                  <div className="p-5 border border-teal-200 rounded-xl bg-teal-50/30">
                    <h3 className="font-bold text-slate-900 mb-2">{recommendedService.title}</h3>
                    <p className="text-sm text-slate-600 mb-3">{recommendedService.description}</p>
                    <Link
                      to={`/service/${recommendedService.slug}`}
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm"
                    >
                      Learn more about {recommendedService.title}
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                  <div className="p-5 border border-slate-200 rounded-xl">
                    <h3 className="font-bold text-slate-900 mb-2">Move-In / Move-Out Cleaning</h3>
                    <p className="text-sm text-slate-600 mb-3">
                      Thorough cleaning for empty homes — inside cabinets, inside the fridge and oven, interior windows, and every surface. Designed to satisfy property management checklists and maximize your chances of a smooth deposit process.
                    </p>
                    <Link
                      to="/service/move-in-out-cleaning"
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm"
                    >
                      Learn more about Move-In/Move-Out Cleaning
                      <ArrowRight className="ml-1 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Section 6: Property Managers */}
              {location.propertyManagerContent && (
                <div className="mb-12 p-6 bg-slate-900 text-white rounded-xl">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-8 h-8 text-teal-400" />
                    <h2 className="text-xl font-bold">For Property Managers & Realtors in {location.name}</h2>
                  </div>
                  <p className="text-slate-300 mb-4">{location.propertyManagerContent}</p>
                  <Link
                    to="/service/vacation-rental-cleaning-airbnb"
                    className="inline-flex items-center text-teal-400 hover:text-teal-300 font-medium"
                  >
                    Learn about our vacation rental services
                    <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              )}

              {/* Section 7: Visible FAQ */}
              <div className="mb-12">
                <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6">
                  Frequently Asked Questions about {location.name} Cleaning
                </h2>
                <div className="space-y-4">
                  {faqData.map((faq, i) => (
                    <div key={i} className="border border-slate-200 rounded-xl overflow-hidden">
                      <div className="p-4 bg-slate-50">
                        <div className="flex items-start gap-3">
                          <HelpCircle className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                          <h3 className="font-bold text-slate-900">{faq.question}</h3>
                        </div>
                      </div>
                      <div className="p-4">
                        <p className="text-slate-600 text-sm">{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-1">
              <div className="bg-slate-50 p-6 rounded-xl border border-slate-100 sticky top-24">
                <div className="flex items-center gap-2 mb-4">
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                  </div>
                  <span className="text-sm text-slate-600">4.9/5</span>
                </div>
                <p className="text-xs text-slate-500 mb-6">Based on 127+ reviews from {location.name} clients</p>

                <Link
                  to="/booking"
                  className="block w-full text-center bg-teal-600 text-white py-3 rounded font-bold hover:bg-teal-700 transition-colors mb-3"
                >
                  Get a Free Quote
                </Link>
                <a
                  href={`tel:${PHONE_NUMBER}`}
                  className="block w-full text-center border border-slate-300 text-slate-700 py-3 rounded font-medium hover:bg-slate-100 transition-colors"
                >
                  <Phone className="w-4 h-4 inline mr-2" />
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby Locations Section for Internal Linking */}
      <section className="py-12 bg-slate-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-serif font-bold text-slate-900 mb-6 text-center">
              We Also Serve Nearby Areas
            </h2>
            <div className="flex flex-wrap justify-center gap-3">
              {LOCATIONS.filter(l => l.slug !== location.slug).slice(0, 8).map((nearbyLocation) => (
                <Link
                  key={nearbyLocation.slug}
                  to={`/location/${nearbyLocation.slug}`}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-700 hover:border-teal-300 hover:text-teal-600 hover:bg-teal-50 transition-colors"
                >
                  <MapPin className="w-4 h-4" />
                  {nearbyLocation.name}
                </Link>
              ))}
            </div>
            <div className="text-center mt-6">
              <Link
                to="/locations"
                className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium text-sm"
              >
                View all San Diego service areas
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-serif font-bold mb-4">
            Ready for a Cleaner Home in {location.name}?
          </h2>
          <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
            Join hundreds of {location.name} residents who trust Metla for their home cleaning needs.
          </p>
          <Link
            to="/booking"
            className="inline-flex items-center px-8 py-4 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
          >
            Book Your {location.name} Cleaning Today
            <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
