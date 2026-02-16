'use client';
/**
 * Deep Cleaning Cost Guide - San Diego
 * URL: /how-much-does-a-deep-house-cleaning-cost/
 */
import React from 'react';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    DollarSign,
    Home,
    MapPin,
    Calculator,
    TrendingUp
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, LOCATIONS } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';

const DeepCleaningCostPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "How much does deep cleaning cost in San Diego?",
            answer: "Deep cleaning in San Diego typically costs $200-$400 for a standard 2-3 bedroom home. Prices range from $200-$300 for apartments, $300-$450 for single-family homes, and $400-$600+ for large homes over 3,000 sq ft. Factors include home size, condition, and specific services needed."
        },
        {
            question: "Is deep cleaning worth the cost?",
            answer: "Yes, for most homeowners. Deep cleaning addresses areas missed in regular cleaning, improves air quality, and 'resets' your home for easier maintenance. It's especially valuable before moving, after illness, or when regular cleaning has fallen behind. The average San Diego homeowner saves 8-12 hours of their own time."
        },
        {
            question: "How much do house cleaners charge per hour in San Diego?",
            answer: "San Diego house cleaners typically charge $35-$55 per hour per cleaner. However, most deep cleaning services quote flat rates based on home size and condition rather than hourly, which protects you from unexpected costs if the job takes longer."
        },
        {
            question: "Why is deep cleaning more expensive than regular cleaning?",
            answer: "Deep cleaning takes 2-3x longer than standard cleaning because it addresses baseboards, ceiling fans, blinds, light fixtures, and other areas not covered in routine maintenance. Add-ons like inside appliances (oven, refrigerator) are available for an additional fee. It requires more cleaning products and often uses specialty equipment."
        }
    ];

    const pricingTiers = [
        {
            type: "Studio/1-Bedroom",
            sqft: "Under 800 sq ft",
            priceRange: "$150 - $250",
            timeRange: "2-3 hours",
            notes: "Typical San Diego condo or apartment"
        },
        {
            type: "2-Bedroom",
            sqft: "800-1,200 sq ft",
            priceRange: "$200 - $300",
            timeRange: "3-4 hours",
            notes: "Standard apartment or small home"
        },
        {
            type: "3-Bedroom",
            sqft: "1,200-2,000 sq ft",
            priceRange: "$300 - $400",
            timeRange: "4-6 hours",
            notes: "Typical single-family home"
        },
        {
            type: "4-Bedroom",
            sqft: "2,000-3,000 sq ft",
            priceRange: "$400 - $500",
            timeRange: "5-7 hours",
            notes: "Larger family home"
        },
        {
            type: "5+ Bedroom / Estate",
            sqft: "3,000+ sq ft",
            priceRange: "$500 - $800+",
            timeRange: "6-10 hours",
            notes: "Large homes, custom quotes"
        }
    ];

    const pricingFactors = [
        { factor: "Home Condition", impact: "Up to +50%", description: "Heavily soiled or previously neglected homes cost more" },
        { factor: "Number of Bathrooms", impact: "+$25-50 each", description: "Additional bathrooms add time and complexity" },
        { factor: "Pets", impact: "+10-20%", description: "Pet hair, dander, and odor removal adds labor" },
        { factor: "Kitchen Appliances", impact: "+$20-50 each", description: "Inside oven or refrigerator cleaning (add-on services)" },
        { factor: "Windows (interior)", impact: "+$5-10 each", description: "Detailed window cleaning beyond basic wipe-down" },
        { factor: "Frequency Discount", impact: "-10-15%", description: "Recurring customers typically receive discounts" }
    ];

    const featuredLocations = LOCATIONS.slice(0, 6);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How Much Does Deep House Cleaning Cost in San Diego? (2024 Pricing Guide)"
                description="Complete guide to deep cleaning prices in San Diego. See costs by home size, factors that affect pricing, and how to get the best value."
                slug="how-much-does-a-deep-house-cleaning-cost"
                datePublished="2024-01-10"
                dateModified="2024-12-15"
            />
            <FAQSchema faqs={faqs} />

            {/* Hero */}
            <section className="bg-slate-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <Link href="/blog" className="text-teal-400 hover:text-teal-300 mb-4 inline-block">
                            ← Back to Blog
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-teal-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Pricing Guide
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 8 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            How Much Does Deep House Cleaning Cost in San Diego?
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Complete 2024 pricing guide for San Diego homeowners. See what to expect, what affects cost, and how to get the best value.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Updated December 15, 2024</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-slate">

                        {/* Quick Answer Box */}
                        <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8 not-prose">
                            <h2 className="text-lg font-bold text-teal-800 mb-2">Quick Answer</h2>
                            <p className="text-slate-700">
                                <strong>Deep cleaning in San Diego costs $200-$400</strong> for a typical 2-3 bedroom home. Studios and 1-bedrooms run $150-$250, while larger homes (4+ bedrooms) cost $400-$800+. Prices vary based on home condition, number of bathrooms, pets, and specific services requested. Most companies quote flat rates rather than hourly to protect you from unexpected costs.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Whether you're preparing for guests, moving into a new home, or simply overdue for a thorough cleaning, knowing what deep cleaning costs in San Diego helps you budget appropriately and avoid sticker shock.
                        </p>
                        <p className="text-slate-600">
                            Deep cleaning costs more than regular maintenance cleaning because it's far more comprehensive. Where a standard clean takes 2-3 hours and focuses on visible surfaces, deep cleaning runs 4-8 hours and addresses baseboards, ceiling fans, blinds, light fixtures, and all those neglected nooks and crannies. Inside appliances like the oven and refrigerator are available as add-ons.
                        </p>
                        <p className="text-slate-600">
                            Let's break down what you can expect to pay in San Diego, what factors affect pricing, and how to get the best value for your money.
                        </p>

                        {/* Pricing Table */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Deep Cleaning Prices by Home Size
                        </h2>

                        <div className="overflow-x-auto my-6 not-prose">
                            <table className="w-full bg-white border border-slate-200 rounded-xl overflow-hidden">
                                <thead className="bg-slate-900 text-white">
                                    <tr>
                                        <th className="px-4 py-3 text-left font-bold">Home Size</th>
                                        <th className="px-4 py-3 text-left font-bold">Sq Ft</th>
                                        <th className="px-4 py-3 text-left font-bold">Price Range</th>
                                        <th className="px-4 py-3 text-left font-bold">Time</th>
                                    </tr>
                                </thead>
                                <tbody className="divide-y divide-slate-100">
                                    {pricingTiers.map((tier, idx) => (
                                        <tr key={idx} className="hover:bg-slate-50">
                                            <td className="px-4 py-3 font-medium text-slate-900">{tier.type}</td>
                                            <td className="px-4 py-3 text-slate-600">{tier.sqft}</td>
                                            <td className="px-4 py-3 text-teal-600 font-bold">{tier.priceRange}</td>
                                            <td className="px-4 py-3 text-slate-600">{tier.timeRange}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        <p className="text-slate-500 text-sm">
                            *Prices reflect 2024 San Diego market rates based on average home conditions. Actual quotes may vary.
                        </p>

                        {/* What Affects Price */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            What Affects Deep Cleaning Price?
                        </h2>
                        <p className="text-slate-600">
                            Square footage is the starting point, but several factors can adjust your final quote:
                        </p>

                        <div className="space-y-4 my-6">
                            {pricingFactors.map((item, idx) => (
                                <div key={idx} className="flex items-start gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="bg-teal-100 p-2 rounded-lg flex-shrink-0">
                                        <Calculator className="w-5 h-5 text-teal-600" />
                                    </div>
                                    <div>
                                        <div className="flex items-center gap-3 mb-1">
                                            <h3 className="font-bold text-slate-900">{item.factor}</h3>
                                            <span className="text-xs font-bold text-teal-600 bg-teal-100 px-2 py-0.5 rounded">{item.impact}</span>
                                        </div>
                                        <p className="text-slate-600 text-sm">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* San Diego Market Context */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Cleaning Costs vs. Other Cities
                        </h2>
                        <p className="text-slate-600">
                            San Diego's cleaning costs fall in the middle-to-upper range for major California cities:
                        </p>

                        <div className="bg-slate-50 p-6 rounded-xl my-6 not-prose">
                            <div className="flex items-center gap-3 mb-4">
                                <TrendingUp className="w-6 h-6 text-teal-600" />
                                <h3 className="font-bold text-slate-900">Deep Cleaning Market Comparison</h3>
                            </div>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex justify-between"><span>San Francisco Bay Area</span><span className="font-bold">$350-$550</span></li>
                                <li className="flex justify-between"><span>Los Angeles</span><span className="font-bold">$250-$450</span></li>
                                <li className="flex justify-between text-teal-600"><span><strong>San Diego</strong></span><span className="font-bold">$200-$400</span></li>
                                <li className="flex justify-between"><span>Sacramento</span><span className="font-bold">$175-$350</span></li>
                                <li className="flex justify-between"><span>Phoenix</span><span className="font-bold">$150-$300</span></li>
                            </ul>
                            <p className="text-slate-500 text-sm mt-4">
                                *Ranges represent typical costs for a 3-bedroom home in average condition.
                            </p>
                        </div>

                        <p className="text-slate-600">
                            Our relatively higher costs reflect San Diego's cost of living, labor market, and high demand for cleaning services—especially in beach communities and affluent neighborhoods like La Jolla, Coronado, and Rancho Santa Fe.
                        </p>

                        {/* What's Included */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            What's Included in Deep Cleaning?
                        </h2>
                        <p className="text-slate-600">
                            Deep cleaning goes far beyond standard maintenance. Here's what a quality deep clean should include:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                            <div className="bg-slate-50 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-900 mb-3">Standard Deep Clean Includes:</h3>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        All standard cleaning tasks
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Appliance exteriors (fridge, oven, dishwasher)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Microwave cleaned inside and out
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Baseboards and door frames
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Ceiling fans and light fixtures
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Window sills and blinds
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Detailed bathroom sanitization
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-teal-50 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-900 mb-3">Available Add-On Services:</h3>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <DollarSign className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Inside oven cleaning ($20-40)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <DollarSign className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Inside refrigerator ($20-50)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <DollarSign className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Interior windows ($5-10 each)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <DollarSign className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Inside cabinets/closets ($25-50)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <DollarSign className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Wall washing ($50-100)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <DollarSign className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Garage cleaning ($75-150)
                                    </li>
                                </ul>
                            </div>
                        </div>

                        {/* How to Get Best Value */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            How to Get the Best Value
                        </h2>
                        <ul className="text-slate-600 space-y-3 my-4">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Get multiple quotes:</strong> Compare at least 3 companies. Beware quotes significantly below market—they often mean cutting corners.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Ask about recurring discounts:</strong> Many companies offer 10-15% off if you book recurring service after your deep clean.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Verify insurance:</strong> Cheap services often lack proper insurance. Ask for proof of liability coverage.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Declutter first:</strong> Reducing clutter before cleaners arrive means they spend time cleaning, not organizing.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Communicate priorities:</strong> Let your cleaner know which areas matter most to ensure those get proper attention.</span>
                            </li>
                        </ul>

                        {/* FAQ Section */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-6">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4 my-6">
                            {faqs.map((faq, index) => (
                                <div key={index} className="p-4 bg-slate-50 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="bg-teal-600 text-white p-8 rounded-xl my-10 text-center">
                            <h3 className="text-2xl font-bold mb-3">Get Your Free Deep Cleaning Quote</h3>
                            <p className="text-teal-100 mb-6">
                                {COMPANY_NAME} provides transparent, flat-rate quotes with no hidden fees. Fully insured, background-checked professionals serving all San Diego neighborhoods.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/booking"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                                >
                                    Get a Free Quote
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link
                                    href="/service/deep-cleaning"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                                >
                                    Learn About Deep Cleaning
                                </Link>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="how-much-does-a-deep-house-cleaning-cost" />

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-4">Deep Cleaning Services in San Diego</h3>
                            <div className="flex flex-wrap gap-2">
                                {featuredLocations.map((loc) => (
                                    <Link
                                        key={loc.slug}
                                        href={`/location/${loc.slug}`}
                                        className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors"
                                    >
                                        <MapPin className="w-3 h-3" /> {loc.name}
                                    </Link>
                                ))}
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default DeepCleaningCostPage;
