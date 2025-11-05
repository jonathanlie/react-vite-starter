import { afterEach, vi, beforeAll } from 'vitest';
import { cleanup } from '@testing-library/react';
import '@testing-library/jest-dom/vitest';
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Initialize i18n for tests
beforeAll(async () => {
  await i18n.use(initReactI18next).init({
    lng: 'en',
    fallbackLng: 'en',
    ns: ['translation'],
    defaultNS: 'translation',
    resources: {
      en: {
        translation: {
          common: {
            welcome: 'Welcome',
            home: 'Home',
            about: 'About',
            notFound: 'Page Not Found',
            loading: 'Loading...',
            error: 'Error',
            language: 'Language',
          },
          home: {
            title: 'Home Page',
            description: 'This is the home page of the React Vite Starter Kit',
          },
          about: {
            title: 'About Page',
            description: 'This is the about page',
          },
          notFound: {
            title: '404 - Page Not Found',
            description: "The page you're looking for doesn't exist.",
            backHome: 'Back to Home',
          },
        },
      },
      es: {
        translation: {
          common: {
            welcome: 'Bienvenido',
            home: 'Inicio',
            about: 'Acerca de',
            notFound: 'Página No Encontrada',
            loading: 'Cargando...',
            error: 'Error',
            language: 'Idioma',
          },
          home: {
            title: 'Página de Inicio',
            description: 'Esta es la página de inicio del React Vite Starter Kit',
          },
          about: {
            title: 'Página Acerca de',
            description: 'Esta es la página acerca de',
          },
          notFound: {
            title: '404 - Página No Encontrada',
            description: 'La página que buscas no existe.',
            backHome: 'Volver al Inicio',
          },
        },
      },
    },
    interpolation: {
      escapeValue: false,
    },
    react: {
      useSuspense: false,
    },
  });
});

// Cleanup after each test
afterEach(() => {
  cleanup();
  // Reset i18n to default language
  i18n.changeLanguage('en');
});

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});

