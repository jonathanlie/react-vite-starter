# Architecture Guide

This document provides a comprehensive overview of the React Vite Starter Kit architecture, designed to help AI agents and developers quickly understand the codebase structure and patterns.

## Overview

The starter kit follows a **component-based architecture** with clear separation of concerns:

- **Presentation Layer**: React components and pages
- **Configuration Layer**: i18n, routing, environment variables
- **Testing Layer**: Unit, integration, and E2E tests

## Core Principles

### 1. Separation of Concerns
- **Components**: Reusable UI components (`src/components/`)
- **Pages**: Route-specific page components (`src/pages/`)
- **Configuration**: Centralized config (`src/config/`, `src/i18n/`)

### 2. Type Safety
- TypeScript strict mode enabled
- All components typed with interfaces
- Environment variables typed in `src/config/env.ts`

### 3. Accessibility First
- Semantic HTML throughout
- ARIA labels and roles
- Keyboard navigation support
- Screen reader considerations

### 4. Internationalization
- i18next for translations
- Language detection
- Easy to add new languages

## Directory Structure

### `/src/components`
Reusable, presentational components. Each component:
- Has a single responsibility
- Is fully typed with TypeScript
- Includes TSDoc comments
- Has corresponding tests in `__tests__/`

**Example Structure:**
```
components/
├── Layout.tsx              # Main layout wrapper
├── LanguageSwitcher.tsx    # Language selection
└── __tests__/
    ├── Layout.test.tsx
    └── LanguageSwitcher.test.tsx
```

### `/src/pages`
Route-specific page components. Pages:
- Represent full page views
- Use translations via `useTranslation()`
- Include animations for page transitions
- Have corresponding tests

**Adding a New Page:**
1. Create component in `src/pages/YourPage.tsx`
2. Add route in `src/App.tsx`
3. Add translation keys in `src/i18n/locales/`
4. Create test file in `src/pages/__tests__/`

### `/src/i18n`
Internationalization configuration:
- `config.ts`: i18next setup
- `locales/`: Translation JSON files
- Supports browser language detection
- Stores preference in localStorage

### `/src/config`
Application configuration:
- `env.ts`: Type-safe environment variable access
- Validates required variables in production
- Provides defaults for development

## Routing Pattern

Routes are defined in `src/App.tsx` using React Router:

```tsx
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/about" element={<About />} />
  <Route path="*" element={<NotFound />} />
</Routes>
```

**To add a route:**
1. Create page component
2. Import in `App.tsx`
3. Add `<Route>` element

## Testing Patterns

### Unit Tests
- Test components in isolation
- Mock external dependencies
- Use `@testing-library/react`
- Located alongside components in `__tests__/`

### Integration Tests
- Test component interactions
- Test user flows within components
- Example: Language switcher functionality

### E2E Tests
- Test full user journeys
- Use Cypress for browser automation
- Located in `cypress/e2e/`
- Test accessibility, navigation, and user interactions

## Styling Approach

- CSS files co-located with components
- Global styles in `src/index.css`
- App-specific styles in `src/App.css`
- Respects `prefers-reduced-motion` for accessibility

## Environment Configuration

Environment variables:
- Must be prefixed with `VITE_`
- Typed in `src/config/env.ts`
- Validated in production builds
- Different files for different environments

## Animation Patterns

Animations use Framer Motion:
- Page transitions: `initial`, `animate`, `exit`
- Interactive elements: `whileHover`, `whileTap`
- Respects `prefers-reduced-motion`

## Accessibility Patterns

### Semantic HTML
```tsx
<header role="banner">
  <nav role="navigation" aria-label="Main navigation">
    {/* ... */}
  </nav>
</header>
```

### Skip Links
```tsx
<a href="#main-content" className="skip-link">
  Skip to main content
</a>
```

### ARIA Labels
```tsx
<select
  aria-label={t('common.language')}
  // ...
/>
```

## Build Configuration

### Vite Config (`vite.config.ts`)
- Path aliases (`@/` for `src/`)
- React plugin
- Test configuration
- Coverage settings

### TypeScript Config (`tsconfig.json`)
- Strict mode enabled
- Path aliases configured
- React JSX transform

### ESLint Config (`.eslintrc.cjs`)
- TypeScript rules
- React rules
- Accessibility rules (jsx-a11y)
- Prettier integration

## CI/CD Pipeline

GitHub Actions workflow (`.github/workflows/ci.yml`):
1. **Lint**: Code quality checks
2. **Test**: Unit and integration tests with coverage
3. **Build**: Verify builds for all environments
4. **E2E**: End-to-end tests

## Adding New Features

### Feature Checklist
- [ ] Create component/page in appropriate directory
- [ ] Add TypeScript types
- [ ] Add TSDoc comments
- [ ] Add translations (if needed)
- [ ] Add unit/integration tests
- [ ] Add E2E tests (if applicable)
- [ ] Ensure accessibility compliance
- [ ] Add animations (if applicable)
- [ ] Update documentation

## Best Practices

1. **Components**: Keep components small and focused
2. **Types**: Always type props and state
3. **Tests**: Write tests alongside code
4. **Accessibility**: Test with keyboard and screen readers
5. **Performance**: Use React.memo for expensive components
6. **Documentation**: Document complex logic and decisions

