import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
import { Home } from '@/pages/Home';

/**
 * Unit Test: Home Page Component
 *
 * Tests:
 * - Renders page title
 * - Displays translated content
 * - Shows feature cards
 */
describe('Home', () => {
  const renderHome = () => {
    return render(
      <BrowserRouter>
        <I18nextProvider i18n={i18n}>
          <Home />
        </I18nextProvider>
      </BrowserRouter>
    );
  };

  it('renders home page content', () => {
    renderHome();
    expect(screen.getByText('Home Page')).toBeInTheDocument();
    expect(
      screen.getByText('This is the home page of the React Vite Starter Kit')
    ).toBeInTheDocument();
  });

  it('displays feature cards', () => {
    renderHome();

    expect(screen.getByText('i18n')).toBeInTheDocument();
    expect(screen.getByText('a11y')).toBeInTheDocument();
    expect(screen.getByText('Animations')).toBeInTheDocument();
    expect(screen.getByText('Testing')).toBeInTheDocument();
  });
});
