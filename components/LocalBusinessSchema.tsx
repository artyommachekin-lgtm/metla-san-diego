import React from 'react';
import { SITE_CONFIG } from '../src/config/site-config';
import { Location } from '../types';

interface LocalBusinessSchemaProps {
    location: Location;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ location }) => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${SITE_CONFIG.baseUrl}/location/${location.slug}`,
        "name": `${SITE_CONFIG.companyName} - ${location.name}`,
        "image": `${SITE_CONFIG.baseUrl}${SITE_CONFIG.social.logoUrl}`,
        "telephone": SITE_CONFIG.phoneIntl,
        "email": SITE_CONFIG.email,
        "url": `${SITE_CONFIG.baseUrl}/location/${location.slug}`,
        "address": {
            "@type": "PostalAddress",
            "streetAddress": SITE_CONFIG.address.street,
            "addressLocality": SITE_CONFIG.address.city,
            "addressRegion": SITE_CONFIG.address.state,
            "postalCode": SITE_CONFIG.address.zip,
            "addressCountry": "US"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": SITE_CONFIG.coordinates.latitude,
            "longitude": SITE_CONFIG.coordinates.longitude
        },
        "areaServed": {
            "@type": "City",
            "name": location.name,
            "containedInPlace": {
                "@type": "State",
                "name": SITE_CONFIG.address.stateFullName
            }
        },
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": SITE_CONFIG.coordinates.latitude,
                "longitude": SITE_CONFIG.coordinates.longitude
            },
            "geoRadius": "50000"
        },
        "priceRange": "$$",
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": SITE_CONFIG.businessHours.daysOfWeek,
            "opens": SITE_CONFIG.businessHours.opensTime,
            "closes": SITE_CONFIG.businessHours.closesTime
        },
        "sameAs": [
            SITE_CONFIG.baseUrl,
            ...(SITE_CONFIG.socialProfiles.gmb ? [SITE_CONFIG.socialProfiles.gmb] : []),
            ...(SITE_CONFIG.socialProfiles.thumbtack ? [SITE_CONFIG.socialProfiles.thumbtack] : []),
            ...(SITE_CONFIG.socialProfiles.bbb ? [SITE_CONFIG.socialProfiles.bbb] : []),
            ...(SITE_CONFIG.socialProfiles.facebook ? [SITE_CONFIG.socialProfiles.facebook] : []),
            // ...(SITE_CONFIG.socialProfiles.yelp ? [SITE_CONFIG.socialProfiles.yelp] : []),
        ],
        "parentOrganization": {
            "@type": "Organization",
            "name": SITE_CONFIG.companyName,
            "@id": `${SITE_CONFIG.baseUrl}/#organization`
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `House Cleaning Services in ${location.name}`,
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Standard Cleaning",
                        "description": "Recurring maintenance cleaning service"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Deep Cleaning",
                        "description": "Comprehensive deep cleaning service"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Move-In/Move-Out Cleaning",
                        "description": "Complete cleaning for moving transitions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Vacation Rental Cleaning",
                        "description": "Turnover cleaning for Airbnb and vacation rentals"
                    }
                }
            ]
        }
    };

    // Add ZIP codes to areaServed if available
    if (location.zipCodes && location.zipCodes.length > 0) {
        (schema.areaServed as any).postalCode = location.zipCodes;
    }

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default LocalBusinessSchema;
