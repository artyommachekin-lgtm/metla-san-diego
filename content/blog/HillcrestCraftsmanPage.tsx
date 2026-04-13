'use client';
/**
 * Hillcrest Craftsman Home Cleaning: Historic Character, Modern Clean
 * URL: /blog/hillcrest-craftsman-home-cleaning
 *
 * Local guide for Hillcrest (92103) Craftsman owners covering century-old hardwood,
 * vintage tile, original millwork, University Avenue urban dust, Balboa Park canyon
 * air patterns, and the deep-vs-standard decision for historic homes.
 * Zone 3 (Urban Core) — Hillcrest content cluster
 */
import React from 'react';
import Link from 'next/link';
import {
    Home,
    Clock,
    MapPin,
    Calendar,
    CheckCircle,
    AlertCircle,
    DollarSign,
    Wind,
    Sparkles,
    Hammer,
    ArrowRight
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import HowToSchema from '../../components/HowToSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

const HillcrestCraftsmanPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "What does house cleaning in Hillcrest cost?",
            answer: "House cleaning in Hillcrest typically runs $150 to $320 for standard recurring service and $260 to $620 for a deep clean, depending on square footage and condition. Smaller Bankers Hill condos and Park West one-bedrooms fall toward the lower end. Larger Craftsman homes north of Robinson Avenue with original hardwood and multiple bathrooms fall toward the higher end. You receive an exact quote before we schedule based on your home's layout and current condition."
        },
        {
            question: "Can you clean a 100-year-old Craftsman without damaging the original finishes?",
            answer: "Yes. Our team is trained to work carefully around original hardwood, vintage tile, and carved millwork — no wet mopping, no abrasive pads, no harsh chemicals. We do not wax, seal, or refinish hardwood floors. We do not strip or re-glaze vintage tile. The goal is careful maintenance, not restoration. Specialized wood conditioning or tile sealing is handled by a flooring specialist, not a cleaning service."
        },
        {
            question: "Should I book a deep clean or standard cleaning for my Hillcrest home?",
            answer: "Most owners of older Hillcrest homes benefit from starting with one deep clean, then switching to biweekly standard cleaning for ongoing maintenance. Deep cleaning catches the built-up dust inside ceiling fans, along baseboards, in blinds, and on door frames that a standard clean does not have time to address. After the reset, standard cleaning keeps surfaces, bathrooms, kitchen, and floors in shape between deep cleans."
        },
        {
            question: "Do you clean condos in Bankers Hill and Park West?",
            answer: "Yes. We clean single-family Craftsman homes, townhomes, and condos throughout 92103 — including Bankers Hill high-rises, Park West condos, Uptown townhomes, and the Medical Complex area. For condos with building protocols (freight elevator reservations, insurance certificates, loading zone rules), we coordinate with your HOA or front desk before the first visit."
        },
        {
            question: "Does University Avenue traffic affect indoor dust levels?",
            answer: "Yes. Homes within a few blocks of University Avenue, Washington Street, and Robinson Avenue see faster dust accumulation on window sills, door frames, and baseboards from vehicle exhaust and street traffic. The fine particles settle as a grey film on horizontal surfaces. Weekly wipe-downs of sills and biweekly professional cleaning keep the buildup manageable."
        },
        {
            question: "How often should a Hillcrest Craftsman home be cleaned?",
            answer: "Biweekly standard cleaning works for most households, with a deep clean every 3 to 4 months. Homes with heavy foot traffic, pets, or proximity to University Avenue may benefit from weekly service. Craftsman homes with original hardwood floors especially benefit from consistent light cleaning — the gentler the routine, the better old finishes hold up over years of use."
        },
        {
            question: "What are the worst cleaning products for a historic Hillcrest home?",
            answer: "Avoid vinegar on hardwood (it etches old finishes over time), bleach on vintage tile grout (it discolors and breaks down the binder), ammonia on wood millwork (it dulls shellac), and steam mops on century-old plank floors (the heat and moisture force water into seams). If you're cleaning it yourself, stick with mild soap and water, barely damp microfiber, and soft-bristle brushes for carved details."
        },
        {
            question: "Do you serve all of 92103 including the Medical Complex area?",
            answer: "Yes. Our Hillcrest cleaning service covers all of 92103 — central Hillcrest, Bankers Hill, Park West, Mission Hills border, Uptown, Middletown, and the Medical Complex area around UC San Diego Health Hillcrest. We also serve Mission Hills, North Park, and South Park from the same scheduling zone."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="House Cleaning in Hillcrest: Caring for Historic Craftsman Homes"
                description="A practical guide to house cleaning in Hillcrest 92103 for Craftsman owners. Covers century-old hardwood care, vintage tile, original millwork, University Avenue dust, and when to book deep cleaning vs. standard recurring service."
                slug="hillcrest-craftsman-home-cleaning"
                datePublished="2026-04-13"
                dateModified="2026-04-13"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
            />
            <HowToSchema
                name="How to Clean a Hillcrest Craftsman Home Yourself Without Damaging Historic Finishes"
                description="A DIY step-by-step guide for homeowners cleaning a century-old Craftsman home in Hillcrest — how to protect original hardwood, vintage tile, and carved millwork while keeping the home healthy and presentable."
                totalTime="PT3H"
                supply={[
                    "Mild dish soap",
                    "Water",
                    "Microfiber cloths",
                    "All-purpose cleaner (mild)"
                ]}
                tool={[
                    "Soft-bristle detail brush",
                    "Microfiber flat mop",
                    "Vacuum with hard-floor setting",
                    "Step stool for millwork and light fixtures"
                ]}
                steps={[
                    {
                        name: "Dry-dust first, top to bottom",
                        text: "Start with ceiling fans, light fixtures, picture rails, and the tops of built-in bookshelves. Use a dry microfiber cloth — never a wet one — so loose dust falls to the floor where it can be vacuumed up at the end instead of smearing into old wood or plaster."
                    },
                    {
                        name: "Vacuum hardwood with a soft hard-floor attachment",
                        text: "Use a vacuum set for hard floors or a soft-bristle attachment. Do not use a beater bar on century-old plank floors — it loosens gaps between boards and can chip aged finish at the edges. Run the vacuum along the grain of the wood, not across it."
                    },
                    {
                        name: "Damp-mop hardwood with a barely-wet microfiber pad",
                        text: "Mix a few drops of mild dish soap into a bucket of water. Wring the microfiber flat mop until it feels almost dry to the touch. Mop in long strokes along the grain. Old hardwood finishes cannot handle standing water — if you can see the floor glisten, the mop is too wet. Skip vinegar, ammonia, and steam mops entirely."
                    },
                    {
                        name: "Clean vintage tile with mild soap only",
                        text: "Wipe original bathroom or kitchen tile with a soft cloth and a few drops of mild dish soap in warm water. Avoid acidic cleaners (vinegar, citrus), bleach, ammonia, and abrasive pads. Vintage glazes and grout binders break down faster than modern materials. The goal is to lift dirt, not to whiten or restore the surface."
                    },
                    {
                        name: "Detail original millwork with a soft brush",
                        text: "Built-in bookshelves, window casings, and carved door frames collect dust in every groove. Use a soft-bristle detail brush to loosen the dust, then follow with a dry microfiber cloth. If the wood is waxed or oiled, never apply water — use a cloth lightly dampened with the same finish the piece was originally treated with, or simply dust it dry."
                    },
                    {
                        name: "Finish with bathrooms, kitchen, and a final floor sweep",
                        text: "Sanitize bathroom fixtures, clean the kitchen counters and appliance exteriors, then do a final pass over all hardwood floors to pick up the dust that fell during earlier steps. Empty vacuum canisters outside so the fine particles do not re-enter the home."
                    }
                ]}
            />
            <FAQSchema faqs={faqs} />

            {/* Hero */}
            <section className="bg-slate-900 text-white pt-32 pb-16">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto">
                        <Link href="/blog" className="text-teal-400 hover:text-teal-300 mb-4 inline-block">
                            &larr; Back to Blog
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-teal-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Local Guide
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 9 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            House Cleaning in Hillcrest: Caring for Historic Craftsman Homes
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Looking for house cleaning in Hillcrest that understands historic homes? You bought your Craftsman for the century-old character — the original hardwood, the built-in bookshelves, the hand-crafted millwork. Here's what to know before you book.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published April 13, 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="max-w-3xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&h=900&q=80"
                        alt="Historic Craftsman-style home interior with original hardwood floors and wood millwork"
                        loading="lazy"
                        decoding="async"
                        width={1600}
                        height={900}
                        className="rounded-lg w-full h-auto shadow-lg"
                    />
                </div>
            </div>

            {/* Article Content */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-slate">

                        {/* Quick Answer Box */}
                        <div className="quick-answer bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg mb-8 not-prose">
                            <h2 className="text-lg font-bold text-teal-800 mb-2">Quick Answer</h2>
                            <p className="text-slate-700">
                                <strong>Careful cleaning of a Hillcrest Craftsman starts with dry dusting and gentle methods</strong> — avoid harsh chemicals, abrasive pads, and excess moisture on century-old hardwood, vintage tile, and original millwork. Our team is trained to work carefully around these surfaces: no vinegar, no bleach, no ammonia, no steam mops. Most owners in 92103 start with one deep clean to reset the home, then move to biweekly standard cleaning for ongoing maintenance. A deep clean every 3 to 4 months keeps the home caught up between recurring visits.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Hillcrest is one of the oldest neighborhoods in San Diego, and its housing stock tells that story. Walk a few blocks north of the Hillcrest Sign at University and Fifth and you'll see Craftsman bungalows, Spanish revivals, and early 20th-century cottages that have been standing for 90 to 110 years. The details that make them charming — hand-planed door frames, original fir floors, hand-set tile — are the same details that make cleaning tricky. Use the wrong product once, and you can dull a shellac finish that's been intact since before World War II.
                        </p>
                        <p className="text-slate-600">
                            This guide covers how to care for a historic home in 92103 without damaging what makes it historic. It also covers the practical realities of living in an urban core neighborhood — University Avenue dust, Balboa Park canyon air, condo building protocols, and the cost and scheduling of cleaning services in Hillcrest.
                        </p>

                        {/* Section 1 */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Why Hillcrest Craftsman Homes Need Specific Cleaning Care
                        </h2>
                        <p className="text-slate-600">
                            Craftsman homes in Hillcrest need careful cleaning because they were built with materials — old-growth Douglas fir floors, shellac and oil-based stains, hand-glazed tile, and plaster walls over wood lath — that age very differently than modern laminates, polyurethane, and drywall. What's safe on a 2020 engineered-wood floor can strip the finish off a 1920 plank floor in a single pass.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Hammer className="w-6 h-6 text-amber-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Original hardwood is often minimally sealed</h3>
                                    <p className="text-slate-600 text-sm">Many Hillcrest Craftsman floors still carry their original shellac, wax, or oil finish — sometimes with a thin layer of polyurethane added decades later. These finishes are softer and more porous than modern coatings. Excess water, vinegar, and ammonia can cloud, etch, or dissolve them.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Vintage tile uses fragile grout binders</h3>
                                    <p className="text-slate-600 text-sm">Original hex tile floors, subway tile walls, and Talavera accents in Hillcrest bathrooms and kitchens were set with grout formulations that break down under bleach and strong acids. Mild soap and water preserves the grout and glaze for many more years of use — skip the acidic cleaners and abrasive scrub pads.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Home className="w-6 h-6 text-slate-700 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Millwork has layers of old finish</h3>
                                    <p className="text-slate-600 text-sm">Built-in bookshelves, window seats, casings, and door frames in Craftsman homes usually carry multiple layers of shellac or stain applied over a century. Wet cleaning can soften the old finish and transfer it onto cloths. Dry dusting with a soft brush is safer for the wood and for the cleaner.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2 */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            The University Avenue Dust and Traffic Reality
                        </h2>
                        <p className="text-slate-600">
                            Urban-core Hillcrest sits on a grid of busy corridors — University Avenue, Washington Street, Fifth Avenue, Robinson Avenue, and the on-ramps to Highway 163. Vehicle exhaust, brake dust, and street grit drift into homes through open windows, sliding doors, and the original wood-sash windows common in older buildings. The result is a fine grey film on horizontal surfaces that accumulates faster than in quieter residential neighborhoods.
                        </p>
                        <p className="text-slate-600">
                            The effect is strongest within a block or two of University Avenue, near The Hub shopping center, and along Robinson Avenue approaching the Medical Complex area. Homes in Bankers Hill and Park West see slightly less street-level dust but more HVAC-circulated particles because of the density of surrounding buildings.
                        </p>
                        <div className="bg-slate-50 p-4 rounded-lg my-6 not-prose">
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Where Urban Dust Collects First in a Hillcrest Home</h3>
                            <ul className="space-y-1.5">
                                {[
                                    "Window sills — especially on the side facing University Avenue or Washington Street",
                                    "Door frames and baseboards near the front entry",
                                    "Ceiling fan blades and the tops of picture rails",
                                    "Blinds and curtain tops facing the street",
                                    "The top edges of built-in bookshelves and cabinet crowns"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-2">
                                        <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-600 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Section 3 */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Caring for Century-Old Hardwood Floors
                        </h2>
                        <p className="text-slate-600">
                            Original hardwood is the single most valuable surface in most Hillcrest Craftsman homes — and the easiest to damage with the wrong routine. If you're cleaning it yourself, skip harsh chemicals and excess water — use a barely-damp microfiber mop with mild soap and water. When our team cleans, we work carefully around original hardwood: no wet mopping, no abrasive pads, no harsh chemicals. For specialized wood conditioning, waxing, or sealing, that's handled by a flooring specialist, not a cleaning service. Our job is to keep the existing finish intact for as long as possible.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            {[
                                { task: "Vacuum before mopping, every time", detail: "Gritty particles from University Avenue traffic act like sandpaper when a wet mop drags them across old finish. Vacuuming first with a soft hard-floor attachment removes the abrasive load before any moisture touches the wood." },
                                { task: "Use barely damp microfiber — never a soaking wet mop", detail: "Old hardwood cannot handle standing water. Even a minute of pooled moisture can cup boards or whiten the finish. The mop pad should feel almost dry to the touch." },
                                { task: "Skip vinegar, ammonia, and steam mops", detail: "Vinegar is acidic enough to etch shellac and wax finishes. Ammonia dulls stained wood. Steam forces water into seams between boards. A few drops of mild soap in water on a barely-damp microfiber pad is the safer DIY routine." },
                                { task: "Clean along the grain, not across it", detail: "Mopping across the grain pushes moisture and debris into the seams between planks. Cleaning along the grain keeps water on the surface where it can evaporate before it causes damage." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-sm">{item.task}</h3>
                                        <p className="text-slate-600 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-600">
                            For more on the full routine — including tile floors and when it's time to call a contractor instead of a cleaner — see our <Link href="/blog/how-to-clean-hardwood-and-tile-floors" className="text-teal-600 hover:text-teal-700 underline">hardwood and tile floor cleaning guide</Link>.
                        </p>

                        {/* Section 4 */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Vintage Tile, Talavera, and Original Millwork: What Not to Use
                        </h2>
                        <p className="text-slate-600">
                            Historic tile and carved wood details in Hillcrest homes are the second-most common damage point after hardwood. The good news: a careful routine with mild products and soft tools keeps them in the condition you bought them in. The bad news: one pass with the wrong cleaner can leave a permanent mark.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                            <div className="p-4 bg-red-50 rounded-lg border border-red-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertCircle className="w-5 h-5 text-red-600" />
                                    <h3 className="font-bold text-slate-900 text-sm">Avoid on Historic Surfaces</h3>
                                </div>
                                <ul className="space-y-1.5 mt-2">
                                    {[
                                        "Bleach on vintage grout",
                                        "Vinegar on old hardwood or stone",
                                        "Ammonia on shellac millwork",
                                        "Abrasive pads on glazed tile",
                                        "Steam mops on plank floors",
                                        "Generic all-purpose sprays on unsealed wood"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <AlertCircle className="w-4 h-4 text-red-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-600 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <h3 className="font-bold text-slate-900 text-sm">Safe for Historic Surfaces</h3>
                                </div>
                                <ul className="space-y-1.5 mt-2">
                                    {[
                                        "Mild dish soap in warm water",
                                        "Plain water for rinsing",
                                        "Barely-damp microfiber cloths",
                                        "Soft-bristle detail brushes",
                                        "Dry dusting for carved millwork",
                                        "Distilled water for rinsing tile"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-600 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            On Talavera tile in particular — common in kitchens and bathrooms of Mission Hills-adjacent Craftsman homes — avoid acidic cleaners (vinegar, citrus) and harsh abrasives on the glazed surface. Mild soap and water is safest. Our team follows the same careful approach, and we do not re-glaze, strip, or restore the tile. The finish lasts far longer when it's left alone and cleaned gently than when it's scrubbed aggressively a few times a year.
                        </p>

                        {/* Section 5 */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Deep Cleaning vs. Recurring Standard Cleaning: When to Choose Each
                        </h2>
                        <p className="text-slate-600">
                            For most Hillcrest homes, the right starting point is one <Link href="/service/deep-cleaning" className="text-teal-600 hover:text-teal-700 underline">deep clean</Link> followed by <Link href="/service/standard-cleaning" className="text-teal-600 hover:text-teal-700 underline">biweekly standard cleaning</Link>. Deep cleaning resets the home — it addresses all the horizontal ledges where urban dust has accumulated and all the detail work that standard cleaning does not have time for. Standard cleaning then keeps the home in shape with a lighter, maintenance-focused scope on a regular cadence.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                            <div className="p-4 bg-teal-50 rounded-lg border border-teal-200">
                                <h3 className="font-bold text-slate-900 text-sm mb-2">Deep Clean Includes</h3>
                                <ul className="space-y-1.5">
                                    {[
                                        "Ceiling fans and light fixtures",
                                        "Baseboards and door frames",
                                        "Blinds and window sills",
                                        "Appliance exteriors",
                                        "Microwave inside and out",
                                        "Detailed bathroom sanitization",
                                        "All hard floors vacuumed and mopped"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-600 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <h3 className="font-bold text-slate-900 text-sm mb-2">Available as Add-Ons</h3>
                                <ul className="space-y-1.5">
                                    {[
                                        "Inside refrigerator",
                                        "Inside oven",
                                        "Inside cabinets",
                                        "Interior windows",
                                        "Grout scrubbing"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <DollarSign className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-600 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            After the initial deep clean, biweekly standard cleaning works for most households. If pets, kids, or proximity to University Avenue means your home accumulates dust faster, weekly cleaning is a practical option.
                        </p>

                        {/* Section 6 */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Condo and Townhome Living: Working with Building Protocols
                        </h2>
                        <p className="text-slate-600">
                            Hillcrest is not only Craftsman homes. Bankers Hill high-rises, Park West mid-rises, and Uptown townhomes are a significant share of the 92103 housing mix. Condo cleaning carries its own logistics — freight elevator reservations, certificates of insurance on file with the HOA, loading-zone rules, and scheduled service hours set by the building.
                        </p>
                        <p className="text-slate-600">
                            We coordinate with front desks and HOA management before the first visit so there are no surprises on cleaning day. If your building requires a certificate of insurance, we can send one directly to the management office. If your building has restricted service hours, we schedule around them.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">Bankers Hill</h3>
                                    <p className="text-slate-600 text-sm">Mid- and high-rise condos between downtown and the Balboa Park canyon rim. Compact floor plans, lots of glass, and a mix of modern finishes with occasional older buildings that have retained vintage details.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">Park West and Uptown</h3>
                                    <p className="text-slate-600 text-sm">A blend of single-family Craftsman homes, early Spanish-style bungalows, and mid-century townhomes. Cleaning needs vary block by block — the same routine does not fit every home.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">Medical Complex and Middletown</h3>
                                    <p className="text-slate-600 text-sm">Professional households around UC San Diego Health Hillcrest with tight schedules and a strong need for reliable recurring cleaning. Apartments and condos dominate, with some older single-family homes mixed in.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 7 */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Seasonal Patterns: Santa Ana Winds and Balboa Park Canyon Air
                        </h2>
                        <p className="text-slate-600">
                            The biggest seasonal cleaning challenges in 92103 are spring eucalyptus pollen and fall Santa Ana grit. Hillcrest sits on a mesa just west of Balboa Park, and the canyons on the park's north and west edges funnel air directly into the neighborhood. That canyon air carries eucalyptus pollen in spring, dry chaparral dust during Santa Ana events in fall and winter, and general organic debris year-round. The Marston House on the north edge of Balboa Park is a good visual reference — homes along Seventh and Eighth Avenues, running parallel to the park, catch the same breeze patterns.
                        </p>
                        <div className="bg-slate-50 p-4 rounded-lg my-6 not-prose">
                            <h3 className="font-bold text-slate-900 text-sm mb-2">Seasonal Cleaning Considerations in 92103</h3>
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {[
                                    { month: "Mar-May", note: "Pollen peak — clean blinds and fans more often" },
                                    { month: "Jun-Aug", note: "Steady dust — standard biweekly cadence" },
                                    { month: "Sep-Nov", note: "Santa Ana winds — gritty particles on sills" },
                                    { month: "Dec-Feb", note: "Rain suppresses dust — lightest season" }
                                ].map((item, i) => (
                                    <div key={i} className="text-center">
                                        <p className="font-bold text-teal-700 text-sm">{item.month}</p>
                                        <p className="text-slate-600 text-xs">{item.note}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <p className="text-slate-600">
                            During Santa Ana events, keeping windows closed during the windiest hours and wiping sills the next morning prevents grit from migrating deeper into the home. Between professional visits, a five-minute sill wipe-down goes a long way toward reducing the dust load your cleaner has to address on the next visit.
                        </p>

                        {/* Section 8 */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Cost and Scheduling in Hillcrest 92103
                        </h2>
                        <p className="text-slate-600">
                            Hillcrest house cleaning pricing depends on square footage, number of bathrooms, and the current condition of the home. Standard cleaning typically runs $150 to $320. Deep cleaning typically runs $260 to $620. Add-ons like inside refrigerator, inside oven, interior windows, and grout scrubbing are priced separately.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <DollarSign className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">Typical Hillcrest pricing ranges</h3>
                                    <p className="text-slate-600 text-sm">One-bedroom condo in Bankers Hill or Park West: standard $150-$200, deep $260-$380. Two-bedroom Craftsman near Robinson Avenue: standard $200-$260, deep $380-$490. Three-plus-bedroom Craftsman north of University Avenue: standard $260-$320, deep $490-$620.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Wind className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">Scheduling lead time</h3>
                                    <p className="text-slate-600 text-sm">For recurring biweekly service, we can usually start within the same week. For one-time deep cleans, allow 3 to 7 days of lead time. Peak periods (holidays, end-of-month move-outs) book out further — reserve 2 weeks ahead when possible.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            You receive an exact quote before we schedule, based on your home's size and condition. No surprise charges on the day of service.
                        </p>

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
                        <div className="bg-teal-700 text-white p-8 rounded-xl my-10 text-center">
                            <h3 className="text-2xl font-bold mb-3">Book Hillcrest House Cleaning</h3>
                            <p className="text-teal-100 mb-2">
                                {COMPANY_NAME} serves all of Hillcrest 92103 — Bankers Hill, Park West, Uptown, Middletown, and the Medical Complex area. We know how to clean historic Craftsman homes without damaging the character you bought them for.
                            </p>
                            <p className="text-teal-200 mb-6">
                                Call us at <strong>{PHONE_NUMBER}</strong> or book your cleaning online.
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
                                    href="/location/hillcrest"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                                >
                                    Hillcrest Service Area
                                </Link>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="hillcrest-craftsman-home-cleaning" />

                        <AuthorBio
                            name="Art Machekin"
                            role="Founder"
                            bio="Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home."
                        />

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-4">House Cleaning Services Across San Diego</h3>
                            <div className="flex flex-wrap gap-2">
                                <Link href="/location/hillcrest" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Hillcrest
                                </Link>
                                <Link href="/location/university-city" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> University City
                                </Link>
                                <Link href="/location/la-jolla" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> La Jolla
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

export default HillcrestCraftsmanPage;
