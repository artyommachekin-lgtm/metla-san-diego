/**
 * Mold Elimination Guide - San Diego
 * URL: /blog/how-to-eliminate-mold-from-your-home
 */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Droplets,
    AlertTriangle,
    Thermometer,
    Wind,
    Shield,
    Phone,
    MapPin,
    Sparkles
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, LOCATIONS } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';

const MoldRemovalPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "What kills mold permanently?",
            answer: "For non-porous surfaces, hydrogen peroxide, white vinegar, or commercial mold removers kill mold on contact. However, mold will return if moisture issues aren't fixed. Permanently eliminating mold requires addressing the water source—leaks, condensation, or inadequate ventilation."
        },
        {
            question: "Is San Diego too dry for mold?",
            answer: "Not in all areas. While inland San Diego is relatively dry, coastal communities from La Jolla to Imperial Beach experience higher humidity, especially in summer. Bathrooms, kitchens, and poorly ventilated spaces can develop mold anywhere in San Diego."
        },
        {
            question: "When should I call a professional for mold?",
            answer: "Call professionals if mold covers more than 10 square feet, if it's in your HVAC system, if it's caused by sewage or contaminated water, if you have health symptoms, or if you're unsure of the source. Professional mold remediation is also required for selling homes with documented mold issues."
        },
        {
            question: "How long does it take for mold to grow after water damage?",
            answer: "Mold can begin growing within 24-48 hours of water exposure. This is why it's crucial to dry water damage immediately—whether from leaks, flooding, or even just leaving wet towels on surfaces. Acting fast prevents mold from establishing."
        }
    ];

    const howToSteps = [
        {
            name: "Identify the Moisture Source",
            text: "Mold is a symptom of moisture problems. Before cleaning, find the water source: leaky pipes, poor ventilation, condensation, roof leaks, or humidity. Cleaning without fixing the source means mold will return."
        },
        {
            name: "Assess the Size and Location",
            text: "Small areas (under 10 sq ft) on non-porous surfaces can be DIY cleaned. Larger areas, mold on porous materials (drywall, carpet), or mold in HVAC systems require professional remediation."
        },
        {
            name: "Protect Yourself",
            text: "Wear an N95 respirator mask, rubber gloves, and eye protection. Mold spores can cause respiratory problems, especially during cleaning when disturbed. Open windows for ventilation."
        },
        {
            name: "Contain the Area",
            text: "Close doors to other rooms. If possible, seal the area with plastic sheeting. Use a fan pointing out a window to create negative pressure that exhausts spores outside rather than spreading them through your home."
        },
        {
            name: "Apply Cleaning Solution",
            text: "For non-porous surfaces: spray undiluted white vinegar or 3% hydrogen peroxide, let sit 10 minutes, then scrub. For stubborn mold, make a paste of baking soda and water, scrub, then spray with vinegar."
        },
        {
            name: "Clean and Rinse Thoroughly",
            text: "Scrub with a stiff brush, then wipe with clean water. Dispose of cleaning cloths in sealed plastic bags. For textured surfaces like grout, use a toothbrush to get into crevices."
        },
        {
            name: "Dry Completely",
            text: "This is crucial. Use fans, dehumidifiers, or open windows to dry the area completely. Moisture left behind allows mold to regrow. The surface should be bone dry before considering the job done."
        },
        {
            name: "Prevent Future Growth",
            text: "Fix the original moisture problem. Improve ventilation (bathroom fans, kitchen hoods). Use mold-resistant paint in high-humidity areas. Monitor the area over the next few weeks for regrowth."
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `How to Eliminate Mold From Your Home | San Diego Guide | ${COMPANY_NAME}`,
            description: 'Learn how to safely remove mold from your home. Step-by-step guide with San Diego coastal humidity tips. When to DIY vs. call professionals.',
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
                title="How to Eliminate Mold From Your Home: Complete Guide"
                description="Learn safe, effective methods for removing mold from your home. Know when to DIY and when to call professionals."
                slug="how-to-eliminate-mold-from-your-home"
                datePublished="2024-01-15"
                dateModified="2024-12-15"
            />
            <HowToSchema
                name="How to Remove Mold From Your Home"
                description="Safe methods for eliminating mold from household surfaces and preventing regrowth."
                totalTime="PT2H"
                supply={[
                    "White vinegar",
                    "Hydrogen peroxide (3%)",
                    "Baking soda",
                    "Spray bottle",
                    "Stiff brush",
                    "Microfiber cloths"
                ]}
                tool={[
                    "N95 respirator mask",
                    "Rubber gloves",
                    "Safety goggles",
                    "Plastic sheeting",
                    "Fans for ventilation"
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
                                How-To Guide
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 10 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            How to Eliminate Mold From Your Home
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Mold is more than unsightly—it's a health hazard. Learn how to safely remove it and prevent it from coming back.
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

                        {/* Warning Box - Top Priority */}
                        <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-lg mb-8 not-prose">
                            <div className="flex gap-3">
                                <AlertTriangle className="w-6 h-6 text-red-600 flex-shrink-0" />
                                <div>
                                    <h3 className="font-bold text-red-800 mb-1">Health Warning</h3>
                                    <p className="text-red-700 text-sm">
                                        Mold exposure can cause respiratory issues, allergic reactions, and worsen asthma. If you have respiratory conditions, are immunocompromised, or notice health symptoms, consider hiring professionals rather than DIY removal. Always wear proper protection.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Quick Answer Box */}
                        <div className="bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8 not-prose">
                            <h2 className="text-lg font-bold text-teal-800 mb-2">Quick Answer</h2>
                            <p className="text-slate-700">
                                <strong>To eliminate mold:</strong> First identify and fix the moisture source (this is essential). For small areas on non-porous surfaces, clean with white vinegar or hydrogen peroxide, scrub, rinse, and dry completely. Wear an N95 mask and gloves. For areas over 10 square feet or mold on porous materials, call a professional mold remediation service.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Finding mold in your San Diego home can be alarming. While our region is generally drier than many parts of the country, mold can still thrive in bathrooms, kitchens, laundry rooms, and coastal homes where humidity is higher.
                        </p>
                        <p className="text-slate-600">
                            The good news: small mold problems on hard surfaces can often be handled yourself with the right approach and precautions. The key is acting quickly, using proper protection, and—most importantly—fixing the moisture problem that allowed mold to grow in the first place.
                        </p>
                        <p className="text-slate-600">
                            This guide covers safe DIY mold removal, when to call professionals, and how to prevent mold from returning.
                        </p>

                        {/* Understanding Mold */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Understanding Mold in San Diego Homes
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Mold Needs Moisture</h4>
                                    <p className="text-slate-600 text-sm">No moisture = no mold. Period. Whether from leaky pipes, condensation, poor ventilation, or high humidity, mold cannot grow without a consistent water source. Eliminating moisture is more important than any cleaning product.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Thermometer className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Coastal Humidity Factor</h4>
                                    <p className="text-slate-600 text-sm">San Diego's coastal areas—La Jolla, Pacific Beach, Ocean Beach, Coronado, Imperial Beach—experience higher humidity, especially in summer months. Homes near the water need extra attention to ventilation and moisture control.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Wind className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Common Problem Areas</h4>
                                    <p className="text-slate-600 text-sm">Bathrooms (especially shower grout and ceilings), under kitchen sinks, around window frames with condensation, closets against exterior walls, and laundry rooms are the most common places to find mold in San Diego homes.</p>
                                </div>
                            </div>
                        </div>

                        {/* When to Call Pros */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            When to Call Professional Mold Remediation
                        </h2>
                        <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-lg my-6 not-prose">
                            <h3 className="font-bold text-amber-800 mb-3">Call professionals if:</h3>
                            <ul className="space-y-2 text-amber-800">
                                <li className="flex items-start gap-2">
                                    <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span>Mold covers more than <strong>10 square feet</strong> (roughly a 3x3 area)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span>Mold is on <strong>porous materials</strong> (drywall, carpet, insulation, wood)</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span>Mold is in your <strong>HVAC system</strong> or ductwork</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span>The water source was <strong>sewage or contaminated water</strong></span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span>You have <strong>health symptoms</strong> when in the affected area</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <Phone className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span>Mold <strong>keeps returning</strong> after cleaning</span>
                                </li>
                            </ul>
                        </div>

                        {/* Supplies Needed */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            What You'll Need for DIY Mold Removal
                        </h2>
                        <div className="bg-slate-50 p-6 rounded-xl my-6 not-prose">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Cleaning Products</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> White vinegar (undiluted)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Hydrogen peroxide (3%)</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Baking soda</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Spray bottle</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" /> Stiff scrub brush</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Safety Equipment (Required!)</h3>
                                    <ul className="space-y-2 text-slate-600">
                                        <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-red-500 flex-shrink-0" /> N95 respirator mask</li>
                                        <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-red-500 flex-shrink-0" /> Rubber or nitrile gloves</li>
                                        <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-red-500 flex-shrink-0" /> Safety goggles (non-vented)</li>
                                        <li className="flex items-center gap-2"><Shield className="w-4 h-4 text-red-500 flex-shrink-0" /> Old clothes (to dispose after)</li>
                                    </ul>
                                </div>
                            </div>
                            <p className="text-sm text-slate-500 mt-4">
                                💡 <strong>Note on Bleach:</strong> Despite common advice, the EPA and mold experts now recommend against bleach for mold removal on porous surfaces. While it kills surface mold, it doesn't penetrate to kill roots. Vinegar and hydrogen peroxide are more effective.
                            </p>
                        </div>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Step-by-Step Mold Removal
                        </h2>

                        <div className="space-y-6 my-8 not-prose">
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

                        {/* Prevention Section */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Preventing Mold in San Diego Homes
                        </h2>
                        <div className="grid gap-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Wind className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Ventilate Properly</h4>
                                    <p className="text-slate-600 text-sm">Run bathroom fans during and 30 minutes after showers. Use your range hood when cooking. Ensure your dryer vents outside, not into the garage or attic. Consider upgrading to a timer-controlled bathroom fan.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Fix Leaks Immediately</h4>
                                    <p className="text-slate-600 text-sm">Don't ignore that slow drip under the sink or the water stain on the ceiling. Mold can start growing within 24-48 hours of water exposure. Quick repairs prevent expensive mold problems.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Thermometer className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Coastal Home Tips</h4>
                                    <p className="text-slate-600 text-sm">In La Jolla, Pacific Beach, and other coastal areas, consider a dehumidifier for problem rooms. Keep closets slightly open for air circulation. Use mold-resistant paint in bathrooms and laundry rooms.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h4 className="font-bold text-slate-900">Regular Cleaning</h4>
                                    <p className="text-slate-600 text-sm">Weekly bathroom cleaning prevents soap scum and grime buildup that mold feeds on. Spray shower walls with daily shower cleaner. Squeegee glass doors after each use.</p>
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
                            <h3 className="text-2xl font-bold mb-3">Need Deep Cleaning After Mold Removal?</h3>
                            <p className="text-teal-100 mb-6">
                                After addressing mold, a thorough deep cleaning removes spores from other surfaces. {COMPANY_NAME} can help restore your home to a healthy, fresh state.
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
                                    to="/service/deep-cleaning"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                                >
                                    Learn About Deep Cleaning
                                </Link>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="how-to-eliminate-mold-from-your-home" />

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
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

export default MoldRemovalPage;
