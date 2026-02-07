/**
 * Outdoor Patio Cleaning Guide - San Diego
 * URL: /blog/how-to-clean-your-outdoor-patio
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

const PatioCleaningPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "How often should I clean my outdoor patio?",
            answer: "Sweep weekly and deep clean seasonally (2-4 times per year). Near the coast, monthly hosing helps remove salt buildup. Clean immediately after parties, BBQs, or Santa Ana wind events that deposit dust and debris."
        },
        {
            question: "Can I pressure wash my patio?",
            answer: "Yes, but use appropriate PSI for your surface: 1500-2000 for wood decks, 2500-3000 for concrete/pavers. Hold the wand 6-12 inches away and test in an inconspicuous area first. Avoid pressure washing on windy days."
        },
        {
            question: "How do I remove mold from outdoor furniture?",
            answer: "Mix 1/4 cup white vinegar per quart of water for fabric. For plastic and metal, use dish soap and water. For persistent mold, try a solution of 1 cup bleach per gallon of water on colorfast materials only."
        },
        {
            question: "What's the best time to clean my patio?",
            answer: "Early morning or late afternoon when surfaces are cool. Avoid midday sun which causes cleaners to evaporate too quickly. In San Diego, overcast marine layer mornings are ideal for cleaning."
        }
    ];

    const howToSteps = [
        {
            name: "Clear the Space",
            text: "Remove all furniture, planters, rugs, and decor. This gives you full access to clean every corner. Shake out outdoor rugs and cushions while they're off the patio."
        },
        {
            name: "Sweep and Remove Debris",
            text: "Sweep the entire patio surface, including corners and edges. Remove leaves, dirt, and cobwebs. For textured surfaces, use a stiff broom to get into crevices."
        },
        {
            name: "Pre-Treat Stains",
            text: "Address specific stains: grease from BBQ (dish soap or degreaser), rust (lemon juice + salt), mold/mildew (bleach solution for concrete, vinegar for wood). Let treatments sit 10-15 minutes."
        },
        {
            name: "Scrub or Pressure Wash",
            text: "For routine cleaning, scrub with a brush and soapy water. For deep cleaning, use a pressure washer with appropriate settings. Work in sections, overlapping strokes for even results."
        },
        {
            name: "Rinse Thoroughly",
            text: "Rinse away all cleaning solution with a hose. Ensure no soap residue remains—it can make surfaces slippery and attract new dirt. Work from high points to low for proper drainage."
        },
        {
            name: "Clean Furniture",
            text: "While the patio dries, clean outdoor furniture. Wipe down frames with appropriate cleaners, wash cushion covers if removable, and scrub plastic or resin furniture with soapy water."
        },
        {
            name: "Clean Glass and Railings",
            text: "Wipe down any glass table tops, light fixtures, and railings. Use glass cleaner for transparent surfaces and all-purpose cleaner for metal or painted surfaces."
        },
        {
            name: "Let Everything Dry",
            text: "Allow the patio surface to dry completely before replacing furniture. This prevents trapping moisture that leads to mold. San Diego's dry climate helps surfaces dry quickly."
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `How to Clean Your Outdoor Patio | ${COMPANY_NAME}`,
            description: 'Complete guide to cleaning patios, decks, and outdoor living spaces. Tips for San Diego homes to maintain beautiful outdoor areas year-round.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How to Clean Your Outdoor Patio"
                description="Complete guide to cleaning patios and outdoor living spaces for San Diego homeowners."
                slug="how-to-clean-your-outdoor-patio"
                datePublished="2024-01-24"
                dateModified="2024-01-24"
            />
            <HowToSchema
                name="How to Clean an Outdoor Patio"
                description="Step-by-step guide to deep cleaning your patio, deck, and outdoor furniture."
                totalTime="PT3H"
                supply={[
                    "Dish soap or patio cleaner",
                    "Bleach or vinegar",
                    "Stiff bristle broom",
                    "Scrub brush",
                    "Garden hose"
                ]}
                tool={[
                    "Pressure washer (optional)",
                    "Bucket",
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
                            How to Clean Your Outdoor Patio
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Keep your outdoor living space beautiful and inviting all year round—perfect for San Diego's indoor-outdoor lifestyle.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 24, 2024</span>
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
                                <strong>Deep clean your patio in 8 steps:</strong> Clear furniture, sweep debris, pre-treat stains, scrub or pressure wash, rinse thoroughly, clean furniture separately, wipe glass and railings, and let everything dry before reassembling. Do this 2-4 times per year.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            San Diego's incredible weather means we live outdoors more than most cities. Our patios, decks, and balconies are true extensions of our homes—where we eat, entertain, work, and relax. But this heavy use means outdoor spaces need regular attention to stay beautiful and safe.
                        </p>
                        <p className="text-slate-600 mt-4">
                            Unlike interior spaces, patios face unique challenges: sun exposure, bird droppings, BBQ grease, pollen, and (near the coast) salt spray. A seasonal deep clean prevents buildup that becomes impossible to remove and extends the life of your outdoor surfaces.
                        </p>

                        {/* Stats Box */}
                        <div className="grid grid-cols-3 gap-4 my-8 not-prose">
                            <div className="bg-orange-50 p-4 rounded-xl text-center">
                                <Sun className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">263</div>
                                <div className="text-sm text-slate-600">Sunny days/year</div>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-xl text-center">
                                <Sparkles className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">4x</div>
                                <div className="text-sm text-slate-600">Deep cleans/year</div>
                            </div>
                            <div className="bg-orange-50 p-4 rounded-xl text-center">
                                <Droplets className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">3 hrs</div>
                                <div className="text-sm text-slate-600">Average clean time</div>
                            </div>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Patio Cleaning Process
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

                        {/* Surface Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Cleaning by Surface Type
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Concrete/Pavers</h3>
                                    <p className="text-slate-600 text-sm">Most forgiving surface. Use pressure washer at 2500-3000 PSI. Pre-treat oil stains with kitty litter overnight, then degrease. Seal annually to prevent staining.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Wood Deck</h3>
                                    <p className="text-slate-600 text-sm">Use lower pressure (1500-2000 PSI) and sweep with the grain. Apply deck cleaner first, let sit, then rinse. Re-stain or seal every 2-3 years to prevent graying and splitting.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Tile/Stone</h3>
                                    <p className="text-slate-600 text-sm">Clean grout lines with a scrub brush. Avoid acidic cleaners on natural stone. Seal porous stones like travertine annually. Use pH-neutral cleaners for routine maintenance.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Composite Decking</h3>
                                    <p className="text-slate-600 text-sm">Gentle soap and water usually sufficient. Don't use pressure washer above 1500 PSI. Avoid bleach which can discolor. Follow manufacturer's cleaning recommendations.</p>
                                </div>
                            </div>
                        </div>

                        {/* San Diego Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Patio Care Tips
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                                <Sun className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Sun Protection</h3>
                                    <p className="text-slate-600 text-sm">Our intense sun fades and degrades outdoor furniture. Use UV-resistant covers when not in use. Clean early morning or evening when surfaces are cool—midday heat evaporates cleaners too fast.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                                <Wind className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Santa Ana Cleanup</h3>
                                    <p className="text-slate-600 text-sm">After Santa Ana wind events, patios get coated in fine dust. A quick hose-down prevents this dust from becoming embedded. Check during fire season for ash that needs immediate removal.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-orange-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Coastal Salt</h3>
                                    <p className="text-slate-600 text-sm">If you're within a few miles of the ocean, salt spray corrodes metal and leaves residue on all surfaces. Monthly fresh water rinses prevent buildup. Use marine-grade furniture near the beach.</p>
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
                            <h3 className="text-2xl font-bold mb-3">Indoor-Outdoor Living</h3>
                            <p className="text-teal-100 mb-6">
                                While outdoor spaces are DIY territory, keep your indoor spaces professionally clean to match. Our deep cleaning service gets every corner so you can enjoy both spaces.
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

export default PatioCleaningPage;
