# GBP (Google Business Profile) Posting Workflow

## When to Use
When the user says "let's do our GBP post," "time for a GMB post," or similar.

---

## Step 1: Check the Content Schedule

1. Read `/Users/user/Downloads/metla San Diego/.agent-memory/content-expansion-schedule.md`
2. Find today's date and match it to the row in the UNIFIED TABLE
3. Identify:
   - **Location** (e.g., Scripps Ranch, University City, La Jolla)
   - **What** (e.g., "Bathtub deep clean," "Kitchen deep clean")
   - **Caption file name** (e.g., `GBP-Deep-Clean-Tub-Scripps-Ranch.txt`)

---

## Step 2: Locate the Assets

All marketing assets live in `/Users/user/Downloads/metla-marketing/out/`.

### Captions
- Path: `/Users/user/Downloads/metla-marketing/out/captions/`
- GBP captions start with `GBP-`
- FB captions start with `FB-`
- IG captions start with `IG-`

### Media (Videos & Collages)
- Path: `/Users/user/Downloads/metla-marketing/out/`
- Videos: `Video-*.mp4`
- Collages: `Collage-*.png`
- Match the media file name to the caption file name (e.g., `GBP-Deep-Clean-Tub-Scripps-Ranch.txt` → `Video-Deep-Clean-Bathroom-Tub-Scripps-Ranch.mp4`)
- **Prefer video** over collage for GBP posts (higher engagement)
- If no video exists for this post, use the collage

### File Access
The browser tool (`mcp__Claude_in_Chrome__file_upload`) uses the OS native file picker and accepts **any absolute path**. Upload directly from `/Users/user/Downloads/metla-marketing/out/<file>` — no copying into the project directory, no cleanup step.

---

## Step 3: Review the Caption

Before pasting, scan the caption for content accuracy violations:

- **Grout cleaning** → Must say it's an ADD-ON, never standard. See `content-accuracy.md` lines 91-96.
- **Team size** → Never say 3+ cleaners. Always 1-2. Larger homes = more time, not more people.
- **Equipment claims** → No HEPA, no Dyson, no specific chemical promises. Say "professional-grade."
- **Scope of work** → No ladder work above 2 steps. No outside windows. No carpet shampooing as standard.
- **Inside appliances** → We clean appliance EXTERIORS only. Inside oven/fridge is an add-on.

If violations are found, fix the caption text before posting.

---

## Step 4: Post to GBP via Claude in Chrome

Browser actions use the `mcp__Claude_in_Chrome__*` toolset (DOM-aware Chrome extension).

### 4a. Navigate & Open Post Dialog
1. `navigate` to `https://business.google.com`
2. Use `get_page_text` to verify you're on the **metlacleanteam@gmail.com** account (for Main SD) or the owner's personal account (for La Jolla). If on the wrong account, ask the user to switch — do NOT attempt to log out.
3. `find` the **Metla House Cleaning San Diego** (Verified) row in the business list
4. `find` and click **"Create post"** on the correct profile's row

### 4b. Fill in the Post
1. Post type: **Update** (default — leave as-is)
2. `find` the **Description** textbox and use `form_input` to paste the full caption text
3. `find` and click **"Select images and videos"**
4. Use `file_upload` to upload the media file directly from `/Users/user/Downloads/metla-marketing/out/<file>` (video preferred)
5. Wait for upload to complete. Use `get_page_text` to confirm the "Uploading" indicator is gone; if uploads are erroring, use `read_console_messages` / `read_network_requests` to debug.

### 4c. ALWAYS Add a CTA Button
This is **mandatory** — never skip this step. Buttons drive link juice to our pages.

1. Scroll down to **"Add more details"**
2. `find` and click **"+ Button"**
3. Select button type from the dropdown:
   - **"Learn more"** → when linking to a blog post or location page
   - **"Book"** → when linking to the booking page
4. Use `form_input` to enter the full URL in **"Link for your button"** field

#### Button Link Strategy (rotate to spread SEO juice):
- If the caption mentions a specific blog post → link to that blog post, use "Learn more"
- If the caption is location-specific and doesn't reference a blog → link to the location page (e.g., `https://metlahousecleaningsandiego.com/location/scripps-ranch`), use "Learn more"
- Every 3rd post or so → link to the booking page (`https://metlahousecleaningsandiego.com/booking`), use "Book"
- **Always use the full `https://metlahousecleaningsandiego.com/...` URL** (www will redirect, but use the canonical non-www version... actually the site redirects non-www to www, so either works)

### 4d. Verify the Button Link
**MANDATORY** — before clicking Post:
1. `tabs_create_mcp` to open a **new background tab** at the exact URL you entered in the button link field
2. Use `get_page_text` on that tab to confirm the page loads correctly (no 404, no redirect loop). If you need to confirm the URL didn't redirect somewhere unexpected, use `javascript_tool` to read `window.location.href`.
3. `tabs_close_mcp` to close the verification tab — no need to manually switch back; the GBP tab is still where you left it.

### 4e. Final Review & Post
1. Take a screenshot for the user to verify (final pre-publish visual review — layout matters here)
2. **STOP before clicking Post** — let the user review
3. Only click "Post" when the user confirms

---

## Step 5: Post-Posting Cleanup

1. Update the content schedule status from `📝` to `✅` if applicable
2. Confirm the post is live by re-navigating to the GBP profile and using `get_page_text` to spot-check the new post appears

---

## Caption Variety Rules (Phase 1+ — March 30 onward)

> Added Mar 22, 2026 after repetition audit found 59% of captions used identical "[Room] deep clean in [Location]" openers.

### Opening Line Rotation (never repeat same type back-to-back)

| Type | Example | Max Frequency |
|------|---------|---------------|
| Question | "When was the last time you looked behind your oven?" | 1 in 4 |
| Scenario | "Guests check out at 11, new ones arrive at 4." | 1 in 4 |
| Seasonal/Timely | "Spring in Hillcrest means pollen on every surface." | 1 in 4 |
| Emotional | "There's a reason you keep closing that bathroom door." | 1 in 4 |
| Direct (old style) | "Kitchen deep clean in University City 92122." | **Max 1 in 4** |

### Grime Description Rule
- Max **1 in 3** posts uses a three-item grime list ("X, Y, and Z — all gone")
- Alternatives: single vivid detail, before/after narrative, focus on result/feeling

### CTA Rotation (by post position in the current phase)

| Post Position | CTA Style | Example |
|--------------|-----------|---------|
| 1st, 7th | Urgency | "Spring spots are filling fast" |
| 2nd, 8th | Straightforward | "Book at metlahousecleaningsandiego.com/booking" |
| 3rd, 9th | Social proof | "Join 235+ San Diego families who rated us 5 stars" |
| 4th, 10th | Question | "Ready to see the difference?" |
| 5th, 11th | Slot availability | "We just opened a few slots near [Location]" |
| 6th, 12th | No pressure | Just phone + link, no urgency language |

### Blog Link Rule
- Never link to the same blog post from more than **2 GBP captions**
- With 38+ blogs available, every caption should link to a unique or near-unique blog

### Neighborhood Reference Rule
- Pick **ONE** sub-neighborhood per post (not a list of all 4)
- Rotate which sub-neighborhood gets mentioned
- Example: "Near Miramar Lake" (not "Stonebridge Estates, the Villages, Old Scripps Ranch, and Scripps Highlands")

### ⚠️ NO PHONE NUMBERS IN GBP CAPTIONS
Phone numbers in GBP post AND offer descriptions trigger **auto-rejection** by Google. NEVER include a phone number in the caption text. The phone is already on the profile — let Google's "Call" button handle it.

### Main SD GBP Caption Rules
- Phone: **OMIT from caption** (auto-rejection risk). Main business number is (707) 414-8930 but do NOT put it in GBP posts.
- CTA button handles calls — use "Book" or "Learn more" buttons instead

### La Jolla GBP Caption Rules (additional)
- Phone: **OMIT from caption** (auto-rejection risk). La Jolla number is (858) 267-4685 but do NOT put it in GBP posts.
- Neighborhoods: Bird Rock, The Shores, La Jolla Village, Muirlands, Windansea, UCSD area
- Brand: "Metla House Cleaning" (NOT "Metla House Cleaning La Jolla")
- Blog links: Point to La Jolla blogs (#35, #36, #39, #42 when deployed)

---

## Quick Reference: GBP Button Types

| Button Label | Use When | URL Target |
|---|---|---|
| Learn more | Linking to blog or location page | `/blog/...` or `/location/...` |
| Book | Linking to booking page | `/booking` |
| Call now | Rarely — phone is already in caption | N/A |
| Order online | Never — we're not e-commerce | N/A |
| Buy | Never | N/A |
| Sign up | Never | N/A |

---

## Checklist (copy-paste for each post)

```
- [ ] Found today's row in content schedule
- [ ] Located caption file in metla-marketing/out/captions/
- [ ] Located media file (video or collage) in metla-marketing/out/
- [ ] Reviewed caption for content accuracy violations
- [ ] Pasted caption into GBP Description
- [ ] Uploaded media file directly from metla-marketing/out/
- [ ] Added CTA button (Learn more / Book)
- [ ] Entered button URL
- [ ] Verified button URL in background tab (page loads correctly, no redirect surprise)
- [ ] Took screenshot for user review
- [ ] User confirmed — clicked Post
- [ ] Updated content schedule status
```

---

## Offer Post Workflow

### When to Use
When creating a GBP Offer post (as opposed to an Update post). Offer posts appear with yellow/blue tags and a dedicated "Deals" section on mobile.

### Steps
1. `navigate` to GBP → `find` and click **"Add update"** (or "Create post")
2. Select post type: **"Add offer"** (NOT "Add update")
3. Fill in (use `form_input` for each field):
   - **Offer title** (required, max ~58 chars)
   - **Start date** and **End date**
   - **Description** (follow caption variety rules + content accuracy rules)
   - **Photo** — use `file_upload` with a real after photo, not stock — rotate photos between offers
   - **Coupon code** (WELCOME40, SPRING15, etc.)
   - **Link to redeem offer**: `https://www.metlahousecleaningsandiego.com/specials?utm_source=gbp&utm_medium=offer&utm_campaign={code}`
   - For La Jolla: use `utm_source=gbp-lj`
4. **CTA button**: Try "Call now" first. If not available on Offer posts, the auto "View Offer"/"Redeem online" button will link to the URL above.
5. Verify the redeem link in a background tab (`tabs_create_mcp` → `get_page_text` → `tabs_close_mcp`)
6. Screenshot for user review and Post

### Offer Content Accuracy Rules
- All content-accuracy.md rules apply
- Never promise outcomes ("guarantee your deposit back")
- "$40 off" is safe — it's a discount, not a promise
- "Free add-on" must specify which add-ons (inside fridge, inside oven, interior windows)
- Team size: 1-2 cleaners. Never mention 3+.

### Two Active Offers at All Times
Both profiles (Main SD + La Jolla) should always have:
1. **Always-on**: $40 Off Your First Cleaning (renew every 3 months)
2. **Seasonal**: Rotates ~every 2 months (Spring → Summer → Back-to-School → Holiday → New Year)

Full offer text and schedule: See `gbp-offer-campaign.md` in memory files.
