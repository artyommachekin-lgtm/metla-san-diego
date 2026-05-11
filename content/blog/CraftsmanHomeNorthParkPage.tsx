'use client';
/**
 * Craftsman Home Cleaning in North Park: Historic Detail, Modern Standard
 * URL: /blog/craftsman-home-cleaning-north-park
 *
 * Local guide for North Park (92104) Craftsman bungalow owners covering original
 * Douglas fir floors, picture rails, built-in cabinetry, vintage bathroom tile,
 * Switzer Canyon air patterns, 30th Street corridor traffic dust, and the deep-vs-
 * standard rhythm for heritage homes.
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
    Home,
    Hammer,
    Sparkles,
    Wind
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

function CraftsmanHomeNorthParkPageInner() {

    const faqs: FAQItem[] = [
        {
            question: "How much does house cleaning in North Park cost for a Craftsman bungalow?",
            answer: "House cleaning in North Park for a Craftsman bungalow typically runs $180 to $340 for standard recurring service and $280 to $560 for a deep clean. Most North Park bungalows fall between 900 and 1,800 square feet with 2 to 3 bedrooms. Homes near Switzer Canyon or along 30th Street with original Douglas fir floors, vintage tile bathrooms, and built-in cabinetry sometimes land toward the higher end because the detail work takes longer with gentler products. We confirm pricing before scheduling."
        },
        {
            question: "What makes a North Park Craftsman different from a newer home?",
            answer: "North Park Craftsman bungalows from the 1900s through 1920s have original old-growth Douglas fir floors, picture rails along living-room walls, built-in cabinetry around fireplaces and dining rooms, hand-set vintage tile in bathrooms, and plaster-and-lath walls instead of drywall. Each of these surfaces ages differently than modern construction and needs gentler products and slower cleaning. Modern cleaners and abrasive pads can dull or damage finishes that have been intact for a century."
        },
        {
            question: "How often should a North Park Craftsman be cleaned?",
            answer: "Most North Park Craftsman owners follow a biweekly standard cleaning cadence with a deep clean every 3 to 4 months. Homes near University Heights border or along the 30th Street corridor pick up more street dust and sometimes shift to weekly standard cleaning. Pets, frequent guests, or active wood-burning fireplaces also push the rhythm tighter. The right cadence depends on home size and how the home is used."
        },
        {
            question: "Can you clean original Douglas fir floors without damaging them?",
            answer: "Yes. Our team uses microfiber damp-mops with a barely-wet pad and a mild wood-safe cleaner along the grain of the floor. We never saturate old plank floors, never use vinegar, ammonia, or steam mops, and never apply a beater-bar vacuum on hardwood. Specialty wood conditioning or refinishing is a flooring specialist's job, not a cleaning service. Standard cleaning keeps the floor maintained between professional refinishing cycles."
        }
    ];

    const howToSteps = [
        {
            name: "Dry-dust top-down before touching anything wet",
            text: "Start with ceiling fans, light fixtures, picture rails, and the tops of built-in bookshelves. Use a dry extendable duster — never a wet cloth on plaster walls or carved millwork. Older North Park bungalows accumulate dust along original picture rails and door casings that rarely get touched. Dust falls onto floors that get vacuumed later, which is why top-down order matters most in heritage homes."
        },
        {
            name: "Vacuum hardwood floors with a soft attachment",
            text: "Switch the vacuum to a hard-floor setting or use a soft-bristle floor attachment. Never use a beater bar on century-old Douglas fir — it loosens joints between planks and can chip aged finish at the board edges. Run the vacuum along the grain, not across it. Move small rugs and pick up area runners before vacuuming the floor underneath."
        },
        {
            name: "Damp-mop hardwood with a barely-wet microfiber pad",
            text: "Use a microfiber flat mop wrung out until it feels almost dry. Add a few drops of mild dish soap or a wood-safe cleaner to warm water. Mop in long strokes along the grain. If the floor looks glossy or wet behind the mop, the pad is too saturated. Skip vinegar, ammonia, and steam mops entirely on original fir — they break down old finishes over time."
        },
        {
            name: "Detail built-in cabinetry and original millwork",
            text: "Built-in bookshelves, dining-room sideboards, and carved door frames collect dust in every groove. Use a soft-bristle detail brush to loosen dust, then follow with a dry microfiber cloth. If the wood is waxed or oiled, never apply water — dust it dry. For glass-front cabinet doors, clean with a microfiber and standard glass cleaner; avoid spraying directly onto vintage hardware."
        },
        {
            name: "Clean vintage bathroom tile with mild soap only",
            text: "Wipe original bathroom tile with a soft cloth and a few drops of mild dish soap in warm water. Avoid acidic cleaners (vinegar, citrus), bleach, ammonia, and abrasive pads. Vintage glazes and grout binders break down faster than modern materials. Hexagonal floor tile and original subway tile both need gentle treatment. Grout restoration is a specialty add-on, not standard cleaning."
        },
        {
            name: "Detail-clean the kitchen with appropriate products",
            text: "Clean appliance exteriors, microwave inside and out, range hood, backsplash, and countertops. North Park Craftsman kitchens often have original built-in cabinetry that needs gentle handling — wipe cabinet fronts with a barely-damp cloth and dry immediately. Inside the oven and inside the fridge are add-ons, not part of a standard deep clean."
        },
        {
            name: "Finish with bathrooms, then a final hardwood pass",
            text: "Sanitize bathroom fixtures, polish chrome and faucets, and clean the toilet inside and out. After the bathroom is done, do a final pass over all hardwood floors to pick up dust that fell during the earlier dry-dusting step. Empty vacuum canisters outside so fine plaster and wood dust does not re-enter the home."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Craftsman Home Cleaning in North Park: Historic Detail, Modern Standard"
                description="A practical house cleaning guide for North Park Craftsman bungalows — original Douglas fir floors, picture rails, built-in cabinetry, vintage bathroom tile, and the deep-vs-standard rhythm for 1900s–1920s heritage homes."
                slug="craftsman-home-cleaning-north-park"
                datePublished="2026-05-07"
                dateModified="2026-05-07"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
            />
            <HowToSchema
                name="How to Clean a North Park Craftsman Bungalow"
                description="A step-by-step guide to cleaning a North Park Craftsman bungalow, covering original hardwood, picture rails, built-in cabinetry, vintage tile, and the safe-product choices for century-old finishes."
                totalTime="PT3H"
                supply={[
                    "Mild dish soap",
                    "Microfiber cloths",
                    "All-purpose cleaner (mild)",
                    "Wood-safe floor cleaner",
                    "Glass cleaner"
                ]}
                tool={[
                    "Professional-grade vacuum",
                    "Microfiber flat mop",
                    "Soft-bristle detail brush",
                    "Extendable duster",
                    "Step stool"
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
                            Craftsman Home Cleaning in North Park: Historic Detail, Modern Standard
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            North Park Craftsman bungalows from the 1900s through 1920s come with details that newer construction never had — original Douglas fir floors, picture rails, built-in cabinetry, hand-set vintage tile. House cleaning in North Park has to slow down and work with those details, not against them.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published May 7, 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="max-w-3xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1505691938895-1758d7feb511?w=1600&h=900&fit=crop&fm=webp&auto=format&q=80"
                        alt="Craftsman bungalow interior with original hardwood floors, built-in cabinetry, and warm natural light"
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
                        <div className="quick-answer bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg my-8 not-prose">
                            <h2 className="text-lg font-bold text-teal-800 mb-2">Quick Answer</h2>
                            <p className="text-slate-700">
                                <strong>House cleaning in North Park for a Craftsman bungalow needs a slower, gentler approach than newer builds.</strong> Homes from the 1900s through 1920s have original Douglas fir floors, picture rails, built-in cabinetry, plaster-and-lath walls, and hand-set vintage tile that all behave differently from modern materials. A standard deep clean covers baseboards, picture rails, ceiling fans, blinds, light fixtures, window sills, appliance exteriors, and full bathroom sanitization — <strong>inside the fridge, inside the oven, inside cabinets, and interior windows are add-ons</strong>. Most owners run biweekly standard cleaning with a deep clean every 3 to 4 months.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            North Park has one of the densest concentrations of Craftsman bungalows in San Diego. Walk the blocks between 30th Street and Switzer Canyon, or the streets feeding off University Avenue toward the University Heights border, and you see bungalow after bungalow built between 1905 and 1925. The character that makes these homes desirable — the woodwork, the built-ins, the original tile — is also what makes cleaning them a different job than cleaning a 2010 condo.
                        </p>
                        <p className="text-slate-600">
                            This guide covers what house cleaning in <Link href="/location/north-park" className="text-teal-600 hover:text-teal-700 underline">North Park</Link> actually looks like for a Craftsman — the surfaces that need careful handling, the rooms that take longer than expected, the products that are safe on century-old finishes, and the booking rhythm that keeps the home maintained without overdoing it.
                        </p>

                        {/* Section 1: What makes a Craftsman different */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            What Makes a North Park Craftsman Different to Clean
                        </h2>
                        <p className="text-slate-600">
                            Craftsman homes were built with old-growth materials, hand-finished surfaces, and decorative details that modern builders rarely replicate. Each detail is part of why the home is worth owning, and each detail changes how the home gets cleaned.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Home className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Original Douglas fir floors</h3>
                                    <p className="text-slate-600 text-sm">Old-growth Douglas fir was the standard floor in North Park bungalows. The boards are narrower and tighter than modern oak floors, and the finish is usually shellac or oil-based stain — both of which break down with vinegar, ammonia, and steam.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Hammer className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Picture rails along living-room walls</h3>
                                    <p className="text-slate-600 text-sm">Picture rails — the wooden molding strip running 12 to 18 inches below the ceiling — were standard in 1910s and 1920s North Park bungalows. They collect dust at exactly the height most people forget to clean.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Built-in cabinetry and bookshelves</h3>
                                    <p className="text-slate-600 text-sm">Built-ins around fireplaces, in dining rooms, and flanking entry halls are a Craftsman signature. The carved details, glass-front doors, and inset shelves all need detail attention that mass-produced cabinets do not.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Wind className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Vintage tile bathrooms</h3>
                                    <p className="text-slate-600 text-sm">Hexagonal floor tile, original subway tile, and hand-glazed accent tile are common in North Park bathrooms. Modern abrasive cleaners and acidic descalers etch or discolor old glazes. Gentler products are the only safe option.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: North Park context */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            The North Park Context: 30th Street, Switzer Canyon, and University Heights Border
                        </h2>
                        <p className="text-slate-600">
                            North Park is not a single uniform neighborhood. The cleaning load shifts depending on where in 92104 the home sits. Homes near the 30th Street corridor pick up more street dust and restaurant-related grease in the air. Homes near Switzer Canyon get more canyon pollen and brush-dust during dry months. Homes on the University Heights border share characteristics with both.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li><strong>30th Street corridor:</strong> Walkable, busy, restaurant-heavy. More airborne grease and street dust on window sills and front-facing surfaces.</li>
                            <li><strong>Switzer Canyon edge:</strong> More canyon plant pollen on balcony rails, sliding-door tracks, and west-facing window casings during spring and early summer.</li>
                            <li><strong>University Heights border:</strong> Quieter residential blocks with similar bungalow stock. Less commercial dust, more household-generated cleaning load.</li>
                            <li><strong>Side streets off University Avenue:</strong> Mixed character. Older bungalows next to newer infill construction means the cleaning approach changes house by house.</li>
                        </ul>

                        {/* Section 3: Surface-by-surface guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Surface-by-Surface Guide for North Park Bungalows
                        </h2>
                        <p className="text-slate-600">
                            Not every surface in a Craftsman bungalow needs special handling, but the ones that do need it consistently. Skipping the right product on Douglas fir once probably won't show; doing it weekly will dull the finish within a year.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <h3 className="font-bold text-slate-900 mb-1">Douglas fir floors</h3>
                                <p className="text-slate-600 text-sm">Vacuum first with a soft hard-floor attachment, then damp-mop with a barely-wet microfiber pad and mild wood-safe cleaner. Never saturate. Never use vinegar, ammonia, or steam mops. Specialty wood conditioning or refinishing is available on request, but it is a flooring specialist's job, not a cleaning service.</p>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <h3 className="font-bold text-slate-900 mb-1">Picture rails and original molding</h3>
                                <p className="text-slate-600 text-sm">Picture rails are a dust magnet at the worst possible height — high enough to be invisible from the floor, low enough that the dust falls back onto furniture and sills below. Dust dry with a long microfiber duster. Do not wet-wash plaster walls directly.</p>
                            </div>
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <h3 className="font-bold text-slate-900 mb-1">Built-in cabinetry</h3>
                                <p className="text-slate-600 text-sm">Wipe wood cabinet fronts with a barely-damp microfiber and dry immediately. For glass-front cabinet doors, clean with microfiber and standard glass cleaner — never spray directly onto vintage hardware. Use a soft-bristle brush in carved grooves around inset shelving.</p>
                            </div>
                            <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                                <h3 className="font-bold text-slate-900 mb-1">Vintage tile (hexagonal, subway, accent)</h3>
                                <p className="text-slate-600 text-sm">Use a mild soap-and-water mix on a soft cloth. Acidic cleaners etch old glazes. Pay attention to grout lines, where dirt accumulates faster than the tile surface. Grout restoration is a specialty add-on, not standard cleaning.</p>
                            </div>
                        </div>

                        {/* Section 4: DIY vs Pro */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            DIY vs. Professional Cleaning for a Craftsman Bungalow
                        </h2>
                        <p className="text-slate-600">
                            Plenty of North Park homeowners handle weekly upkeep themselves and only call in professional cleaning for the bigger jobs. The honest math comes down to time and detail — what takes a homeowner two hours of attention takes our team forty-five minutes because we move through the rooms in a fixed order with the right products on hand.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <h3 className="font-bold text-slate-900 text-sm mb-2">DIY works for:</h3>
                                <ul className="space-y-1.5 text-sm text-slate-700">
                                    <li>Weekly hardwood damp-mop</li>
                                    <li>Picture rail dry-dusting</li>
                                    <li>Kitchen surface wipe-down</li>
                                    <li>Bathroom touch-up cleaning</li>
                                    <li>Quick decluttering before guests</li>
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
                            Our team works with 1 to 2 cleaners per visit, allocating time based on home size and condition. We use professional-grade vacuums and safe, proven all-purpose products on every clean. Specialized treatments for original hardwood, marble, or granite are available on request when booking. For a closer look at the broader Craftsman cleaning approach, see our related <Link href="/blog/hillcrest-craftsman-home-cleaning" className="text-teal-600 hover:text-teal-700 underline">Hillcrest Craftsman cleaning guide</Link>.
                        </p>

                        {/* Section 5: Booking cadence */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Booking Cadence for North Park Heritage Homes
                        </h2>
                        <p className="text-slate-600">
                            North Park bungalow owners tend to settle into one of three booking rhythms depending on how the home is used. Households with kids and pets push toward the faster end. Single owners or couples often hold the longer cadence.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Calendar className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Weekly standard cleaning</h3>
                                    <p className="text-slate-600 text-sm">Best for households with kids, pets, or frequent hosting. Keeps visible surfaces fresh, hardwood floors maintained, and bathrooms reset every week.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Calendar className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Biweekly standard cleaning</h3>
                                    <p className="text-slate-600 text-sm">The default rhythm for most North Park bungalows. Works for couples, smaller households, and homes without active pets. Pairs naturally with a deep clean every 3 to 4 months.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Calendar className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Monthly standard plus quarterly deep clean</h3>
                                    <p className="text-slate-600 text-sm">Works for tidy single-occupant homes or part-time-occupied bungalows. Standard cleaning monthly keeps the dust down; the quarterly deep clean catches everything between.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            Most owners benefit from starting with one <Link href="/service/deep-cleaning" className="text-teal-600 hover:text-teal-700 underline">deep cleaning</Link> appointment to reset the home, then switching to biweekly standard cleaning for ongoing maintenance. For renters or owners cleaning apartments rather than detached bungalows, see our <Link href="/blog/hillcrest-apartment-deep-cleaning" className="text-teal-600 hover:text-teal-700 underline">Hillcrest apartment deep clean guide</Link>.
                        </p>

                        {/* Section 6: Deep vs Standard */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Deep Clean vs Standard Clean: What's Included
                        </h2>
                        <p className="text-slate-600">
                            The line between standard and deep cleaning matters in heritage homes. A standard clean keeps the visible surfaces fresh; a deep clean catches the detail surfaces that pick up dust faster in older buildings than newer ones.
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
                                    <li>Built-in cabinetry detail</li>
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
                                    <li>Grout restoration</li>
                                    <li>Laundry (wash, dry, fold)</li>
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
                            <h3 className="text-2xl font-bold mb-3">Book a North Park Craftsman Clean</h3>
                            <p className="text-teal-100 mb-2">
                                {COMPANY_NAME} cleans heritage homes across North Park, South Park, University Heights, and Normal Heights. We use safe, proven products on original Douglas fir floors, picture rails, built-in cabinetry, and vintage tile — and we move through the home in a fixed order that fits the way Craftsman bungalows are laid out.
                            </p>
                            <p className="text-teal-200 mb-6">
                                Call us at <strong>{PHONE_NUMBER}</strong> or book your Craftsman clean online.
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
                                    href="/service/deep-cleaning"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                                >
                                    Deep Cleaning Service
                                </Link>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="craftsman-home-cleaning-north-park" />

                        <AuthorBio
                            name="Art Machekin"
                            role="Founder"
                            bio="Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home."
                        />

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-4">Heritage Home Cleaning Across San Diego</h3>
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

export default function CraftsmanHomeNorthParkPage() {
    return <CraftsmanHomeNorthParkPageInner />;
}
