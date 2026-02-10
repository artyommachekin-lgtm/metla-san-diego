/**
 * Post-Construction Cleaning Checklist - San Diego
 * URL: /essential-post-construction-cleaning-checklist-for-homeowners/
 */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Hammer,
    Wind,
    Home,
    AlertTriangle,
    MapPin,
    Shield
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, LOCATIONS } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';

const PostConstructionChecklistPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "How long after construction should you wait to clean?",
            answer: "Wait at least 24-48 hours after construction ends to allow dust to settle. However, don't wait more than a week—fine particles embed deeper into surfaces over time. For new San Diego construction, coordinate cleaning with your contractor's punch list timeline."
        },
        {
            question: "How much does post-construction cleaning cost in San Diego?",
            answer: "Post-construction cleaning in San Diego typically costs $0.15-$0.35 per square foot, or $300-$700 for a standard home. Major renovations or new builds may run $500-$1,000+. The price depends on project scope, debris level, and whether it's rough clean, final clean, or touch-up."
        },
        {
            question: "Can you clean construction dust yourself?",
            answer: "Yes, but it requires proper equipment and techniques. Construction dust (especially from drywall, concrete, or tile cutting) is extremely fine and can damage your HVAC system and lungs if not handled properly. If the project involved hazardous materials like lead paint or asbestos, always hire certified professionals."
        },
        {
            question: "What's the difference between rough clean and final clean?",
            answer: "Rough clean happens after framing and drywall but before final finishes—it removes large debris and bulk dust. Final clean occurs after all work is complete and handles detailed cleaning of fixtures, windows, and surfaces. Most homeowners need final clean; rough clean is typically the contractor's responsibility."
        }
    ];

    const howToSteps = [
        {
            name: "Safety First: Protect Yourself",
            text: "Wear an N95 mask, safety glasses, and gloves. Open windows for ventilation. Turn off HVAC to prevent spreading dust through ducts. Cover vents with plastic if necessary."
        },
        {
            name: "Remove Large Debris",
            text: "Collect leftover materials, packaging, and trash. Sweep or shop-vac large particles from floors. Clear out any contractor items that should have been removed."
        },
        {
            name: "Dust from Top to Bottom",
            text: "Start with ceilings, light fixtures, and ceiling fans. Work down walls, crown molding, and door frames. Dust settles downward, so always start high."
        },
        {
            name: "Detail Clean All Surfaces",
            text: "Wipe down all cabinets inside and out. Clean countertops, windowsills, and ledges. Use damp microfiber cloths to trap fine dust rather than spreading it."
        },
        {
            name: "Clean Windows and Glass",
            text: "Remove stickers, tape, and protective film. Clean glass with appropriate cleaner. Don't forget window tracks and frames where dust accumulates heavily."
        },
        {
            name: "Deep Clean Bathrooms and Kitchen",
            text: "Sanitize all fixtures, tiles, and grout. Remove construction residue from sinks, tubs, and toilets. Check that all drains flow freely and aren't clogged with debris."
        },
        {
            name: "Final Floor Cleaning",
            text: "Vacuum all floors thoroughly, including edges and corners. Mop hard floors appropriately for surface type. For new hardwood, follow manufacturer guidelines."
        },
        {
            name: "HVAC and Air Quality",
            text: "Replace or clean HVAC filters. Consider professional duct cleaning for major renovations. Run air purifiers for 24-48 hours to capture remaining airborne particles."
        }
    ];

    const checklistByRoom = [
        {
            room: "Whole House",
            tasks: [
                "Remove all debris and leftover materials",
                "Dust ceilings, walls, and light fixtures",
                "Clean all door frames and doors",
                "Wipe baseboards throughout",
                "Clean all windows (interior and exterior)",
                "Vacuum and mop all floors",
                "Replace HVAC filters",
                "Test all fixtures and appliances"
            ]
        },
        {
            room: "Kitchen",
            tasks: [
                "Wipe inside all cabinets and drawers",
                "Clean countertops and backsplash",
                "Clean inside appliances (oven, dishwasher, fridge)",
                "Sanitize sink and fixtures",
                "Remove stickers from new appliances",
                "Clean range hood and filter"
            ]
        },
        {
            room: "Bathrooms",
            tasks: [
                "Sanitize toilets, sinks, and tubs/showers",
                "Clean mirrors and glass",
                "Wipe inside vanity cabinets",
                "Ensure drains are clear",
                "Remove protective film from fixtures",
                "Clean exhaust fans"
            ]
        },
        {
            room: "Specialty Areas",
            tasks: [
                "Clean garage floors if applicable",
                "Wipe down laundry area",
                "Clean any outdoor living spaces affected",
                "Address attic/crawl space if work was done there"
            ]
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `Post-Construction Cleaning Checklist for San Diego Homeowners | ${COMPANY_NAME}`,
            description: 'Essential post-construction cleaning checklist for San Diego homeowners. Learn what to clean after renovation, room-by-room guide, and when to hire professionals.',
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
                title="Essential Post-Construction Cleaning Checklist for San Diego Homeowners"
                description="Complete guide to cleaning your home after construction or renovation. Room-by-room checklist and professional tips for San Diego residents."
                slug="essential-post-construction-cleaning-checklist-for-homeowners"
                datePublished="2024-03-05"
                dateModified="2024-12-15"
            />
            <HowToSchema
                name="How to Clean Your Home After Construction"
                description="A professional step-by-step guide to post-construction cleaning for homeowners."
                totalTime="PT8H"
                supply={[
                    "N95 dust masks",
                    "Safety glasses",
                    "Heavy-duty trash bags",
                    "Microfiber cloths",
                    "All-purpose cleaner",
                    "Glass cleaner",
                    "New HVAC filters"
                ]}
                tool={[
                    "Shop vacuum",
                    "Broom and dustpan",
                    "Mop and bucket",
                    "Step ladder",
                    "Scrub brushes",
                    "Plastic sheeting"
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
                                <Clock className="w-4 h-4" /> 12 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            Essential Post-Construction Cleaning Checklist for San Diego Homeowners
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Your complete guide to cleaning up after renovation or new construction—room by room, with San Diego-specific tips.
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
                                <strong>Post-construction cleaning involves:</strong> (1) Removing all debris and leftover materials, (2) dusting from ceiling to floor, (3) detail cleaning all surfaces including inside cabinets, (4) deep cleaning windows, bathrooms, and kitchen, (5) thorough floor cleaning, and (6) replacing HVAC filters. Allow 1-2 days for a full home. Wait 24-48 hours after construction ends for dust to settle before cleaning.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Congratulations on completing your renovation or new home construction! Whether you've updated a 1950s Clairemont ranch house, added an ADU in North Park, or built your dream home in Carmel Valley, there's one final step before you can truly enjoy your new space: post-construction cleaning.
                        </p>
                        <p className="text-slate-600">
                            Construction and renovation create a unique type of mess. Fine drywall dust coats every surface. Sawdust hides in corners. Grout haze films your new tile. Stickers and protective film cover appliances and fixtures. And everything is covered in a layer of that fine, powdery residue that regular cleaning simply can't address.
                        </p>
                        <p className="text-slate-600">
                            This guide walks you through the complete post-construction cleaning process, with specific guidance for San Diego homeowners navigating our local construction boom and unique climate considerations.
                        </p>

                        {/* Warning Box */}
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-lg my-8 not-prose">
                            <div className="flex items-start gap-3">
                                <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-amber-800 mb-2">Important Safety Note</h3>
                                    <p className="text-slate-700 text-sm">
                                        If your project involved work on a pre-1978 San Diego home, there's potential for lead paint disturbance. Similarly, some older materials contain asbestos. If hazardous materials were involved, <strong>do not attempt DIY cleaning</strong>—hire certified professionals with proper equipment and disposal protocols.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Post-Construction Cleaning: Step by Step
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

                        {/* Room-by-Room Checklist */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Room-by-Room Cleaning Checklist
                        </h2>

                        <div className="space-y-6 my-8">
                            {checklistByRoom.map((section, idx) => (
                                <div key={idx} className="bg-slate-50 p-5 rounded-xl">
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Home className="w-5 h-5 text-teal-600" />
                                        {section.room}
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

                        {/* San Diego-Specific Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Construction Cleaning Tips
                        </h2>

                        <div className="grid gap-4 my-6">
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Wind className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Coastal Humidity Consideration</h4>
                                    <p className="text-slate-600 text-sm">In beach communities like La Jolla, Pacific Beach, or Coronado, construction dust can combine with marine air humidity to create a sticky residue. Use slightly damp cloths for wiping and ensure good ventilation to prevent moisture issues in newly sealed surfaces.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Hammer className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">ADU Construction</h4>
                                    <p className="text-slate-600 text-sm">San Diego's ADU boom means many homeowners are dealing with backyard construction. Don't forget to clean outdoor areas affected by construction, including patios, driveways, and any outdoor furniture that was exposed to dust.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Shield className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">New Construction in Fire Zones</h4>
                                    <p className="text-slate-600 text-sm">If you've built in areas like Rancho Santa Fe, Scripps Ranch, or East County, your new HVAC and fire-resistant materials need proper care. Have the HVAC system professionally cleaned, and ensure any fire-resistant coatings aren't damaged during cleanup.</p>
                                </div>
                            </div>
                        </div>

                        {/* DIY vs Professional */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Should You DIY or Hire Professionals?
                        </h2>
                        <p className="text-slate-600">
                            Post-construction cleaning is one of the most demanding cleaning tasks. Here's when it makes sense to go DIY versus hiring help:
                        </p>

                        <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                            <div className="bg-slate-50 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-900 mb-3">DIY Makes Sense If:</h3>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Small project (single room, bathroom remodel)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        You have proper equipment (shop vac, ladder)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        No hazardous materials were involved
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        You have 1-2 full days to dedicate
                                    </li>
                                </ul>
                            </div>
                            <div className="bg-teal-50 p-5 rounded-xl">
                                <h3 className="font-bold text-slate-900 mb-3">Hire Professionals If:</h3>
                                <ul className="space-y-2 text-slate-600 text-sm">
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Major renovation or new construction
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Move-in deadline is approaching
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Pre-1978 home (potential lead/asbestos)
                                    </li>
                                    <li className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        Multiple stories or high ceilings
                                    </li>
                                </ul>
                            </div>
                        </div>

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
                            <h3 className="text-2xl font-bold mb-3">Just Finished a Renovation?</h3>
                            <p className="text-teal-100 mb-6">
                                Let {COMPANY_NAME} handle the post-construction cleanup. Our San Diego team has equipment and experience to get your new space move-in ready—fast.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    to="/booking"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                                >
                                    Book a Cleaning
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link
                                    to="/service/post-construction-cleaning"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                                >
                                    Post-Construction Cleaning
                                </Link>
                            </div>
                        </div>

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-4">Post-Construction Cleaning in San Diego</h3>
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

export default PostConstructionChecklistPage;
