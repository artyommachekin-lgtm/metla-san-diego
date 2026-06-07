---
name: ranking-intel
description: Weekly (or on-demand) sweep for the latest Google ranking / GBP policy / algorithm-update intel. Verifies + dedupes findings and appends dated deltas to .agent-memory/ranking-strategy.md so Metla's SEO/local strategy stays current. Use when the user asks "any Google updates?", "check ranking news", "run ranking-intel", or when the scheduled weekly run fires.
metadata:
  tags: seo, gbp, local-seo, ranking, monitoring, research, self-updating
---

# Ranking Intel — self-updating SEO/GBP monitoring

## Purpose
Keep `.agent-memory/ranking-strategy.md` current with the newest **verified** changes in how Google ranks local (GBP/local pack) and organic web — so Metla always reflects the latest public/leaked intel and keeps an edge. Read-only research; recommends, never executes site/GBP changes.

## When to run
- **Scheduled:** weekly (Mondays) via the scheduled task.
- **On demand:** "check ranking news", "any Google updates?", "run ranking-intel".

## Procedure
1. **Read current state.** Open `.agent-memory/ranking-strategy.md`; note its header "Last updated" date and the §10 Change log (most recent entry). Everything you look for is "what changed since that date."
2. **Sweep the monitoring sources** (web search + fetch) for items dated AFTER the last-updated date:
   - Google Search Status Dashboard — status.search.google.com (confirmed updates; first source)
   - Google Search Central Blog — developers.google.com/search/blog
   - Search Engine Roundtable (Barry Schwartz) — seroundtable.com
   - Search Engine Land — algorithm-updates library
   - Sterling Sky (Joy Hawkins) — sterlingsky.ca/blog + sterlingsky.ca/google-local-changes
   - Whitespark (Darren Shaw) — whitespark.ca/blog (+ annual Local Search Ranking Factors)
   - Local Search Forum — localsearchforum.com (suspension waves / new features)
   - GBP Help "What's New" — support.google.com/business/community
   - Semrush Sensor — semrush.com/sensor (volatility >7 = something rolling out)
   Also run broad queries: "Google <month year> core update", "Google Business Profile policy change <year>", "local SEO ranking factor study <year>", "Google search leak <year>".
3. **Verify + dedupe.** Cross-check each candidate across ≥2 credible sources. Discard rumor, marketing fluff, and repeats. Tag each kept finding: **Confirmed / Strong / Contested / Myth**. Never fabricate URLs — cite only pages actually retrieved. If web fetch is blocked for a domain, note it and move on (don't work around restrictions).
4. **Assess impact for Metla** (small San Diego house-cleaning SAB; two GBP profiles — Main SD on metlacleanteam, La Jolla on owner's personal). For each verified change ask: does it change a tactic in §3, add to the "won't do" myths in §4, or create an owner decision (§6)?
5. **Update `.agent-memory/ranking-strategy.md`:**
   - Append a dated entry to **§10 Change log** (append-only): `YYYY-MM-DD — <what changed> [confidence] — impact on Metla / action — (source URL)`.
   - If a change alters tactics, edit the relevant section in place AND reference it in the change-log entry.
   - Bump the header "Last updated" date.
6. **Send a digest** (see format). Keep it 3–8 bullets. If nothing material changed, say so in one line — that's a valid, good outcome.
7. **Stay in lane.** This skill researches and recommends only. It does NOT edit the website or GBP. Flag anything actionable as a recommendation/owner-decision.

## Output format (digest)
```
## Ranking Intel — <date>
- [Confirmed] <change> — <1-line impact/action> (source)
- [Strong] <change> — <impact> (source)
(— Nothing else material since <last date>.)
```

## Notes
- Canonical strategy = `.agent-memory/ranking-strategy.md` (gitignored, local; it changes often, so it is intentionally NOT mirrored into git to avoid drift).
- Keep §10 append-only; never rewrite past entries.
- Pair-read `copywriter.md` before recommending any copy/title change.
