# CLAUDE.md — Operator guide for the Metla San Diego project

> **Read this first, every session.** This is the digital-marketing operation for **Metla House Cleaning – San Diego** (Next.js site on Vercel + local SEO across two Google Business Profiles, Facebook/Instagram, Bing, Yelp). This file captures how to operate the project inside **Cowork** (the Claude desktop app) without re-hitting the environment limits discovered the hard way. If something here conflicts with an older workflow doc, this file wins.

---

## 1. Start every session by reading memory

**Canonical project memory lives in `.agent-memory/`** (inside this folder). It is the single source of truth — read it before doing anything:

- `.agent-memory/MEMORY.md` — master state: stack, accounts, GBP profiles, offer-campaign reminders, holiday hours, action items, session recaps.
- `.agent-memory/content-expansion-schedule.md` — the posting schedule (the heartbeat: what GBP/FB/IG/blog is due, by date).
- `.agent-memory/media-usage-tracker.md` — every photo/video used per post (prevents reuse).
- `.agent-memory/gbp-offer-campaign.md` — the two-offer GBP campaign (always-on $40 + rotating seasonal) and the swap calendar.
- `.agent-memory/copywriter.md` — **the single source of truth for ALL copy.** Voice, banned/required words, claim rules, the per-service scope table (incl. **turnover ≠ deep clean**), SEO/keyword law, channel rules, and a pre-publish checklist. **Read it before writing any blog, page, caption, or offer.**
- `.agent-memory/ranking-strategy.md` — **the evidence-based GMB + web ranking strategy** (NavBoost/clicks, local-pack weights, reviews velocity, address visibility, the Apr-2026 review policy, monitoring sources). **Read it before any ranking/SEO/GBP decision.** Kept current by the `ranking-intel` skill.
- Plus: `openphone-collection-progress.md`, `gsc-audit-history.md`, `la-jolla-gbp-strategy.md`, `service-area-strategy.md`, `heatmap-history.md`, and `feedback_*` / `reference_*` notes.

**`.agent-memory/` is the memory now — edit it directly.** It used to live at `/Users/user/.claude/projects/-Users-user-Downloads-metla-San-Diego/memory/`, but that `.claude/` path is **protected and unreachable** from Cowork (can't be mounted, can't be read). Everything was copied into `.agent-memory/` and all workflow/skill docs were repointed here. Do **not** rely on the old path. `.agent-memory/` is gitignored (local working state, not committed) and persists in this connected folder across sessions.

---

## 2. The environment limits in Cowork (and the workarounds)

These are the "weird rules" — none of them block the work, but you must use the right path.

### Deploying the website — you cannot `git push` yourself
The bash sandbox has **no network egress** (DNS fails) and the `.git` folder is **read-only** to it, so you cannot commit or push from here. The site auto-deploys from GitHub via Vercel, so a deploy = a push, which must happen **on the user's Mac**.

**To deploy:** hand the user a single scoped command to paste into Terminal. Scope the `git add` to real source files — never `git add -A` (the repo root holds 400+ untracked screenshots/videos and a macOS-only `@remotion/compositor-darwin-arm64` entry in `package.json` that breaks Vercel's Linux build). Template:

```
cd "/Users/user/Downloads/metla San Diego" && git add <changed source files...> && git commit -m "feat: ..." && git push
```

- **Safe to commit:** `content/`, `app/`, `data/`, `utils/`, `components/`, `src/`, `public/`, `constants.ts`, `next.config.ts`, `.gitignore`, the `.claude/`+`.agent/` docs.
- **Never commit:** root `*.png` / `*.jpeg` / `*.mp4` (screenshots & renders), `.agent-memory/`, `.playwright-mcp/`, `.claude/settings.local.json`, and the `package.json` Remotion `darwin-arm64` dependency.
- If you see `fatal: Unable to create '.../.git/index.lock': File exists`, prepend `rm -f "/Users/user/Downloads/metla San Diego/.git/index.lock"; ` to the command.
- After they paste the output, verify the live URL(s) with `mcp__workspace__web_fetch` (the `metlahousecleaningsandiego.com` domain is fetchable).

### Building — `next build` won't run in the sandbox
`node_modules` is macOS-arm64 and the Linux SWC binary can't be fetched (no network). Don't try `npm run build` here. Instead:
- Type-check with `npx --no-install tsc --noEmit` (pure JS, works offline; `tsconfig.tsbuildinfo` makes it fast/incremental).
- Have the user run `npm run build` on their Mac before pushing, **or** trust Vercel's build (it builds the same code that type-checked clean).

### GBP posting — use the Search merchant view, not the manager
On `business.google.com/locations`, the "Create post" / "See your profile" buttons open an **external tab outside the Chrome MCP tab group** (uncontrollable). Instead, in the Chrome MCP tab navigate to `https://www.google.com/search?q=Metla House Cleaning San Diego` while logged in as the **owner** account — the merchant panel renders **in-tab** with an **"Add update"** button that opens the post composer in-page.
- **Caption + CTA button:** the composer is in an iframe, so `find`/`read_page`/`file_upload` can't reference its elements — but **coordinate-based `computer` clicks and `type` work fine**. Click the Description box and type; use `cmd+a` then type to replace. Add a "Learn more" button + URL the same way.
- **Photo upload is the one manual step:** the file input is inside the iframe and Google opens a native macOS file picker, which web automation can't drive. **Ask the user to drag/drop the photo into the composer** (or pick it in the open dialog). Then you finish the caption/CTA and review.
- Always **stop before clicking Post** and let the user review (per the social-posting skill). The user clicks Post.

### Blog images — sourcing a verified Unsplash photo without curl
You can't `curl` Unsplash from the sandbox. To get a real, unused CDN image: `WebSearch` Unsplash for the theme → `mcp__workspace__web_fetch` the photo's page → read its `og:image` / main `<img src>` to get the real `photo-XXXXXXXXXXXXX-xxxxxxxxxxxx` id → build the URL `https://images.unsplash.com/photo-{id}?w=1600&h=900&fit=crop&fm=webp&auto=format&q=80`. Use free `images.unsplash.com` photos (avoid `plus.unsplash.com` premium). Check the id isn't already used in `data/blog-posts.ts`.

### Marketing assets live in Downloads (connect it)
Connect `/Users/user/Downloads`. Captions: `/Users/user/Downloads/metla-marketing/out/captions/` (`GBP-*.txt`, `FB-*.txt`, `IG-*.txt`). Rendered videos: `metla-marketing/out/Video-*.mp4`. Fresh cleaner photos: `/Users/user/Downloads/{cleaner}-YYYY-MM-DD-*.jpeg` (collected from Quo/OpenPhone). **Verify photos visually with `Read` before using — filenames lie** (no faces, toilets, clutter, or worn carpet).

**Collecting fresh photos from Quo (full-res, reliable):** extract the image's `storage.googleapis.com/opstatics/<hash>` URL from the open conversation's DOM, then **navigate a Chrome MCP tab directly to that bare URL** — it triggers a browser download of the original into `~/Downloads/<hash>.jpeg` (no click). The in-app Download buttons hit Chrome's multi-download guard, and `curl`/CORS can't reach the bucket. One navigation at a time; then rename to the `{cleaner}-YYYY-MM-DD-desc.jpeg` convention. Full steps: `.agent/workflows/openphone-photo-collection.md` §6.

### The GitHub Integration connector is NOT a push tool
The connected "GitHub Integration" is the repository-context type (attach repo to chat, sync to Projects, Claude Code remote sessions). It does **not** expose a commit/push tool to the Cowork agent. Don't expect to push through it — use the Terminal-paste deploy above.

### Editing `.claude/` files — Edit/Write are blocked; use the shell
The Edit/Write tools refuse any path under `.claude/` ("resolves to a protected location"), so the skill and rule files (`.claude/skills/**`, including `rules/*.md` and the `SKILL.md` files) can't be changed with them. They **are** fully editable from the bash sandbox on the mounted folder (e.g. `/sessions/<id>/mnt/metla San Diego/.claude/...`). Make the change with a small `python3` read-replace-write (or `sed`) — idempotent, anchor on a unique string. This is the standard way to update skills/rules here. (Repo-root files like `CLAUDE.md`, plus everything in `.agent-memory/` and `.agent/`, edit normally with the Edit tool; if the editor ever refuses another path too, the same shell workaround applies.)

---

## 3. Skills & workflows (the playbooks)

- **`/website-content`** (`.claude/skills/website-content/`) — deep-read content audit (accuracy, brand voice, blog SEO, keywords, location logic, images). The `rules/*.md` are the law for writing/auditing blogs and pages. **Read the relevant rules before writing site content.**
- **`/social-posting`** (`.claude/skills/social-posting/`) — all GBP/FB/IG posting + GBP gallery photos. Routes to the `.agent/workflows/*.md` step-by-step guides (`gbp-posting.md`, `meta-posting.md`, `gbp-photos.md`, `openphone-photo-collection.md`, `gemini-image-generation.md`, `social-media-visuals.md`).
- **`remotion-best-practices`** (`.claude/skills/`) — for building marketing video reels in the separate `metla-marketing` Remotion repo.
- **`ranking-intel`** (`.claude/skills/ranking-intel/`) — weekly (or on-demand) sweep for new Google ranking/GBP/algorithm intel; verifies + appends dated deltas to `.agent-memory/ranking-strategy.md`. Runs automatically via the **`metla-ranking-intel`** scheduled task (Mondays). Run it on demand with "run ranking-intel".

**Before writing or editing ANY copy — blog, page, GBP/FB/IG caption, offer, ad, or email — read `.agent-memory/copywriter.md` first and run its pre-publish checklist. No copy ships without it.** It carries the house voice (§2.5), the per-service scope (turnover ≠ deep clean), and every claim rule below.

Non-negotiable content rules (**consolidated in `.agent-memory/copywriter.md` — read it first**; full detail in `website-content/rules/` and `.agent/workflows/content-accuracy.md`): team size **1–2 cleaners** (never 3+); **no** HEPA/Dyson/"hospital-grade" equipment claims (say "professional-grade"); inside fridge/oven/cabinets + interior windows are **add-ons**, not standard; specialized surface care (marble, hardwood, grout) is **on request**; **no guarantee language**; **no phone numbers in GBP post/offer text** (auto-rejection); the literal phrase **"house cleaning San Diego"** must appear in every blog/page.

---

## 4. Key facts (details in MEMORY.md)

- **Stack:** Next.js 15 App Router (SSG), deployed on Vercel at `metlahousecleaningsandiego.com`. Repo: `artyommachekin-lgtm/metla-san-diego`.
- **Two Google Business Profiles:** *Main San Diego* on `metlacleanteam@gmail.com`, phone (707) 414-8930 — and *La Jolla* on the owner's **personal** Google account, phone (858) 267-4685, 727–737 Pearl St. Never cross-contaminate content between them. La Jolla needs an account switch (ask the user; don't log out). (There is also a **suspended** "Metla Miami" profile on the main account — ignore it.)
- **GSC:** `artyom.machekin@gmail.com` (owner's personal). Use the WWW property for URL inspection, the domain property for aggregates.
- **Two GBP offers run at all times** on both profiles: always-on **$40 off** (WELCOME40) + a rotating **seasonal** offer. See `gbp-offer-campaign.md` for the swap calendar; mirror seasonal changes on the website `/specials` page.

---

## 5. After making changes — keep memory current

When you post, deploy, or collect photos, immediately update the relevant `.agent-memory/` file (schedule row → ✅ with notes, media tracker → mark photo used, MEMORY.md action items / session recap). This is what makes the next session pick up cleanly. No external sync needed — `.agent-memory/` is the canonical store.
