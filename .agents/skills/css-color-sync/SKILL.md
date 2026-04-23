---
name: css-color-sync
description: >
  Enforces color system consistency between src/app/globals.css and src/components/ui/.
  ALWAYS consult this skill before writing or modifying any file under src/components/ui/,
  or whenever any color value is being written anywhere in this project.
  Also use for: auditing colors, syncing the design token system, adding derived color
  variants for primary/secondary/tertiary brand colors, removing hardcoded colors from UI
  components, ensuring color-mix is used for brand color variants, or updating the palette.
  Trigger on: editing src/components/ui/, writing color values, "sync colors",
  "color consistency", "audit colors", "hardcoded colors", "color-mix",
  "primary variants", "secondary variants", "tertiary variants", "brand color",
  "顏色同步", "硬編碼顏色", "color 審計".
---

# CSS Color Sync

Enforce two rules in this project:

1. **Derived brand colors** in `src/app/globals.css` use `color-mix(in srgb, ...)` — never hardcoded hex
2. **No hardcoded colors** in `src/components/ui/` — only CSS variables or Tailwind semantic tokens

---

## Rule 1 — Derived brand colors must use color-mix

This rule applies to **all brand color scales** in this project: `primary`, `secondary`, and `tertiary` (and any future brand colors added). Any color that is a variation of a brand base (hover, background, shadow, ring, etc.) must derive from that base dynamically.

The pattern is the same for every brand color:

```css
:root {
  /* --- primary --- */
  --primary: #516a5b;
  --primary-hover:      color-mix(in srgb, var(--primary) 80%, black);
  --primary-background: color-mix(in srgb, var(--primary) 12%, white);
  --primary-shadow:     color-mix(in srgb, var(--primary) 35%, transparent);

  /* --- secondary --- */
  --secondary: #ece7de;
  --secondary-hover:      color-mix(in srgb, var(--secondary) 80%, black);
  --secondary-background: color-mix(in srgb, var(--secondary) 12%, white);
  --secondary-shadow:     color-mix(in srgb, var(--secondary) 35%, transparent);

  /* --- tertiary --- */
  --tertiary: #d9d2c8;
  --tertiary-hover:      color-mix(in srgb, var(--tertiary) 80%, black);
  --tertiary-background: color-mix(in srgb, var(--tertiary) 12%, white);
  --tertiary-shadow:     color-mix(in srgb, var(--tertiary) 35%, transparent);
}
```

This way, swapping any base color automatically cascades to all its variants.

For the `.dark` block, swap the mix target (`black` ↔ `white`) so the direction of lightening/darkening stays correct:

```css
.dark {
  --primary: #8fa295;
  --primary-hover:      color-mix(in srgb, var(--primary) 80%, white);
  --primary-background: color-mix(in srgb, var(--primary) 12%, black);
  --primary-shadow:     color-mix(in srgb, var(--primary) 35%, transparent);

  /* same pattern for secondary, tertiary */
}
```

### Registering variants in @theme inline

For Tailwind v4 to generate utility classes (`bg-primary-hover`, `bg-secondary-background`, etc.), register each variant in the `@theme inline` block:

```css
@theme inline {
  --color-primary-hover:         var(--primary-hover);
  --color-primary-background:    var(--primary-background);
  --color-primary-shadow:        var(--primary-shadow);

  --color-secondary-hover:       var(--secondary-hover);
  --color-secondary-background:  var(--secondary-background);
  --color-secondary-shadow:      var(--secondary-shadow);

  --color-tertiary-hover:        var(--tertiary-hover);
  --color-tertiary-background:   var(--tertiary-background);
  --color-tertiary-shadow:       var(--tertiary-shadow);
  /* ... existing entries ... */
}
```

### When a variable duplicates a brand base

A common pattern is `--ring: #516a5b` (same value as `--primary`). This creates a hidden sync hazard — if `--primary` changes, `--ring` silently drifts. Replace with a reference:

```css
--ring: var(--primary);
```

Apply this same check to `--sidebar-primary`, `--chart-1`, and any other variable whose value duplicates a brand base color.

---

## Rule 2 — No hardcoded colors in src/components/ui/

Hardcoded color patterns to flag:

- Hex literals: `#abc`, `#aabbcc`
- RGB/RGBA: `rgb(...)`, `rgba(...)`
- HSL/HSLA: `hsl(...)`, `hsla(...)`
- Tailwind arbitrary colors: `bg-[#abc]`, `text-[rgb(...)]`
- Inline styles with color: `style={{ color: '#abc' }}`

**Acceptable** (not hardcoded):

- Tailwind semantic tokens: `bg-primary`, `text-foreground`, `ring-ring/30`
- Tailwind opacity modifiers: `bg-primary/80` — fine, uses the CSS var under the hood
- Referencing CSS variables via `var(--...)` in Tailwind's `[]` syntax: `bg-[var(--primary)]`

---

## Audit Workflow

### Step 1 — Scan globals.css

Read `src/app/globals.css`. For each `:root` and `.dark` block, check all brand color scales present in the file (`--primary`, `--secondary`, `--tertiary`, and any others):

- Are the `-hover`, `-background`, `-shadow` variants defined for each brand color?
- Do they use `color-mix(in srgb, var(--<brand>) ...)`? Or are they hardcoded hex?
- Are there any variables whose hardcoded value duplicates a brand base (e.g. `--ring`, `--sidebar-primary`, `--chart-1`)? Those should reference `var(--primary)` etc. instead.

### Step 2 — Scan src/components/ui/

Read every `.tsx` file under `src/components/ui/`. Search for the patterns listed in Rule 2. Note the file, the line, and the offending value.

### Step 3 — Report

Output a clear list:

```
globals.css violations:
  - --primary-hover missing (should use color-mix)
  - --ring: #516a5b duplicates --primary

src/components/ui/ violations:
  - button.tsx line 12: bg-[#516a5b] (hardcoded hex)
```

If no violations, confirm the system is consistent.

---

## Fix Workflow

### Fixing globals.css

For **each brand color scale** present in the file (`--primary`, `--secondary`, `--tertiary`, any future ones):

1. Add missing `-hover`, `-background`, `-shadow` variants under `:root` using the `color-mix` pattern
2. Repeat for `.dark` (swap `black` ↔ `white` in the mix)
3. Add corresponding `--color-<brand>-hover` etc. entries in `@theme inline`
4. Replace any variable whose hardcoded value duplicates a brand base with `var(--<brand>)`

Keep all existing variables intact — only add/update, never remove unless the user explicitly asks.

### Fixing src/components/ui/

Replace each hardcoded color with the semantically equivalent CSS variable or Tailwind token. Use the mapping from `globals.css` to find the right variable.

If no existing variable maps to the color, define a new one in `globals.css` (use `color-mix` if it's a primary variant), register it in `@theme inline`, then use its Tailwind token.

---

## Verification

After fixing, re-read both files and confirm:

- Every `--primary-*` variant in `globals.css` uses `color-mix`
- Zero hardcoded color patterns in `src/components/ui/`
- All new `--color-*` entries are present in `@theme inline`

Report the result to the user.
