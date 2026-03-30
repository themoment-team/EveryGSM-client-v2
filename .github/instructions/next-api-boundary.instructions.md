---
description: 'Use when editing API utilities, query hooks, or server/client data fetching code in src/shared/api and related entity APIs.'
name: 'Next API Boundary'
applyTo: 'src/shared/api/**,src/entities/**/*.server.ts,src/entities/**/api/**'
---

# Next API Boundary

- Treat `src/shared/api/fetcher.ts` as server-only.
- Never re-export server-only modules through client-facing barrels.
- In client-safe API modules, use `src/shared/api/http.ts` wrappers (`get`, `post`, `put`, `patch`, `del`).
- Keep URL controllers and query keys centralized in `src/shared/api/apiUrls.ts` and `src/shared/api/queryKeys.ts`.
- Use method-based TanStack hook naming: `useGet*`, `usePost*`, `usePatch*`, `usePut*`, `useDelete*`.
- Keep query and mutation keys consistent for predictable invalidation.

## Safety Rules

- Do not import `next/headers` in client components.
- Do not pull `server-only` modules into `shared/api/index.ts`.
- Keep TypeScript generics explicit in API wrappers and hooks.
