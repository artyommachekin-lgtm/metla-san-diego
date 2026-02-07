import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { LOCATIONS, SERVICES, COMPANY_NAME, PHONE_NUMBER } from '../constants';
import { MapPin, CheckCircle, Phone, ArrowRight, Clock, Shield, Star, Users, Home } from 'lucide-react';
import { updatePageSEO, resetSEO } from '../utils/seo';

const DOMAIN = 'metlahousecleaningsandiego.com';

interface LocationsByType {
    [key: string]: typeof LOCATIONS;
}

const LocationsPage: React.FC = () => {
    useEffect(() => {
        updatePageSEO({
            title: `Areas We Serve | House Cleaning Services in San Diego County | ${COMPANY_NAME}`,
            description: `Professional house cleaning services across San Diego County. We serve ${LOCATIONS.length}+ neighborhoods including La Jolla, Pacific Beach, Hillcrest, Coronado, and more. Book online or call today!`,
            path: '/locations'
        });

        return () => resetSEO();
    }, []);

    // Group locations by type for organized display
    const locationsByType: LocationsByType = LOCATIONS.reduce((acc, loc) => {
        const type = loc.type || 'Other';
        if (!acc[type]) acc[type] = [];
        acc[type].push(loc);
        return acc;
    }, {} as LocationsByType);

    // Order types logically
    const typeOrder = ['Coastal', 'Urban Core', 'Suburban'];
    const sortedTypes = Object.keys(locationsByType).sort((a, b) => {
        const aIndex = typeOrder.indexOf(a);
        const bIndex = typeOrder.indexOf(b);
        if (aIndex === -1 && bIndex === -1) return a.localeCompare(b);
        if (aIndex === -1) return 1;
        if (bIndex === -1) return -1;
        return aIndex - bIndex;
    });

    // Get featured locations (first 6)
    const featuredLocations = LOCATIONS.slice(0, 6);

    return (
        <div className="bg-slate-50 min-h-screen">
            {/* Schema.org LocalBusiness with AreaServed */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "LocalBusiness",
                    "name": COMPANY_NAME,
                    "image": `https://${DOMAIN}/logo.png`,
                    "telephone": PHONE_NUMBER,
                    "url": `https://${DOMAIN}`,
                    "priceRange": "$$",
                    "address": {
                        "@type": "PostalAddress",
                        "addressLocality": "San Diego",
                        "addressRegion": "CA",
                        "addressCountry": "US"
                    },
                    "geo": {
                        "@type": "GeoCircle",
                        "geoMidpoint": {
                            "@type": "GeoCoordinates",
                            "latitude": 32.7157,
                            "longitude": -117.1611
                        },
                        "geoRadius": "50"
                    },
                    "areaServed": LOCATIONS.map(loc => ({
                        "@type": "City",
                        "name": loc.name,
                        "containedInPlace": {
                            "@type": "State",
                            "name": "California"
                        }
                    })),
                    "hasOfferCatalog": {
                        "@type": "OfferCatalog",
                        "name": "House Cleaning Services",
                        "itemListElement": SERVICES.slice(0, 5).map((service, index) => ({
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": service.title
                            },
                            "position": index + 1
                        }))
                    }
                })
            }} />

            {/* Hero Section */}
            <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-teal-900 text-white py-20 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center gap-2 bg-teal-500/20 border border-teal-400/30 rounded-full px-4 py-2 mb-6">
                            <MapPin className="w-4 h-4 text-teal-400" />
                            <span className="text-teal-300 text-sm font-medium">{LOCATIONS.length}+ Neighborhoods Served</span>
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
                            House Cleaning Services Across{' '}
                            <span className="text-teal-400">San Diego County</span>
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-2xl mx-auto">
                            From the beaches of La Jolla to the hills of Rancho Santa Fe, {COMPANY_NAME} delivers
                            professional cleaning services tailored to your neighborhood's unique character.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/booking"
                                className="inline-flex items-center justify-center bg-teal-500 hover:bg-teal-400 text-white font-bold px-8 py-4 rounded-lg transition-all shadow-lg hover:shadow-xl"
                            >
                                Book Your Cleaning
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <a
                                href={`tel:${PHONE_NUMBER}`}
                                className="inline-flex items-center justify-center bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-8 py-4 rounded-lg transition-all"
                            >
                                <Phone className="mr-2 w-5 h-5" />
                                Call {PHONE_NUMBER}
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            {/* Trust Badges */}
            <section className="bg-white border-b border-slate-200 py-8">
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap justify-center gap-8 md:gap-16">
                        <div className="flex items-center gap-3">
                            <Shield className="w-6 h-6 text-teal-600" />
                            <span className="text-slate-700 font-medium">100% Insured</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Users className="w-6 h-6 text-teal-600" />
                            <span className="text-slate-700 font-medium">Background-Checked Teams</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Star className="w-6 h-6 text-teal-600" />
                            <span className="text-slate-700 font-medium">5-Star Rated</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="w-6 h-6 text-teal-600" />
                            <span className="text-slate-700 font-medium">Same-Day Available</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Locations */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
                        Popular Service Areas
                    </h2>
                    <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                        Our most requested neighborhoods. Each area has a dedicated team that knows the local homes and their unique cleaning needs.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                        {featuredLocations.map((location) => (
                            <Link
                                key={location.slug}
                                to={`/location/${location.slug}`}
                                className="group bg-slate-50 rounded-xl p-6 hover:bg-teal-50 transition-all border border-slate-100 hover:border-teal-200 hover:shadow-lg"
                            >
                                <div className="flex items-start justify-between mb-4">
                                    <div>
                                        <span className="text-xs uppercase tracking-wider text-teal-600 font-semibold">{location.type}</span>
                                        <h3 className="text-xl font-bold text-slate-900 group-hover:text-teal-700 transition-colors">
                                            {location.name}
                                        </h3>
                                    </div>
                                    <MapPin className="w-5 h-5 text-teal-500 opacity-50 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <p className="text-slate-600 text-sm mb-4">{location.description}</p>
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {location.zipCodes?.slice(0, 2).map(zip => (
                                        <span key={zip} className="bg-slate-200 text-slate-600 text-xs px-2 py-1 rounded">{zip}</span>
                                    ))}
                                    {location.neighborhoods?.slice(0, 2).map(hood => (
                                        <span key={hood} className="bg-teal-100 text-teal-700 text-xs px-2 py-1 rounded">{hood}</span>
                                    ))}
                                </div>
                                <span className="inline-flex items-center text-teal-600 font-medium text-sm group-hover:text-teal-700">
                                    View {location.name} Services <ArrowRight className="ml-1 w-4 h-4" />
                                </span>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Locations by Type */}
            <section className="py-16 bg-slate-900 text-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold mb-4 text-center">
                        All San Diego Service Areas
                    </h2>
                    <p className="text-slate-400 text-center mb-12 max-w-2xl mx-auto">
                        Click any neighborhood to see local services, pricing, and book online.
                    </p>

                    {sortedTypes.map((type) => (
                        <div key={type} className="mb-12 last:mb-0">
                            <div className="flex items-center gap-3 mb-6">
                                <div className="h-px bg-white/20 flex-1"></div>
                                <h3 className="text-xl font-bold text-teal-400 uppercase tracking-wider">{type}</h3>
                                <div className="h-px bg-white/20 flex-1"></div>
                            </div>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                                {locationsByType[type].map((loc) => (
                                    <Link
                                        key={loc.slug}
                                        to={`/location/${loc.slug}`}
                                        className="block p-4 border border-white/10 rounded-lg hover:bg-white/5 hover:border-teal-500/50 transition-all text-center group"
                                    >
                                        <span className="block font-bold text-lg mb-1 group-hover:text-teal-400 transition-colors">
                                            {loc.name}
                                        </span>
                                        {loc.zipCodes?.[0] && (
                                            <span className="text-xs text-slate-400">{loc.zipCodes[0]}</span>
                                        )}
                                    </Link>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* Services Available Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
                        Services Available in All Areas
                    </h2>
                    <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                        The same high-quality cleaning services, customized for your neighborhood's unique homes.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
                        {SERVICES.slice(0, 5).map((service) => (
                            <Link
                                key={service.id}
                                to={`/service/${service.slug}`}
                                className="bg-slate-50 rounded-xl p-6 hover:bg-teal-50 transition-all border border-slate-100 hover:border-teal-200 group"
                            >
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-700 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-slate-600 text-sm mb-4">{service.shortDescription}</p>
                                <ul className="space-y-2">
                                    {service.benefits.slice(0, 3).map((benefit, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-slate-700">
                                            <CheckCircle className="w-4 h-4 text-teal-500 mr-2 flex-shrink-0" />
                                            {benefit}
                                        </li>
                                    ))}
                                </ul>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Local Matters Section */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-8 text-center">
                            Why Our Local Approach Matters
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <Home className="w-8 h-8 text-teal-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">We Know Your Home Type</h3>
                                <p className="text-slate-600">
                                    La Jolla oceanfront estates need different care than Hillcrest Craftsman bungalows.
                                    Our teams are matched to neighborhoods based on their expertise with local home styles.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <MapPin className="w-8 h-8 text-teal-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Local Environmental Factors</h3>
                                <p className="text-slate-600">
                                    Coastal salt air, beach sand, urban dust, pollen from eucalyptus trees—each area
                                    has unique challenges. We bring the right tools and products for your environment.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <Clock className="w-8 h-8 text-teal-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Efficient Scheduling</h3>
                                <p className="text-slate-600">
                                    Our teams are organized by area, which means faster response times, reliable scheduling,
                                    and less time spent in transit—savings we pass on to you.
                                </p>
                            </div>
                            <div className="bg-white rounded-xl p-6 shadow-sm">
                                <Users className="w-8 h-8 text-teal-600 mb-4" />
                                <h3 className="text-xl font-bold text-slate-900 mb-3">Community Connection</h3>
                                <p className="text-slate-600">
                                    Many of our cleaners live in the neighborhoods they serve. They take pride in keeping
                                    their community's homes beautiful and often become trusted, familiar faces.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Coverage Map CTA */}
            <section className="py-16 bg-teal-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
                <div className="container mx-auto px-4 relative z-10 text-center text-white">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-4">
                        Don't See Your Neighborhood?
                    </h2>
                    <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                        We're always expanding our service area. Give us a call—if you're in San Diego County,
                        there's a good chance we can help.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="inline-flex items-center justify-center bg-white text-teal-900 font-bold px-8 py-4 rounded-lg hover:bg-slate-100 transition-all shadow-lg"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            Call {PHONE_NUMBER}
                        </a>
                        <Link
                            to="/booking"
                            className="inline-flex items-center justify-center bg-teal-700 hover:bg-teal-800 text-white font-bold px-8 py-4 rounded-lg transition-all border border-teal-500"
                        >
                            Get an Instant Quote
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* FAQ Schema for "Areas Served" Questions */}
            <script type="application/ld+json" dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                    "@context": "https://schema.org",
                    "@type": "FAQPage",
                    "mainEntity": [
                        {
                            "@type": "Question",
                            "name": "What areas does Metla House Cleaning serve in San Diego?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": `We serve ${LOCATIONS.length}+ neighborhoods across San Diego County, including coastal areas like La Jolla and Pacific Beach, urban neighborhoods like Hillcrest and North Park, and suburban communities like Rancho Santa Fe, Poway, and Scripps Ranch.`
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "Do you offer same-day house cleaning in San Diego?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Yes! We offer same-day cleaning services throughout San Diego County, subject to availability. Call us early in the day for the best chance of same-day scheduling."
                            }
                        },
                        {
                            "@type": "Question",
                            "name": "How much does house cleaning cost in San Diego?",
                            "acceptedAnswer": {
                                "@type": "Answer",
                                "text": "Pricing varies by service type and home size. Standard cleaning starts around $120-$180 for typical homes. Deep cleaning ranges from $200-$400+. Get an instant quote online or call for a custom estimate."
                            }
                        }
                    ]
                })
            }} />
        </div>
    );
};

export default LocationsPage;
