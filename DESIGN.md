# Design System: ThisWeb Hyper Lab

## 1. Visual Theme & Atmosphere

This system uses a cold-white, high-contrast product aesthetic with a more experimental edge than a typical SaaS landing page. The mood should feel like a concept lab or future showroom: bright, spatial, glassy, and sharp without falling into purple-neon cyberpunk.

Creativity is intentionally concentrated in the high-impact moments. Hero sections, major CTAs, and section transitions can use stronger spatial composition, translucent surfaces, cobalt light trails, and subtle 3D forms. Reading-heavy sections should stay calmer, flatter, and easier to scan so the site keeps its conversion clarity.

## 2. Color Palette & Roles

### Core Surfaces

- **Ice Canvas** (`#F5F7FF`) — Primary page background
- **Pure Plane** (`#FFFFFF`) — Cards, elevated surfaces, image frames
- **Mist Popover** (`#FBFCFF`) — Floating panels and overlays
- **Graphite Ink** (`#111827`) — Primary text and high-contrast UI copy
- **Slate Signal** (`#5E6C8F`) — Secondary text, descriptions, helper copy
- **Cool Border** (`#DBE3FF`) — Structural borders and dividers

### Brand Bases

- **Primary / Cobalt Pulse** (`#2453FF`) — Main CTAs, active states, focus intent, hero energy
- **Secondary / Frost Wash** (`#EDF2FF`) — Secondary fills, subtle chips, quiet panels
- **Tertiary / Soft Prism** (`#DBE4FF`) — Intermediate surfaces, layered backgrounds, calm emphasis

### Derived Brand Tokens

Each brand color family must expose the same derived variants. Never hardcode these variants separately; derive them from the base token with `color-mix()`.

- `*-hover` — Hover state for filled controls
- `*-active` — Pressed state for buttons, tabs, toggles
- `*-soft` — Soft tinted background for chips, callouts, glass plates
- `*-subtle` — Very light wash for large sections and ambient surfaces
- `*-border` — Tinted stroke for outlines and layered cards
- `*-ring` — Focus ring and interactive halo
- `*-shadow` — Colored shadow support for elevated or animated elements

## 3. Typography Rules

This pass is focused on color and atmosphere, not a full typography rewrite. Keep the existing project font setup for now.

When typography is revisited, the interface should move toward a clean sans-led system:

- **Display / UI Headings:** `Geist`
- **Body:** `Geist`
- **Mono:** `Geist Mono`

Avoid using serif typography in core product UI, metrics, forms, navigation, or dashboard-like sections. If a future editorial section needs serif contrast, it should be introduced intentionally and sparingly.

## 4. Component Stylings

- **Primary buttons:** Use `primary`, `primary-hover`, and `primary-active`. Depth should come from `primary-shadow`, not neon outer glow.
- **Secondary buttons:** Use the `secondary` family rather than gray opacity hacks. Secondary actions should still feel designed, not disabled.
- **Cards and panels:** Default to white or near-white surfaces with `secondary-soft` or `tertiary-subtle` used as section washes. Borders should use the corresponding `*-border` token.
- **Focus states:** Prefer `*-ring` tokens over generic blue browser defaults.
- **Interactive emphasis:** Reserve the strongest cobalt accents for moments that matter: hero CTAs, active tabs, progress states, selected filters.

## 5. Layout Principles

- Keep the overall page bright, spacious, and editorial.
- Use asymmetry and visual tension in hero and CTA sections, not in dense content blocks.
- Let large creative objects live in their own spatial zone. Do not overlap them on top of body copy.
- Maintain crisp white space and clear card framing so the stronger blue accents never muddy the hierarchy.

## 6. Motion & Interaction

Motion intensity follows a focused rule: explosive in the hero and transitions, restrained in content.

- **Hero motion:** slow float, layered reveal, light sweep, orbital drift, and depth-driven entrance timing
- **CTA motion:** stronger hover pull, colored shadow bloom, clear press feedback
- **Section transitions:** staggered reveal, blur-to-sharp settling, gentle upward drift
- **Content areas:** minimal hover lift, focus halos, and small opacity or transform transitions only

All motion should stay hardware-accelerated and use `transform`, `opacity`, and filtered light effects only. Avoid layout-thrashing transitions.

## 7. Anti-Patterns (Banned)

- No warm beige or olive carryover from the previous palette
- No purple or violet neon gradients
- No pure black (`#000000`)
- No generic gray-only secondary surfaces when a semantic `secondary` token exists
- No hardcoded hover or shadow colors for brand families
- No glowing blur spam on every component
- No high-noise motion in reading-heavy sections
- No invented metrics or filler UI copy
