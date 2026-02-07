/**
 * Window Cleaning Guide - San Diego
 * URL: /blog/how-to-clean-windows-like-a-pro
 */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Sun,
    Droplets,
    Wind,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';

const WindowCleaningPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "How often should I clean my windows?",
            answer: "For most San Diego homes, clean interior windows every 1-2 months and exterior windows quarterly. Coastal properties may need exterior cleaning monthly due to salt spray. Spring and fall are ideal times for thorough cleaning."
        },
        {
            question: "What's the best weather for window cleaning?",
            answer: "Clean windows on an overcast day or when windows are in shade. Direct sunlight causes cleaning solution to dry too quickly, leaving streaks. San Diego's morning marine layer often provides ideal conditions before 10am."
        },
        {
            question: "Why do my windows streak after cleaning?",
            answer: "Streaks are usually caused by cleaning in direct sun, using too much solution, using dirty equipment, or not drying properly. Use a squeegee with fresh solution and work quickly before the glass dries."
        },
        {
            question: "Can I use newspaper to clean windows?",
            answer: "The newspaper method is outdated—modern newspaper inks can leave residue. Use clean microfiber cloths or a professional squeegee instead. They're reusable and give better results."
        }
    ];

    const howToSteps = [
        {
            name: "Gather Supplies",
            text: "You'll need a bucket, glass cleaner (or DIY solution of water, vinegar, and dish soap), squeegee, microfiber cloths, and a scrubber or sponge. For high windows, add an extension pole."
        },
        {
            name: "Remove Dust and Debris",
            text: "Brush or vacuum window frames, tracks, and sills first. This prevents turning dust into muddy streaks when wet. Use a dry brush or vacuum attachment."
        },
        {
            name: "Clean Window Tracks",
            text: "Spray tracks with cleaner and let sit. Use an old toothbrush or detail brush to scrub. Wipe out debris with paper towels. This step makes a huge difference in overall appearance."
        },
        {
            name: "Pre-Scrub Tough Spots",
            text: "For bird droppings, tree sap, or dried-on residue, apply cleaner and let it soak for a minute. Gently scrub with a non-scratch pad. Never use abrasive materials that can scratch glass."
        },
        {
            name: "Apply Cleaning Solution",
            text: "Wet the window completely with your scrubber or sponge. Work from top to bottom. Make sure the entire surface is wet—dry spots will streak."
        },
        {
            name: "Squeegee from Top to Bottom",
            text: "Start at the top corner and pull the squeegee down in a straight line. Wipe the blade after each stroke. Overlap each pass slightly to avoid leaving lines."
        },
        {
            name: "Wipe Edges and Corners",
            text: "Use a lint-free microfiber cloth to catch drips along edges and in corners the squeegee can't reach. This is the secret to truly streak-free windows."
        },
        {
            name: "Clean Frames and Sills",
            text: "Wipe down frames with a damp cloth. Clean sills and any visible screens. Stand back and check your work from different angles to catch any missed spots."
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `How to Clean Windows Like a Pro | ${COMPANY_NAME}`,
            description: 'Professional window cleaning techniques for streak-free results. Tips for San Diego homes dealing with salt spray, hard water spots, and pollen.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How to Clean Windows Like a Pro"
                description="Professional techniques for streak-free window cleaning. Perfect for San Diego homes with coastal salt spray and hard water challenges."
                slug="how-to-clean-windows-like-a-pro"
                datePublished="2024-01-18"
                dateModified="2024-01-18"
            />
            <HowToSchema
                name="How to Clean Windows Like a Professional"
                description="Step-by-step guide to achieving streak-free, sparkling windows using professional techniques."
                totalTime="PT1H30M"
                supply={[
                    "Glass cleaner or DIY solution",
                    "Bucket",
                    "Microfiber cloths",
                    "White vinegar (optional)",
                    "Dish soap"
                ]}
                tool={[
                    "Professional squeegee",
                    "Window scrubber or sponge",
                    "Extension pole for high windows",
                    "Detail brush or toothbrush"
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
                                How-To
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 7 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            How to Clean Windows Like a Pro
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Professional techniques for streak-free, sparkling windows that maximize your San Diego views.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 18, 2024</span>
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
                                <strong>For streak-free windows:</strong> Clean on cloudy days, use a professional squeegee, work top-to-bottom, wipe the blade between strokes, and dry edges with microfiber. The secret is working quickly before the solution dries.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Living in San Diego means spectacular views—ocean panoramas, mountain vistas, and endless sunshine. But dirty windows can diminish all that natural beauty. Whether you're dealing with salt spray in La Jolla, pollen in the spring, or hard water spots from your sprinklers, clean windows make a dramatic difference in how your home looks and feels.
                        </p>
                        <p className="text-slate-600 mt-4">
                            This guide teaches you the same techniques professional window cleaners use to achieve that crystal-clear, streak-free finish.
                        </p>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Professional Window Cleaning Process
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
                            San Diego Window Cleaning Tips
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Salt Spray on Coastal Windows</h3>
                                    <p className="text-slate-600 text-sm">Near the ocean, salt spray builds up quickly. Add a tablespoon of white vinegar to your cleaning solution to cut through salt residue. Coastal homes may need exterior cleaning monthly.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Sun className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Hard Water Spots</h3>
                                    <p className="text-slate-600 text-sm">San Diego's hard water leaves mineral deposits. For stubborn spots, apply undiluted white vinegar, let sit 5 minutes, then scrub gently. Avoid getting vinegar on window frames or screens.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Wind className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Timing Is Everything</h3>
                                    <p className="text-slate-600 text-sm">Clean windows during morning marine layer (before 10am) or late afternoon when windows are shaded. Midday sun causes streaking by drying solution too fast.</p>
                                </div>
                            </div>
                        </div>

                        {/* DIY Solution Recipe */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            DIY Window Cleaning Solution
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <h3 className="font-bold text-slate-900 mb-4">Professional-Grade Recipe:</h3>
                            <ul className="space-y-2">
                                <li className="flex items-center gap-2 text-slate-700">
                                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                    2 cups warm water
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                    1/4 cup white vinegar
                                </li>
                                <li className="flex items-center gap-2 text-slate-700">
                                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                    1/2 teaspoon dish soap (no moisturizers)
                                </li>
                            </ul>
                            <p className="text-slate-600 text-sm mt-4">
                                Mix in a spray bottle or bucket. For extra-grimy windows, double the vinegar. This solution costs pennies and works as well as commercial cleaners.
                            </p>
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
                            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">Professional Window Cleaning</h3>
                            <p className="text-teal-100 mb-6">
                                Interior window cleaning is available as an add-on to our deep cleaning and move-in/out services. Let us handle the hard-to-reach spots.
                            </p>
                            <Link
                                to="/service/deep-cleaning"
                                className="inline-flex items-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                            >
                                Explore Deep Cleaning Options
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default WindowCleaningPage;
