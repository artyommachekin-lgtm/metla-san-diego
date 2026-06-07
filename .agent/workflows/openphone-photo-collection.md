# OpenPhone After-Photo Collection Workflow

**Frequency**: Daily
**Tools**: Claude-in-Chrome MCP (`mcp__Claude_in_Chrome__*`) + optional OpenPhone/Quo MCP (`mcp__dcc46847-...__*`) for triage
**Mode**: READ-ONLY — NEVER send messages, edit messages, make calls, or modify contacts

## Purpose
Collect after-cleaning photos sent by cleaners through the OpenPhone (now Quo) Cleaner Communications line. These photos are used for social media content (GBP, Facebook, Instagram) per the content plan.

## Why this workflow still needs a browser

The Quo MCP (`mcp__dcc46847-...__fetch-messages`) was investigated and **does not surface MMS/photo attachments**. It returns text bodies only — picture messages come back as empty-body rows with no media URL, mime type, or base64 data in the response. Therefore photo retrieval must still happen through the Quo web UI.

What the Quo MCP *is* useful for here:
- **Triage** — list which participants sent messages in the last 24h so you know which conversations to open in the browser (saves scrolling the whole inbox)
- **Identifying media-only messages** — empty-body incoming messages are almost always MMS attachments; their timestamps tell you where to scroll in the browser feed
- **Unread-safety pre-check** — see whether the most recent message in a conversation is incoming (potentially unread) before clicking into it in the browser

Do **NOT** use the Quo MCP write tools (`send-message`, `create-contact`, `update-contact`) — this workflow is read-only.

## Prerequisites
- The Claude-in-Chrome extension attaches to the user's running Chrome — **no need to close Chrome windows**. Just make sure Chrome is open and the extension is connected.
- User will oversee the session and confirm login if Quo prompts for it.

## Step-by-Step Process

### 1. (Optional) Triage with the Quo MCP

Before opening the browser, list recent message activity on the Cleaner Communications line to identify which conversations are worth checking:

- Cleaner Communications inbox: `+18583695987` (id `PNsBdvw8cD`)
- Call `mcp__dcc46847-...__fetch-messages` with that `inboxPhoneNumber` and `createdAfter` set to the start of the target day (ISO 8601)
- Note the participant phone numbers with **empty-body incoming messages** — these are almost certainly photo MMS sends
- Cross-reference participant numbers against the Known Cleaners list (or `list-contacts`) to ignore applicants/leads
- Outcome: a short list of `(cleaner name, phone, timestamp)` to focus on in the browser, instead of scanning the whole inbox

If the MCP triage step is skipped, just scan the conversation list in the browser as before.

### 2. Open the Quo Web App

```
Navigate to: https://my.openphone.com  (redirects to https://my.quo.com)
```
- Use `mcp__Claude_in_Chrome__tabs_create_mcp` + `mcp__Claude_in_Chrome__navigate`
- If a login page appears, ask the user to log in and confirm before proceeding

### 3. Go to Cleaner Communications Inbox
- In the left sidebar under "Inboxes", click **Cleaner Communications (858) 369-5987**
- Use `mcp__Claude_in_Chrome__find` with query like `"Cleaner Communications inbox in sidebar"` to locate the element

### 4. Identify Cleaner Conversations (Skip Applicants)
Scan the conversation list. Focus on contacts labeled:
- "- New Cleaner" or "- Cleaner" (active cleaners)
- Names with star emoji (e.g., "⭐David son/Eva Hernández")

**SKIP** contacts labeled "Applicant" — they don't have cleaning photos.

### 4b. NEVER Open Conversations with Unread Messages
**The cleaning team is working during the day. If a conversation has an unread indicator (bold text, blue dot, notification badge), DO NOT click into it.** Opening an unread conversation marks it as read, which means the team may miss a real notification they need to respond to.

Only open conversations where the most recent messages are already read (no bold/unread indicators). If unsure, ask the user before clicking.

Tip: The Quo MCP triage in step 1 can help here — if the most recent message in a conversation is `incoming` and you haven't seen Michelle/team reply after it, treat as potentially unread and confirm with the user before opening.

### 5. Check Each Cleaner Conversation for Photos
For each cleaner conversation:
1. Click into the conversation (use `mcp__Claude_in_Chrome__find` to locate the row, then click)
2. The user will scroll to the first set of photos (or you scroll up in the message thread — see "Scrolling the Message Feed" below)
3. Look for image thumbnails in the chat — they appear as photo previews with a small **Download** button overlay
4. **Distinguish real photos from screenshots**:
   - After-cleaning photos = actual room/space photos (kitchens, bathrooms, living rooms, bedrooms)
   - Skip: text message screenshots, payment receipts (Venmo), job assignment screenshots, `.png` files that are clearly UI screenshots
5. Note any context clues about the job (address, neighborhood, client name, cleaning type) from surrounding messages — `mcp__Claude_in_Chrome__get_page_text` can dump the visible feed for quick scanning

### 6. Download Photos (Full Quality) — navigate-to-URL method (most reliable)

Quo's photos are stored at `https://storage.googleapis.com/opstatics/<hash>` and served with `content-disposition: attachment`. **Navigating a browser tab straight to that bare URL triggers a normal browser download of the full-resolution original into `~/Downloads/`.** This is the reliable, full-quality path — use it first.

1. With the conversation open (and scrolled to the target photos), extract the opstatics URLs from the DOM via `mcp__Claude_in_Chrome__javascript_tool`:
   ```javascript
   Array.from(document.querySelectorAll('img'))
     .map(i => i.src)
     .filter(s => s.includes('storage.googleapis.com/opstatics/'))
     .map(s => s.split('?')[0]);   // strip size/query suffix → ORIGINAL
   ```
2. For each photo you want, `mcp__Claude_in_Chrome__navigate` a tab to its bare opstatics URL. Chrome downloads the full-res original to `~/Downloads/<hash>.jpeg` — **no click needed**. Do them **one at a time** (a burst of navigations can trip Chrome's multi-download prompt).
3. Rename each `<hash>.jpeg` to the convention in Step 8.

**Why this, not the in-app buttons:** the viewer's Download button and the thumbnail `<a download>` overlay hit Chrome's **multi-download guard**, and the opstatics bucket is **CORS-locked to the `my.quo.com` origin**, so `fetch()`/blob and base64-through-context all fail. `curl`/`wget` from the bash sandbox also can't reach it (no network egress). A top-level tab navigation is browser-native, so it's allowed and returns original quality.

*Fallback (manual):* if a URL won't extract, click the thumbnail to open Quo's full-screen viewer (shows an "X/Y" counter; use Previous/Next), then use the **Download** button in the top-right toolbar (best quality) or the small Download icon on thumbnail hover. Photos land in `~/Downloads/` (Chrome's normal path, **not** `.playwright-mcp/`).

### 7. Limit: One Set Per Cleaner Per Day
- A "set" = all photos from one cleaning job (typically 3-7 photos sent together at the same timestamp)
- If a cleaner sent photos from multiple jobs on the same day, just grab one set
- Prioritize the most visually appealing set (modern homes, good lighting, wide angles)

### 8. Save Downloads with Context
After downloading, rename files to include:
- Cleaner first name
- Date
- Neighborhood/area (if identifiable from address or conversation context)
- Room type if obvious

Examples:
- `alejandra-2026-03-15-living-room.jpeg`
- `openphone-photos-2026-03-15/IMG_*.jpeg` (batch folder for the day)

Save to: `/Users/user/Downloads/`

### 9. Deduplicate Against Previous Downloads
Before finalizing, check today's photos against all previously downloaded photos:

```bash
# MD5 all previous renamed photos
for f in /Users/user/Downloads/alejandra-*.jpeg \
         /Users/user/Downloads/blanca-*.jpeg \
         /Users/user/Downloads/joanna-*.jpeg \
         /Users/user/Downloads/joe-*.jpeg \
         /Users/user/Downloads/karin-*.jpeg \
         /Users/user/Downloads/maribel-*.jpeg \
         /Users/user/Downloads/lourdes-*.jpeg \
         /Users/user/Downloads/elena-*.jpeg \
         /Users/user/Downloads/daniele-*.jpeg \
         /Users/user/Downloads/ana-*.jpeg \
         /Users/user/Downloads/openphone-photos-*/; do
  [ -f "$f" ] && echo "$(md5 -q "$f") $(basename "$f")"
done | sort > /tmp/old-md5.txt

# MD5 today's collection
for f in /Users/user/Downloads/openphone-photos-[DATE]/*.jpeg; do
  echo "$(md5 -q "$f") $(basename "$f")"
done | sort > /tmp/new-md5.txt

# Find overlaps
comm -12 <(awk '{print $1}' /tmp/old-md5.txt | sort) \
         <(awk '{print $1}' /tmp/new-md5.txt | sort)
```

- If duplicates are found, remove them from today's folder and note in the log
- Quo assigns unique hash filenames per download, but the **same photo downloaded in different sessions gets a different hash** — so content-based (MD5) comparison is required
- Common cause: a cleaner's visible "most recent" photos may span multiple days; the same batch can appear in consecutive collection sessions

### 10. Update the Media-Usage Tracker (REQUIRED)
Per parent skill rule #11: every time new cleaner photos are downloaded, immediately add them to `media-usage-tracker.md` under "Cleaner Photos NOT Yet Used in Posts" with:
- Cleaner name
- Date downloaded
- Room/area description

This keeps the tracker current and prevents accidental reuse across posts.

### 11. Log Findings
After completing all conversations, create a brief summary:

```
## OpenPhone Photo Collection — [DATE]

### Photos Found
| Cleaner | # Photos | Property Type | Area/Zip | Rooms | Quality |
|---------|----------|---------------|----------|-------|---------|
| Alejandra | 4 | Modern condo | 92139 Paradise Hills | Living, Hall, Kitchen, Bedroom | Excellent |

### Content Plan Match
- [ ] Which upcoming social posts could use these photos
- [ ] Neighborhoods represented
- [ ] Before/after pairs available (rare but valuable)
```

## Known Cleaners (as of Mar 2026)
Active cleaners who regularly send after photos:
- Alejandra aguirre
- Maribel Martell Martinez
- Blanca L. Montelongo
- David son/Eva Hernández (⭐)
- Joanna Becerra
- KARIN Hart
- Lourdes Andrade
- Elena Renteria
- Daniele Silva
- Blanca Garcia
- Joe Adams
- Ana Cabrera
- Leticia Gomez

## Scrolling the Message Feed (CRITICAL)

### Cursor Position — Scroll INSIDE the Dialog Box
**COMMON MISTAKE**: When scrolling a conversation, make sure the scroll targets the message feed panel specifically — NOT the page body or the sidebar. If focus is outside the conversation dialog, scrolling will move the wrong element and it will look like there are no older messages or photos, when they're actually just offscreen.

**Before scrolling, always:**
1. Click once inside the conversation message area to ensure focus is there
2. Use the correct programmatic scroller (see below), not generic page scroll
3. After scrolling, re-read the page to confirm new content loaded — if nothing changed, your scroll targeted the wrong element

The Quo web app uses **Virtuoso virtual scrolling**. The correct scrollable element is NOT `getByTestId('feed')`.

**Correct approach** — run via `mcp__Claude_in_Chrome__javascript_tool`:
```javascript
// The message feed scroller — use the SECOND virtuoso-scroller on the page
// (the first one is the conversation list sidebar)
const scrollers = document.querySelectorAll('[data-testid="virtuoso-scroller"]');
const messageFeed = scrollers[1]; // index 1 = message feed

// Check scroll state
const info = {
  scrollTop: messageFeed.scrollTop,
  scrollHeight: messageFeed.scrollHeight,
  clientHeight: messageFeed.clientHeight
};

// Scroll up to find older messages
messageFeed.scrollTop -= 500;

info; // returned to you
```

**Key facts:**
- `getByTestId('feed')` is a DIFFERENT element — it always returns scrollHeight == clientHeight (misleading!)
- The message feed is always scrollable (conversations have long histories)
- The feed starts scrolled to the bottom (most recent messages visible)
- Scroll UP (decrease scrollTop) to find older messages from target dates
- After scrolling, re-read the page (`get_page_text` or `read_page`) to see newly loaded content and date separators
- Date separators appear as text like "Yesterday 8:30 am", "Today, 10:01 am", "Mar 17", etc.

## Tips & Gotchas
- **OpenPhone rebranded to Quo** — URL is `my.quo.com` but the app still works the same
- **No "close all Chrome windows" prerequisite** — the Claude-in-Chrome extension attaches to the user's running Chrome. The old Playwright requirement is gone.
- **Downloads land in `~/Downloads/`** (Chrome's default), **not** in `.playwright-mcp/`
- The image viewer counter (e.g., "22/33") counts ALL images ever sent in that conversation, not just today's
- Job assignment screenshots often appear near the cleaning photos — they contain useful metadata (address, zip code, cleaning type, price) that helps match photos to neighborhoods
- Photos are typically sent in batches at the same timestamp (e.g., all at "4:02 pm")
- Michelle often follows up with "All done?" after photos are received — this confirms they're completion photos
- Console errors in the Quo web app are normal (503s on lazy-loaded JS chunks) — ignore them
- **Do NOT use `getByTestId('feed')` for scroll checks** — see "Scrolling the Message Feed" section above

## Quo MCP Limitations (documented so future agents don't re-investigate)

Investigated 2026-05-23. The OpenPhone/Quo MCP (`mcp__dcc46847-...`) exposes:
- `list-inboxes`, `list-users`, `list-contacts`, `get-contact` — workspace metadata
- `fetch-messages`, `fetch-call-transcripts`, `fetch-missed-calls` — read message/call text
- `send-message`, `create-contact`, `update-contact` — write actions (do NOT use in this workflow)

**Critical limitation for photo collection**: `fetch-messages` returns **text bodies only**. MMS / picture messages come back as empty-body rows. The response format is `phone | direction | timestamp\nbody` with no field for attachment URLs, mime types, or base64 image data. There is no separate "fetch-attachments" or "fetch-media" tool. Confirmed by inspecting both the schema and a live response.

**Implication**: the API cannot replace the browser for photo retrieval. The MCP is still useful for triage (step 1) — to identify which participants sent media-likely (empty-body incoming) messages in a time window — but the actual download has to happen via the Quo web UI through the Chrome extension.
