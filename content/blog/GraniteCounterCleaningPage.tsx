'use client';
/**
 * Granite Counter Deep Cleaning Guide - San Diego
 * URL: /blog/how-to-deep-clean-granite-counters
 */
import React from 'react';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Droplets,
    AlertTriangle,
    Sparkles,
    Shield,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, LOCATIONS } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

const GraniteCounterCleaningPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "What is the best cleaner for granite countertops?",
            answer: "The best cleaner for daily granite care is a simple solution of warm water and a few drops of dish soap. For deeper cleaning, use a pH-neutral granite-specific cleaner. Avoid vinegar, lemon juice, or other acidic cleaners—they etch and dull the stone over time."
        },
        {
            question: "Can you use Windex or Clorox wipes on granite?",
            answer: "No. Windex contains ammonia and Clorox wipes are acidic—both can damage granite's sealant and dull the surface over time. Stick to pH-neutral cleaners specifically formulated for natural stone."
        },
        {
            question: "How often should you seal granite countertops?",
            answer: "Most granite countertops should be resealed every 1-2 years, but frequency depends on usage and the stone's porosity. To test: drip water on the surface. If it beads up, the seal is good. If it absorbs within a few minutes, it's time to reseal."
        },
        {
            question: "How do you remove hard water stains from granite in San Diego?",
            answer: "San Diego's notoriously hard water leaves white mineral deposits on granite. Make a paste of baking soda and water, apply to the stain, cover with plastic wrap overnight, then wipe clean. For stubborn stains, use a poultice designed for natural stone."
        }
    ];

    const howToSteps = [
        {
            name: "Clear and Prep the Surface",
            text: "Remove everything from your countertops—small appliances, canisters, decorative items. This gives you access to the entire surface including corners and edges where grime hides."
        },
        {
            name: "Remove Loose Debris",
            text: "Wipe away crumbs and loose debris with a dry microfiber cloth. For stuck-on food, gently scrape with a plastic scraper—never use metal or abrasive tools on granite."
        },
        {
            name: "Prepare Your Cleaning Solution",
            text: "Mix warm water with a few drops of dish soap in a spray bottle. For deeper cleaning, use a pH-neutral granite cleaner. Never use vinegar, lemon, or bleach-based cleaners."
        },
        {
            name: "Clean in Sections",
            text: "Spray one section at a time and wipe with a soft cloth using circular motions. Work in manageable sections to prevent the cleaner from drying on the surface."
        },
        {
            name: "Address Stains with Baking Soda",
            text: "For oil-based stains, make a paste with baking soda and water. Apply to the stain, cover with plastic wrap, and let it sit for 24 hours. The baking soda draws out the oil."
        },
        {
            name: "Rinse and Dry Thoroughly",
            text: "Wipe the entire surface with a clean, damp cloth to remove any soap residue. Immediately dry with a separate microfiber cloth to prevent water spots—especially important with San Diego's hard water."
        },
        {
            name: "Polish and Protect",
            text: "Once dry, apply a granite polish or sealer enhancer to restore shine and add protection. Buff with a soft cloth until the surface gleams."
        }
    ];

    const featuredLocations = LOCATIONS.slice(0, 6);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How to Deep Clean Granite Countertops: The Complete Guide"
                description="Learn proper granite cleaning techniques to keep your countertops beautiful. Safe products, stain removal, and sealing tips."
                slug="how-to-deep-clean-granite-counters"
                datePublished="2024-01-17"
                dateModified="2026-02-17"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
            />
            <HowToSchema
                name="How to Deep Clean Granite Countertops"
                description="Safe and effective methods for cleaning granite counters without damaging the stone."
                totalTime="PT45M"
                supply={[
                    "pH-neutral dish soap",
                    "Warm water",
                    "Baking soda",
                    "Granite cleaner or polish",
                    "Microfiber cloths",
                    "Spray bottle"
                ]}
                tool={[
                    "Soft cloths",
                    "Plastic scraper",
                    "Plastic wrap (for stains)"
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
                                <Clock className="w-4 h-4" /> 8 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            How to Deep Clean Granite Countertops: The Complete Guide
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Protect your investment with proper granite care. Learn what products to use (and avoid) plus tips for tackling San Diego hard water stains.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Updated December 15, 2024</span>
                            <span className="text-slate-600">&middot;</span>
                            <span>Updated February 17, 2026</span>
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
                                <strong>To deep clean granite countertops:</strong> Use warm water with a few drops of dish soap—never vinegar or acidic cleaners. Wipe with a soft cloth, rinse with clean water, and dry immediately to prevent water spots. For stains, use a baking soda paste left overnight. Reseal every 1-2 years to maintain protection.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Granite countertops are a hallmark of San Diego's beautiful homes, from Rancho Santa Fe estates to renovated North Park bungalows. This natural stone adds elegance and value—but it requires specific care to maintain its beauty.
                        </p>
                        <p className="text-slate-600">
                            The biggest mistake homeowners make? Using the wrong cleaning products. Those convenient all-purpose sprays, vinegar solutions, and disinfecting wipes can slowly but surely damage granite's surface and sealant. The good news is that proper granite care is simple once you know the rules.
                        </p>
                        <p className="text-slate-600">
                            This guide covers daily maintenance, deep cleaning techniques, stain removal, and how to deal with San Diego's notoriously hard water—your granite's biggest local enemy.
                        </p>

                        {/* Warning Box */}
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg my-8 not-prose">
                            <div className="flex gap-3">
                                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-red-800 mb-1">Products to NEVER Use on Granite</h3>
                                    <ul className="text-red-700 text-sm space-y-1 mt-2">
                                        <li>• <strong>Vinegar or lemon juice</strong> – Acidic products etch stone</li>
                                        <li>• <strong>Windex or ammonia-based cleaners</strong> – Degrades sealant</li>
                                        <li>• <strong>Bleach or Clorox wipes</strong> – Too harsh, causes discoloration</li>
                                        <li>• <strong>Abrasive scrubbers or steel wool</strong> – Scratches surface</li>
                                        <li>• <strong>Generic bathroom/kitchen cleaners</strong> – Often too acidic</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Why Granite Needs Special Care */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Why Granite Needs Special Care
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Shield className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">It's Porous (Despite Feeling Solid)</h4>
                                    <p className="text-slate-600 text-sm">Granite has microscopic pores that can absorb liquids, oils, and stains. The sealant fills these pores, but harsh chemicals break down that protection over time.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">The Finish Can Dull</h4>
                                    <p className="text-slate-600 text-sm">Acids (like vinegar and citrus) cause etching—microscopic damage that makes polished granite look cloudy or dull. This damage is permanent without professional repolishing.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Hard Water Compounds the Problem</h4>
                                    <p className="text-slate-600 text-sm">San Diego's hard water leaves mineral deposits that build up on granite over time. If left unchecked, these can become difficult to remove and dull the stone's appearance.</p>
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
                                    <h3 className="font-bold text-slate-900 mb-3">Safe Cleaning Products</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Warm water</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> pH-neutral dish soap (Dawn, Seventh Generation)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Baking soda (for stains)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Granite-specific cleaner (optional)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Granite polish/sealer enhancer</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Tools</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Soft microfiber cloths</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Spray bottle</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Plastic scraper (for stuck-on debris)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Plastic wrap (for poultice treatment)</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 mt-4">
                                💡 <strong>San Diego Tip:</strong> Find granite-safe products at specialty stores like Arizona Tile (multiple locations) or online. Brands like Granite Gold and Stone Care International are widely recommended.
                            </p>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Step-by-Step Granite Deep Cleaning
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

                        {/* San Diego Hard Water Section */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Tackling San Diego Hard Water Stains
                        </h2>
                        <p className="text-slate-600">
                            San Diego has some of the hardest water in the country—up to 300+ parts per million of dissolved minerals. These minerals leave white, chalky deposits on granite that can be stubborn to remove. Here's what works:
                        </p>
                        <div className="bg-teal-50 p-6 rounded-xl my-6 not-prose">
                            <h3 className="font-bold text-slate-900 mb-4">Hard Water Stain Removal</h3>
                            <ol className="space-y-3 text-slate-600">
                                <li className="flex gap-3">
                                    <span className="font-bold text-teal-600">1.</span>
                                    <span><strong>Baking Soda Paste:</strong> Mix baking soda with water to form a thick paste. Apply to the hard water stain and cover with plastic wrap. Leave for 24 hours, then wipe clean.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-teal-600">2.</span>
                                    <span><strong>Stone-Safe Mineral Deposits Remover:</strong> Products like Granite Gold Water Mark Remover are specifically formulated for granite without damaging the sealant.</span>
                                </li>
                                <li className="flex gap-3">
                                    <span className="font-bold text-teal-600">3.</span>
                                    <span><strong>Prevention:</strong> Wipe down counters immediately after water exposure. Use coasters and trivets. Consider a whole-house water softener for persistent issues.</span>
                                </li>
                            </ol>
                        </div>

                        {/* Sealing Section */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            When to Reseal Your Granite
                        </h2>
                        <p className="text-slate-600">
                            Sealant protects granite from stains and moisture absorption, but it wears down over time. Here's how to know if yours needs refreshing:
                        </p>
                        <div className="bg-slate-50 p-6 rounded-xl my-6 not-prose">
                            <h3 className="font-bold text-slate-900 mb-3">The Water Drop Test</h3>
                            <p className="text-slate-600 mb-4">Drip a small amount of water on your countertop and watch what happens:</p>
                            <ul className="space-y-2 text-slate-600">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                                    <span><strong>Beads up and sits on surface:</strong> Sealant is working—no action needed</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-5 h-5 text-amber-500 flex-shrink-0 mt-0.5" />
                                    <span><strong>Absorbs slowly (5-10 minutes):</strong> Consider resealing soon</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <AlertTriangle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                                    <span><strong>Absorbs quickly (darkens immediately):</strong> Reseal as soon as possible</span>
                                </li>
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
                            <h3 className="text-2xl font-bold mb-3">Need Professional Deep Cleaning?</h3>
                            <p className="text-teal-100 mb-6">
                                {COMPANY_NAME} uses stone-safe products and techniques to deep clean your kitchen without damaging granite, marble, or other natural stone surfaces.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/booking"
                                    className="inline-flex items-center justify-center px-6 py-3 mb-4 mr-4 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
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

                        <AuthorBio
                            name="Art Machekin"
                            role="Founder"
                            bio="Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home."
                        />

                        <RelatedArticles currentSlug="how-to-deep-clean-granite-counters" />

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

export default GraniteCounterCleaningPage;
