---
description: MANDATORY post-deployment checklist. Run after every git push that adds or modifies content pages.
---

# Post-Deployment Workflow

## 1. Build Verification
- Run `next build` locally before pushing
- Verify no TypeScript errors, no missing imports, no broken links

## 2. GSC Indexing (REQUIRED after every push with new/modified pages)
After every git push that adds or changes content:
1. Wait for Vercel deployment to complete (~2 minutes)
2. Open Google Search Console → URL Inspection
3. For each NEW page: Enter full URL → "Request Indexing"
4. For each MODIFIED page: Enter full URL → "Request Indexing" (forces recrawl)
5. Daily quota is ~11 submissions — prioritize new pages over modifications
6. Log submissions in memory for tracking

## 3. Schema Validation
For new blog posts, verify schemas at https://validator.schema.org:
- ArticleSchema renders correctly
- FAQSchema renders correctly
- HowToSchema renders correctly (if applicable)

## 4. Live Page Check
- Visit the deployed page on Vercel
- Verify OG tags via social media debugger
- Verify meta description matches intent
