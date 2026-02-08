/**
 * Site Configuration - "Master Template" for Franchise Locations
 * 
 * ⚠️ THIS IS A TEMPLATE FILE WITH PLACEHOLDER VALUES
 * 
 * To deploy a new franchise:
 * 1. Duplicate this entire project folder
 * 2. Replace ALL [PLACEHOLDER] values below with real data
 * 3. Search for "TODO:" comments throughout the codebase
 * 4. Regenerate sitemap.xml and robots.txt with new domain
 * 
 * @version 1.0.0
 */

// ============================================
// SITE CONFIGURATION
// ============================================

export const SITE_CONFIG = {
    // ============================================
    // BUSINESS IDENTITY
    // ============================================
    companyName: "Metla House Cleaning",

    // ============================================
    // CONTACT INFORMATION
    // ============================================
    phone: "(707) 414-8930",
    phoneIntl: "+1-707-414-8930",
    email: "metlacleanteam@gmail.com",

    // ============================================
    // ADDRESS
    // ============================================
    address: {
        street: "330 13th Street",
        city: "San Diego",
        state: "CA",
        stateFullName: "California",
        zip: "92101",
        full: "330 13th Street, San Diego, CA 92101",
    },

    // Coordinates for schema.org and maps (Downtown San Diego)
    coordinates: {
        latitude: 32.7157,
        longitude: -117.1611,
    },

    // ============================================
    // REGIONAL TERMS
    // ============================================
    regional: {
        // Primary city name used in headlines and SEO
        primaryCity: "San Diego",

        // Regional descriptor
        region: "San Diego County",

        // Counties/areas served
        counties: ["San Diego County"],

        // Marketing tagline
        marketingTagline: "Coastal & Inland Communities",

        // Local city nickname
        cityNickname: "America's Finest City",
    },

    // ============================================
    // LOCATION TYPE CATEGORIES
    // ============================================
    locationTypes: {
        // Premium/coastal areas
        premium: "Coastal",
        // Suburban communities  
        suburban: "Suburban",
        // Downtown/urban areas
        urban: "Urban Core",
        // Inland areas
        inland: "North Inland",
        // South Bay areas
        southBay: "South Bay",
        // East County
        eastCounty: "East County",
    } as const,

    // ============================================
    // CLIMATE & ENVIRONMENTAL CONTEXT
    // ============================================
    climate: {
        // Climate type for content generation
        type: "Mediterranean",

        // Average humidity
        averageHumidity: "65%",

        // Ocean/body of water name
        oceanName: "Pacific Ocean",

        // Unique local cleaning challenges
        challenges: [
            {
                name: "Eucalyptus Debris",
                description: "San Diego's abundant eucalyptus trees shed oily leaves and bark that track into homes, leaving residue on floors and entryways.",
            },
            {
                name: "Marine Layer & Salt Air",
                description: "Coastal communities experience salt air that drifts inland, causing buildup on windows and outdoor surfaces.",
            },
            {
                name: "Fire Season Ash",
                description: "During wildfire season, fine ash particles infiltrate even well-sealed homes, requiring thorough surface cleaning and air quality attention.",
            },
            {
                name: "Construction Dust",
                description: "San Diego's ongoing development means fine construction dust travels into nearby residences, settling on all surfaces.",
            },
        ],

        // Seasonal considerations
        seasonalNote: "year-round mild weather with occasional Santa Ana wind events",
    },

    // ============================================
    // ORIGIN STORY
    // ============================================
    originStory: {
        enabled: true,
        originCity: "San Diego",
        originDescription: "Founded by frustrated property managers who demanded perfection",
        expansionNarrative: "3+ years of trusted cleaning excellence serving San Diego's diverse neighborhoods.",
    },

    // ============================================
    // URLS & LINKS
    // ============================================
    baseUrl: "https://metlahousecleaningsandiego.com",
    bookingLink: "/booking",

    // ============================================
    // ANALYTICS
    // ============================================
    analytics: {
        googleId: "",
        gtmId: "",
        facebookPixelId: "",
    },

    // ============================================
    // SOCIAL PROFILES (Trust Signals)
    // ============================================
    socialProfiles: {
        gmb: "https://maps.app.goo.gl/2ZCMBp8sQ15oC4YTA", // Verified metlahousecleaningsandiego.com
        thumbtack: "https://www.thumbtack.com/ca/san-diego/house-cleaning/metla-house-cleaning/service/469431333977808900", // Verified 4.7 stars
        bbb: "https://www.bbb.org/us/ca/san-diego/profile/house-cleaning/metla-house-cleaning-san-diego-1126-1000113404", // Verified A+ Accredited
        // facebook: "",
        // yelp: "",
        // instagram: "",
    },

    // ============================================
    // SOCIAL & OG IMAGES
    // ============================================
    social: {
        ogImage: "/images/og-san-diego.jpg",
        ogImageWidth: 1200,
        ogImageHeight: 630,
        logoUrl: "/images/logo.png",
    },

    // ============================================
    // SEO DEFAULTS
    // ============================================
    seo: {
        siteTitle: "Metla House Cleaning San Diego | Premium Cleaning Services",
        metaDescription: "San Diego's trusted house cleaning service. From La Jolla to Chula Vista, we provide deep cleaning, standard cleaning, vacation rental turnovers, and move-in/out cleaning. Fully insured professionals.",
        keywords: [
            "house cleaning San Diego",
            "maid service San Diego",
            "deep cleaning San Diego",
            "vacation rental cleaning San Diego",
            "post-construction cleaning San Diego",
            "move out cleaning San Diego",
            "La Jolla house cleaning",
            "Pacific Beach maid service",
        ],
    },

    // ============================================
    // SOCIAL PROOF
    // ============================================
    socialProof: {
        aggregateRating: {
            ratingValue: "5.0",
            ratingCount: "47",
        },
        foundingDate: "2023",
        employeeCount: {
            min: 5,
            max: 15,
        },
    },

    // ============================================
    // BUSINESS HOURS
    // ============================================
    businessHours: {
        days: "Monday - Sunday",
        open: "8:00 AM",
        close: "7:00 PM",
        display: "Mon-Sun 8am-7pm",
        daysOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opensTime: "08:00",
        closesTime: "19:00",
    },

    // ============================================
    // FEATURED NEIGHBORHOODS
    // ============================================
    featuredNeighborhoods: [
        { name: "La Jolla", slug: "la-jolla", descriptor: "coastal luxury" },
        { name: "Pacific Beach", slug: "pacific-beach", descriptor: "beachside living" },
        { name: "Scripps Ranch", slug: "scripps-ranch", descriptor: "executive family homes" },
        { name: "Coronado", slug: "coronado", descriptor: "island elegance" },
        { name: "Hillcrest", slug: "hillcrest", descriptor: "urban community" },
        { name: "Poway", slug: "poway", descriptor: "estate properties" },
    ],
};

// ============================================
// TYPE EXPORTS
// ============================================

export type SiteConfig = typeof SITE_CONFIG;
export type LocationType = typeof SITE_CONFIG.locationTypes[keyof typeof SITE_CONFIG.locationTypes];
export type ClimateChallenge = typeof SITE_CONFIG.climate.challenges[number];
export type FeaturedNeighborhood = typeof SITE_CONFIG.featuredNeighborhoods[number];

// ============================================
// HELPER FUNCTIONS
// ============================================

/**
 * Get the full location string (e.g., "San Diego, CA")
 */
export function getLocationString(): string {
    return `${SITE_CONFIG.address.city}, ${SITE_CONFIG.address.state}`;
}

/**
 * Get the regional service area description
 * e.g., "San Diego County"
 */
export function getCountiesString(): string {
    const counties = SITE_CONFIG.regional.counties;
    if (counties.length === 0) return "";
    if (counties.length === 1) return counties[0];
    if (counties.length === 2) return `${counties[0]} and ${counties[1]}`;
    return counties.slice(0, -1).join(", ") + ", and " + counties[counties.length - 1];
}

/**
 * Get the "Serving the X Corridor" heading
 */
export function getRegionalHeading(): string {
    return `Serving the ${SITE_CONFIG.regional.marketingTagline} Corridor`;
}

/**
 * Get featured neighborhood names as a comma-separated list
 */
export function getFeaturedNeighborhoodsList(): string {
    const names = SITE_CONFIG.featuredNeighborhoods.map(n => n.name);
    if (names.length === 0) return "";
    if (names.length <= 2) return names.join(" and ");
    return names.slice(0, -1).join(", ") + ", and " + names[names.length - 1];
}
