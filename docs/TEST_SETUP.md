# Test Setup Verification

This document verifies that all test configurations are working correctly.

## Test Types

### ✅ Unit Tests
- **Framework**: Vitest
- **Location**: `src/**/__tests__/*.test.tsx`
- **Status**: ✅ All passing (10 tests)
- **Example**: `src/components/__tests__/Layout.test.tsx`

### ✅ Integration Tests
- **Framework**: Vitest + React Testing Library
- **Location**: `src/**/__tests__/*.test.tsx`
- **Status**: ✅ All passing
- **Example**: `src/components/__tests__/LanguageSwitcher.test.tsx`

### ✅ E2E Tests
- **Framework**: Cypress
- **Location**: `cypress/e2e/*.cy.ts`
- **Status**: ✅ Configured and ready
- **Example**: `cypress/e2e/home.cy.ts`

## Running Tests

### Unit/Integration Tests
```bash
# Run all tests
npm run test

# Run in watch mode
npm run test:watch

# Run with UI
npm run test:ui

# Run with coverage
npm run test:coverage
```

### E2E Tests
```bash
# Run E2E tests (headless)
npm run test:e2e

# Open Cypress UI
npm run test:e2e:open
```

## Test Configuration

### Vitest Configuration
Located in `vite.config.ts`:
- Environment: `jsdom`
- Setup file: `src/test/setup.ts`
- Coverage: v8 provider
- Path aliases: `@/` supported

### Cypress Configuration
Located in `cypress.config.ts`:
- Base URL: `http://localhost:3000`
- Viewport: 1280x720
- Video: Enabled
- Screenshots: On failure

## Test Utilities

### Test Helper (`src/test/test-utils.tsx`)
Provides `renderWithProviders` function that includes:
- BrowserRouter
- I18nextProvider
- Custom render options

**Usage:**
```tsx
import { renderWithProviders } from '@/test/test-utils';
import { MyComponent } from '@/components/MyComponent';

it('renders component', () => {
  const { getByText } = renderWithProviders(<MyComponent />);
  expect(getByText('Hello')).toBeInTheDocument();
});
```

### Cypress Commands
Custom commands in `cypress/support/commands.ts`:
- `cy.navigateTo(path)` - Navigate and wait for load
- `cy.checkAriaLabel(selector, role)` - Check ARIA attributes

## i18n in Tests

All tests are configured with i18n support:
- Test setup initializes i18n with English and Spanish
- Tests use `I18nextProvider` wrapper
- Language resets after each test

## Test Coverage

Target coverage: **80%+**
- Statements: 80%+
- Branches: 80%+
- Functions: 80%+
- Lines: 80%+

View coverage report:
```bash
npm run test:coverage
# Open coverage/index.html in browser
```

## Best Practices

1. **Test user behavior**, not implementation
2. **Use accessible queries** (getByRole, getByLabelText)
3. **Test accessibility** features
4. **Use test utilities** for common setups
5. **Keep tests focused** and independent
6. **Mock external dependencies**

## Troubleshooting

### Tests fail with i18n errors
- Ensure `I18nextProvider` wraps components
- Check test setup file is loaded

### E2E tests timeout
- Verify dev server is running on port 3000
- Check baseUrl in cypress.config.ts

### Path aliases not working
- Verify `@/` is configured in both `vite.config.ts` and `tsconfig.json`
- Restart dev server/test runner

