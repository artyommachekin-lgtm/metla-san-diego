# GBP Gallery Photo Upload Workflow

## When to Use
When the user says "upload photos to GBP," "add pictures to Google," "GBP gallery," or similar. This is for uploading photos directly to the GBP **photo gallery** — NOT for creating GBP posts (use `gbp-posting.md` for posts).

**Why it matters:** GBP gallery photos are permanent "By owner" images that appear in Maps, Search, and the business listing. Post images are temporary and tied to individual updates. Gallery photos signal an active, professional business and directly impact local pack rankings.

---

## Step 1: Find Photos

Check the typical asset locations for recent cleaning photos:

```bash
ls -la /Users/user/Downloads/openphone-photos-*/*.jpeg 2>/dev/null | head -40
ls -la /Users/user/Downloads/*.jpeg /Users/user/Downloads/*.jpg /Users/user/Downloads/*.png 2>/dev/null | head -40
```

Photos are typically named by cleaner and date: `{cleaner}-{date}-{room}.jpeg`
- Common cleaners: Karin, Joe, Alejandra, Joanna, Blanca
- Common rooms: bathroom, kitchen, bedroom, living-room, cooktop, shower, nursery

---

## Step 2: Review Each Photo

**View every photo** using the Read tool before selecting. Check for:

### MUST SKIP (do not upload):
- **Faces visible** — in mirrors, reflections, or direct shots. Privacy violation risk.
- **Toilet close-ups** — unflattering, can trigger negative reactions.
- **Personal items visible** — medications, private documents, children's names, addresses.
- **Cluttered/messy scenes** — defeats the purpose of showcasing clean results.
- **Blurry or dark photos** — low quality reflects poorly on the business.

### PREFER (prioritize these):
- **Clean "after" shots** — bright, well-lit rooms showing the result.
- **Kitchen surfaces** — countertops, cooktops, sinks gleaming.
- **Bathroom vanities** — mirrors, counters, fixtures sparkling.
- **Wide room shots** — show the full scope of the clean.
- **Detail shots** — close-ups of fixtures, hardware, tile that show quality.
- **Vacation rental staging** — beds made, rooms pristine, luxury feel.

### Categories to aim for (variety matters):
- Bathrooms (showers, vanities, tubs)
- Kitchens (counters, cooktops, appliances)
- Bedrooms (made beds, clean surfaces)
- Living areas (wide shots)
- Detail/specialty (marble, fixtures, staging)

---

## Step 3: Upload to GBP Gallery via Claude in Chrome

Use the `mcp__Claude_in_Chrome__*` toolset (DOM-aware browser control). No file copy is needed — `file_upload` accepts any absolute path via the OS file picker, and supports multi-file selection in a single call when the page input is multi-file (the GBP gallery input is).

### 3a. Navigate to GBP

**Two profiles exist — upload to the correct one:**

| Profile | Google Account | When to Use |
|---------|---------------|-------------|
| **Metla House Cleaning San Diego** | metlacleanteam@gmail.com | Default. All non-La Jolla photos. |
| **Metla House Cleaning La Jolla** | Owner's PERSONAL account | La Jolla/coastal luxury photos only. |

1. `navigate` to `https://business.google.com`
2. Use `get_page_text` (or `find`) to verify you're on the **correct account** for the target profile
3. If wrong account: ask user to switch (don't log out yourself)
4. `find` the correct business in the business list

### 3b. Open Photo Upload
1. `find` and click **"Add photo"** on the target business row
2. A new tab will open to Google Search with the GBP management panel — use `tabs_create_mcp` / `tabs_close_mcp` as needed to manage tabs and switch to the new one
3. Look for the **"Add photos and videos"** dialog (may appear in an iframe — `get_page_text` to confirm it's visible)
4. `find` and click **"Select images and videos"** button

### 3c. Upload Files
1. Use `file_upload` to select all chosen photo files. Pass the array of absolute paths directly — e.g. `/Users/user/Downloads/openphone-photos-2026-XX-XX/{cleaner}-{room}.jpeg`. The GBP gallery input accepts multiple files in one call.
2. No copy/paste into the project dir is required. Use the originals wherever they live.
3. Wait for upload to finish. Verify with `get_page_text`:
   - Confirm thumbnail count matches the number of files uploaded
   - Confirm "Uploading…" / progress indicators are gone
   - If needed, use `javascript_tool` to count thumbnail elements precisely, e.g. count `img` tiles in the uploader, or inspect for any error states
4. If anything looks off, use `read_console_messages` and `read_network_requests` to debug.
5. Photos will show as **"Pending"** — Google reviews them before publishing (usually within 24 hours).

### 3d. Verify and Stop Before Publishing
1. Use `get_page_text` to confirm the upload state (thumbnails present, no in-progress indicators, upload count matches).
2. **STOP before publishing — take a screenshot and let the user verify.** This is a non-negotiable rule from the parent skill. Even though `get_page_text` confirms mechanics, the user must eyeball the final visual before publish.
3. After user approval, complete the publish action.

---

## Step 4: Post-Upload

No file cleanup is needed (no copies were made). Report to the user:
- How many photos uploaded
- Which categories covered (bathrooms, kitchens, bedrooms, etc.)
- Which profile (Main SD vs La Jolla)
- Anything skipped and why

---

## Recommended Upload Cadence

- **After every cleaning job**: Ask cleaners to take 3-5 photos (2 after shots, 1 detail, 1 wide room)
- **Weekly batch upload**: Upload accumulated photos every week
- **Aim for**: 5-15 new photos per week to signal an active business
- **Current gallery**: 420+ photos on Main SD, 4 on La Jolla (as of Mar 23, 2026)

---

## Photo Selection Log (for reference)

### Mar 17, 2026 — First batch upload (13 photos)
- **Joanna** (vacation rental, Mar 15): marble shower, bathroom vanity, master bedroom, rooftop wide — 4 photos
- **Joe** (Mar 16): cooktop, room-5, room-3, room-7 — 4 photos
- **Alejandra** (Mar 16): shower — 1 photo
- **Blanca** (Mar 15): nursery room — 1 photo
- **Karin** (Mar 17): living room, room-2, dining room — 3 photos
- **Skipped**: blanca-bathroom-vanity (face in mirror), alejandra-bathroom (toilet), alejandra-room-1 (cluttered), blanca-kids-closet (personal items)

### Mar 19, 2026 — Second batch upload (15 photos)
- **Maribel** (move-in/out townhouse, Mar 18): hallway, kitchen (2 angles), drawer interiors, bedroom, library (2), marble shower, bathroom, closets (2), master bath double vanity, walk-in closet, bedroom with balcony, laundry room, walk-in shower — 15 photos
- **Campaign reserve**: karin-03 (kitchen counter), karin-04 (clean fridge interior), karin-08 (dirty fridge before) — 3 photos saved to campaign-reserve folder for before/after content
- **Skipped**: karin-01 (face in mirror), karin-02 (wall damage), karin-05 (toilet close-up), karin-06 (client belongings), karin-07 (messy mid-move), karin-09 (dirty fridge — before photo), karin-10 (face in mirror), alejandra-01 (weather app screenshot, not a cleaning photo)
- **Deduped**: 8 Joe Adams photos removed (identical to Mar 15/17 downloads)

### Mar 23, 2026 — Third batch upload (10 photos across 2 profiles)

**Source**: 38 photos from `/Users/user/Downloads/openphone-photos-2026-03-23/` (Blanca 7, Eva 18, Leticia 13)

**La Jolla GBP** (5 uploaded, 1 removed before publish → **4 live** — first-ever gallery upload to LJ profile):
- **Blanca**: luxury spa bathroom with soaking tub & granite surround, master bath wide shot with vanity & walk-in shower, powder room with vessel sink & granite counter — 3 photos
- **Leticia**: bathtub with sparkling subway tile — 1 photo
- **Removed**: leticia living room — window view revealed North Park location, inconsistent with La Jolla profile

**Main SD GBP** (5 photos):
- **Eva** (move-out clean): kitchen wide shot, inside fridge (clean), inside oven (clean) — 3 photos
- **Leticia**: bathroom vanity (staged vacation rental), kitchen/dining area — 2 photos

**Campaign reserve** (assigned to future content — see photo catalog in previous session):
- 28 remaining photos cataloged with content assignments (GBP posts, FB+IG, before/after collages)
- Key assets: Eva's 15 move-out photos (kitchen, bathrooms, bedrooms), Blanca's 4 remaining luxury photos, Leticia's 8 remaining vacation rental photos

**Skipped**: eva-01 (blurry hallway), eva-05 (toilet close-up), eva-08 (personal items on counter), leticia-06 (face visible in mirror), leticia-12 (dark/underexposed)

---

## Checklist

```
- [ ] Found photos in Downloads / openphone-photos-* folder
- [ ] Reviewed each photo for privacy/quality issues
- [ ] Selected best photos (variety of rooms)
- [ ] Confirmed correct GBP profile (Main SD vs La Jolla) and correct Google account
- [ ] Navigated to GBP and opened photo upload dialog
- [ ] Uploaded all photos via file_upload (multi-file, original paths — no copy needed)
- [ ] Verified upload via get_page_text (thumbnails present, no "Uploading" indicators)
- [ ] Took final pre-publish screenshot — user verified before publish
- [ ] Reported upload summary to user
```
