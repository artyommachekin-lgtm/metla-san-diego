/**
 * Upholstery Deep Cleaning Guide - San Diego
 * URL: /blog/how-to-deep-clean-and-sanitize-upholstered-furniture
 */
'use client';
import React from 'react';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Sofa,
    Dog,
    Droplets,
    AlertTriangle,
    Sparkles,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, LOCATIONS } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';

const UpholsteryCleaningPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "How do you deep clean a fabric couch at home?",
            answer: "Vacuum thoroughly with upholstery attachment, spot-treat stains with appropriate cleaner for your fabric type, then clean the entire surface with a fabric cleaner or steam cleaner. Always check the care tag (W, S, WS, or X) to know which cleaning method is safe for your fabric."
        },
        {
            question: "What does the upholstery cleaning code mean?",
            answer: "W = water-based cleaners safe. S = solvent/dry cleaning only. WS = either water or solvent safe. X = vacuum only, no liquid cleaners. These codes are crucial—using the wrong cleaner can cause permanent damage or shrinkage."
        },
        {
            question: "How often should you clean a sofa?",
            answer: "Vacuum upholstery weekly to remove surface dust and debris. Spot-clean spills immediately. Deep clean every 6-12 months, or more frequently if you have pets, kids, or allergies. San Diego's open-window lifestyle means furniture collects more outdoor dust."
        },
        {
            question: "Can you use a carpet cleaner on a couch?",
            answer: "Yes, if your machine has an upholstery attachment and your fabric allows water-based cleaning (W or WS code). Test in a hidden area first. Avoid over-wetting—this can cause mold, mildew, and fabric damage."
        }
    ];

    const howToSteps = [
        {
            name: "Check the Care Tag",
            text: "Find the cleaning code tag (usually under cushions or on the frame). W = water-safe, S = solvent only, WS = either, X = vacuum only. This determines everything about your cleaning approach."
        },
        {
            name: "Vacuum Thoroughly",
            text: "Use an upholstery attachment to vacuum all surfaces—cushions (both sides), frame, crevices, and under cushions. This removes loose dirt, pet hair, crumbs, and dust that would turn to mud when wet."
        },
        {
            name: "Pre-Treat Visible Stains",
            text: "Identify and treat specific stains before overall cleaning. Blot (don't rub) with appropriate cleaner. For W/WS fabrics, dish soap diluted in water works for most stains. For S-code fabrics, use dry cleaning solvent."
        },
        {
            name: "Prepare Your Cleaning Solution",
            text: "For W/WS fabrics: mix 2 cups warm water, 1 tablespoon dish soap, and 1 tablespoon white vinegar. For S-code: purchase dry cleaning solvent. Always test in an inconspicuous area first."
        },
        {
            name: "Clean in Sections",
            text: "Work on one section at a time. Apply cleaner with a microfiber cloth or soft brush using gentle circular motions. Don't over-saturate—use just enough to clean without soaking the fabric."
        },
        {
            name: "Rinse and Extract (W/WS Fabrics)",
            text: "Wipe cleaned sections with a clean, damp cloth to remove soap residue. For deep cleaning, a handheld carpet extractor or steam cleaner speeds this process and removes more dirt."
        },
        {
            name: "Sanitize and Deodorize",
            text: "Sprinkle baking soda liberally over upholstery and let sit 15-30 minutes (or overnight for odors). Vacuum thoroughly. For sanitizing, lightly mist with a fabric-safe disinfectant spray."
        },
        {
            name: "Dry Completely",
            text: "Open windows, run ceiling fans, or use box fans to speed drying. Furniture should be completely dry within 24 hours to prevent mold and mildew. Don't sit on cushions until fully dry."
        }
    ];

    const featuredLocations = LOCATIONS.slice(0, 6);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How to Deep Clean and Sanitize Upholstered Furniture"
                description="Complete guide to cleaning sofas, chairs, and all upholstered furniture. Safe techniques for every fabric type."
                slug="how-to-deep-clean-and-sanitize-upholstered-furniture"
                datePublished="2024-01-16"
                dateModified="2024-12-15"
            />
            <HowToSchema
                name="How to Deep Clean Upholstered Furniture"
                description="Safe, effective methods for cleaning and sanitizing fabric furniture at home."
                totalTime="PT2H"
                supply={[
                    "Dish soap",
                    "White vinegar",
                    "Baking soda",
                    "Warm water",
                    "Fabric cleaner (for your code)",
                    "Microfiber cloths"
                ]}
                tool={[
                    "Vacuum with upholstery attachment",
                    "Soft-bristle brush",
                    "Spray bottle",
                    "Fans for drying"
                ]}
                steps={howToSteps}
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
                                How-To Guide
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 9 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            How to Deep Clean and Sanitize Upholstered Furniture
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Breathe new life into your sofas and chairs with this comprehensive guide. Techniques for every fabric type—plus pet owner extras.
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
                                <strong>To deep clean upholstered furniture:</strong> First, check the care tag for cleaning codes (W, S, WS, or X). Vacuum thoroughly, then spot-treat stains. Clean with appropriate solution (water-based soap for W/WS, dry solvent for S fabrics). Rinse with damp cloth, deodorize with baking soda, and let dry completely. Deep clean every 6-12 months.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Your sofa is probably the most-used piece of furniture in your home. Between Netflix marathons, kid homework sessions, and that one spot where the dog always claims, upholstery takes a beating. Add in San Diego's beach-loving, dog-friendly, windows-open lifestyle, and your furniture collects everything from pet hair to beach sand to pollen.
                        </p>
                        <p className="text-slate-600">
                            But before you rent a steam cleaner or hire professionals for every couch refresh, know this: most upholstery can be deep cleaned at home with the right techniques. The key is understanding your fabric type and using the appropriate method.
                        </p>
                        <p className="text-slate-600">
                            This guide walks you through the complete process—from decoding those mysterious care tags to tackling pet odors and everything in between.
                        </p>

                        {/* Care Label Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Understanding Upholstery Care Labels
                        </h2>
                        <div className="bg-slate-50 p-6 rounded-xl my-6 not-prose">
                            <p className="text-slate-600 mb-4">Before cleaning, find the care tag (usually on or under the furniture frame, under cushions) and look for these codes:</p>
                            <div className="grid gap-3">
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                                    <span className="w-10 h-10 bg-blue-100 text-blue-700 rounded-full flex items-center justify-center font-bold">W</span>
                                    <div>
                                        <span className="font-bold text-slate-900">Water-Based Cleaning</span>
                                        <p className="text-slate-600 text-sm">Safe to use water-based cleaners. Most common and easiest to clean at home.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                                    <span className="w-10 h-10 bg-amber-100 text-amber-700 rounded-full flex items-center justify-center font-bold">S</span>
                                    <div>
                                        <span className="font-bold text-slate-900">Solvent/Dry Clean Only</span>
                                        <p className="text-slate-600 text-sm">Water causes stains or shrinkage. Use dry cleaning solvents only.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                                    <span className="w-10 h-10 bg-green-100 text-green-700 rounded-full flex items-center justify-center font-bold">WS</span>
                                    <div>
                                        <span className="font-bold text-slate-900">Water or Solvent Safe</span>
                                        <p className="text-slate-600 text-sm">Either water-based or solvent cleaners are safe. Most versatile.</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-3 p-3 bg-white rounded-lg">
                                    <span className="w-10 h-10 bg-red-100 text-red-700 rounded-full flex items-center justify-center font-bold">X</span>
                                    <div>
                                        <span className="font-bold text-slate-900">Vacuum Only</span>
                                        <p className="text-slate-600 text-sm">No liquid cleaners at all. Professional cleaning only for stains.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Warning Box */}
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8 not-prose">
                            <div className="flex gap-3">
                                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-amber-800 mb-1">Always Test First!</h3>
                                    <p className="text-amber-700 text-sm">
                                        Even if you know your cleaning code, test any cleaner on a hidden area (back of cushion, underside of frame) first. Wait for it to dry completely before proceeding. Different fabric dyes can react unexpectedly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Supplies Needed */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            What You'll Need
                        </h2>
                        <div className="bg-slate-50 p-6 rounded-xl my-6 not-prose">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">For W/WS Fabrics</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Dish soap (clear, dye-free)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> White vinegar</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Baking soda</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Clean microfiber cloths</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Spray bottle</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Tools</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Vacuum with upholstery attachment</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Soft-bristle brush</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Optional: Steam cleaner</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Fans for drying</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Step-by-Step Upholstery Deep Cleaning
                        </h2>

                        <div className="space-y-6 my-8 not-prose">
                            {howToSteps.map((step, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{step.name}</h3>
                                        <p className="text-slate-600 text-sm">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pet Owners Section */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Tips for Pet Owners
                        </h2>
                        <p className="text-slate-600">
                            San Diego is one of the most dog-friendly cities in America, and our furniture shows it. Here's how to tackle pet-specific challenges:
                        </p>

                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Dog className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Pet Hair Removal</h4>
                                    <p className="text-slate-600 text-sm">Before vacuuming, use a rubber glove or lint roller to lift embedded hair. A slightly damp rubber squeegee also works wonders—the friction pulls hair out of fabric.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Pet Odor Elimination</h4>
                                    <p className="text-slate-600 text-sm">For general pet odors, baking soda left overnight works well. For urine accidents, you need an enzymatic cleaner (like Nature's Miracle) that breaks down the proteins causing the smell. These are available at local pet stores like Petco, PetSmart, or Mud Bay.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Sofa className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Protect Going Forward</h4>
                                    <p className="text-slate-600 text-sm">Consider washable slipcovers or throws for pet-favorite spots. Fabric protector sprays create a barrier that makes future cleaning easier. Vacuum weekly instead of waiting for visible issues.</p>
                                </div>
                            </div>
                        </div>

                        {/* San Diego Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Upholstery Tips
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Beach Sand and Outdoor Dust</h4>
                                    <p className="text-slate-600 text-sm">Living close to the beach or canyons means more outdoor particles work their way inside. Vacuum upholstery weekly, not just when it looks dirty. Pay special attention after beach days—sand is abrasive and can wear fabric over time.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Perfect Drying Weather</h4>
                                    <p className="text-slate-600 text-sm">San Diego's low humidity is ideal for drying upholstery. On a typical day, your furniture can be completely dry in 4-6 hours with good airflow. Choose a cleaning day with open windows and low humidity for best results.</p>
                                </div>
                            </div>
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
                            <h3 className="text-2xl font-bold mb-3">Need Professional Upholstery Cleaning?</h3>
                            <p className="text-teal-100 mb-6">
                                {COMPANY_NAME} deep cleaning includes upholstered furniture. We have the equipment and expertise to handle delicate fabrics, stubborn stains, and pet odors.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/booking"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                                >
                                    Book a Cleaning
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

                        <RelatedArticles currentSlug="how-to-deep-clean-and-sanitize-upholstered-furniture" />

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
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

export default UpholsteryCleaningPage;
