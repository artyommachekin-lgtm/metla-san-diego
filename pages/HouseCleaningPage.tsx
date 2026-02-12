/**
 * House Cleaning Page - San Diego
 * Fully localized for San Diego County
 */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Sparkles,
    Home,
    Building2,
    Plane,
    Hammer,
    ArrowRight,
    CheckCircle,
    MapPin,
    Clock,
    Shield,
    Star,
    Phone
} from 'lucide-react';
import { SERVICES, LOCATIONS, COMPANY_NAME, PHONE_NUMBER } from '../constants';
import { SITE_CONFIG } from '../src/config/site-config';
import { updatePageSEO, resetSEO } from '../utils/seo';
import FAQSchema, { FAQItem } from '../components/FAQSchema';
import { BLOG_POSTS } from './BlogPage';

const HouseCleaningPage: React.FC = () => {
    const location = useLocation();

    // FAQ data for schema and display
    const faqs: FAQItem[] = [
        {
            question: "What is the average cost of house cleaning in San Diego?",
            answer: "House cleaning prices in San Diego typically range from $120 to $350 depending on home size, cleaning type, and frequency. Standard maintenance cleaning starts around $120-180 for a 2-bedroom home, while deep cleaning services range from $200-400. Metla House Cleaning provides free quotes tailored to your specific needs."
        },
        {
            question: "What's included in a standard house cleaning?",
            answer: "Our standard house cleaning includes dusting all surfaces, vacuuming and mopping floors, cleaning and sanitizing bathrooms, kitchen cleaning including countertops and appliances, making beds, and emptying trash. We follow a comprehensive 50-point checklist to ensure consistent quality."
        },
        {
            question: "How often should I have my house professionally cleaned?",
            answer: "For most households, weekly or bi-weekly cleaning maintains optimal cleanliness. Homes with pets, children, or allergies benefit from weekly service. Monthly deep cleaning is recommended for well-maintained homes. We'll help you determine the right frequency during your consultation."
        },
        {
            question: "Are your house cleaners insured and background checked?",
            answer: "Yes, all Metla House Cleaning professionals are fully insured and undergo comprehensive background checks. We only hire 1 in 50 applicants, ensuring you receive service from vetted, trustworthy professionals."
        },
        {
            question: "Can I leave my house while the cleaners are working?",
            answer: "Absolutely! Many of our clients provide access through lockboxes, smart locks, or doormen so they don't need to be present. Our insured and background-checked cleaners can work independently while you're at work, running errands, or simply relaxing elsewhere. We'll update you when we arrive and send a completion notification when finished."
        },
        {
            question: "What areas in San Diego do you serve?",
            answer: "Metla House Cleaning serves all of San Diego County including La Jolla, Pacific Beach, Coronado, Del Mar, Encinitas, Carlsbad, Downtown San Diego, Hillcrest, North Park, Mission Valley, and surrounding communities."
        },
        {
            question: "How do I book a house cleaning service?",
            answer: `Booking is easy! Simply visit our online booking page to request a quote in 60 seconds, or call us at ${PHONE_NUMBER}. We'll discuss your needs, provide a transparent quote, and schedule your cleaning at a convenient time.`
        },
        {
            question: "What's the difference between standard cleaning and deep cleaning?",
            answer: "Standard cleaning maintains your home's cleanliness with regular surface cleaning. Deep cleaning is a comprehensive, intensive service that addresses areas often missed—inside appliances, behind furniture, baseboards, light fixtures, and detailed sanitization. We recommend deep cleaning for first-time clients or homes that haven't been professionally cleaned recently."
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `House Cleaning San Diego | ${COMPANY_NAME}`,
            description: 'Premium house cleaning services in San Diego, La Jolla, Pacific Beach & Coronado. Standard cleaning, deep cleaning, move-in/out & vacation rental turnover. Insured professionals. Book online today!',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    const serviceIcons: { [key: string]: React.ElementType } = {
        'standard-cleaning': Sparkles,
        'deep-cleaning': Home,
        'move-in-out-cleaning': Building2,
        'vacation-rental-cleaning-airbnb': Plane,
        'post-construction-cleaning': Hammer,
    };

    const baseUrl = SITE_CONFIG.baseUrl;

    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${baseUrl}/house-cleaning#service`,
        "name": "House Cleaning Services in San Diego",
        "description": "Premium house cleaning services in San Diego County. Standard cleaning, deep cleaning, move-in/out cleaning, vacation rental turnovers, and post-construction cleaning.",
        "url": `${baseUrl}/house-cleaning`,
        "provider": {
            "@type": "LocalBusiness",
            "@id": `${baseUrl}/#organization`,
            "name": SITE_CONFIG.companyName
        },
        "areaServed": {
            "@type": "State",
            "name": SITE_CONFIG.address.stateFullName,
            "containsPlace": [
                { "@type": "City", "name": "San Diego" },
                { "@type": "City", "name": "La Jolla" },
                { "@type": "City", "name": "Pacific Beach" },
                { "@type": "City", "name": "Coronado" }
            ]
        },
        "serviceType": "House Cleaning",
        "category": "House Cleaning",
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": `${baseUrl}/booking`,
            "servicePhone": SITE_CONFIG.phoneIntl,
            "serviceSmsNumber": SITE_CONFIG.phoneIntl
        },
        "termsOfService": `${baseUrl}/policies`,
        "offers": {
            "@type": "AggregateOffer",
            "priceCurrency": "USD",
            "lowPrice": "120",
            "highPrice": "600",
            "offerCount": "5",
            "availability": "https://schema.org/InStock"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "House Cleaning Services",
            "itemListElement": SERVICES.map((service, index) => ({
                "@type": "Offer",
                "position": index + 1,
                "itemOffered": {
                    "@type": "Service",
                    "name": service.title,
                    "url": `${baseUrl}/service/${service.slug}`,
                    "description": service.shortDescription
                }
            }))
        },
        "potentialAction": {
            "@type": "ReserveAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${baseUrl}/booking`,
                "actionPlatform": [
                    "https://schema.org/DesktopWebPlatform",
                    "https://schema.org/MobileWebPlatform"
                ]
            },
            "result": {
                "@type": "Reservation",
                "name": "Book a Cleaning"
            }
        }
    };

    return (
        <div className="bg-white min-h-screen">
            <FAQSchema faqs={faqs} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema, null, 2) }}
            />

            {/* Hero Section */}
            <section className="bg-slate-900 text-white pt-32 pb-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="flex items-center justify-center gap-2 mb-6">
                            <div className="flex text-yellow-400">
                                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                            </div>
                            <span className="text-slate-300">4.9/5 Rating • 127+ Reviews</span>
                        </div>
                        <h1 className="text-4xl md:text-6xl font-serif font-bold mb-6">
                            Professional House Cleaning Services in San Diego
                        </h1>
                        <p className="text-xl text-slate-300 mb-8 max-w-3xl mx-auto">
                            From routine maintenance to deep cleaning, Metla House Cleaning delivers hospitality-grade service to homes across San Diego County. Fully insured, background-checked professionals you can trust.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link
                                to="/booking"
                                className="inline-flex items-center justify-center px-8 py-4 bg-teal-500 hover:bg-teal-400 text-white font-bold rounded transition-colors"
                            >
                                Get a Free Quote
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

            {/* Introduction Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto prose prose-lg">

                        {/* Quick Answer Box for AI/GEO */}
                        <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8 not-prose">
                            <h2 className="text-lg font-bold text-teal-800 mb-2">Quick Answer</h2>
                            <p className="text-slate-700">
                                <strong>House cleaning in San Diego</strong> costs $120-$350 depending on home size and service type.
                                Standard maintenance cleaning runs $120-180 for a 2-bedroom home, while deep cleaning ranges from $200-400.
                                Professional cleaning saves homeowners 5-7 hours weekly and reduces indoor allergens by up to 60%.
                                Metla House Cleaning serves all of San Diego County with fully insured, background-checked professionals.
                            </p>
                        </div>

                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-6">
                            Why Choose Professional House Cleaning?
                        </h2>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            In today's busy world, maintaining a clean home can feel like an endless task. Between work, family, and personal commitments, finding time to deep clean your living space often falls to the bottom of the priority list. That's where professional house cleaning services make all the difference.
                        </p>

                        {/* Statistics Box for AI/GEO */}
                        <div className="bg-slate-100 p-6 rounded-xl my-8 not-prose">
                            <h3 className="text-lg font-bold text-slate-900 mb-4">The Data Behind Clean Homes</h3>
                            <ul className="space-y-3 text-slate-700">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span><strong>78% of homeowners</strong> report feeling less stressed in a clean home <em>(American Cleaning Institute)</em></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span>Indoor air can be <strong>2-5 times more polluted</strong> than outdoor air <em>(EPA)</em></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span>Professional cleaning reduces allergens by <strong>up to 60%</strong> <em>(AAFA)</em></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span>San Diego averages <strong>266 sunny days</strong> per year, meaning dust accumulates faster and shows more clearly</span>
                                </li>
                            </ul>
                        </div>

                        <p className="text-slate-600 leading-relaxed mb-6">
                            At Metla House Cleaning, we understand that your home is your sanctuary. Founded by former property managers who spent years perfecting cleaning protocols for luxury vacation rentals and high-end residential properties, we bring hospitality-industry standards to every home we service. Our team doesn't just clean—we restore the pristine condition your living space deserves.
                        </p>
                        <p className="text-slate-600 leading-relaxed mb-6">
                            Whether you're a busy professional in Downtown San Diego, a family in Del Mar, or a vacation rental owner in Pacific Beach, our comprehensive house cleaning services are designed to exceed your expectations. We serve clients throughout San Diego County, bringing the same meticulous attention to detail to every home, every time.
                        </p>
                    </div>
                </div>
            </section>

            {/* Pricing Section for AI/GEO */}
            <section className="py-16 bg-teal-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
                            House Cleaning Prices in San Diego (2026)
                        </h2>
                        <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
                            Transparent pricing for professional house cleaning services. Actual costs vary by home size, condition, and specific requirements.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full bg-white rounded-xl overflow-hidden shadow-sm">
                                <thead className="bg-slate-900 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-bold">Service Type</th>
                                        <th className="px-6 py-4 text-left font-bold">Price Range</th>
                                        <th className="px-6 py-4 text-left font-bold">Duration</th>
                                        <th className="px-6 py-4 text-left font-bold">Best For</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-medium text-slate-900">Standard Cleaning</td>
                                        <td className="px-6 py-4 text-teal-600 font-bold">$120 - $180</td>
                                        <td className="px-6 py-4 text-slate-600">2-3 hours</td>
                                        <td className="px-6 py-4 text-slate-600">Weekly/bi-weekly maintenance</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-medium text-slate-900">Deep Cleaning</td>
                                        <td className="px-6 py-4 text-teal-600 font-bold">$200 - $400</td>
                                        <td className="px-6 py-4 text-slate-600">4-8 hours</td>
                                        <td className="px-6 py-4 text-slate-600">First-time or quarterly reset</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-medium text-slate-900">Move-In/Out Cleaning</td>
                                        <td className="px-6 py-4 text-teal-600 font-bold">$250 - $500</td>
                                        <td className="px-6 py-4 text-slate-600">5-10 hours</td>
                                        <td className="px-6 py-4 text-slate-600">Empty properties, lease turnovers</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-medium text-slate-900">Vacation Rental Turnover</td>
                                        <td className="px-6 py-4 text-teal-600 font-bold">$100 - $200</td>
                                        <td className="px-6 py-4 text-slate-600">2-4 hours</td>
                                        <td className="px-6 py-4 text-slate-600">Airbnb/VRBO between guests</td>
                                    </tr>
                                    <tr className="hover:bg-slate-50">
                                        <td className="px-6 py-4 font-medium text-slate-900">Post-Construction</td>
                                        <td className="px-6 py-4 text-teal-600 font-bold">$300 - $600</td>
                                        <td className="px-6 py-4 text-slate-600">6-12 hours</td>
                                        <td className="px-6 py-4 text-slate-600">After renovation/construction</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <p className="text-center text-slate-500 text-sm mt-4">
                            *Prices based on 2-3 bedroom home. Larger homes and special requests may vary.{' '}
                            <Link to="/booking" className="text-teal-600 hover:underline font-medium">Get a personalized quote →</Link>
                        </p>
                    </div>
                </div>
            </section>

            {/* Comparison Section for AI/GEO */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
                            Deep Cleaning vs Standard Cleaning: Which Do You Need?
                        </h2>
                        <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
                            Understanding the difference helps you choose the right service for your home.
                        </p>

                        <div className="overflow-x-auto">
                            <table className="w-full bg-slate-50 rounded-xl overflow-hidden">
                                <thead className="bg-teal-600 text-white">
                                    <tr>
                                        <th className="px-6 py-4 text-left font-bold">Feature</th>
                                        <th className="px-6 py-4 text-center font-bold">Standard Cleaning</th>
                                        <th className="px-6 py-4 text-center font-bold">Deep Cleaning</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-200">
                                    <tr>
                                        <td className="px-6 py-3 font-medium text-slate-900">Duration</td>
                                        <td className="px-6 py-3 text-center text-slate-600">2-3 hours</td>
                                        <td className="px-6 py-3 text-center text-slate-600">4-8 hours</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 font-medium text-slate-900">Surface dusting</td>
                                        <td className="px-6 py-3 text-center text-teal-600">✓</td>
                                        <td className="px-6 py-3 text-center text-teal-600">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 font-medium text-slate-900">Vacuuming & mopping</td>
                                        <td className="px-6 py-3 text-center text-teal-600">✓</td>
                                        <td className="px-6 py-3 text-center text-teal-600">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 font-medium text-slate-900">Bathroom sanitization</td>
                                        <td className="px-6 py-3 text-center text-teal-600">✓</td>
                                        <td className="px-6 py-3 text-center text-teal-600">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 font-medium text-slate-900">Baseboards & door frames</td>
                                        <td className="px-6 py-3 text-center text-slate-400">—</td>
                                        <td className="px-6 py-3 text-center text-teal-600">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 font-medium text-slate-900">Inside microwave/oven</td>
                                        <td className="px-6 py-3 text-center text-slate-400">—</td>
                                        <td className="px-6 py-3 text-center text-teal-600">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 font-medium text-slate-900">Ceiling fans & light fixtures</td>
                                        <td className="px-6 py-3 text-center text-slate-400">—</td>
                                        <td className="px-6 py-3 text-center text-teal-600">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 font-medium text-slate-900">Cabinet fronts</td>
                                        <td className="px-6 py-3 text-center text-slate-400">—</td>
                                        <td className="px-6 py-3 text-center text-teal-600">✓</td>
                                    </tr>
                                    <tr>
                                        <td className="px-6 py-3 font-medium text-slate-900">Window sills & blinds</td>
                                        <td className="px-6 py-3 text-center text-slate-400">—</td>
                                        <td className="px-6 py-3 text-center text-teal-600">✓</td>
                                    </tr>
                                    <tr className="bg-teal-50">
                                        <td className="px-6 py-3 font-bold text-slate-900">Best for</td>
                                        <td className="px-6 py-3 text-center text-slate-700 font-medium">Maintenance</td>
                                        <td className="px-6 py-3 text-center text-slate-700 font-medium">Reset / First-time</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <div className="mt-8 p-6 bg-slate-100 rounded-xl">
                            <h3 className="font-bold text-slate-900 mb-2">💡 Our Recommendation</h3>
                            <p className="text-slate-600">
                                If your home hasn't been professionally cleaned in the last 30 days, start with a <strong>Deep Cleaning</strong> to reset your baseline,
                                then switch to <strong>Standard Cleaning</strong> on a weekly or bi-weekly schedule to maintain pristine conditions effortlessly.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
                            Our House Cleaning Services
                        </h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            From routine maintenance to specialized deep cleaning, we offer a complete range of residential cleaning services tailored to your needs.
                        </p>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            {SERVICES.map((service) => {
                                const IconComponent = serviceIcons[service.slug] || Sparkles;
                                return (
                                    <Link
                                        key={service.slug}
                                        to={`/service/${service.slug}`}
                                        className="bg-white p-6 rounded-xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all group"
                                    >
                                        <div className="flex items-start gap-4">
                                            <div className="p-3 bg-teal-50 rounded-lg group-hover:bg-teal-500 transition-colors">
                                                <IconComponent className="w-6 h-6 text-teal-600 group-hover:text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-teal-600 transition-colors">
                                                    {service.title}
                                                </h3>
                                                <p className="text-slate-600 text-sm mb-3">
                                                    {service.shortDescription}
                                                </p>
                                                <span className="text-teal-600 font-medium text-sm inline-flex items-center">
                                                    Learn more <ArrowRight className="ml-1 w-4 h-4" />
                                                </span>
                                            </div>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                    </div>
                </div>
            </section>

            {/* What Sets Us Apart */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
                            What Sets Metla House Cleaning Apart
                        </h2>

                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                            <div className="text-center">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Shield className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Fully Insured</h3>
                                <p className="text-slate-600">
                                    Full liability coverage protects you and your property. Clean with complete peace of mind.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <CheckCircle className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Background Checked</h3>
                                <p className="text-slate-600">
                                    Every cleaner passes comprehensive background screening. Only 1 in 50 applicants joins our team.
                                </p>
                            </div>
                            <div className="text-center">
                                <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    <Clock className="w-8 h-8 text-teal-600" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">Reliable Service</h3>
                                <p className="text-slate-600">
                                    We never cancel. Our backup team protocol ensures your cleaning happens, no matter what.
                                </p>
                            </div>
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                                The 50-Point Cleaning Protocol
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Unlike typical house cleaning services, Metla House Cleaning follows a comprehensive 50-point cleaning protocol developed from years of experience managing luxury vacation properties. This systematic approach ensures no detail is overlooked, from the obvious areas to the often-forgotten spots that accumulate dust and grime.
                            </p>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Our checklist covers everything: light switches, door handles, baseboards, ceiling fans, behind toilets, under furniture edges, inside microwave doors, refrigerator handles, and dozens of other touch points that standard cleaners miss. This attention to detail is what transforms a clean home into a truly pristine living environment.
                            </p>

                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                                Trained Cleaning Professionals
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                Every Metla cleaner undergoes extensive training in our proprietary methods, eco-friendly product usage, and customer service standards. We don't just hire cleaners—we develop cleaning professionals who take pride in their craft. Our rigorous selection process means you're getting the top 2% of cleaning talent in San Diego.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                We also invest in ongoing training, ensuring our team stays current with the latest cleaning techniques, products, and equipment. Whether it's properly caring for marble countertops, treating hardwood floors, or sanitizing high-touch surfaces, our cleaners have the expertise to handle any challenge your home presents.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Service Areas */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
                            House Cleaning Service Areas
                        </h2>
                        <p className="text-slate-600 text-center mb-12 max-w-2xl mx-auto">
                            We proudly serve homes throughout San Diego County, from the coastal communities of La Jolla and Coronado to the inland neighborhoods of Poway and Rancho Bernardo.
                        </p>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                            {LOCATIONS.map((loc) => (
                                <Link
                                    key={loc.slug}
                                    to={`/location/${loc.slug}`}
                                    className="flex items-center gap-2 p-3 bg-white rounded-lg border border-slate-200 hover:border-teal-300 hover:bg-teal-50 transition-all"
                                >
                                    <MapPin className="w-4 h-4 text-teal-600 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium text-sm">{loc.name}</span>
                                </Link>
                            ))}
                        </div>

                        <div className="prose prose-lg max-w-none">
                            <h3 className="text-2xl font-serif font-bold text-slate-900 mb-4">
                                Local Expertise, Premium Service
                            </h3>
                            <p className="text-slate-600 leading-relaxed mb-6">
                                San Diego's diverse neighborhoods each have their own character—and their own cleaning challenges. The salt air in La Jolla and Pacific Beach requires different care than the inland dust of Poway and Rancho Bernardo. The high-rise living of Downtown demands different logistics than single-family homes in Del Mar. Our team understands these nuances because we're locals who've cleaned hundreds of homes across every community we serve.
                            </p>
                            <p className="text-slate-600 leading-relaxed">
                                Whether you're in a beachfront condo in Coronado, a historic home in Mission Hills, or a modern townhouse in Carmel Valley, we bring the same commitment to excellence. Our cleaners are familiar with building access procedures, parking requirements, and the specific needs of different property types throughout San Diego County.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Section */}
            <section className="py-16 bg-white">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-12 text-center">
                            Frequently Asked Questions About House Cleaning
                        </h2>

                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="bg-slate-50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-slate-900 mb-3">
                                        {faq.question}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed">
                                        {faq.answer}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Helpful Cleaning Guides */}
            <section className="py-16 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-3xl font-serif font-bold text-slate-900 mb-4 text-center">
                            Helpful Cleaning Guides
                        </h2>
                        <p className="text-slate-600 text-center mb-8 max-w-2xl mx-auto">
                            Expert tips and advice from our San Diego cleaning professionals.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                'deep-cleaning-guide-san-diego',
                                'how-much-does-a-deep-house-cleaning-cost',
                                'benefits-of-regular-cleaning-service',
                                'weekly-cleaning-schedule-guide',
                            ].map((blogSlug) => {
                                const post = BLOG_POSTS.find(p => p.slug === blogSlug);
                                if (!post) return null;
                                return (
                                    <Link
                                        key={post.slug}
                                        to={`/blog/${post.slug}`}
                                        className="flex items-start gap-3 p-4 bg-white border border-slate-200 rounded-xl hover:border-teal-300 hover:bg-teal-50 transition-colors group"
                                    >
                                        <ArrowRight className="w-4 h-4 text-teal-500 flex-shrink-0 mt-1" />
                                        <div>
                                            <h3 className="font-semibold text-slate-900 group-hover:text-teal-600 transition-colors text-sm">{post.title}</h3>
                                            <p className="text-xs text-slate-500 mt-0.5">{post.readTime}</p>
                                        </div>
                                    </Link>
                                );
                            })}
                        </div>
                        <div className="text-center mt-6">
                            <Link to="/blog" className="inline-flex items-center text-teal-700 font-medium hover:text-teal-800 transition-colors">
                                View All Cleaning Guides <ArrowRight className="ml-1 w-4 h-4" />
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-teal-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                        Ready for a Cleaner Home?
                    </h2>
                    <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                        Join hundreds of San Diego families who trust Metla House Cleaning. Get your free quote in 60 seconds.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/booking"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                        >
                            Book Your Cleaning Today
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 rounded transition-colors"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            {PHONE_NUMBER}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HouseCleaningPage;
