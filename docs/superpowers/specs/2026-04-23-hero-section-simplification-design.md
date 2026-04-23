# Hero Section Simplification Design

Date: 2026-04-23

## Context

The current `src/components/home/hero-section.tsx` is carrying too many jobs in the first screen:

- positioning the workshop
- explaining the quality point of view
- presenting multiple supporting highlights
- showing a second large explanatory panel

This makes the hero visually heavy and dilutes the main message. The user wants the hero simplified into a centered headline with a dynamic text treatment that cycles through site types.

## Goal

Make the hero feel immediate, clear, and distinctive.

The first screen should communicate two ideas:

1. You can launch a site with AI in 2 hours without writing code.
2. The result should feel more refined and personal, not like a generic AI-generated template.

## Final Direction

Use a centered, single-column hero stack.

Remove:

- badge
- right-side explanatory panel
- hero highlight cards
- secondary CTA in the hero

Keep only:

- three-line headline
- one short supporting sentence
- one primary CTA using the existing `shadcn/ui` button system

## Content Structure

Headline is broken into three lines:

1. `不寫一行程式`
2. `2 小時用 AI 上線你的`
3. dynamic rotating keyword in blue serif type

The rotating keyword cycles through:

- `作品集網站`
- `品牌網站`
- `預約網站`

Supporting sentence:

`從想法到可上線首頁，用更少時間做出真的能代表你的網站。`

Primary CTA:

`加入候補名單`

## Visual Direction

The hero should feel more editorial and restrained than the current version.

- headline is centered
- line 1 and line 2 use the existing heading system, with tight tracking and clean spacing
- line 3 is the visual focal point
- line 3 uses blue brand color and a serif face
- line 3 should be larger than the supporting sentence and read as a standalone line
- overall density should be low, with generous vertical spacing

Avoid adding new decorative panels, cards, or duplicate explanation blocks back into the hero.

## Motion Behavior

The rotating keyword uses a typewriter effect.

Interaction pattern:

1. type the full keyword
2. pause briefly
3. delete the full keyword
4. move to the next keyword
5. repeat

Constraints:

- only one keyword is visible at a time
- motion should be readable, not fast or noisy
- the effect should support reduced-motion preferences
- layout shift should be minimized while the word changes

## Component Boundaries

The simplified hero should keep the implementation focused and easy to maintain.

- `hero-section.tsx` should mainly compose the content and layout
- rotating keyword behavior should be isolated in a focused subcomponent if that keeps the main file smaller and clearer
- button styling should continue to use the existing `buttonVariants` or project-standard `shadcn/ui` button primitive

## What This Hero Should Not Do

Do not reintroduce any of the following into the first screen:

- a comparison panel
- multi-card highlight grids
- duplicated explanation of the course method
- multiple competing messages
- more than one main CTA

Those messages belong in lower sections that already exist on the page.

## Testing And Verification

Implementation should be verified with:

- visual check on desktop and mobile
- confirmation that the rotating keyword remains readable at narrow widths
- reduced-motion behavior check
- confirmation that the CTA still anchors correctly to `#waitlist`
- regression check that the hero remains the primary first-screen focus

## Risks

- If the serif keyword is too large, the hero may wrap awkwardly on mobile.
- If the typewriter speed is too aggressive, the section may feel gimmicky instead of premium.
- If supporting text becomes longer during implementation, the hero will lose the intended restraint.

## Implementation Notes

This is intentionally a simplification, not a content expansion.

Any implementation choice should be evaluated against one question:

Does this make the first screen feel clearer and more focused than the current hero?
