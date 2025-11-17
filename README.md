# React Vite Starter Kit

A production-ready React starter kit built with Vite, TypeScript, and modern best practices. Designed to be a baseline for new projects and demonstrate architectural patterns for interviews.

## 🚀 Features

- **⚡ Vite** - Lightning-fast build tool and dev server
- **📘 TypeScript** - Full type safety
- **🌐 i18n** - Internationalization with i18next
- **♿ a11y** - Accessibility-first with ARIA labels and semantic HTML
- **🎨 Animations** - Smooth animations with Framer Motion
- **🧪 Testing** - Unit, integration, and E2E tests
  - Vitest for unit/integration tests
  - Cypress for E2E testing
- **🛣️ Routing** - React Router with easy route additions
- **📝 Forms** - React Hook Form with Zod validation
- **🗃️ State Management** - Zustand (Redux Toolkit alternative provided)
- **🔧 Code Quality** - ESLint, Prettier, and TypeScript strict mode
- **🌍 Environments** - Staging and production configurations
- **🔄 CI/CD** - GitHub Actions workflow

## 📦 Getting Started

### Prerequisites

- Node.js 20+
- npm 10+

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The app will be available at `http://localhost:3000`

### Building

```bash
# Development build
npm run build

# Staging build
npm run build:staging

# Production build
npm run build:production
```

### Testing

```bash
# Unit and integration tests
npm run test

# Tests with UI
npm run test:ui

# Watch mode
npm run test:watch

# Coverage report
npm run test:coverage

# E2E tests (headless)
npm run test:e2e

# E2E tests (interactive)
npm run test:e2e:open
```

**Test Status**: ✅ All tests passing (10 unit/integration tests)

- Unit tests: Vitest + React Testing Library
- Integration tests: Component interaction testing
- E2E tests: Cypress configured and ready

### Code Quality

```bash
# Lint
npm run lint

# Fix linting issues
npm run lint:fix

# Format code
npm run format

# Check formatting
npm run format:check

# Type checking
npm run type-check
```

## 📁 Project Structure

```
personal-portfolio/
├── src/
│   ├── components/          # Reusable components
│   │   ├── __tests__/       # Component tests
│   │   ├── Layout.tsx
│   │   └── LanguageSwitcher.tsx
│   ├── pages/               # Page components
│   │   ├── __tests__/       # Page tests
│   │   ├── Home.tsx
│   │   ├── About.tsx
│   │   └── NotFound.tsx
│   ├── i18n/                # Internationalization
│   │   ├── config.ts
│   │   └── locales/         # Translation files
│   ├── config/              # Configuration
│   │   └── env.ts           # Environment variables
│   ├── store/                # State management (Zustand)
│   │   ├── useAppStore.ts
│   │   └── index.ts
│   ├── components/forms/     # Form components
│   │   └── ContactForm.tsx
│   ├── test/                 # Test utilities
│   │   ├── setup.ts
│   │   └── test-utils.tsx
│   ├── App.tsx              # Main app component
│   ├── App.css              # App styles
│   ├── main.tsx             # Entry point
│   └── index.css            # Global styles
├── cypress/                 # E2E tests
│   ├── e2e/                 # E2E test specs
│   └── support/             # Cypress support files
├── .github/workflows/       # CI/CD workflows
└── public/                  # Static assets
```

## 🗺️ Adding New Routes

1. Create a new page component in `src/pages/`
2. Import it in `src/App.tsx`
3. Add a `<Route>` element:

```tsx
import { NewPage } from './pages/NewPage';

<Route path="/new-page" element={<NewPage />} />;
```

## 🌍 Adding New Languages

1. Create a new locale file in `src/i18n/locales/` (e.g., `fr.json`)
2. Import it in `src/i18n/config.ts`
3. Add it to the resources object:

```ts
import fr from './locales/fr.json';

resources: {
  // ... existing languages
  fr: {
    translation: fr,
  },
}
```

## 📝 Forms with React Hook Form

Forms are handled using `react-hook-form` with Zod validation. See `src/components/forms/ContactForm.tsx` for an example.

**Features:**

- Type-safe form validation
- Accessibility built-in
- Error handling
- Minimal re-renders

**Example:**

```tsx
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const {
  register,
  handleSubmit,
  formState: { errors },
} = useForm({
  resolver: zodResolver(mySchema),
});
```

See `docs/FORMS_GUIDE.md` for detailed documentation.

## 🗃️ State Management with Zustand

State management is handled using **Zustand** - a modern, lightweight state management solution.

**Why Zustand?**

- Minimal boilerplate (~1KB)
- TypeScript-first
- No Provider needed
- Modern and growing in popularity
- Perfect for starter kits

**Usage:**

```tsx
import { useAppStore } from '@/store/useAppStore';

function MyComponent() {
  const { count, increment } = useAppStore();
  return <button onClick={increment}>Count: {count}</button>;
}
```

**Redux Toolkit Alternative:**
If you prefer Redux Toolkit, see `docs/REDUX_TOOLKIT_EXAMPLE.md` for implementation details.

**Comparison:**
See `docs/STATE_MANAGEMENT.md` for a detailed comparison of state management options.

## 🧪 Testing Strategy

### Unit Tests

- Test individual components in isolation
- Located in `src/**/__tests__/`
- Use Vitest and React Testing Library

### Integration Tests

- Test component interactions
- Also use Vitest and React Testing Library
- Example: `LanguageSwitcher.test.tsx`

### E2E Tests

- Test user flows across the application
- Located in `cypress/e2e/`
- Use Cypress for browser automation

## ♿ Accessibility

This starter kit follows WCAG 2.1 guidelines:

- Semantic HTML elements
- ARIA labels and roles
- Keyboard navigation support
- Skip links for screen readers
- Focus management
- Color contrast compliance

## 🎨 Animations

Animations are implemented with Framer Motion and respect `prefers-reduced-motion` media query for accessibility.

## 🔐 Environment Variables

Create environment files based on `.env.example`:

- `.env.local` - Local development
- `.env.staging` - Staging environment
- `.env.production` - Production environment

Access variables via `src/config/env.ts`:

```ts
import { env } from '@/config/env';
const apiUrl = env.API_URL;
```

## 📚 Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md) - Detailed architecture documentation
- [Testing Guide](./docs/TESTING.md) - Testing best practices
- [Contributing Guide](./docs/CONTRIBUTING.md) - Development guidelines

## 🤝 Contributing

This is a personal starter kit, but suggestions and improvements are welcome!

## 📄 License

ISC
