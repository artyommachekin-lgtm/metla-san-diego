'use client';
/**
 * Deep Cleaning a Scripps Ranch Home: Before & After Room by Room
 * URL: /blog/deep-cleaning-scripps-ranch-before-after
 *
 * Case study / before-and-after showcase using real photos.
 * Zone 2 (Suburban Family) — Primary focus: Deep Cleaning & "Reset" Service
 * Hook C (Real Estate / Investment angle) per seo_strict_rules.md
 */
import React from 'react';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    XCircle,
    Sparkles,
    TreePine,
    Home,
    MapPin,
    Camera,
    ShieldCheck
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

const ScrippsRanchDeepCleanPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "How much does deep cleaning cost in Scripps Ranch?",
            answer: "Deep cleaning in Scripps Ranch typically ranges from $250 to $600 depending on home size and condition. Larger executive homes in Stonebridge Estates (4,000-6,000+ sq ft) fall toward the higher end, while semi-custom homes in Scripps Highlands (3,000-4,000 sq ft) are usually mid-range. Contact Metla for a free estimate based on your home's specifics."
        },
        {
            question: "What areas of Scripps Ranch do you serve?",
            answer: "We serve all of Scripps Ranch including Stonebridge Estates, Scripps Ranch Villages, Old Scripps Ranch, and Scripps Highlands — full coverage across the 92131 zip code. We also serve neighboring communities like Poway, Rancho Bernardo, and 4S Ranch."
        },
        {
            question: "How do you handle marble and premium surfaces?",
            answer: "We use safe, non-abrasive all-purpose products on every clean that won't damage natural stone finishes. For specialized marble, travertine, or granite treatments, let us know when booking — we'll bring surface-specific products."
        },
        {
            question: "How often should Scripps Ranch homes be deep cleaned?",
            answer: "Most Scripps Ranch homes benefit from a professional deep clean every 3 to 6 months. Homes closer to the eucalyptus groves or Lake Miramar may need quarterly service due to faster dust and debris accumulation. Between deep cleans, bi-weekly standard cleaning keeps things manageable."
        },
        {
            question: "Do you clean executive-sized homes over 4,000 square feet?",
            answer: "Yes. For larger homes in Stonebridge Estates and similar neighborhoods, we allocate additional time so our team can work through every room systematically. A 5,000 sq ft home typically takes a full day depending on condition — we assess scope during booking and plan accordingly."
        },
        {
            question: "Are your Scripps Ranch cleaners background-checked and insured?",
            answer: "Every member of our Scripps Ranch cleaning team is background-checked, fully insured, and experienced with executive-level homes. We understand the care required for premium finishes, and we carry full liability coverage for your peace of mind."
        }
    ];

    const howToSteps = [
        {
            name: "Assess Surfaces and Plan",
            text: "Walk through the home noting surface types — marble countertops, hardwood floors, tile, natural stone. Our standard all-purpose products are safe for all surfaces. For homes that request specialized surface care, we bring material-specific products."
        },
        {
            name: "Declutter and Prepare Rooms",
            text: "Clear countertops, nightstands, and bathroom surfaces. Move personal items to give full access to every surface. This step is critical in larger Scripps Ranch homes where square footage means more surfaces to reach."
        },
        {
            name: "Deep Clean Bedrooms Top to Bottom",
            text: "Start with ceiling fans and light fixtures, then work down to blinds, window sills, door frames, and baseboards. Vacuum under furniture, address closet shelving, and finish with floors. In Scripps Ranch bedrooms, pay extra attention to windowsills where eucalyptus dust settles."
        },
        {
            name: "Deep Clean Bathroom Vanity and Surfaces",
            text: "Apply cleaner to countertops and let it dwell. (For marble surfaces, we use pH-neutral products upon request.) Clean the sink basin, faucet, and mirror. Wipe down cabinet fronts and sanitize all high-touch surfaces. Address water spots on fixtures with appropriate mineral-dissolving products."
        },
        {
            name: "Deep Clean Bathtub and Tile Floors",
            text: "Clean the tub surface, jets, ledge behind the faucet, and the floor around the base — spots that get ignored during routine cleaning. Vacuum and mop tile floors. Address baseboards along the bathroom perimeter."
        },
        {
            name: "Final Walkthrough and Styling",
            text: "Walk through every room checking for missed spots. Style towels, arrange linens, and confirm every surface is clean and dry. Remove all cleaning supplies and ensure trash is taken out. The home should feel reset."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Deep Cleaning a Scripps Ranch Home: Before & After Room by Room"
                description="Real before-and-after results from a professional deep clean in Scripps Ranch (92131). Room-by-room walkthrough covering master bedroom, marble bathroom vanity, jetted bathtub, and breakfast nook."
                slug="deep-cleaning-scripps-ranch-before-after"
                datePublished="2026-03-06"
                dateModified="2026-03-06"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
            />
            <HowToSchema
                name="How to Deep Clean an Executive Home in Scripps Ranch"
                description="A professional room-by-room approach to deep cleaning a large Scripps Ranch home, including marble vanities, jetted tubs, and premium surfaces."
                totalTime="PT8H"
                supply={[
                    "All-purpose surface cleaner",
                    "Microfiber cloths",
                    "All-purpose cleaner",
                    "Bathroom sanitizer",
                    "Glass cleaner"
                ]}
                tool={[
                    "Professional-grade vacuum",
                    "Mop and bucket",
                    "Scrub brushes",
                    "Spray bottles"
                ]}
                steps={howToSteps}
            />
            <FAQSchema faqs={faqs} />

            {/* Hero */}
            <section className="bg-slate-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <Link href="/blog" className="text-teal-400 hover:text-teal-300 mb-4 inline-block">
                            ← Back to Blog
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-teal-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Before &amp; After
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 8 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            Deep Cleaning a Scripps Ranch Home: Before &amp; After Room by Room
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Real results from a recent professional deep clean in the 92131 — every room photographed before and after.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published March 6, 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-slate">

                        {/* Quick Answer Box */}
                        <div className="quick-answer bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8 not-prose">
                            <h2 className="text-lg font-bold text-teal-800 mb-2">Quick Answer</h2>
                            <p className="text-slate-700">
                                <strong>A professional deep clean of a Scripps Ranch home</strong> typically covers 3-5 rooms and takes 4-8 hours depending on square footage. This before-and-after walkthrough shows the results of a single-visit deep clean in <strong>Stonebridge Estates</strong> — master bedroom, bathroom vanity, bathtub area, and breakfast nook. Deep cleaning in the <strong>92131</strong> zip code ranges from $250 to $600.
                            </p>
                        </div>

                        {/* Introduction — Hook C: Real Estate / Investment */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Scripps Ranch homes are serious investments. Properties in Stonebridge Estates run 4,000 to 6,000+ square feet. Old Scripps Ranch has established homes with mature landscaping. Scripps Highlands features semi-custom builds in the 3,000-4,000 sq ft range. Across all four neighborhoods, homeowners share the same challenge: maintaining premium finishes in a community surrounded by eucalyptus groves and open North Inland terrain.
                        </p>
                        <p className="text-slate-600">
                            This isn't a generic cleaning guide. These are real photos from a deep clean we completed this week in a Stonebridge Estates home — minutes from <strong>Lake Miramar</strong> and accessible via <strong>Scripps Poway Parkway</strong>. We photographed every room before we started and after we finished. Here's what a professional <Link href="/service/deep-cleaning" className="text-teal-600 hover:text-teal-700 underline">deep cleaning service</Link> looks like in practice.
                        </p>

                        {/* The Scripps Ranch Challenge */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Why Scripps Ranch Homes Need Specialized Cleaning
                        </h2>
                        <p className="text-slate-600">
                            Scripps Ranch sits in San Diego's North Inland zone, surrounded by old-growth eucalyptus groves and the open spaces near Lake Miramar. That environment creates cleaning challenges you won't find in coastal neighborhoods like La Jolla or Pacific Beach. We break down exactly how eucalyptus debris, fire season ash, and Lake Miramar dust compound in our <Link href="/blog/fire-season-eucalyptus-scripps-ranch" className="text-teal-600 hover:text-teal-700 underline">fire season cleaning guide for Scripps Ranch</Link>.
                        </p>
                        <div className="space-y-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <TreePine className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Eucalyptus Debris Year-Round</h3>
                                    <p className="text-slate-600 text-sm">The old-growth eucalyptus canopy drops oily leaves, bark strips, and fine dust onto homes throughout the year. This residue tracks inside and leaves a film on entryway floors and window sills that standard cleaning misses.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Premium Surfaces Require Care</h3>
                                    <p className="text-slate-600 text-sm">Executive homes in Scripps Ranch feature marble countertops, natural stone tile, hardwood floors, and custom cabinetry. These surfaces need specific products and techniques — the wrong cleaner can etch marble or dull a hardwood finish.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Home className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Large Square Footage</h3>
                                    <p className="text-slate-600 text-sm">A 5,000 sq ft home has more baseboards, more ceiling fans, more blinds, and more door frames than a 1,500 sq ft condo. Deep cleaning at this scale takes significantly more time — our team works systematically room by room to cover every surface.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            For a full overview of what we offer in this community, visit our <Link href="/location/scripps-ranch" className="text-teal-600 hover:text-teal-700 underline">Scripps Ranch cleaning service</Link> page.
                        </p>

                        {/* Room 1: Master Bedroom */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Room 1: Master Bedroom — Before &amp; After
                        </h2>
                        <p className="text-slate-600">
                            The master bedroom in this Stonebridge Estates home had dusty surfaces, cluttered nightstands, and baseboards that hadn't been wiped in months. Here's what it looked like before and after a single deep clean session.
                        </p>
                        <div className="grid grid-cols-2 gap-4 my-6 not-prose">
                            <div>
                                <img
                                    src="/blog/scripps-ranch/scripps-master-before.jpg"
                                    alt="Scripps Ranch master bedroom before professional deep cleaning showing unmade bed and dusty surfaces"
                                    loading="lazy"
                                    decoding="async"
                                    width={800}
                                    height={600}
                                    className="rounded-lg w-full h-auto"
                                />
                                <p className="text-center text-sm text-slate-500 mt-2 font-medium">Before</p>
                            </div>
                            <div>
                                <img
                                    src="/blog/scripps-ranch/scripps-master-after.jpg"
                                    alt="Scripps Ranch master bedroom after deep cleaning with styled linens and dust-free surfaces"
                                    loading="lazy"
                                    decoding="async"
                                    width={800}
                                    height={600}
                                    className="rounded-lg w-full h-auto"
                                />
                                <p className="text-center text-sm text-slate-500 mt-2 font-medium">After</p>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            <strong>What we addressed:</strong> Ceiling fan blades, blinds, window sills, door frames, and baseboards throughout the room. All surfaces dusted and wiped. Linens straightened and bed styled. The difference isn't just visual — removing accumulated dust from ceiling fans and blinds improves the air quality in the room where you spend a third of your life.
                        </p>

                        {/* Room 2: Bathroom Vanity */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Room 2: Marble Bathroom Vanity — Before &amp; After
                        </h2>
                        <p className="text-slate-600">
                            This bathroom featured a marble countertop that had lost its luster. Water spots, soap buildup, and daily use had dulled the surface. Marble is a porous natural stone — it absorbs stains if you use the wrong products and can etch from acidic cleaners.
                        </p>
                        <div className="grid grid-cols-2 gap-4 my-6 not-prose">
                            <div>
                                <img
                                    src="/blog/scripps-ranch/scripps-vanity-before.jpg"
                                    alt="Bathroom marble vanity in Scripps Ranch home before cleaning with water spots and soap buildup"
                                    loading="lazy"
                                    decoding="async"
                                    width={800}
                                    height={600}
                                    className="rounded-lg w-full h-auto"
                                />
                                <p className="text-center text-sm text-slate-500 mt-2 font-medium">Before</p>
                            </div>
                            <div>
                                <img
                                    src="/blog/scripps-ranch/scripps-vanity-after.jpg"
                                    alt="Clean marble bathroom vanity after professional deep cleaning with styled towels and reed diffuser"
                                    loading="lazy"
                                    decoding="async"
                                    width={800}
                                    height={600}
                                    className="rounded-lg w-full h-auto"
                                />
                                <p className="text-center text-sm text-slate-500 mt-2 font-medium">After</p>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            <strong>What we addressed:</strong> We carefully cleaned the countertop, sink basin, faucet fixtures, and mirror. Cabinet fronts wiped down. Towels styled and a reed diffuser placed for that finished touch. If your Scripps Ranch home has marble or natural stone, specialized surface treatments are available upon request when you book.
                        </p>
                        <p className="text-slate-600 text-sm italic">
                            Want to learn more about caring for natural stone? Read our <Link href="/blog/how-to-deep-clean-granite-counters" className="text-teal-600 hover:text-teal-700 underline">guide to cleaning granite and stone countertops</Link>.
                        </p>

                        {/* Room 3: Bathtub & Tile */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Room 3: Jetted Bathtub &amp; Tile Floor — Before &amp; After
                        </h2>
                        <p className="text-slate-600">
                            The bathtub area had soap residue buildup on the tub surface and tile floors that hadn't been properly addressed in a while. Jetted tubs are especially tricky — residue builds up inside the jets where you can't see it, and the area behind the faucet and around the base of the tub collects grime that gets overlooked during routine cleaning.
                        </p>
                        <div className="grid grid-cols-2 gap-4 my-6 not-prose">
                            <div>
                                <img
                                    src="/blog/scripps-ranch/scripps-tub-before.jpg"
                                    alt="Jetted bathtub and tile floor in Scripps Ranch bathroom before deep cleaning"
                                    loading="lazy"
                                    decoding="async"
                                    width={800}
                                    height={600}
                                    className="rounded-lg w-full h-auto"
                                />
                                <p className="text-center text-sm text-slate-500 mt-2 font-medium">Before</p>
                            </div>
                            <div>
                                <img
                                    src="/blog/scripps-ranch/scripps-tub-after.jpg"
                                    alt="Jetted bathtub and tile floor after professional deep cleaning in Scripps Ranch"
                                    loading="lazy"
                                    decoding="async"
                                    width={800}
                                    height={600}
                                    className="rounded-lg w-full h-auto"
                                />
                                <p className="text-center text-sm text-slate-500 mt-2 font-medium">After</p>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            <strong>What we addressed:</strong> The tub surface, ledge behind the faucet, and floor around the tub base were all cleaned. Tile floors vacuumed and mopped. Baseboards along the bathroom perimeter wiped down. The result is a bathroom that looks and feels clean — not just the surfaces you see daily, but the ones you've been walking past.
                        </p>
                        <p className="text-slate-600 text-sm bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                            <strong>Note:</strong> Deep grout scrubbing and tile restoration is available as a <strong>specialized add-on</strong> service. Standard deep cleaning covers surface-level tile and floor cleaning. If your grout needs intensive restoration, let us know when you book and we'll include it in your estimate.
                        </p>

                        {/* Breakfast Nook Showcase */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            The Breakfast Nook: Small Spaces, Big Impact
                        </h2>
                        <p className="text-slate-600">
                            Sometimes the smallest spaces in your home make the biggest difference when they're clean. This breakfast nook didn't need a dramatic before-and-after — it needed attention. Surfaces wiped, crumbs cleared, the table cleaned and styled.
                        </p>
                        <div className="my-6 not-prose">
                            <img
                                src="/blog/scripps-ranch/scripps-nook-after.jpg"
                                alt="Styled breakfast nook in Scripps Ranch home with teal accent wall after cleaning"
                                loading="lazy"
                                decoding="async"
                                width={800}
                                height={600}
                                className="rounded-lg w-full h-auto"
                            />
                            <p className="text-center text-sm text-slate-500 mt-2 font-medium">After — styled and spotless</p>
                        </div>
                        <p className="text-slate-600">
                            A teal accent wall, gold pendant light, and fresh flowers on the table — this nook is where the family starts their morning. A deep clean isn't just about bathrooms and kitchens. It's about making every room in the house feel the way it should.
                        </p>

                        {/* What Deep Cleaning Covers */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            What a Professional Deep Clean Covers in Scripps Ranch
                        </h2>
                        <p className="text-slate-600">
                            Deep cleaning goes beyond surface-level tidying. Here's exactly what's included — and what's available as an add-on — so there are no surprises.
                        </p>

                        <div className="my-6 not-prose">
                            <h3 className="font-bold text-slate-900 mb-3">Included in Every Deep Clean</h3>
                            <div className="space-y-2">
                                {[
                                    "Appliance exteriors (fridge, oven, dishwasher)",
                                    "Microwave cleaned inside and out",
                                    "Baseboards, door frames, and ceiling fans",
                                    "Blinds, light fixtures, and window sills",
                                    "Detailed bathroom sanitization",
                                    "All hard floors vacuumed and mopped",
                                    "Countertops and surfaces wiped and sanitized",
                                    "High-touch surfaces disinfected (handles, switches, pulls)"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-600 text-sm">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="my-6 not-prose">
                            <h3 className="font-bold text-slate-900 mb-3">Available as Add-Ons</h3>
                            <div className="space-y-2">
                                {[
                                    "Inside refrigerator",
                                    "Inside oven",
                                    "Inside cabinets and drawers",
                                    "Interior windows",
                                    "Deep grout scrubbing and tile restoration"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-600 text-sm">{item} — <em>available at additional cost</em></span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <p className="text-slate-600">
                            Need the full package including inside appliances and cabinets? Our <Link href="/service/move-in-out-cleaning" className="text-teal-600 hover:text-teal-700 underline">move-in/move-out cleaning</Link> service includes everything above plus all add-ons as standard.
                        </p>

                        {/* FAQ Section */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-6">
                            Frequently Asked Questions About Deep Cleaning in Scripps Ranch
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
                        <div className="bg-teal-700 text-white p-8 rounded-xl my-10 text-center">
                            <h3 className="text-2xl font-bold mb-3">Book Your Scripps Ranch Deep Clean</h3>
                            <p className="text-teal-100 mb-2">
                                {COMPANY_NAME} serves all of Scripps Ranch — Stonebridge Estates, the Villages, Old Scripps Ranch, and Highlands. Our trained teams use safe all-purpose products on every clean, with specialized marble and stone treatments available upon request. We send the right crew size for your home.
                            </p>
                            <p className="text-teal-200 mb-6">
                                Call us at <strong>{PHONE_NUMBER}</strong> or book online.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <Link
                                    href="/booking"
                                    className="inline-flex items-center justify-center px-6 py-3 bg-white text-teal-700 font-bold rounded hover:bg-teal-50 transition-colors"
                                >
                                    Book a Cleaning
                                    <ArrowRight className="ml-2 w-5 h-5" />
                                </Link>
                                <Link
                                    href="/location/scripps-ranch"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                                >
                                    Scripps Ranch Service Area
                                </Link>
                            </div>
                        </div>

                        {/* Follow Our Work */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
                            <h3 className="font-bold text-slate-900 mb-3">Follow Our Work</h3>
                            <p className="text-slate-600 text-sm mb-4">See more before-and-after transformations and cleaning tips from the {COMPANY_NAME} team.</p>
                            <div className="flex flex-wrap gap-3">
                                <a href="https://www.facebook.com/metlacleanteam" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-lg text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    Facebook
                                </a>
                            </div>
                        </div>

                        <AuthorBio
                            name="Art Machekin"
                            role="Founder"
                            bio="Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home."
                        />

                        <RelatedArticles currentSlug="deep-cleaning-scripps-ranch-before-after" />

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-4">Deep Cleaning Services Across San Diego</h3>
                            <div className="flex flex-wrap gap-2">
                                <Link href="/location/scripps-ranch" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Scripps Ranch
                                </Link>
                                <Link href="/location/poway" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Poway
                                </Link>
                                <Link href="/location/rancho-bernardo" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Rancho Bernardo
                                </Link>
                                <Link href="/location/4s-ranch" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> 4S Ranch
                                </Link>
                                <Link href="/locations" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> All San Diego Locations
                                </Link>
                            </div>
                        </div>

                    </div>
                </div>
            </article>
        </div>
    );
};

export default ScrippsRanchDeepCleanPage;
