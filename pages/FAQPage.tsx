/**
 * FAQ Page - San Diego Location
 * Dedicated FAQ page with all 19 commonly asked questions
 * Includes FAQPage schema markup for rich snippets
 */
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    ChevronDown,
    ChevronUp,
    Phone,
    ArrowRight,
    HelpCircle,
    DollarSign,
    Calendar,
    Shield,
    Clock,
    Sparkles,
    Home,
    Users
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../constants';
import { updatePageSEO, resetSEO } from '../utils/seo';
import FAQSchema, { FAQItem } from '../components/FAQSchema';

interface FAQCategory {
    title: string;
    icon: React.ElementType;
    questions: FAQItem[];
}

const FAQPage: React.FC = () => {
    const location = useLocation();
    const [openIndex, setOpenIndex] = useState<string | null>(null);

    // Organized FAQ data by category
    const faqCategories: FAQCategory[] = [
        {
            title: "Pricing & Payment",
            icon: DollarSign,
            questions: [
                {
                    question: "What does standard cleaning generally cost in San Diego?",
                    answer: "Standard cleaning in San Diego typically ranges from $120 to $200 depending on home size and condition. A 2-bedroom home averages $120-150, while a 3-4 bedroom home runs $150-200. We provide free, transparent quotes based on your specific needs and home layout."
                },
                {
                    question: "How and when do I pay for service?",
                    answer: "Payment is processed after your cleaning is complete. We accept all major credit cards, which are securely stored for recurring clients. You'll receive an invoice via email with a detailed breakdown of services. No cash is required at the door."
                },
                {
                    question: "Can I tip the cleaning technician in cash?",
                    answer: "Absolutely! While tips are never expected, they are always appreciated. Cash tips go directly to your cleaner. You can also add a tip to your invoice if you prefer a cashless option. Our cleaners work hard and love knowing their work is valued."
                },
                {
                    question: "Are there any discounts for recurring service?",
                    answer: "Yes! We offer discounts for weekly and bi-weekly recurring clients. Weekly service receives a 15% discount, bi-weekly receives 10%. These savings add up quickly and ensure your home stays consistently clean without the premium of one-time deep cleans."
                }
            ]
        },
        {
            title: "Scheduling & Availability",
            icon: Calendar,
            questions: [
                {
                    question: "Which days of the week are best for home cleaning?",
                    answer: "Tuesdays through Thursdays are our most popular days and offer the most scheduling flexibility. Mondays and Fridays fill up quickly—especially Fridays as people prepare for weekend guests. We recommend booking your preferred day 2-3 weeks in advance for recurring service."
                },
                {
                    question: "Can I book cleaning with short notice?",
                    answer: "We do our best to accommodate last-minute requests! Same-day availability depends on our schedule, but we can often fit in next-day appointments. Call us at " + PHONE_NUMBER + " for urgent requests—we'll move mountains to help when we can."
                },
                {
                    question: "How long should a full house clean take?",
                    answer: "A standard cleaning for a 2-3 bedroom home typically takes 2-3 hours with a two-person team. Deep cleaning takes 4-6 hours. Move-in/out cleaning can take 5-8 hours depending on home size and condition. We focus on quality over speed."
                },
                {
                    question: "Do I need to be home during the clean?",
                    answer: "No, you don't need to be home. Many of our San Diego clients provide access via lockbox, smart lock, garage code, or building manager. Our insured, background-checked cleaners can work independently. We'll text you when we arrive and when we're finished."
                }
            ]
        },
        {
            title: "Services & Cleaning Types",
            icon: Sparkles,
            questions: [
                {
                    question: "What type of cleaning do you offer?",
                    answer: "We offer five core services: Standard Cleaning (recurring maintenance), Deep Cleaning (thorough one-time reset), Move-In/Out Cleaning (vacant property preparation), Vacation Rental Cleaning (Airbnb/VRBO turnovers), and Post-Construction Cleaning (after renovation debris removal). Each is customizable to your needs."
                },
                {
                    question: "What is a Standard Clean?",
                    answer: "Standard Cleaning is your recurring maintenance service—ideal for weekly or bi-weekly schedules. It includes all surfaces, floors, bathrooms, kitchen, dusting, and trash removal. We follow a 50-point checklist to ensure consistent quality every visit."
                },
                {
                    question: "What is a Deep Clean?",
                    answer: "Deep Cleaning is an intensive, top-to-bottom cleaning that tackles areas often missed in routine cleaning. This includes inside appliances, behind furniture, baseboards, ceiling fans, light fixtures, cabinet fronts, and detailed bathroom sanitization. Recommended for first-time clients or quarterly resets."
                },
                {
                    question: "Can I have a partial Deep Clean?",
                    answer: "Yes! We offer customizable deep cleaning packages. Need just the kitchen and bathrooms deep cleaned? Or focus on bedrooms while we standard-clean the rest? Just let us know your priorities and we'll create a custom quote."
                },
                {
                    question: "Can you help with organizing or laundry?",
                    answer: "We focus on cleaning rather than organizing or laundry services. However, we can make beds with fresh linens, fold towels in vacation rentals, and tidy visible clutter. For professional organizing, we can recommend trusted local partners in San Diego."
                },
                {
                    question: "What is the difference between a house cleaner and a housekeeper?",
                    answer: "House cleaners (like us) focus on cleaning tasks—sanitizing, dusting, mopping, and maintaining a hygienic home. Housekeepers typically include additional duties like laundry, meal prep, errands, and childcare. We specialize in cleaning excellence rather than general household management."
                }
            ]
        },
        {
            title: "Our Team & Equipment",
            icon: Users,
            questions: [
                {
                    question: "Why shouldn't I hire an independent cleaner?",
                    answer: "Independent cleaners often lack insurance, background checks, and accountability. If they cancel, you're stuck. If something breaks, you're unprotected. With Metla, you get insured professionals, a backup team guarantee (we never cancel), quality assurance, and customer support. The peace of mind is worth it."
                },
                {
                    question: "Do you bring all the necessary equipment and solutions?",
                    answer: "Yes, we bring everything needed—professional-grade vacuums, microfiber cloths, mops, and EPA-approved cleaning solutions. We use eco-friendly products by default. If you have specific products you prefer or allergies to consider, just let us know and we'll accommodate."
                },
                {
                    question: "How do cleaning technicians clean so fast?",
                    answer: "Our cleaners are trained professionals, not casual laborers. They follow optimized workflows, use commercial-grade equipment, and work in teams of two. Years of experience mean they know exactly what to prioritize. Quality isn't sacrificed—efficiency comes from expertise."
                },
                {
                    question: "Are you licensed and insured?",
                    answer: "Absolutely. Metla House Cleaning is fully licensed and carries comprehensive liability insurance. Every team member is background-checked and bonded. You're protected from the moment we walk in until long after we leave. Ask us for proof of insurance anytime."
                }
            ]
        },
        {
            title: "Satisfaction & Quality",
            icon: Shield,
            questions: [
                {
                    question: "What is your satisfaction guarantee?",
                    answer: "We stand behind our work 100%. If you're not satisfied with any aspect of your cleaning, contact us within 24 hours and we'll return to re-clean the area at no charge. Our goal is your complete satisfaction—we're not happy until you are."
                }
            ]
        }
    ];

    // Flatten all FAQs for schema
    const allFaqs = faqCategories.flatMap(cat => cat.questions);

    useEffect(() => {
        updatePageSEO({
            title: `Frequently Asked Questions | ${COMPANY_NAME} San Diego`,
            description: 'Get answers to common questions about house cleaning services in San Diego. Learn about pricing, scheduling, our cleaning process, and what makes Metla different.',
            path: location.pathname,
        });
        return () => {
            resetSEO();
        };
    }, [location.pathname]);

    const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
        const key = `${categoryIndex}-${questionIndex}`;
        setOpenIndex(openIndex === key ? null : key);
    };

    return (
        <div className="bg-white min-h-screen">
            <FAQSchema faqs={allFaqs} />

            {/* Hero Section */}
            <section className="bg-slate-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <div className="inline-flex items-center justify-center p-3 bg-teal-500/20 rounded-full mb-6">
                            <HelpCircle className="w-8 h-8 text-teal-400" />
                        </div>
                        <h1 className="text-4xl md:text-5xl font-serif font-bold mb-6">
                            Frequently Asked Questions
                        </h1>
                        <p className="text-xl text-slate-300 max-w-2xl mx-auto">
                            Everything you need to know about our house cleaning services in San Diego.
                            Can't find your answer? <a href={`tel:${PHONE_NUMBER}`} className="text-teal-400 hover:underline">Call us</a> or{' '}
                            <Link to="/booking" className="text-teal-400 hover:underline">request a quote</Link>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Quick Stats */}
            <section className="bg-teal-600 py-8">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center text-white">
                        <div>
                            <div className="text-3xl font-bold">19</div>
                            <div className="text-teal-100 text-sm">Common Questions</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">5</div>
                            <div className="text-teal-100 text-sm">Service Types</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">24hr</div>
                            <div className="text-teal-100 text-sm">Satisfaction Guarantee</div>
                        </div>
                        <div>
                            <div className="text-3xl font-bold">100%</div>
                            <div className="text-teal-100 text-sm">Insured & Bonded</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQ Categories */}
            <section className="py-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        {faqCategories.map((category, catIndex) => {
                            const IconComponent = category.icon;
                            return (
                                <div key={catIndex} className="mb-12">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="p-2 bg-teal-100 rounded-lg">
                                            <IconComponent className="w-6 h-6 text-teal-600" />
                                        </div>
                                        <h2 className="text-2xl font-serif font-bold text-slate-900">
                                            {category.title}
                                        </h2>
                                    </div>

                                    <div className="space-y-3">
                                        {category.questions.map((faq, qIndex) => {
                                            const key = `${catIndex}-${qIndex}`;
                                            const isOpen = openIndex === key;
                                            return (
                                                <div
                                                    key={qIndex}
                                                    className="border border-slate-200 rounded-xl overflow-hidden"
                                                >
                                                    <button
                                                        onClick={() => toggleQuestion(catIndex, qIndex)}
                                                        className="w-full flex items-center justify-between p-5 text-left bg-white hover:bg-slate-50 transition-colors"
                                                    >
                                                        <h3 className="font-semibold text-slate-900 pr-4">
                                                            {faq.question}
                                                        </h3>
                                                        {isOpen ? (
                                                            <ChevronUp className="w-5 h-5 text-teal-600 flex-shrink-0" />
                                                        ) : (
                                                            <ChevronDown className="w-5 h-5 text-slate-400 flex-shrink-0" />
                                                        )}
                                                    </button>
                                                    {isOpen && (
                                                        <div className="px-5 pb-5 bg-slate-50 border-t border-slate-100">
                                                            <p className="text-slate-600 leading-relaxed pt-4">
                                                                {faq.answer}
                                                            </p>
                                                        </div>
                                                    )}
                                                </div>
                                            );
                                        })}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Quick Links */}
            <section className="py-12 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mb-8 text-center">
                            Learn More About Our Services
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                            <Link
                                to="/service/standard-cleaning"
                                className="p-6 bg-white rounded-xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all group"
                            >
                                <Sparkles className="w-8 h-8 text-teal-600 mb-3" />
                                <h3 className="font-bold text-slate-900 group-hover:text-teal-600">Standard Cleaning</h3>
                                <p className="text-slate-600 text-sm mt-1">Recurring maintenance for busy households</p>
                            </Link>
                            <Link
                                to="/service/deep-cleaning"
                                className="p-6 bg-white rounded-xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all group"
                            >
                                <Home className="w-8 h-8 text-teal-600 mb-3" />
                                <h3 className="font-bold text-slate-900 group-hover:text-teal-600">Deep Cleaning</h3>
                                <p className="text-slate-600 text-sm mt-1">Thorough top-to-bottom reset</p>
                            </Link>
                            <Link
                                to="/house-cleaning"
                                className="p-6 bg-white rounded-xl border border-slate-200 hover:border-teal-300 hover:shadow-lg transition-all group"
                            >
                                <DollarSign className="w-8 h-8 text-teal-600 mb-3" />
                                <h3 className="font-bold text-slate-900 group-hover:text-teal-600">Pricing Guide</h3>
                                <p className="text-slate-600 text-sm mt-1">See our transparent pricing</p>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-teal-600 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
                        Still Have Questions?
                    </h2>
                    <p className="text-xl text-teal-100 mb-8 max-w-2xl mx-auto">
                        We're happy to answer any questions about our San Diego cleaning services.
                        Get a free quote in 60 seconds or give us a call.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            to="/booking"
                            className="inline-flex items-center justify-center px-8 py-4 bg-white text-teal-600 font-bold rounded hover:bg-teal-50 transition-colors"
                        >
                            Get a Free Quote
                            <ArrowRight className="ml-2 w-5 h-5" />
                        </Link>
                        <a
                            href={`tel:${PHONE_NUMBER}`}
                            className="inline-flex items-center justify-center px-8 py-4 border-2 border-white hover:bg-white/10 rounded transition-colors"
                        >
                            <Phone className="mr-2 w-5 h-5" />
                            {PHONE_NUMBER}
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default FAQPage;
