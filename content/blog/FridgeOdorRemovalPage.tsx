/**
 * Refrigerator Odor Removal Guide - San Diego
 * URL: /blog/how-to-get-rid-of-bad-smell-in-the-fridge
 */
'use client';
import React from 'react';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Snowflake,
    AlertTriangle,
    Sparkles,
    ThermometerSun,
    Package,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, LOCATIONS } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

const FridgeOdorRemovalPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "What absorbs bad smells in the refrigerator?",
            answer: "Baking soda is the classic odor absorber—leave an open box on a shelf. Activated charcoal works even better for strong odors. Coffee grounds, vanilla-soaked cotton balls, and crumpled newspaper also absorb smells. Replace absorbers monthly for best results."
        },
        {
            question: "Why does my fridge smell bad even after cleaning?",
            answer: "Odors can linger in the drip pan (under the fridge), rubber door gaskets, or the evaporator drain. Spills may have seeped into shelf cracks or under drawers. Very old odors can even absorb into plastic components. Try cleaning these hidden spots."
        },
        {
            question: "How do you get rid of rotten meat smell in fridge?",
            answer: "Remove all food, clean with baking soda solution, then leave several boxes of baking soda inside for 24-48 hours with the door closed. For extreme cases, stuff with crumpled newspaper or activated charcoal and leave for several days. Clean the drip pan underneath as well."
        },
        {
            question: "How often should you clean your refrigerator?",
            answer: "Quick wipe-downs weekly, deep cleaning every 3-4 months. Check for expired items weekly before grocery shopping. Clean spills immediately to prevent odors and stains. In San Diego's warm climate, food can spoil faster during heat waves, so check more frequently in summer."
        }
    ];

    const howToSteps = [
        {
            name: "Empty the Refrigerator Completely",
            text: "Remove all food items, shelves, drawers, and removable parts. This is a good time to check expiration dates and toss anything questionable. Put perishables in a cooler with ice packs."
        },
        {
            name: "Dispose of the Odor Source",
            text: "Identify what caused the smell—expired food, forgotten leftovers, spills. Throw away anything spoiled. Check condiment expiration dates too; that salad dressing from 2019 might be the culprit."
        },
        {
            name: "Create Your Cleaning Solution",
            text: "Mix 2 tablespoons baking soda with 1 quart warm water. For stubborn odors, add a splash of white vinegar. Avoid harsh chemicals or bleach—they can leave their own odors or damage plastic parts."
        },
        {
            name: "Wash Removable Parts",
            text: "Wash shelves, drawers, and bins in warm soapy water or the baking soda solution. Let them soak if there's stuck-on residue. Rinse thoroughly and let air dry completely."
        },
        {
            name: "Clean the Interior Walls",
            text: "Wipe down all interior surfaces with your baking soda solution. Pay attention to corners, grooves, and any seams where spills collect. Use an old toothbrush for tight spots."
        },
        {
            name: "Clean the Door Gaskets",
            text: "The rubber seal around the door traps food particles and moisture—a major odor culprit. Wipe with baking soda solution, then dry completely. Check for mold or mildew in folds."
        },
        {
            name: "Don't Forget Hidden Spots",
            text: "Clean the drip pan underneath the fridge (pull out the kick plate to access). Vacuum or wipe the condenser coils. Check and clean the drain hole in the back of the fridge."
        },
        {
            name: "Neutralize Remaining Odors",
            text: "Before restocking, place an open box of baking soda or activated charcoal inside. For strong odors, fill a baking sheet with baking soda or spread coffee grounds on a plate and leave overnight."
        },
        {
            name: "Reassemble and Restock",
            text: "Return clean, dry shelves and drawers. Restock with fresh food, organized so air can circulate. Keep baking soda in the fridge going forward, replacing every 30 days."
        }
    ];

    const featuredLocations = LOCATIONS.slice(0, 6);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How to Get Rid of Bad Smell in the Refrigerator"
                description="Complete guide to eliminating fridge odors. Causes, cleaning steps, and prevention tips."
                slug="how-to-get-rid-of-bad-smell-in-the-fridge"
                datePublished="2024-01-14"
                dateModified="2026-02-17"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
            />
            <HowToSchema
                name="How to Remove Bad Smell From Your Refrigerator"
                description="Effective methods for eliminating refrigerator odors and preventing them from returning."
                totalTime="PT1H30M"
                supply={[
                    "Baking soda",
                    "White vinegar",
                    "Dish soap",
                    "Warm water",
                    "Activated charcoal (optional)"
                ]}
                tool={[
                    "Spray bottle",
                    "Microfiber cloths",
                    "Old toothbrush",
                    "Cooler with ice packs"
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
                            How to Get Rid of Bad Smell in the Refrigerator
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            That mystery smell? We'll help you find it, eliminate it, and prevent it from coming back.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 14, 2024</span>
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
                                <strong>To eliminate fridge odors:</strong> Empty the fridge and find the source (expired food, spills). Clean all surfaces with a baking soda and water solution. Don't forget door gaskets and the drip pan underneath. Leave an open box of baking soda inside to absorb lingering smells. For severe odors, leave baking soda or activated charcoal overnight before restocking.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            You open the refrigerator for a quick snack and—whoa. Something is definitely off. That mysterious fridge smell happens to everyone, but it doesn't have to become a permanent resident.
                        </p>
                        <p className="text-slate-600">
                            Whether it's a forgotten container of leftovers, produce past its prime, or just an accumulation of everyday food smells, refrigerator odors are completely fixable. Better yet, with a few habits, you can prevent them from developing in the first place.
                        </p>
                        <p className="text-slate-600">
                            San Diegans face some unique challenges: after taco nights, beach barbecues, and entertaining season, fridges see a lot of action. Plus, during our warm months, food can spoil faster if the fridge isn't kept cold enough or is opened frequently.
                        </p>

                        {/* Common Causes */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Common Causes of Fridge Odors
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Package className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Forgotten Leftovers</h4>
                                    <p className="text-slate-600 text-sm">That takeout container from two weeks ago, pushed to the back of the shelf. Leftover pasta from last Sunday's dinner. The fish tacos from Tuesday. Check your fridge weekly before they become science experiments.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <AlertTriangle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Produce Past Its Prime</h4>
                                    <p className="text-slate-600 text-sm">Vegetables in the crisper drawer are often forgotten. Wilting lettuce does smell, but rotting onions, potatoes (stored nearby?), and old fruit create intense odors that spread throughout the fridge.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Snowflake className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Hidden Spills</h4>
                                    <p className="text-slate-600 text-sm">Liquids drip under drawers, into shelf cracks, and onto surfaces we don't see daily. Meat juices, milk drips, and condiment spills can dry into smelly residue that's easy to miss.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <ThermometerSun className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Temperature Issues</h4>
                                    <p className="text-slate-600 text-sm">Your fridge should be at 37-40°F (3-4°C). Too warm and food spoils faster. During San Diego's heat waves, make sure your fridge isn't struggling—avoid keeping the door open and check that seals are tight.</p>
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
                                    <h3 className="font-bold text-slate-900 mb-3">Cleaning Supplies</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Baking soda (lots of it)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> White vinegar</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Dish soap</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Warm water</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Activated charcoal (for severe odors)</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Tools</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Microfiber cloths</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Old toothbrush</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Spray bottle</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Cooler with ice packs</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="mt-4 p-3 bg-amber-50 rounded-lg">
                                <p className="text-sm text-amber-800">
                                    ⚠️ <strong>Skip the bleach:</strong> While tempting for bad smells, bleach can leave its own strong odor that transfers to food. Baking soda and vinegar are safer and equally effective.
                                </p>
                            </div>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Step-by-Step Fridge Deep Cleaning
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

                        {/* Stubborn Odors Section */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            For Stubborn or Extreme Odors
                        </h2>
                        <p className="text-slate-600">
                            Sometimes a regular cleaning isn't enough—like after a power outage or discovering something that's been "aging" for weeks. Here are heavy-duty solutions:
                        </p>
                        <div className="bg-teal-50 p-6 rounded-xl my-6 not-prose">
                            <ul className="space-y-4 text-slate-700">
                                <li className="flex gap-3">
                                    <Sparkles className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Activated Charcoal:</strong> Place bowls of activated charcoal throughout the fridge for 24-48 hours. It's more absorbent than baking soda for severe smells.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Sparkles className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Coffee Grounds:</strong> Spread dry coffee grounds on a baking sheet and leave in the fridge overnight. The coffee scent absorbs other odors.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Sparkles className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Newspaper:</strong> Crumple newspaper and stuff the fridge. The paper absorbs moisture and odors—leave for 2-3 days, replacing daily.</span>
                                </li>
                                <li className="flex gap-3">
                                    <Sparkles className="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Vanilla Extract:</strong> Soak cotton balls in vanilla extract and place in the fridge for a pleasant scent while other absorbers work.</span>
                                </li>
                            </ul>
                        </div>

                        {/* Prevention Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Preventing Future Fridge Odors
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Weekly Fridge Check</h4>
                                    <p className="text-slate-600 text-sm">Before grocery shopping, spend 5 minutes checking for expired items and leftover containers. This one habit prevents most fridge odor issues.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Keep Baking Soda Inside</h4>
                                    <p className="text-slate-600 text-sm">An open box of baking soda absorbs odors before they become problems. Replace it every 30 days. Some people use the old box for cleaning before opening a new one.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Store Strong-Smelling Foods Properly</h4>
                                    <p className="text-slate-600 text-sm">Onions, fish, garlic, and certain cheeses should be wrapped well or stored in airtight containers. Their smells can transfer to other foods, especially butter and milk.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <CheckCircle className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Clean Spills Immediately</h4>
                                    <p className="text-slate-600 text-sm">Don't wait for cleaning day. Wipe up drips and spills right away before they dry, absorb into surfaces, or spread to other areas.</p>
                                </div>
                            </div>
                        </div>

                        {/* San Diego Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Fridge Tips
                        </h2>
                        <div className="bg-teal-50 p-6 rounded-xl my-6 not-prose">
                            <div className="space-y-4 text-slate-700">
                                <p>
                                    <strong>🌡️ Heat Wave Season:</strong> During San Diego's occasional heat waves (typically August-October), check your fridge temperature. If your compressor is working overtime, food may spoil faster. Keep the fridge well-stocked (but not packed)—thermal mass helps maintain consistent temps.
                                </p>
                                <p>
                                    <strong>🎉 After Entertaining:</strong> San Diego's perfect weather means lots of outdoor entertaining. After parties, do a quick fridge audit—those guacamole leftovers and half-eaten appetizers won't last long. Toss anything sitting out for more than 2 hours.
                                </p>
                                <p>
                                    <strong>🐟 Fresh Seafood:</strong> Living near the ocean means fresh fish—but it's also the fastest to smell. Store raw seafood on ice in the coldest part of your fridge and use within 1-2 days.
                                </p>
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
                            <h3 className="text-2xl font-bold mb-3">Need a Full Kitchen Deep Clean?</h3>
                            <p className="text-teal-100 mb-6">
                                {COMPANY_NAME} kitchen deep cleaning includes refrigerators inside and out, plus all other appliances, cabinets, and surfaces. Start fresh with a professional clean.
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

                        <RelatedArticles currentSlug="how-to-get-rid-of-bad-smell-in-the-fridge" />

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

export default FridgeOdorRemovalPage;
