import React from 'react';
import { SITE_CONFIG } from '../src/config/site-config';
import { Location } from '../types';

interface LocalBusinessSchemaProps {
    location: Location;
}

const LocalBusinessSchema: React.FC<LocalBusinessSchemaProps> = ({ location }) => {
    const baseUrl = SITE_CONFIG.baseUrl;

    const areaServed: Record<string, unknown> = {
        "@type": "City",
        "name": location.name,
        "containedInPlace": {
            "@type": "State",
            "name": SITE_CONFIG.address.stateFullName
        }
    };

    if (location.zipCodes && location.zipCodes.length > 0) {
        areaServed.postalCode = location.zipCodes;
    }

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/location/${location.slug}#business`,
        "name": `${SITE_CONFIG.companyName} - ${location.name}`,
        "image": `${baseUrl}${SITE_CONFIG.social.logoUrl}`,
        "telephone": SITE_CONFIG.phoneIntl,
        "email": SITE_CONFIG.email,
        "url": `${baseUrl}/location/${location.slug}`,
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
        "areaServed": areaServed,
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": SITE_CONFIG.coordinates.latitude,
                "longitude": SITE_CONFIG.coordinates.longitude
            },
            "geoRadius": "50000"
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": SITE_CONFIG.businessHours.daysOfWeek,
            "opens": SITE_CONFIG.businessHours.opensTime,
            "closes": SITE_CONFIG.businessHours.closesTime
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": SITE_CONFIG.socialProof.aggregateRating.ratingValue,
            "reviewCount": SITE_CONFIG.socialProof.aggregateRating.ratingCount,
            "bestRating": "5",
            "worstRating": "1"
        },
        "parentOrganization": {
            "@type": "LocalBusiness",
            "name": SITE_CONFIG.companyName,
            "@id": `${baseUrl}/#organization`
        },
        "sameAs": [
            baseUrl,
            ...(SITE_CONFIG.socialProfiles.gmb ? [SITE_CONFIG.socialProfiles.gmb] : []),
            ...(SITE_CONFIG.socialProfiles.thumbtack ? [SITE_CONFIG.socialProfiles.thumbtack] : []),
            ...(SITE_CONFIG.socialProfiles.bbb ? [SITE_CONFIG.socialProfiles.bbb] : []),
            ...(SITE_CONFIG.socialProfiles.facebook ? [SITE_CONFIG.socialProfiles.facebook] : []),
        ],
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": `House Cleaning Services in ${location.name}`,
            "itemListElement": [
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Standard Cleaning",
                        "url": `${baseUrl}/service/standard-cleaning`,
                        "description": "Recurring maintenance cleaning to keep your home consistently pristine."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Deep Cleaning",
                        "url": `${baseUrl}/service/deep-cleaning`,
                        "description": "Top-to-bottom intensive cleaning that eliminates heavy buildup."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Move-In / Move-Out Cleaning",
                        "url": `${baseUrl}/service/move-in-out-cleaning`,
                        "description": "Comprehensive cleaning for property transitions that meets management standards."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Vacation Rental Cleaning",
                        "url": `${baseUrl}/service/vacation-rental-cleaning-airbnb`,
                        "description": "Seamless turnovers for Airbnb and VRBO hosts."
                    }
                },
                {
                    "@type": "Offer",
                    "itemOffered": {
                        "@type": "Service",
                        "name": "Post-Construction Cleaning",
                        "url": `${baseUrl}/service/post-construction-cleaning`,
                        "description": "Professional cleanup after renovation or new construction."
                    }
                }
            ]
        },
        "potentialAction": {
            "@type": "ReserveAction",
            "target": {
                "@type": "EntryPoint",
                "urlTemplate": `${baseUrl}/booking`,
                "actionPlatform": [
                    "https://schema.org/DesktopWebPlatform",
                    "https://schema.org/MobileWebPlatform"
                ]
            },
            "result": {
                "@type": "Reservation",
                "name": "Book a Cleaning"
            }
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
    );
};

export default LocalBusinessSchema;
