import React from 'react';
import { SITE_CONFIG } from '../src/config/site-config';

const HomeSchema: React.FC = () => {
    const baseUrl = SITE_CONFIG.baseUrl;

    const schema = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "@id": `${baseUrl}/#organization`,
        "name": SITE_CONFIG.companyName,
        "alternateName": `${SITE_CONFIG.companyName} San Diego`,
        "url": `${baseUrl}/`,
        "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}${SITE_CONFIG.social.logoUrl}`,
            "width": 512,
            "height": 512
        },
        "image": `${baseUrl}${SITE_CONFIG.social.ogImage}`,
        "description": SITE_CONFIG.seo.metaDescription,
        "telephone": SITE_CONFIG.phoneIntl,
        "email": SITE_CONFIG.email,
        "priceRange": "$$",
        "currenciesAccepted": "USD",
        "paymentAccepted": "Cash, Credit Card, Debit Card",
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
        "foundingDate": SITE_CONFIG.socialProof.foundingDate,
        "numberOfEmployees": {
            "@type": "QuantitativeValue",
            "minValue": SITE_CONFIG.socialProof.employeeCount.min,
            "maxValue": SITE_CONFIG.socialProof.employeeCount.max
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
        "serviceArea": {
            "@type": "GeoCircle",
            "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": SITE_CONFIG.coordinates.latitude,
                "longitude": SITE_CONFIG.coordinates.longitude
            },
            "geoRadius": "50000"
        },
        "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": SITE_CONFIG.socialProof.aggregateRating.ratingValue,
            "reviewCount": SITE_CONFIG.socialProof.aggregateRating.ratingCount,
            "bestRating": "5",
            "worstRating": "1"
        },
        "hasOfferCatalog": {
            "@type": "OfferCatalog",
            "name": "House Cleaning Services in San Diego",
            "itemListElement": [
                {
                    "@type": "OfferCatalog",
                    "name": "Residential Cleaning",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Standard Cleaning",
                                "url": `${baseUrl}/service/standard-cleaning`,
                                "description": "Recurring maintenance cleaning to keep your home consistently pristine. Available weekly, bi-weekly, or monthly.",
                                "serviceType": "Standard House Cleaning",
                                "provider": { "@id": `${baseUrl}/#organization` },
                                "areaServed": { "@type": "City", "name": "San Diego" }
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Deep Cleaning",
                                "url": `${baseUrl}/service/deep-cleaning`,
                                "description": "Top-to-bottom intensive cleaning that eliminates heavy buildup and restores your home to immaculate condition.",
                                "serviceType": "Deep House Cleaning",
                                "provider": { "@id": `${baseUrl}/#organization` },
                                "areaServed": { "@type": "City", "name": "San Diego" }
                            }
                        }
                    ]
                },
                {
                    "@type": "OfferCatalog",
                    "name": "Specialty Cleaning",
                    "itemListElement": [
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Move-In / Move-Out Cleaning",
                                "url": `${baseUrl}/service/move-in-out-cleaning`,
                                "description": "Comprehensive reset for empty homes designed to meet strict property management standards.",
                                "serviceType": "Move In Move Out Cleaning",
                                "provider": { "@id": `${baseUrl}/#organization` },
                                "areaServed": { "@type": "City", "name": "San Diego" }
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Vacation Rental Cleaning",
                                "url": `${baseUrl}/service/vacation-rental-cleaning-airbnb`,
                                "description": "Seamless turnovers for Airbnb and VRBO hosts. Hotel-ready results for every guest check-in.",
                                "serviceType": "Vacation Rental Turnover Cleaning",
                                "provider": { "@id": `${baseUrl}/#organization` },
                                "areaServed": { "@type": "City", "name": "San Diego" }
                            }
                        },
                        {
                            "@type": "Offer",
                            "itemOffered": {
                                "@type": "Service",
                                "name": "Post-Construction Cleaning",
                                "url": `${baseUrl}/service/post-construction-cleaning`,
                                "description": "Professional cleanup after renovation or new construction. Dust removal, debris clearing, and surface restoration.",
                                "serviceType": "Post Construction Cleaning",
                                "provider": { "@id": `${baseUrl}/#organization` },
                                "areaServed": { "@type": "City", "name": "San Diego" }
                            }
                        }
                    ]
                }
            ]
        },
        "knowsAbout": [
            "House Cleaning",
            "Deep Cleaning",
            "Maid Service",
            "Vacation Rental Cleaning",
            "Post-Construction Cleaning",
            "Move-In Move-Out Cleaning",
            "Residential Cleaning",
            "Eco-Friendly Cleaning"
        ],
        "slogan": "San Diego's Trusted House Cleaning Service",
        "sameAs": [
            ...(SITE_CONFIG.socialProfiles.gmb ? [SITE_CONFIG.socialProfiles.gmb] : []),
            ...(SITE_CONFIG.socialProfiles.thumbtack ? [SITE_CONFIG.socialProfiles.thumbtack] : []),
            ...(SITE_CONFIG.socialProfiles.bbb ? [SITE_CONFIG.socialProfiles.bbb] : []),
            ...(SITE_CONFIG.socialProfiles.facebook ? [SITE_CONFIG.socialProfiles.facebook] : []),
        ],
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

export default HomeSchema;
