/**
 * Laundry Room Deep Cleaning Guide - San Diego
 * URL: /blog/how-to-deep-clean-your-laundry-room
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
    Droplets,
    Wind,
    MapPin
} from 'lucide-react';
import { PHONE_NUMBER } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';

const LaundryRoomCleaningPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "How often should I deep clean my laundry room?",
            answer: "Deep clean your laundry room every 3-4 months. However, clean your dryer lint trap after every load and run a washer cleaning cycle monthly. San Diego's hard water makes monthly washer cleaning especially important to prevent mineral buildup."
        },
        {
            question: "Why does my washing machine smell bad?",
            answer: "Front-loading washers are prone to mold and mildew in the door gasket due to trapped moisture. Always leave the door ajar between loads, wipe the gasket dry after use, and run monthly cleaning cycles with washing machine cleaner or white vinegar."
        },
        {
            question: "How do I clean my dryer vent?",
            answer: "Disconnect the dryer, remove the vent hose, and use a vent brush to remove lint buildup. Clean the exterior vent flap too. Do this annually minimum—more often with heavy use. Clogged vents are a leading cause of house fires."
        },
        {
            question: "Can hard water damage my washing machine?",
            answer: "Yes. San Diego's hard water causes mineral deposits that reduce efficiency and shorten appliance lifespan. Use a water softener or add white vinegar to rinse cycles. Clean your washer monthly to dissolve buildup."
        }
    ];

    const howToSteps = [
        {
            name: "Clear and Organize",
            text: "Remove everything from surfaces, shelves, and the floor. Sort laundry supplies and discard expired or unused products. This gives you full access to all surfaces."
        },
        {
            name: "Clean the Washing Machine",
            text: "Run an empty hot cycle with 2 cups of white vinegar or washing machine cleaner. Wipe the drum, door gasket (especially for front-loaders), and detergent dispenser. Clean the exterior and control panel."
        },
        {
            name: "Clean the Dryer",
            text: "Empty the lint trap and vacuum the lint trap housing. Wipe down the drum interior with a damp cloth. Clean the exterior, door seal, and control panel. Don't forget the top of the dryer where dust accumulates."
        },
        {
            name: "Clean Dryer Vent and Exhaust",
            text: "Disconnect the dryer from the vent. Use a vent brush to remove lint from the hose and wall duct. Check the exterior vent flap. Reconnect and confirm airflow."
        },
        {
            name: "Clean Sink and Counters",
            text: "If you have a utility sink, scrub it with an all-purpose cleaner. Remove any laundry detergent residue from counters. Clean faucets and handles."
        },
        {
            name: "Wipe Cabinets and Shelves",
            text: "Dust and wipe down all storage areas. Clean cabinet fronts of any detergent drips or dust. Organize products by type—detergents, stain removers, fabric softeners."
        },
        {
            name: "Clean Walls and Baseboards",
            text: "Wipe down walls to remove dust and any detergent splatters. Laundry rooms accumulate more dust than most rooms. Clean baseboards and any floor vents."
        },
        {
            name: "Mop the Floor",
            text: "Sweep or vacuum first to remove lint and debris. Mop with appropriate cleaner for your floor type. Clean behind and under appliances if accessible."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How to Deep Clean Your Laundry Room"
                description="Step-by-step guide to deep cleaning your laundry room, including washer, dryer, vents, and surfaces."
                slug="how-to-deep-clean-your-laundry-room"
                datePublished="2024-01-19"
                dateModified="2024-01-19"
            />
            <HowToSchema
                name="How to Deep Clean a Laundry Room"
                description="Complete guide to cleaning your laundry room from top to bottom, including appliances and dryer vent."
                totalTime="PT2H"
                supply={[
                    "White vinegar or washing machine cleaner",
                    "All-purpose cleaner",
                    "Microfiber cloths",
                    "Dryer vent brush",
                    "Vacuum with attachments"
                ]}
                tool={[
                    "Scrub brush",
                    "Bucket",
                    "Step stool",
                    "Screwdriver (for vent access)"
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
                                How-To
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 7 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            How to Deep Clean Your Laundry Room
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            From washing machine maintenance to dryer vent safety—keep your laundry room fresh and efficient.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 19, 2024</span>
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
                                <strong>Deep clean your laundry room in 8 steps:</strong> Clear and organize, clean washer with vinegar cycle, wipe dryer interior, clean dryer vent (critical for safety), scrub the utility sink, wipe cabinets and shelves, clean walls and baseboards, and finish by mopping floors. Allow 1.5-2 hours.
                            </p>
                        </div>

                        {/* Safety Warning */}
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 not-prose">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-amber-900 mb-2">Safety Alert: Dryer Vents</h3>
                                    <p className="text-amber-800 text-sm">
                                        Clogged dryer vents cause an estimated 2,900 home fires annually. If your dryer takes longer than usual to dry clothes, runs hot, or you notice a burning smell, stop using it and clean the vent immediately.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Your laundry room works hard—processing loads of clothes, towels, and linens week after week. But when was the last time you gave it a proper deep clean? A neglected laundry room not only looks and smells worse over time, but can actually become a safety hazard and reduce your appliance efficiency.
                        </p>
                        <p className="text-slate-600 mt-4">
                            This guide walks you through a complete laundry room deep clean, with special attention to the maintenance tasks that extend appliance life and keep your family safe.
                        </p>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Laundry Room Deep Cleaning Process
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
                            San Diego Laundry Room Tips
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Hard Water Buildup</h3>
                                    <p className="text-slate-600 text-sm">San Diego has some of the hardest water in California. Run a monthly cleaning cycle with white vinegar to dissolve mineral deposits. Consider a water softener if buildup is severe.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Wind className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Dry Climate Advantage</h3>
                                    <p className="text-slate-600 text-sm">Our low humidity helps prevent washer mold, but you should still leave the washer door open between loads. Front-loaders are especially prone to gasket mold if sealed wet.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Beach Laundry Tips</h3>
                                    <p className="text-slate-600 text-sm">Shake out sandy items before washing to protect your machine's pump. Rinse swimwear separately first—chlorine and salt can damage other fabrics over time.</p>
                                </div>
                            </div>
                        </div>

                        {/* Maintenance Schedule */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Maintenance Schedule
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Clean lint trap</span>
                                    <span className="text-teal-600 font-bold">Every load</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Wipe washer gasket</span>
                                    <span className="text-teal-600 font-bold">Weekly</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Run washer cleaning cycle</span>
                                    <span className="text-teal-600 font-bold">Monthly</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Clean dryer vent hose</span>
                                    <span className="text-teal-600 font-bold">Annually</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Full laundry room deep clean</span>
                                    <span className="text-teal-600 font-bold">Every 3-4 months</span>
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
                        </div>                        <RelatedArticles currentSlug="how-to-deep-clean-your-laundry-room" />



                        {/* CTA */}
                        <div className="bg-teal-600 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">Include Laundry Room in Your Deep Clean</h3>
                            <p className="text-teal-100 mb-6">
                                Our deep cleaning service covers laundry room appliance exteriors, surfaces, and floors. Schedule your whole-home refresh today.
                            </p>
                            <Link
                                href="/booking"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
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

export default LaundryRoomCleaningPage;
