# Meta Business Suite Posting Workflow (Facebook + Instagram)

## When to Use
When the user says "let's do our FB post," "time for the Instagram post," "Meta post," or similar. Also triggered by the `/post` skill when the content schedule has an FB+IG row for today.

---

## Step 1: Check the Content Schedule

1. Read `/Users/user/Downloads/metla San Diego/.agent-memory/content-expansion-schedule.md`
2. Find today's date and match it to the row in the UNIFIED TABLE
3. Identify:
   - **Location** (e.g., Scripps Ranch, University City, La Jolla)
   - **What** (e.g., "Bathroom vanity," "Kitchen before/after")
   - **Delivery Format** (Carousel / Reel / Long Video / Static — from the Format column)
   - **Caption file name** (e.g., `FB-Deep-Clean-Bathroom-Scripps-Ranch.txt`)

---

## Step 2: Determine Post Format

Check the **Format** column in the content schedule. If no format is specified, default to **Carousel** for FB+IG posts.

### Format Rotation Rule
**Never use the same delivery format twice in a row on the same platform.** Check what format the last FB+IG post used:
- If last was Carousel → this one should be Reel or Video
- If last was Reel → this one should be Carousel or Static
- If last was Static → this one should be Carousel or Reel

### Delivery Formats

| Format | Structure | When to Use |
|--------|-----------|-------------|
| **Carousel** | 4 real after photos + 1 AI opener as slide 5 (5 images total) | **Default for FB+IG.** Multi-room showcases, general quality posts. ~40% of all FB+IG posts. |
| **Reel** | 15-30s video | Before/after reveals, process shots. ~30% of posts. |
| **Long Video** | 30-60s video | Full-home walkthroughs. ~20% of posts. Rare on Meta (better for GBP). |
| **Static** | 1 high-impact photo or urgency graphic | Testimonial graphics, urgency/seasonal pushes. ~10% of posts. |

---

## Step 3: Locate the Assets

### Media Source Priority (NEW — effective Mar 24, 2026)

**Primary sources** (use these first):
1. **Fresh cleaner photos** from OpenPhone daily submissions
   - Path: `/Users/user/Downloads/openphone-photos-*/*.jpeg` (session folders)
   - Also: `/Users/user/Downloads/{cleaner}-*.jpeg` (flat files in Downloads)
   - These are the MAIN content. Prefer photos from the last 1-3 days.
2. **AI opener images** (for carousel posts only)
   - Path: `/Users/user/Downloads/metla San Diego/gemini-image*.jpeg`
   - 3 available — rotate which one is used (see AI Opener Rotation below)

**Secondary sources** (Remotion pipeline — use for reels/videos/graphics):
3. **Remotion videos** for Reels: `/Users/user/Downloads/metla-marketing/out/Video-*.mp4`
4. **Remotion collages**: `/Users/user/Downloads/metla-marketing/out/Collage-*.png`
5. **Remotion graphics** for urgency/static: `/Users/user/Downloads/metla-marketing/out/Graphic-*.png`

### AI Opener Image Rotation

3 AI-generated cleaner images available for carousel openers. **Rotate — never use the same one for consecutive carousel posts.**

| File | Scene | Best For |
|------|-------|----------|
| `gemini-image6-mop.jpeg` | Cleaner mopping hardwood floors, back view | Living room, dining room, general posts |
| `gemini-image7-doorway.jpeg` | Cleaner standing in doorway facing living room | Full home, general posts |
| `gemini-image8-island.jpeg` | Cleaner wiping marble kitchen counter | Kitchen posts |

**Track usage:**

| Date | AI Image Used | Post |
|------|---------------|------|
| Mar 24 | gemini-image8-island | Post #7 SR carousel |
| Apr 4 | gemini-image7-doorway | Post #15 HC bathroom carousel (last slide) |

Pick the next unused image in rotation. When all 3 have been used, cycle back to the first.

### Captions
- Path: `/Users/user/Downloads/metla-marketing/out/captions/`
- FB captions: `FB-*.txt` (primary for combined FB+IG posts)
- IG captions: `IG-*.txt` (has 20-25 hashtags — use for IG-only posts)
- **When cross-posting FB+IG**, use the FB caption file as the primary text

### File Access (Claude in Chrome)
The Claude in Chrome `file_upload` tool drives the native OS file picker, so **any absolute path on disk works** — no need to stage files in the project directory. Upload directly from:
- `/Users/user/Downloads/openphone-photos-*/` (real cleaner photos)
- `/Users/user/Downloads/metla San Diego/gemini-image*.jpeg` (AI openers)
- `/Users/user/Downloads/metla-marketing/out/` (Remotion videos/graphics/collages)

For carousels, `file_upload` accepts an **array of absolute paths in a single call**, and Meta's file input takes them all at once. Slide order in Meta is determined by upload order — pass paths in the order you want slides to appear.

---

## Step 4: Review the Caption

Before pasting, scan the caption for content accuracy violations:

- **Grout cleaning** → Must say it's an ADD-ON, never standard
- **Team size** → Never say 3+ cleaners. Always 1-2. Larger homes = more time, not more people.
- **Equipment claims** → No HEPA, no Dyson, no specific chemical promises. Say "professional-grade."
- **Scope of work** → No ladder work above 2 steps. No outside windows. No carpet shampooing as standard.
- **Inside appliances** → We clean appliance EXTERIORS only. Inside oven/fridge is an add-on.
- **Surface care** → No "marine-safe products" or specialized stone care as standard. "Available upon request" only.
- **Format-specific language** → If caption says "watch" or "swipe through" but you're posting a different format, rewrite that line.

If violations are found, fix the caption text before posting.

---

## Step 5: Assemble Media by Format

### Carousel Assembly (Default for FB+IG)

1. **Select 4 real after photos** (Slides 1-4):
   - Source from recent OpenPhone downloads (prefer last 1-3 days)
   - Prioritize variety: different rooms (kitchen, bathroom, living room, bedroom, detail shot)
   - Match the post's neighborhood when possible
   - **Screen each photo for:**
     - No faces visible (including reflections in mirrors)
     - No toilet close-ups
     - No personal items (wifi passwords, mail, family photos)
     - No blurry/dark/unusable shots
     - Inside oven/fridge = add-on, avoid implying it's standard

2. **Select AI opener** (Slide 5 — LAST):
   - Check rotation log above — pick the next unused `gemini-image*.jpeg`
   - AI opener goes LAST so a real after-photo leads the grid thumbnail/feed preview

3. **Build the upload-order array** of absolute paths. Order matters — Meta lays slides out in upload order:
   ```
   [
     "/Users/user/Downloads/openphone-photos-.../slide1-{room}.jpeg",
     "/Users/user/Downloads/openphone-photos-.../slide2-{room}.jpeg",
     "/Users/user/Downloads/openphone-photos-.../slide3-{room}.jpeg",
     "/Users/user/Downloads/openphone-photos-.../slide4-{detail}.jpeg",
     "/Users/user/Downloads/metla San Diego/gemini-image{6|7|8}-*.jpeg"   ← AI opener LAST
   ]
   ```

### Reel Assembly

1. Locate video file from `metla-marketing/out/Video-*.mp4` matching the post topic
2. If no pre-rendered video exists, check for raw phone-shot clips in Downloads
3. Upload directly via `file_upload` with the absolute path (Meta auto-converts all video uploads to Reels)

### Static Image Assembly

1. Select 1 best photo (urgency graphic from Remotion, or single hero after photo)
2. Upload directly via `file_upload` with the absolute path

---

## Step 6: Post to Meta Business Suite (Claude in Chrome)

All browser work is done through the Claude in Chrome MCP (`mcp__Claude_in_Chrome__*`). Default to `find` + `form_input` + `get_page_text` for normal interactions; reach for `javascript_tool` when you need to verify DOM state (slide counts, toggle state, location tag presence).

### 6a. Navigate & Open Post Composer
1. `navigate` to `https://business.facebook.com`
2. Use `get_page_text` to confirm Meta Business Suite has loaded
3. Verify you're on the **Metla House Cleaning San Diego** page (read header text; if wrong page, `find` the page switcher and switch)
4. For **Carousel or Static**: `find` and click **"Create post"**
5. For **Reel**: `find` and click **"Create reel"**

### 6b. Check Platform Targets
1. Read the composer area with `get_page_text` to confirm the post is set to publish to **both Facebook and Instagram**
2. Variants by schedule type:
   - **FB+IG** → both checked
   - **FB only** → uncheck Instagram (`find` the IG checkbox/toggle, click it off)
   - **IG only** → uncheck Facebook
3. After toggling, verify with `javascript_tool` (read the checked state of the platform checkboxes) before continuing

### 6c. Upload Media FIRST (Before Entering Caption)
**CRITICAL ORDER**: Upload media BEFORE typing the caption. When you upload a video, Meta switches to the Reel composer and clears any existing text.

**For Carousel (multi-image):**
1. `find` the **"Add Photos"** button and click it
2. Call `file_upload` ONCE with the ordered array of 5 absolute paths (4 real after photos, then AI opener as slide 5)
3. Wait for all uploads to complete — poll with `get_page_text` until thumbnails appear; for stubborn cases use `javascript_tool` to count thumbnail elements (should equal 5)
4. Verify slide order with `javascript_tool` — slide 5 should be the AI opener. If Meta reordered, use the drag-to-reorder UI (via `find` + the drag tools) to fix.
5. Confirm Meta auto-cropped images consistently (1:1 square)

**For Reel (video):**
1. `find` and click **"Add Video"** or **"Upload from desktop"**
2. Call `file_upload` with the single video's absolute path
3. Poll `get_page_text` until upload + processing completes
4. Meta will convert it to a Reel automatically

**For Static (single image):**
1. `find` and click **"Add Photos"**
2. Call `file_upload` with the single image's absolute path
3. Poll `get_page_text` until upload completes

### 6d. Enter Caption Text
1. `find` the caption / description field in the composer
2. Use `form_input` to paste the full caption text from the caption file (everything below the `---` separator, excluding the `[MEDIA]` header)
3. If a hashtag suggestion dropdown appears, dismiss it (press Escape via `find` + key handling, or click outside)
4. Verify the caption pasted in full by reading the field with `get_page_text` or `javascript_tool` (compare length / first+last 40 chars to source)
5. **IMPORTANT**: If a link preview appears from a URL in the caption text, **remove it** by clicking the X on the preview card. Link previews block Instagram cross-posting.

### 6e. ALWAYS Add Geolocation
**MANDATORY** — every post must have a location tag for local SEO signals.

1. `find` and click **"Location"** (or the location/pin icon)
2. Use `form_input` to type the neighborhood + "San Diego" (e.g., "Scripps Ranch, San Diego")
3. `find` the correct entry in the dropdown results and click it
4. Verify the tag is set — read the composer with `get_page_text` for the location string, or use `javascript_tool` to confirm the location chip element is present. Do not proceed without this confirmation.

### 6f. Select the Best Thumbnail (Reel/Video Only)
1. Look at the auto-generated thumbnail suggestions at the bottom (read with `get_page_text` / inspect with `javascript_tool`)
2. If none show the ideal "AFTER" frame, `find` and click **"Choose frame"**
3. Use the slider to scrub to the best moment — prefer:
   - Clean, bright "AFTER" frame with the teal "AFTER" label visible
   - Well-lit result shot (not the "BEFORE" dirty frame)
   - A frame that shows the full room/surface, not a close-up
4. `find` and click **"Save thumbnail"**

### 6g. Navigate to Share Settings (Reel Only)
1. `find` and click **"Next"** to proceed past the Reel editor
2. On the Edit screen, verify caption text and thumbnail look correct (`get_page_text`)
3. `find` and click **"Next"** again to reach the Share screen

### 6h. ALWAYS Share to Story
**MANDATORY** — every post should also be shared to Story for additional reach.

1. On the Share screen, `find` the **"Share to Story"** toggle(s)
2. Enable for both **Facebook Story** and **Instagram Story** (skip the one you unchecked in 6b for FB-only or IG-only posts)
3. Verify with `javascript_tool` — both toggle states should report ON (checked / aria-checked="true"). Don't take a screenshot's word for it; confirm via DOM.

### 6i. Final Review & Post
1. Take a screenshot (`mcp__computer-use__screenshot` if needed for the user, or use `get_page_text` for a textual summary)
2. **STOP before clicking Publish** — let the user review
3. Only click "Publish" / "Share now" when the user confirms

---

## Step 7: Post-Posting Cleanup

1. Update the content schedule: change status to `✅ Posted` and note the format used
2. Update the AI opener rotation log (if carousel was posted)
3. Confirm the post is live by navigating to the page and reading with `get_page_text`

(No file copies to clean up — `file_upload` reads source paths directly; nothing was staged in the project directory.)

---

## Platform-Specific Notes

### Facebook
- All video uploads become Reels (Meta changed this in 2025)
- **Carousel posts show as swipeable albums** — first image appears in feed, users swipe for more
- Link previews from URLs in caption text block Instagram → always remove
- Hashtags: 10 max recommended

### Instagram
- **Carousel is the highest-engagement format on Instagram** — prioritize it
- When cross-posting from Meta Business Suite, uses the same caption as Facebook
- All carousel images must have matching aspect ratios (auto-crop to 1:1 square)
- If you need different hashtags (IG allows 20-25), create a separate IG-only post
- Always include "Link in bio" instead of clickable URLs (IG doesn't support links in captions)
- The first image in a carousel is what appears in the Instagram grid — a real after-photo serves this role (AI opener is slide 5, not slide 1)

---

## Debugging Tips

If something goes wrong mid-flow:
- `read_console_messages` — surface JS errors / Meta client-side warnings
- `read_network_requests` — confirm upload POSTs succeeded (check status codes for `/graphql` or upload endpoints)
- `javascript_tool` — inspect any specific DOM state directly (slide count, toggle state, presence of location chip, platform-checkbox state)
- `tabs_create_mcp` — open a second tab for the caption file or schedule if you need to reference it without leaving the composer

---

## Checklist (copy-paste for each post)

```
- [ ] Found today's row in content schedule
- [ ] Determined post format (Carousel / Reel / Static) — NOT same as last post
- [ ] Located caption file in metla-marketing/out/captions/
- [ ] Reviewed caption for content accuracy violations
- [ ] Reviewed caption for format-specific language (rewrite if needed)

FOR CAROUSEL:
- [ ] Selected 4 real after photos from recent cleaner submissions (slides 1-4)
- [ ] Selected AI opener image, rotated from last use (slide 5 — LAST)
- [ ] Screened all photos for privacy/quality issues
- [ ] Built ordered absolute-path array (real photos first, AI opener last)
- [ ] file_upload called once with the array — verified 5 slides in correct order

FOR REEL:
- [ ] Located video file in metla-marketing/out/
- [ ] file_upload called with absolute path — upload + processing complete

FOR STATIC:
- [ ] Selected 1 best photo or graphic
- [ ] file_upload called with absolute path — upload complete

ALL FORMATS:
- [ ] Entered caption text via form_input (after media upload, not before)
- [ ] Verified caption pasted in full (get_page_text / javascript_tool)
- [ ] Removed link preview if one appeared (blocks Instagram)
- [ ] Added geolocation tag (neighborhood + San Diego) — verified present
- [ ] Selected best thumbnail (Reel only — AFTER frame)
- [ ] Verified correct platform targets (FB+IG / FB only / IG only) via DOM check
- [ ] Enabled Share to Story (FB + IG) — verified toggle state via javascript_tool
- [ ] Took screenshot for user review
- [ ] User confirmed — clicked Publish
- [ ] Updated AI opener rotation log (carousel only)
```
