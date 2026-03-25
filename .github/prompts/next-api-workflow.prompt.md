---
description: 'Create or update a Next.js API integration in this repo with apiUrls, queryKeys, entity API functions, and TanStack Query hooks that follow project conventions.'
name: 'Next API Workflow'
argument-hint: 'Describe endpoint, method, request/response shape, and where it is used'
agent: 'agent'
---

Implement the requested API integration using this repository conventions.

Requirements:

- Follow FSD boundaries and import direction.
- Keep server-only and client-safe modules separated.
- Add or update URL controller in `src/shared/api/apiUrls.ts`.
- Add or update query keys in `src/shared/api/queryKeys.ts` with `as const`.
- Create or update entity API function(s) under `src/entities/*/api`.
- Create or update TanStack hook(s) under `src/entities/*/model` with method-based names.
- Prefer `interface` for object shapes and `type` for unions/advanced types.
- Keep import order: React, Next.js, external, internal (`@/*`).

Output:

1. Exact files changed.
2. Why each change was needed.
3. Any server/client boundary risk checks performed.
4. Commands run for validation and key results.
