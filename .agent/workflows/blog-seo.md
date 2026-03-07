---
description: MANDATORY BLOG SEO CHECKLIST. Must be used for every new blog post to ensure maximum rich snippet coverage, E-E-A-T signals, and internal linking.
---

# Blog Post SEO Optimization Workflow

## 1. Triple Schema Markup (REQUIRED)
Every blog post MUST render all three JSON-LD schemas at the top of the component:

### A. ArticleSchema
- `title`: Post headline (matches H1)
- `description`: Post summary (matches meta description)
- `slug`: URL slug
- `datePublished`: ISO date (YYYY-MM-DD)
- `dateModified`: ISO date (YYYY-MM-DD) — update when content changes
- `authorName`: "Art Machekin" (or new author)
- `authorType`: "Person" (NOT "Organization" — Person gives E-E-A-T signals)
- `authorJobTitle`: "Founder" (or appropriate title)

### B. HowToSchema (when applicable)
- `name`: "How to [action] in [location]"
- `description`: Brief overview
- `totalTime`: ISO 8601 duration (e.g., "PT6H")
- `steps`: Array of {name, text} — minimum 4 steps
- `supply`: Array of supply names (NO brand names — use "Professional-grade vacuums" not "Dyson")
- `tool`: Array of tool names
- ⚠️ Follows content-accuracy.md constraints (no HEPA, no chemical promises)

### C. FAQSchema
- `faqs`: Array of {question, answer} — minimum 4 FAQs
- Questions must be real queries people search for
- Answers must be direct and factual (AI SEO snippable)
- ⚠️ Follows content-accuracy.md constraints (no guarantees)

## 2. Author Attribution (E-E-A-T)
- `<AuthorBio name="Art Machekin" role="Founder" bio="..." />` at bottom
- ArticleSchema `authorType="Person"` links to `/about`
- Author entry in `data/blog-posts.ts` with DEFAULT_AUTHOR

## 3. Content Freshness Signals
- Hero section MUST display BOTH:
  - "Published [date]"
  - "Updated [date]" (if different from published)
- `datePublished` and `dateModified` in blog-posts.ts metadata
- These flow to OG `article:published_time` and `article:modified_time` automatically

## 4. Quick Answer Box (AI SEO + Voice Search)
- First content section after hero
- MUST include CSS class `quick-answer` (for SpeakableSchema selector)
- First sentence must be a **direct, factual answer** to the page's primary query
- Format: `<div className="quick-answer bg-teal-50 border-l-4 border-teal-500 p-6 rounded-r-lg">`

## 5. Heading Hierarchy
- **H1**: One per page (in hero), includes primary keyword + location
- **H2**: Section headers, each starts with direct answer sentence
- **H3**: Sub-sections within H2s
- Never skip levels (H1 → H3 is wrong, must go H1 → H2 → H3)

## 6. Internal Linking (Spider Web — 5 minimum)
Every blog post must link to:
1. **Up**: `/locations` or `/` (city hub)
2. **Service**: Relevant service page (e.g., `/service/deep-cleaning`)
3. **Location**: Relevant location page (e.g., `/location/scripps-ranch`)
4. **Related blog**: At least 1 inline link to another blog post
5. **Conversion**: `/booking` (CTA button)

Plus: `<RelatedArticles currentSlug="..." />` component (adds 3 more links automatically)

## 7. Image Optimization
- All images: `loading="lazy"`, `decoding="async"`, explicit `width`/`height`
- Alt text: Descriptive of the specific subject (per blog-images.md)
- Featured image: Verified Unsplash URL (per blog-images.md)
- In-content images: Real photos preferred, Unsplash fallback

## 8. Registration (4 files to update)
1. `data/blog-posts.ts` — Add metadata entry
2. `app/blog/[slug]/BlogPostContent.tsx` — Add dynamic import
3. `utils/internalLinks.ts` — Add to RELATED_POSTS_MAP + update SERVICE_BLOG_MAP and/or LOCATION_TYPE_BLOG_MAP
4. `content/blog/[Component].tsx` — The actual blog post component

## 9. Auto-Generated SEO (no manual work needed)
These are handled automatically by the infrastructure:
- ✅ OG tags (title, description, image, type=article) — from `page.tsx`
- ✅ Twitter card (summary_large_image) — from `page.tsx`
- ✅ Canonical URL — from `page.tsx`
- ✅ Breadcrumbs with schema.org markup — from `layout.tsx`
- ✅ Font optimization (Inter + Playfair) — from `layout.tsx`
- ✅ Resource hints (preconnect) — from `layout.tsx`
- ✅ CollectionPage schema on blog listing — from `app/blog/page.tsx`

## 10. Word Count Target
- Minimum: 1200 words for ranking strength
- Ideal: 1500-2000 words for comprehensive coverage
- Never pad with fluff — every sentence must add value
