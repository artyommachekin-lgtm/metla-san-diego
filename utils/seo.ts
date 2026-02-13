// SEO Helper utilities for dynamic meta tag management
import { SITE_CONFIG } from '../src/config/site-config';

/**
 * Updates the page's meta description dynamically
 */
export const updateMetaDescription = (description: string): void => {
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.setAttribute('content', description);
    } else {
        metaDescription = document.createElement('meta');
        metaDescription.setAttribute('name', 'description');
        metaDescription.setAttribute('content', description);
        document.head.appendChild(metaDescription);
    }

    // Also update Open Graph description
    let ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.setAttribute('content', description);
    }
};

/**
 * Updates the canonical URL for the page
 */
export const updateCanonicalUrl = (path: string): void => {
    const fullUrl = `${SITE_CONFIG.baseUrl}${path}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (canonical) {
        canonical.setAttribute('href', fullUrl);
    }

    // Also update og:url
    let ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
        ogUrl.setAttribute('content', fullUrl);
    }

    // Also update hreflang tags to absolute URLs
    const hreflangEnUS = document.querySelector('link[hreflang="en-US"]');
    if (hreflangEnUS) {
        hreflangEnUS.setAttribute('href', fullUrl);
    }
    const hreflangDefault = document.querySelector('link[hreflang="x-default"]');
    if (hreflangDefault) {
        hreflangDefault.setAttribute('href', fullUrl);
    }
};

/**
 * Updates Open Graph title
 */
export const updateOgTitle = (title: string): void => {
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.setAttribute('content', title);
    }
};

/**
 * Comprehensive SEO update function
 */
export const updatePageSEO = ({
    title,
    description,
    path,
}: {
    title: string;
    description: string;
    path: string;
}): void => {
    document.title = title;
    updateMetaDescription(description);
    updateCanonicalUrl(path);
    updateOgTitle(title);
};

/**
 * Reset SEO to homepage defaults (uses SITE_CONFIG)
 */
export const resetSEO = (): void => {
    document.title = SITE_CONFIG.seo.siteTitle;
    updateMetaDescription(SITE_CONFIG.seo.metaDescription);
    updateCanonicalUrl('/');
    updateOgTitle(SITE_CONFIG.seo.siteTitle);
};
