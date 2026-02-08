import React from 'react';
import { SITE_CONFIG } from '../src/config/site-config';

const HomeSchema: React.FC = () => {
    const schema = {
        "@context": "https://schema.org",
        "@type": "HomeAndConstructionBusiness",
        "@id": `${SITE_CONFIG.baseUrl}/#organization`,
        "name": `${SITE_CONFIG.companyName} - San Diego`,
        "url": `${SITE_CONFIG.baseUrl}/`,
        "logo": `${SITE_CONFIG.baseUrl}${SITE_CONFIG.social.logoUrl}`,
        "image": `${SITE_CONFIG.baseUrl}${SITE_CONFIG.social.ogImage}`,
        "description": SITE_CONFIG.seo.metaDescription,
        "telephone": SITE_CONFIG.phoneIntl,
        "email": SITE_CONFIG.email,
        "priceRange": "$$",
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
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": SITE_CONFIG.businessHours.daysOfWeek,
            "opens": SITE_CONFIG.businessHours.opensTime,
            "closes": SITE_CONFIG.businessHours.closesTime
        },
        "areaServed": [
            {
                "@type": "City",
                "name": SITE_CONFIG.address.city
            },
            {
                "@type": "AdministrativeArea",
                "name": SITE_CONFIG.regional.region
            }
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "House Cleaning Services",
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Standard Cleaning",
                        "description": "Recurring maintenance cleaning for homes"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Deep Cleaning",
                        "description": "Intensive one-time cleaning"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Move In/Out Cleaning",
                        "description": "Thorough cleaning for property transitions"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Vacation Rental Cleaning",
                        "description": "Professional turnover cleaning for Airbnb and VRBO"
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Post-Construction Cleaning",
                        "description": "Detailed cleaning after renovation or construction"
                    }
                }
            ]
        },
        "sameAs": [
            ...(SITE_CONFIG.socialProfiles.gmb ? [SITE_CONFIG.socialProfiles.gmb] : []),
            ...(SITE_CONFIG.socialProfiles.thumbtack ? [SITE_CONFIG.socialProfiles.thumbtack] : []),
            ...(SITE_CONFIG.socialProfiles.bbb ? [SITE_CONFIG.socialProfiles.bbb] : []),
            ...(SITE_CONFIG.socialProfiles.facebook ? [SITE_CONFIG.socialProfiles.facebook] : []),
        ]
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default HomeSchema;
