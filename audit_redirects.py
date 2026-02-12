#!/usr/bin/env python3
"""Cross-reference old sitemap URLs against vercel.json redirects."""
import json

# Load vercel.json redirects
with open("/Users/user/Downloads/metla San Diego/vercel.json") as f:
    vercel = json.load(f)

redirect_sources = set()
redirect_map = {}
for r in vercel.get("redirects", []):
    src = r["source"].rstrip("/")
    redirect_sources.add(src)
    redirect_map[src] = r["destination"]

# All old URLs from post-sitemap.xml
old_posts = [
    "/how-to-safely-pressure-wash-your-house-before-painting",
    "/tips-and-tricks-on-how-to-deep-clean-instant-pot",
    "/choosing-the-right-deep-cleaning-service",
    "/benefits-of-deep-cleaning-the-house",
    "/top-techniques-for-removing-stubborn-construction-residue",
    "/essential-post-construction-cleaning-checklist-for-homeowners",
    "/how-do-you-deep-clean-the-house-when-moving-out",
    "/what-is-the-most-effective-cleaning-method-for-removing-allergens",
    "/essential-deep-cleaning-new-house-checklist",
    "/how-to-clean-construction-dust-from-furniture",
    "/how-do-you-clean-concrete-tools-and-small-machinery",
    "/best-practices-for-post-construction-cleanup-and-dust-removal",
    "/best-post-construction-cleaning-equipment-tips-from-professionals",
    "/tips-and-tools-for-effective-post-construction-home-cleaning",
    "/what-is-included-in-deep-house-cleaning",
    "/what-to-wear-when-deep-cleaning-the-house",
    "/benefits-of-deep-cleaning-for-improved-indoor-air",
    "/the-complete-guide-to-scope-of-work-for-post-construction-cleaning",
    "/how-long-does-it-take-to-deep-clean-a-house",
    "/holiday-deep-cleaning",
    "/what-are-the-duties-of-a-post-construction-cleaner",
    "/top-10-spring-deep-cleaning-tips",
    "/what-is-a-practical-way-of-post-construction-cleaning",
    "/how-much-does-it-cost-to-deep-clean-a-commercial-kitchen",
    "/best-cleaning-products-to-deep-clean-the-house",
    "/how-do-you-clean-windows-after-construction",
    "/how-do-you-remove-dried-cement-from-glass-windows",
    "/what-happens-if-you-never-deep-clean-your-house",
    "/how-to-deep-clean-ceiling-fans",
    "/how-to-deep-clean-a-toaster",
    "/how-to-deep-clean-your-towels",
    "/importance-of-deep-cleaning-of-industrial-facilities",
    "/deep-cleaning-in-emergency-situations",
    "/best-way-to-deep-clean-linoleum-floors",
    "/how-long-to-deep-clean-apartment",
    "/importance-of-deep-cleaning-in-retail",
    "/deep-clean-rental-property",
    "/what-is-an-office-deep-clean",
    "/high-touch-surface-areas-deep-cleaning",
    "/why-you-should-choose-a-certified-deep-cleaning-service",
    "/can-construction-dust-make-you-sick",
    "/what-is-rough-cleaning",
    "/how-do-you-deep-clean-a-neglected-house",
    "/how-do-you-deep-clean-a-commercial-kitchen",
    "/deep-clean-basement",
    "/how-do-you-clean-heavy-dust",
    "/how-do-you-clean-post-construction-dust",
    "/tips-for-preventing-and-reducing-dust-in-the-house",
    "/how-to-deep-clean-the-kitchen",
    "/how-to-do-a-post-construction-cleanup",
    "/best-way-to-dust-walls-after-construction",
    "/how-do-you-clean-up-after-concrete-work",
    "/determining-the-settling-time-frame-of-construction-dust",
    "/what-are-the-hazards-of-cleaning-after-construction",
    "/how-can-i-deep-clean-my-house-without-chemicals",
    "/what-tools-are-needed-for-a-deep-clean",
    "/stages-of-post-construction-cleanup",
    "/what-is-post-renovation-cleaning",
    "/deep-cleaning-for-pet-owners",
    "/should-you-tip-for-deep-cleaning",
    "/deep-cleaning-vs-regular-house-cleaning",
    "/how-to-deep-clean-and-sanitize-upholstered-furniture-2",
    "/whats-included-in-deep-cleaning",
    "/how-to-eliminate-mold-from-your-home",
    "/how-to-deep-clean-and-sanitize-upholstered-furniture",
    "/how-to-get-rid-of-bad-smell-in-the-fridge",
    "/effective-speed-cleaning-tips-for-everyone",
    "/what-are-a-deep-cleaning-steps",
    "/what-is-the-fastest-way-to-deep-clean-a-house",
    "/tips-on-how-to-clean-your-basement",
    "/how-much-does-a-deep-house-cleaning-cost",
    "/why-window-cleaning-is-important",
    "/health-benefits-of-cleaning-the-house",
    "/bathroom-deep-cleaning-checklist",
    "/how-to-deep-clean-granite-counters",
    "/how-often-should-you-deep-clean-your-home",
    "/how-to-fit-deep-cleaning-into-a-busy-schedule",
    "/navigating-the-ventilation-process-in-a-newly-constructed-home",
    "/top-cleaning-tips-tricks-for-a-bright-home",
    "/most-common-cleaning-mistakes-homeowners-make",
    "/4-reasons-getting-a-recurring-house-cleaning-is-worth-it",
    "/should-contractors-clean-up-after-themselves",
]

# All old URLs from page-sitemap.xml (excluding homepage /)
old_pages = [
    "/university-city",
    "/areas-served",
    "/la-jolla",
    "/post-construction-clean",
    "/deep-clean",
    "/company-policies",
    "/privacy-policy",
    "/window-cleaning",
    "/vacation-rental-clean",
    "/moving-clean",
    "/carpet-cleaning",
    "/flooring-cleaning-services",
    "/top-quality-house-cleaning-services-in-el-cajon-ca",
    "/expert-house-cleaning-services-in-bostonia-ca",
    "/metla-best-rated-house-cleaning-services-in-lakeside-ca",
    "/trusted-house-cleaning-services-in-santee-ca",
    "/best-breweries-in-san-diego",
    "/best-farmers-markets-in-san-diego",
    "/best-historical-sites-in-san-diego",
    "/professional-house-cleaning-services-in-ramona-ca",
    "/reliable-house-cleaning-services-in-escondido-ca",
    "/best-rooftop-bars-in-san-diego",
    "/best-places-for-brunch-in-san-diego",
    "/best-golf-courses-in-san-diego",
    "/san-diego-trolley-system-a-convenient-transit-solution",
    "/house-cleaning-services-in-pacific-highlands-ranch-ca",
    "/best-house-cleaning-services-in-sorrento-valley-ca",
    "/best-house-cleaning-services-in-golden-hill-ca",
    "/top-notch-house-cleaning-services-in-rancho-bernardo-san-diego",
    "/house-cleaning-services-in-fairbanks-ranch",
    "/best-house-cleaning-services-in-poway-ca",
    "/shopping-in-san-diego",
    "/best-kindergartens-in-san-diego",
    "/discover-the-best-parks-in-san-diego",
    "/best-cleaning-services-in-la-mesa",
    "/la-presa",
    "/san-diego-rapid-transit",
    "/top-five-interstate-highways-in-san-diego-a-guide-to-regional-travel",
    "/top-cleaning-services-in-solana-beach",
    "/cleaning-services-in-clairemont",
    "/best-elementary-schools-in-san-diego",
    "/top-tech-companies-in-san-diego-ca",
    "/top-cleaning-services-in-torrey-pines",
    "/the-highest-paying-jobs-in-san-diego-ca",
    "/the-best-biotech-companies-in-san-diego-ca",
    "/mission-hills",
    "/professional-cleaning-services-in-carmel-valley",
    "/bonita",
    "/house-cleaning-services-in-miramar",
    "/bay-park",
    "/best-middle-schools-in-san-diego",
    "/best-high-schools-in-san-diego",
    "/mission-valley",
    "/lincoln-acres",
    "/best-neighborhoods-to-raise-a-family-in-san-diego",
    "/faq",
    "/valencia-park",
    "/lemon-grove",
    "/ocean-beach",
    "/standard-clean",
    "/top-best-trails-in-san-diego",
    "/best-beaches-in-san-diego",
    "/top-peaks-around-san-diego",
    "/allied-gardens",
    "/rolando-village-san-diego",
    "/college-area-sd",
    "/best-neighborhoods-to-live-in-the-san-diego-area",
    "/best-neighborhoods-for-young-professionals-in-san-diego",
    "/services-4",
    "/blog",
    "/magic-floor-treatment",
    "/contact-us",
    "/about",
    "/rancho-santa-fe",
    "/national-city",
    "/coronado",
    "/north-park",
    "/pacific-beach",
    "/hillcrest",
]

all_old = old_posts + old_pages

print("=" * 70)
print(f"OLD SITEMAP: {len(old_posts)} posts + {len(old_pages)} pages = {len(all_old)} total")
print(f"VERCEL REDIRECTS: {len(redirect_sources)} sources")
print("=" * 70)

# Check for missing redirects
missing = []
covered = []
for url in all_old:
    clean = url.rstrip("/")
    if clean in redirect_sources:
        covered.append((clean, redirect_map[clean]))
    elif clean == "/blog" or clean == "/faq" or clean == "/about":
        # These are direct routes, not redirects needed
        covered.append((clean, f"[DIRECT ROUTE] {clean}"))
    else:
        missing.append(clean)

print(f"\nCOVERED: {len(covered)}")
print(f"MISSING: {len(missing)}")

if missing:
    print("\n" + "=" * 70)
    print("MISSING REDIRECTS (old URLs with NO redirect in vercel.json):")
    print("=" * 70)
    for url in missing:
        print(f"  {url}")

# Also check: do any redirects point to wrong destinations?
print("\n" + "=" * 70)
print("REDIRECT DESTINATION AUDIT:")
print("=" * 70)

# Check service redirects point to correct slugs
bad_destinations = []
for src, dest in redirect_map.items():
    if dest == "/service/airbnb-cleaning":
        bad_destinations.append((src, dest, "Should be /service/vacation-rental-cleaning-airbnb"))
    elif dest == "/service/post-construction":
        bad_destinations.append((src, dest, "Should be /service/post-construction-cleaning"))
    elif dest == "/service/move-in-out":
        bad_destinations.append((src, dest, "Should be /service/move-in-out-cleaning"))
    elif dest == "/service/vacation-rental":
        bad_destinations.append((src, dest, "Should be /service/vacation-rental-cleaning-airbnb"))

if bad_destinations:
    print("\nBAD REDIRECT DESTINATIONS (pointing to wrong slugs):")
    for src, dest, fix in bad_destinations:
        print(f"  {src} → {dest}")
        print(f"    FIX: → {fix}")
else:
    print("\nAll redirect destinations look correct.")

# Summary of covered by category
print("\n" + "=" * 70)
print("REDIRECT COVERAGE BY DESTINATION:")
print("=" * 70)
dest_counts = {}
for src, dest in redirect_map.items():
    dest_counts[dest] = dest_counts.get(dest, 0) + 1

for dest, count in sorted(dest_counts.items(), key=lambda x: -x[1]):
    print(f"  {dest}: {count} redirects")
