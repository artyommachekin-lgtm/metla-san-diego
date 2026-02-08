/**
 * San Diego Location Data
 * Priority 1: Existing locations (preserve backlinks)
 * Priority 2: New strategic locations from research
 */
import { Location } from './types';

export const LOCATIONS: Location[] = [
    // ============================================
    // PRIORITY 1: EXISTING LOCATIONS (Backlinks)
    // ============================================
    {
        name: "La Jolla",
        slug: "la-jolla",
        type: "Coastal",
        description: "Premium house cleaning for La Jolla's oceanfront estates and village homes.",
        tagline: "Where coastal elegance meets impeccable cleanliness.",
        detailedContent: `La Jolla represents the pinnacle of San Diego coastal living, and Metla House Cleaning delivers service to match. From the dramatic cliffs of Bird Rock to the charming streets of La Jolla Village, we understand what discerning La Jolla homeowners expect.

Our team knows La Jolla intimately—the salt air that affects windows and outdoor furniture, the marine layer moisture that can accumulate in closets and bathrooms, and the fine beach sand that finds its way into every corner. We bring solutions refined specifically for coastal homes.

Whether you own a contemporary oceanview estate in La Jolla Shores, a Spanish Colonial gem in the Village, or a modern condo at UTC, we tailor our approach to your property's unique character and your lifestyle's demands.`,
        keywords: ["House cleaning La Jolla", "Maid service La Jolla", "La Jolla cleaning services", "La Jolla house cleaners"],
        popularServiceIds: ["deep-cleaning", "standard", "vacation-rental"],
        housingTypes: ["Oceanfront Estates", "Village Cottages", "Modern Condos", "Spanish Colonial Homes", "Contemporary Cliff Homes"],
        landmarks: ["La Jolla Cove", "Torrey Pines", "UCSD", "Birch Aquarium", "La Jolla Shores", "The Village"],
        neighborhoods: ["Bird Rock", "La Jolla Shores", "La Jolla Village", "Muirlands", "La Jolla Farms", "Windansea"],
        zipCodes: ["92037", "92038"],
        cleaningChallenges: [
            { title: "Salt Air Residue", description: "Coastal salt air leaves residue on windows, surfaces, and outdoor furniture. We use specialized techniques to protect and clean affected areas." },
            { title: "Marine Layer Moisture", description: "Morning fog brings humidity that can cause mildew in closets and bathrooms. We pay attention to moisture-prone areas." },
            { title: "Beach Sand Infiltration", description: "Fine sand tracks in from La Jolla's beaches. We use HEPA filtration and detailed floor cleaning to capture every grain." },
            { title: "High-End Finishes", description: "La Jolla homes feature premium materials—marble, travertine, custom woodwork. We know which products are safe for each surface." }
        ],
        propertyManagerContent: "Managing vacation rentals in La Jolla? We provide reliable turnover service for this premium market. Same-day turnovers, photo verification, and the quality that earns 5-star reviews."
    },
    {
        name: "Pacific Beach",
        slug: "pacific-beach",
        type: "Coastal",
        description: "Reliable cleaning services for Pacific Beach's beach cottages and rental properties.",
        tagline: "Beach town living, professionally maintained.",
        detailedContent: `Pacific Beach brings together the best of San Diego beach culture—and unique cleaning challenges. From the bustling boardwalk to quieter Crown Point, PB homes need regular attention to stay fresh and inviting.

Our PB cleaning team understands this neighborhood. We know that sand is a constant companion, that vacation rentals need quick turnovers, and that the salt air affects everything. We've developed systems specifically for coastal living.

Whether you're a busy professional in a North PB condo, a family in Crown Point, or a property investor with multiple rentals, Metla delivers consistent quality that keeps your space beach-ready year-round.`,
        keywords: ["House cleaning Pacific Beach", "Maid service PB", "Pacific Beach cleaning", "PB house cleaners San Diego"],
        popularServiceIds: ["vacation-rental", "standard", "move-in-out"],
        housingTypes: ["Beach Cottages", "Condos", "Townhomes", "Multi-Unit Rentals", "Vacation Rentals"],
        landmarks: ["Crystal Pier", "Mission Bay", "Garnet Avenue", "Pacific Beach Boardwalk", "Kate Sessions Park"],
        neighborhoods: ["North Pacific Beach", "Crown Point", "Mission Bay Park Area", "South PB"],
        zipCodes: ["92109"],
        cleaningChallenges: [
            { title: "High Rental Turnover", description: "PB's vacation rental market requires fast, thorough turnovers. We specialize in same-day service with photo verification." },
            { title: "Sand Control", description: "Beach sand is everywhere in PB. Our detailed cleaning captures sand from floors, furniture, and all those hiding spots." },
            { title: "Salt & Humidity", description: "Coastal conditions affect PB homes year-round. We address salt residue and humidity-related buildup." },
            { title: "Compact Spaces", description: "Many PB homes feature compact layouts that require efficient, thorough cleaning techniques." }
        ],
        propertyManagerContent: "Pacific Beach vacation rental owners trust Metla for reliable turnovers. We understand the urgency of back-to-back bookings and deliver consistent, guest-ready results."
    },
    {
        name: "Hillcrest",
        slug: "hillcrest",
        type: "Urban Core",
        description: "Professional cleaning for Hillcrest's historic homes and modern condos.",
        tagline: "Urban living, meticulously maintained.",
        detailedContent: `Hillcrest pulses with the energy of one of San Diego's most vibrant neighborhoods. From historic Craftsman bungalows to sleek modern condos, this community demands cleaning services that understand its unique character.

Our Hillcrest team knows these streets—the mix of architectural styles, the busy professionals who need flexible scheduling, and the pride residents take in their homes. We adapt our approach to match each property's needs.

Whether you're in a restored 1920s bungalow near Balboa Park, a mid-rise condo on University Avenue, or a townhome in the Uptown area, Metla provides the reliable, professional service that Hillcrest deserves.`,
        keywords: ["House cleaning Hillcrest", "Maid service Hillcrest San Diego", "Hillcrest cleaning services", "Uptown San Diego cleaners"],
        popularServiceIds: ["standard", "deep-cleaning", "move-in-out"],
        housingTypes: ["Craftsman Bungalows", "Historic Homes", "Modern Condos", "Townhomes", "Mid-Rise Apartments"],
        landmarks: ["Balboa Park", "Hillcrest Sign", "University Avenue", "The Hub", "Marston House"],
        neighborhoods: ["Bankers Hill", "Uptown", "Medical Complex Area", "Park West", "Middletown"],
        zipCodes: ["92103"],
        cleaningChallenges: [
            { title: "Historic Home Care", description: "Hillcrest's older homes have original hardwood, vintage tile, and period details that need appropriate cleaning products and techniques." },
            { title: "Urban Dust", description: "City living brings city dust. We address the fine particles that accumulate faster in urban environments." },
            { title: "Compact Urban Layouts", description: "Many Hillcrest homes maximize space creatively. We clean efficiently while respecting your organization." },
            { title: "Flexible Scheduling", description: "Hillcrest professionals have demanding schedules. We offer flexible timing to fit your lifestyle." }
        ],
        propertyManagerContent: "Managing rental properties in Hillcrest? We provide reliable move-in/move-out service and recurring maintenance for this active rental market."
    },
    {
        name: "North Park",
        slug: "north-park",
        type: "Urban Core",
        description: "Quality cleaning for North Park's eclectic homes and creative community.",
        tagline: "Keeping North Park's creative spirit spotless.",
        detailedContent: `North Park embodies San Diego's creative, independent spirit. This walkable neighborhood features an eclectic mix of Craftsman homes, Spanish Revival cottages, and modern apartments.

Our North Park team appreciates this neighborhood's character. We understand that vintage homes have specific needs, that busy creatives value reliability, and that the neighborhood's active lifestyle tracks in plenty of dust and debris.`,
        keywords: ["House cleaning North Park", "Maid service North Park SD", "North Park cleaning services"],
        popularServiceIds: ["standard", "deep-cleaning", "move-in-out"],
        housingTypes: ["Craftsman Bungalows", "Spanish Revival", "Modern Apartments", "Townhomes"],
        landmarks: ["North Park Sign", "30th Street", "Morley Field", "Observatory North Park"],
        neighborhoods: ["South Park", "University Heights", "Normal Heights", "Kensington"],
        zipCodes: ["92104"],
        cleaningChallenges: [
            { title: "Vintage Home Care", description: "North Park's older homes feature original woodwork, vintage tile needing gentle cleaning." },
            { title: "Pet-Friendly Community", description: "North Park loves its dogs. We handle pet hair and extra cleaning needs." }
        ],
        propertyManagerContent: "Managing rentals in North Park? We deliver consistent move-in/move-out quality."
    },
    {
        name: "Coronado",
        slug: "coronado",
        type: "Coastal",
        description: "White-glove cleaning service for Coronado's prestigious homes and estates.",
        tagline: "Island elegance, impeccably maintained.",
        detailedContent: `Coronado stands apart—literally and figuratively. This island community represents some of San Diego's most prestigious addresses, from historic homes near the Hotel del Coronado to contemporary estates along the bay.

Metla understands Coronado's standards. We know homes here feature premium finishes, many residents split time between properties, and salt air affects everything.`,
        keywords: ["House cleaning Coronado", "Maid service Coronado Island", "Coronado cleaning services"],
        popularServiceIds: ["deep-cleaning", "standard", "vacation-rental"],
        housingTypes: ["Historic Estates", "Bayside Properties", "Beach Houses", "Coronado Cays Waterfront"],
        landmarks: ["Hotel del Coronado", "Coronado Bridge", "Silver Strand", "Ferry Landing"],
        neighborhoods: ["Coronado Village", "Coronado Cays", "Silver Strand", "Coronado Shores"],
        zipCodes: ["92118"],
        cleaningChallenges: [
            { title: "Premium Material Care", description: "Coronado homes feature marble, exotic hardwoods, custom finishes requiring specialized care." },
            { title: "Salt Air Intensity", description: "Island living means constant salt exposure on all surfaces." }
        ],
        propertyManagerContent: "Managing Coronado vacation rentals? We provide premium service matching this market's expectations."
    },
    {
        name: "Mission Hills",
        slug: "mission-hills",
        type: "Urban Core",
        description: "Professional cleaning for Mission Hills' historic estates and charming homes.",
        tagline: "Historic elegance, modern cleanliness.",
        detailedContent: `Mission Hills offers some of San Diego's most beautiful historic architecture—Spanish Colonial estates, Craftsman masterpieces, and charming cottages with stunning canyon views.

Our team understands historic home care. We know original hardwoods, vintage tile, and antique fixtures require specific products and techniques.`,
        keywords: ["House cleaning Mission Hills", "Maid service Mission Hills SD", "Mission Hills cleaning services"],
        popularServiceIds: ["deep-cleaning", "standard", "move-in-out"],
        housingTypes: ["Spanish Colonial Estates", "Craftsman Homes", "Historic Cottages", "Canyon View Properties"],
        landmarks: ["Presidio Park", "Fort Stockton Line", "Pioneer Park", "Washington Street"],
        neighborhoods: ["Middletown", "Reynard Village", "Mission Hills Proper", "Hillside"],
        zipCodes: ["92103", "92110"],
        cleaningChallenges: [
            { title: "Historic Material Expertise", description: "Original hardwoods, vintage tile, hand-painted details—we clean them properly." },
            { title: "Canyon Dust", description: "Homes overlooking canyons collect extra dust, especially during Santa Ana winds." }
        ],
        propertyManagerContent: "Managing historic properties in Mission Hills? We understand the care these homes require."
    },
    {
        name: "Mission Valley",
        slug: "mission-valley",
        type: "Urban Core",
        description: "Efficient cleaning services for Mission Valley's condos and apartments.",
        tagline: "Central San Diego, professionally maintained.",
        detailedContent: `Mission Valley sits at San Diego's crossroads—convenient to everywhere, home to professionals who value efficiency. From Fashion Valley condos to Hazard Center apartments, residents here need reliable cleaning that fits busy schedules.`,
        keywords: ["House cleaning Mission Valley", "Maid service Mission Valley SD"],
        popularServiceIds: ["standard", "move-in-out", "deep-cleaning"],
        housingTypes: ["High-Rise Condos", "Garden Apartments", "Townhomes", "New Construction"],
        landmarks: ["Fashion Valley Mall", "Hazard Center", "Mission Valley YMCA", "Qualcomm Stadium site"],
        neighborhoods: ["Fashion Valley", "Hazard Center", "Hotel Circle", "Riverwalk"],
        zipCodes: ["92108", "92120"],
        cleaningChallenges: [
            { title: "High-Rise Living", description: "Condo cleaning with attention to building protocols and elevator access." },
            { title: "New Construction", description: "Many newer buildings with modern finishes requiring appropriate care." }
        ],
        propertyManagerContent: "Managing Mission Valley rentals? We provide efficient, reliable turnover service."
    },
    {
        name: "Ocean Beach",
        slug: "ocean-beach",
        type: "Coastal",
        description: "Laid-back cleaning services for OB's beach cottages and eclectic homes.",
        tagline: "OB vibes, professional results.",
        detailedContent: `Ocean Beach keeps it real—and so do we. This bohemian beach community features everything from vintage beach cottages to Sunset Cliffs estates. We adapt to OB's unique character.`,
        keywords: ["House cleaning Ocean Beach", "Maid service OB San Diego", "Ocean Beach cleaning"],
        popularServiceIds: ["standard", "vacation-rental", "deep-cleaning"],
        housingTypes: ["Beach Cottages", "Sunset Cliffs Estates", "Bungalows", "Multi-Unit Properties"],
        landmarks: ["Ocean Beach Pier", "Sunset Cliffs", "Newport Avenue", "Dog Beach"],
        neighborhoods: ["Sunset Cliffs", "Point Loma Heights", "OB Pier Area", "Voltaire District"],
        zipCodes: ["92107"],
        cleaningChallenges: [
            { title: "Coastal Conditions", description: "Salt air and beach sand are OB constants. We handle both." },
            { title: "Vintage Homes", description: "Many OB homes are older with character features needing care." }
        ],
        propertyManagerContent: "Managing OB vacation rentals? We provide reliable beachside turnover service."
    },
    {
        name: "University City",
        slug: "university-city",
        type: "Suburban",
        description: "Professional cleaning near UCSD and the UTC area.",
        tagline: "Academic excellence, spotless homes.",
        detailedContent: `University City combines the energy of UCSD with established family neighborhoods and the modern convenience of UTC. From Costa Verde condos to family homes near Doyle Park, we serve the whole community.`,
        keywords: ["House cleaning University City", "Maid service UTC San Diego", "UC San Diego area cleaning"],
        popularServiceIds: ["standard", "move-in-out", "deep-cleaning"],
        housingTypes: ["Family Homes", "Modern Condos", "Student Housing", "New Construction"],
        landmarks: ["UCSD", "UTC Mall", "Costa Verde", "Nobel Drive", "Doyle Park"],
        neighborhoods: ["UTC", "Costa Verde", "South University City", "Governor Park"],
        zipCodes: ["92122", "92121"],
        cleaningChallenges: [
            { title: "Student Turnovers", description: "Academic calendar creates peak move-in/out seasons. We handle the volume." },
            { title: "New Construction", description: "Many newer homes with contemporary finishes." }
        ],
        propertyManagerContent: "Managing rentals near UCSD? We specialize in academic-year turnovers."
    },
    // Remaining existing locations
    {
        name: "Bay Park",
        slug: "bay-park",
        type: "Suburban",
        description: "Reliable cleaning for Bay Park's family homes and bay-view properties.",
        tagline: "Bay views, spotless interiors.",
        detailedContent: `Bay Park offers the best of both worlds—proximity to the bay and beach with a quiet, family-friendly atmosphere. We serve homes throughout this convenient neighborhood.`,
        keywords: ["House cleaning Bay Park", "Maid service Bay Park SD"],
        popularServiceIds: ["standard", "deep-cleaning", "move-in-out"],
        housingTypes: ["Single-Family Homes", "Bay View Properties", "Mid-Century Homes"],
        landmarks: ["Mission Bay", "Clairemont Drive", "Bay Park Elementary"],
        neighborhoods: ["Bay Ho", "Clairemont Mesa East", "Linda Vista border"],
        zipCodes: ["92117"],
        cleaningChallenges: [
            { title: "Coastal Proximity", description: "Near the bay means salt air still affects homes." }
        ],
        propertyManagerContent: "Managing Bay Park rentals? We provide consistent family-home cleaning."
    },
    {
        name: "Bonita",
        slug: "bonita",
        type: "South Bay",
        description: "Professional cleaning for Bonita's established homes and horse properties.",
        tagline: "Country living, city-quality cleaning.",
        detailedContent: `Bonita offers a semi-rural feel with larger lots and established homes. Many properties feature unique needs from equestrian facilities to extensive outdoor living areas.`,
        keywords: ["House cleaning Bonita", "Maid service Bonita San Diego"],
        popularServiceIds: ["deep-cleaning", "standard", "move-in-out"],
        housingTypes: ["Ranch Homes", "Estate Properties", "Horse Properties", "Custom Homes"],
        landmarks: ["Sweetwater Regional Park", "Bonita Golf Course", "Sunnyside"],
        neighborhoods: ["Sunnyside", "Bonita Long Canyon", "Central Bonita"],
        zipCodes: ["91902"],
        cleaningChallenges: [
            { title: "Large Properties", description: "Bigger homes mean more cleaning—we have the team for it." },
            { title: "Rural Dust", description: "Larger lots and unpaved areas mean more dust control." }
        ],
        propertyManagerContent: "Managing Bonita estate rentals? We handle large-home cleaning professionally."
    },
    {
        name: "Rancho Santa Fe",
        slug: "rancho-santa-fe",
        type: "Coastal",
        description: "Estate-level cleaning for Rancho Santa Fe's luxury properties.",
        tagline: "Where estates receive estate-level care.",
        detailedContent: `Rancho Santa Fe represents San Diego's ultimate in luxury living. These estate properties require exceptional attention and discretion. Our team provides white-glove service.`,
        keywords: ["House cleaning Rancho Santa Fe", "Estate cleaning RSF", "Luxury maid service Rancho Santa Fe"],
        popularServiceIds: ["deep-cleaning", "standard", "post-construction"],
        housingTypes: ["Luxury Estates", "Equestrian Properties", "Golf Course Homes", "Custom Mansions"],
        landmarks: ["The Inn at Rancho Santa Fe", "Rancho Santa Fe Golf Club", "Fairbanks Ranch"],
        neighborhoods: ["Fairbanks Ranch", "Cielo", "The Covenant", "Del Rayo Estates"],
        zipCodes: ["92067", "92091"],
        cleaningChallenges: [
            { title: "Estate-Scale Cleaning", description: "Large properties with premium finishes throughout." },
            { title: "High Standards", description: "RSF homeowners expect perfection. We deliver." }
        ],
        propertyManagerContent: "Managing RSF estates? We provide the discretion and quality these properties demand."
    },
    // ============================================
    // PRIORITY 2: NEW STRATEGIC LOCATIONS
    // ============================================
    {
        name: "Poway",
        slug: "poway",
        type: "North Inland",
        description: "Estate and family home cleaning throughout Poway—The City in the Country.",
        tagline: "The City in the Country deserves country-club clean.",
        detailedContent: `Poway anchors San Diego's North Inland corridor with large custom homes and estate properties. From Green Valley ranches to Heritage Estates mansions, we understand what Poway homeowners expect.

The 92064 zip code boasts one-third of households earning over $200,000 annually—families who value their time and demand consistent quality.`,
        keywords: ["House cleaning Poway", "Maid service Poway CA", "Poway estate cleaning", "Green Valley cleaning"],
        popularServiceIds: ["deep-cleaning", "standard", "move-in-out"],
        housingTypes: ["Custom Estates", "Ranch Properties", "Equestrian Homes", "Large Family Homes"],
        landmarks: ["Lake Poway", "Blue Sky Reserve", "Old Poway Park", "Stoneridge Country Club"],
        neighborhoods: ["Green Valley", "Heritage Estates", "Old Coach Estates", "Rancho Arbolitos", "High Valley"],
        zipCodes: ["92064"],
        cleaningChallenges: [
            { title: "Estate-Scale Properties", description: "Homes frequently exceed 3,500 sq ft with cathedral ceilings and custom features." },
            { title: "Rural Dust", description: "Unpaved roads and horse trails mean constant dust control is essential." },
            { title: "High Dusting", description: "Vaulted ceilings and exposed beams require specialized techniques." }
        ],
        propertyManagerContent: "Managing Poway estate rentals? We provide the detail-oriented service these properties require."
    },
    {
        name: "Scripps Ranch",
        slug: "scripps-ranch",
        type: "North Inland",
        description: "Executive-level cleaning for Scripps Ranch's premier family community.",
        tagline: "Where San Diego's executives come home to perfection.",
        detailedContent: `Scripps Ranch is arguably the most desirable North Inland community—and the ideal territory for recurring cleaning service. With 44% of households earning over $200,000, this dual-income professional stronghold demands exceptional service.

From Stonebridge Estates' massive newer homes to the eucalyptus-shaded Villages, we've earned the trust of Scripps Ranch families.`,
        keywords: ["House cleaning Scripps Ranch", "Maid service Scripps Ranch", "Stonebridge Estates cleaning"],
        popularServiceIds: ["standard", "deep-cleaning", "vacation-rental"],
        housingTypes: ["Large Custom Homes", "Newer Construction", "Executive Family Homes", "Semi-Custom Developments"],
        landmarks: ["Lake Miramar", "Scripps Ranch Library", "Stonebridge Country Club", "Scripps Ranch Community Park"],
        neighborhoods: ["Stonebridge Estates", "Scripps Ranch Villages", "Old Scripps Ranch", "Scripps Highlands"],
        zipCodes: ["92131"],
        cleaningChallenges: [
            { title: "Eucalyptus Debris", description: "Old Scripps Ranch battles constant eucalyptus leaves and oily residue. We include entryway and porch sweeps." },
            { title: "Fire Season Ash", description: "Proximity to wildlands means seasonal ash infiltration requiring thorough surface cleaning." },
            { title: "Large Square Footage", description: "Homes range from 3,500 to over 5,000 sq ft—priced appropriately for the work required." }
        ],
        propertyManagerContent: "Managing Scripps Ranch rentals? We understand what this community expects and deliver consistently."
    },
    {
        name: "Rancho Bernardo",
        slug: "rancho-bernardo",
        type: "North Inland",
        description: "Reliable cleaning for Rancho Bernardo's diverse community—from families to active seniors.",
        tagline: "RB's trusted cleaning partner for every stage of life.",
        detailedContent: `Rancho Bernardo balances established family neighborhoods with thriving 55+ communities. Whether you're raising a family in The Trails or enjoying retirement in Seven Oaks, we adapt our service to your needs.`,
        keywords: ["House cleaning Rancho Bernardo", "Maid service RB San Diego", "Rancho Bernardo cleaning"],
        popularServiceIds: ["standard", "deep-cleaning", "move-in-out"],
        housingTypes: ["Family Homes", "55+ Community Homes", "Golf Course Properties", "Custom Ranch Homes"],
        landmarks: ["Rancho Bernardo Community Park", "Westwood Club", "Bernardo Heights Country Club"],
        neighborhoods: ["Seven Oaks", "Oaks North", "The Trails", "Westwood", "High Country West"],
        zipCodes: ["92128", "92127"],
        cleaningChallenges: [
            { title: "Senior-Friendly Service", description: "Our team is trained to work respectfully with clients who are home during cleaning." },
            { title: "High Frequency Needs", description: "Many 55+ residents prefer weekly cleaning for health and maintenance reasons." }
        ],
        propertyManagerContent: "Managing RB rentals? We serve this diverse community with consistent quality."
    },
    {
        name: "4S Ranch",
        slug: "4s-ranch",
        type: "North Inland",
        description: "Efficient cleaning for 4S Ranch's master-planned community homes.",
        tagline: "Master-planned living, masterful cleaning.",
        detailedContent: `4S Ranch and Del Sur represent San Diego's premier master-planned communities. Younger families fill these newer homes—families who value modern, efficient service and digital convenience.`,
        keywords: ["House cleaning 4S Ranch", "Maid service Del Sur", "4S Ranch cleaning San Diego"],
        popularServiceIds: ["standard", "vacation-rental", "move-in-out"],
        housingTypes: ["Master-Planned Homes", "New Construction", "Townhomes", "Single-Family Homes"],
        landmarks: ["4S Ranch Sports Park", "Del Sur Town Center", "Pacific Highlands Ranch"],
        neighborhoods: ["Del Sur", "Santa Fe Valley", "Santaluz", "Pacific Highlands Ranch"],
        zipCodes: ["92127", "92130"],
        cleaningChallenges: [
            { title: "New Construction Finishes", description: "Modern LVP floors, quartz counters, and contemporary materials need appropriate care." },
            { title: "Young Family Needs", description: "Homes with kids require extra attention to high-touch surfaces and play areas." }
        ],
        propertyManagerContent: "Managing 4S Ranch rentals? We offer efficient, professional turnover service."
    },
    {
        name: "Eastlake",
        slug: "eastlake",
        type: "South Bay",
        description: "Premium cleaning for Eastlake's upscale master-planned homes.",
        tagline: "South Bay's premier community, professionally maintained.",
        detailedContent: `Eastlake represents Chula Vista's most desirable addresses. Eastlake Woods and Rolling Hills Ranch feature large custom homes with discerning owners who expect hotel-style cleanliness.`,
        keywords: ["House cleaning Eastlake", "Maid service Eastlake Chula Vista", "Eastlake Woods cleaning"],
        popularServiceIds: ["deep-cleaning", "standard", "vacation-rental"],
        housingTypes: ["Custom Homes", "Gated Community Homes", "Large Family Homes", "Golf Course Properties"],
        landmarks: ["Eastlake Country Club", "Rolling Hills Ranch Park", "Otay Lakes"],
        neighborhoods: ["Eastlake Woods", "Rolling Hills Ranch", "Eastlake Greens", "Eastlake Vistas"],
        zipCodes: ["91914", "91915"],
        cleaningChallenges: [
            { title: "Premium Expectations", description: "Eastlake homeowners expect detail-oriented, thorough service." },
            { title: "Large Properties", description: "Many homes exceed 3,000 sq ft with formal and informal living areas." }
        ],
        propertyManagerContent: "Managing Eastlake rentals? We provide the quality this upscale market demands."
    },
    {
        name: "Otay Ranch",
        slug: "otay-ranch",
        type: "South Bay",
        description: "Modern cleaning services for Otay Ranch's growing community.",
        tagline: "San Diego's newest community, professionally cleaned.",
        detailedContent: `Otay Ranch is one of San Diego's fastest-growing communities. From the modern Millenia district to established Winding Walk, we help new residents settle into clean, fresh homes.`,
        keywords: ["House cleaning Otay Ranch", "Maid service Otay Ranch Chula Vista"],
        popularServiceIds: ["standard", "move-in-out", "deep-cleaning"],
        housingTypes: ["New Construction", "Townhomes", "Condos", "Single-Family Homes"],
        landmarks: ["Otay Ranch Town Center", "Millenia", "Otay Ranch Community Park"],
        neighborhoods: ["Millenia", "Winding Walk", "Otay Ranch Village", "Escaya"],
        zipCodes: ["91915", "91913"],
        cleaningChallenges: [
            { title: "New Construction", description: "New homes sometimes need post-construction detail work." },
            { title: "Move-In Season", description: "Growing community means constant move-in/out demand." }
        ],
        propertyManagerContent: "Managing Otay Ranch rentals? We specialize in turnover service for this active market."
    },
    {
        name: "La Mesa",
        slug: "la-mesa",
        type: "East County",
        description: "Quality cleaning for La Mesa's diverse neighborhoods and village charm.",
        tagline: "The Jewel of the Hills, brilliantly clean.",
        detailedContent: `La Mesa blends small-town charm with urban convenience. From the walkable Village to family homes near Lake Murray, we serve La Mesa's diverse community with consistent quality.`,
        keywords: ["House cleaning La Mesa", "Maid service La Mesa CA", "La Mesa Village cleaning"],
        popularServiceIds: ["standard", "deep-cleaning", "move-in-out"],
        housingTypes: ["Historic Village Homes", "Family Properties", "Mid-Century Homes", "Newer Developments"],
        landmarks: ["La Mesa Village", "Lake Murray", "Grossmont Center", "Mount Helix"],
        neighborhoods: ["The Village", "Grossmont", "Lake Murray", "Mount Nebo"],
        zipCodes: ["91942", "91941"],
        cleaningChallenges: [
            { title: "Historic Homes", description: "Village area features older homes with character details." },
            { title: "East County Heat", description: "Warmer inland climate means dust and pollen accumulate faster." }
        ],
        propertyManagerContent: "Managing La Mesa rentals? We provide reliable service for this established market."
    },
    {
        name: "Encinitas",
        slug: "encinitas",
        type: "Coastal",
        description: "Eco-conscious cleaning for Encinitas's health-focused coastal community.",
        tagline: "Green cleaning for the green community.",
        detailedContent: `Encinitas residents care about health, wellness, and the environment. Our eco-friendly cleaning options use non-toxic products that align with Encinitas values while delivering spotless results.`,
        keywords: ["House cleaning Encinitas", "Eco cleaning Encinitas", "Green maid service Encinitas", "Leucadia cleaning"],
        popularServiceIds: ["standard", "vacation-rental", "deep-cleaning"],
        housingTypes: ["Beach Properties", "Estate Homes", "Cottages", "Farm Properties"],
        landmarks: ["Moonlight Beach", "Self Realization Fellowship", "Leucadia", "San Diego Botanic Garden"],
        neighborhoods: ["Leucadia", "Cardiff-by-the-Sea", "Olivenhain", "Old Encinitas"],
        zipCodes: ["92024"],
        cleaningChallenges: [
            { title: "Eco-Friendly Products", description: "We offer non-toxic, environmentally responsible cleaning options." },
            { title: "Coastal + Rural Mix", description: "From beach cottages to Olivenhain estates, we adapt our approach." }
        ],
        propertyManagerContent: "Managing Encinitas vacation rentals? We provide reliable, eco-conscious turnover service."
    },
    // Remaining existing locations to preserve backlinks
    {
        name: "Lemon Grove",
        slug: "lemon-grove",
        type: "East County",
        description: "Affordable quality cleaning for Lemon Grove families.",
        tagline: "Best climate on Earth, spotless homes.",
        detailedContent: `Lemon Grove offers affordable family living in East County. We provide reliable, quality cleaning at fair prices for this diverse community.`,
        keywords: ["House cleaning Lemon Grove", "Maid service Lemon Grove SD"],
        popularServiceIds: ["standard", "move-in-out", "deep-cleaning"],
        housingTypes: ["Single-Family Homes", "Townhomes", "Multi-Family Properties"],
        landmarks: ["Lemon Grove Main Street", "H Street Trolley Station"],
        neighborhoods: ["Central Lemon Grove", "Encanto border", "Mount Hope area"],
        zipCodes: ["91945"],
        cleaningChallenges: [
            { title: "Family-Focused Service", description: "Many young families appreciate our thorough, reliable approach." }
        ],
        propertyManagerContent: "Managing Lemon Grove rentals? We offer reliable turnover service."
    },
    {
        name: "Granite Hills",
        slug: "granite-hills",
        type: "East County",
        description: "Rugged luxury cleaning for Granite Hills' custom estates and large lots.",
        tagline: "East County's premier address, perfectly maintained.",
        detailedContent: `Granite Hills represents a distinct step up in East County living. With home values often exceeding $1 million and large lots accommodating RVs, boats, and horses, this neighborhood demands a specific kind of detailed care.

Our Granite Hills team understands the "rugged luxury" lifestyle. We know that larger properties accumulate more dust from unpaved areas, and that custom estates often feature high glass walls to capture the views. We bring the manpower and equipment to handle these substantial properties efficiently.`,
        keywords: ["House cleaning Granite Hills", "Estate cleaning El Cajon", "Granite Hills maid service", "Singing Hills cleaning"],
        popularServiceIds: ["deep-cleaning", "standard", "move-in-out"],
        housingTypes: ["Custom Estates", "Ranch Properties", "Golf Course Homes", "Large Lot Homes"],
        landmarks: ["Singing Hills Golf Resort", "Kennedy Park", "Valhalla High School"],
        neighborhoods: ["Singing Hills", "Vista Grande", "Granite Hills Center"],
        zipCodes: ["92019"],
        cleaningChallenges: [
            { title: "Rural Dust", description: "Large lots and unpaved areas mean higher dust accumulation. We recommend our 'Deep Dusting' protocols." },
            { title: "High Glass Volume", description: "Many estates feature floor-to-ceiling windows to capture views. We offer interior glass detailing." }
        ],
        propertyManagerContent: "Managing Granite Hills estates? We provide the reliable, high-end service these unique properties require."
    },
    {
        name: "Allied Gardens",
        slug: "allied-gardens",
        type: "East County",
        description: "Quality cleaning for Allied Gardens' established family neighborhood.",
        tagline: "Mid-century charm, modern cleanliness.",
        detailedContent: `Allied Gardens offers quiet, established family living near SDSU. These mid-century homes feature character details that deserve careful attention.`,
        keywords: ["House cleaning Allied Gardens", "Maid service Allied Gardens SD"],
        popularServiceIds: ["standard", "deep-cleaning", "move-in-out"],
        housingTypes: ["Mid-Century Homes", "Ranch-Style Properties", "Updated Family Homes"],
        landmarks: ["Navajo Road", "Allied Gardens Park", "Admiral Baker Golf Course"],
        neighborhoods: ["Del Cerro", "Grantville", "Central Allied Gardens"],
        zipCodes: ["92120"],
        cleaningChallenges: [
            { title: "Mid-Century Details", description: "Period features deserve appropriate care and cleaning." }
        ],
        propertyManagerContent: "Managing Allied Gardens rentals? We provide consistent family-home service."
    },
    {
        name: "College Area",
        slug: "college-area-sd",
        type: "East County",
        description: "Flexible cleaning services near SDSU and College Area neighborhoods.",
        tagline: "Aztec territory, professionally clean.",
        detailedContent: `The College Area serves SDSU students, faculty, and established families alike. We offer flexible scheduling and services that fit diverse household needs.`,
        keywords: ["House cleaning College Area SD", "Maid service SDSU area", "College Area cleaning"],
        popularServiceIds: ["standard", "move-in-out", "deep-cleaning"],
        housingTypes: ["Student Rentals", "Family Homes", "Condos", "Multi-Unit Properties"],
        landmarks: ["SDSU", "Montezuma Road", "College Avenue"],
        neighborhoods: ["SDSU area", "Montezuma Mesa", "El Cerrito", "Rolando"],
        zipCodes: ["92115", "92182"],
        cleaningChallenges: [
            { title: "Academic Calendar", description: "We handle peak move-in/out demand during semester changes." },
            { title: "Flexible Scheduling", description: "Students and professors need flexible timing—we accommodate." }
        ],
        propertyManagerContent: "Managing student rentals? We specialize in academic-calendar turnovers."
    },
    {
        name: "Rolando Village",
        slug: "rolando-village-san-diego",
        type: "East County",
        description: "Neighborhood cleaning for Rolando Village's close-knit community.",
        tagline: "Small-town feel, professional service.",
        detailedContent: `Rolando Village offers a close-knit community feel with established family homes. We provide reliable service that neighbors recommend to each other.`,
        keywords: ["House cleaning Rolando Village", "Maid service Rolando San Diego"],
        popularServiceIds: ["standard", "deep-cleaning", "move-in-out"],
        housingTypes: ["Single-Family Homes", "Bungalows", "Updated Properties"],
        landmarks: ["Rolando Park", "Clay Avenue", "College Area border"],
        neighborhoods: ["Rolando Park", "Central Rolando", "El Cerrito border"],
        zipCodes: ["92115"],
        cleaningChallenges: [
            { title: "Referral-Based Community", description: "We earn trust one home at a time in this close-knit area." }
        ],
        propertyManagerContent: "Managing Rolando rentals? We provide reliable, neighbor-recommended service."
    },
    {
        name: "Escondido",
        slug: "escondido",
        type: "North Inland",
        description: "Estate cleaning for South Escondido's hidden luxury neighborhoods.",
        tagline: "Hidden wealth, clearly clean.",
        detailedContent: `Escondido is often underestimated, but areas like Felicita and the San Pasqual Valley hide some of San Diego's most impressive estates. These large, wooded lots offer privacy and space that rivals Rancho Santa Fe.

We find that homeowners here often struggle to get reliable "San Diego" contractors to travel this far inland. Metla considers South Escondido a core territory. We bring consistent, high-quality service to your doorstep, whether you're near Lake Hodges or tucked into the San Pasqual Valley.`,
        keywords: ["House cleaning Escondido", "Maid service Felicita", "San Pasqual Valley cleaning", "South Escondido cleaning"],
        popularServiceIds: ["deep-cleaning", "standard", "move-in-out"],
        housingTypes: ["Custom Estates", "Vineyard Properties", "Large Wooded Lots", "Ranch Homes"],
        landmarks: ["San Diego Zoo Safari Park", "Lake Hodges", "Felicita County Park", "Orfila Vineyards"],
        neighborhoods: ["Felicita", "San Pasqual Valley", "South Escondido", "Kit Carson"],
        zipCodes: ["92025", "92029"],
        cleaningChallenges: [
            { title: "Agricultural Dust", description: "Proximity to vineyards and orchards means specific dust control needs." },
            { title: "Remote Access", description: "We plan our routes effectively to ensure on-time arrival for these tucked-away properties." }
        ],
        propertyManagerContent: "Managing Escondido estate rentals? We provide the reliability you've been missing."
    },
    {
        name: "La Presa",
        slug: "la-presa",
        type: "East County",
        description: "Quality cleaning for La Presa's established East County homes.",
        tagline: "East County value, quality service.",
        detailedContent: `La Presa offers affordable East County living with established family homes. We provide quality cleaning at fair prices for this community.`,
        keywords: ["House cleaning La Presa", "Maid service La Presa SD"],
        popularServiceIds: ["standard", "move-in-out", "deep-cleaning"],
        housingTypes: ["Single-Family Homes", "Ranch Properties", "Multi-Family Units"],
        landmarks: ["Sweetwater Reservoir", "La Presa Lane", "Spring Valley border"],
        neighborhoods: ["Central La Presa", "Spring Valley", "Jamacha area"],
        zipCodes: ["91977"],
        cleaningChallenges: [
            { title: "East County Conditions", description: "Warmer, drier climate means regular dust control." }
        ],
        propertyManagerContent: "Managing La Presa rentals? We provide reliable East County service."
    },
    {
        name: "Del Mar",
        slug: "del-mar",
        type: "Coastal",
        description: "Ultra-premium cleaning for Del Mar's beachfront estates and village homes.",
        tagline: "Where luxury meets the marine layer.",
        detailedContent: `Del Mar is San Diego's most exclusive coastal enclave. From the racetrack to the beach, homes here demand a level of service that goes beyond standard cleaning. We understand the specific needs of high-value coastal properties.

Our team is trained in 'Salt Air Defense'—meticulously removing the sticky marine layer residue that dulls windows and corrodes tracks. We use specialized, non-abrasive techniques to protect your custom finishes.`,
        keywords: ["House cleaning Del Mar", "Maid service Del Mar CA", "Luxury cleaning Del Mar"],
        popularServiceIds: ["deep-cleaning", "standard", "vacation-rental"],
        housingTypes: ["Oceanfront Estates", "Village Cottages", "Custom Homes"],
        landmarks: ["Del Mar Racetrack", "Powerhouse Park", "Dog Beach", "Del Mar Plaza"],
        neighborhoods: ["The Village", "Beach Colony", "Del Mar Heights", "Via De La Valle"],
        zipCodes: ["92014"],
        cleaningChallenges: [
            { title: "Salt Air Corrosion", description: "Marine layer leaves sticky residue. We wipe down window tracks and exterior metals." },
            { title: "High-Value Surfaces", description: "We use pH-neutral cleaners safe for marble, travertine, and custom wood." }
        ],
        propertyManagerContent: "Managing Del Mar vacation rentals? We provide the white-glove turnover service your guests expect."
    },
    {
        name: "Solana Beach",
        slug: "solana-beach",
        type: "Coastal",
        description: "Eco-conscious cleaning for Solana Beach's design district and coastal homes.",
        tagline: "Natural beauty, naturally clean.",
        detailedContent: `Solana Beach values sustainability and style. From the Cedros Design District to the bluffs, this community prioritizes health and environmental responsibility. Our eco-friendly cleaning service aligns perfectly with these values.

We use non-toxic, organic products that are safe for your family, pets, and the ocean. Whether you have a modern condo or a beach cottage, we deliver a spotless home without harsh chemicals.`,
        keywords: ["House cleaning Solana Beach", "Eco cleaning Solana Beach", "Green maid service Solana Beach"],
        popularServiceIds: ["standard", "deep-cleaning", "vacation-rental"],
        housingTypes: ["Beach Cottages", "Modern Condos", "Bluff Homes"],
        landmarks: ["Fletcher Cove", "Cedros Design District", "Belly Up Tavern"],
        neighborhoods: ["Cedros", "Solana Circle", "Lomas Santa Fe"],
        zipCodes: ["92075"],
        cleaningChallenges: [
            { title: "Eco-Friendly Mandate", description: "We strictly use non-toxic, green cleaning products." },
            { title: "Sand Management", description: "We focus on entryways and floors to keep the beach outside." }
        ],
        propertyManagerContent: "Managing Solana Beach rentals? We offer eco-friendly turnovers that attract health-conscious guests."
    },
    {
        name: "Mt. Helix",
        slug: "mt-helix",
        type: "East County",
        description: "Specialized estate cleaning for Mt. Helix's unique topography and custom homes.",
        tagline: "Elevated living, elevated standards.",
        detailedContent: `Mt. Helix is the crown jewel of East County, offering panoramic views and unique architectural masterpieces. We specialize in the logistical challenges of cleaning these hillside estates.

Our teams are equipped with backpack vacuums and portable caddies to navigate steep driveways and stairs efficiently. We understand that your custom home requires a detailed, careful approach.`,
        keywords: ["House cleaning Mt Helix", "Estate cleaning La Mesa", "Mt Helix maid service"],
        popularServiceIds: ["deep-cleaning", "standard", "move-in-out"],
        housingTypes: ["Custom Estates", "Mid-Century Modern", "Hillside Homes"],
        landmarks: ["Mt. Helix Park", "Amphitheater", "Grossmont"],
        neighborhoods: ["Mt. Helix", "Grossmont", "Calavo Gardens"],
        zipCodes: ["91941"],
        cleaningChallenges: [
            { title: "Logistical Access", description: "Our teams are equipped for steep driveways and stairs." },
            { title: "Custom Architecture", description: "We have experience cleaning unique, custom-built homes." }
        ],
        propertyManagerContent: "Managing Mt. Helix estates? We provide the specialized care these unique properties require."
    }
];
