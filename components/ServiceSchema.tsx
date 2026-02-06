import React from 'react';
import { Service } from '../types';
import { SITE_CONFIG } from '../src/config/site-config';

interface ServiceSchemaProps {
    service: Service;
}

/**
 * Generates JSON-LD Service schema for a service page
 * References the main organization via @id
 */
const ServiceSchema: React.FC<ServiceSchemaProps> = ({ service }) => {
    const baseUrl = SITE_CONFIG.baseUrl;

    const schema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "@id": `${baseUrl}/service/${service.slug}#service`,
        "name": service.title,
        "description": service.shortDescription,
        "url": `${baseUrl}/service/${service.slug}`,
        "provider": {
            "@type": "HomeAndConstructionBusiness",
            "@id": `${baseUrl}/#organization`,
            "name": SITE_CONFIG.companyName
        },
        "areaServed": {
            "@type": "State",
            "name": SITE_CONFIG.address.stateFullName,
            "containsPlace": SITE_CONFIG.featuredNeighborhoods.slice(0, 3).map(n => ({
                "@type": "City",
                "name": n.name
            }))
        },
        "serviceType": service.title,
        "category": "House Cleaning",
        "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": `${baseUrl}/booking`,
            "servicePhone": SITE_CONFIG.phoneIntl,
            "serviceSmsNumber": SITE_CONFIG.phoneIntl
        },
        "termsOfService": `${baseUrl}/policies`,
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceSpecification": {
                "@type": "PriceSpecification",
                "priceCurrency": "USD"
            }
        },
        "hasOfferCatalog": service.checklist ? {
            "@type": "OfferCatalog",
            "name": `${service.title} Checklist`,
            "itemListElement": Object.entries(service.checklist).map(([room, items], index) => ({
                "@type": "OfferCatalog",
                "name": room,
                "position": index + 1,
                "numberOfItems": (items as string[]).length
            }))
        } : undefined
    };

    // Remove undefined properties
    const cleanSchema = JSON.parse(JSON.stringify(schema));

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(cleanSchema, null, 2) }}
        />
    );
};

export default ServiceSchema;
