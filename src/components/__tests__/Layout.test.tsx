import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import { Layout } from '@/components/Layout';

/**
 * Unit Test: Layout Component
 *
 * Tests:
 * - Renders navigation links
 * - Includes skip link for accessibility
 * - Renders main content area
 * - Includes language switcher
 */
describe('Layout', () => {
  const renderLayout = (children: React.ReactNode) => {
    return render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Layout>{children}</Layout>
        </I18nextProvider>
      </BrowserRouter>
    );
  };

  it('renders navigation links', () => {
    renderLayout(<div>Test Content</div>);
    expect(screen.getByText(/home/i)).toBeInTheDocument();
    expect(screen.getByText(/about/i)).toBeInTheDocument();
  });

  it('includes skip link for accessibility', () => {
    renderLayout(<div>Test Content</div>);
    const skipLink = screen.getByText(/skip to main content/i);
    expect(skipLink).toBeInTheDocument();
    expect(skipLink).toHaveAttribute('href', '#main-content');
  });

  it('renders main content area', () => {
    renderLayout(<div>Test Content</div>);
    const main = screen.getByRole('main');
    expect(main).toBeInTheDocument();
    expect(main).toHaveAttribute('id', 'main-content');
  });

  it('renders language switcher', () => {
    renderLayout(<div>Test Content</div>);
    const languageSelect = screen.getByLabelText(/language/i);
    expect(languageSelect).toBeInTheDocument();
  });
});
