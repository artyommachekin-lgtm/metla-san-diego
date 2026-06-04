'use client';
/**
 * Eco-Friendly Cleaning in North Park: Safer Products for Pets, Kids, and Heritage Homes
 * URL: /blog/north-park-eco-friendly-cleaning
 *
 * Local guide for North Park (92104) residents on what eco-friendly cleaning
 * actually means — fragrance-free options for sensitive households, plant-based
 * products that are safe around pets and kids, and honest framing about which
 * specialty treatments stay request-only on heritage Craftsman surfaces.
 * Zone 3 (Urban Core) — North Park content cluster.
 */
import React from 'react';
import Link from 'next/link';
import {
    Clock,
    Calendar,
    CheckCircle,
    AlertCircle,
    ArrowRight,
    MapPin,
    Leaf,
    Sparkles,
    Wind,
    Home
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

function NorthParkEcoFriendlyCleaningPageInner() {

    const faqs: FAQItem[] = [
        {
            question: "How much does eco-friendly house cleaning in North Park cost?",
            answer: "Eco-friendly house cleaning in North Park typically runs $160 to $300 for a standard recurring service and $260 to $520 for a deep clean. Most North Park homes fall between 900 and 1,800 square feet. We use safe, tested all-purpose products on every visit at no upcharge — eco-friendly is the standard, not a premium add-on. Specialty pet-safe shampoos, plant-based stone polishes, and fragrance-free product swaps are available on request without changing the base price. We confirm pricing before scheduling."
        },
        {
            question: "What's different about cleaning a North Park home with pets or kids?",
            answer: "Homes with pets and kids in 92104 spend more time in direct contact with floors, baseboards, and low surfaces — exactly where residue from harsh products sits longest. We default to safer all-purpose products that work well on the everyday surfaces in North Park bungalows and newer condos alike. For households with sensitivities, we can switch to fragrance-free options on request. We also adjust the cleaning order so freshly mopped floors have time to dry before crawling toddlers or pets walk over them."
        },
        {
            question: "How often should a North Park home with kids and pets be deep cleaned?",
            answer: "Most North Park families with kids and pets benefit from biweekly standard cleaning plus a deep clean every 3 to 4 months. Homes near 30th Street or the University Heights border pick up more street dust and sometimes shift to weekly standard cleaning. Pet hair, kid-traffic on baseboards, and seasonal Switzer Canyon pollen all push the rhythm tighter. The right cadence depends on the home and how it's used week to week."
        },
        {
            question: "Are plant-based products safe on original Douglas fir and vintage tile?",
            answer: "Most plant-based all-purpose products are safer on heritage surfaces than acidic or ammonia-based cleaners — but not all of them are appropriate for original Douglas fir or hand-glazed vintage tile. We dust-clean and damp-mop hardwood with a barely-wet microfiber and a mild wood-safe cleaner. For specialty stone polish, pH-neutral marble treatment, or vintage tile restoration, let us know when booking and we will bring the right products. Specialty surface treatments are available on request, not part of every standard visit."
        },
        {
            question: "Do you use fragrance-free products for residents with sensitivities?",
            answer: "Yes. Fragrance is one of the most common irritants for households with asthma, allergies, or chemical sensitivities. We can switch to fragrance-free all-purpose, glass, and bathroom products on request when booking. Mention it in the booking notes and the team will plan supplies before arrival. There is no upcharge for fragrance-free product swaps."
        }
    ];

    const howToSteps = [
        {
            name: "Choose safer products before the visit, not during",
            text: "Confirm at booking whether the household needs fragrance-free options, pet-safe alternatives, or specialty treatments for heritage surfaces. The team brings supplies based on the booking notes. Last-minute changes are harder once supplies are already in the home. North Park households with kids under five, indoor pets, or anyone with asthma or chemical sensitivity should mention it upfront."
        },
        {
            name: "Dry-dust top-down before any wet cleaning",
            text: "Start with ceiling fans, light fixtures, picture rails, and the tops of built-in bookshelves. Use a dry extendable duster — wet cleaning at this stage drives dust deeper into surfaces below. Older North Park bungalows along 30th Street and near Switzer Canyon collect canyon pollen and street dust at high surfaces. Dry-dusting first means the dust ends up on floors that get vacuumed later, not on freshly mopped surfaces."
        },
        {
            name: "Vacuum with professional-grade equipment, including under low furniture",
            text: "Run a professional-grade vacuum across all carpets, area rugs, and hard floors. Move small furniture and pull out couches a few inches from walls. Pet hair, dander, and dust mites collect along baseboards and under furniture more than open floor space. This step matters more for households with pets than households without — the difference shows up within a week."
        },
        {
            name: "Damp-mop floors with surface-appropriate products",
            text: "Use a barely-wet microfiber pad on hardwood, never a saturated mop. For original Douglas fir, use a mild wood-safe cleaner along the grain — never vinegar, ammonia, or steam. For tile, use a mild plant-based all-purpose cleaner. Skip aggressive bleach-based products in homes with kids and pets unless there is a specific reason. Time the mopping so floors are dry before residents are back in the room."
        },
        {
            name: "Clean kitchen surfaces with safer all-purpose products",
            text: "Wipe countertops, backsplash, range hood, and cabinet fronts with a plant-based all-purpose cleaner. Clean appliance exteriors and the inside of the microwave. Pull out small appliances to clean underneath. Inside the oven and inside the fridge are add-ons, not part of a standard deep clean. For granite or marble counters, use a stone-safe product if specialty treatment was requested at booking."
        },
        {
            name: "Sanitize bathrooms with the right product for the surface",
            text: "Scrub the toilet inside and out, clean the tub or shower, descale glass and chrome, wipe the vanity, and sanitize touch points like door handles and light switches. For vintage hexagonal tile or original subway tile in older North Park bathrooms, skip acidic descalers — they etch old glaze. Use a mild non-acidic product instead. Check the exhaust fan cover for dust buildup."
        },
        {
            name: "Air the home out and confirm dry surfaces before departure",
            text: "Open a window for the last 15 minutes of the visit. Even safer products leave a residual scent that residents with sensitivities notice. Confirm all floors are dry before residents or pets walk through. Empty vacuum canisters outside so fine dust does not re-enter the home. A clean visit ends with the home ready to live in immediately, not with a 30-minute wait for products to settle."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Eco-Friendly Cleaning in North Park: Safer Products for Pets, Kids, and Heritage Homes"
                description="A practical guide to eco-friendly house cleaning in North Park (92104) — safer all-purpose products around kids and pets, fragrance-free options for sensitive households, and honest framing on what's standard versus request-only on heritage Craftsman surfaces."
                slug="north-park-eco-friendly-cleaning"
                datePublished="2026-05-23"
                dateModified="2026-05-23"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
            />
            <HowToSchema
                name="How to Clean a North Park Home Using Eco-Friendly Products"
                description="A step-by-step guide to eco-friendly cleaning in a North Park home — choosing safer products at booking, dust-first top-down workflow, surface-appropriate plant-based products, and air-out timing for households with kids and pets."
                totalTime="PT3H"
                supply={[
                    "Microfiber cloths",
                    "Plant-based all-purpose cleaner",
                    "Mild wood-safe floor cleaner",
                    "Non-acidic bathroom cleaner",
                    "Glass cleaner",
                    "Fragrance-free product alternates"
                ]}
                tool={[
                    "Professional-grade vacuum",
                    "Microfiber flat mop",
                    "Extendable duster",
                    "Soft-bristle detail brush",
                    "Step stool",
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
                            Eco-Friendly Cleaning in North Park: Safer Products for Pets, Kids, and Heritage Homes
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            North Park is a creative, pet-friendly, family-leaning neighborhood — and many residents care about what gets sprayed on their floors. House cleaning in North Park can use safer plant-based products on every visit without losing the quality that gets a home actually clean.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published May 23, 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="max-w-3xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1600&h=900&fit=crop&fm=webp&auto=format&q=80"
                        alt="Plant-based cleaning supplies in glass spray bottles next to leafy green houseplants on a kitchen counter in a North Park home"
                        loading="eager"
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
                        <div className="quick-answer bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl my-8 not-prose">
                            <h2 className="text-lg font-bold text-teal-800 mb-2">Quick Answer</h2>
                            <p className="text-slate-700">
                                <strong>Eco-friendly cleaning in North Park means safer all-purpose products that work well around kids and pets, fragrance-free options for households with sensitivities, and honest framing about what stays request-only on heritage Craftsman surfaces.</strong> A standard deep clean covers baseboards, door frames, ceiling fans, blinds, light fixtures, window sills, appliance exteriors, microwave inside and out, and full bathroom sanitization — <strong>inside the fridge, inside the oven, inside cabinets, and interior windows are add-ons</strong>. Specialty treatments for original Douglas fir, marble, or vintage tile are available on request when booking.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            North Park is one of San Diego's most pet-friendly, family-leaning, and design-conscious neighborhoods. Walk 30th Street, University Avenue, or the side streets feeding into Burlingame and University Heights, and the demographic shows in the dog-walkers, the strollers, and the houseplants in every front window. Plenty of residents in 92104 care about what products end up on their floors — not as a status symbol, but because kids and pets sit on those floors every day.
                        </p>
                        <p className="text-slate-600">
                            This guide covers what eco-friendly <Link href="/" className="text-teal-600 hover:text-teal-700 underline">house cleaning San Diego</Link> homes actually need — focused on <Link href="/location/north-park" className="text-teal-600 hover:text-teal-700 underline">North Park</Link>. What safer products mean in practice, how the cleaning order changes for households with kids and pets, which surfaces need request-only specialty treatments, and the booking rhythm that keeps everyone in the home comfortable.
                        </p>

                        {/* Section 1: Why eco-friendly matters in NP */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Why Product Choice Matters More in North Park Homes
                        </h2>
                        <p className="text-slate-600">
                            Eco-friendly cleaning is not about marketing — it is about the people, pets, and surfaces inside the home. Four things make product choice matter more in a North Park home than a strictly transactional clean.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Leaf className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Kids and pets live close to floors</h3>
                                    <p className="text-slate-600 text-sm">Toddlers crawl across baseboards. Dogs nap on tile. Residue from harsh products sits where small bodies spend the most time. Safer all-purpose products reduce the residue without sacrificing how clean the surface gets.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Wind className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Fragrance is a real irritant</h3>
                                    <p className="text-slate-600 text-sm">Heavy fragranced products trigger asthma, allergies, and chemical sensitivities in a meaningful slice of households. Fragrance-free product swaps are simple to request and help reduce that load. The home still smells clean — it smells like clean, not like artificial pine.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Home className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Heritage surfaces need gentler care</h3>
                                    <p className="text-slate-600 text-sm">North Park has one of San Diego's densest concentrations of Craftsman bungalows. Original Douglas fir, picture rails, plaster walls, and hand-glazed vintage tile all break down under acidic or ammonia-based cleaners. Safer products are usually also surface-safer.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Indoor air stays better when products are milder</h3>
                                    <p className="text-slate-600 text-sm">Thorough dusting and dust removal helps reduce airborne particles in a closed-up home. Pairing dust removal with milder products means the air after a visit feels cleaner, not stronger. We open windows for the last fifteen minutes of every visit.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: NP context */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            The North Park Context: 30th Street, Switzer Canyon, and the University Heights Border
                        </h2>
                        <p className="text-slate-600">
                            North Park is not a single uniform neighborhood. Cleaning loads and product priorities shift depending on where in 92104 the home sits — restaurant-corridor blocks, canyon-edge blocks, and quieter residential pockets all have different dust patterns and household profiles.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li><strong>30th Street corridor:</strong> Walkable, restaurant-heavy, busy weekends. More street dust and airborne grease on window sills and front-facing surfaces. Households here often have older kids, dogs, and frequent guests.</li>
                            <li><strong>Switzer Canyon edge:</strong> Canyon plant pollen and dry-season dust on sliding-door tracks, balcony rails, and west-facing window casings. Asthma triggers spike here during Santa Ana wind events.</li>
                            <li><strong>University Heights border:</strong> Quieter residential blocks with similar Craftsman bungalow stock. Many households with young kids and indoor pets. Eco-product requests are most common here.</li>
                            <li><strong>Burlingame and Altadena Park:</strong> Heritage Craftsman pockets with deep eco-conscious tilt. Specialty wood polish, fragrance-free swaps, and stone-safe products requested most often in these blocks.</li>
                        </ul>

                        {/* Section 3: Product-by-product safer choices */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Safer Product Choices, Surface by Surface
                        </h2>
                        <p className="text-slate-600">
                            Eco-friendly does not mean swapping every product for the same plant-based spray. Different surfaces need different formulas — and the right choice protects both the surface and the household. These are the safer product defaults we use, with the request-only specialty treatments called out clearly.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <h3 className="font-bold text-slate-900 mb-1">All-purpose surfaces (counters, tables, low-traffic floors)</h3>
                                <p className="text-slate-600 text-sm">Plant-based all-purpose cleaner on a microfiber cloth. Safe around pets and kids. Works on sealed counters, painted cabinets, and most modern tile. Fragrance-free options available on request without changing the base price.</p>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <h3 className="font-bold text-slate-900 mb-1">Original Douglas fir floors</h3>
                                <p className="text-slate-600 text-sm">Vacuum first with a soft hard-floor attachment, then damp-mop with a barely-wet microfiber pad and mild wood-safe cleaner. Specialty wood polish or pH-neutral conditioning treatments are available on request — not part of every standard visit.</p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <h3 className="font-bold text-slate-900 mb-1">Vintage tile and hand-glazed surfaces</h3>
                                <p className="text-slate-600 text-sm">Mild non-acidic plant-based cleaner on a soft cloth. Acidic products etch old glaze. Pay attention to grout lines, where dirt accumulates faster than the tile surface. Grout restoration is a specialty add-on, not standard cleaning.</p>
                            </div>
                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <h3 className="font-bold text-slate-900 mb-1">Bathroom fixtures and chrome</h3>
                                <p className="text-slate-600 text-sm">Mild non-acidic bathroom cleaner with a microfiber. Polish chrome and faucets with a dry cloth after wiping. For deep hard-water descaling on glass shower doors, mention it at booking — gentler products take longer per visit and we plan time accordingly.</p>
                            </div>
                        </div>

                        {/* Section 4: DIY vs Pro */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            DIY vs Professional Eco-Friendly Cleaning
                        </h2>
                        <p className="text-slate-600">
                            Plenty of North Park residents handle their own weekly tidy and only call in professional cleaning for the bigger jobs. The honest math comes down to time, products on hand, and detail work. What takes a homeowner an afternoon takes our team an hour because we move through the rooms in a fixed order with the right products planned in advance.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <h3 className="font-bold text-slate-900 text-sm mb-2">DIY works for:</h3>
                                <ul className="space-y-1.5 text-sm text-slate-700">
                                    <li>Weekly counter and table wipe-down</li>
                                    <li>Picture rail dry-dusting</li>
                                    <li>Hardwood damp-mop between visits</li>
                                    <li>Quick bathroom touch-up cleaning</li>
                                    <li>Decluttering before guests arrive</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <h3 className="font-bold text-slate-900 text-sm mb-2">Call us for:</h3>
                                <ul className="space-y-1.5 text-sm text-slate-700">
                                    <li>Biweekly standard cleaning</li>
                                    <li>Quarterly deep cleans</li>
                                    <li>Pre- and post-event resets</li>
                                    <li>Move-in / move-out service</li>
                                    <li>Detail bathroom and kitchen work</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            Our team works with 1 to 2 cleaners per visit, allocating time based on home size and condition. We use professional-grade vacuums and proven all-purpose products on every clean. Specialized treatments for original Douglas fir, marble, granite, or vintage tile are available on request when booking. For a closer look at heritage-home cleaning in this neighborhood, see our <Link href="/blog/craftsman-home-cleaning-north-park" className="text-teal-600 hover:text-teal-700 underline">North Park Craftsman cleaning guide</Link>.
                        </p>

                        {/* Section 5: Booking cadence */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Booking Cadence for North Park Households
                        </h2>
                        <p className="text-slate-600">
                            Most North Park households settle into one of three booking rhythms. Households with toddlers, indoor pets, or active home cooking schedules tend toward the faster end. Single occupants and couples without pets often hold the longer cadence.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Calendar className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Weekly standard cleaning</h3>
                                    <p className="text-slate-600 text-sm">Best for households with kids, indoor pets, or frequent hosting. Keeps visible surfaces fresh, hardwood floors maintained, and bathrooms reset every week. Pet hair and toddler baseboard wear stay manageable.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Calendar className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Biweekly standard cleaning</h3>
                                    <p className="text-slate-600 text-sm">The default rhythm for most North Park homes. Works for couples, smaller households, and homes without active pets. Pairs naturally with a deep clean every 3 to 4 months.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Calendar className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Monthly standard plus quarterly deep clean</h3>
                                    <p className="text-slate-600 text-sm">Works for tidy single-occupant homes, part-time-occupied homes, or households that handle most upkeep themselves. The quarterly deep clean catches the detail surfaces standard cleaning skips.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            Most owners benefit from starting with one <Link href="/service/standard-cleaning" className="text-teal-600 hover:text-teal-700 underline">recurring standard clean</Link> to reset the rhythm, then layering a deep clean every 3 to 4 months. Renters in nearby Hillcrest apartments follow a similar pattern — see our <Link href="/blog/hillcrest-apartment-deep-cleaning" className="text-teal-600 hover:text-teal-700 underline">Hillcrest apartment deep clean guide</Link> for the apartment-specific rhythm.
                        </p>

                        {/* Section 6: Deep vs Standard */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Deep Clean vs Standard Clean: What's Included
                        </h2>
                        <p className="text-slate-600">
                            The line between standard and deep cleaning matters when budgeting and when planning the rhythm. A standard clean keeps the visible surfaces fresh; a deep clean catches the detail surfaces that pick up dust between visits. Eco-friendly product choice applies to both.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <CheckCircle className="w-5 h-5 text-green-600" />
                                    <h3 className="font-bold text-slate-900 text-sm">Included in a deep clean</h3>
                                </div>
                                <ul className="space-y-1.5 mt-2 text-sm text-slate-700">
                                    <li>Baseboards throughout</li>
                                    <li>Door frames and door tops</li>
                                    <li>Picture rails and original molding</li>
                                    <li>Ceiling fans and light fixtures</li>
                                    <li>Blinds (slat by slat)</li>
                                    <li>Window sills and tracks</li>
                                    <li>Appliance exteriors</li>
                                    <li>Microwave inside and out</li>
                                    <li>Range hood and backsplash</li>
                                    <li>Full bathroom sanitization</li>
                                    <li>Cabinet fronts wiped down</li>
                                    <li>Fragrance-free swaps on request</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <AlertCircle className="w-5 h-5 text-amber-600" />
                                    <h3 className="font-bold text-slate-900 text-sm">Add-ons (request when booking)</h3>
                                </div>
                                <ul className="space-y-1.5 mt-2 text-sm text-slate-700">
                                    <li>Inside the refrigerator</li>
                                    <li>Inside the oven</li>
                                    <li>Inside cabinets and drawers</li>
                                    <li>Interior window washing</li>
                                    <li>Specialty wood treatment</li>
                                    <li>Stone-safe marble or granite polish</li>
                                    <li>Grout restoration</li>
                                    <li>Pet-safe deep stain treatment</li>
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
                        <div className="bg-teal-700 text-white p-8 rounded-xl my-10 text-center">
                            <h3 className="text-2xl font-bold mb-3">Book Eco-Friendly Cleaning in North Park</h3>
                            <p className="text-teal-100 mb-2">
                                {COMPANY_NAME} cleans homes across North Park, South Park, University Heights, and Normal Heights with safer all-purpose products on every visit. Fragrance-free swaps and specialty heritage-surface treatments are available on request, with no upcharge for the fragrance-free option.
                            </p>
                            <p className="text-teal-200 mb-6">
                                Call us at <strong>{PHONE_NUMBER}</strong> or book your eco-friendly clean online.
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
                                    href="/service/standard-cleaning"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                                >
                                    Standard Cleaning Service
                                </Link>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="north-park-eco-friendly-cleaning" />

                        <AuthorBio
                            name="Art Machekin"
                            role="Founder"
                            bio="Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home."
                        />

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-4">Eco-Friendly Cleaning Across San Diego</h3>
                            <div className="flex flex-wrap gap-2">
                                <Link href="/location/north-park" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> North Park
                                </Link>
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
}

export default function NorthParkEcoFriendlyCleaningPage() {
    return <NorthParkEcoFriendlyCleaningPageInner />;
}
