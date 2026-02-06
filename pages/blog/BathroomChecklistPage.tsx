/**
 * Bathroom Deep Cleaning Checklist - San Diego
 * URL: /bathroom-deep-cleaning-checklist/
 */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Droplets,
    Wind,
    Sparkles,
    AlertTriangle,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, LOCATIONS } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';

const BathroomChecklistPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "How often should you deep clean a bathroom?",
            answer: "Deep clean your bathroom every 2-4 weeks, with weekly maintenance cleaning in between. High-traffic bathrooms or those in coastal San Diego areas may need deep cleaning every 2 weeks due to increased humidity and salt air exposure."
        },
        {
            question: "What's the best way to remove mold from bathroom grout?",
            answer: "For mild mold, spray with a 1:1 vinegar-water solution and scrub with a stiff brush. For stubborn mold, apply a paste of baking soda and hydrogen peroxide, let sit 10 minutes, then scrub. San Diego's coastal humidity makes regular grout sealing essential."
        },
        {
            question: "How do you get rid of hard water stains in San Diego?",
            answer: "San Diego's hard water leaves white mineral deposits on fixtures. Apply undiluted white vinegar to the stained area, wrap with a plastic bag or cloth, let sit 30-60 minutes, then scrub. For glass shower doors, a razor blade scraper works on stubborn buildup."
        },
        {
            question: "Should I clean the bathroom fan during deep cleaning?",
            answer: "Absolutely. Bathroom exhaust fans collect dust and moisture, reducing efficiency. Remove the cover, soak it in soapy water, and vacuum dust from the fan blades. A clean fan prevents mold growth by properly venting humidity."
        }
    ];

    const howToSteps = [
        {
            name: "Remove and Pre-Soak",
            text: "Remove all items from counters, shower, and tub. Take out trash, rugs, and towels. Pre-soak shower door tracks, soap dishes, and toothbrush holders in hot soapy water."
        },
        {
            name: "Apply Cleaning Products",
            text: "Spray toilet bowl cleaner inside the bowl. Apply shower/tub cleaner to walls, floor, and fixtures. Let products sit 5-10 minutes while you tackle other areas."
        },
        {
            name: "Clean from Top to Bottom",
            text: "Start with exhaust fan, light fixtures, and top of medicine cabinet. Work down to mirrors, walls, and tile. This prevents dirty water from dripping onto already-cleaned surfaces."
        },
        {
            name: "Deep Clean the Shower/Tub",
            text: "Scrub all walls, corners, and floor. Clean grout lines with a brush. Descale showerhead (soak in vinegar overnight for best results). Wipe down glass doors or curtain rod."
        },
        {
            name: "Sanitize the Toilet",
            text: "Scrub inside the bowl with a brush. Clean the exterior, including base, behind, and around hinges. Don't forget the handle and surrounding wall area. Wipe tank top and lid."
        },
        {
            name: "Clean Sink and Vanity",
            text: "Scrub sink basin, faucet, and handles. Clean inside and under the vanity. Wipe down cabinet fronts and handles. Organize and wipe drawer interiors."
        },
        {
            name: "Polish Mirrors and Glass",
            text: "Use glass cleaner and a microfiber cloth for streak-free mirrors. Clean any glass shelving. Wipe down light fixtures and switch plates."
        },
        {
            name: "Finish with Floors",
            text: "Sweep or vacuum, then mop with appropriate floor cleaner. Get into corners and behind the toilet. Wipe baseboards. Replace clean rugs and restock supplies."
        }
    ];

    const checklistItems = [
        { area: "Toilet", tasks: ["Scrub inside bowl", "Clean toilet seat (top & bottom)", "Wipe exterior & base", "Clean behind toilet", "Sanitize handle", "Wipe surrounding floor"] },
        { area: "Shower/Tub", tasks: ["Scrub walls and corners", "Clean grout lines", "Descale showerhead", "Wipe fixtures", "Clean drain", "Wash shower curtain or clean glass doors"] },
        { area: "Sink & Vanity", tasks: ["Scrub sink basin", "Clean faucet & handles", "Wipe countertop", "Clean cabinet fronts", "Organize under sink", "Empty trash"] },
        { area: "Mirrors & Glass", tasks: ["Clean all mirrors", "Wipe light fixtures", "Clean glass shelves", "Polish chrome fixtures"] },
        { area: "Floors & Extras", tasks: ["Sweep/vacuum floor", "Mop entire floor", "Wipe baseboards", "Clean exhaust fan", "Wash bath mats", "Refill dispensers"] }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `Bathroom Deep Cleaning Checklist | San Diego Guide | ${COMPANY_NAME}`,
            description: 'Complete bathroom deep cleaning checklist for San Diego homes. Step-by-step guide to tackle hard water stains, mold prevention, and coastal humidity challenges.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    const featuredLocations = LOCATIONS.slice(0, 6);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Bathroom Deep Cleaning Checklist: The Complete San Diego Guide"
                description="Comprehensive bathroom cleaning checklist with step-by-step instructions. Expert tips for San Diego's hard water and coastal humidity."
                slug="bathroom-deep-cleaning-checklist"
                datePublished="2024-02-10"
                dateModified="2024-12-15"
            />
            <HowToSchema
                name="How to Deep Clean a Bathroom"
                description="A professional step-by-step guide to deep cleaning every area of your bathroom."
                totalTime="PT2H"
                supply={[
                    "Toilet bowl cleaner",
                    "All-purpose cleaner",
                    "Glass cleaner",
                    "White vinegar",
                    "Baking soda",
                    "Microfiber cloths",
                    "Toilet brush",
                    "Grout brush"
                ]}
                tool={[
                    "Scrub brushes",
                    "Spray bottles",
                    "Bucket and mop",
                    "Rubber gloves",
                    "Step stool",
                    "Vacuum or broom"
                ]}
                steps={howToSteps}
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
                            <span className="bg-teal-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Checklist
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 9 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            Bathroom Deep Cleaning Checklist: The Complete San Diego Guide
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Your printable, room-by-room checklist to transform your bathroom from grimy to gleaming—with special tips for San Diego's hard water.
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
                                <strong>Deep clean your bathroom in 8 steps:</strong> (1) Remove items and pre-soak fixtures, (2) apply cleaning products and let sit, (3) clean top to bottom, (4) scrub shower/tub and grout, (5) sanitize toilet inside and out, (6) clean sink and vanity, (7) polish mirrors and glass, (8) finish with floors. Allow 1.5-2 hours for a thorough deep clean. San Diego tip: Use vinegar for hard water stains—our water leaves mineral deposits on everything!
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Bathrooms take a beating. Between steam, soap scum, toothpaste splatter, and constant moisture, they need more than a quick wipe-down to stay truly clean. A proper deep clean every few weeks prevents mold growth, eliminates odors, and keeps your bathroom looking (and smelling) fresh.
                        </p>
                        <p className="text-slate-600">
                            If you live in San Diego, you face an extra challenge: our notoriously hard water. Those white, crusty deposits on your faucets, showerheads, and glass doors? That's calcium and magnesium from our water supply. This guide includes specific strategies for tackling San Diego's hard water stains alongside all your standard bathroom cleaning tasks.
                        </p>

                        {/* Printable Checklist */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Bathroom Deep Cleaning Checklist
                        </h2>
                        <p className="text-slate-600 mb-6">
                            Use this checklist to ensure you don't miss any spots. Print it out or save it to your phone for reference.
                        </p>

                        <div className="space-y-6 my-8">
                            {checklistItems.map((section, idx) => (
                                <div key={idx} className="bg-slate-50 p-5 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <span className="w-6 h-6 bg-teal-500 text-white text-sm rounded flex items-center justify-center">{idx + 1}</span>
                                        {section.area}
                                    </h3>
                                    <ul className="space-y-2">
                                        {section.tasks.map((task, taskIdx) => (
                                            <li key={taskIdx} className="flex items-center gap-3 text-slate-600 text-sm">
                                                <div className="w-4 h-4 border-2 border-slate-300 rounded flex-shrink-0" />
                                                {task}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            ))}
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Step-by-Step Deep Cleaning Guide
                        </h2>

                        <div className="space-y-6 my-8">
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

                        {/* San Diego-Specific Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Tackling San Diego's Hard Water
                        </h2>
                        <p className="text-slate-600">
                            San Diego consistently ranks among the hardest water cities in the U.S. Here's how to deal with the mineral buildup that plagues local bathrooms:
                        </p>

                        <div className="grid gap-4 my-6">
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Showerheads & Faucets</h4>
                                    <p className="text-slate-600 text-sm">Fill a plastic bag with white vinegar, secure it around the showerhead with a rubber band, and let soak overnight. In the morning, scrub with an old toothbrush and run water to flush. Repeat monthly for ongoing prevention.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Glass Shower Doors</h4>
                                    <p className="text-slate-600 text-sm">Those cloudy glass doors are coated with mineral deposits. Apply a paste of baking soda and dish soap, let sit 15 minutes, then scrub with a non-scratch pad. For stubborn spots, use a plastic razor scraper. Finish with Rain-X to repel future buildup.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Wind className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Toilet Bowl Rings</h4>
                                    <p className="text-slate-600 text-sm">That stubborn ring at the water line is mineral buildup, not stains. Turn off water, flush to drain, then apply a pumice stone (wet it first to avoid scratching). For ongoing prevention, drop a vinegar-baking soda "bomb" weekly.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-amber-50 border-l-4 border-amber-400 rounded-r-lg">
                                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Pro Tip: Consider a Water Softener</h4>
                                    <p className="text-slate-600 text-sm">If hard water is a constant battle, a whole-house water softener pays for itself in reduced cleaning time and longer appliance life. Local companies like Culligan San Diego or Kinetico can assess your home.</p>
                                </div>
                            </div>
                        </div>

                        {/* Coastal Humidity */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Mold Prevention for Coastal Homes
                        </h2>
                        <p className="text-slate-600">
                            If you live near the coast—La Jolla, Pacific Beach, Ocean Beach, Coronado, or Point Loma—your bathroom faces higher humidity from marine air. Mold loves moisture, so prevention is key:
                        </p>
                        <ul className="text-slate-600 space-y-2 my-4">
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Run the exhaust fan</strong> for 20-30 minutes after showering, not just during.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Squeegee shower walls</strong> after each use to reduce moisture on surfaces.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Leave the door open</strong> when not in use to promote airflow.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Seal grout annually</strong> with a quality grout sealer to prevent moisture penetration.</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                <span><strong>Check caulk regularly</strong> and replace when it starts to peel or discolor.</span>
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
                            <h3 className="text-2xl font-bold mb-3">Ready for a Sparkling Bathroom?</h3>
                            <p className="text-teal-100 mb-6">
                                Let {COMPANY_NAME} handle your bathroom deep clean. Our San Diego professionals know exactly how to tackle hard water stains, mold prevention, and every grimy corner.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/service/deep-cleaning"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                                >
                                    Book Deep Cleaning
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <a
                                    href={`tel:${PHONE_NUMBER}`}
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white rounded hover:bg-white/10 transition-colors"
                                >
                                    Call {PHONE_NUMBER}
                                </a>
                            </div>
                        </div>

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-4">Deep Cleaning Services in San Diego</h3>
                            <div className="flex flex-wrap gap-2">
                                {featuredLocations.map((loc) => (
                                    <Link
                                        key={loc.slug}
                                        to={`/location/${loc.slug}`}
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

export default BathroomChecklistPage;
