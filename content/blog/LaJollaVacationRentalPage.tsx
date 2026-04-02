/**
 * La Jolla Vacation Rental Cleaning: Coastal Turnover Guide
 * URL: /blog/la-jolla-vacation-rental-cleaning-guide
 *
 * Phase 1 La Jolla blog — Vacation rental turnover cleaning
 * specific to La Jolla sub-neighborhoods and coastal conditions.
 */
'use client';
import React from 'react';
import Link from 'next/link';
import {
    Calendar,
    Clock,
    ArrowRight,
    CheckCircle,
    Key,
    Waves,
    Sun,
    Building2,
    MapPin,
    Clock3,
    AlertTriangle,
    Home
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

const LaJollaVacationRentalPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "How far in advance should I book turnover cleaning for my La Jolla vacation rental?",
            answer: "During summer (June through September), book your turnover cleaning at least 2 weeks in advance to lock in your time slots. Back-to-back bookings are common in La Jolla during peak season, and reliable cleaning teams fill up fast. For off-season months, 3-5 days' notice is usually sufficient."
        },
        {
            question: "What's included in a vacation rental turnover vs. a deep clean?",
            answer: "A turnover focuses on guest-ready presentation: fresh linens, sanitized bathrooms and kitchen, vacuumed and mopped floors, restocked essentials, and staging. A deep clean goes further with baseboards, ceiling fans, blinds, light fixtures, and detailed buildup removal. Inside appliances (oven, fridge) and grout scrubbing are available as add-ons. Most La Jolla hosts schedule deep cleans every 4-6 turnovers or at the start and end of summer season."
        },
        {
            question: "Do you handle salt air buildup during turnovers?",
            answer: "Standard turnovers include wiping down all accessible surfaces, which removes light salt film from countertops, fixtures, and bathroom surfaces. For heavier salt residue on windows, window tracks, sliding glass doors, and patio furniture, we recommend scheduling a periodic deep clean or requesting these as add-on tasks during your turnover."
        },
        {
            question: "Can you clean my La Jolla condo if it has restricted parking and building access?",
            answer: "Yes. We work with hosts in La Jolla Village high-rises and gated communities regularly. Just provide parking instructions (guest passes, garage codes, street parking tips) and any building access details (lobby codes, elevator fobs) when you book. We arrive on time and handle the logistics so you don't have to meet us on-site."
        },
        {
            question: "How long does a typical La Jolla vacation rental turnover take?",
            answer: "Most turnovers take 2-4 hours depending on property size and condition. A 1-bedroom Bird Rock cottage might take 2 hours. A 3-bedroom Shores condo with ocean-facing balcony and multiple bathrooms typically runs closer to 3.5-4 hours. We recommend scheduling at least a 4-hour buffer between check-out and check-in."
        }
    ];

    const howToSteps = [
        {
            name: "Confirm Access and Parking Details",
            text: "Before arrival, verify building access codes, parking passes, and lockbox or smart lock instructions. In La Jolla Village high-rises, this step prevents delays that eat into your turnover window."
        },
        {
            name: "Walk Through and Document Condition",
            text: "Do a quick walkthrough noting any guest damage, missing items, or maintenance issues. Take photos of anything that needs to be reported to the host before cleaning begins."
        },
        {
            name: "Strip All Linens and Start Laundry",
            text: "Remove all bed linens, towels, and bath mats immediately. Start laundry if on-site machines are available. In La Jolla's coastal humidity, getting linens into the wash early prevents musty odors from setting in."
        },
        {
            name: "Clean Bathrooms and Kitchen First",
            text: "Sanitize toilets, showers, sinks, and all fixtures. In the kitchen, empty the refrigerator, wipe counters, clean the stovetop, and run or empty the dishwasher. These rooms take the most time — tackle them while linens are washing."
        },
        {
            name: "Vacuum Sand and Mop All Floors",
            text: "La Jolla rentals near Windansea, Bird Rock, and The Shores accumulate sand fast. Vacuum thoroughly under furniture, along baseboards, and in entryways. Follow up with mopping on all hard floors."
        },
        {
            name: "Wipe Down All Surfaces and High-Touch Points",
            text: "Disinfect door handles, light switches, remotes, thermostats, and cabinet pulls. Wipe down furniture, shelving, and windowsills. For ocean-facing units, pay extra attention to salt film on glass and fixtures."
        },
        {
            name: "Make Beds and Stage the Property",
            text: "Make beds with fresh linens using tight corners. Fold towels uniformly. Arrange throw pillows, blankets, and decor to match the listing photos. The property should look identical to the photos every single time."
        },
        {
            name: "Restock, Final Check, and Lock Up",
            text: "Refill soap, shampoo, toilet paper, coffee, and paper towels. Do a final walkthrough checking every room. Verify all windows and doors are locked, set the thermostat, and secure the property."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="La Jolla Vacation Rental Cleaning: Coastal Turnover Guide"
                description="A practical turnover guide for La Jolla Airbnb and VRBO hosts covering salt air challenges, same-day turnovers, and neighborhood-specific cleaning needs from Bird Rock to The Shores."
                slug="la-jolla-vacation-rental-cleaning-guide"
                datePublished="2026-04-04"
                dateModified="2026-04-04"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
            />
            <HowToSchema
                name="How to Turn Over a La Jolla Vacation Rental Between Guests"
                description="Step-by-step turnover cleaning process for Airbnb and VRBO hosts in La Jolla, San Diego — covering coastal-specific challenges like sand, salt air, and tight scheduling windows."
                totalTime="PT4H"
                supply={[
                    "Fresh linens and towels",
                    "All-purpose cleaner",
                    "Disinfectant spray",
                    "Glass cleaner",
                    "Vacuum cleaner",
                    "Mop and bucket",
                    "Restocking supplies (soap, toilet paper, coffee)"
                ]}
                tool={[
                    "Cleaning caddy",
                    "Microfiber cloths",
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
                            &larr; Back to Blog
                        </Link>
                        <div className="flex items-center gap-4 mb-4">
                            <span className="bg-teal-500 text-white text-sm font-bold px-3 py-1 rounded-full">
                                Local Guide
                            </span>
                            <span className="flex items-center gap-1 text-slate-500 text-sm">
                                <Clock className="w-4 h-4" /> 8 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            La Jolla Vacation Rental Cleaning: Coastal Turnover Guide
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Turnover strategies for La Jolla hosts dealing with salt air, sand, same-day windows, and high guest expectations.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published April 4, 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Article Content */}
            <article className="py-12">
                <div className="container mx-auto px-4">
                    <div className="max-w-3xl mx-auto prose prose-lg prose-slate">

                        {/* Quick Answer Box */}
                        <div className="quick-answer bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-xl my-8 not-prose">
                            <h2 className="font-bold text-teal-900 mb-2">Quick Answer</h2>
                            <p className="text-teal-800">
                                La Jolla vacation rental turnovers require extra attention to salt residue on surfaces, sand in entryways and floors, and marine layer moisture that can leave linens feeling damp. Allow a minimum 4-hour window between guests. During summer peak season, book your cleaning team at least 2 weeks in advance — reliable turnover slots fill up fast in this market.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            La Jolla is one of San Diego's most concentrated vacation rental markets. From beachfront cottages in Bird Rock to ocean-view condos in The Shores and high-rise units in La Jolla Village, thousands of properties compete for guests year-round. The stakes are high: nightly rates in La Jolla consistently rank among the highest in San Diego County, and guests paying premium prices expect a property that looks and feels flawless.
                        </p>
                        <p className="text-slate-600 mt-4">
                            But cleaning a La Jolla rental isn't the same as cleaning one in Hillcrest or North Park. The coast brings its own set of problems — salt air, sand, humidity, and tight turnover logistics in buildings that weren't designed for short-term rental traffic. This guide covers what La Jolla hosts actually need to know about keeping their properties guest-ready. For general turnover best practices, see our <Link href="/blog/vacation-rental-cleaning-tips-for-hosts" className="text-teal-700 font-medium hover:text-teal-800 underline">vacation rental cleaning tips for San Diego hosts</Link>.
                        </p>

                        {/* Stats Box */}
                        <div className="grid grid-cols-3 gap-4 my-8 not-prose">
                            <div className="bg-amber-50 p-4 rounded-xl text-center">
                                <Waves className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">Salt Air</div>
                                <div className="text-sm text-slate-600">Constant film on surfaces</div>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl text-center">
                                <Clock3 className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">4 hr</div>
                                <div className="text-sm text-slate-600">Minimum turnover window</div>
                            </div>
                            <div className="bg-amber-50 p-4 rounded-xl text-center">
                                <Sun className="w-8 h-8 text-amber-500 mx-auto mb-2" />
                                <div className="text-2xl font-bold text-slate-900">Jun-Sep</div>
                                <div className="text-sm text-slate-600">Peak booking season</div>
                            </div>
                        </div>

                        {/* Why La Jolla Turnovers Are Different */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Why Coastal Turnovers Are Different
                        </h2>
                        <p className="text-slate-600">
                            If you've cleaned inland rentals and think the process is the same on the coast, it isn't. La Jolla sits right on the Pacific, and that proximity creates cleaning challenges that compound quickly between guest stays. We cover the science behind these challenges in our <Link href="/blog/salt-air-la-jolla-home-cleaning" className="text-teal-700 font-medium hover:text-teal-800 underline">salt air guide for La Jolla homeowners</Link> — here's how they apply specifically to turnovers.
                        </p>
                        <div className="space-y-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Waves className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Salt Residue on Every Surface</h3>
                                    <p className="text-slate-600 text-sm">Ocean air deposits a thin salt film on windows, glass doors, fixtures, countertops, and stainless steel appliances. Guests notice hazy windows and sticky-feeling surfaces immediately. Every turnover in a coastal La Jolla unit needs a pass on glass and metal surfaces that inland properties can skip.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <Home className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Sand Tracks Through Everything</h3>
                                    <p className="text-slate-600 text-sm">Guests return from Windansea, La Jolla Shores, and Marine Street with sand on their feet, in their bags, and on their clothes. It ends up in entryways, bathrooms, bedding, and couch cushions. A standard vacuum pass isn't enough — you need to check under furniture, between cushions, and inside closets where guests stored beach gear.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg">
                                <AlertTriangle className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Marine Layer Moisture</h3>
                                    <p className="text-slate-600 text-sm">La Jolla's morning marine layer means higher humidity inside properties, especially those without climate control running overnight. Linens left in a hamper for even a few hours can develop a musty smell. Towels left on bathroom floors get damp fast. Getting laundry started immediately after check-out is critical.</p>
                                </div>
                            </div>
                        </div>

                        {/* Same-Day Turnover Challenges */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Same-Day Turnover Challenges in La Jolla
                        </h2>
                        <p className="text-slate-600">
                            Most La Jolla hosts use an 11 AM check-out and 3 PM or 4 PM check-in. That gives you a 4-5 hour window to get the property cleaned, inspected, restocked, and staged. On paper, that's enough time. In practice, La Jolla adds friction that other San Diego neighborhoods don't.
                        </p>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <h3 className="font-bold text-slate-900 mb-4">Logistical Hurdles</h3>
                            <ul className="space-y-3">
                                <li className="flex items-start gap-2 text-slate-700 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span><strong>Parking:</strong> Street parking near Bird Rock and Windansea is limited, especially in summer. La Jolla Village has garage access but often requires guest passes your cleaner needs in advance.</span>
                                </li>
                                <li className="flex items-start gap-2 text-slate-700 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span><strong>Building access:</strong> High-rise condos in La Jolla Village and gated communities in The Shores require lobby codes, elevator fobs, or concierge check-in. A cleaner arriving without the right access wastes 15-30 minutes of your window.</span>
                                </li>
                                <li className="flex items-start gap-2 text-slate-700 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span><strong>Late check-outs:</strong> Guests in La Jolla often request late check-out because they want one more morning at the beach. Even 30 minutes late compresses your cleaning window significantly.</span>
                                </li>
                                <li className="flex items-start gap-2 text-slate-700 text-sm">
                                    <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <span><strong>Laundry timing:</strong> Properties without in-unit laundry need linens transported off-site, cleaned, and returned. Build this into your turnover scheduling or keep 3 sets of linens per bed to swap on-site.</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-slate-600">
                            The best way to handle these challenges is to have a cleaning team that already knows La Jolla's quirks. Our <Link href="/service/vacation-rental-cleaning-airbnb" className="text-teal-700 font-medium hover:text-teal-800 underline">vacation rental cleaning service</Link> handles the logistics so you don't have to manage parking passes and building codes on turnover day.
                        </p>

                        {/* Step-by-Step Guide */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Turnover Cleaning Process for La Jolla Rentals
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

                        {/* Neighborhood Breakdown */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Bird Rock vs. La Jolla Village vs. The Shores: Different Properties, Different Challenges
                        </h2>
                        <p className="text-slate-600">
                            La Jolla isn't one neighborhood — it's several, each with distinct property types and turnover needs. Understanding these differences helps you plan realistic cleaning schedules and set the right expectations with your team. For a full breakdown of our services across the area, visit our <Link href="/location/la-jolla" className="text-teal-700 font-medium hover:text-teal-800 underline">La Jolla house cleaning</Link> page.
                        </p>

                        <div className="space-y-4 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-l-4 border-amber-400">
                                <div>
                                    <h3 className="font-bold text-slate-900">Bird Rock</h3>
                                    <p className="text-slate-600 text-sm mt-1">
                                        <strong>Typical properties:</strong> 1-3 bedroom beach cottages and bungalows, many with outdoor patios or small yards. <strong>Challenges:</strong> Sand is the dominant issue — these properties are steps from the beach, and guests track it everywhere. Outdoor areas need sweeping or hosing between guests. Street parking is tight in summer; plan arrival times carefully. Turnover time: 2-3 hours for most units.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-l-4 border-blue-400">
                                <div>
                                    <h3 className="font-bold text-slate-900">La Jolla Village</h3>
                                    <p className="text-slate-600 text-sm mt-1">
                                        <strong>Typical properties:</strong> High-rise condos, luxury units with ocean or village views, secured buildings with lobby access. <strong>Challenges:</strong> Building access is the main friction point — you need codes, fobs, or concierge coordination. Elevators add transit time between your car and the unit. Parking garages may require guest passes. On the plus side, these units are less exposed to sand and have climate control that reduces moisture issues. Turnover time: 2-3.5 hours.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-l-4 border-teal-400">
                                <div>
                                    <h3 className="font-bold text-slate-900">La Jolla Shores</h3>
                                    <p className="text-slate-600 text-sm mt-1">
                                        <strong>Typical properties:</strong> 2-4 bedroom homes and condos, many family-oriented with multiple bathrooms and larger layouts. <strong>Challenges:</strong> Sand and salt together — The Shores faces the open ocean and gets heavy foot traffic from families using the beach. Multiple bathrooms mean more time per turnover. Balconies and patios facing the water accumulate salt film fast. Turnover time: 3-4+ hours for larger properties.
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg border-l-4 border-purple-400">
                                <div>
                                    <h3 className="font-bold text-slate-900">Windansea</h3>
                                    <p className="text-slate-600 text-sm mt-1">
                                        <strong>Typical properties:</strong> Mix of older beach homes and renovated rentals, often with unique layouts and premium finishes. <strong>Challenges:</strong> Similar sand exposure to Bird Rock. Older homes may have tighter spaces, vintage tile, or fixtures that need careful handling. Surfboard and wetsuit storage areas need wiping down between guests. Turnover time: 2-3.5 hours.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Seasonal Strategy */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Seasonal Turnover Strategy
                        </h2>
                        <p className="text-slate-600">
                            La Jolla's vacation rental calendar has clear peaks and valleys. Your cleaning approach should shift with the seasons.
                        </p>

                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Sun className="w-5 h-5 text-amber-500" /> Peak Season (June - September)
                                    </h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Back-to-back turnovers are the norm",
                                            "Book your cleaning team 2+ weeks ahead",
                                            "Keep 3 sets of linens per bed for fast swaps",
                                            "Increase sand management — vacuum twice if needed",
                                            "Schedule a mid-season deep clean in July or August",
                                            "Budget for higher turnover frequency"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                                                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                        <Waves className="w-5 h-5 text-blue-500" /> Off-Season (October - May)
                                    </h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Fewer turnovers — longer gaps between guests",
                                            "Schedule deep cleans during booking gaps",
                                            "Address salt buildup on windows and balconies",
                                            "Check for mildew in bathrooms and closets",
                                            "Service HVAC and replace filters",
                                            "Run the property's water to prevent stale pipes"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                                                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* When to Schedule Deep Cleans */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            When to Schedule Deep Cleans Between Turnover Seasons
                        </h2>
                        <p className="text-slate-600">
                            Turnovers maintain your property between guests. Deep cleans maintain your property between seasons. They're different services with different purposes, and La Jolla rentals need both.
                        </p>
                        <p className="text-slate-600">
                            A turnover addresses what the last guest left behind. A deep clean addresses what accumulates over weeks and months of use — salt corrosion on fixtures, mineral deposits in showers, dust on ceiling fan blades, grime in window tracks, and buildup behind and under furniture that turnovers don't reach.
                        </p>
                        <div className="bg-amber-50 border-l-4 border-amber-400 p-6 rounded-r-xl my-8 not-prose">
                            <h3 className="font-bold text-slate-900 mb-2">Recommended Deep Clean Schedule for La Jolla Rentals</h3>
                            <ul className="space-y-2 text-slate-700 text-sm">
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Late May:</strong> Before summer season kicks off. Get the property in peak condition for your highest-paying guests.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Mid-July or early August:</strong> A mid-season reset to address the wear from 6-8 weeks of back-to-back turnovers.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Early October:</strong> Post-summer deep clean to repair the season's damage. Address salt buildup, replace worn linens, and inspect for maintenance issues before the slower months.</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <CheckCircle className="w-4 h-4 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <span><strong>Every 4-6 turnovers:</strong> During active booking periods, schedule a deep clean instead of a standard turnover. Your guests and your property will both benefit.</span>
                                </li>
                            </ul>
                        </div>
                        <p className="text-slate-600">
                            <strong>Note:</strong> Inside appliances (oven interior, refrigerator deep clean) and grout scrubbing are available as add-ons during deep cleans. They're not included in standard turnovers or standard deep cleans, but La Jolla kitchens and bathrooms that see heavy guest use benefit from periodic appliance and grout attention.
                        </p>

                        {/* Turnover Checklist */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            La Jolla Turnover Checklist
                        </h2>
                        <div className="my-6 p-6 bg-slate-50 rounded-xl not-prose">
                            <div className="grid md:grid-cols-2 gap-4">
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Every Turnover</h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Strip and remake all beds with fresh linens",
                                            "Replace all towels and bath mats",
                                            "Sanitize bathrooms (toilet, shower, sink, mirrors)",
                                            "Clean kitchen surfaces and stovetop",
                                            "Empty refrigerator completely",
                                            "Vacuum all floors — check for sand under furniture",
                                            "Mop all hard floors",
                                            "Disinfect high-touch surfaces",
                                            "Wipe down salt film on glass and fixtures",
                                            "Restock essentials",
                                            "Stage to match listing photos",
                                            "Document condition with photos"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                                                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="font-bold text-slate-900 mb-3">Periodic Deep Clean</h3>
                                    <ul className="space-y-2">
                                        {[
                                            "Baseboards, door frames, and ceiling fans",
                                            "Blinds and light fixtures",
                                            "Window tracks and sliding door rails",
                                            "Behind and under all furniture",
                                            "Balcony and patio furniture wipe-down",
                                            "Detailed salt removal on all glass",
                                            "Inside oven and fridge (add-on)",
                                            "Grout scrubbing (specialized add-on)",
                                            "Mattress inspection and rotation",
                                            "HVAC filter check"
                                        ].map((item, i) => (
                                            <li key={i} className="flex items-center gap-2 text-slate-700 text-sm">
                                                <CheckCircle className="w-4 h-4 text-teal-500 flex-shrink-0" />
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
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
                        <div className="bg-teal-700 text-white p-8 rounded-xl my-10 text-center not-prose">
                            <Key className="w-12 h-12 mx-auto mb-4 opacity-80" />
                            <h3 className="text-2xl font-bold mb-3">La Jolla Vacation Rental Cleaning</h3>
                            <p className="text-teal-100 mb-2">
                                {COMPANY_NAME} handles turnovers across La Jolla — Bird Rock, The Shores, La Jolla Village, and Windansea. We know the parking, the building access, and the coastal cleaning details that matter.
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
                                    href="/service/vacation-rental-cleaning-airbnb"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                                >
                                    Learn About Our Turnover Service
                                </Link>
                            </div>
                        </div>

                        <AuthorBio
                            name="Art Machekin"
                            role="Founder"
                            bio="Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home."
                        />

                        <RelatedArticles currentSlug="la-jolla-vacation-rental-cleaning-guide" />

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8 not-prose">
                            <h3 className="font-bold text-slate-900 mb-4">La Jolla &amp; Coastal San Diego Service Areas</h3>
                            <div className="flex flex-wrap gap-2">
                                <Link href="/location/la-jolla" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> La Jolla
                                </Link>
                                <Link href="/location/pacific-beach" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Pacific Beach
                                </Link>
                                <Link href="/location/del-mar" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Del Mar
                                </Link>
                                <Link href="/location/ocean-beach" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Ocean Beach
                                </Link>
                                <Link href="/location/coronado" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Coronado
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

export default LaJollaVacationRentalPage;
