---
description: Ensure blog content matches company service definitions and policies
---

## Content Accuracy Requirements

Before publishing any blog content that references services, pricing, or what's included, **ALWAYS verify against the source of truth:**

1. **Service Definitions:** Check `constants.ts` → `SERVICES` array
2. **Pricing:** Check `constants.ts` for any pricing data
3. **Locations:** Check `constants.ts` → `LOCATIONS` array

## Critical Service Inclusion Rules

### Deep Cleaning INCLUDES:
- Appliance **exteriors** (fridge, oven, dishwasher)
- Microwave inside and out
- Baseboards, door frames, ceiling fans
- Blinds, light fixtures, window sills
- Detailed bathroom sanitization

### Deep Cleaning DOES NOT INCLUDE (Available as Add-Ons):
- Inside refrigerator
- Inside oven
- Inside cabinets/drawers
- Interior windows

### Move-In/Move-Out INCLUDES (in addition to deep clean):
- Inside fridge and oven
- Inside all cabinets and drawers  
- Interior windows and sills

## Verification Process

1. **Before writing:** Read the relevant service's `checklist` in `constants.ts`
2. **During review:** Cross-check any claims about inclusions/exclusions
3. **When unsure:** Ask or default to being conservative (don't claim something is included if uncertain)

## Common Mistakes to Avoid

- Saying "inside oven/fridge cleaning" is included in deep clean (it's NOT)
- Claiming window cleaning is included (only sills, not glass, in deep clean)
- Mixing up what's included in different service tiers
