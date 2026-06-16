---
version: alpha
name: Travel Magnet
description: A warm, postcard-inspired design system for capturing travel memories. Combines the tactile feel of a corkboard and physical magnets with a travel journal aesthetic.

colors:
  surface:                  "#f5f0e8"
  surface-dim:              "#e8dfd0"
  surface-bright:           "#faf7f2"
  surface-container-lowest: "#ffffff"
  surface-container-low:    "#faf7f2"
  surface-container:        "#f0e9dc"
  surface-container-high:   "#e8dfd0"
  surface-container-highest:"#ddd3c0"
  on-surface:               "#3d2c1e"
  on-surface-variant:       "#a8917c"
  outline:                  "#d4c4ad"
  outline-variant:          "#ede6da"
  surface-tint:             "#c07a4f"
  primary:                  "#c07a4f"
  on-primary:               "#ffffff"
  primary-container:        "#f0d4b8"
  on-primary-container:     "#5c3520"
  inverse-primary:          "#e8a87c"
  secondary:                "#8b5230"
  on-secondary:             "#ffffff"
  secondary-container:      "#f5dcc8"
  on-secondary-container:   "#3d2010"
  pin-gold:                 "#d4a84b"
  cat-food:                 "#ff7e67"
  cat-place:                "#6ec6ca"
  cat-cafe:                 "#c9a96e"
  cat-shop:                 "#b48de8"
  cat-exp:                  "#6dd886"
  cat-random:               "#f0a0c0"
  error:                    "#ba1a1a"
  on-error:                 "#ffffff"
  background:               "#f5f0e8"
  on-background:            "#3d2c1e"
  surface-variant:          "#e8dfd0"

typography:
  display:
    fontFamily: Lora
    fontSize: 20px
    fontWeight: "600"
    lineHeight: 28px
    letterSpacing: -0.01em
    fontStyle: italic
  headline-lg:
    fontFamily: Lora
    fontSize: 18px
    fontWeight: "600"
    lineHeight: 26px
  headline-md:
    fontFamily: DM Sans
    fontSize: 16px
    fontWeight: "600"
    lineHeight: 22px
  title-lg:
    fontFamily: DM Sans
    fontSize: 14px
    fontWeight: "600"
    lineHeight: 20px
  body-lg:
    fontFamily: DM Sans
    fontSize: 15px
    fontWeight: "400"
    lineHeight: 24px
  body-md:
    fontFamily: DM Sans
    fontSize: 13px
    fontWeight: "400"
    lineHeight: 20px
  body-sm:
    fontFamily: DM Sans
    fontSize: 11px
    fontWeight: "400"
    lineHeight: 16px
  label-md:
    fontFamily: DM Sans
    fontSize: 12px
    fontWeight: "500"
    lineHeight: 16px
    letterSpacing: 0.01em
  label-sm:
    fontFamily: DM Sans
    fontSize: 10px
    fontWeight: "400"
    lineHeight: 14px

rounded:
  sm:      0.5rem
  DEFAULT: 0.75rem
  md:      1rem
  lg:      1.125rem
  xl:      1.5rem
  full:    9999px

spacing:
  base:   8px
  xs:     4px
  sm:     12px
  md:     16px
  lg:     24px
  xl:     40px
  gutter: 16px
  margin: 16px

components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
    typography: "{typography.label-md}"
    rounded: "{rounded.md}"
    padding: "10px {spacing.md}"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
    textColor: "{colors.on-secondary}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
  button-ghost-border:
    backgroundColor: "transparent"
    textColor: "{colors.primary}"
    rounded: "{rounded.sm}"
    padding: "6px 10px"
    border: "1px solid {colors.outline}"
  card-country:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.lg}"
    padding: "0"
  card-city:
    backgroundColor: "{colors.surface-container-high}"
    rounded: "{rounded.md}"
    padding: "0"
  card-magnet:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  card-timeline:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.md}"
  chip-filter:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-md}"
    rounded: "{rounded.full}"
    padding: "7px {spacing.sm}"
  chip-filter-active:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.on-primary}"
  geo-prompt:
    backgroundColor: "{colors.surface-container-low}"
    rounded: "{rounded.md}"
    padding: "11px {spacing.sm}"
  input-note:
    backgroundColor: "{colors.surface-container)"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-lg}"
    rounded: "{rounded.md}"
    padding: "{spacing.md}"
  badge-category:
    typography: "{typography.label-sm}"
    rounded: "{rounded.sm}"
    padding: "3px 7px"
  nav-tab:
    textColor: "{colors.on-surface-variant}"
    typography: "{typography.label-sm}"
  nav-tab-active:
    textColor: "{colors.primary}"
  nav-fab:
    backgroundColor: "{colors.primary}"
    rounded: "{rounded.full}"
    size: 54px
  stat-card:
    backgroundColor: "{colors.surface-container-lowest}"
    rounded: "{rounded.md}"
    padding: "{spacing.sm}"
  settings-row:
    backgroundColor: "{colors.surface-container-lowest}"
    textColor: "{colors.on-surface}"
    typography: "{typography.body-md}"
    padding: "13px 15px"
  achievement-badge-earned:
    backgroundColor: "{colors.primary-container}"
    rounded: "{rounded.DEFAULT}"
  achievement-badge-locked:
    backgroundColor: "{colors.surface-container-high}"
    rounded: "{rounded.DEFAULT}"
---

## Overview

Travel Magnet captures the warmth and imperfection of physical travel souvenirs — fridge magnets, postcards, corkboards. The UI should feel like opening a well-loved travel journal, not launching a productivity app.

**Personality:** Warm · Personal · Slightly imperfect · Tactile
**Emotional response:** Nostalgia, wanderlust, the pleasure of collecting

The app avoids dashboard aesthetics. Numbers are soft and contextual ("12 moments") not metric ("12 records"). Labels are lowercase or sentence-case. Nothing shouts.

## Colors

The palette is built from natural materials: linen, sand, fired clay, and terracotta.

- **Primary (`#c07a4f`)** — Terracotta. Used for actions, active states, and the brand accent. Warm enough to feel handmade, not corporate.
- **Surface (`#f5f0e8`)** — Warm linen. The main background. Slightly off-white to feel paper-like.
- **On-surface (`#3d2c1e`)** — Deep espresso brown. All primary text. Warmer than pure black.
- **On-surface-variant (`#a8917c`)** — Muted tan. Secondary text, placeholders, inactive states.
- **Outline (`#d4c4ad`)** — Warm sand. Borders and dividers. Never pure gray.
- **Pin gold (`#d4a84b`)** — The gold push-pin accent on magnet cards only.

Category colors are muted pastels — they tint backgrounds, not dominate them.

## Typography

Two fonts define the system:

**Lora** (serif) — Used for the wordmark, display headings, and any moment where a "journal entry" feel is needed. Its ink-trap details and slightly editorial character evoke handwritten travel notes that have been typeset.

**DM Sans** — The workhorse. Clean, friendly, and highly legible at small sizes. Used for all UI chrome, labels, body copy, and metadata.

- Never use all-caps except for the category badge labels.
- Keep font weights restrained: 400 for body, 500–600 for labels, 600–700 for headings.
- The `display` style is always italic Lora — reserved for the app wordmark only.

## Layout

Mobile-first, single-column with a 2-column grid for country and city cards.

- **Gutter:** 16px between columns and screen edge padding
- **Section spacing:** 24px between major content blocks
- **Spacing scale:** Strictly 4px multiples (xs=4, sm=12, md=16, lg=24, xl=40)
- The magnet wall uses CSS `columns: 2` for a natural stagger — do not force equal heights

## Elevation & Depth

Depth is expressed through warm tonal shadows, not neutral gray ones.

- **Magnet cards:** `box-shadow: 0 6px 22px rgba(60,40,20,.18), 0 1px 4px rgba(60,40,20,.10)` with a white inset highlight to simulate paper
- **Country cards:** Lighter shadow with a subtle tilt (±0.7°) on alternating cards to mimic postcards tacked to a board
- **Overlays (bottom sheets):** `background: rgba(30,18,8,.45)` — warm dark, not cold gray
- Never use neutral `box-shadow: 0 0 0 rgba(0,0,0,…)` — always add warm brown undertones

## Shapes

The corner radius scale leans rounded but not bubbly.

- **`rounded.sm` (8px)** — Small chips, tags, override buttons
- **`rounded.DEFAULT` (12px)** — Achievement badges, small cards
- **`rounded.md` (16px)** — Standard cards, inputs, geo prompt
- **`rounded.lg` (18px)** — Country and city tiles
- **`rounded.xl` (24px)** — Bottom sheet tops, capture screen elements
- **`rounded.full`** — Pills, FAB buttons, avatar

Country photo cards get a slight CSS rotation (`rotate(-0.7deg)` odd / `rotate(0.6deg)` even) to simulate being hand-placed.

## Components

### Magnet Card

The signature component. White card with:
- Gold push-pin `::before` pseudo-element centered above the top edge
- `box-shadow` with warm tones + inset white highlight
- On `:active`: `scale(0.95) rotate(1deg)` — feels like picking up a physical magnet

### Navigation

3-tab bottom nav: Map (left) | Capture FAB (center) | Me (right).
- FAB is the primary action: terracotta gradient, `box-shadow` with primary tint, 54px diameter
- Tab labels use `typography.label-sm` at weight 400 (not bold — avoid the "app template" look)
- Active tab indicator: label + icon shift to `colors.primary`

### Geo Prompt

Appears at the top of the map when location is detected. Styled as a soft inline card, not a system notification. Copy is personal ("Good time to save a moment"), not technical ("Auto-detected location").

### Category Badges

Muted pastel backgrounds (14% opacity) with a medium-contrast text color from the same hue. 6 categories: Food, Place, Café, Shopping, Experience, Random.

## Do's and Don'ts

**Do:**
- Use italic Lora for the wordmark and section titles where a journal feel is needed
- Write counts as "12 moments", not "12 memories" or "12 items"
- Keep geo/location copy warm and human ("Kyoto, Japan" / "Good time to save a moment")
- Add subtle tilt to card stacks to suggest physical arrangement
- Use `colors.on-surface-variant` for all secondary/metadata text

**Don't:**
- Use gradient text (gradient clip-path on text) — it reads as "AI-generated UI template"
- Use uppercase section labels with letter-spacing — too systematic, too dashboard-like
- Show stats as a formal grid with giant bold numbers — prefer inline sentences ("3 countries · 7 cities · 24 moments")
- Use cold gray shadows — all shadows should have warm brown undertones
- Write "Auto-detected", "accurate to 50m", or any technical location language in the UI
