import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

/**
 * Integration Test: Language Switcher Component
 *
 * Tests:
 * - Language selection dropdown
 * - Language change functionality
 * - Accessibility labels
 */
describe('LanguageSwitcher', () => {
  it('renders language selector', () => {
    render(<LanguageSwitcher />);
    const select = screen.getByLabelText(/language/i);
    expect(select).toBeInTheDocument();
  });

  it('contains all available languages', () => {
    render(<LanguageSwitcher />);
    const select = screen.getByLabelText(/language/i) as HTMLSelectElement;

    expect(select.options[0].text).toBe('English');
    expect(select.options[1].text).toBe('Español');
  });

  it('allows language selection', async () => {
    const user = userEvent.setup();
    render(<LanguageSwitcher />);
    const select = screen.getByLabelText(/language/i) as HTMLSelectElement;

    await user.selectOptions(select, 'es');
    expect(select.value).toBe('es');
  });
});

