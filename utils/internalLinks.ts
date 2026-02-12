/**
 * Internal Linking Utility
 * 
 * Central mapping of topically-related content for SEO internal linking.
 * Used by ServicePage, LocationPage, blog posts, and pillar pages.
 */

/**
 * Maps each service slug to topically-relevant blog post slugs.
 * Used by ServicePage to show related articles instead of random ones.
 */
export const SERVICE_BLOG_MAP: Record<string, string[]> = {
    'standard-cleaning': [
        'benefits-of-regular-cleaning-service',
        'weekly-cleaning-schedule-guide',
        'declutter-before-deep-cleaning',
        'allergy-proofing-your-home',
    ],
    'deep-cleaning': [
        'deep-cleaning-guide-san-diego',
        'how-much-does-a-deep-house-cleaning-cost',
        'top-10-spring-deep-cleaning-tips',
        'how-to-deep-clean-the-kitchen',
    ],
    'post-construction-cleaning': [
        'essential-post-construction-cleaning-checklist-for-homeowners',
        'how-to-clean-windows-like-a-pro',
        'how-to-clean-hardwood-and-tile-floors',
        'how-to-eliminate-mold-from-your-home',
    ],
    'vacation-rental-cleaning-airbnb': [
        'vacation-rental-cleaning-tips-for-hosts',
        'how-to-prepare-your-guest-room',
        'bathroom-deep-cleaning-checklist',
        'how-to-deep-clean-your-mattress',
    ],
    'move-in-out-cleaning': [
        'move-out-cleaning-checklist',
        'move-in-cleaning-checklist',
        'how-to-deep-clean-the-kitchen',
        'how-to-clean-hardwood-and-tile-floors',
    ],
};

/**
 * Maps each blog post slug to 3 related blog post slugs.
 * Used by the RelatedArticles component for cross-linking.
 */
export const RELATED_POSTS_MAP: Record<string, string[]> = {
    // Batch 1: Core Guides
    'deep-cleaning-guide-san-diego': [
        'how-much-does-a-deep-house-cleaning-cost',
        'top-10-spring-deep-cleaning-tips',
        'how-to-deep-clean-the-kitchen',
    ],
    'how-to-deep-clean-the-kitchen': [
        'how-to-clean-stainless-steel-appliances',
        'how-to-get-rid-of-bad-smell-in-the-fridge',
        'how-to-deep-clean-granite-counters',
    ],
    'bathroom-deep-cleaning-checklist': [
        'how-to-eliminate-mold-from-your-home',
        'how-to-clean-windows-like-a-pro',
        'deep-cleaning-guide-san-diego',
    ],
    'essential-post-construction-cleaning-checklist-for-homeowners': [
        'how-to-clean-windows-like-a-pro',
        'how-to-clean-hardwood-and-tile-floors',
        'move-in-cleaning-checklist',
    ],
    'how-much-does-a-deep-house-cleaning-cost': [
        'deep-cleaning-guide-san-diego',
        'benefits-of-regular-cleaning-service',
        'weekly-cleaning-schedule-guide',
    ],
    'top-10-spring-deep-cleaning-tips': [
        'deep-cleaning-guide-san-diego',
        'declutter-before-deep-cleaning',
        'allergy-proofing-your-home',
    ],

    // Batch 2: How-To Guides
    'how-to-deep-clean-ceiling-fans': [
        'allergy-proofing-your-home',
        'deep-cleaning-guide-san-diego',
        'weekly-cleaning-schedule-guide',
    ],
    'how-to-deep-clean-granite-counters': [
        'how-to-deep-clean-the-kitchen',
        'how-to-clean-stainless-steel-appliances',
        'eco-friendly-cleaning-tips',
    ],
    'how-to-deep-clean-and-sanitize-upholstered-furniture': [
        'how-to-remove-pet-odors-from-your-home',
        'allergy-proofing-your-home',
        'how-to-deep-clean-your-mattress',
    ],
    'how-to-eliminate-mold-from-your-home': [
        'bathroom-deep-cleaning-checklist',
        'how-to-deep-clean-your-laundry-room',
        'allergy-proofing-your-home',
    ],
    'how-to-get-rid-of-bad-smell-in-the-fridge': [
        'how-to-deep-clean-the-kitchen',
        'eco-friendly-cleaning-tips',
        'deep-cleaning-guide-san-diego',
    ],
    'move-out-cleaning-checklist': [
        'move-in-cleaning-checklist',
        'how-to-clean-hardwood-and-tile-floors',
        'bathroom-deep-cleaning-checklist',
    ],

    // Batch 3: Specialty Guides
    'benefits-of-regular-cleaning-service': [
        'weekly-cleaning-schedule-guide',
        'how-much-does-a-deep-house-cleaning-cost',
        'declutter-before-deep-cleaning',
    ],
    'vacation-rental-cleaning-tips-for-hosts': [
        'how-to-prepare-your-guest-room',
        'bathroom-deep-cleaning-checklist',
        'how-to-deep-clean-your-mattress',
    ],
    'how-to-deep-clean-your-laundry-room': [
        'how-to-eliminate-mold-from-your-home',
        'allergy-proofing-your-home',
        'deep-cleaning-guide-san-diego',
    ],
    'how-to-clean-windows-like-a-pro': [
        'essential-post-construction-cleaning-checklist-for-homeowners',
        'how-to-clean-stainless-steel-appliances',
        'top-10-spring-deep-cleaning-tips',
    ],
    'declutter-before-deep-cleaning': [
        'deep-cleaning-guide-san-diego',
        'top-10-spring-deep-cleaning-tips',
        'weekly-cleaning-schedule-guide',
    ],
    'how-to-remove-pet-odors-from-your-home': [
        'how-to-deep-clean-and-sanitize-upholstered-furniture',
        'allergy-proofing-your-home',
        'how-to-deep-clean-your-mattress',
    ],

    // Batch 4: Specialty Guides
    'how-to-clean-hardwood-and-tile-floors': [
        'essential-post-construction-cleaning-checklist-for-homeowners',
        'move-in-cleaning-checklist',
        'eco-friendly-cleaning-tips',
    ],
    'how-to-deep-clean-your-mattress': [
        'allergy-proofing-your-home',
        'how-to-deep-clean-and-sanitize-upholstered-furniture',
        'how-to-remove-pet-odors-from-your-home',
    ],
    'move-in-cleaning-checklist': [
        'move-out-cleaning-checklist',
        'how-to-clean-hardwood-and-tile-floors',
        'deep-cleaning-guide-san-diego',
    ],
    'eco-friendly-cleaning-tips': [
        'how-to-deep-clean-granite-counters',
        'how-to-clean-windows-like-a-pro',
        'allergy-proofing-your-home',
    ],
    'how-to-clean-your-home-office': [
        'declutter-before-deep-cleaning',
        'weekly-cleaning-schedule-guide',
        'how-to-deep-clean-ceiling-fans',
    ],

    // Batch 5: Final Guides
    'how-to-clean-your-outdoor-patio': [
        'how-to-clean-hardwood-and-tile-floors',
        'eco-friendly-cleaning-tips',
        'top-10-spring-deep-cleaning-tips',
    ],
    'how-to-clean-stainless-steel-appliances': [
        'how-to-deep-clean-the-kitchen',
        'how-to-deep-clean-granite-counters',
        'how-to-get-rid-of-bad-smell-in-the-fridge',
    ],
    'weekly-cleaning-schedule-guide': [
        'benefits-of-regular-cleaning-service',
        'declutter-before-deep-cleaning',
        'how-much-does-a-deep-house-cleaning-cost',
    ],
    'allergy-proofing-your-home': [
        'how-to-deep-clean-ceiling-fans',
        'how-to-deep-clean-your-mattress',
        'how-to-remove-pet-odors-from-your-home',
    ],
    'how-to-prepare-your-guest-room': [
        'vacation-rental-cleaning-tips-for-hosts',
        'bathroom-deep-cleaning-checklist',
        'how-to-deep-clean-your-mattress',
    ],
};

/**
 * Maps location type to relevant blog post slugs.
 * Used by LocationPage to show contextually relevant articles.
 */
export const LOCATION_TYPE_BLOG_MAP: Record<string, string[]> = {
    'Coastal': [
        'vacation-rental-cleaning-tips-for-hosts',
        'how-to-eliminate-mold-from-your-home',
        'how-to-clean-your-outdoor-patio',
    ],
    'Urban Core': [
        'benefits-of-regular-cleaning-service',
        'move-out-cleaning-checklist',
        'weekly-cleaning-schedule-guide',
    ],
    'Suburban': [
        'deep-cleaning-guide-san-diego',
        'allergy-proofing-your-home',
        'how-to-deep-clean-the-kitchen',
    ],
    'North Inland': [
        'deep-cleaning-guide-san-diego',
        'how-to-remove-pet-odors-from-your-home',
        'allergy-proofing-your-home',
    ],
    'South Bay': [
        'how-much-does-a-deep-house-cleaning-cost',
        'move-in-cleaning-checklist',
        'how-to-clean-hardwood-and-tile-floors',
    ],
    'East County': [
        'deep-cleaning-guide-san-diego',
        'top-10-spring-deep-cleaning-tips',
        'eco-friendly-cleaning-tips',
    ],
};

/**
 * Helper: get related posts for a blog slug, with fallback.
 */
export function getRelatedPostSlugs(currentSlug: string): string[] {
    return RELATED_POSTS_MAP[currentSlug] || [
        'deep-cleaning-guide-san-diego',
        'how-much-does-a-deep-house-cleaning-cost',
        'weekly-cleaning-schedule-guide',
    ];
}

/**
 * Helper: get blog slugs for a service.
 */
export function getServiceBlogSlugs(serviceSlug: string): string[] {
    return SERVICE_BLOG_MAP[serviceSlug] || [
        'deep-cleaning-guide-san-diego',
        'how-much-does-a-deep-house-cleaning-cost',
        'top-10-spring-deep-cleaning-tips',
    ];
}

/**
 * Helper: get blog slugs for a location type.
 */
export function getLocationBlogSlugs(locationType: string): string[] {
    return LOCATION_TYPE_BLOG_MAP[locationType] || LOCATION_TYPE_BLOG_MAP['Suburban'];
}
