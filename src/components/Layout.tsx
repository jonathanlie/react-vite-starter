import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { LanguageSwitcher } from '@/components/LanguageSwitcher';

interface LayoutProps {
  children: ReactNode;
}

/**
 * Layout Component
 *
 * Provides the main application shell with navigation and accessibility features.
 * Includes:
 * - Semantic HTML structure
 * - Skip to main content link for screen readers
 * - Navigation with ARIA labels
 * - Language switcher
 */
export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className="app-layout">
      {/* Skip to main content for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header role="banner">
        <nav role="navigation" aria-label="Main navigation">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ul className="nav-list">
              <li>
                <Link
                  to="/"
                  className={location.pathname === '/' ? 'active' : ''}
                  aria-current={location.pathname === '/' ? 'page' : undefined}
                >
                  {t('common.home')}
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className={location.pathname === '/contact' ? 'active' : ''}
                  aria-current={
                    location.pathname === '/contact' ? 'page' : undefined
                  }
                >
                  {t('common.contact')}
                </Link>
              </li>
              <li>
                <Link
                  to="/knowledge-web"
                  className={
                    location.pathname === '/knowledge-web' ? 'active' : ''
                  }
                  aria-current={
                    location.pathname === '/knowledge-web' ? 'page' : undefined
                  }
                >
                  {t('common.knowledgeWeb')}
                </Link>
              </li>
              <li>
                <Link
                  to="/work-history"
                  className={
                    location.pathname === '/work-history' ? 'active' : ''
                  }
                  aria-current={
                    location.pathname === '/work-history' ? 'page' : undefined
                  }
                >
                  {t('common.workHistory')}
                </Link>
              </li>
            </ul>
          </motion.div>
          <LanguageSwitcher />
        </nav>
      </header>

      <main id="main-content" role="main">
        {children}
      </main>

      <footer role="contentinfo">
        <p>&copy; {new Date().getFullYear()} React Vite Starter Kit</p>
      </footer>
    </div>
  );
}
