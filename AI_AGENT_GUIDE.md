# AI Agent Quick Reference Guide

This guide helps AI agents quickly understand the project structure and make intelligent code changes.

## Project Overview

This is a **React Vite Starter Kit** - a production-ready baseline for new projects. It demonstrates modern React patterns, testing strategies, and best practices.

## Key Technologies

- **Vite**: Build tool (config: `vite.config.ts`)
- **React 19**: UI library with functional components + hooks
- **TypeScript**: Strict mode enabled
- **React Router**: Client-side routing (`src/App.tsx`)
- **i18next**: Internationalization (`src/i18n/`)
- **Framer Motion**: Animations (respects `prefers-reduced-motion`)
- **Vitest**: Unit/integration testing
- **Cypress**: E2E testing

## Project Structure

```
src/
├── components/      # Reusable UI components
├── pages/          # Route components (add routes in App.tsx)
├── i18n/           # Translations (add locale files here)
├── config/         # Configuration (env.ts for env vars)
└── test/           # Test utilities
```

## Common Tasks

### Adding a Route
1. Create page: `src/pages/NewPage.tsx`
2. Import in `src/App.tsx`
3. Add `<Route path="/new" element={<NewPage />} />`
4. Add translations in `src/i18n/locales/*.json`

### Adding a Component
1. Create: `src/components/ComponentName.tsx`
2. Include TSDoc comments
3. Type all props with TypeScript interface
4. Create test: `src/components/__tests__/ComponentName.test.tsx`

### Adding a Language
1. Create: `src/i18n/locales/lang.json`
2. Import in `src/i18n/config.ts`
3. Add to resources object
4. Add to `LanguageSwitcher` languages array

### Environment Variables
- Access via `src/config/env.ts`: `import { env } from '@/config/env'`
- Must prefix with `VITE_` to be accessible
- Type definitions in `src/vite-env.d.ts`

## Code Patterns

### Component Pattern
```tsx
/**
 * Component Description
 *
 * @param props - Component props
 */
interface ComponentProps {
  /** Prop description */
  prop: string;
}

export function Component({ prop }: ComponentProps) {
  // Implementation
}
```

### i18n Pattern
```tsx
const { t } = useTranslation();
return <h1>{t('namespace.key')}</h1>;
```

### Animation Pattern
```tsx
import { motion } from 'framer-motion';

<motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ duration: 0.3 }}
>
```

### Testing Pattern
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';

describe('Component', () => {
  it('renders correctly', () => {
    render(<Component />);
    expect(screen.getByText('text')).toBeInTheDocument();
  });
});
```

## Accessibility Rules

- Use semantic HTML (`<nav>`, `<main>`, `<header>`)
- Include ARIA labels: `aria-label`, `aria-current`
- Add skip links: `<a href="#main-content">Skip to main content</a>`
- Test keyboard navigation
- Respect `prefers-reduced-motion`

## File Naming Conventions

- Components: `PascalCase.tsx`
- Utilities: `camelCase.ts`
- Tests: `ComponentName.test.tsx`
- Config: `kebab-case.config.ts`

## Important Files

- `src/App.tsx` - Routes definition
- `src/i18n/config.ts` - i18n setup
- `src/config/env.ts` - Environment variables
- `vite.config.ts` - Build configuration
- `tsconfig.json` - TypeScript config
- `.eslintrc.cjs` - Linting rules

## Testing Locations

- Unit/Integration: `src/**/__tests__/*.test.tsx`
- E2E: `cypress/e2e/*.cy.ts`
- Test setup: `src/test/setup.ts`

## Commands

- `npm run dev` - Start dev server
- `npm run build` - Build for production
- `npm run test` - Run tests
- `npm run lint` - Lint code
- `npm run type-check` - Type check

## When Making Changes

1. **Always**:
   - Type all props and functions
   - Add TSDoc comments
   - Update tests if needed
   - Check accessibility
   - Run `npm run type-check` before committing

2. **For new features**:
   - Create component/page
   - Add tests
   - Add translations
   - Update documentation if needed

3. **For bug fixes**:
   - Add regression test
   - Fix the issue
   - Verify all tests pass

## Architecture Principles

1. **Separation of Concerns**: Components, pages, config separated
2. **Type Safety**: TypeScript strict mode
3. **Accessibility First**: WCAG 2.1 compliance
4. **Test Coverage**: 80%+ target
5. **Documentation**: TSDoc for all public APIs

