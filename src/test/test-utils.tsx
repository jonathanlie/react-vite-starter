import { ReactElement } from 'react';
import { render, RenderOptions } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';

/**
 * Test Utilities
 *
 * Provides helper functions for testing React components.
 * Includes providers for routing and i18n.
 */

interface CustomRenderOptions extends Omit<RenderOptions, 'wrapper'> {
  locale?: string;
}

/**
 * Custom render function that includes all necessary providers
 *
 * @param ui - The component to render
 * @param options - Render options including locale
 * @returns Render result with all providers
 *
 * @example
 * ```tsx
 * const { getByText } = renderWithProviders(<Home />, { locale: 'es' });
 * ```
 */
export function renderWithProviders(
  ui: ReactElement,
  { locale = 'en', ...renderOptions }: CustomRenderOptions = {}
) {
  // Set language if different from default
  if (locale !== 'en') {
    i18n.changeLanguage(locale);
  }

  function Wrapper({ children }: { children: React.ReactNode }) {
    return (
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>{children}</I18nextProvider>
      </BrowserRouter>
    );
  }

  return render(ui, { wrapper: Wrapper, ...renderOptions });
}

// Re-export everything from testing-library
// eslint-disable-next-line react-refresh/only-export-components
export * from '@testing-library/react';
export { default as userEvent } from '@testing-library/user-event';
