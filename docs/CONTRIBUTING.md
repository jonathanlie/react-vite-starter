# Contributing Guide

This guide helps you understand how to contribute to and extend the React Vite Starter Kit.

## Development Workflow

### 1. Setup
```bash
npm install
```

### 2. Development Server
```bash
npm run dev
```

### 3. Before Committing
```bash
# Run linting
npm run lint

# Fix auto-fixable issues
npm run lint:fix

# Format code
npm run format

# Run tests
npm run test

# Type check
npm run type-check
```

## Code Style

### TypeScript
- Use TypeScript strict mode
- Type all function parameters and return values
- Use interfaces for component props
- Prefer `type` for unions and intersections

### React Components
- Use functional components with hooks
- Use TypeScript interfaces for props
- Include TSDoc comments for components
- Keep components focused and small

**Example:**
```tsx
/**
 * Button Component
 *
 * @param props - Button component props
 */
interface ButtonProps {
  /** Button text */
  label: string;
  /** Click handler */
  onClick: () => void;
  /** Button variant */
  variant?: 'primary' | 'secondary';
}

export function Button({ label, onClick, variant = 'primary' }: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`button button--${variant}`}
      type="button"
    >
      {label}
    </button>
  );
}
```

### File Naming
- Components: `PascalCase.tsx` (e.g., `MyComponent.tsx`)
- Utilities: `camelCase.ts` (e.g., `formatDate.ts`)
- Tests: `ComponentName.test.tsx`
- Config files: `kebab-case` (e.g., `vite.config.ts`)

## Adding Features

### Adding a New Component

1. Create component file:
```tsx
// src/components/MyComponent.tsx
interface MyComponentProps {
  // props
}

export function MyComponent({ ... }: MyComponentProps) {
  // implementation
}
```

2. Create test file:
```tsx
// src/components/__tests__/MyComponent.test.tsx
describe('MyComponent', () => {
  // tests
});
```

3. Add to exports if creating a component library

### Adding a New Page

1. Create page component:
```tsx
// src/pages/NewPage.tsx
export function NewPage() {
  // implementation
}
```

2. Add route in `src/App.tsx`:
```tsx
import { NewPage } from './pages/NewPage';

<Route path="/new-page" element={<NewPage />} />
```

3. Add translations:
```json
// src/i18n/locales/en.json
{
  "newPage": {
    "title": "New Page",
    "description": "Description"
  }
}
```

4. Create test file:
```tsx
// src/pages/__tests__/NewPage.test.tsx
```

### Adding a New Language

1. Create locale file:
```json
// src/i18n/locales/fr.json
{
  "common": {
    "welcome": "Bienvenue"
  }
}
```

2. Import and add to config:
```ts
// src/i18n/config.ts
import fr from './locales/fr.json';

resources: {
  // ... existing
  fr: {
    translation: fr,
  },
}
```

3. Add to language switcher:
```tsx
// src/components/LanguageSwitcher.tsx
const languages = [
  // ... existing
  { code: 'fr', name: 'Français' },
];
```

## Testing Guidelines

### Write Tests First (TDD)
1. Write failing test
2. Implement feature
3. Make test pass
4. Refactor

### Test Coverage
- Aim for 80%+ coverage
- Test user-facing behavior
- Test edge cases and error states
- Test accessibility features

### Test Structure
```tsx
describe('ComponentName', () => {
  describe('when condition', () => {
    it('should behavior', () => {
      // Arrange
      // Act
      // Assert
    });
  });
});
```

## Accessibility

### Always Include
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation support
- Focus management
- Screen reader testing

### Checklist
- [ ] All interactive elements keyboard accessible
- [ ] ARIA labels for form inputs
- [ ] Skip links for main content
- [ ] Color contrast meets WCAG AA
- [ ] Tested with screen reader

## Performance

### Best Practices
- Use `React.memo` for expensive components
- Lazy load routes with `React.lazy`
- Optimize images
- Code splitting
- Avoid unnecessary re-renders

### Example: Lazy Loading
```tsx
import { lazy, Suspense } from 'react';

const LazyPage = lazy(() => import('./pages/LazyPage'));

<Route
  path="/lazy"
  element={
    <Suspense fallback={<div>Loading...</div>}>
      <LazyPage />
    </Suspense>
  }
/>
```

## Git Workflow

### Commit Messages
Follow conventional commits:
```
feat: add new feature
fix: fix bug
docs: update documentation
test: add tests
refactor: refactor code
style: formatting changes
chore: maintenance tasks
```

### Branch Naming
```
feature/feature-name
fix/bug-description
docs/documentation-update
```

## Documentation

### Code Comments
- Use TSDoc for public APIs
- Explain "why" not "what"
- Document complex logic
- Include examples for utilities

### README Updates
- Update README when adding features
- Keep examples current
- Document breaking changes

## Questions?

If you have questions or need clarification:
1. Check existing documentation
2. Review similar code in the codebase
3. Check test files for examples

