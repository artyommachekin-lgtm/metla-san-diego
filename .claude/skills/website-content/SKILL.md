---
name: website-content
description: Deep-read audit of all website content for accuracy, SEO, brand voice, and legal compliance. Reads every file fully — no shortcuts.
metadata:
  tags: audit, seo, content, website, cleaning, san-diego
---

## What this skill does

When invoked, deep-read EVERY content file and audit against ALL rules. No grep shortcuts, no sampling — read every file fully and report every violation. Just run `/website-content`.

## Audit scope

Determine scope based on context:

- **If content was just written or edited in this conversation**: Audit only the changed files
- **If no recent changes (periodic check)**: Full-site audit — every content file
- **If the user specifies files or pages**: Audit only those

## Execution protocol

### Step 1: Load all rules

Read every rule file completely before scanning any content:

1. [rules/content-accuracy.md](rules/content-accuracy.md) — Legal/truth: service inclusions, forbidden guarantees, team size, surface care, equipment claims, scope of work
2. [rules/brand-voice.md](rules/brand-voice.md) — Tone: forbidden AI words, active voice, key differentiators
3. [rules/blog-seo.md](rules/blog-seo.md) — Blog SEO: triple schema, E-E-A-T, internal links (5 min), headings, quick-answer box, word count
4. [rules/blog-images.md](rules/blog-images.md) — Images: verified Unsplash URLs, alt text, lazy loading, uniqueness
5. [rules/keyword-optimization.md](rules/keyword-optimization.md) — Keywords: density caps, anti-stuffing, cannibalization check
6. [rules/location-logic.md](rules/location-logic.md) — Zone alignment: correct service focus per neighborhood
7. [rules/seo-rules.md](rules/seo-rules.md) — GEO/AI SEO: micro-location signals, direct answers, duplicate prevention hooks

### Step 2: Deep-read every content file

Use parallel subagents (per `rules/multi-agent.md`) to read files. Each agent gets the full rules context and a batch of files to deep-read.

**Recommended agent split for full-site audit:**
- Agent 1: Blog posts 1-12 (`content/blog/*.tsx`)
- Agent 2: Blog posts 13-24
- Agent 3: Blog posts 25-35
- Agent 4: All location pages (`app/location/`) + service pages (`app/service/`) + homepage + other pages

Each agent MUST read each file completely (not grep, not skim) and check against ALL of the following:

### Step 3: Check every file against every rule

**For blog posts** (`content/blog/*.tsx`):

Content accuracy (content-accuracy.md):
- Forbidden guarantee language: "get your deposit back", "ensure your deposit", "guarantee", "100% guaranteed", "will eliminate"
- Equipment claims: "HEPA", "Dyson", specific chemical names as standard
- Team size: any mention of 3+ cleaners
- Grout/tile: presented as standard (must be add-on)
- Inside appliances: inside oven/fridge presented as standard deep clean (must be add-on or move-in/out)
- Surface care: specialized treatments (pH-neutral, marble care, hardwood conditioning) presented as standard
- Scope: ladder work above 2 steps, moving furniture >25lbs

Brand voice (brand-voice.md):
- Forbidden words: "delve", "elevate", "unlock", "tapestry", "landscape", "game-changer", "revolutionize", "hidden gem", "look no further", "in today's fast-paced world", "top-notch"
- Passive voice where active is better
- Robotic/AI-sounding phrasing

SEO structure (blog-seo.md):
- ArticleSchema present with authorType="Person"
- FAQSchema present with 4+ real Q&As
- HowToSchema present (when applicable) with 4+ steps, no brand names in supplies
- quick-answer CSS class on first content section
- 5+ internal links (up to hub, service page, location page, related blog, /booking CTA)
- H1→H2→H3 hierarchy (no skipped levels)
- Word count 1200+ (estimate from JSX text content)
- Published/Updated dates displayed
- AuthorBio component at bottom

Images (blog-images.md):
- loading="lazy" on all images
- decoding="async" on all images
- Explicit width and height attributes
- Descriptive alt text (not generic "cleaning service")
- Verified Unsplash CDN URL format
- No duplicate photo IDs across blog posts
- **Broken image check**: curl every Unsplash URL in `data/blog-posts.ts` and every `<img src=` in blog post components — must return HTTP 200. Flag any non-200 as LEGAL RISK (broken thumbnails visible to users and Google).

Keywords (keyword-optimization.md):
- Primary keyword in title, H1, first 100 words, and meta description
- Max 3 exact-match primary keyword per 1500 words
- No same keyword phrase in consecutive sentences
- No more than 1 keyword per sentence
- 50% of H2s contain primary keyword, rest use variations

**For location pages** (`app/location/`):
- Zone alignment (location-logic.md): service focus matches zone (coastal=vacation rental, suburban=deep clean, urban=standard)
- GEO signals (seo-rules.md): 2+ specific landmarks, intersection/highway access, nearby neighborhoods mentioned, local vernacular used
- Duplicate prevention (seo-rules.md): narrative hook (A/B/C) varies from adjacent pages
- Content accuracy: all rules from above
- Brand voice: all rules from above

**For service pages** (`app/service/`):
- Service inclusions match `constants.ts` SERVICES array exactly
- Add-ons clearly labeled as additional cost
- Content accuracy: all rules
- Brand voice: all rules

**For homepage & other pages** (`app/page.tsx`, `components/HomeContent.tsx`, etc.):
- Content accuracy: all rules
- Brand voice: all rules

## Output format

Present findings as tables grouped by severity:

```
## LEGAL RISK (fix immediately)
| File | Line | Issue | Rule |
|------|------|-------|------|
| content/blog/Example.tsx | 45 | "get your deposit back" — forbidden guarantee | content-accuracy.md |

## SEO (fix before next deployment)
| File | Line | Issue | Rule |
|------|------|-------|------|
| content/blog/Example.tsx | — | Missing FAQSchema | blog-seo.md §1C |
| content/blog/Example.tsx | — | Only 3 internal links (need 5) | blog-seo.md §6 |

## STYLE (fix when convenient)
| File | Line | Issue | Rule |
|------|------|-------|------|
| content/blog/Example.tsx | 12 | Uses "delve" — forbidden AI word | brand-voice.md |

## PASSED
- Content accuracy: 33/35 blog posts clean
- Brand voice: 35/35 clean
- SEO structure: 30/35 fully compliant
- Location zone alignment: 30/30 correct
- Total violations: 7 (2 legal, 3 SEO, 2 style)
```

## After the audit

- If violations are found, ask: "Want me to fix these now?"
- If yes: fix all issues, then **re-run the full deep-read audit** to confirm zero violations
- Never mark the audit as complete until a clean re-run confirms 0 violations
- This is the autoresearch loop: audit → fix → re-audit → repeat until metric = 0
