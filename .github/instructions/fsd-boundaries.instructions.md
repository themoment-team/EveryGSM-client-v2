---
description: 'Use when creating or refactoring files under src to enforce Feature-Sliced Design layer direction and import boundaries.'
name: 'FSD Boundaries'
applyTo: 'src/**'
---

# FSD Boundaries

- Keep layer direction strict: app -> views -> widgets -> features -> entities -> shared.
- Import only downward layers.
- Do not import laterally within the same layer.
- Prefer folder-level barrel exports (`index.ts`) for public layer APIs.
- Use `@/*` alias for internal imports.
- If a change requires cross-layer access, move shared logic to a lower layer instead of bypassing boundaries.

## Quick Checks

- Does any file in a higher layer import from another higher or same layer sibling?
- Does the feature expose only what is needed through `index.ts`?
- Are imports ordered as React -> Next.js -> external -> internal (`@/*`)?
