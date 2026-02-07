/**
 * Stainless Steel Appliance Cleaning Guide - San Diego
 * URL: /blog/how-to-clean-stainless-steel-appliances
 */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Droplets,
    AlertTriangle,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';

const StainlessSteelPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "Why does my stainless steel show streaks after cleaning?",
            answer: "You're likely using too much product, not wiping with the grain, or using a paper towel that leaves lint. Use microfiber cloths, wipe in the direction of the grain, and buff with a dry cloth. Less product is usually more effective."
        },
        {
            question: "Can I use Windex on stainless steel?",
            answer: "While Windex won't damage stainless steel, it's not ideal—it can leave streaks. Stick to products designed for stainless or DIY solutions like diluted dish soap or vinegar. These work better and cost less."
        },
        {
            question: "How do I find the grain on stainless steel?",
            answer: "Look closely at the surface—you'll see faint lines running in one direction. These lines are the 'grain' created during manufacturing. Always wipe parallel to these lines for best results and to avoid scratching."
        },
        {
            question: "How do I remove water spots from stainless steel?",
            answer: "White vinegar is excellent for hard water spots. Apply with a soft cloth, let sit briefly, then wipe in the direction of the grain. Finish with a drop of olive oil for shine. San Diego's hard water makes this a common issue."
        }
    ];

    const howToSteps = [
        {
            name: "Identify the Grain",
            text: "Before cleaning, identify the direction of the grain (faint lines in the steel). All wiping should be done with the grain, never across it. This prevents scratching and ensures streak-free results."
        },
        {
            name: "Remove Loose Debris",
            text: "Wipe the surface with a dry microfiber cloth to remove dust, crumbs, and loose particles. This prevents scratching when you apply liquid cleaners."
        },
        {
            name: "Apply Your Cleaner",
            text: "Spray cleaner onto your cloth, not directly on the appliance (prevents drips into crevices). Use stainless steel cleaner, dish soap and water, or a 1:1 vinegar-water solution."
        },
        {
            name: "Wipe With the Grain",
            text: "Using light pressure, wipe in the direction of the grain in long, even strokes. Cover the entire surface systematically. Avoid circular motions which leave swirl marks."
        },
        {
            name: "Remove Stubborn Spots",
            text: "For stuck-on food or grease, make a paste of baking soda and water. Apply gently with a soft cloth, rubbing with the grain. Rinse with damp cloth immediately after."
        },
        {
            name: "Rinse and Dry",
            text: "Wipe the surface with a clean, damp cloth to remove any cleaner residue. Immediately follow with a dry microfiber cloth to prevent water spots—especially important with hard water."
        },
        {
            name: "Polish for Shine (Optional)",
            text: "Apply a tiny amount of olive oil or mineral oil to a cloth and buff with the grain. This adds shine and provides a protective layer against fingerprints. Use very sparingly."
        },
        {
            name: "Maintain Daily",
            text: "Keep a microfiber cloth handy and wipe down appliances after cooking. Quick maintenance prevents buildup and keeps them looking new between deep cleans."
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `How to Clean Stainless Steel Appliances | ${COMPANY_NAME}`,
            description: 'Streak-free stainless steel cleaning guide. Remove fingerprints, water spots, and grease from your appliances. Tips for San Diego hard water.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How to Clean Stainless Steel Appliances"
                description="Complete guide to cleaning stainless steel appliances streak-free. Tips for handling fingerprints, hard water spots, and grease."
                slug="how-to-clean-stainless-steel-appliances"
                datePublished="2024-01-23"
                dateModified="2024-01-23"
            />
            <HowToSchema
                name="How to Clean Stainless Steel Appliances"
                description="Step-by-step guide to cleaning stainless steel for a streak-free, fingerprint-resistant finish."
                totalTime="PT30M"
                supply={[
                    "Stainless steel cleaner or dish soap",
                    "White vinegar",
                    "Olive or mineral oil",
                    "Microfiber cloths (2-3)"
                ]}
                tool={[
                    "Spray bottle",
                    "Soft sponge"
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
                                <Clock className="w-4 h-4" /> 6 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            How to Clean Stainless Steel Appliances
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Get streak-free, fingerprint-free stainless steel. The right technique makes all the difference.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 23, 2024</span>
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
                                <strong>The secret to streak-free stainless:</strong> Always wipe with the grain (not circles), use microfiber cloths, spray cleaner on the cloth (not the appliance), and dry immediately. For extra shine, buff with a tiny amount of olive oil. San Diego's hard water? Use vinegar to remove mineral spots.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Stainless steel appliances look stunning when clean—and frustratingly smudgy when they're not. Every fingerprint, water spot, and smear shows. But here's the good news: once you know the technique, stainless steel is actually easy to maintain.
                        </p>
                        <p className="text-slate-600 mt-4">
                            The key is understanding that stainless steel has a "grain"—microscopic lines running in one direction. Working with this grain, not against it, is the difference between streaky frustration and professional-looking results.
                        </p>

                        {/* Warning Box */}
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-8 not-prose">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-6 h-6 text-red-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-red-900 mb-2">Never Use These:</h3>
                                    <ul className="text-red-800 text-sm space-y-1">
                                        <li>• Abrasive scrubbers or steel wool (scratches permanently)</li>
                                        <li>• Chlorine bleach (causes pitting and discoloration)</li>
                                        <li>• Ammonia-based cleaners (can damage finish)</li>
                                        <li>• Paper towels (leave lint and micro-scratches)</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Stainless Steel Cleaning Process
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

                        {/* DIY Solutions */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            DIY Cleaning Solutions
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <div className="space-y-4">
                                <div className="flex items-start gap-3">
                                    <Sparkles className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-slate-900">Daily Cleaning</h3>
                                        <p className="text-slate-600 text-sm">Few drops of dish soap in warm water. Wipe with the grain, rinse, dry immediately.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Droplets className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-slate-900">Hard Water Spots</h3>
                                        <p className="text-slate-600 text-sm">1:1 white vinegar and water. Spray, wait 30 seconds, wipe with grain, dry thoroughly.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Sparkles className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-slate-900">Grease & Fingerprints</h3>
                                        <p className="text-slate-600 text-sm">Rubbing alcohol or club soda. Apply, wipe with grain, finish with dry cloth.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-3">
                                    <Sparkles className="w-5 h-5 text-teal-500 flex-shrink-0 mt-1" />
                                    <div>
                                        <h3 className="font-bold text-slate-900">Polish & Protect</h3>
                                        <p className="text-slate-600 text-sm">Tiny amount of olive oil on dry cloth. Buff with grain for shine and fingerprint resistance.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* San Diego Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Stainless Steel Tips
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Hard Water Challenge</h3>
                                    <p className="text-slate-600 text-sm">SD's hard water leaves mineral deposits on everything, including appliances. Keep a vinegar solution handy and dry surfaces immediately after any water contact. Monthly vinegar treatment prevents buildup.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Fingerprint-Resistant Models</h3>
                                    <p className="text-slate-600 text-sm">If you're buying new appliances, consider fingerprint-resistant stainless steel finishes. They cost slightly more but dramatically reduce cleaning frequency. Worth it for busy households.</p>
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
                            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">Professional Kitchen Deep Clean</h3>
                            <p className="text-teal-100 mb-6">
                                Our deep cleaning service includes all appliance surfaces, inside and out. We'll get your entire kitchen sparkling, including hard-to-reach spots.
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

export default StainlessSteelPage;
