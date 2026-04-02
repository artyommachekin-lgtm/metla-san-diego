'use client';
/**
 * La Jolla Condo Cleaning: High-Rise and Beachfront Living Guide
 * URL: /blog/la-jolla-condo-cleaning-guide
 *
 * Local guide covering apartment and condo cleaning challenges specific to La Jolla:
 * high-rise logistics (elevators, building access, HOA windows), compact layout efficiency,
 * beachfront vs inland condo differences, UCSD student housing turnover, common condo surfaces,
 * shared hallway etiquette, move-in/move-out specifics, and sub-neighborhood breakdowns
 * (Bird Rock, Village, UTC).
 * Zone 1 (Coastal Premium) — La Jolla content cluster
 */
import React from 'react';
import Link from 'next/link';
import {
    Building2,
    Clock,
    ArrowRight,
    MapPin,
    CheckCircle,
    Calendar,
    KeyRound,
    Waves,
    Wind,
    GraduationCap,
    Home,
    ArrowUpDown
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

const LaJollaCondoCleaningPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "How much does apartment cleaning cost in La Jolla?",
            answer: "Standard cleaning for a La Jolla condo or apartment typically ranges from $130 to $250 per visit, depending on square footage, layout, and condition. Most La Jolla condos fall between 800 and 1,400 square feet. Deep cleaning runs $220 to $450. Beachfront units with heavier salt and sand buildup may fall toward the higher end due to additional time needed. We provide an exact quote based on your unit's specifics before scheduling."
        },
        {
            question: "Do you work with La Jolla condo building access requirements?",
            answer: "Yes. We coordinate with front desk staff, concierge services, and property management offices to handle building access, elevator reservations, and parking validation. If your building requires vendor registration or insurance certificates on file, we provide those ahead of your first appointment. We arrive with all supplies so there is no need for multiple trips through the lobby."
        },
        {
            question: "How often should a beachfront La Jolla condo be cleaned?",
            answer: "Most beachfront condos in La Jolla benefit from biweekly cleaning to manage salt residue, sand tracking, and marine layer moisture. Units with ocean-facing windows or balconies that stay open frequently may need weekly service during summer months. Inland La Jolla condos near UTC or Regents Road typically do well on a biweekly or monthly schedule since they deal with pollen and dust rather than salt."
        },
        {
            question: "Can you clean a condo before or after a UCSD student moves out?",
            answer: "We offer move-in and move-out cleaning for La Jolla condos and apartments, including units in the UTC corridor near UCSD. Our move-in/move-out service covers inside cabinets, appliance interiors, and all the surfaces that empty rooms reveal. We recommend booking 2 to 3 weeks ahead of UCSD's June and September turnover peaks — availability fills fast during those windows."
        },
        {
            question: "What surfaces do you clean in La Jolla condos?",
            answer: "We clean all standard surfaces found in La Jolla condos — tile, laminate, hardwood, quartz, and stainless steel — using safe, proven all-purpose products. For condos with marble countertops, travertine flooring, or other premium natural stone, specialized care is available upon request as an add-on. We always confirm your unit's materials before the first visit to make sure our approach is appropriate."
        }
    ];

    const howToSteps = [
        {
            name: "Coordinate building access and logistics",
            text: "Confirm elevator reservation, parking validation, and any vendor registration requirements with your building's front desk or property management. Arrive with all supplies in a single trip — this respects shared elevator schedules and avoids leaving equipment in hallways."
        },
        {
            name: "Contain sand and salt at the entry",
            text: "Start at the front door. Vacuum the entryway thoroughly to remove tracked-in sand before it spreads. In beachfront units, check the mat area and the gap under the door where fine sand collects. Wipe down the door handle and frame where salt residue accumulates."
        },
        {
            name: "Work top to bottom in each room",
            text: "Begin with ceiling fans and light fixtures, then move to blinds, window sills, and door frames. Finish with baseboards and floors. In compact condo layouts, this prevents dislodged dust from resettling on already-cleaned lower surfaces. Pay extra attention to window sills in ocean-facing units where salt builds fastest."
        },
        {
            name: "Address kitchen and bathroom hard surfaces",
            text: "Clean countertops, backsplash, sink, and appliance exteriors. In condo kitchens, grease and salt residue combine on range hoods and cabinet fronts near windows. Bathrooms get full fixture sanitization — toilet, shower, tub, vanity, and mirror. Hard water deposits are common in older La Jolla buildings."
        },
        {
            name: "Vacuum all hard floors before mopping",
            text: "Condos with tile and laminate show every particle. Vacuum first to remove sand and grit that would otherwise scratch the surface during mopping. Move furniture pads and check under area rugs where sand migrates. Mop with appropriate solution for the floor type."
        },
        {
            name: "Check humidity-prone areas",
            text: "Inspect under sinks, inside bathroom cabinets, and closets against exterior walls for early signs of moisture or mold — common in beachfront condos where marine layer moisture penetrates. Ensure bathroom exhaust fans are clear and running. Report any concerns to the resident."
        },
        {
            name: "Clean balcony door tracks and sliding glass",
            text: "Sliding glass doors are the main entry point for salt air and sand in most La Jolla condos. Clean the tracks where grit accumulates and causes the door to stick. Wipe down the glass on both sides to remove salt haze. This single step makes the biggest visible difference in a coastal condo."
        },
        {
            name: "Final walkthrough and quiet exit",
            text: "Do a room-by-room check. Confirm all surfaces are clean, floors are dry, and nothing has been missed. Exit quietly — many La Jolla condo buildings have noise restrictions, and other residents are nearby. Leave no supplies or equipment in shared hallways."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="La Jolla Condo Cleaning: High-Rise and Beachfront Living Guide"
                description="A practical guide to apartment and condo cleaning in La Jolla — covering high-rise logistics, beachfront salt and sand challenges, compact layout strategies, UCSD turnover, and sub-neighborhood differences from Bird Rock to UTC."
                slug="la-jolla-condo-cleaning-guide"
                datePublished="2026-05-02"
                dateModified="2026-05-02"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
            />
            <HowToSchema
                name="How to Clean a La Jolla Condo Efficiently"
                description="A step-by-step guide to cleaning condos and apartments in La Jolla, covering building access coordination, salt and sand management, compact layout strategies, and beachfront-specific concerns."
                totalTime="PT3H"
                supply={[
                    "Microfiber cloths",
                    "All-purpose cleaner",
                    "Glass cleaner",
                    "Floor cleaning solution",
                    "Trash bags"
                ]}
                tool={[
                    "Professional-grade vacuum",
                    "Mop and bucket",
                    "Spray bottles",
                    "Step stool",
                    "Caddy for transporting supplies in one trip"
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
                            La Jolla Condo Cleaning: High-Rise and Beachfront Living Guide
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Elevator logistics, salt air on the 12th floor, sand in every crevice, and HOA time windows — apartment cleaning in La Jolla has its own set of rules.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published May 2, 2026</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Image */}
            <div className="container mx-auto px-4 -mt-8">
                <div className="max-w-3xl mx-auto">
                    <img
                        src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&h=600&fit=crop&fm=webp&auto=format&q=80"
                        alt="Modern high-rise condominium building in a coastal San Diego neighborhood"
                        loading="eager"
                        decoding="async"
                        width={800}
                        height={600}
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
                                <strong>Condo cleaning in La Jolla requires navigating building logistics and addressing coastal conditions that houses do not.</strong> High-rise units need elevator coordination, parking validation, and vendor registration. Beachfront condos deal with <strong>salt residue, sand tracking, and marine layer moisture</strong>. Inland La Jolla condos near UTC face <strong>canyon dust and pollen</strong> instead. Most La Jolla condos benefit from biweekly cleaning, with beachfront units needing more frequent service during summer when windows stay open and salt accumulates faster.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            La Jolla has one of the highest concentrations of condos and apartments in San Diego — from beachfront high-rises along Coast Boulevard to modern complexes off Regents Road near UTC. If you live in a <Link href="/location/la-jolla" className="text-teal-600 hover:text-teal-700 underline">La Jolla</Link> condo, your cleaning needs are different from someone in a detached house. The building itself adds logistics. The coastal environment adds salt and sand. And the compact layout demands efficient use of time to get every surface addressed without wasting hours.
                        </p>
                        <p className="text-slate-600">
                            This guide covers what makes apartment cleaning in La Jolla distinct — the building logistics, the environmental factors that vary by sub-neighborhood, and the specific approaches that keep condos clean without creating problems with neighbors, property managers, or HOA rules.
                        </p>

                        {/* Section 1: High-Rise Logistics */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            High-Rise Logistics: What Cleaning a Condo Building Requires
                        </h2>
                        <p className="text-slate-600">
                            A house has a front door. You walk in, you clean, you leave. A condo building has a lobby, a front desk, an elevator, a parking garage with rules, and neighbors on every side. These logistics affect how cleaning gets done — and skipping any of them creates problems.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <KeyRound className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Building access and vendor registration</h3>
                                    <p className="text-slate-600 text-sm">Many La Jolla condo buildings require vendors to be registered before entering. This means providing insurance certificates, business licenses, and sometimes a background check confirmation to the property management office. We handle this paperwork before your first appointment so there are no delays at the front desk.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <ArrowUpDown className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Elevator reservations and timing</h3>
                                    <p className="text-slate-600 text-sm">Some buildings require service elevator reservations for vendors carrying equipment. We consolidate all supplies into a single trip — caddy, vacuum, mop, and cleaning products — so we only need one elevator ride up and one down. This respects shared elevator schedules and minimizes disruption to other residents.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Building2 className="w-6 h-6 text-orange-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Parking validation and time windows</h3>
                                    <p className="text-slate-600 text-sm">La Jolla parking is notoriously tight, especially near the Village and Shores. Most condo buildings offer guest or vendor parking — but some limit it to specific hours. We confirm parking logistics before arrival and factor in any time restrictions so the cleaning stays on schedule without parking complications.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Home className="w-6 h-6 text-purple-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Shared hallway considerations</h3>
                                    <p className="text-slate-600 text-sm">We never leave equipment or supplies in shared hallways — not even temporarily. Vacuum cords stay inside your unit. Cleaning caddies do not sit in the corridor. Many buildings have noise restrictions during certain hours, and we respect those. A cleaning crew blocking the hallway is the fastest way to generate complaints from your neighbors.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            These logistics sound minor, but they make or break the experience. A cleaning service that shows up without proper building access wastes your time. One that leaves gear in the hallway creates problems with your HOA. We handle these details because they are part of the job in condo buildings.
                        </p>

                        {/* Section 2: Beachfront vs Inland */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Beachfront Condos vs Inland La Jolla Condos
                        </h2>
                        <p className="text-slate-600">
                            Not all La Jolla condos face the same cleaning challenges. A unit on Coast Boulevard deals with very different environmental factors than one off Regents Road near UTC. Understanding the difference determines the right cleaning approach and frequency.
                        </p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 my-6 not-prose">
                            <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <Waves className="w-5 h-5 text-blue-600" />
                                    <h3 className="font-bold text-slate-900 text-sm">Beachfront Condos (Coast Blvd, Shores, Bird Rock)</h3>
                                </div>
                                <ul className="space-y-1.5 mt-2">
                                    {[
                                        "Salt crystals deposit on windows, fixtures, and hardware daily",
                                        "Sand tracks in from beach access and embeds in floor transitions",
                                        "Marine layer moisture pushes into closets and under-sink cabinets",
                                        "Sliding glass doors and tracks accumulate grit that jams mechanisms",
                                        "Metal fixtures corrode faster — door handles, hinges, cabinet pulls"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-600 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                                <div className="flex items-center gap-2 mb-2">
                                    <Wind className="w-5 h-5 text-amber-600" />
                                    <h3 className="font-bold text-slate-900 text-sm">Inland Condos (UTC, Regents Rd, Nobel Dr)</h3>
                                </div>
                                <ul className="space-y-1.5 mt-2">
                                    {[
                                        "Canyon dust and pollen from nearby Rose Canyon drifts in through HVAC",
                                        "Construction particles from ongoing UTC corridor development",
                                        "Less humidity but more fine dust accumulation on blinds and fans",
                                        "Shared HVAC systems circulate dust between units in larger complexes",
                                        "Balconies collect construction grit that gets tracked inside"
                                    ].map((item, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle className="w-4 h-4 text-amber-500 flex-shrink-0 mt-0.5" />
                                            <span className="text-slate-600 text-sm">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            The practical difference: beachfront condos need more attention on glass, hardware, and entryways. Inland condos need more attention on blinds, ceiling fans, and HVAC-adjacent surfaces. We adjust based on your unit's location and exposure. For a deeper look at how salt air specifically affects La Jolla homes, our <Link href="/blog/salt-air-la-jolla-home-cleaning" className="text-teal-600 hover:text-teal-700 underline">salt air cleaning guide</Link> covers the details.
                        </p>

                        {/* Section 3: Compact Layout Efficiency */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Cleaning Compact Layouts Efficiently
                        </h2>
                        <p className="text-slate-600">
                            Most La Jolla condos range from 800 to 1,400 square feet. That smaller footprint does not mean less work — it means different work. Compact spaces concentrate cooking grease, bathroom moisture, and everyday wear into a tighter area. Everything shows faster.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            {[
                                { task: "Open floor plans spread kitchen grease to living areas", detail: "In a condo with an open kitchen and living room, cooking residue migrates onto coffee tables, TV screens, and upholstered furniture. We address kitchen surfaces first to prevent cross-contamination during the cleaning process." },
                                { task: "Tile and laminate show every particle", detail: "Hard floors are the most common surface in La Jolla condos. They look clean when freshly mopped but show dust, hair, and sand within hours. We vacuum all hard floors before mopping — skipping this step grinds grit into the finish." },
                                { task: "Bathroom moisture has nowhere to go", detail: "Condo bathrooms are typically smaller with less ventilation than house bathrooms. Moisture lingers on grout, behind the toilet, and on the underside of vanity cabinets. We check these areas during every visit and flag early mold signs before they become a bigger issue." },
                                { task: "Storage areas double as dust traps", detail: "Walk-in closets, built-in shelving, and pantry cabinets in condos collect dust that gets disturbed every time you open a door. We dust accessible storage surfaces during standard cleaning. Inside cabinets and closet shelving are covered during deep cleaning." }
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
                            We allocate time based on the actual work — not just square footage. A 900-square-foot beachfront condo with salt buildup and sand tracking can take as long to clean properly as a 1,300-square-foot inland unit with lighter accumulation.
                        </p>

                        {/* Section 4: Common Condo Surfaces */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Common Condo Surfaces and How We Handle Them
                        </h2>
                        <p className="text-slate-600">
                            La Jolla condos range from 1960s-era buildings with original tile and laminate to newly built units with quartz countertops and luxury vinyl plank flooring. The cleaning approach depends on what is in your unit.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            {[
                                { surface: "Quartz countertops", care: "Safe for all-purpose cleaning products. Quartz resists staining better than natural stone, but salt residue still leaves a film in coastal units that needs regular removal. We avoid abrasive pads that can dull the surface over time." },
                                { surface: "Tile and laminate flooring", care: "The most common condo flooring in La Jolla. Both show dust and footprints quickly. We vacuum first to remove sand and grit, then mop with a product appropriate for the material. Laminate requires less water — over-wetting can cause edge swelling." },
                                { surface: "Marble and travertine", care: "Found in higher-end La Jolla Village and Muirlands condos. Natural stone is porous and sensitive to acidic cleaners. Our standard service uses safe all-purpose products on these surfaces. For homes with extensive natural stone, specialized pH-neutral treatments are available upon request as an add-on." },
                                { surface: "Stainless steel appliances", care: "Salt air accelerates oxidation and pitting on stainless steel. Regular wiping during each cleaning visit removes salt before corrosion starts. We clean with the grain to avoid streaking." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-sm">{item.surface}</h3>
                                        <p className="text-slate-600 text-sm">{item.care}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-600">
                            We confirm your unit's materials before the first visit. This lets us bring the right products and avoid any surface damage. If you are not sure what your countertops or floors are made of, we can identify them on arrival.
                        </p>

                        {/* Section 5: UCSD Student Housing */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            UCSD Student Housing Turnover
                        </h2>
                        <p className="text-slate-600">
                            UCSD's proximity to La Jolla means thousands of students rent condos and apartments in the UTC corridor, along Regents Road, and near Nobel Drive. This creates a seasonal surge in move-in and move-out cleaning demand tied directly to the academic calendar.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <GraduationCap className="w-6 h-6 text-purple-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Peak Turnover Windows</h3>
                                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-2">
                                        <div>
                                            <p className="font-bold text-slate-800 text-sm">Late June</p>
                                            <p className="text-slate-600 text-xs">The heaviest move-out period. Spring quarter ends mid-June, and most leases expire at the end of the month. This is the busiest window for turnover cleans in the UTC and La Jolla rental market.</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-800 text-sm">Late August / Early September</p>
                                            <p className="text-slate-600 text-xs">Fall move-in rush. New leases begin, incoming students settle in. Landlords need units cleaned and ready before new tenants arrive.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            If you are a landlord or property manager with rental units near UCSD, book turnover cleans 2 to 3 weeks ahead of these peak periods. Waiting until the last week of June typically means no availability from any cleaning service in the area. Our <Link href="/blog/move-in-cleaning-checklist" className="text-teal-600 hover:text-teal-700 underline">move-in cleaning checklist</Link> covers what a thorough turnover includes.
                        </p>
                        <p className="text-slate-600">
                            Move-in/move-out cleaning for condos differs from houses in a few ways. Condos have building access requirements that add scheduling time. Shared walls mean noise restrictions — we cannot run a vacuum at 7 AM in most buildings. And empty condo units reveal wall scuffs, baseboard damage, and grout discoloration that furnished units hide. Our move-in/move-out service addresses the cleaning — wall damage and repairs are outside our scope but we can flag them for you.
                        </p>

                        {/* Section 6: Sub-Neighborhood Breakdown */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            La Jolla Condo Sub-Neighborhoods
                        </h2>
                        <p className="text-slate-600">
                            La Jolla is not one neighborhood — it is several, each with a different condo stock, different residents, and different cleaning demands.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">Bird Rock Condos</h3>
                                    <p className="text-slate-600 text-sm">Smaller buildings, 2-3 stories, close to the water. Residents are a mix of professionals and retirees who value a quiet, well-maintained unit. Salt exposure here is the highest in La Jolla. These condos need consistent attention on ocean-facing glass, door hardware, and balcony tracks. Sand tracks in daily from the Bird Rock tide pools.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">La Jolla Village Condos</h3>
                                    <p className="text-slate-600 text-sm">Mid-rise and high-rise buildings near Prospect Street and along Coast Boulevard. These tend to have concierge service, vendor registration requirements, and elevator reservation systems. Residents include seasonal owners, retirees, and vacation rental operators. Units often have higher-end finishes — marble, travertine, custom tile — that need careful product selection. Some buildings restrict cleaning hours.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">UTC / Regents Road Condos</h3>
                                    <p className="text-slate-600 text-sm">Larger complexes with more units per building. The resident mix skews younger — UCSD students, young professionals, and families near the Westfield UTC corridor. These condos deal with canyon dust and construction particles rather than salt. HVAC dust circulation is a bigger factor in shared-wall buildings. Turnover is higher here due to the student rental cycle, which means more frequent move-in/move-out cleaning demand.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">La Jolla Shores Condos</h3>
                                    <p className="text-slate-600 text-sm">Near-sea-level units that get the full combination of salt, sand, and marine layer moisture. The wide sandy beach at Shores means sand tracking is constant — more so than Bird Rock or the Village. Families and surfers bring sand home daily. These units benefit from weekly cleaning during summer months when beach activity peaks.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 7: Deep Cleaning for Condos */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            When Your Condo Needs a Deep Clean
                        </h2>
                        <p className="text-slate-600">
                            Standard biweekly cleaning handles ongoing maintenance. But La Jolla condos accumulate buildup in places that standard cleaning does not reach — behind appliances, inside cabinet interiors, on individual blind slats, and in grout lines. A <Link href="/service/deep-cleaning" className="text-teal-600 hover:text-teal-700 underline">deep clean</Link> resets these areas.
                        </p>
                        <p className="text-slate-600">
                            We recommend a deep clean every 3 to 4 months for most La Jolla condos, or quarterly at minimum. Beachfront units that go longer than 4 months without a deep clean develop salt residue buildup on blind slats, window tracks, and baseboards that standard cleaning cannot remove efficiently. For a detailed breakdown of what a coastal deep clean involves, see our <Link href="/blog/deep-cleaning-la-jolla-coastal-home" className="text-teal-600 hover:text-teal-700 underline">La Jolla deep cleaning guide</Link>.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            {[
                                "Ceiling fans and light fixtures — where dust and salt accumulate and redistribute through the unit when turned on",
                                "Blinds — individual slat cleaning to remove embedded salt residue and dust",
                                "Baseboards and door frames — the ledges that catch particles settling from air circulation",
                                "Window sills and sliding door tracks — the entry point for salt, sand, and coastal grit",
                                "Appliance exteriors — range hoods, fridge surfaces, and dishwasher fronts where grease and salt combine",
                                "Detailed bathroom sanitization — hard water deposits, grout surface maintenance, and fixture cleaning"
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-2 p-3 bg-teal-50 rounded-lg">
                                    <CheckCircle className="w-4 h-4 text-teal-600 flex-shrink-0 mt-0.5" />
                                    <span className="text-slate-700 text-sm">{item}</span>
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-600">
                            Deep cleaning covers appliance exteriors, not interiors. Inside the oven, inside the refrigerator, and inside cabinets are available as add-ons at additional cost. Grout scrubbing for heavily affected tile is available as a specialized add-on.
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
                            <h3 className="text-2xl font-bold mb-3">Book Condo Cleaning in La Jolla</h3>
                            <p className="text-teal-100 mb-2">
                                {COMPANY_NAME} cleans condos and apartments across La Jolla — Bird Rock, the Village, La Jolla Shores, and the UTC corridor. We handle building logistics, work within HOA requirements, and address the salt, sand, and dust that La Jolla condo living produces.
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
                                    href="/location/la-jolla"
                                    className="inline-flex items-center justify-center px-6 py-3 border-2 border-white text-white rounded hover:bg-white/10 transition-colors"
                                >
                                    La Jolla Service Area
                                </Link>
                            </div>
                        </div>

                        <AuthorBio
                            name="Art Machekin"
                            role="Founder"
                            bio="Art Machekin is the founder of Metla House Cleaning. Before starting the company, Art worked as a professional cleaner — hands-on experience that gives him a deep understanding of the techniques and details that matter most in delivering a spotless home."
                        />

                        <RelatedArticles currentSlug="la-jolla-condo-cleaning-guide" />

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-4">Condo Cleaning Services Across San Diego</h3>
                            <div className="flex flex-wrap gap-2">
                                <Link href="/location/la-jolla" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> La Jolla
                                </Link>
                                <Link href="/location/university-city" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> University City
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
};

export default LaJollaCondoCleaningPage;
