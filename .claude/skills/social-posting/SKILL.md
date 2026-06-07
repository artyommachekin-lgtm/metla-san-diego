---
name: social-posting
description: Post to social media (GBP, Facebook, Instagram) or upload photos to the GBP gallery. Checks the content schedule, locates assets, and walks through the posting process on the correct platform.
user_invocable: true
metadata:
  tags: social-media, gbp, facebook, instagram, meta, posting, marketing, photos
---

## When to use

Use when the user says "let's post," "/post," "time to post," "do the social media posting," "upload photos to GBP," "add pictures to Google," or similar. This skill handles ALL social media posting — GBP, Facebook, Instagram — and GBP gallery photo uploads.

## How it works

> **Copy rule:** before writing or editing ANY caption or offer text, read `.agent-memory/copywriter.md` — the house voice (§2.5) and the turnover-≠-deep-clean scope. Every caption must match it and pass its pre-publish checklist.

### Step 1: Read the Content Schedule

Read the content schedule to find today's posting row(s):
- File: `/Users/user/Downloads/metla San Diego/.agent-memory/content-expansion-schedule.md`
- Find ALL rows matching today's date (there may be multiple — e.g., both a GBP and FB+IG post on the same day)
- Present the user with what's due today

### Step 2: Determine the Platform AND Profile

Based on the **Type** column in the schedule, or user request:

| Type | Platform | Profile | Workflow |
|------|----------|---------|----------|
| GBP | Google Business Profile post | **Main SD** | [gbp-posting.md](../../.agent/workflows/gbp-posting.md) |
| LJ GBP | Google Business Profile post | **La Jolla** | [gbp-posting.md](../../.agent/workflows/gbp-posting.md) |
| GBP Photos | GBP gallery upload | **Main SD** | [gbp-photos.md](../../.agent/workflows/gbp-photos.md) |
| LJ GBP Photos | GBP gallery upload | **La Jolla** | [gbp-photos.md](../../.agent/workflows/gbp-photos.md) |
| FB+IG | Facebook + Instagram via Meta Business Suite | — | [meta-posting.md](../../.agent/workflows/meta-posting.md) |
| FB | Facebook only | — | [meta-posting.md](../../.agent/workflows/meta-posting.md) (uncheck IG) |
| IG | Instagram only | — | [meta-posting.md](../../.agent/workflows/meta-posting.md) (uncheck FB) |

**GBP Photos** is not tied to the content schedule — it's triggered when the user says "upload photos to GBP" or when new cleaning photos are available in the Downloads folder.

If multiple posts are due today, handle them one at a time in schedule order.

### Two GBP Profiles — Critical Differences

Metla operates **two separate Google Business Profiles** on **two separate Google accounts**:

| | Main San Diego | La Jolla |
|---|---|---|
| **Profile name** | Metla House Cleaning San Diego | Metla House Cleaning La Jolla |
| **Google account** | metlacleanteam@gmail.com | Owner's PERSONAL Google account |
| **Phone** | (707) 414-8930 | (858) 267-4685 |
| **Address** | Service area (no physical address shown) | 727-737 Pearl St, La Jolla 92037 |
| **Service areas** | Greater San Diego (excluding La Jolla overlap) | La Jolla, UTC, Torrey Pines, UCSD area |
| **Photo style** | All neighborhoods — variety | Luxury/coastal homes only |
| **Caption phone** | (707) 414-8930 | (858) 267-4685 |
| **Post CTA links** | Main blog posts | La Jolla-specific blog posts (#35, #36, #39, #42) |

**Account switching:** If you see you're on the wrong account (e.g., metlacleanteam when you need personal, or vice versa), ask the user to switch accounts. Do NOT attempt to log out — just navigate to business.google.com and let the user handle the account switch.

**Never cross-contaminate:**
- Don't post La Jolla-specific content on the main SD profile
- Don't post main SD neighborhood content (Scripps Ranch, etc.) on La Jolla profile
- Keep service area references distinct

### Step 3: Execute the Workflow

Follow the appropriate workflow file end-to-end. The workflows contain all step-by-step instructions for:
- Locating caption and media files
- Content accuracy review
- Browser automation via Claude in Chrome MCP (`mcp__Claude_in_Chrome__*`)
- Platform-specific requirements (CTA buttons for GBP, geolocation for Meta, etc.)
- Final review checkpoint (always stop before publishing)

### Step 4: Post-Posting

After each post:
1. Clean up any copied media files
2. Update the content schedule
3. If more posts are due today, ask the user if they want to continue to the next one

## Key Rules (apply to ALL platforms)

These rules are non-negotiable across all social media posting:

1. **ALWAYS add geolocation/location tag** — every post on every platform must have a location signal
2. **ALWAYS share to Story** (Meta only) — enables additional reach on FB + IG
3. **ALWAYS stop before publishing** — take a screenshot, let the user verify
4. **Content accuracy check** — scan every caption before posting (see `.agent/workflows/content-accuracy.md`)
5. **Format rotation** — never post the same delivery format (carousel, reel, video, static) twice in a row on the same platform. Check the last post's format before proceeding.
6. **Carousel is the default for FB+IG** — unless the content schedule specifies otherwise: 1 AI opener image + 4 real after photos from cleaners' daily submissions
7. **For GBP, prefer video** — GBP doesn't support carousels. Use single video or single photo.
8. **Use fresh photos** — cleaners submit photos almost daily via OpenPhone. These are the PRIMARY media source, not pre-rendered Remotion videos.
9. **File uploads** — `mcp__Claude_in_Chrome__file_upload` accepts any absolute path on disk (uses the native OS file picker). Upload media directly from its source location (`/Users/user/Downloads/metla-marketing/out/`, `/Users/user/Downloads/openphone-photos-*/`, etc.) — no need to stage files in the project directory. For carousels, pass an ordered array of paths in a single `file_upload` call.
10. **Image-text consistency** — Before posting, verify the caption matches the actual photos:
    - If photos show multiple different rooms/locations, caption must acknowledge variety (not "this bathroom" singular) — frame as "recent results" or "different homes, same standard"
    - If caption says "swipe to see the kitchen" but photos show bathrooms, rewrite
    - If using photos from different jobs, never imply they're from one job unless they are
    - AI opener goes LAST in carousel (slide 5), not first — real result photos should lead as the grid thumbnail/feed preview
11. **Update media tracker on new photos** — Every time new cleaner photos are downloaded from OpenPhone, immediately add them to the media-usage-tracker.md file under "Cleaner Photos NOT Yet Used in Posts" with cleaner name, date, and room description. This ensures the tracker stays current and prevents accidental reuse.

## Workflow Files Reference

- [GBP Posting Workflow](../../.agent/workflows/gbp-posting.md) — Google Business Profile posting steps
- [GBP Photos Workflow](../../.agent/workflows/gbp-photos.md) — GBP gallery photo uploads (permanent "By owner" images)
- [Meta Posting Workflow](../../.agent/workflows/meta-posting.md) — Facebook + Instagram posting steps (carousel, reel, static)
- [OpenPhone Photo Collection](../../.agent/workflows/openphone-photo-collection.md) — Collecting real photos from cleaners
- [Gemini Image Generation](../../.agent/workflows/gemini-image-generation.md) — Generating AI cleaner opener images
- [Content Accuracy](../../.agent/workflows/content-accuracy.md) — Service scope, legal, equipment claim rules
- [Social Media Visuals](../../.agent/workflows/social-media-visuals.md) — Photo formats, watermarking, variety rotation, format dimensions
- [Brand Voice](../../.agent/workflows/brand_voice.md) — Forbidden AI words, tone rules

## Content Schedule Location

The master content schedule with all dates, platforms, caption files, and media assignments:
`/Users/user/Downloads/metla San Diego/.agent-memory/content-expansion-schedule.md`

## Asset Locations

| Asset Type | Path | Use For |
|-----------|------|---------|
| **Fresh cleaner photos** | `/Users/user/Downloads/openphone-photos-*/*.jpeg` or `/Users/user/Downloads/{cleaner}-*.jpeg` | Carousel slides 2-5, GBP gallery, all photo posts |
| **AI opener images** | `/Users/user/Downloads/metla San Diego/gemini-image*.jpeg` | Carousel slide 1 (opener) — rotate between 3 images |
| Captions | `/Users/user/Downloads/metla-marketing/out/captions/` | All platforms |
| Videos | `/Users/user/Downloads/metla-marketing/out/Video-*.mp4` | Reels, GBP video posts |
| Collages/Graphics | `/Users/user/Downloads/metla-marketing/out/Collage-*.png` or `Graphic-*.png` | Urgency graphics, branded overlays |

Caption file naming convention:
- `GBP-*.txt` — Google Business Profile captions
- `FB-*.txt` — Facebook captions (primary for combined FB+IG posts)
- `IG-*.txt` — Instagram-specific captions (more hashtags)

## Carousel Quick Reference (FB+IG Default)

| Slide | Content | Source |
|-------|---------|--------|
| 1-4 | Real after photos from recent cleanings | OpenPhone daily submissions |
| 5 | AI-generated cleaner in Metla teal shirt (closer) | `gemini-image{6,7,8}-*.jpeg` (rotate) |

- AI opener goes LAST (slide 5) — real photos lead as grid thumbnail. Testing shows AI opener first gets ~3x fewer views.
- AI opener rotation: Cycle through all 3 before repeating. Track in meta-posting.md rotation log.
- Photo selection: Prefer photos from the same neighborhood when possible, different rooms for variety. If mixing jobs, caption must acknowledge multiple results.
- Screen every photo: No faces, no personal items, no toilets, no blurry/dark shots.
