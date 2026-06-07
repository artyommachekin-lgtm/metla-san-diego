# Gemini AI Image Generation Workflow

## When to Use
When new AI-generated "cleaner from behind" images are needed for social media posts (Format B: Cleaner at work). Also when generating any other branded images via Google Gemini.

**Triggers:** "generate cleaner images," "we need more AI photos," "make Format B images," or when the content schedule calls for Format B posts and no suitable image exists.

---

## Prerequisites

- **Account**: artyom.machekin@gmail.com (personal Google account with Gemini Pro subscription)
- **Model**: Use the default model (currently "Nano Banana 2" or latest available)
- **Browser**: Claude in Chrome MCP (`mcp__Claude_in_Chrome__*`). Chrome's browser downloads land in the OS default download folder (`~/Downloads/`, i.e. `/Users/user/Downloads/`), NOT inside the project directory.

---

## Step 1: Plan the Images

Before generating, check what's already available in `/Users/user/Downloads/metla-marketing/public/ai-cleaners/`:

| File | Scene | Best For |
|------|-------|----------|
| `cleaner-kitchen-countertop.png` | Wiping granite countertop | Kitchen posts |
| `cleaner-bathroom-shower.png` | Scrubbing glass shower door | Bathroom posts |
| `cleaner-bedroom-bed.png` | Smoothing bed sheets | Bedroom posts |
| `cleaner-livingroom-vacuum.png` | Vacuuming carpet | Living room posts |
| `cleaner-hallway-caddy.png` | Walking with cleaning caddy | General/transition posts |
| `cleaner-diningroom-mop.png` | Mopping hardwood floor | Dining room posts |
| `cleaner-doorway-livingroom.png` | Standing in doorway, arms at sides | Hero/profile posts |
| `cleaner-kitchen-island.png` | Wiping marble island | Kitchen posts |

Also check the AI opener rotation pool at `/Users/user/Downloads/metla San Diego/gemini-image{6,7,8}-*.jpeg` — these are the 3 images cycled as carousel slide 5 (AI opener). If one of those slots needs refreshing, plan a generation for it.

Identify which scenes/rooms are missing for upcoming posts. Check the content schedule for Format B posts that need a cleaner image.

---

## Step 2: Navigate to Gemini

1. `mcp__Claude_in_Chrome__navigate` to `https://gemini.google.com`
2. Use `get_page_text` to verify you're signed in as **artyom.machekin@gmail.com** (Pro subscription required for image generation)
3. If not signed in: `find` the profile/sign-in button, click it, and authenticate
4. Confirm Pro access — `get_page_text` should show "Gemini Advanced" or similar indicator

---

## Step 3: Generate Images

### The Prompt Template

Use this exact template, replacing `[ACTION]` and `[ROOM DESCRIPTION]`:

> Generate a photorealistic image of a professional house cleaner seen from behind, wearing a teal t-shirt with "Metla House Cleaning" text printed on the back. The cleaner is [ACTION] in a [ROOM DESCRIPTION]. Shot from behind at waist level. Square 1:1 aspect ratio. The teal shirt color should be #14b8a6. No mirrors or reflective surfaces.

### Rules for Good Results

**DO (simple poses that work reliably):**
- Walking into a room carrying supplies
- Standing at a counter wiping with one hand
- Making a bed (smoothing sheets with one hand)
- Vacuuming (pushing vacuum forward)
- Standing in a doorway looking at a clean room
- Mopping a floor (one-handed push)

**DON'T (causes AI artifacts):**
- Two-handed tasks (extra hands/arms appear)
- Mirrors or reflective surfaces (arm duplication, face reflection)
- Complex mechanical objects (stovetop grates, faucet handles get distorted)
- Close-up of hands gripping tools (fingers get mangled)
- Looking at camera or showing face (privacy + brand consistency)

### Generation Process

1. `find` the Gemini text input box, then use `form_input` to type/paste the prompt
2. `find` and click the send button (or press Enter via `javascript_tool`)
3. Wait for image generation (10-30 seconds). You can poll with `get_page_text` to see if the "Generated image" / completion state has appeared, or use `javascript_tool` to check whether the generated `<img>` element exists in the DOM.
4. Gemini generates 1 image per prompt
5. **Review the image carefully before downloading:**
   - Teal shirt visible with "Metla House Cleaning" text? (text doesn't need to be perfect but shirt must be teal)
   - Cleaner facing away from camera?
   - No face visible (including in mirrors/reflections)?
   - Hands look natural? No extra fingers/arms?
   - Room looks clean and well-lit?
   - No distorted objects?

To inspect the image programmatically, you can use `javascript_tool` to read the `src` of the generated `<img>` element, or `read_console_messages` to debug any errors.

### If the Image Fails Quality Check

- **Extra hands/arms**: Simplify the pose — try "standing" instead of "scrubbing"
- **Distorted objects**: Remove the problematic object from the prompt (e.g., don't mention stovetop grates)
- **Face visible**: Add "No mirrors or reflective surfaces" if not already in prompt
- **Text illegible**: This is usually acceptable — the branded watermark bar handles text. The shirt color matters more than the text.
- **Wrong shirt color**: Re-emphasize "The teal shirt color should be #14b8a6" in the prompt

If an image fails after 2 attempts with the same scene, **switch to a different scene entirely**. Some compositions are inherently difficult for AI.

---

## Step 4: Download Images

There are two viable paths. The **preferred** path skips the browser download dialog entirely; fall back to the click-to-download path if the CDN URL isn't readily available.

### Preferred path — capture CDN URL, download via curl

1. While (or just after) the image generates, use `mcp__Claude_in_Chrome__read_network_requests` to capture image responses from Gemini. Alternatively, run a `javascript_tool` snippet that returns the `src` of the latest generated `<img>` element in the conversation:
   ```js
   // Example: grab the most recent generated image's src
   const imgs = document.querySelectorAll('img');
   const last = imgs[imgs.length - 1];
   return last && last.src;
   ```
2. Once you have the URL, download it directly to its final destination using `mcp__workspace__bash`:
   ```bash
   curl -L -o "/Users/user/Downloads/metla-marketing/public/ai-cleaners/cleaner-{room}-{action}.png" "<image_url>"
   ```
   Or, for an AI opener rotation slot:
   ```bash
   curl -L -o "/Users/user/Downloads/metla San Diego/gemini-image{6|7|8}-{descriptor}.jpeg" "<image_url>"
   ```
   This eliminates the move/rename step in Step 5.

### Fallback path — click the download button

1. `find` and click the generated image to open the lightbox/preview
2. `find` the **download button** (down arrow icon, usually in the image toolbar) and click it
3. The file saves to Chrome's default download location: `~/Downloads/` (i.e. `/Users/user/Downloads/`)
4. Verify the download with `mcp__workspace__bash`:
   ```bash
   ls -lat "/Users/user/Downloads/Gemini-Generated-Image-"*.png | head
   ```
5. Files are named `Gemini-Generated-Image-{hash}.png` (~4-8 MB each)

**If download fails** (network error): Click the download button again. Gemini downloads are occasionally flaky — a retry almost always works.

---

## Step 5: Move and Rename Images

Only needed if you used the fallback (click-download) path. Move the freshly downloaded file from `~/Downloads/` to its final destination with a descriptive name:

```bash
mv "/Users/user/Downloads/Gemini-Generated-Image-{hash}.png" \
   "/Users/user/Downloads/metla-marketing/public/ai-cleaners/cleaner-{room}-{action}.png"
```

For AI opener rotation images used by the social-posting skill (carousel slide 5):

```bash
mv "/Users/user/Downloads/Gemini-Generated-Image-{hash}.png" \
   "/Users/user/Downloads/metla San Diego/gemini-image{6|7|8}-{descriptor}.jpeg"
```

**Naming conventions:**
- Scene library (`metla-marketing/public/ai-cleaners/`): `cleaner-{room}-{action}.png`
  - Examples: `cleaner-kitchen-countertop.png`, `cleaner-bathroom-shower.png`, `cleaner-bedroom-bed.png`
  - Keep names short, descriptive, lowercase, hyphenated
- AI opener rotation (`metla San Diego/`): `gemini-image{6,7,8}-*.jpeg` — these 3 slots cycle per social-posting SKILL.md

No `.playwright-mcp/` cleanup is needed (that directory isn't used). If you want to keep `~/Downloads/` tidy, you can identify any leftover `Gemini-Generated-Image-*.png` files there and remove or archive them, but it's optional.

---

## Step 6: Brand the Images (Optional)

Run each image through the `PhotoOverlay` Remotion composition to add the branded watermark bar:

```bash
cd /Users/user/Downloads/metla-marketing
npx remotion still PhotoOverlay \
  --props='{"photoPath":"public/ai-cleaners/cleaner-{room}-{action}.png","label":"","neighborhood":"[Neighborhood]"}' \
  --output=out/Branded-Cleaner-{room}-{neighborhood}.png
```

- Use `"label": ""` for no BEFORE/AFTER label (standard for cleaner-at-work shots)
- Use `"label": "AFTER"` if the cleaner is shown in a just-cleaned room and you want to emphasize the result

---

## Step 7: Update Documentation

After adding new images, update the image table in:
- `/Users/user/Downloads/metla San Diego/.agent/workflows/social-media-visuals.md` (Section 11)
- This workflow file (Step 1 table above)

---

## Troubleshooting

| Problem | Solution |
|---------|----------|
| "I can't generate images right now" | Gemini may be rate-limited. Wait 5 minutes and retry. |
| Image has extra limbs | Simplify the pose. Use "standing" or "walking" instead of active cleaning tasks. |
| Shirt is wrong color | Re-emphasize `#14b8a6` in prompt. Sometimes regenerating fixes it. |
| Text on shirt is gibberish | Acceptable — the PhotoOverlay watermark handles branding. Focus on shirt color. |
| Download button doesn't appear | Click directly on the image first (use `find` + click) to open the preview/lightbox view. |
| Download fails with network error | Retry. Gemini downloads are flaky ~10% of the time. Or use the preferred path: grab the CDN URL via `javascript_tool` / `read_network_requests` and curl it. |
| Can't find downloaded file | Chrome saves to `~/Downloads/` (`/Users/user/Downloads/`), not the project dir. Run `ls -lat /Users/user/Downloads/Gemini-Generated-Image-*.png \| head`. |
| Gemini asks for sign-in | `navigate` to `https://accounts.google.com` first, sign in as artyom.machekin@gmail.com, then `navigate` back to `https://gemini.google.com`. |
| Generation appears stuck | Use `read_console_messages` to check for errors; `get_page_text` to see if there's a visible error banner. |

---

## Session Log

### Mar 17, 2026 — First batch (8 images)

Generated 8 images, all now in `metla-marketing/public/ai-cleaners/`:

| # | File | Prompt Scene | Attempts | Notes |
|---|------|-------------|----------|-------|
| 1 | cleaner-kitchen-countertop.png | Wiping granite countertop | 1 | Clean first try |
| 2 | cleaner-bathroom-shower.png | Scrubbing glass shower door | 1 | Good quality |
| 3 | cleaner-bedroom-bed.png | Smoothing bed sheets | 1 | Good quality |
| 4 | cleaner-livingroom-vacuum.png | Vacuuming carpet | 1 | Good quality |
| 5 | cleaner-hallway-caddy.png | Walking with cleaning caddy | 3 | Stovetop (distorted grates), kitchen sink (extra hand), bathroom mirror (arm duplication) all failed. Switched to simple walking scene — success. |
| 6 | cleaner-diningroom-mop.png | Mopping hardwood floor | 1 | Hand on mop slightly odd but usable |
| 7 | cleaner-doorway-livingroom.png | Standing in doorway, arms relaxed | 2 | First download failed (network error), retry succeeded |
| 8 | cleaner-kitchen-island.png | Wiping marble kitchen island | 1 | Excellent quality, bold text on shirt |

**Key learnings captured in "Rules for Good Results" above.**

---

## Checklist

```
- [ ] Identified which scenes/rooms are needed (scene library and/or gemini-image{6,7,8} rotation slot)
- [ ] Navigated to gemini.google.com on correct account
- [ ] Confirmed Pro access
- [ ] Generated images (reviewed each for quality)
- [ ] Downloaded images — either via CDN URL + curl (preferred) or click-download to ~/Downloads/
- [ ] Moved and renamed to final destination (skip if curl'd directly)
- [ ] (Optional) Tidied up leftover Gemini-Generated-Image-*.png in ~/Downloads/
- [ ] (Optional) Ran through PhotoOverlay for branding
- [ ] Updated documentation tables
```
