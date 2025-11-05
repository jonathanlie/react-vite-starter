import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
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
  it('renders home page content', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText(/home page/i)).toBeInTheDocument();
  });

  it('displays feature cards', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );

    expect(screen.getByText(/i18n/i)).toBeInTheDocument();
    expect(screen.getByText(/a11y/i)).toBeInTheDocument();
    expect(screen.getByText(/animations/i)).toBeInTheDocument();
    expect(screen.getByText(/testing/i)).toBeInTheDocument();
  });
});

