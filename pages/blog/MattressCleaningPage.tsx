/**
 * Mattress Deep Cleaning Guide - San Diego
 * URL: /blog/how-to-deep-clean-your-mattress
 */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Moon,
    Sun,
    Wind,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';

const MattressCleaningPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "How often should I deep clean my mattress?",
            answer: "Deep clean your mattress every 6 months, or quarterly if you have allergies or pets. Vacuum monthly to control dust mites. Rotate your mattress every 3-6 months to ensure even wear."
        },
        {
            question: "Can I use a steam cleaner on my mattress?",
            answer: "Yes, steam cleaning kills dust mites and bacteria effectively. However, ensure the mattress dries completely before remaking the bed—moisture trapped inside can lead to mold. This may take 6-8 hours."
        },
        {
            question: "How do I get urine smell out of a mattress?",
            answer: "Blot fresh urine immediately, then apply an enzymatic cleaner designed for pet or human urine. Let it soak in, then blot dry and apply baking soda. Leave for several hours before vacuuming. Repeat if needed."
        },
        {
            question: "Do mattress protectors really help?",
            answer: "Absolutely. A quality waterproof mattress protector prevents stains, reduces dust mite exposure, and extends mattress life significantly. Choose one that's waterproof but breathable to avoid sleeping hot."
        }
    ];

    const howToSteps = [
        {
            name: "Strip the Bed Completely",
            text: "Remove all bedding including mattress protector. Wash everything in hot water (at least 130°F) to kill dust mites. If you have a pillow-top, check care instructions for the mattress cover."
        },
        {
            name: "Vacuum Thoroughly",
            text: "Use the upholstery attachment to vacuum the entire mattress surface, paying attention to seams, edges, and crevices where dust mites accumulate. Vacuum both sides if possible."
        },
        {
            name: "Spot Treat Stains",
            text: "For sweat stains: mix dish soap, baking soda, and hydrogen peroxide into a paste, apply and let sit 30 minutes. For blood: use cold water and enzymatic cleaner. For urine: use enzymatic pet cleaner."
        },
        {
            name: "Deodorize with Baking Soda",
            text: "Sprinkle a generous layer of baking soda over the entire mattress surface. For extra freshness, mix in a few drops of lavender essential oil. Let sit for at least 1 hour, ideally 4-8 hours."
        },
        {
            name: "Let it Air Out",
            text: "If possible, open windows or run a fan to help air out the mattress. UV light from sunlight naturally kills bacteria and dust mites—if you can move your mattress outside briefly, even better."
        },
        {
            name: "Vacuum Again",
            text: "Thoroughly vacuum up all the baking soda. Use the crevice tool for seams and edges. Flip or rotate the mattress if it's designed to be flipped."
        },
        {
            name: "Apply Mattress Protector",
            text: "Before remaking the bed, put on a clean, waterproof mattress protector. This barrier keeps future stains and allergens from penetrating the mattress."
        },
        {
            name: "Make the Bed Fresh",
            text: "Use freshly laundered sheets and pillowcases. Consider new pillows every 1-2 years—they accumulate dust mites and allergens just like mattresses."
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `How to Deep Clean Your Mattress | ${COMPANY_NAME}`,
            description: 'Complete guide to deep cleaning your mattress. Remove stains, eliminate dust mites, and improve sleep quality. Tips for San Diego allergy sufferers.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How to Deep Clean Your Mattress"
                description="Step-by-step guide to cleaning your mattress, removing stains, and eliminating dust mites for better sleep."
                slug="how-to-deep-clean-your-mattress"
                datePublished="2024-01-21"
                dateModified="2024-01-21"
            />
            <HowToSchema
                name="How to Deep Clean a Mattress"
                description="Complete process for deep cleaning your mattress to remove allergens, stains, and odors."
                totalTime="PT6H"
                supply={[
                    "Baking soda (full box)",
                    "Hydrogen peroxide",
                    "Dish soap",
                    "Enzymatic stain remover",
                    "Essential oil (optional)"
                ]}
                tool={[
                    "Vacuum with upholstery attachment",
                    "Spray bottle",
                    "Clean cloths",
                    "Fan (optional)"
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
                            How to Deep Clean Your Mattress
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Freshen up where you spend a third of your life. Better sleep starts with a clean mattress.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published January 21, 2024</span>
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
                                <strong>Deep clean your mattress in 8 steps:</strong> Strip bedding, vacuum thoroughly, spot treat stains, cover with baking soda, let it sit 4-8 hours, vacuum again, add a mattress protector, and remake with fresh linens. Do this every 6 months.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Your mattress accumulates dead skin cells, sweat, dust mites, and allergens every night. Over time, without cleaning, it can harbor millions of dust mites—a common trigger for allergies and asthma. Yet most people never clean their mattress beyond changing the sheets.
                        </p>
                        <p className="text-slate-600 mt-4">
                            The good news? Deep cleaning a mattress is straightforward and requires no special equipment. The key is giving it enough time—plan for a full day since the baking soda treatment works best when left for several hours.
                        </p>

                        {/* Stats Box */}
                        <div className="grid grid-cols-3 gap-4 my-8 not-prose">
                            <div className="bg-indigo-50 p-4 rounded-xl text-center">
                                <Moon className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">8 hrs</div>
                                <div className="text-sm text-slate-600">Avg nightly use</div>
                            </div>
                            <div className="bg-indigo-50 p-4 rounded-xl text-center">
                                <Sun className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">6 mo</div>
                                <div className="text-sm text-slate-600">Cleaning frequency</div>
                            </div>
                            <div className="bg-indigo-50 p-4 rounded-xl text-center">
                                <Wind className="w-8 h-8 text-indigo-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">10 yrs</div>
                                <div className="text-sm text-slate-600">Avg mattress lifespan</div>
                            </div>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Mattress Deep Cleaning Process
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
                            San Diego Mattress Care Tips
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg">
                                <Sun className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Use the Sun</h3>
                                    <p className="text-slate-600 text-sm">San Diego's abundant sunshine is your ally. If you have a patio or yard, let your mattress sunbathe briefly—UV light naturally kills dust mites and bacteria. Even standing it by an open window helps.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg">
                                <Wind className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Coastal Humidity</h3>
                                    <p className="text-slate-600 text-sm">Near the coast, humidity can create mold-friendly conditions inside mattresses. Ensure complete drying after any wet cleaning. Use a fan or AC to accelerate drying on coastal fog days.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-indigo-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-indigo-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Allergy Season</h3>
                                    <p className="text-slate-600 text-sm">San Diego has multiple pollen seasons. If you suffer from allergies, clean your mattress at the start of spring and fall. Consider HEPA-filtered vacuuming and hypoallergenic mattress covers.</p>
                                </div>
                            </div>
                        </div>

                        {/* Common Stains */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Stain Treatment Guide
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Sweat/Yellow Stains</span>
                                    <span className="text-slate-600 text-sm">Baking soda + dish soap + peroxide paste</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Blood</span>
                                    <span className="text-slate-600 text-sm">Cold water + enzymatic cleaner only</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Urine</span>
                                    <span className="text-slate-600 text-sm">Enzymatic pet/urine cleaner + baking soda</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">General Odor</span>
                                    <span className="text-slate-600 text-sm">Baking soda left 4-8 hours</span>
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
                            <h3 className="text-2xl font-bold mb-3">Deep Clean Your Bedroom</h3>
                            <p className="text-teal-100 mb-6">
                                While mattress cleaning is typically DIY, our deep cleaning service covers all the bedroom surfaces around it—floors, baseboards, blinds, and more.
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

export default MattressCleaningPage;
