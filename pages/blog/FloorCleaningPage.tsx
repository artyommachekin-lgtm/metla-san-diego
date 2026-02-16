/**
 * Floor Cleaning Guide (Hardwood & Tile) - San Diego
 * URL: /blog/how-to-clean-hardwood-and-tile-floors
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
import { PHONE_NUMBER } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';

const FloorCleaningPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "How often should I mop my floors?",
            answer: "Mop tile floors weekly and hardwood floors every 1-2 weeks. High-traffic areas may need more frequent attention. In San Diego, homes near the beach may need more frequent mopping due to tracked-in sand."
        },
        {
            question: "Can I use vinegar on hardwood floors?",
            answer: "Use vinegar sparingly on sealed hardwood—mix 1/2 cup per gallon of water. Avoid vinegar on unsealed, waxed, or oiled wood as it can damage the finish. When in doubt, use a pH-neutral hardwood cleaner."
        },
        {
            question: "Why are my tile floors still dirty after mopping?",
            answer: "You may be using too much cleaner (leaves residue), dirty mop water, or not rinsing. Change your mop water frequently and rinse with clean water. For grout, you'll need a brush and dedicated grout cleaner."
        },
        {
            question: "How do I remove hard water stains from tile?",
            answer: "Apply white vinegar or a commercial hard water remover, let sit 5-10 minutes, then scrub with a non-abrasive pad. San Diego's hard water makes this a common issue—consider a final rinse with distilled water."
        }
    ];

    const howToSteps = [
        {
            name: "Remove Loose Debris",
            text: "Sweep, vacuum, or dust mop to remove dirt, sand, and grit. This is crucial—mopping over grit scratches floors. Use a vacuum with a hard floor setting or a microfiber dust mop."
        },
        {
            name: "Choose the Right Cleaner",
            text: "Use pH-neutral cleaners for hardwood and tile-safe cleaners for ceramic/porcelain. Avoid wax-based products unless your floor specifically requires them. Less is more—excess cleaner leaves residue."
        },
        {
            name: "Mop in Sections",
            text: "Work in manageable sections, starting from the far corner and moving toward the door. For hardwood, mop in the direction of the wood grain. Change water when it becomes dirty."
        },
        {
            name: "Don't Oversaturate",
            text: "Use a damp mop, not a wet one—especially on hardwood. Excess water seeps into seams and can cause warping, swelling, or mold underneath. Wring your mop thoroughly."
        },
        {
            name: "Clean Grout Lines (Tile)",
            text: "For tile floors, scrub grout lines with a grout brush and appropriate cleaner. Baking soda paste works for light stains. For deep cleaning, use a steam cleaner or professional treatment."
        },
        {
            name: "Rinse if Needed",
            text: "Some cleaners require a rinse to prevent residue. Go over the floor with a clean, damp mop. This is especially important with San Diego's hard water—residue builds up faster."
        },
        {
            name: "Dry the Floor",
            text: "For hardwood, dry with a clean microfiber cloth to prevent water spots. Tile can air dry. Avoid walking on wet floors—footprints show on freshly cleaned surfaces."
        },
        {
            name: "Maintain Regularly",
            text: "Use doormats to catch dirt before it enters. Place felt pads under furniture legs. Sweep or dust mop frequently to prevent scratching from grit buildup."
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `How to Clean Hardwood and Tile Floors | Expert Cleaning Tips`,
            description: 'Complete guide to cleaning hardwood and tile floors. Tips for San Diego homes dealing with sand, hard water, and high-traffic areas.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How to Clean Hardwood and Tile Floors"
                description="Complete guide to cleaning and maintaining hardwood and tile floors. Expert tips for San Diego homes."
                slug="how-to-clean-hardwood-and-tile-floors"
                datePublished="2024-01-22"
                dateModified="2024-01-22"
            />
            <HowToSchema
                name="How to Clean Hardwood and Tile Floors"
                description="Step-by-step guide to properly clean and maintain hardwood and tile flooring."
                totalTime="PT1H"
                supply={[
                    "pH-neutral floor cleaner",
                    "Microfiber mop",
                    "Bucket",
                    "Grout brush (for tile)",
                    "Microfiber cloths"
                ]}
                tool={[
                    "Vacuum or broom",
                    "Mop with wringer",
                    "Spray bottle"
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
                                <Clock className="w-4 h-4" /> 8 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            How to Clean Hardwood and Tile Floors
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            The right techniques for beautiful, long-lasting floors—whether you have classic hardwood or cool tile.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 22, 2024</span>
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
                                <strong>For all floors:</strong> Always remove loose dirt first (sweep/vacuum), use appropriate pH-neutral cleaners, don't oversaturate (especially hardwood), and change mop water frequently. San Diego tip: hard water leaves residue, so rinse with clean water and dry hardwood immediately.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            San Diego homes often feature tile in kitchens, bathrooms, and entryways, with hardwood in living areas and bedrooms. Both floor types are popular for good reasons—they're durable, beautiful, and perfect for our climate. But they require different care to look their best.
                        </p>
                        <p className="text-slate-600 mt-4">
                            The biggest mistake people make? Using too much water (damages hardwood) or too much cleaner (leaves residue on both). Here's how to clean your floors properly.
                        </p>

                        {/* Warning */}
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-8 not-prose">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-amber-900 mb-2">Hardwood Warning</h3>
                                    <p className="text-amber-800 text-sm">
                                        Never use a steam mop on hardwood floors. The heat and moisture can cause warping, cupping, and damage to the finish. Steam is fine for sealed tile and grout.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Floor Cleaning Process
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

                        {/* Comparison Table */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Hardwood vs. Tile Care
                        </h2>
                        <div className="my-6 not-prose overflow-x-auto">
                            <table className="w-full text-sm">
                                <thead>
                                    <tr className="bg-slate-100">
                                        <th className="p-3 text-left font-bold">Factor</th>
                                        <th className="p-3 text-left font-bold">Hardwood</th>
                                        <th className="p-3 text-left font-bold">Tile</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium">Water Amount</td>
                                        <td className="p-3">Damp mop only</td>
                                        <td className="p-3">More water OK</td>
                                    </tr>
                                    <tr className="border-b bg-slate-50">
                                        <td className="p-3 font-medium">Steam Mop</td>
                                        <td className="p-3 text-red-600">Never</td>
                                        <td className="p-3 text-green-600">Yes, great for grout</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium">Vinegar</td>
                                        <td className="p-3">Diluted, sparingly</td>
                                        <td className="p-3">Great for hard water</td>
                                    </tr>
                                    <tr className="border-b bg-slate-50">
                                        <td className="p-3 font-medium">Mop Direction</td>
                                        <td className="p-3">With the grain</td>
                                        <td className="p-3">Any direction</td>
                                    </tr>
                                    <tr className="border-b">
                                        <td className="p-3 font-medium">Drying</td>
                                        <td className="p-3">Dry immediately</td>
                                        <td className="p-3">Air dry OK</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        {/* San Diego Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Floor Care Tips
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Hard Water Issues</h3>
                                    <p className="text-slate-600 text-sm">SD's hard water leaves mineral deposits. Use distilled water for final rinses on tile, and dry hardwood immediately. A monthly vinegar treatment can help remove buildup from tile.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Beach Sand</h3>
                                    <p className="text-slate-600 text-sm">Sand is highly abrasive. Use good doormats and ask guests to remove shoes. Sweep or vacuum before mopping—never mop over grit, it scratches both hardwood and tile.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Tile Advantage</h3>
                                    <p className="text-slate-600 text-sm">Tile stays cool in summer—a major benefit in San Diego. It's also more forgiving of humidity near the coast where hardwood may expand and contract seasonally.</p>
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
                        </div>                        <RelatedArticles currentSlug="how-to-clean-hardwood-and-tile-floors" />



                        {/* CTA */}
                        <div className="bg-teal-600 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">Professional Floor Cleaning</h3>
                            <p className="text-teal-100 mb-6">
                                Our deep cleaning service includes thorough floor cleaning—mopping, baseboard wiping, and attention to grout lines.
                            </p>
                            <Link
                                to="/booking"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                            >
                                Book a Cleaning
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                to="/service/deep-cleaning"
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

export default FloorCleaningPage;
