import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { I18nextProvider } from 'react-i18next';
import i18n from '@/i18n/config';
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
  const renderLanguageSwitcher = () => {
    return render(
      <I18nextProvider i18n={i18n}>
        <LanguageSwitcher />
      </I18nextProvider>
    );
  };

  it('renders language selector', () => {
    renderLanguageSwitcher();
    const select = screen.getByLabelText(/language/i);
    expect(select).toBeInTheDocument();
  });

  it('contains all available languages', () => {
    renderLanguageSwitcher();
    const select = screen.getByLabelText(/language/i) as HTMLSelectElement;

    expect(select.options[0].text).toBe('English');
    expect(select.options[1].text).toBe('Español');
  });

  it('allows language selection', async () => {
    const user = userEvent.setup();
    renderLanguageSwitcher();
    const select = screen.getByLabelText(/language/i) as HTMLSelectElement;

    await user.selectOptions(select, 'es');
    expect(select.value).toBe('es');
  });

  it('changes i18n language when selection changes', async () => {
    const user = userEvent.setup();
    renderLanguageSwitcher();
    const select = screen.getByLabelText(/language/i) as HTMLSelectElement;

    expect(i18n.language).toBe('en');
    await user.selectOptions(select, 'es');
    expect(i18n.language).toBe('es');
  });
});
