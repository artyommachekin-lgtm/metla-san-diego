/**
 * Spring Cleaning Tips - San Diego
 * URL: /top-10-spring-deep-cleaning-tips/
 */
import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Sun,
    Wind,
    Flower2,
    Sparkles,
    MapPin,
    TreeDeciduous
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER, LOCATIONS } from '../../constants';
import { updatePageSEO, resetSEO } from '../../utils/seo';
import ArticleSchema from '../../components/ArticleSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';

const SpringCleaningTipsPage: React.FC = () => {
    const location = useLocation();

    const faqs: FAQItem[] = [
        {
            question: "When should I spring clean in San Diego?",
            answer: "San Diego's mild climate means you can spring clean anytime from February through April. Aim for after winter rains (typically ending in March) but before fire season prep begins in May. Many San Diegans tackle spring cleaning during the cooler mornings of March and April."
        },
        {
            question: "How long does spring cleaning take?",
            answer: "A thorough spring cleaning takes 1-3 days for most San Diego homes, depending on size and how much decluttering is needed. Spread the work over a weekend or several evenings. Professional deep cleaning takes 4-8 hours and handles the heavy lifting."
        },
        {
            question: "What's the difference between spring cleaning and deep cleaning?",
            answer: "Spring cleaning typically includes deep cleaning PLUS seasonal tasks like decluttering, organizing closets, swapping out winter items, washing outdoor furniture, and prepping your home for warmer months. It's more comprehensive than a standard deep clean."
        },
        {
            question: "Should I hire cleaners for spring cleaning?",
            answer: "Consider professional help if you're short on time, have a large home, or want a thorough reset. Many San Diego homeowners hire cleaners for the deep cleaning portion, then handle decluttering and organizing themselves."
        }
    ];

    const springTips = [
        {
            number: 1,
            title: "Prep for Pollen Season",
            icon: Flower2,
            description: "San Diego's pollen season peaks March through May. Start spring cleaning by replacing HVAC filters, washing bedding in hot water, and vacuuming with a HEPA filter. If you have allergies, tackle one room at a time to avoid stirring up too much dust.",
            proTip: "Run air purifiers for 24 hours after deep cleaning to capture airborne allergens."
        },
        {
            number: 2,
            title: "Deep Clean Windows Inside & Out",
            icon: Sun,
            description: "After winter rains, San Diego windows are coated with water spots, pollen, and grime. Clean both sides of all windows, including tracks and screens. Our year-round sunshine means streak marks show up immediately—use a squeegee and microfiber cloth for best results.",
            proTip: "Clean windows on a cloudy day or in shade. Direct sun causes cleaner to dry too fast, leaving streaks."
        },
        {
            number: 3,
            title: "Tackle Hard Water Buildup",
            icon: Sparkles,
            description: "Winter months often reveal the full extent of San Diego's hard water damage. Spring is the perfect time to descale showerheads, clean faucets, and remove white mineral deposits from glass doors. Use vinegar or a commercial descaler.",
            proTip: "Apply Rain-X to glass shower doors after cleaning to repel water and slow future buildup."
        },
        {
            number: 4,
            title: "Prep AC for Summer",
            icon: Wind,
            description: "Before San Diego's dry summer heat arrives, get your AC ready. Replace or clean filters, vacuum vents and returns, and schedule professional maintenance if needed. Clear debris from outdoor units. This prevents dust from circulating when you first fire up the AC.",
            proTip: "Mark your calendar to replace AC filters monthly during heavy summer use."
        },
        {
            number: 5,
            title: "Refresh Outdoor Living Spaces",
            icon: Sun,
            description: "San Diegans live outdoors. Spring clean your patio, deck, and outdoor kitchen. Pressure wash hard surfaces, wipe down patio furniture, and clean your grill. Check cushions for mold or mildew from winter moisture and replace if needed.",
            proTip: "Apply fabric protector to outdoor cushions to extend their life through summer."
        },
        {
            number: 6,
            title: "Clean and Organize Closets",
            icon: TreeDeciduous,
            description: "Swap out heavy jackets and sweaters for lighter clothes. Donate what you didn't wear this winter. Wipe down shelves, vacuum closet floors, and consider adding shelf liners. San Diego's smaller closets make organization essential.",
            proTip: "Use the 'one-year rule'—if you didn't wear it in the past year, donate it."
        },
        {
            number: 7,
            title: "Deep Clean the Kitchen",
            icon: Sparkles,
            description: "Go beyond daily cleaning: pull out the refrigerator and stove to clean behind them. Degrease range hood filters. Clean inside the dishwasher and garbage disposal. Organize pantry items and check expiration dates.",
            proTip: "Run ice cubes and lemon peels through the garbage disposal for a fresh, clean smell."
        },
        {
            number: 8,
            title: "Refresh Soft Furnishings",
            icon: Flower2,
            description: "Vacuum upholstery, including under cushions. Steam clean sofas and chairs if possible. Wash throw blankets, decorative pillows covers, and curtains. These collect dust and allergens all winter and benefit from a spring refresh.",
            proTip: "Sprinkle baking soda on mattresses, let sit 30 minutes, then vacuum to deodorize."
        },
        {
            number: 9,
            title: "Address Garage and Storage",
            icon: Wind,
            description: "The garage often becomes a dumping ground over winter. Sweep and mop floors, sort through stored items, and donate or discard what you no longer need. Check for any pest issues. Organize tools and seasonal items.",
            proTip: "Before fire season, reduce clutter and store flammables properly."
        },
        {
            number: 10,
            title: "Create a Maintenance Schedule",
            icon: Calendar,
            description: "Use spring cleaning as a reset for the whole year. Set up a cleaning schedule to maintain your hard work: weekly standard cleaning, monthly deep clean of high-traffic areas, and quarterly deep cleans to prevent buildup.",
            proTip: "Schedule your next deep cleaning now—summer fills up fast as vacation season approaches."
        }
    ];

    useEffect(() => {
        updatePageSEO({
            title: `Top 10 Spring Deep Cleaning Tips for San Diego Homes | ${COMPANY_NAME}`,
            description: 'Spring cleaning tips tailored for San Diego homeowners. Tackle pollen season, hard water, and outdoor spaces with our expert checklist.',
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
                title="Top 10 Spring Deep Cleaning Tips for San Diego Homes"
                description="Expert spring cleaning tips for San Diego homeowners. From pollen season prep to outdoor living spaces, here's how to refresh your home."
                slug="top-10-spring-deep-cleaning-tips"
                datePublished="2024-02-20"
                dateModified="2024-12-15"
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
                                Seasonal Guide
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 10 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            Top 10 Spring Deep Cleaning Tips for San Diego Homes
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Your complete guide to refreshing your home for San Diego's sunny season—from pollen prep to patio perfect.
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
                                <strong>Spring cleaning in San Diego priorities:</strong> (1) Prep for pollen season by replacing HVAC filters, (2) deep clean windows after winter rain spots, (3) tackle hard water buildup, (4) prep AC for summer, (5) refresh outdoor living spaces, (6) organize closets, (7) deep clean kitchen, (8) refresh soft furnishings, (9) address garage/storage, (10) create an ongoing maintenance schedule. Best time: March-April after winter rains end.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Spring in San Diego is special. Those perfect 70-degree days between winter rain and summer heat make it ideal for throwing open windows, airing out your home, and tackling the deep cleaning you've been putting off.
                        </p>
                        <p className="text-slate-600">
                            But spring cleaning in San Diego isn't quite the same as in other cities. We don't need to worry about salt from winter roads or snow boot mud tracked through the house. Instead, we're dealing with pollen season, hard water buildup from winter, and getting our outdoor living spaces ready for the months we'll spend outside.
                        </p>
                        <p className="text-slate-600">
                            Here are our top 10 spring cleaning tips, tailored specifically for San Diego homes—whether you live in a Coronado beach cottage, a La Mesa ranch house, or a downtown high-rise.
                        </p>

                        {/* Tips List */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            10 Spring Cleaning Tips for San Diego
                        </h2>

                        <div className="space-y-8 my-8">
                            {springTips.map((tip) => (
                                <div key={tip.number} className="bg-slate-50 p-6 rounded-xl">
                                    <div className="flex items-start gap-4">
                                        <div className="flex-shrink-0 w-12 h-12 bg-teal-500 text-white rounded-full flex items-center justify-center font-bold text-xl">
                                            {tip.number}
                                        </div>
                                        <div className="flex-1">
                                            <div className="flex items-center gap-2 mb-2">
                                                <tip.icon className="w-5 h-5 text-teal-600" />
                                                <h3 className="font-bold text-slate-900 text-lg">{tip.title}</h3>
                                            </div>
                                            <p className="text-slate-600 mb-3">{tip.description}</p>
                                            <div className="bg-teal-100/50 p-3 rounded-lg">
                                                <p className="text-sm text-teal-800">
                                                    <strong>Pro Tip:</strong> {tip.proTip}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* San Diego-Specific Section */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Spring Cleaning by San Diego Neighborhood
                        </h2>
                        <p className="text-slate-600">
                            Different parts of San Diego face different challenges:
                        </p>

                        <div className="space-y-4 my-6">
                            <div className="p-4 bg-blue-50 rounded-lg">
                                <h3 className="font-bold text-slate-900 mb-2">🏖️ Coastal Communities (La Jolla, PB, OB, Coronado)</h3>
                                <p className="text-slate-600 text-sm">Focus extra attention on salt air residue, especially on windows, outdoor furniture, and stainless appliances. Check for any moisture/mold issues in closets or under sinks from winter humidity.</p>
                            </div>
                            <div className="p-4 bg-amber-50 rounded-lg">
                                <h3 className="font-bold text-slate-900 mb-2">🏔️ Fire-Prone Areas (Rancho Santa Fe, Scripps Ranch, East County)</h3>
                                <p className="text-slate-600 text-sm">Use spring cleaning as a chance to clear brush near structures, clean gutters, and ensure outdoor storage is organized for quick evacuation if needed. Check and replace HVAC filters that may have captured smoke from previous season.</p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg">
                                <h3 className="font-bold text-slate-900 mb-2">🏢 Downtown/Urban Condos</h3>
                                <p className="text-slate-600 text-sm">Maximize your limited space by decluttering aggressively. Clean balcony/patio areas. Dust often-neglected spots like top of cabinets, HVAC vents, and behind furniture. Schedule window cleaning if your building allows.</p>
                            </div>
                            <div className="p-4 bg-purple-50 rounded-lg">
                                <h3 className="font-bold text-slate-900 mb-2">🏡 Older Neighborhoods (North Park, Normal Heights, South Park)</h3>
                                <p className="text-slate-600 text-sm">Charming older homes often have original wood floors, vintage fixtures, and smaller closets. Use gentle cleaners on historic materials. Check for any water damage from winter storms in these pre-1960 homes.</p>
                            </div>
                        </div>

                        {/* Spring Cleaning Checklist Preview */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Your Spring Cleaning Quick Checklist
                        </h2>
                        <div className="bg-slate-50 p-6 rounded-xl my-6 not-prose">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Week 1: Prep & Bedrooms</h3>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Replace HVAC filters</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Declutter closets</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Wash all bedding</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Flip/rotate mattresses</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Deep clean bedroom floors</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Week 2: Kitchen & Bathrooms</h3>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Deep clean appliances</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Descale fixtures</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Check pantry expiration</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Sanitize bathrooms</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Clean exhaust fans</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Week 3: Living Areas</h3>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Vacuum upholstery</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Clean windows</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Dust ceiling fans</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Wash curtains/blinds</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Deep clean floors</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Week 4: Outdoors & Garage</h3>
                                    <ul className="space-y-2 text-slate-600 text-sm">
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Pressure wash patio</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Clean outdoor furniture</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Organize garage</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Clean grill</li>
                                        <li className="flex items-center gap-2"><CheckCircle className="w-4 h-4 text-teal-500" /> Prep AC for summer</li>
                                    </ul>
                                </div>
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
                            <h3 className="text-2xl font-bold mb-3">Need Help with Spring Cleaning?</h3>
                            <p className="text-teal-100 mb-6">
                                Let {COMPANY_NAME} handle the hard work. Our San Diego professionals offer spring deep cleaning packages to get your home guest-ready and allergen-free.
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
                                    Book Spring Cleaning
                                </Link>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="top-10-spring-deep-cleaning-tips" />

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-4">Spring Cleaning Services in San Diego</h3>
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

export default SpringCleaningTipsPage;
