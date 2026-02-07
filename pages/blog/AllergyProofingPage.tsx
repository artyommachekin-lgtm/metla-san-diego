/**
 * Allergy-Proofing Your Home Guide - San Diego
 * URL: /blog/allergy-proofing-your-home
 */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Wind,
    Flower2,
    Shield,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';

const AllergyProofingPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "When is allergy season in San Diego?",
            answer: "San Diego has multiple allergy seasons: tree pollen (January-April), grass pollen (April-June), and weed pollen (August-November). Many residents experience year-round allergies due to our mild climate allowing plants to pollinate throughout the year."
        },
        {
            question: "How often should I change HVAC filters if I have allergies?",
            answer: "Change standard filters monthly, or upgrade to HEPA or high-MERV filters (changed every 3 months). During high pollen periods or Santa Ana winds, check filters more frequently. A clogged filter can't trap allergens effectively."
        },
        {
            question: "Do air purifiers really help with allergies?",
            answer: "Yes, particularly HEPA air purifiers which remove 99.97% of particles 0.3 microns and larger, including pollen, dust mites, and pet dander. Place one in your bedroom for best results—you spend 8 hours there nightly."
        },
        {
            question: "Should I keep windows open or closed for allergies?",
            answer: "Keep windows closed during high pollen counts (typically early morning and evening). Monitor pollen forecasts and enjoy fresh air on low-count days. Consider window screens that filter pollen if you prefer open windows."
        }
    ];

    const allergyTips = [
        {
            category: "Bedding",
            tips: [
                "Wash sheets weekly in hot water (130°F+)",
                "Use allergen-proof mattress and pillow covers",
                "Replace pillows every 1-2 years",
                "Deep clean mattress every 6 months"
            ]
        },
        {
            category: "Flooring",
            tips: [
                "Vacuum 2-3x weekly with HEPA filter vacuum",
                "Use washable rugs instead of wall-to-wall carpet",
                "Mop hard floors weekly to capture settled allergens",
                "Consider removing carpet in bedrooms"
            ]
        },
        {
            category: "Air Quality",
            tips: [
                "Change HVAC filters monthly",
                "Use HEPA air purifiers in bedrooms",
                "Maintain indoor humidity 30-50%",
                "Clean air ducts every 3-5 years"
            ]
        },
        {
            category: "Surfaces",
            tips: [
                "Dust with damp microfiber cloths (dry dusting spreads allergens)",
                "Minimize fabric upholstery and drapes",
                "Clean blinds and shutters weekly",
                "Wipe down hard surfaces frequently"
            ]
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `Allergy-Proofing Your Home | ${COMPANY_NAME}`,
            description: 'Reduce allergens in your home with these cleaning strategies. Tips for managing dust mites, pollen, and pet dander in San Diego homes.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Allergy-Proofing Your Home Through Cleaning"
                description="Comprehensive guide to reducing indoor allergens through smart cleaning practices. Tips for San Diego's year-round allergy seasons."
                slug="allergy-proofing-your-home"
                datePublished="2024-01-21"
                dateModified="2024-01-21"
            />
            <FAQSchema faqs={faqs} />

            {/* Hero */}
            <section className="bg-slate-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <Link to="/blog" className="text-teal-400 hover:text-teal-300 mb-4 inline-block">
                            ← Back to Blog
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Health
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 8 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            Allergy-Proofing Your Home
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Reduce indoor allergens and breathe easier. Cleaning strategies that make a real difference.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 21, 2024</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-slate">

                        {/* Quick Answer Box */}
                        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl my-8 not-prose">
                            <h2 className="font-bold text-green-900 mb-2">Quick Answer</h2>
                            <p className="text-green-800">
                                <strong>The 4 pillars of allergy-proofing:</strong> Control dust (vacuum 2-3x weekly with HEPA filter), protect bedding (allergen-proof covers, hot water washing), improve air quality (HEPA purifiers, fresh HVAC filters), and reduce humidity (30-50% prevents dust mites and mold).
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            San Diego's beautiful weather comes with a catch: our mild climate means plants release pollen nearly year-round. Add dust mites, pet dander, and mold to the mix, and allergy sufferers face challenges inside and out. The good news? Strategic cleaning can dramatically reduce indoor allergens.
                        </p>
                        <p className="text-slate-600 mt-4">
                            The average home contains millions of dust mites, invisible to the naked eye but major allergy triggers. Their waste particles are what cause reactions, and these particles accumulate in bedding, upholstery, and carpet. Here's how to fight back.
                        </p>

                        {/* Stats Box */}
                        <div className="grid grid-cols-3 gap-4 my-8 not-prose">
                            <div className="bg-green-50 p-4 rounded-xl text-center">
                                <Wind className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">99.97%</div>
                                <div className="text-sm text-slate-600">HEPA filter capture</div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl text-center">
                                <Flower2 className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">12 mo</div>
                                <div className="text-sm text-slate-600">SD pollen season</div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl text-center">
                                <Shield className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">130°F</div>
                                <div className="text-sm text-slate-600">Kills dust mites</div>
                            </div>
                        </div>

                        {/* Allergy Tips by Category */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Allergy Reduction by Area
                        </h2>

                        <div className="space-y-6 my-8 not-prose">
                            {allergyTips.map((section, index) => (
                                <div key={index} className="p-6 bg-slate-50 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-4 text-lg">{section.category}</h3>
                                    <ul className="space-y-2">
                                        {section.tips.map((tip, tipIndex) => (
                                            <li key={tipIndex} className="flex items-start gap-2 text-slate-700">
                                                <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                                <span>{tip}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* San Diego-Specific */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Allergy Challenges
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                                <Flower2 className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Year-Round Pollen</h3>
                                    <p className="text-slate-600 text-sm">Unlike regions with true winters, San Diego has overlapping pollen seasons. Trees (January-April), grass (April-June), weeds (August-November). Some residents experience symptoms year-round.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                                <Wind className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Santa Ana Winds</h3>
                                    <p className="text-slate-600 text-sm">These dry, dusty winds blow pollen and allergens everywhere, including into your home. Keep windows closed during Santa Ana events and dust/vacuum after winds subside.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-amber-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Coastal Humidity</h3>
                                    <p className="text-slate-600 text-sm">Near the coast, humidity supports dust mite and mold growth. Use a dehumidifier to maintain 30-50% humidity. Bathroom exhaust fans are essential to prevent mold.</p>
                                </div>
                            </div>
                        </div>

                        {/* Cleaning Schedule */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Allergy-Focused Cleaning Schedule
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Vacuum high-traffic areas</span>
                                    <span className="text-green-600 font-bold">Every 2-3 days</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Wash bedding (hot water)</span>
                                    <span className="text-green-600 font-bold">Weekly</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Dust all surfaces (damp cloth)</span>
                                    <span className="text-green-600 font-bold">Weekly</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Check/change HVAC filters</span>
                                    <span className="text-green-600 font-bold">Monthly</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Deep clean mattress</span>
                                    <span className="text-green-600 font-bold">Every 6 months</span>
                                </div>
                            </div>
                        </div>

                        {/* Product Recommendations */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Essential Allergy-Fighting Tools
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <ul className="space-y-2">
                                {[
                                    "HEPA vacuum cleaner (sealed system)",
                                    "HEPA air purifier for bedroom",
                                    "Allergen-proof mattress and pillow encasements",
                                    "Microfiber cleaning cloths",
                                    "Hygrometer (to monitor humidity)",
                                    "High-MERV HVAC filters (MERV 11+)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700">
                                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* FAQ Section */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-6">
                            Frequently Asked Questions
                        </h2>
                        <div className="space-y-4 my-6 not-prose">
                            {faqs.map((faq, index) => (
                                <div key={index} className="p-4 bg-slate-50 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-2">{faq.question}</h3>
                                    <p className="text-slate-600 text-sm">{faq.answer}</p>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="bg-teal-600 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <Shield className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">Deep Clean for Allergy Relief</h3>
                            <p className="text-teal-100 mb-6">
                                Our deep cleaning service removes allergens from every surface—perfect for a fresh start. We can focus on high-priority areas like bedrooms and living spaces.
                            </p>
                            <Link
                                to="/service/deep-cleaning"
                                className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                            >
                                Learn About Deep Cleaning
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default AllergyProofingPage;
