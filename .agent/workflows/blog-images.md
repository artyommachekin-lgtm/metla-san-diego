---
description: MANDATORY IMAGE PROTOCOL. Prevents irrelevant or repeated images. Forces the use of keyword-based search URLs so images always match the specific blog topic.
---

# Blog Post Image Strategy

## 1. The "No Guessing" Rule (CRITICAL)
* **Problem:** You (the AI) cannot see Unsplash images. Do NOT guess specific Photo IDs (e.g., `photo-1584627404`).
* **Result:** Guessing leads to random, irrelevant images (e.g., a forest for an oven cleaning post).
* **Rule:** NEVER output a direct `photo-ID` unless explicitly provided in the user prompt.

## 2. The "Keyword Search" Solution
Instead of a static ID, use the Unsplash Source URL with **specific keywords** from the H1 title.
* **Format:** `https://source.unsplash.com/featured/800x600/?[keyword1],[keyword2]`
* **Example for "Oven Cleaning":**
    * `https://source.unsplash.com/featured/800x600/?oven,kitchen`
* **Example for "San Diego Dust":**
    * `https://source.unsplash.com/featured/800x600/?dust,living+room`

## 3. Uniqueness Enforcement
* **Diversity:** Never use the exact same keyword combination twice in a row.
* **Granularity:** Be specific.
    * *Bad:* `?cleaning` (Too generic, will repeat).
    * *Good:* `?granite+countertop,kitchen` (Specific, will be unique).

## 4. Alt Text Requirement
* Every image MUST have alt text that describes the *specific* subject, not just "cleaning."
    * *Bad:* "Cleaning service"
    * *Good:* "Staff member wiping down granite countertops in a San Diego kitchen."