# Testing Guide

This guide covers testing strategies and best practices for the React Vite Starter Kit.

## Testing Stack

- **Vitest**: Unit and integration testing
- **React Testing Library**: Component testing utilities
- **Cypress**: End-to-end testing
- **@testing-library/jest-dom**: DOM matchers

## Test Types

### Unit Tests
Test individual components in isolation.

**Location**: `src/**/__tests__/*.test.tsx`

**Example:**
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MyComponent } from '../MyComponent';

describe('MyComponent', () => {
  it('renders correctly', () => {
    render(<MyComponent />);
    expect(screen.getByText('Hello')).toBeInTheDocument();
  });
});
```

### Integration Tests
Test component interactions and user flows within components.

**Location**: `src/**/__tests__/*.test.tsx`

**Example:**
```tsx
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSwitcher } from '../LanguageSwitcher';

describe('LanguageSwitcher', () => {
  it('changes language on selection', async () => {
    const user = userEvent.setup();
    render(<LanguageSwitcher />);

    const select = screen.getByLabelText(/language/i);
    await user.selectOptions(select, 'es');

    expect(select.value).toBe('es');
  });
});
```

### E2E Tests
Test complete user journeys across the application.

**Location**: `cypress/e2e/*.cy.ts`

**Example:**
```ts
describe('Home Page E2E', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('navigates to about page', () => {
    cy.contains('About').click();
    cy.url().should('include', '/about');
  });
});
```

## Running Tests

```bash
# Run all tests
npm run test

# Watch mode
npm run test:watch

# UI mode
npm run test:ui

# Coverage report
npm run test:coverage

# E2E tests (headless)
npm run test:e2e

# E2E tests (interactive)
npm run test:e2e:open
```

## Testing Best Practices

### 1. Test User Behavior
Test what users see and do, not implementation details.

✅ Good:
```tsx
expect(screen.getByRole('button', { name: /submit/i })).toBeInTheDocument();
```

❌ Bad:
```tsx
expect(component.state.isVisible).toBe(true);
```

### 2. Use Accessible Queries
Prefer queries that reflect how users interact with the app.

Priority order:
1. `getByRole`
2. `getByLabelText`
3. `getByText`
4. `getByTestId` (last resort)

### 3. Test Accessibility
```tsx
it('has accessible navigation', () => {
  render(<Layout><div>Content</div></Layout>);

  expect(screen.getByRole('navigation')).toBeInTheDocument();
  expect(screen.getByRole('main')).toBeInTheDocument();
});
```

### 4. Test User Interactions
Use `@testing-library/user-event` for realistic interactions.

```tsx
import userEvent from '@testing-library/user-event';

it('handles form submission', async () => {
  const user = userEvent.setup();
  render(<Form />);

  await user.type(screen.getByLabelText(/email/i), 'test@example.com');
  await user.click(screen.getByRole('button', { name: /submit/i }));

  expect(screen.getByText(/success/i)).toBeInTheDocument();
});
```

### 5. Mock External Dependencies
```tsx
import { vi } from 'vitest';

vi.mock('react-i18next', () => ({
  useTranslation: () => ({
    t: (key: string) => key,
    i18n: { changeLanguage: vi.fn() },
  }),
}));
```

### 6. Test Error States
```tsx
it('displays error message on failure', async () => {
  const errorMessage = 'Something went wrong';
  render(<Component error={errorMessage} />);

  expect(screen.getByText(errorMessage)).toBeInTheDocument();
});
```

## Test Coverage

Target coverage:
- **Statements**: 80%+
- **Branches**: 80%+
- **Functions**: 80%+
- **Lines**: 80%+

View coverage report:
```bash
npm run test:coverage
```

Open `coverage/index.html` in browser for detailed report.

## E2E Testing Best Practices

### 1. Test Critical User Paths
Focus on important user journeys:
- Navigation
- Form submissions
- Authentication flows
- Key feature interactions

### 2. Use Data Attributes Sparingly
Prefer semantic selectors:
```ts
// ✅ Good
cy.getByRole('button', { name: /submit/i })

// ❌ Avoid
cy.get('[data-testid="submit-button"]')
```

### 3. Test Accessibility
```ts
it('supports keyboard navigation', () => {
  cy.get('body').tab();
  cy.focused().should('contain', 'Skip to main content');
});
```

### 4. Clean Up State
```ts
beforeEach(() => {
  cy.visit('/');
  // Clear localStorage, cookies, etc.
});
```

## Common Patterns

### Testing with Router
```tsx
import { BrowserRouter } from 'react-router-dom';

render(
  <BrowserRouter>
    <Component />
  </BrowserRouter>
);
```

### Testing with i18n
```tsx
import { I18nextProvider } from 'react-i18next';
import i18n from '../i18n/config';

render(
  <I18nextProvider i18n={i18n}>
    <Component />
  </I18nextProvider>
);
```

### Testing Async Operations
```tsx
import { waitFor } from '@testing-library/react';

it('loads data', async () => {
  render(<DataComponent />);

  await waitFor(() => {
    expect(screen.getByText(/loaded/i)).toBeInTheDocument();
  });
});
```

## Troubleshooting

### Tests failing with "Cannot find module"
- Check import paths
- Verify TypeScript config
- Ensure test setup file is correct

### E2E tests timing out
- Increase timeout in `cypress.config.ts`
- Check if dev server is running
- Verify baseUrl is correct

### Coverage not working
- Run `npm run test:coverage` (not just `test`)
- Check `vite.config.ts` coverage configuration
- Ensure test files are in correct locations

