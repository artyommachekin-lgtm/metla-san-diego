/**
 * Move-In Cleaning Checklist - San Diego
 * URL: /blog/move-in-cleaning-checklist
 */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Home,
    Key,
    ClipboardCheck,
    MapPin
} from 'lucide-react';
import { PHONE_NUMBER } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';

const MoveInChecklistPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "Should I clean before or after moving furniture in?",
            answer: "Before! Clean the empty space first—you'll have full access to floors, closets, and corners. Once furniture arrives, thorough cleaning becomes much harder. Schedule your move-in clean before the moving truck arrives."
        },
        {
            question: "What if the previous tenant didn't clean well?",
            answer: "Document any cleanliness issues with photos before cleaning. Contact your landlord if the condition is significantly below standards. A professional move-in clean can address most issues, but severe problems may require lease negotiation."
        },
        {
            question: "How long does a move-in clean take?",
            answer: "A thorough DIY move-in clean takes 4-8 hours depending on size and condition. Professional cleaners typically complete a standard apartment in 2-4 hours because they work in teams with commercial-grade products."
        },
        {
            question: "Is move-in cleaning worth it for a 'new' apartment?",
            answer: "Absolutely. Even new or renovated apartments have construction dust, fingerprints, and overlooked areas. Brand new doesn't mean clean—builders focus on completing the project, not deep cleaning."
        }
    ];

    const howToSteps = [
        {
            name: "Document the Starting Condition",
            text: "Before cleaning, photograph every room, noting any existing damage or dirt. This protects you when you eventually move out. Pay special attention to walls, floors, and appliances."
        },
        {
            name: "Start High, Work Down",
            text: "Clean ceiling fans, light fixtures, and tops of cabinets first. Dust and debris will fall down, so save floors for last. Wipe down walls if needed—apartment walls often have scuffs and marks."
        },
        {
            name: "Deep Clean Kitchen Cabinets",
            text: "Wipe inside all cabinets and drawers before putting anything in them. Check for crumbs, stickiness, or pest evidence. Line with shelf paper if desired. Clean under the sink thoroughly."
        },
        {
            name: "Clean Inside All Appliances",
            text: "Clean inside the refrigerator, oven, microwave, and dishwasher. Run an empty dishwasher cycle with vinegar. Check and clean the garbage disposal. These are often neglected by previous tenants."
        },
        {
            name: "Sanitize All Bathrooms",
            text: "Scrub toilet, tub, shower, and sink thoroughly. Clean inside medicine cabinet and vanity. Check for mold in grout and caulk. Replace the toilet seat if you prefer (and save the old one to reinstall when you leave)."
        },
        {
            name: "Clean All Closets",
            text: "Vacuum or wipe closet floors and shelves. Clean closet rods. Check for and address any musty smells. This is your chance before they're full of clothes and boxes."
        },
        {
            name: "Wash Windows and Tracks",
            text: "Clean windows inside and out if accessible. Clean window tracks—they accumulate dirt and dead bugs. Wipe down blinds or wash curtains from the previous tenant."
        },
        {
            name: "Clean All Floors",
            text: "Vacuum carpets thoroughly, including edges and closets. Mop hard floors. Clean baseboards around the entire perimeter. Consider professional carpet cleaning if carpets look worn."
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `Move-In Cleaning Checklist for San Diego Residents | Expert Cleaning Tips`,
            description: 'Complete move-in cleaning checklist for San Diego renters. Prepare your new apartment or home with our room-by-room guide.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Move-In Cleaning Checklist for San Diego Renters"
                description="Complete move-in cleaning checklist to start fresh in your new home. Room-by-room guide with professional tips."
                slug="move-in-cleaning-checklist"
                datePublished="2024-01-20"
                dateModified="2024-01-20"
            />
            <HowToSchema
                name="How to Clean Before Moving Into a New Home"
                description="Step-by-step guide to thoroughly cleaning a new apartment or home before moving your belongings in."
                totalTime="PT6H"
                supply={[
                    "All-purpose cleaner",
                    "Glass cleaner",
                    "Disinfectant",
                    "Oven cleaner",
                    "Trash bags"
                ]}
                tool={[
                    "Vacuum cleaner",
                    "Mop and bucket",
                    "Scrub brushes",
                    "Microfiber cloths",
                    "Step ladder"
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
                                Checklists
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 7 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            Move-In Cleaning Checklist for San Diego Residents
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Start fresh in your new San Diego home. Clean before you unpack for the best results.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 20, 2024</span>
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
                                <strong>Clean your new place before moving in:</strong> Document existing condition with photos, clean top-to-bottom (ceilings to floors), focus on kitchen and bathrooms, clean inside all cabinets and appliances, and finish with floors. This is your only chance to clean an empty space!
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Moving is exciting—you're starting fresh in a new space. But before you unpack that first box, there's an important step many people skip: the move-in clean. Even if your new place looks clean, it likely isn't. And once your furniture arrives, thorough cleaning becomes nearly impossible.
                        </p>
                        <p className="text-slate-600 mt-4">
                            In San Diego's competitive rental market, turnover is fast. Previous tenants may have rushed their move-out, and landlord cleaning standards vary widely. Take control of your new home's cleanliness from day one.
                        </p>

                        {/* Stats Box */}
                        <div className="grid grid-cols-3 gap-4 my-8 not-prose">
                            <div className="bg-emerald-50 p-4 rounded-xl text-center">
                                <Home className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">Day 1</div>
                                <div className="text-sm text-slate-600">Clean before unpacking</div>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-xl text-center">
                                <ClipboardCheck className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">Photos</div>
                                <div className="text-sm text-slate-600">Document condition</div>
                            </div>
                            <div className="bg-emerald-50 p-4 rounded-xl text-center">
                                <Key className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">4-8 hrs</div>
                                <div className="text-sm text-slate-600">DIY cleaning time</div>
                            </div>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Move-In Cleaning Process
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

                        {/* Room Checklist */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Room-by-Room Checklist
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Kitchen</h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Inside all cabinets & drawers",
                                            "Inside refrigerator & freezer",
                                            "Inside oven & microwave",
                                            "Clean dishwasher",
                                            "Under sink area",
                                            "Countertops & backsplash",
                                            "Floor & baseboards"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                                                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Bathroom</h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Toilet inside & out",
                                            "Shower/tub & grout",
                                            "Vanity & sink",
                                            "Medicine cabinet",
                                            "Exhaust fan",
                                            "Behind toilet",
                                            "Floor & baseboards"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                                                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* San Diego Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Move-In Tips
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Check for Pests</h3>
                                    <p className="text-slate-600 text-sm">San Diego's warm climate means pests can be an issue. Check cabinets for droppings, inspect window screens, and look for ant trails. Address any concerns with your landlord immediately.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Hard Water Buildup</h3>
                                    <p className="text-slate-600 text-sm">Previous tenants may have left hard water stains in showers and on fixtures. Vinegar soaks and commercial hard water removers can restore shine. Check showerheads for mineral buildup.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-emerald-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Beach Proximity</h3>
                                    <p className="text-slate-600 text-sm">For coastal units, clean window tracks thoroughly—salt air residue builds up. Check for humidity-related issues near the coast, and ensure bathroom exhaust fans work properly.</p>
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
                        </div>                        <RelatedArticles currentSlug="move-in-cleaning-checklist" />



                        {/* CTA */}
                        <div className="bg-teal-600 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <Key className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">Professional Move-In Cleaning</h3>
                            <p className="text-teal-100 mb-6">
                                Start your new chapter with a professionally cleaned home. Our move-in service includes inside cabinets, appliances, and thorough sanitization.
                            </p>
                            <Link
                                to="/booking"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                            >
                                Book a Cleaning
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                to="/service/move-in-out-cleaning"
                                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                            >
                                Learn About Move-In Cleaning
                            </Link>
                        </div>

                        {/* Related Link */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
                            <h3 className="font-bold text-slate-900 mb-2">Moving Out Instead?</h3>
                            <p className="text-slate-600 text-sm mb-3">
                                Check out our Move-Out Cleaning Checklist to maximize your chances of getting your deposit back.
                            </p>
                            <Link to="/blog/move-out-cleaning-checklist" className="text-teal-600 font-medium hover:text-teal-700">
                                View Move-Out Checklist →
                            </Link>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default MoveInChecklistPage;
