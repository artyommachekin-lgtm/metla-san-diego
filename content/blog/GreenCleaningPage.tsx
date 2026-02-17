/**
 * Eco-Friendly Cleaning Tips - San Diego
 * URL: /blog/eco-friendly-cleaning-tips
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
    Leaf,
    Droplet,
    Recycle,
    MapPin
} from 'lucide-react';
import { PHONE_NUMBER } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

const GreenCleaningPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "Are natural cleaning products as effective as chemical ones?",
            answer: "For most household cleaning tasks, yes. Vinegar kills most bacteria, baking soda is a powerful deodorizer and mild abrasive, and castile soap cuts grease effectively. For disinfection during illness, you may want EPA-registered disinfectants."
        },
        {
            question: "What should I avoid when making DIY cleaners?",
            answer: "Never mix vinegar with bleach (creates toxic chlorine gas) or with hydrogen peroxide (creates corrosive peracetic acid). Also avoid mixing different commercial cleaners. When in doubt, use products separately."
        },
        {
            question: "How can I reduce waste from cleaning supplies?",
            answer: "Buy concentrates and dilute at home. Use refillable spray bottles. Replace paper towels with washable microfiber cloths. Choose products in recyclable packaging. Look for local refill stations for dish and laundry soap."
        },
        {
            question: "Do eco-friendly products cost more?",
            answer: "Some commercial green products cost more, but DIY options (vinegar, baking soda, castile soap) are usually cheaper than chemical alternatives. Reusable supplies like microfiber cloths also save money long-term."
        }
    ];

    const greenTips = [
        {
            title: "All-Purpose Cleaner",
            description: "Mix equal parts white vinegar and water in a spray bottle. Add a few drops of essential oil for scent. Works on most surfaces except marble and hardwood.",
            icon: Sparkles
        },
        {
            title: "Glass Cleaner",
            description: "Combine 2 cups water, 1/2 cup vinegar, and 1/4 cup rubbing alcohol. Spray and wipe with newspaper or microfiber for streak-free windows.",
            icon: Sparkles
        },
        {
            title: "Soft Scrub Alternative",
            description: "Make a paste with baking soda and a little dish soap. Great for sinks, tubs, and stovetops. Rinse thoroughly after scrubbing.",
            icon: Sparkles
        },
        {
            title: "Drain Cleaner",
            description: "Pour 1/2 cup baking soda down the drain, follow with 1/2 cup vinegar. Cover, wait 15 minutes, then flush with boiling water. Monthly use prevents clogs.",
            icon: Sparkles
        },
        {
            title: "Wood Polish",
            description: "Mix 1/4 cup olive oil with 1/4 cup white vinegar and 10 drops lemon essential oil. Apply sparingly with a soft cloth, buff to shine.",
            icon: Sparkles
        },
        {
            title: "Toilet Bowl Cleaner",
            description: "Sprinkle baking soda in bowl, add vinegar, let fizz. Scrub with toilet brush. For tough stains, let baking soda paste sit before scrubbing.",
            icon: Sparkles
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Eco-Friendly Cleaning Tips for Your Home"
                description="Natural cleaning solutions and sustainable practices for environmentally-conscious homeowners. DIY recipes and water-saving tips."
                slug="eco-friendly-cleaning-tips"
                datePublished="2024-01-19"
                dateModified="2026-02-17"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
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
                            <span className="bg-green-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Green Living
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 8 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            Eco-Friendly Cleaning Tips for San Diego Homes
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Clean your home and protect the planet. Natural solutions that work just as well as harsh chemicals.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 19, 2024</span>
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
                        <div className="bg-green-50 border-l-4 border-green-500 p-6 rounded-r-xl my-8 not-prose">
                            <h2 className="font-bold text-green-900 mb-2">Quick Answer</h2>
                            <p className="text-green-800">
                                <strong>The three basics of green cleaning:</strong> White vinegar (cuts grease, kills bacteria), baking soda (deodorizes, gentle abrasive), and castile soap (safe all-purpose cleaner). With these three items, you can clean almost everything in your home without harsh chemicals.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            San Diego consistently ranks among America's most environmentally conscious cities. From our marine protected areas to our solar initiatives, sustainability is part of our culture. Why should our cleaning routines be any different?
                        </p>
                        <p className="text-slate-600 mt-4">
                            The truth is, most household cleaning doesn't require harsh chemicals. Our grandparents cleaned effectively with simple, natural ingredients that are gentler on your health, your home, and the environment. Here's how to return to those roots while keeping your home spotless.
                        </p>

                        {/* Stats Box */}
                        <div className="grid grid-cols-3 gap-4 my-8 not-prose">
                            <div className="bg-green-50 p-4 rounded-xl text-center">
                                <Leaf className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">3</div>
                                <div className="text-sm text-slate-600">Basic ingredients</div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl text-center">
                                <Droplet className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">50%</div>
                                <div className="text-sm text-slate-600">Less plastic waste</div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl text-center">
                                <Recycle className="w-8 h-8 text-green-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">$$$</div>
                                <div className="text-sm text-slate-600">Save money too</div>
                            </div>
                        </div>

                        {/* DIY Recipes */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            DIY Natural Cleaning Recipes
                        </h2>

                        <div className="grid gap-4 my-8 not-prose">
                            {greenTips.map((tip, index) => (
                                <div key={index} className="p-4 bg-green-50 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-2">{tip.title}</h3>
                                    <p className="text-slate-600 text-sm">{tip.description}</p>
                                </div>
                            ))}
                        </div>

                        {/* Essential Ingredients */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Your Green Cleaning Kit
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <h3 className="font-bold text-slate-900 mb-4">Essential Ingredients:</h3>
                            <ul className="space-y-2 mb-6">
                                {[
                                    "White distilled vinegar - disinfects, deodorizes, cuts grease",
                                    "Baking soda - gentle abrasive, absorbs odors",
                                    "Castile soap - versatile, biodegradable cleaner",
                                    "Hydrogen peroxide (3%) - sanitizes, whitens",
                                    "Essential oils - add scent, some have antibacterial properties",
                                    "Olive oil - wood polish and conditioner"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <h3 className="font-bold text-slate-900 mb-4">Reusable Supplies:</h3>
                            <ul className="space-y-2">
                                {[
                                    "Microfiber cloths (replace paper towels)",
                                    "Glass spray bottles (refillable)",
                                    "Natural bristle scrub brushes",
                                    "Wool dryer balls (replace dryer sheets)"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* San Diego Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Sustainable Cleaning in San Diego
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Droplet className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Water Conservation</h3>
                                    <p className="text-slate-600 text-sm">Use spray bottles instead of running water. Collect rinse water for plants. Damp mop rather than wet mop. Every gallon saved matters in drought-prone Southern California.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Leaf className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Local Eco Products</h3>
                                    <p className="text-slate-600 text-sm">Shop at Jimbo's, Sprouts, or local co-ops for bulk cleaning supplies. Many offer refill stations for dish soap and laundry detergent, reducing plastic packaging waste.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Recycle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Protect Our Ocean</h3>
                                    <p className="text-slate-600 text-sm">What goes down your drain eventually reaches the Pacific. Biodegradable cleaners break down safely. Avoid antibacterial products with triclosan and phosphate-heavy detergents.</p>
                                </div>
                            </div>
                        </div>

                        {/* What to Avoid */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Ingredients to Avoid
                        </h2>
                        <div className="my-6 p-6 bg-red-50 rounded-xl not-prose">
                            <ul className="space-y-2">
                                {[
                                    "Phthalates - found in fragrances, hormone disruptors",
                                    "Triclosan - antibacterial agent, harms aquatic life",
                                    "Ammonia - respiratory irritant",
                                    "Chlorine bleach - creates toxic fumes when mixed",
                                    "2-Butoxyethanol - found in glass cleaners, toxic",
                                    "Synthetic fragrances - often contain hidden chemicals"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                                        <span className="w-4 h-4 text-red-500 flex-shrink-0">✗</span>
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
                        <AuthorBio
                            name="Art Machekin"
                            role="Founder"
                            bio="Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home."
                        />

                        <RelatedArticles currentSlug="eco-friendly-cleaning-tips" />



                        {/* CTA */}
                        <div className="bg-teal-600 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <Leaf className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">Eco-Friendly Professional Cleaning</h3>
                            <p className="text-teal-100 mb-6">
                                We use environmentally responsible products and practices. Ask about our green cleaning options when you book.
                            </p>
                            <Link
                                href="/booking"
                                className="inline-flex items-center justify-center px-6 py-3 mb-4 mr-4 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                            >
                                Book a Cleaning
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                href="/service/standard-cleaning"
                                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                            >
                                Learn About Our Cleaning Services
                            </Link>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default GreenCleaningPage;
