'use client';
/**
 * University City Seasonal Cleaning Guide: A Year-Round Calendar
 * URL: /blog/university-city-seasonal-cleaning-guide
 *
 * Year-round cleaning calendar for UC homes — Rose Canyon spring pollen,
 * UTC summer construction dust + AC season, Santa Ana fall ash + back-to-school,
 * and winter holiday hosting + indoor air quality cycle.
 * Zone 2 (Suburban) — University City content cluster.
 */
import React from 'react';
import Link from 'next/link';
import {
    Sparkles,
    Clock,
    Calendar,
    CheckCircle,
    AlertCircle,
    ArrowRight,
    MapPin,
    Sun,
    Cloud,
    Wind,
    Snowflake
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

function UniversityCitySeasonalCleaningPageInner() {

    const faqs: FAQItem[] = [
        {
            question: "How often should I deep clean my University City home?",
            answer: "Most University City homes benefit from a deep clean every 3 months to align with seasonal shifts. Spring pollen, summer construction dust, fall Santa Ana winds, and winter holiday hosting each create different cleaning loads, so a quarterly reset keeps the home ahead of buildup. Homes near Rose Canyon or active Nobel Drive construction sometimes need it every 8 to 10 weeks during peak periods."
        },
        {
            question: "Which season is hardest on UC homes?",
            answer: "Spring is the hardest season for most University City homes. From mid-March through May, oak, sycamore, and eucalyptus pollen from Rose Canyon settles on every horizontal surface, often visible as a yellow-green film on balcony rails and window sills. UCSD spring quarter ends in June, so move-out cleaning demand also peaks in this window. Spring deep cleans book out 2 to 3 weeks ahead in 92122."
        },
        {
            question: "Do I need a deep clean before each season change, or just once a year?",
            answer: "A full deep clean four times a year is ideal for University City homes that experience all four pollen and dust cycles. Two deep cleans annually — spring and fall — works well for smaller condos or homes with less outdoor exposure. Standard cleaning every two weeks between deep cleans handles weekly upkeep. The right cadence depends on home size, pet load, and proximity to construction or canyon edges."
        },
        {
            question: "What does a seasonal deep clean cover that monthly cleaning doesn't?",
            answer: "Seasonal deep cleans cover the surfaces that monthly cleaning skips: baseboards, door frames, ceiling fans, blinds, light fixtures, window sills, appliance exteriors, microwave inside and out, full bathroom sanitization, and detail dusting at heights above 6 feet. Inside the fridge, inside the oven, inside cabinets, and interior windows are add-ons you can request at booking. We confirm what is included before each visit."
        },
        {
            question: "When should I book a UCSD turnover clean?",
            answer: "Book UCSD turnover cleans 2 to 3 weeks before your move-out date. UCSD spring quarter ends in mid-June, summer sessions wrap in early September, and fall move-ins begin in late September. Availability in 92122 and 92121 fills fast during these three windows. Move-in and move-out service includes inside cabinets and appliance interiors, which are not part of a standard deep clean."
        },
        {
            question: "Do you serve all of University City — UTC, Costa Verde, South UC?",
            answer: "Yes. We cover the full University City footprint including UTC, Costa Verde, South University City, Governor Park, the Sorrento Valley border, and condo complexes along Nobel Drive, Genesee Avenue, and Regents Road. Both 92122 and 92121 zip codes are within our service area. Booking is available online or by phone."
        }
    ];

    const howToSteps = [
        {
            name: "Spring (March–May): Pollen + UCSD turnover prep",
            text: "Start the season with a full pollen-focused deep clean. Wipe balcony rails and sliding door tracks where Rose Canyon pollen accumulates first. Clean window sills and tracks on west and south-facing windows where afternoon sun bakes pollen onto the surface. Wash all blinds slat by slat. Replace HVAC filters and dust ceiling fans before turning the AC on. If you rent to UCSD students, book turnover cleaning 2 to 3 weeks before June move-out."
        },
        {
            name: "Summer (June–August): UTC dust + AC season + hosting",
            text: "Summer means active Nobel Drive construction dust and constant AC operation circulating fine particulate. Schedule a deep clean in early June to reset the home before peak heat. Clean ceiling fans, light fixtures, and HVAC vents thoroughly. Detail-clean kitchens for summer hosting season — countertops, backsplash, appliance exteriors, and the inside of the microwave. If you have outdoor patio furniture, wipe it down before guests arrive."
        },
        {
            name: "Fall (September–November): Santa Ana ash + school reset",
            text: "Fall Santa Ana winds pull dust from Rose Canyon and inland construction sites. Plan a post-Santa-Ana deep clean for late October or early November. Wash windows and screens that catch the worst of the dust. Clean the inside of vents and registers. For homes with school-age kids, do a back-to-school reset — bedrooms, closets, study areas — in early September. Clean and store summer outdoor cushions before the first rain."
        },
        {
            name: "Winter (December–February): Holiday hosting + indoor air quality",
            text: "Book a pre-holiday deep clean in early December for Thanksgiving and Christmas hosting. Focus on dining rooms, guest bathrooms, and kitchens. Heat running constantly recirculates dust, so detail dust ceiling fans, light fixtures, and the tops of cabinets. January is a good time for an annual reset deep clean — demand is lower, scheduling is flexible, and you start the new year fresh. Clean window tracks and sills before spring pollen returns."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="University City Seasonal Cleaning Guide: A Year-Round Calendar"
                description="A practical season-by-season cleaning calendar for University City homes — Rose Canyon spring pollen, UTC construction dust, Santa Ana fall winds, winter holiday prep, and UCSD turnover scheduling."
                slug="university-city-seasonal-cleaning-guide"
                datePublished="2026-04-29"
                dateModified="2026-04-29"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
            />
            <HowToSchema
                name="How to Plan Seasonal Cleaning for a University City Home"
                description="A step-by-step seasonal calendar for keeping a University City home clean year-round, covering spring pollen, summer construction dust, fall Santa Ana winds, and winter holiday hosting."
                totalTime="P12M"
                supply={[
                    "Microfiber cloths",
                    "All-purpose cleaner",
                    "Glass cleaner",
                    "HVAC filters",
                    "Floor cleaning solution",
                    "Drop cloths"
                ]}
                tool={[
                    "Professional-grade vacuum",
                    "Mop and bucket",
                    "Extendable duster",
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
                                <Clock className="w-4 h-4" /> 8 min read
                            </span>
                        </div>
                        <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4">
                            University City Seasonal Cleaning Guide: A Year-Round Calendar
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Spring pollen from Rose Canyon, summer construction dust along Nobel Drive, fall Santa Ana ash, and winter holiday hosting — University City homes face a different cleaning load every season. A simple year-round calendar keeps you ahead of all four.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published April 29, 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="max-w-3xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=1600&h=900&fit=crop&fm=webp&auto=format&q=80"
                        alt="Bright open-plan living room and kitchen with large windows in a University City San Diego home"
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
                                <strong>University City homes benefit from four seasonal deep cleans a year because UTC's mix of marine layer humidity, Santa Ana wind dust, Rose Canyon eucalyptus pollen, and student-housing turnover creates different cleaning loads each season.</strong> Spring tackles pollen and UCSD move-outs. Summer handles construction dust and AC season. Fall addresses Santa Ana ash and back-to-school. Winter prepares for holiday hosting. Standard cleaning every two weeks fills the gaps between deep cleans.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            Most cleaning guides assume a one-size-fits-all rhythm — clean weekly, deep clean once a year, done. That works in places with stable weather. It does not work in University City. UTC sits at the intersection of canyon pollen, ocean-influenced humidity, inland construction dust, and a UCSD academic calendar that drives predictable move-out waves. Every season hits a UC home differently, and the right cleaning rhythm flexes with that pattern.
                        </p>
                        <p className="text-slate-600">
                            This is the year-round calendar we work from when planning seasonal cleaning for homes across <Link href="/location/university-city" className="text-teal-600 hover:text-teal-700 underline">University City</Link> — what each season brings, when to book, and which surfaces matter most in 92122 at any given time.
                        </p>

                        {/* Section 1: Why UC needs a seasonal approach */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Why University City Needs a Seasonal Cleaning Approach
                        </h2>
                        <p className="text-slate-600">
                            UC sits in a microclimate that combines four distinct cleaning challenges, each peaking at a different time of year. Treating a UTC home like a single-season cleaning job misses the worst of each cycle.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Wind className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Rose Canyon pollen (spring peak)</h3>
                                    <p className="text-slate-600 text-sm">Oak, sycamore, and eucalyptus pollen from Rose Canyon coats balcony rails, window tracks, and afternoon-sun-facing surfaces from mid-March through May. The yellow-green film is visible on most homes by late March.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Sun className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Nobel Drive construction dust (year-round, summer peak)</h3>
                                    <p className="text-slate-600 text-sm">Active development across UTC pushes fine concrete and drywall dust into homes throughout the year, but summer's open-window season and constant AC circulation move the most particulate through living spaces.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Cloud className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Santa Ana winds (fall peak)</h3>
                                    <p className="text-slate-600 text-sm">October and November bring inland-pushing winds that carry dust from Rose Canyon and inland construction sites. Post-Santa-Ana deep cleans are common requests from Costa Verde and Governor Park residents.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Snowflake className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Indoor air recirculation (winter peak)</h3>
                                    <p className="text-slate-600 text-sm">Heat running constantly through closed windows recirculates dust, pet dander, and cooking residue. Holiday hosting compounds the load. Pre-holiday and post-New-Year deep cleans address this cycle.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 2: Spring */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Spring (March–May): Pollen Peak and UCSD Turnover Prep
                        </h2>
                        <p className="text-slate-600">
                            Spring is the hardest cleaning season in University City. The pollen peak runs roughly mid-March through May, and the UCSD spring quarter ends in mid-June, driving heavy demand for turnover cleaning toward the end of the window.
                        </p>
                        <div className="bg-green-50 rounded-xl p-6 my-6 not-prose">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-green-600" />
                                Spring deep clean priorities
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li><strong>Window tracks and sills:</strong> Pollen accumulates here first. Vacuum tracks, then wipe.</li>
                                <li><strong>Sliding door tracks and balcony glass:</strong> The single most visible difference in a UC home after a spring clean.</li>
                                <li><strong>Blinds (slat by slat):</strong> Every slat traps pollen. Damp microfiber works best.</li>
                                <li><strong>Ceiling fans before AC turn-on:</strong> Pollen on fan blades blows around the room when the AC starts.</li>
                                <li><strong>HVAC filter replacement:</strong> Old filters released into the system push pollen back into the home.</li>
                                <li><strong>Inside cabinets and pantry (add-on):</strong> Spring is a good time for the annual full-cabinet reset.</li>
                            </ul>
                        </div>
                        <p className="text-slate-600">
                            Booking a spring <Link href="/service/deep-cleaning" className="text-teal-600 hover:text-teal-700 underline">deep cleaning</Link> appointment 2 to 3 weeks ahead is normal in 92122. April fills up fast. If you rent a UC condo to UCSD students, line up turnover cleaning before late May — June availability books out by mid-month.
                        </p>

                        {/* Section 3: Summer */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Summer (June–August): Construction Dust and AC Season
                        </h2>
                        <p className="text-slate-600">
                            Summer means active Nobel Drive construction, full-time AC operation, and family-hosting season. The combination drives fine dust into every corner of a UC home. A summer deep clean focuses on air-circulation surfaces and kitchen-bath detail work for hosting.
                        </p>
                        <div className="bg-yellow-50 rounded-xl p-6 my-6 not-prose">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-yellow-600" />
                                Summer deep clean priorities
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li><strong>Ceiling fans and light fixtures:</strong> Running constantly with the AC, every blade collects dust.</li>
                                <li><strong>HVAC vents and registers:</strong> Wipe inside the slats. Fine construction dust collects here.</li>
                                <li><strong>Kitchen detail work:</strong> Countertops, backsplash, range hood, microwave inside and out — all hosting visibility.</li>
                                <li><strong>Bathroom descaling:</strong> San Diego water leaves visible mineral buildup faster in summer humidity.</li>
                                <li><strong>Outdoor patio furniture:</strong> Wipe down chairs, tables, and umbrellas before guests arrive.</li>
                                <li><strong>Window sills (interior):</strong> Open-window season means more dust accumulation.</li>
                            </ul>
                        </div>
                        <p className="text-slate-600">
                            Summer is also the season when the gap between standard cleaning and deep cleaning shows most. A regular standard clean keeps the visible surfaces fresh, but the high dust load means a true deep clean every 8 to 10 weeks during summer is common in homes with heavy AC use.
                        </p>

                        {/* Section 4: Fall */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Fall (September–November): Santa Ana Ash and the School Reset
                        </h2>
                        <p className="text-slate-600">
                            Fall in UC has two peaks. Late September brings UCSD fall move-ins and school-year resets for K-12 families. October and November bring the worst Santa Ana winds, which carry dust from Rose Canyon and inland construction sites. Both deserve their own cleaning attention.
                        </p>
                        <div className="bg-orange-50 rounded-xl p-6 my-6 not-prose">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-orange-600" />
                                Fall deep clean priorities
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li><strong>Windows and screens:</strong> Both sides. Santa Ana dust coats screens fast.</li>
                                <li><strong>Bedrooms and closets:</strong> Back-to-school reset for kids' rooms — closet floors, shelves, under the bed.</li>
                                <li><strong>Study and desk areas:</strong> Wipe down workstations before the school routine settles in.</li>
                                <li><strong>Outdoor cushions storage:</strong> Wash and store before the first rain.</li>
                                <li><strong>Vents and registers (post-Santa-Ana):</strong> Same reasoning as summer, but worse if the home was buttoned up during a wind event.</li>
                                <li><strong>Inside oven and inside fridge (add-on):</strong> Holiday-hosting prep starts here.</li>
                            </ul>
                        </div>
                        <p className="text-slate-600">
                            For families with school-age kids, the early-September school reset is often more practical than a full deep clean — focus on bedrooms, closets, study spaces, and the kitchen. Save the full deep clean for after the first major Santa Ana event in late October or early November.
                        </p>

                        {/* Section 5: Winter */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Winter (December–February): Holiday Hosting and Indoor Air Quality
                        </h2>
                        <p className="text-slate-600">
                            Winter in San Diego is mild, but UC homes still face real winter cleaning challenges. Heat running constantly through closed windows recirculates dust and dander. Holiday hosting concentrates traffic in dining rooms, guest bathrooms, and kitchens. And the gap between Christmas and the new year is a natural reset point.
                        </p>
                        <div className="bg-blue-50 rounded-xl p-6 my-6 not-prose">
                            <h3 className="font-bold text-slate-900 mb-3 flex items-center gap-2">
                                <CheckCircle className="w-5 h-5 text-blue-600" />
                                Winter deep clean priorities
                            </h3>
                            <ul className="space-y-2 text-sm text-slate-700">
                                <li><strong>Pre-holiday (early December):</strong> Dining room, guest bathroom, kitchen, entryway.</li>
                                <li><strong>Ceiling fans and tops of cabinets:</strong> Heat circulates fine dust here. Detail dust at heights above 6 feet.</li>
                                <li><strong>Inside microwave and appliance exteriors:</strong> Hosting season makes these the most-seen kitchen surfaces.</li>
                                <li><strong>Window tracks and sills:</strong> Wipe before spring pollen returns. Easier in winter when there is less pollen to displace.</li>
                                <li><strong>Annual reset (January):</strong> Lower demand, flexible scheduling, fresh start.</li>
                                <li><strong>Mattress and upholstery (add-on):</strong> Winter is a good time for these specialty add-ons before allergy season.</li>
                            </ul>
                        </div>
                        <p className="text-slate-600">
                            January is the easiest month to book a deep clean in UC. Demand is lower, scheduling is flexible, and starting the year with a reset sets the rhythm for the rest of the calendar. Many UC homeowners use January for their once-a-year specialty add-ons — interior windows, inside the oven, full cabinet wipe-down — that get pushed off the rest of the year.
                        </p>

                        {/* Section 6: DIY vs Pro */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            DIY vs. Professional: When to Call Us
                        </h2>
                        <p className="text-slate-600">
                            A seasonal calendar does not mean professional cleaning every quarter. Plenty of UC homeowners handle weekly upkeep themselves and call us only for the deep cleans. The honest math is about time and detail.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                            <div className="p-4 bg-green-50 rounded-lg border border-green-200">
                                <h3 className="font-bold text-slate-900 text-sm mb-2">DIY works for:</h3>
                                <ul className="space-y-1.5 text-sm text-slate-700">
                                    <li>Weekly surface cleaning</li>
                                    <li>Quick wipe-downs after dust events</li>
                                    <li>Standard kitchen and bathroom upkeep</li>
                                    <li>Tidying before guests</li>
                                    <li>Spot-cleaning carpets and floors</li>
                                </ul>
                            </div>
                            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <h3 className="font-bold text-slate-900 text-sm mb-2">Call us for:</h3>
                                <ul className="space-y-1.5 text-sm text-slate-700">
                                    <li>Quarterly deep cleans</li>
                                    <li>Pre- and post-holiday resets</li>
                                    <li>UCSD turnover cleaning</li>
                                    <li>Post-Santa-Ana detail work</li>
                                    <li>Move-in / move-out service</li>
                                </ul>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            Our team works with 1 to 2 cleaners per visit, allocating time based on home size and condition. We use professional-grade vacuums and proven all-purpose products on every clean — specialized treatments for marble, hardwood, and granite are available on request when booking. Related reading on this topic: see our <Link href="/blog/university-city-house-cleaning-guide" className="text-teal-600 hover:text-teal-700 underline">University City house cleaning guide</Link> and the more detailed <Link href="/blog/deep-cleaning-university-city-condo" className="text-teal-600 hover:text-teal-700 underline">UC condo deep cleaning guide</Link>.
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
                            <h3 className="text-2xl font-bold mb-3">Plan Your Year-Round UC Cleaning</h3>
                            <p className="text-teal-100 mb-2">
                                {COMPANY_NAME} handles seasonal deep cleaning across University City — UTC, Costa Verde, South UC, Governor Park, and every condo complex in between. We work around UCSD turnover windows, building protocols, and the pollen and dust patterns that shape UC living.
                            </p>
                            <p className="text-teal-200 mb-6">
                                Call us at <strong>{PHONE_NUMBER}</strong> or book your seasonal deep clean online.
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

                        <RelatedArticles currentSlug="university-city-seasonal-cleaning-guide" />

                        <AuthorBio
                            name="Art Machekin"
                            role="Founder"
                            bio="Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home."
                        />

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-4">Cleaning Services Across San Diego</h3>
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

export default function UniversityCitySeasonalCleaningPage() {
    return <UniversityCitySeasonalCleaningPageInner />;
}
