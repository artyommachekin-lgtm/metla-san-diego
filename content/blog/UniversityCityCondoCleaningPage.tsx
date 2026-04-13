'use client';
/**
 * Deep Cleaning a UC Condo: High-Rise Living Tips
 * URL: /blog/deep-cleaning-university-city-condo
 *
 * Local guide covering deep cleaning for University City condos — Rose Canyon pollen,
 * Nobel Drive construction dust, building protocols near UTC, compact layout priorities,
 * UCSD end-of-quarter turnovers, 92122 seasonal calendar, and cost/scheduling.
 * Zone 2 (Suburban) — University City content cluster.
 */
import React from 'react';
import Link from 'next/link';
import {
    Wind,
    Sparkles,
    Clock,
    Home,
    MapPin,
    Calendar,
    CheckCircle,
    AlertCircle,
    DollarSign,
    ArrowRight
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

function UniversityCityCondoCleaningPageInner() {

    const faqs: FAQItem[] = [
        {
            question: "How much does deep cleaning a University City condo cost?",
            answer: "Deep cleaning for a University City condo typically runs $220 to $450, depending on square footage, layout, and condition. Most UC condos in 92122 fall between 700 and 1,300 square feet and land in the $250 to $380 range. Units near Nobel Drive construction or long-vacant rentals with heavy dust buildup may price toward the higher end due to the extra time needed. We provide an exact quote before scheduling."
        },
        {
            question: "What does a deep clean actually include in a UC condo?",
            answer: "A standard deep clean covers baseboards, door frames, ceiling fans, blinds, light fixtures, window sills, appliance exteriors, microwave interior and exterior, full bathroom sanitization, and detailed kitchen surfaces. Inside the fridge, inside the oven, inside cabinets, and interior window washing are add-ons you can request when booking. We confirm what is included before the first visit so there are no surprises."
        },
        {
            question: "Do you work with UTC high-rise building protocols?",
            answer: "Yes. We coordinate with front desk staff and property management for elevator access, vendor parking, and HOA quiet hours common in buildings along Nobel Drive and Costa Verde. We arrive with all supplies in a single trip and never stage equipment in shared hallways. If your building requires insurance certificates or vendor registration, we handle that paperwork before the first appointment."
        },
        {
            question: "How often should a 92122 condo be deep cleaned?",
            answer: "Most University City condos benefit from a deep clean every 3 to 6 months, with standard cleaning in between. Units near Rose Canyon or with balconies facing Nobel Drive construction often need deep cleaning every quarter because of airborne dust and pollen. Smaller studios and one-bedroom units in Costa Verde can usually stretch to twice a year if standard cleaning happens biweekly."
        },
        {
            question: "Can you clean a UCSD student rental between quarters?",
            answer: "Yes. We handle end-of-quarter turnovers for student rentals across University City and the UTC corridor. Our move-in and move-out cleaning covers inside cabinets, appliance interiors, and the surfaces empty rooms reveal. We recommend booking 2 to 3 weeks before UCSD's June and September turnover peaks — availability in 92122 fills fast during those windows."
        },
        {
            question: "Do you handle hard water stains in UC bathrooms?",
            answer: "Yes, we treat hard water deposits on faucets, shower glass, and tile as part of a deep clean. San Diego water is notably hard, and older UC buildings show mineral buildup faster than newer construction. We use appropriate descaling products on chrome, glass, and porcelain. We do not perform grout restoration or resurfacing — those are specialty services outside standard cleaning."
        },
        {
            question: "How long does a University City condo deep clean take?",
            answer: "A deep clean on a typical 92122 condo takes 3 to 5 hours with a team of 1 to 2 cleaners. A studio or small one-bedroom near UTC runs closer to 3 hours. A two-bedroom with two bathrooms in Costa Verde or South University City usually lands in the 4 to 5 hour range. We schedule enough time to do the work properly rather than rushing through it."
        },
        {
            question: "Do you clean condos near UCSD and Westfield UTC?",
            answer: "Yes. We serve the full University City area including UTC, Costa Verde, South University City, Governor Park, and condo complexes along Nobel Drive, Genesee Avenue, and Regents Road. We also cover the Sorrento Valley border and zip codes 92122 and 92121. Booking is available online or by phone."
        }
    ];

    const howToSteps = [
        {
            name: "Coordinate with building staff and HOA rules",
            text: "Confirm elevator access, vendor parking, and quiet hours with your front desk or property management before the appointment. Many University City buildings restrict vacuum use before 9 AM or after 8 PM. Consolidate all supplies into a single trip up the elevator so shared hallways stay clear."
        },
        {
            name: "Cover fabric surfaces and attack airborne dust first",
            text: "Drape sofas and beds with drop cloths before dusting begins. Start with ceiling fans, light fixtures, and the tops of tall furniture — UC condos accumulate fine Rose Canyon pollen and Nobel Drive construction dust on high surfaces that rarely get touched. Work top to bottom so dislodged particles fall onto surfaces you will clean later."
        },
        {
            name: "Clean blinds, window sills, and door frames",
            text: "Wipe each blind slat individually with a damp microfiber cloth. Window sills on west-facing units collect a visible dust line by mid-afternoon — get into the corners where the track meets the frame. Door frames above eye level hold months of dust in most condos."
        },
        {
            name: "Deep clean the kitchen and handle hard water",
            text: "Clean appliance exteriors, microwave interior and exterior, range hood, backsplash, countertops, and cabinet fronts. Descale faucets and the stainless sink with an appropriate product for hard water residue. Pull out small appliances and wipe underneath. Inside the oven and inside the fridge are add-ons, not included by default."
        },
        {
            name: "Sanitize both bathrooms fully",
            text: "Scrub the toilet inside and out, clean the tub and shower, descale glass doors and chrome fixtures, wipe the vanity and mirror, and disinfect all touch points. Older UC buildings show mineral buildup faster because of San Diego water hardness. Check the exhaust fan cover for dust buildup."
        },
        {
            name: "Vacuum all floors before mopping",
            text: "Condos with tile, laminate, or vinyl plank show every particle. Vacuum first with a professional-grade vacuum to remove grit before mopping so the floor does not get scratched. Move small furniture, check under area rugs, and vacuum baseboards where dust collects against the wall."
        },
        {
            name: "Final walkthrough and quiet exit",
            text: "Walk each room with the resident if possible. Confirm baseboards, door frames, and light fixtures were addressed — these are the spots clients check first after a deep clean. Exit quietly and leave nothing in shared hallways. Many University City buildings have strict noise and common-area rules, and a clean exit matters."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Deep Cleaning a UC Condo: High-Rise Living Tips"
                description="A practical guide to deep cleaning San Diego condos in University City — Rose Canyon pollen, Nobel Drive construction dust, UTC high-rise building protocols, UCSD turnover scheduling, and what a 92122 deep clean actually covers."
                slug="deep-cleaning-university-city-condo"
                datePublished="2026-04-11"
                dateModified="2026-04-11"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
            />
            <HowToSchema
                name="How to Deep Clean a University City Condo"
                description="A step-by-step guide to deep cleaning a condo in University City (92122), covering building protocols, airborne dust from Rose Canyon and Nobel Drive, hard water, and compact layout priorities."
                totalTime="PT4H"
                supply={[
                    "Microfiber cloths",
                    "All-purpose cleaner",
                    "Glass cleaner",
                    "Bathroom descaler",
                    "Floor cleaning solution",
                    "Drop cloths",
                    "Trash bags"
                ]}
                tool={[
                    "Professional-grade vacuum",
                    "Mop and bucket",
                    "Extendable duster",
                    "Step stool",
                    "Spray bottles",
                    "Supply caddy"
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
                            Deep Cleaning a UC Condo: High-Rise Living Tips
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Rose Canyon pollen on every balcony door, Nobel Drive construction dust in every air vent, and HOA quiet hours that shape your schedule — deep cleaning San Diego condos in University City follows its own playbook.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published April 11, 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="max-w-3xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=1600&h=900&q=80"
                        alt="Modern high-rise condominium interior with open kitchen and large windows in University City San Diego"
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
                        <div className="quick-answer bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl my-8 not-prose">
                            <h2 className="text-lg font-bold text-teal-800 mb-2">Quick Answer</h2>
                            <p className="text-slate-700">
                                <strong>Deep cleaning a University City condo means working around high-rise building protocols while tackling the Rose Canyon pollen and Nobel Drive construction dust that coat every flat surface in 92122.</strong> A full deep clean covers baseboards, door frames, ceiling fans, blinds, light fixtures, window sills, appliance exteriors, and full bathroom sanitization — <strong>inside the fridge, inside the oven, and interior window washing are add-ons</strong>. Most UC condos benefit from a deep clean every 3 to 6 months, with standard cleaning between visits.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            University City has one of the densest condo populations in San Diego. Walk any block off Nobel Drive, Genesee Avenue, or Regents Road and you see complex after complex — from Costa Verde townhomes to the high-rises rising near Westfield UTC. If you live in one of them, your cleaning needs are different from a detached home. The building itself adds protocols. The environment around UCSD and Rose Canyon adds pollen and construction dust. And the compact layout rewards a methodical approach over brute effort.
                        </p>
                        <p className="text-slate-600">
                            This guide covers what a proper deep cleaning actually includes in a <Link href="/location/university-city" className="text-teal-600 hover:text-teal-700 underline">University City</Link> condo — what the work includes, how building rules shape the visit, which surfaces matter most in a small space, and how to schedule around UCSD's academic calendar and 92122 seasonal patterns.
                        </p>

                        {/* Section 1: UTC Challenge */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            The UTC Condo Cleaning Challenge
                        </h2>
                        <p className="text-slate-600">
                            UTC condos face two specific cleaning challenges: Rose Canyon pollen in spring and construction dust from ongoing Nobel Drive development. Rose Canyon runs right through the neighborhood, pushing pollen and fine particulate onto balconies and into window tracks on a daily basis. Nobel Drive has had rolling construction projects for years — high-rise builds, retail renovations, street work — and the resulting dust travels surprisingly far. When Santa Ana winds hit in fall, the two sources compound.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Wind className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Rose Canyon pollen</h3>
                                    <p className="text-slate-600 text-sm">Oak, sycamore, and eucalyptus pollen from the canyon settles on balcony rails, sliding door tracks, and any window sill that sees afternoon sun. Residents in Costa Verde and South University City notice a visible yellow-green film by late March most years.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <AlertCircle className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Nobel Drive construction dust</h3>
                                    <p className="text-slate-600 text-sm">Fine concrete and drywall dust drifts from active sites across the UTC corridor. It settles on ceiling fans, the tops of cabinets, and air vents. Because it is so fine, standard weekly dusting does not fully remove it — this is what deep cleaning is designed to address.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Home className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Hard water in older buildings</h3>
                                    <p className="text-slate-600 text-sm">San Diego water is notably hard. Condos built before 2005 across University City show mineral buildup on shower glass, chrome fixtures, and stainless sinks faster than newer construction. Descaling is part of a proper San Diego deep cleaning visit.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: What's Included */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            What a UC Condo Deep Clean Actually Covers
                        </h2>
                        <p className="text-slate-600">
                            A deep clean is a standard clean plus every detail surface that does not get touched weekly. This is the list we work from on a 92122 condo visit.
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
                                    <li>Ceiling fans and light fixtures</li>
                                    <li>Blinds (individual slat wipe)</li>
                                    <li>Window sills and tracks</li>
                                    <li>Appliance exteriors</li>
                                    <li>Microwave inside and out</li>
                                    <li>Range hood and backsplash</li>
                                    <li>Full bathroom sanitization</li>
                                    <li>Hard water descaling on fixtures</li>
                                    <li>Cabinet fronts wiped down</li>
                                    <li>Vents and registers dusted</li>
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
                                    <li>Laundry (wash, dry, fold)</li>
                                    <li>Balcony deep clean</li>
                                    <li>Garage or storage unit</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            We label the add-ons clearly so there is no confusion about what the base price covers. If you want the inside of the oven addressed, tell us at booking and we will build it into the quote. A <Link href="/service/deep-cleaning" className="text-teal-600 hover:text-teal-700 underline">deep cleaning</Link> appointment is designed to meet the neglected surfaces that standard cleaning skips — not to replace specialty services like grout restoration or carpet extraction.
                        </p>

                        {/* Section 3: Building Protocols */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Working Around High-Rise Building Protocols
                        </h2>
                        <p className="text-slate-600">
                            UTC high-rise buildings require vendor registration, elevator reservations, designated parking, and adherence to HOA quiet hours before any cleaning visit begins. Unlike a house with a single front door, a UC condo has a lobby, concierge, elevator, parking garage, and neighbors on every side. These protocols shape how the work gets done, and skipping any of them creates friction with property management or the HOA.
                        </p>
                        <ul className="list-disc pl-6 space-y-2 text-slate-600">
                            <li><strong>Vendor registration:</strong> Many buildings along Nobel Drive and Costa Verde require insurance certificates and vendor paperwork before the first visit. We handle this upfront so there are no delays at the front desk.</li>
                            <li><strong>Elevator coordination:</strong> Service elevators often need reservations. We consolidate all supplies into a single trip — caddy, vacuum, mop — so the elevator is only used twice per visit.</li>
                            <li><strong>Parking:</strong> UTC parking is tight. Most buildings offer guest or vendor spots but restrict times. We confirm parking before arrival.</li>
                            <li><strong>Quiet hours:</strong> Many HOAs restrict vacuum use before 9 AM or after 8 PM. We schedule within those windows.</li>
                            <li><strong>Shared hallways:</strong> We never stage equipment in corridors. Everything stays inside your unit from arrival to departure.</li>
                        </ul>

                        {/* Section 4: Compact Layout */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Small Space, Big Difference: Cleaning Priorities in a Compact Layout
                        </h2>
                        <p className="text-slate-600">
                            Compact condo layouts reward prioritization because every surface is visible from every angle. In a 900-square-foot unit, a missed window sill is noticed the moment you walk in. These are the high-impact surfaces we focus on in University City condos.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Sliding door tracks and balcony glass</h3>
                                    <p className="text-slate-600 text-sm">The single biggest visible difference in a UC condo. Tracks trap pollen, dust, and pet hair. Glass shows every streak. We clean both sides and vacuum the track before wiping.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Kitchen focal points</h3>
                                    <p className="text-slate-600 text-sm">In an open-plan condo, the kitchen is the first thing you see from the entry. Countertops, stovetop, backsplash, and stainless appliances have to be spotless because they are always in view.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Bathroom glass and chrome</h3>
                                    <p className="text-slate-600 text-sm">Small bathrooms show hard water buildup immediately. Descaling the shower glass and faucets is the surface that makes a bathroom feel newly renovated.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Sparkles className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Baseboards and door frames</h3>
                                    <p className="text-slate-600 text-sm">The first place clients check after a deep clean. Dust on baseboards in a small condo is noticeable from any seated position.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 5: Seasonal Calendar */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Seasonal Cleaning Calendar for 92122
                        </h2>
                        <p className="text-slate-600">
                            University City weather patterns shape when deep cleaning matters most. Here is what we see across the year in 92122.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <h3 className="font-bold text-slate-900 mb-1">Spring (March–May): Pollen peak</h3>
                                <p className="text-slate-600 text-sm">Rose Canyon tree pollen coats balcony doors and window sills. This is the busiest deep cleaning window for UC condos. Book early — April fills up fast.</p>
                            </div>
                            <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                                <h3 className="font-bold text-slate-900 mb-1">Summer (June–August): UCSD turnover</h3>
                                <p className="text-slate-600 text-sm">End of spring quarter in June and move-out leases in August drive heavy demand for student housing turnovers. Book 2 to 3 weeks ahead.</p>
                            </div>
                            <div className="p-4 bg-orange-50 rounded-lg border border-orange-200">
                                <h3 className="font-bold text-slate-900 mb-1">Fall (September–November): Santa Ana dust</h3>
                                <p className="text-slate-600 text-sm">Santa Ana winds pull dust from Rose Canyon and inland construction sites. Post-Santa-Ana deep cleans are common requests from Costa Verde and Governor Park residents.</p>
                            </div>
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <h3 className="font-bold text-slate-900 mb-1">Winter (December–February): Holiday prep</h3>
                                <p className="text-slate-600 text-sm">Pre-holiday deep cleans spike in early December. January is a good window for a reset deep clean — demand is lower and scheduling is flexible.</p>
                            </div>
                        </div>

                        {/* Section 6: Student Housing */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Student Housing and End-of-Quarter Turnovers
                        </h2>
                        <p className="text-slate-600">
                            UCSD's academic calendar drives a predictable rhythm of move-outs in University City. Spring quarter ends in mid-June. Summer sessions finish in early September. Fall move-ins start in late September. For landlords and outgoing tenants across the UTC corridor, these windows are when turnover cleaning matters most.
                        </p>
                        <p className="text-slate-600">
                            Our move-in and move-out service covers every surface an empty unit reveals — inside cabinets, appliance interiors, closets, and the baseboards and corners that furniture usually hides. The goal is to help improve your chances of getting the deposit back by meeting standard landlord expectations, though final deposit decisions are always the landlord's call. We do not make guarantees about deposit outcomes — we focus on delivering a thorough clean.
                        </p>
                        <p className="text-slate-600">
                            If you are managing a UCSD rental, book 2 to 3 weeks before your turnover date. Availability in 92122 and 92121 fills fast during June and September peaks, and waiting until the last week rarely works.
                        </p>

                        {/* Section 7: Cost & Scheduling */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Cost and Scheduling in University City
                        </h2>
                        <p className="text-slate-600">
                            Deep cleaning a University City condo typically runs $220 to $450. Most UC units land in the $250 to $380 range. Pricing depends on square footage, condition, and add-ons.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <DollarSign className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Studio / 1-bedroom (under 800 sqft)</h3>
                                    <p className="text-slate-600 text-sm">Typical range: $220 to $300. Common in UTC high-rises and older Costa Verde complexes. 3 to 4 hours with 1 to 2 cleaners.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <DollarSign className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">2-bedroom (800–1,200 sqft)</h3>
                                    <p className="text-slate-600 text-sm">Typical range: $280 to $380. Most common UC condo size. 4 to 5 hours with 1 to 2 cleaners.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <DollarSign className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Large 2-bed / 3-bedroom (1,200–1,600 sqft)</h3>
                                    <p className="text-slate-600 text-sm">Typical range: $360 to $450. Found in newer UTC high-rises and South University City townhomes. 5 hours with 1 to 2 cleaners.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            We serve the full University City area including UTC, Costa Verde, South University City, Governor Park, and the Sorrento Valley border — both 92122 and 92121. For related reading on standard cleaning in the neighborhood, see our <Link href="/blog/university-city-house-cleaning-guide" className="text-teal-600 hover:text-teal-700 underline">University City house cleaning guide</Link>. For the full list of areas we cover, visit our <Link href="/locations" className="text-teal-600 hover:text-teal-700 underline">service areas page</Link>.
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
                            <h3 className="text-2xl font-bold mb-3">Book a University City Deep Clean</h3>
                            <p className="text-teal-100 mb-2">
                                {COMPANY_NAME} handles deep cleaning across University City — UTC, Costa Verde, South University City, Governor Park, and every condo complex in between. We work within HOA rules, coordinate with building staff, and address the pollen and construction dust that UC living produces.
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
                                    href="/service/deep-cleaning"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                                >
                                    Deep Cleaning Service
                                </Link>
                            </div>
                        </div>

                        <RelatedArticles currentSlug="deep-cleaning-university-city-condo" />

                        <AuthorBio
                            name="Art Machekin"
                            role="Founder"
                            bio="Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home."
                        />

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-4">Deep Cleaning Services Across San Diego</h3>
                            <div className="flex flex-wrap gap-2">
                                <Link href="/location/university-city" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> University City
                                </Link>
                                <Link href="/location/la-jolla" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> La Jolla
                                </Link>
                                <Link href="/location/pacific-beach" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Pacific Beach
                                </Link>
                                <Link href="/location/del-mar" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Del Mar
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

export default function UniversityCityCondoCleaningPage() {
    return <UniversityCityCondoCleaningPageInner />;
}
