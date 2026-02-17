/**
 * Pet Odor Removal Guide - San Diego
 * URL: /blog/how-to-remove-pet-odors-from-your-home
 */
'use client';
import React from 'react';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Sparkles,
    AlertTriangle,
    PawPrint,
    Wind,
    Droplets,
    MapPin
} from 'lucide-react';
import { PHONE_NUMBER } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

const PetOdorRemovalPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "Why do pet odors keep coming back?",
            answer: "Pet urine contains uric acid crystals that standard cleaners don't fully dissolve. These crystals reactivate with humidity, releasing odor again. Enzymatic cleaners are specifically designed to break down these crystals permanently."
        },
        {
            question: "Can I use vinegar to clean pet urine?",
            answer: "Vinegar can help neutralize fresh urine odor but won't fully eliminate set-in stains. Never use ammonia-based cleaners on pet stains—the smell can actually encourage pets to mark the same spot again."
        },
        {
            question: "How do I find hidden pet odor sources?",
            answer: "Use a UV blacklight flashlight in a dark room—pet urine glows under UV light. Check along baseboards, behind furniture, and in corners. Sometimes odors come from padding or subfloor that absorbed old accidents."
        },
        {
            question: "When should I call professionals for pet odor?",
            answer: "If odors persist after thorough cleaning, the issue may be in carpet padding, subfloor, or HVAC systems. Severe cases may require carpet replacement, sealing the subfloor, or professional ozone treatment. A professional assessment can identify the source."
        }
    ];

    const howToSteps = [
        {
            name: "Identify All Odor Sources",
            text: "Use a UV blacklight in a dark room to locate old stains. Check carpets, upholstery, baseboards, and walls. Pet urine can travel further than the visible stain—treat a wider area than you see."
        },
        {
            name: "Blot Fresh Accidents Immediately",
            text: "For fresh urine, blot (don't rub!) with paper towels until no more moisture transfers. Press firmly with your foot for maximum absorption. The faster you act, the less will soak into padding and subfloor."
        },
        {
            name: "Apply Enzymatic Cleaner",
            text: "Saturate the stained area with enzymatic pet cleaner—it must reach as deep as the urine did. Follow product instructions for dwell time, usually 10-15 minutes minimum. These cleaners contain bacteria that literally digest odor-causing compounds."
        },
        {
            name: "Cover and Let It Work",
            text: "Cover the treated area with plastic or a damp cloth to keep the enzymatic cleaner moist and active. Most products need to remain wet for best results—check the label for specific timing."
        },
        {
            name: "Extract or Blot Dry",
            text: "After the enzyme has worked, extract moisture with a wet-dry vacuum or blot thoroughly. Avoid excessive heat which can set remaining stains. Allow to air dry completely."
        },
        {
            name: "Treat Hard Surfaces",
            text: "For hard floors, clean with enzymatic cleaner, paying attention to grout lines where urine can seep. Check baseboards and the lower portion of walls—urine splashes and seeps."
        },
        {
            name: "Address Fabrics and Bedding",
            text: "Machine wash pet bedding with enzymatic additive. For upholstered furniture, test enzymatic cleaner in a hidden area first. Some fabrics may require professional cleaning."
        },
        {
            name: "Improve Air Quality",
            text: "After cleaning, run an air purifier with a HEPA filter. Open windows when possible. Replace HVAC filters that may have absorbed odors. Add baking soda under rugs to absorb lingering smells."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How to Remove Pet Odors From Your Home"
                description="Comprehensive guide to eliminating pet odors using enzymatic cleaners and professional techniques. Find hidden stains and prevent odors from returning."
                slug="how-to-remove-pet-odors-from-your-home"
                datePublished="2024-01-16"
                dateModified="2026-02-17"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
            />
            <HowToSchema
                name="How to Remove Pet Odors From Your Home"
                description="Step-by-step guide to finding and eliminating pet odors from carpets, furniture, and hard surfaces."
                totalTime="PT2H"
                supply={[
                    "Enzymatic pet cleaner",
                    "Paper towels or clean rags",
                    "Baking soda",
                    "White vinegar (for hard surfaces)",
                    "Plastic wrap or damp cloths"
                ]}
                tool={[
                    "UV blacklight flashlight",
                    "Wet-dry vacuum (optional)",
                    "Scrub brush",
                    "Spray bottle"
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
                                Pet Owners
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 9 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            How to Remove Pet Odors From Your San Diego Home
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Effective techniques to find, treat, and prevent pet odors—because you love your pets, not their smell.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 16, 2024</span>
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
                        <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl my-8 not-prose">
                            <h2 className="font-bold text-teal-900 mb-2">Quick Answer</h2>
                            <p className="text-teal-800">
                                <strong>The secret to pet odor removal:</strong> Use a UV blacklight to find hidden stains, apply enzymatic cleaner (not regular cleaners) that must penetrate as deep as the urine did, keep the area moist while enzymes work, then extract and air dry. Repeat if needed—severe odors may require professional treatment.
                            </p>
                        </div>

                        {/* Important Note */}
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 not-prose">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-amber-900 mb-2">Important</h3>
                                    <p className="text-amber-800 text-sm">
                                        Never use ammonia-based cleaners on pet urine—the smell mimics urine to pets and can encourage re-marking. Also avoid steam cleaning until the area is fully treated, as heat can set protein-based stains permanently.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            San Diego is one of the most dog-friendly cities in America, and we wouldn't have it any other way. But pet ownership comes with challenges—and lingering pet odors can make even the cleanest-looking home smell less than fresh. If regular cleaning isn't cutting it, you need a different approach.
                        </p>
                        <p className="text-slate-600 mt-4">
                            This guide explains why standard cleaning fails for pet odors and walks you through the methods that actually work—from DIY enzymatic treatments to knowing when it's time to call professionals.
                        </p>

                        {/* Stats Box */}
                        <div className="grid grid-cols-3 gap-4 my-8 not-prose">
                            <div className="bg-orange-50 p-4 rounded-xl text-center">
                                <PawPrint className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">52%</div>
                                <div className="text-sm text-slate-600">SD households with pets</div>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-xl text-center">
                                <Droplets className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">UV Light</div>
                                <div className="text-sm text-slate-600">Finds hidden stains</div>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-xl text-center">
                                <Wind className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">Enzymes</div>
                                <div className="text-sm text-slate-600">Only true solution</div>
                            </div>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Pet Odor Removal Process
                        </h2>

                        <div className="space-y-4 my-8 not-prose">
                            {howToSteps.map((step, index) => (
                                <div key={index} className="flex gap-4 p-4 bg-slate-50 rounded-xl">
                                    <div className="flex-shrink-0 w-8 h-8 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                                        {index + 1}
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-slate-900 mb-1">{step.name}</h3>
                                        <p className="text-slate-600 text-sm">{step.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* San Diego Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Tips for San Diego Pet Owners
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                                <PawPrint className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Beach Dogs</h3>
                                    <p className="text-slate-600 text-sm">Sandy, salty fur can leave residue on furniture and floors. Set up an outdoor rinse station and keep a dedicated towel by the door. Regular grooming helps prevent odor-causing bacteria from building up.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                                <Wind className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Use the Weather</h3>
                                    <p className="text-slate-600 text-sm">San Diego's dry climate is your friend. Open windows frequently to air out your home. Sun-dry pet beds and washable items outside—UV light naturally kills odor-causing bacteria.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Hard Surface Advantage</h3>
                                    <p className="text-slate-600 text-sm">Many San Diego homes have tile or hard floors which are much easier to clean than carpet. Consider area rugs that can be removed and cleaned rather than wall-to-wall carpet in pet-heavy zones.</p>
                                </div>
                            </div>
                        </div>

                        {/* Recommended Products */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Recommended Enzymatic Cleaners
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <p className="text-slate-600 text-sm mb-4">These products contain the enzymes needed to break down pet urine at a molecular level:</p>
                            <ul className="space-y-2">
                                {[
                                    "Nature's Miracle (widely available, reliable performance)",
                                    "Rocco & Roxie (highly rated for tough odors)",
                                    "Angry Orange (natural,citrus-based enzyme formula)",
                                    "Biokleen Bac-Out (plant-based option)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <p className="text-slate-500 text-xs mt-4">Available at Petco, PetSmart, Target, or online. Always test in an inconspicuous area first.</p>
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
                        <AuthorBio
                            name="Art Machekin"
                            role="Founder"
                            bio="Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home."
                        />

                        <RelatedArticles currentSlug="how-to-remove-pet-odors-from-your-home" />



                        {/* CTA */}
                        <div className="bg-teal-600 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">Deep Cleaning for Pet Owners</h3>
                            <p className="text-teal-100 mb-6">
                                Our deep cleaning service addresses pet hair, dander, and surface odors. For severe stains and odors, we can assess whether specialized treatment is needed.
                            </p>
                            <Link
                                href="/booking"
                                className="inline-flex items-center justify-center px-6 py-3 mb-4 mr-4 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                            >
                                Book a Cleaning
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                href="/service/deep-cleaning"
                                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                            >
                                Learn About Deep Cleaning
                            </Link>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default PetOdorRemovalPage;
