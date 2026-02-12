/**
 * Home Office Cleaning Guide - San Diego
 * URL: /blog/how-to-clean-your-home-office
 */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Sparkles,
    Monitor,
    Keyboard,
    Wifi,
    MapPin
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';

const HomeOfficeCleaningPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "How often should I clean my home office?",
            answer: "Quick clean your desk daily (5 minutes), do a thorough clean weekly (30 minutes), and deep clean monthly. High-touch items like keyboards and mice should be disinfected several times per week if you're working full-time from home."
        },
        {
            question: "What's the best way to clean a computer screen?",
            answer: "Power off and let the screen cool. Use a dry microfiber cloth first to remove dust. For smudges, lightly dampen the cloth with distilled water or a 50/50 mix of water and white vinegar. Never spray liquid directly on screens."
        },
        {
            question: "How do I organize cables and cords?",
            answer: "Use cable management solutions like clips, sleeves, or cable boxes. Label cords at both ends. Route cables along desk legs or walls, not across the floor. A cleaner cable setup makes dust removal much easier."
        },
        {
            question: "Can dust damage my computer equipment?",
            answer: "Yes. Dust buildup causes electronics to overheat by blocking vents and fans. This shortens component lifespan and can cause crashes. Use compressed air to clear vents monthly, more often if you have pets."
        }
    ];

    const howToSteps = [
        {
            name: "Declutter First",
            text: "Remove everything from your desk surface. File papers, recycle junk, and put supplies in drawers. A clutter-free workspace is easier to clean and helps you focus."
        },
        {
            name: "Dust from Top to Bottom",
            text: "Start with shelves, light fixtures, and monitor tops. Dust works its way down, so always clean high surfaces first. Use a microfiber cloth or duster that traps dust rather than spreading it."
        },
        {
            name: "Clean Electronics Carefully",
            text: "Power down and unplug devices. Use compressed air to blow out keyboard crevices and computer vents. Wipe screens with appropriate cleaners—never use window cleaner on monitors."
        },
        {
            name: "Disinfect High-Touch Surfaces",
            text: "Wipe down your keyboard, mouse, desk phone, and desk surface with disinfectant. Don't forget light switches, door handles, and drawer pulls. These surfaces harbor the most germs."
        },
        {
            name: "Clean Your Chair",
            text: "Vacuum fabric chairs to remove dust and crumbs. Wipe down armrests and adjustment levers. For leather or vinyl, use appropriate cleaner. Check wheels and remove hair/debris."
        },
        {
            name: "Tackle Cable Clutter",
            text: "Organize and secure loose cables. Dust behind equipment where cables accumulate. Consider cable management solutions if cords are tangled. Cleaner cables mean easier cleaning next time."
        },
        {
            name: "Clean Windows and Lighting",
            text: "Clean windows for maximum natural light—important for video calls and eye health. Dust light fixtures and lamp shades. Good lighting reduces eye strain and improves mood."
        },
        {
            name: "Vacuum and Mop Floor",
            text: "Vacuum the entire office, especially under the desk where dust bunnies hide. Move your chair to vacuum that area. For hard floors, follow with a damp mop. Don't forget baseboards."
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `How to Clean Your Home Office | ${COMPANY_NAME}`,
            description: 'Keep your home office clean and productive with our complete guide. Tips for electronics, ergonomics, and maintaining a healthy workspace.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="How to Clean Your Home Office"
                description="Complete guide to cleaning and organizing your home office for productivity and health. Electronics care and workspace maintenance tips."
                slug="how-to-clean-your-home-office"
                datePublished="2024-01-18"
                dateModified="2024-01-18"
            />
            <HowToSchema
                name="How to Clean a Home Office"
                description="Step-by-step guide to cleaning your home office, including electronics, furniture, and floor care."
                totalTime="PT1H"
                supply={[
                    "Microfiber cloths",
                    "Compressed air",
                    "Disinfectant wipes",
                    "Screen cleaner",
                    "All-purpose cleaner"
                ]}
                tool={[
                    "Vacuum with attachments",
                    "Duster",
                    "Cable ties or clips"
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
                            How to Clean Your Home Office
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            A clean workspace is a productive workspace. Keep your home office fresh, organized, and distraction-free.
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
                                <strong>Clean your home office in 8 steps:</strong> Declutter the desk, dust top-to-bottom, clean electronics with appropriate products, disinfect high-touch surfaces, clean your chair, organize cables, clean windows and lights, and finish with floors. Weekly maintenance keeps it manageable.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Remote work has become the norm for many San Diego professionals. Tech workers, creatives, and entrepreneurs across the county now spend 40+ hours a week in their home offices. But unlike corporate spaces with janitorial services, your home office only gets cleaned when you do it.
                        </p>
                        <p className="text-slate-600 mt-4">
                            A clean, organized workspace directly impacts your productivity, focus, and even your health. Dusty keyboards harbor bacteria, cluttered desks create mental clutter, and poor air quality causes fatigue. Here's how to maintain a workspace that helps you do your best work.
                        </p>

                        {/* Stats Box */}
                        <div className="grid grid-cols-3 gap-4 my-8 not-prose">
                            <div className="bg-cyan-50 p-4 rounded-xl text-center">
                                <Monitor className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">40+</div>
                                <div className="text-sm text-slate-600">Hours/week at desk</div>
                            </div>
                            <div className="bg-cyan-50 p-4 rounded-xl text-center">
                                <Keyboard className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">400x</div>
                                <div className="text-sm text-slate-600">Dirtier than toilet seat</div>
                            </div>
                            <div className="bg-cyan-50 p-4 rounded-xl text-center">
                                <Wifi className="w-8 h-8 text-cyan-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">30 min</div>
                                <div className="text-sm text-slate-600">Weekly clean time</div>
                            </div>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Home Office Cleaning Process
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

                        {/* Electronics Care */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Electronics Cleaning Guide
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <div className="space-y-4">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Keyboard</h3>
                                    <p className="text-slate-600 text-sm">Turn upside down and shake out debris. Use compressed air between keys. Wipe with slightly damp microfiber cloth. Disinfect with isopropyl alcohol wipe.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Monitor</h3>
                                    <p className="text-slate-600 text-sm">Power off and cool. Dust with dry microfiber. For smudges, use distilled water or screen cleaner on cloth—never spray directly. Wipe gently in circular motions.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Computer Vents</h3>
                                    <p className="text-slate-600 text-sm">Use compressed air to clear intake and exhaust vents monthly. This prevents overheating and extends equipment life. Do this outside or be prepared for dust clouds.</p>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-2">Mouse & Trackpad</h3>
                                    <p className="text-slate-600 text-sm">Wipe with disinfectant. For optical mice, clean the sensor lens. Check for grime buildup on feet that can affect tracking. Consider a washable mouse pad.</p>
                                </div>
                            </div>
                        </div>

                        {/* San Diego Tips */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            San Diego Home Office Tips
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Natural Light = Clean Windows</h3>
                                    <p className="text-slate-600 text-sm">San Diego's sunshine is an asset for home offices. Keep windows clean for maximum natural light—it improves mood, video call quality, and reduces eye strain. Clean monthly near the coast due to salt spray.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Indoor Air Quality</h3>
                                    <p className="text-slate-600 text-sm">Open windows when weather permits—our climate makes this possible most of the year. Consider air-purifying plants like pothos or snake plants, which thrive in San Diego conditions.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-cyan-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-cyan-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">After Beach Workdays</h3>
                                    <p className="text-slate-600 text-sm">Working near the beach? Sand finds its way everywhere. Use a cordless vacuum for quick daily cleanups. Keep a doormat outside your office door and a microfiber cloth for desk surfaces.</p>
                                </div>
                            </div>
                        </div>

                        {/* Maintenance Schedule */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Cleaning Schedule
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <div className="space-y-3">
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Clear desk clutter</span>
                                    <span className="text-teal-600 font-bold">Daily (5 min)</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Wipe surfaces, disinfect</span>
                                    <span className="text-teal-600 font-bold">2-3x/week</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Full office clean</span>
                                    <span className="text-teal-600 font-bold">Weekly (30 min)</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Electronics deep clean</span>
                                    <span className="text-teal-600 font-bold">Monthly</span>
                                </div>
                                <div className="flex justify-between items-center p-3 bg-white rounded-lg">
                                    <span className="font-medium text-slate-900">Reorganize, declutter</span>
                                    <span className="text-teal-600 font-bold">Quarterly</span>
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
                        </div>                        <RelatedArticles currentSlug="how-to-clean-your-home-office" />



                        {/* CTA */}
                        <div className="bg-teal-600 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <Sparkles className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">Include Your Office in Regular Cleaning</h3>
                            <p className="text-teal-100 mb-6">
                                Our standard cleaning service covers home offices as part of your whole-home clean. Focus on work while we handle the cleaning.
                            </p>
                            <Link
                                to="/booking"
                                className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                            >
                                Book a Cleaning
                                <ArrowRight className="ml-2 w-5 h-5" />
                            </Link>
                            <Link
                                to="/service/standard-cleaning"
                                className="inline-flex items-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                            >
                                Learn About Standard Cleaning
                            </Link>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default HomeOfficeCleaningPage;
