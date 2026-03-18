# Project Guidelines

## Build and Test

- Install: pnpm install
- Dev server: pnpm dev
- Build: pnpm build
- Start: pnpm start
- Lint: pnpm lint
- Auto-fix lint: pnpm lint:fix
- Format: pnpm format
- Check format: pnpm format:check
- Before commit, expect husky + lint-staged to run formatting/lint fixes for staged files.

## Architecture

- Use Feature-Sliced Design layers in this direction only:
  - app -> views -> widgets -> features -> entities -> shared
- Import only downward layers. Do not import laterally within the same layer.
- Keep Next.js boundaries explicit:
  - Server-only API utilities must stay server-only.
  - Do not re-export server-only modules through shared client-facing barrels.

## Code Style

- Follow docs/CodeConvention.md as the source of truth.
- Use interface by default for object shapes.
- Use type for unions or advanced mapped/conditional typing.
- Prefer folder-level barrel exports with index.ts.
- Use @/\* path alias for internal imports.
- Import order:
  - React
  - Next.js
  - External libraries
  - Internal modules (@/\*)

## Conventions

- Naming:
  - Component folders: PascalCase
  - Component files: usually index.tsx
  - Hook/util/constant/type/schema files: camelCase
  - Asset files: PascalCase
- React components:
  - Arrow function components + default export
  - Destructure props
  - Keep order inside component body: hooks/vars -> handlers -> effects -> return
- Styling:
  - Tailwind CSS + cn utility (clsx + tailwind-merge)
  - Keep class composition readable and concise
- Data fetching:
  - TanStack Query hooks with method-based names (useGet*, usePost*, usePatch*, usePut*, useDelete\*)
  - Query keys and URL controllers should be centralized objects with as const

## Pitfalls

- shared/api/fetcher.ts is server-only and uses next/headers cookies context.
- Avoid importing server-only code from client components or client-facing barrels.
- TypeScript strict mode is enabled; keep generics and optional fields precise.
- Keep mutation and query keys consistent for predictable cache invalidation.

## Key References

- docs/CodeConvention.md
- src/shared/api/fetcher.ts
- src/shared/api/http.ts
- src/shared/api/queryKeys.ts
- src/entities/project/index.server.ts
- src/shared/lib/axios.ts
