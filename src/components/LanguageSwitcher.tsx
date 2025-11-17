import { useTranslation } from 'react-i18next';

/**
 * Language Switcher Component
 *
 * Provides a dropdown to switch between available languages.
 * Uses i18next for translation management.
 */
export function LanguageSwitcher() {
  const { i18n, t } = useTranslation();

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
  ];

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
  };

  return (
    <div className="language-switcher">
      <label htmlFor="language-select" className="sr-only">
        {t('common.language')}
      </label>
      <select
        id="language-select"
        value={i18n.language}
        onChange={(e) => handleLanguageChange(e.target.value)}
        aria-label={t('common.language')}
      >
        {languages.map((lang) => (
          <option key={lang.code} value={lang.code}>
            {lang.name}
          </option>
        ))}
      </select>
    </div>
  );
}
