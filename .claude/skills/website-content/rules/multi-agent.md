---
description: Protocol for using multiple agents in parallel for content creation tasks.
---

# Multi-Agent Execution Protocol

## When to Use Multiple Agents
- Writing 2+ blog posts simultaneously
- Writing captions for 2+ neighborhoods simultaneously
- Running build + content audit in parallel
- Any task with independent subtasks that don't share dependencies

## Agent Allocation Rules
1. **Blog posts**: 1 agent per blog post (each is independent)
2. **Captions**: 1 agent per neighborhood (all captions for that location)
3. **Audits**: 1 agent per audit type (SEO, content accuracy, workflow compliance)
4. **Build + verify**: Sequential, not parallel (depends on prior writes)

## Context Each Agent Needs
Every content-writing agent must receive:
- The specific workflow files to follow (blog-seo.md, content-accuracy.md, brand_voice.md, keyword-optimization.md)
- The target keywords for that piece
- The content accuracy risk flags for that topic
- The zone alignment from location_logic.md
- The anti-cannibalization notes for overlapping topics

## Post-Agent Verification
After all agents complete:
1. Run `next build` to verify no errors
2. Spot-check 1 random blog for keyword density compliance
3. Verify internal links resolve correctly
4. Git commit + push → run post-deployment.md workflow
