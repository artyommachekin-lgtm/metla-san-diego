'use client';
/**
 * Deep Cleaning a La Jolla Coastal Home: What Salt and Sand Do to Your Surfaces
 * URL: /blog/deep-cleaning-la-jolla-coastal-home
 *
 * Core deep cleaning blog for La Jolla — covers what professional deep cleaning
 * addresses in coastal homes. Complements blog #35 (salt air effects) with a
 * service-focused angle rather than a science/damage angle.
 * Zone 1 (Coastal Premium) — La Jolla content cluster
 */
import React from 'react';
import Link from 'next/link';
import {
    Waves,
    Clock,
    ArrowRight,
    MapPin,
    CheckCircle,
    XCircle,
    Droplets,
    Wind,
    Home,
    Calendar,
    ShieldCheck,
    Sparkles
} from 'lucide-react';
import { COMPANY_NAME, PHONE_NUMBER } from '../../constants';
import ArticleSchema from '../../components/ArticleSchema';
import HowToSchema from '../../components/HowToSchema';
import FAQSchema, { FAQItem } from '../../components/FAQSchema';
import RelatedArticles from '../../components/RelatedArticles';
import AuthorBio from '../../components/AuthorBio';

const LaJollaDeepCleanPage: React.FC = () => {

    const faqs: FAQItem[] = [
        {
            question: "How much does deep cleaning cost in La Jolla?",
            answer: "Deep cleaning in La Jolla typically ranges from $250 to $600+ depending on home size, condition, and surface types. Homes with extensive natural stone or large square footage (common in the Muirlands and Shores) fall toward the higher end. Contact Metla for a free estimate based on your home's specifics."
        },
        {
            question: "How often should La Jolla homes be deep cleaned?",
            answer: "Most La Jolla homes need deep cleaning at least quarterly — more frequently than inland homes where salt, sand, and marine layer moisture are not factors. Homes in Bird Rock and La Jolla Shores that sit directly on the coast may benefit from deep cleaning every two months, especially during summer when windows stay open and salt exposure increases."
        },
        {
            question: "Do you clean marble and natural stone surfaces in La Jolla homes?",
            answer: "Our standard deep clean uses safe, non-abrasive all-purpose products that will not damage natural stone. For homes with extensive marble, travertine, or other premium stone — common in the Muirlands, Farms, and along the Shores — specialized pH-neutral stone treatments are available upon request as an add-on when you book."
        },
        {
            question: "What La Jolla neighborhoods do you serve?",
            answer: "We serve all of La Jolla including Bird Rock, La Jolla Shores, La Jolla Village, Windansea, the Muirlands, and La Jolla Farms — full coverage across the 92037 and 92038 zip codes. We also serve neighboring coastal communities like Del Mar, Pacific Beach, and University City."
        },
        {
            question: "How do you handle mold and mildew from the marine layer?",
            answer: "Our deep cleaning addresses mold and mildew on accessible surfaces — bathroom tile, under-sink areas, window sills, and closet walls. We clean what we can reach and identify areas that may need further attention. For deep-set mildew in grout or behind fixtures, our Deep Clean Add-On provides more intensive treatment. We do not perform mold remediation — that requires a licensed specialist."
        },
        {
            question: "Is deep cleaning different from standard cleaning for coastal homes?",
            answer: "Yes. Deep cleaning goes beyond surface maintenance to address the buildup that accumulates over weeks or months — salt corrosion on fixtures, sand embedded in floor crevices, mildew in moisture-prone areas, and the sticky salt film on windows and hardware. Standard cleaning maintains the baseline. Deep cleaning resets it. In coastal La Jolla, that reset is needed more often than in inland neighborhoods."
        }
    ];

    const howToSteps = [
        {
            name: "Assess the home's coastal exposure and surface types",
            text: "Walk through the home noting proximity to the ocean, window orientation, surface materials, and areas with visible salt film or mildew. Bird Rock and Shores homes get heavier deposits than Village or Muirlands properties. Our team plans product selection and time allocation based on this initial assessment."
        },
        {
            name: "Remove salt deposits from glass, hardware, and fixtures",
            text: "Start with ocean-facing windows and work inward. Wipe all window surfaces, door hardware, cabinet pulls, bathroom fixtures, and light switch plates to remove salt crystal buildup. Salt corrodes metal and etches glass — removing it before it bonds prevents permanent damage."
        },
        {
            name: "Extract sand from floors, crevices, and transitions",
            text: "Vacuum all hard floors, entryways, and the gaps between floor transitions where sand collects. Professional-grade vacuums pull fine sand from places household vacuums miss — between floorboards, under baseboards, and in carpet fibers near entry points. Always vacuum before mopping so sand does not scratch surfaces."
        },
        {
            name: "Address marine layer moisture and mildew",
            text: "Check bathrooms, under-sink cabinets, closets on exterior walls, and laundry areas for moisture buildup and early mildew. Clean accessible surfaces with appropriate sanitizing products. Note any areas with deep-set mildew that may need a Deep Clean Add-On for more intensive treatment."
        },
        {
            name: "Deep clean every room top to bottom",
            text: "Work from ceiling fans and light fixtures down to blinds, window sills, door frames, baseboards, and floors in every room. This top-down approach catches the fine salt-and-dust film on horizontal surfaces. Clean appliance exteriors, sanitize high-touch surfaces, and detail bathrooms including behind faucets and around tub bases."
        },
        {
            name: "Clean interior glass and window sills throughout",
            text: "Salt film on interior glass is a signature problem in La Jolla homes. Clean all interior window surfaces and sills, paying extra attention to ocean-facing and wind-exposed windows. Remove the hazy residue that builds between cleanings and dulls natural light."
        },
        {
            name: "Address luxury surfaces with appropriate care",
            text: "Use safe all-purpose products on standard surfaces. For homes that request specialized care for marble, travertine, or custom woodwork, apply material-specific products brought for the visit. Dust wood surfaces dry before applying any wet product — water mixed with salt residue creates a corrosive solution."
        },
        {
            name: "Final walkthrough and quality check",
            text: "Walk through every room checking for missed spots. Confirm all hardware is wiped, all glass is clear, and all moisture-prone areas have been addressed. Style towels, arrange linens, and ensure the home feels fully reset — not just surface-clean, but deep-clean ready for the coastal environment to start over."
        }
    ];

    return (
        <div className="bg-white min-h-screen">
            <ArticleSchema
                title="Deep Cleaning a La Jolla Coastal Home: What Salt and Sand Do to Your Surfaces"
                description="What professional deep cleaning addresses in La Jolla coastal homes — salt corrosion on fixtures, sand tracking, marine layer mildew, and luxury surface care across Bird Rock, Shores, the Village, and Muirlands."
                slug="deep-cleaning-la-jolla-coastal-home"
                datePublished="2026-04-18"
                dateModified="2026-04-18"
                authorName="Art Machekin"
                authorType="Person"
                authorJobTitle="Founder"
            />
            <HowToSchema
                name="How to Deep Clean a La Jolla Coastal Home"
                description="A professional step-by-step approach to deep cleaning a coastal La Jolla home, addressing salt deposits, sand extraction, marine layer moisture, and luxury surface care."
                totalTime="PT6H"
                supply={[
                    "All-purpose surface cleaner",
                    "Glass cleaner",
                    "Microfiber cloths",
                    "Bathroom sanitizer",
                    "pH-neutral stone cleaner (if applicable)"
                ]}
                tool={[
                    "Professional-grade vacuum",
                    "Mop and bucket",
                    "Scrub brushes",
                    "Spray bottles",
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
                            Deep Cleaning a La Jolla Coastal Home: What Salt and Sand Do to Your Surfaces
                        </h1>
                        <p className="text-xl text-slate-300 mb-4">
                            Salt corrodes your fixtures. Sand grinds into your floors. The marine layer pushes mildew into your closets. Here is what professional deep cleaning actually addresses in La Jolla homes.
                        </p>
                        <div className="flex items-center gap-2 text-slate-500 text-sm">
                            <Calendar className="w-4 h-4" />
                            <span>Published April 18, 2026</span>
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
                            <h2 className="text-lg font-bold text-teal-800 mb-2">Quick Answer</h2>
                            <p className="text-slate-700">
                                <strong>Deep cleaning a La Jolla home</strong> means addressing salt corrosion on bathroom fixtures and door hardware, extracting sand from floors and crevices, removing marine layer mildew from bathrooms and closets, and cleaning the salt film that coats interior windows. Coastal homes in the <strong>92037</strong> zip code need deep cleaning at least <strong>quarterly</strong> — some neighborhoods like Bird Rock and La Jolla Shores benefit from every two months. Deep cleaning in La Jolla typically ranges from <strong>$250 to $600+</strong> depending on home size and condition.
                            </p>
                        </div>

                        {/* Introduction */}
                        <p className="text-xl text-slate-600 leading-relaxed">
                            If you have read our guide on <Link href="/blog/salt-air-la-jolla-home-cleaning" className="text-teal-600 hover:text-teal-700 underline">how salt air affects La Jolla homes</Link>, you know what the ocean does to your surfaces. Salt crystals corrode metal. Sand scratches floors. The marine layer breeds mildew in enclosed spaces. That article covers the damage. This one covers the fix — what a professional <Link href="/service/deep-cleaning" className="text-teal-600 hover:text-teal-700 underline">deep cleaning</Link> actually targets in a <Link href="/location/la-jolla" className="text-teal-600 hover:text-teal-700 underline">La Jolla</Link> coastal home, room by room and surface by surface.
                        </p>
                        <p className="text-slate-600">
                            Deep cleaning is not the same as standard cleaning. Standard cleaning maintains a baseline — wiping counters, vacuuming floors, sanitizing bathrooms. Deep cleaning resets the baseline by going after the buildup that accumulates over weeks and months: the salt crust on showerheads, the sand embedded between floor transitions, the mildew forming behind bathroom fixtures. In a coastal environment, that buildup happens faster and hits harder than it does a few miles inland.
                        </p>

                        {/* Section 1: Salt Corrosion on Fixtures */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Salt Corrosion on Bathroom Fixtures and Hardware
                        </h2>
                        <p className="text-slate-600">
                            Walk into any La Jolla bathroom that has not been deep cleaned in a few months and check the faucets. You will see white mineral deposits, dull spots on chrome, and a gritty texture on handles. That is salt. Microscopic salt crystals from ocean spray settle on every metal surface in your home — faucets, showerheads, door hinges, cabinet pulls, towel bars, and light fixtures. Over time, salt accelerates oxidation. Chrome pits. Brushed nickel dulls. Even stainless steel develops discoloration.
                        </p>
                        <p className="text-slate-600">
                            A deep clean addresses this systematically. We wipe down every piece of hardware and every fixture in the home — not just the ones you see daily. That includes the hinge side of doors, the underside of cabinet pulls, and the base of bathroom fixtures where salt and moisture collect together. The goal is to remove salt before it bonds and causes permanent pitting.
                        </p>
                        <div className="flex items-start gap-3 p-4 bg-blue-50 rounded-lg border border-blue-200 my-6 not-prose">
                            <ShieldCheck className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="font-bold text-slate-900">Hardware that gets missed</h3>
                                <p className="text-slate-600 text-sm">Door hinges, window locks, sliding door tracks, and the mounting hardware on towel bars and toilet paper holders all collect salt. These are the spots standard cleaning skips. Deep cleaning catches them before corrosion sets in.</p>
                            </div>
                        </div>

                        {/* Section 2: Marine Layer Mildew */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Marine Layer Moisture and Where Mildew Hides
                        </h2>
                        <p className="text-slate-600">
                            La Jolla's marine layer — the cool fog that rolls in most mornings from May through September — pushes moisture into your home through every gap. Windows, door seals, ventilation openings. That moisture settles in enclosed spaces with poor airflow: under bathroom sinks, inside closets along exterior walls, behind washing machines, and in laundry rooms without ventilation.
                        </p>
                        <p className="text-slate-600">
                            Over weeks, this moisture creates conditions for mildew. You may not see it on visible surfaces. It develops in corners, behind fixtures, on the underside of cabinet shelving, and along the base of bathroom walls. Standard cleaning does not reach these areas because they are not part of a surface-level maintenance routine.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Droplets className="w-6 h-6 text-blue-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Bathrooms</h3>
                                    <p className="text-slate-600 text-sm">The highest-risk area. Mildew develops around tub bases, behind toilet tanks, under sink pipes, on grout lines, and along shower door seals. Deep cleaning addresses all accessible surfaces. Bathrooms without exhaust fans or exterior windows are especially vulnerable.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Home className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Closets and storage</h3>
                                    <p className="text-slate-600 text-sm">Closets on exterior walls absorb marine layer moisture through the wall itself. You notice it as a musty smell first, then as discoloration on shelving or walls. Deep cleaning includes wiping down closet shelving and identifying affected areas.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <Wind className="w-6 h-6 text-slate-500 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Laundry areas</h3>
                                    <p className="text-slate-600 text-sm">Between dryer heat, washing machine moisture, and marine layer humidity, laundry rooms in La Jolla homes are mildew-prone. Deep cleaning covers appliance exteriors, wall surfaces behind machines (where accessible), and floor areas that trap moisture.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600 text-sm bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                            <strong>Note:</strong> We clean mold and mildew on <strong>accessible surfaces</strong>. Deep-set mildew in grout lines or behind fixtures may need our <strong>Deep Clean Add-On</strong> for more intensive treatment. For structural mold issues — inside walls or HVAC systems — a licensed mold remediation specialist is the right call.
                        </p>

                        {/* Section 3: Sand Tracking */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Sand Tracking: Where It Collects and How to Get It Out
                        </h2>
                        <p className="text-slate-600">
                            Sand follows you home from every beach trip, every walk along the shore, every time the dog comes in from outside. Fine sand particles embed in shoes, towels, beach bags, and clothing. Once inside, sand acts as an abrasive — it scratches hardwood, grinds into tile grout, and settles in crevices where standard vacuuming cannot reach.
                        </p>
                        <p className="text-slate-600">
                            Deep cleaning targets the sand collection points that routine cleaning misses:
                        </p>
                        <ul className="text-slate-600">
                            <li><strong>Entryway and mudroom floors</strong> — the highest concentration of sand in any home. Professional-grade vacuums with strong suction pull sand from grout lines and floor texture that household vacuums leave behind.</li>
                            <li><strong>Floor transitions</strong> — the gaps between tile and hardwood, between rooms with different flooring, and around door thresholds collect sand in the seams.</li>
                            <li><strong>Hallway baseboards</strong> — sand kicked up by foot traffic settles along hallway baseboards, especially in homes where the front door opens to a long hall.</li>
                            <li><strong>Between couch cushions and under furniture</strong> — sand migrates from clothing onto upholstery and drops to the floor underneath. Deep cleaning includes vacuuming under all accessible furniture.</li>
                            <li><strong>Bathroom floors near showers</strong> — sand washes off in the shower and collects on the bathroom floor, especially around the tub base and in tile grout lines.</li>
                        </ul>
                        <p className="text-slate-600">
                            We always vacuum hard floors before mopping. Mopping over sand scratches surfaces — the mop pad drags sand particles across the floor like sandpaper. Vacuuming first removes the abrasive, then mopping handles the salt residue and everyday grime.
                        </p>

                        {/* Section 4: Coastal Windows */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Coastal Windows: Salt Film on Interior Glass
                        </h2>
                        <p className="text-slate-600">
                            The hazy film on your La Jolla windows is not just dust. It is salt residue carried in by onshore winds and deposited on glass surfaces — including interior glass when windows are open. Over time, salt etches glass. The longer it sits, the harder it is to remove, and eventually it causes permanent clouding that no amount of cleaning can reverse.
                        </p>
                        <p className="text-slate-600">
                            Deep cleaning addresses interior glass and window sills throughout the home. We pay extra attention to ocean-facing and wind-exposed windows where deposits are heaviest. Window sills are also key collection points — salt, sand, and moisture all accumulate on sills and create a combined residue that standard dusting misses.
                        </p>
                        <p className="text-slate-600 text-sm italic">
                            Interior window cleaning is included in our deep clean. Full interior-exterior window service is available as an add-on.
                        </p>

                        {/* Section 5: Luxury Surface Care */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Luxury Surface Care in La Jolla Homes
                        </h2>
                        <p className="text-slate-600">
                            La Jolla properties are known for premium finishes. Marble bathroom vanities, travertine entryways, natural stone kitchen counters, custom hardwood cabinetry. These materials are part of what makes a La Jolla home a La Jolla home — and they require specific attention during a deep clean.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            {[
                                { material: "Marble and travertine", detail: "Salt is mildly acidic and etches polished stone over time. Our standard deep clean uses safe all-purpose products that will not damage natural stone. For homes with extensive marble or travertine — common in the Muirlands and La Jolla Farms — specialized pH-neutral stone treatments are available upon request as an add-on." },
                                { material: "Custom woodwork and cabinetry", detail: "Coastal moisture and salt create a corrosive combination on wood surfaces. We dust all wood surfaces dry before applying any wet product. This prevents salt residue from dissolving into water and damaging the finish." },
                                { material: "Natural stone tile", detail: "Standard deep cleaning covers surface tile cleaning. Deep grout scrubbing for heavily salt-affected or mildew-stained grout is available as a specialized add-on — it is not included in standard service." }
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                    <CheckCircle className="w-5 h-5 text-teal-500 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-slate-900 text-sm">{item.material}</h3>
                                        <p className="text-slate-600 text-sm">{item.detail}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <p className="text-slate-600">
                            The key principle: our standard products are safe for all surfaces including natural stone. Specialized treatments go further — deeper restoration, sealing, material-specific care — and are available when you request them at booking.
                        </p>

                        {/* Section 6: Sub-neighborhoods */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            Deep Cleaning Challenges by La Jolla Neighborhood
                        </h2>
                        <p className="text-slate-600">
                            Not every block in La Jolla gets the same exposure. Where your home sits determines which problems dominate — and how often you need a deep clean.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">Bird Rock — Maximum sand, heavy salt</h3>
                                    <p className="text-slate-600 text-sm">Directly on the coast with minimal buffer. Bird Rock homes get the heaviest sand tracking in all of La Jolla — the tide pools and beach access points feed sand directly into the neighborhood. Salt deposits are intense on ocean-facing surfaces. Deep cleaning every two months keeps up with the accumulation. Hardware corrosion is fastest here.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">Muirlands — Canyon dust plus salt</h3>
                                    <p className="text-slate-600 text-sm">Elevated terrain gives some protection from direct spray, but onshore winds still carry salt to these homes. The bigger factor: canyon dust. Muirlands homes sit adjacent to open hillside and canyon terrain that generates fine dust year-round. Combined with salt residue, this creates a stubborn film on all horizontal surfaces. Larger lot sizes mean more patios and exterior surfaces to maintain. Many homes have extensive natural stone that needs careful product selection.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">The Village — Older homes, compact spaces</h3>
                                    <p className="text-slate-600 text-sm">La Jolla Village has a mix of older single-family homes and condos with smaller footprints. Salt exposure is moderate — set slightly back from the coast with buildings providing some wind buffering. The main deep cleaning challenge is older construction: smaller bathrooms with less ventilation (higher mildew risk), vintage tile and fixtures that need gentle handling, and compact layouts where salt film in one room affects the whole space.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-slate-50 rounded-lg">
                                <MapPin className="w-5 h-5 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900 text-sm">La Jolla Shores — Oceanfront luxury, maximum moisture</h3>
                                    <p className="text-slate-600 text-sm">The widest beach in La Jolla means the most sand tracking. Near-sea-level elevation means marine layer moisture penetration is at its highest. Sand-plus-moisture is the dominant combination — bathrooms and closets near the coast are especially vulnerable to mildew. Deep cleaning targets entryway sand extraction and moisture-prone enclosed spaces as top priorities. Luxury finishes in Shores homes often include imported stone and custom tile.</p>
                                </div>
                            </div>
                        </div>

                        {/* Section 7: Frequency */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            How Often La Jolla Homes Need Deep Cleaning
                        </h2>
                        <p className="text-slate-600">
                            Inland San Diego homes — Scripps Ranch, Poway, Rancho Bernardo — can go four to six months between deep cleans with standard biweekly cleaning in between. La Jolla homes cannot. Salt, sand, and moisture rebuild too fast.
                        </p>
                        <div className="space-y-3 my-6 not-prose">
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg border border-teal-200">
                                <Waves className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Directly on the coast (Bird Rock, Shores, Windansea)</h3>
                                    <p className="text-slate-600 text-sm">Deep clean every <strong>2 months</strong> with biweekly standard cleaning in between. Salt deposits and sand accumulation in these neighborhoods warrant the higher frequency. Summer months — when windows stay open and onshore winds are strongest — may need an additional deep clean.</p>
                                </div>
                            </div>
                            <div className="flex items-start gap-3 p-4 bg-teal-50 rounded-lg border border-teal-200">
                                <Home className="w-6 h-6 text-teal-600 flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-slate-900">Set back from the coast (Village, Muirlands, Farms)</h3>
                                    <p className="text-slate-600 text-sm">Deep clean <strong>quarterly</strong> (every 3 months) with biweekly standard cleaning in between. These neighborhoods still get significant salt exposure, but the reduced sand tracking and partial wind buffering extend the timeline slightly.</p>
                                </div>
                            </div>
                        </div>
                        <p className="text-slate-600">
                            Between deep cleans, biweekly standard cleaning manages day-to-day salt and sand. The deep clean handles everything standard cleaning cannot reach — baseboards, behind fixtures, inside window tracks, and the accumulated residue on hardware and glass. For a full breakdown of what deep cleaning covers versus standard service, read our <Link href="/blog/deep-cleaning-guide-san-diego" className="text-teal-600 hover:text-teal-700 underline">deep cleaning guide for San Diego</Link>.
                        </p>

                        {/* What's Included / Add-Ons */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-4">
                            What Deep Cleaning Covers — and What Is an Add-On
                        </h2>
                        <p className="text-slate-600">
                            Full transparency on what is included so there are no surprises. For pricing details specific to your home, see our <Link href="/blog/how-much-does-a-deep-house-cleaning-cost" className="text-teal-600 hover:text-teal-700 underline">deep cleaning cost guide</Link>.
                        </p>

                        <div className="my-6 not-prose">
                            <h3 className="font-bold text-slate-900 mb-3">Included in Every Deep Clean</h3>
                            <div className="space-y-2">
                                {[
                                    "All hardware and fixtures wiped for salt removal",
                                    "Appliance exteriors (fridge, oven, dishwasher)",
                                    "Microwave cleaned inside and out",
                                    "Baseboards, door frames, and ceiling fans",
                                    "Blinds, light fixtures, and window sills",
                                    "Interior window glass cleaned",
                                    "Detailed bathroom sanitization (including behind faucets)",
                                    "All hard floors vacuumed (sand extraction) and mopped",
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
                                    "Full interior-exterior window cleaning",
                                    "Deep grout scrubbing and tile restoration (specialized add-on)",
                                    "Specialized marble, travertine, or natural stone treatment"
                                ].map((item, i) => (
                                    <div key={i} className="flex items-start gap-2">
                                        <XCircle className="w-5 h-5 text-slate-400 flex-shrink-0 mt-0.5" />
                                        <span className="text-slate-600 text-sm">{item} — <em>available at additional cost</em></span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* FAQ Section */}
                        <h2 className="text-2xl font-serif font-bold text-slate-900 mt-10 mb-6">
                            Frequently Asked Questions About Deep Cleaning in La Jolla
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
                            <h3 className="text-2xl font-bold mb-3">Book Your La Jolla Deep Clean</h3>
                            <p className="text-teal-100 mb-2">
                                {COMPANY_NAME} serves all La Jolla neighborhoods — Bird Rock, La Jolla Shores, the Village, Windansea, the Muirlands, and La Jolla Farms. Our team understands the specific deep cleaning demands that salt air, sand, and the marine layer create for coastal properties. We use safe products on every clean, with specialized surface treatments available upon request.
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

                        <RelatedArticles currentSlug="deep-cleaning-la-jolla-coastal-home" />

                        {/* Location Links */}
                        <div className="bg-slate-50 p-6 rounded-xl my-8">
                            <h3 className="font-bold text-slate-900 mb-4">Deep Cleaning Services Across Coastal San Diego</h3>
                            <div className="flex flex-wrap gap-2">
                                <Link href="/location/la-jolla" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> La Jolla
                                </Link>
                                <Link href="/location/del-mar" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Del Mar
                                </Link>
                                <Link href="/location/pacific-beach" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Pacific Beach
                                </Link>
                                <Link href="/location/encinitas" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> Encinitas
                                </Link>
                                <Link href="/location/university-city" className="inline-flex items-center gap-1 px-3 py-1.5 bg-white border border-slate-200 rounded-full text-sm text-slate-700 hover:border-teal-300 hover:text-teal-600 transition-colors">
                                    <MapPin className="w-3 h-3" /> University City
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

export default LaJollaDeepCleanPage;
