'use client';
/**
 * Ceiling Fan Deep Cleaning Guide - San Diego
 * URL: /blog/how-to-deep-clean-ceiling-fans
 */
import React from 'react';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Wind,
    Zap,
    AlertTriangle,
    ThermometerSun,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, LOCATIONS } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

const CeilingFanCleaningPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "How often should you clean ceiling fans?",
            answer: "Clean ceiling fans every 1-2 months during heavy use seasons. In San Diego, where fans run year-round as an energy-efficient cooling option, monthly cleaning prevents dust buildup that reduces efficiency and spreads allergens."
        },
        {
            question: "What's the best way to clean ceiling fan blades without making a mess?",
            answer: "Use an old pillowcase! Slide it over each blade and wipe as you pull it off—the dust stays inside the pillowcase instead of falling on your floor and furniture. This simple trick keeps all that dust contained instead of spreading it around the room."
        },
        {
            question: "Can dirty ceiling fans make you sick?",
            answer: "Yes. Ceiling fans accumulate dust, pet dander, pollen, and other allergens. When the fan runs, it circulates these particles throughout your home. Regular cleaning is especially important for San Diego residents with allergies during spring pollen season."
        },
        {
            question: "How do you clean a ceiling fan without a ladder?",
            answer: "Use an extendable duster with a U-shaped head designed for fan blades. You can also use an extension pole with a microfiber cloth attachment. These tools let you clean fans up to 10 feet high from the ground safely."
        }
    ];

    const howToSteps = [
        {
            name: "Turn Off the Fan and Let It Stop",
            text: "Switch off the fan at the wall switch or pull chain. Wait for the blades to completely stop spinning. For extra safety, turn off the circuit breaker if you'll be doing a thorough cleaning near the motor housing."
        },
        {
            name: "Protect the Area Below",
            text: "Lay a drop cloth, old sheet, or newspaper beneath the fan to catch falling dust and debris. This makes cleanup much easier and prevents dust from settling on furniture or floors."
        },
        {
            name: "Dust the Blades with the Pillowcase Method",
            text: "Slide an old pillowcase over each blade, press gently against both sides, and slowly pull it off while wiping. The dust collects inside the pillowcase. Repeat for all blades."
        },
        {
            name: "Wipe Blades with a Damp Cloth",
            text: "Dampen a microfiber cloth with warm water and a drop of dish soap. Wipe the top and bottom of each blade to remove remaining grime. For stubborn buildup, use an all-purpose cleaner."
        },
        {
            name: "Clean the Motor Housing and Light Fixtures",
            text: "Wipe down the motor housing with a dry microfiber cloth. If your fan has light fixtures, remove glass covers and wash in warm soapy water. Wipe bulbs with a dry cloth when cool."
        },
        {
            name: "Clean the Pull Chains and Hardware",
            text: "Wipe pull chains, downrod, and decorative hardware with a damp cloth. For brass or metal hardware, use appropriate metal polish to restore shine."
        },
        {
            name: "Dry and Reassemble",
            text: "Ensure all parts are completely dry before turning the fan back on. Replace light covers, turn power back on, and run the fan on low to check for wobbling or unusual sounds."
        }
    ];

    const featuredLocations = LOCATIONS.slice(0, 6);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How to Deep Clean Ceiling Fans: The Complete Guide"
                description="Learn how to deep clean ceiling fans safely and effectively. Step-by-step instructions with the famous pillowcase trick."
                slug="how-to-deep-clean-ceiling-fans"
                datePublished="2024-01-18"
                dateModified="2026-02-17"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
            />
            <HowToSchema
                name="How to Deep Clean Ceiling Fans"
                description="A safe, effective method for cleaning ceiling fans without making a mess."
                totalTime="PT30M"
                supply={[
                    "Old pillowcase",
                    "Microfiber cloths",
                    "Warm water",
                    "Dish soap",
                    "All-purpose cleaner",
                    "Drop cloth or old sheet"
                ]}
                tool={[
                    "Step ladder (if needed)",
                    "Extendable duster",
                    "Bucket"
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
                                <Clock className="w-4 h-4" /> 7 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            How to Deep Clean Ceiling Fans: The Complete Guide
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Master the pillowcase trick and keep your fans dust-free without making a mess. Your lungs (and electric bill) will thank you.
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
                                <strong>To deep clean ceiling fans:</strong> Turn off the fan and let it stop. Use an old pillowcase slid over each blade to capture dust without it falling everywhere. Then wipe blades with a damp microfiber cloth and mild soap. Clean the motor housing and light fixtures. Do this every 1-2 months for best results—more often during San Diego's spring pollen season.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Ceiling fans are a San Diego essential. With our mild climate and high energy costs, fans provide an eco-friendly way to stay comfortable without running the AC all day. But those hardworking blades collect dust, pet hair, and allergens that get redistributed into your air every time the fan runs.
                        </p>
                        <p className="text-slate-600">
                            If you've ever turned on a ceiling fan after a long break and watched a cloud of dust descend, you know the problem. The good news? Cleaning ceiling fans is easier than you think, especially with the pillowcase trick that contains the mess entirely.
                        </p>
                        <p className="text-slate-600">
                            This guide covers everything from basic maintenance to deep cleaning methods for even the grimiest fans. Whether you're in a La Jolla beach house or a Hillcrest apartment, these techniques work for every type of ceiling fan.
                        </p>

                        {/* Why It Matters */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Why Clean Ceiling Fans Matter
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Wind className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Better Air Quality</h4>
                                    <p className="text-slate-600 text-sm">Dirty fans circulate dust, allergens, and pet dander throughout your home. Clean fans mean cleaner air—especially important for allergy sufferers during San Diego's spring pollen season.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Zap className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Energy Efficiency</h4>
                                    <p className="text-slate-600 text-sm">Dust buildup makes fans work harder to move air. Clean blades spin more efficiently, moving more air with less energy. That adds up on your SDG&E bill over time.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <ThermometerSun className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Fan Longevity</h4>
                                    <p className="text-slate-600 text-sm">Dust and grime can work their way into the motor housing, causing wear and wobbling. Regular cleaning extends your fan's lifespan and keeps it running smoothly.</p>
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
                                    <h3 className="font-bold text-slate-900 mb-3">Supplies</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Old pillowcase (or two)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Microfiber cloths</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Dish soap</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> All-purpose cleaner</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Drop cloth or old sheet</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Tools</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Step ladder (if needed)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Extendable duster (optional)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Bucket for soapy water</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 mt-4">
                                💡 <strong>Pro Tip:</strong> Use a dark-colored pillowcase so you can see just how much dust you're removing—it's oddly satisfying!
                            </p>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Step-by-Step Ceiling Fan Deep Cleaning
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

                        {/* Safety Warning */}
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-8 not-prose">
                            <div className="flex gap-3">
                                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-amber-800 mb-1">Safety First</h3>
                                    <p className="text-amber-700 text-sm">
                                        Always turn off the fan before cleaning. Use a stable step ladder on a flat surface—never stand on chairs or unstable furniture. If your fan is very high or you're uncomfortable on a ladder, use an extendable duster or call professionals.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* San Diego-Specific Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Ceiling Fan Tips
                        </h2>

                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Wind className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Year-Round Use = More Cleaning</h4>
                                    <p className="text-slate-600 text-sm">Unlike colder climates where fans collect dust in off-seasons, San Diego fans run year-round. Plan to clean every 4-6 weeks during heavy use periods. Set a monthly reminder on your phone.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <ThermometerSun className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Reverse Direction by Season</h4>
                                    <p className="text-slate-600 text-sm">While cleaning, check your fan's direction switch. Counterclockwise in summer pushes air down for cooling; clockwise in winter circulates warm air pooling near the ceiling. Even in San Diego, this helps during cooler evenings.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Wind className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Open-Window Living</h4>
                                    <p className="text-slate-600 text-sm">San Diegans love keeping windows open. Great for fresh air, but it means more outdoor dust, pollen, and (near the coast) salt air on your fan blades. Coastal homes from La Jolla to Imperial Beach may need more frequent cleaning.</p>
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
                            <h3 className="text-2xl font-bold mb-3">Need Help With Your Deep Cleaning?</h3>
                            <p className="text-teal-100 mb-6">
                                {COMPANY_NAME} includes ceiling fans in our comprehensive deep cleaning service. We handle the ladders and the dust—you enjoy the clean air.
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

                        <AuthorBio
                            name="Art Machekin"
                            role="Founder"
                            bio="Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home."
                        />

                        <RelatedArticles currentSlug="how-to-deep-clean-ceiling-fans" />

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

export default CeilingFanCleaningPage;
