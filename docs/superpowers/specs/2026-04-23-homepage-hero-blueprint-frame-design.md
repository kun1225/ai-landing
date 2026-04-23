# Homepage Hero Blueprint Frame Design

## Summary

Add a restrained `Blueprint Frame` background treatment to the homepage hero in `src/app/page.tsx` via `src/components/home/hero-section.tsx`.

The goal is to make the hero feel more designed and intentional without introducing decorative noise, gradients, motion, or a heavier "tech brand" mood.

This background treatment applies to the hero only. The rest of the homepage stays visually quiet.

## Goals

- Increase the sense of design in the hero background.
- Keep the current clean reading experience and centered headline hierarchy.
- Introduce a light technical or blueprint-like feeling.
- Use existing project colors and visual language.
- Ensure the background reads as a secondary layer, not the main attraction.

## Non-Goals

- No full-page background system.
- No gradient backgrounds.
- No glow, neon, or strong "futuristic" styling.
- No animated particles, moving lines, or ambient motion.
- No dense UI chrome, diagrams, or network-style connector graphics.

## Constraints

- Hero only.
- No gradients.
- Decorative density must remain low.
- Preserve the current headline, typewriter, paragraph, and CTA readability.
- Do not introduce new colors; use existing tokens from `src/app/globals.css`.
- Mobile version must simplify further.

## Chosen Direction

The selected direction is `A. Blueprint Frame`.

This means the hero gets a quiet technical frame system:

- one large outer frame
- one restrained baseline line
- one localized grid field
- one or two tiny markers

The effect should feel like layout calibration marks or interface drafting hints, not like a visible illustration.

## Visual Principles

### 1. Background Stays in the Periphery

Decorative elements must sit outside the core text reading zone as much as possible.

- The headline area remains visually dominant.
- The CTA area remains completely clear.
- The background should register on second glance, not first glance.

### 2. Technical, but Soft

The hero should feel precise, not cold or overloaded.

- Prefer hairline borders, faint grids, and sparse markers.
- Avoid heavy boxes or repeated widgets.
- Keep the visual language closer to print calibration or product wireframe hints than a dashboard.

### 3. Quiet Contrast

The background should rely on subtle contrast rather than color variation.

- Use existing blue tokens with low opacity.
- Let line weight and placement carry the effect.
- Keep large areas empty.

## Composition

### Outer Frame

Add one large rectangular frame around the hero's visual field.

- It should not touch the viewport edges.
- It should sit outside the main content block with generous breathing room.
- Corners may stay square or slightly rounded, but should remain understated.
- Opacity should be low enough that it feels structural, not card-like.

### Baseline Line

Add one horizontal baseline in the upper half of the hero.

- It should span a meaningful width across the hero.
- Near the headline block, the line should either soften, fade, or be interrupted so it does not cut through the text region.
- The line exists to suggest calibration, not separation.

### Local Grid Field

Add one localized grid field only.

- Place it in a corner, preferably top-right or bottom-left.
- Coverage should be roughly 20% to 30% of the hero area.
- The grid must be lighter than the frame.
- Do not tile the full hero background.

### Markers

Add one or two tiny markers total.

- Acceptable forms: small dot, crosshair, tiny corner notch.
- Good placements: frame corner, line endpoint, outer edge of the grid field.
- Never place them near the CTA or overlapping the headline.

## Layout Rules

### Desktop

- Keep the current centered hero composition.
- Add the decorative layer behind the content.
- Ensure the frame and grid help shape the hero edges rather than fill the center.
- The background must support the headline, not compete with it.

### Mobile

Simplify the system aggressively.

- Keep the outer frame in a tighter inset form.
- Remove the larger grid field or reduce it to a very small corner patch.
- Keep only a short segment of the baseline, if any.
- Reduce marker count to one or zero.

## Color and Material

Use existing token-derived values only.

- Frame: low-opacity version of existing primary/border family.
- Grid: even lighter than the frame.
- Markers: can be slightly stronger than the grid, but still subtle.
- No new brand colors.
- No shadows needed for these background elements.

## Motion

No motion for this feature.

- No floating
- No reveal animation
- No pulsing markers
- No parallax

The rest of the hero may keep its existing reveal behavior, but the new background treatment itself should remain static.

## Implementation Notes

Recommended implementation shape:

- keep the hero section as the owning layout container
- add a dedicated decorative layer inside `hero-section.tsx`
- render decorative elements as absolutely positioned, `pointer-events-none` elements
- keep content in a separate higher `z-index` container

This should remain a local hero concern rather than becoming a global page background utility.

## Accessibility

- Decorative background elements must not interfere with text contrast.
- Decorative elements should not receive focus.
- The visual treatment should remain purely presentational.

## Validation

Implementation is correct when:

- the hero feels more intentionally designed
- the first focal point is still the headline
- the CTA remains visually clean
- the hero background does not feel empty
- the background still feels restrained on desktop
- the mobile version is simpler than desktop
- no gradient is introduced anywhere in the hero treatment

## Risks

### Risk: Too Faint

If all elements are too light, the change will read as accidental rather than designed.

Mitigation:

- use placement and scale, not just opacity, to create presence
- allow one element, likely the outer frame, to be slightly more legible than the rest

### Risk: Too Decorative

If the grid or markers become too visible, the hero will feel busy.

Mitigation:

- keep the grid localized
- cap marker count at two
- protect the headline and CTA zones

### Risk: Looks Like a UI Mockup

If extra boxes or connector logic are added, the hero may drift into dashboard aesthetics.

Mitigation:

- keep the vocabulary minimal
- avoid multi-box systems, linked nodes, or module clusters

## Testing Plan

- Verify hero readability on desktop and mobile widths.
- Verify the decorative layer does not overlap headline or CTA focus areas.
- Verify the mobile version removes or reduces non-essential blueprint details.
- Verify no gradients were introduced in the implementation.
- Verify dark mode, if currently supported by the page, still looks intentional and restrained.
