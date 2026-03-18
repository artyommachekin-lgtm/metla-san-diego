---
description: MANDATORY IMAGE PROTOCOL. Prevents irrelevant or repeated images. All blog images use verified Unsplash photo IDs with direct CDN URLs.
---

# Blog Post Image Strategy

## 1. The "No Guessing" Rule (CRITICAL)
* **Problem:** You (the AI) cannot see Unsplash images. Do NOT guess random Photo IDs.
* **Result:** Guessing leads to random, irrelevant images (e.g., a forest for an oven cleaning post).
* **Rule:** NEVER output a photo ID unless it has been verified to return HTTP 200.

## 2. The "Direct CDN" Solution
The old `source.unsplash.com/featured/` API is **DEPRECATED AND SHUT DOWN**. Do NOT use it.

Instead, use direct Unsplash CDN URLs with verified photo IDs:
* **Format:** `https://images.unsplash.com/photo-{ID}?w=800&h=600&fit=crop&fm=webp&auto=format&q=80`
* **Verification:** Test with `curl -s -o /dev/null -w "%{http_code}" "URL"` — must return 200.

## 3. Uniqueness Enforcement
* **Diversity:** Never use the same photo ID for two different blog posts.
* **Relevance:** Each photo should match the blog post topic.

## 4. Alt Text Requirement
* Every image MUST have alt text that describes the *specific* subject, not just "cleaning."
    * *Bad:* "Cleaning service"
    * *Good:* "Staff member wiping down granite countertops in a San Diego kitchen."

## 5. Image Tag Attributes
All blog `<img>` tags must include:
* `loading="lazy"` (below-fold images)
* `decoding="async"`
* `width={800}` and `height={533}` (prevents CLS)

## 6. Broken Image Detection (AUDIT STEP)
During every audit, verify ALL image URLs are live:
* **Thumbnail images** in `data/blog-posts.ts`: extract every `image:` URL, curl each, flag any non-200.
* **In-post images** in `content/blog/*.tsx`: extract every `<img src=` URL, curl each, flag any non-200.
* **Severity:** Broken images are **LEGAL RISK** — they show as broken thumbnails to users and Google, hurting trust and SEO.
* **Fix:** Replace with a verified Unsplash photo ID that matches the blog topic and is not already used by another post.
