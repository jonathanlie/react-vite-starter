import { ReactNode } from 'react';
import { useTranslation } from 'react-i18next';
import { NavLink } from '@/components/common/NavLink';
import { MenuButton } from '@/components/common/MenuButton';
import { Sidebar } from '@/components/common/Sidebar';

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();

  return (
    <div className="app-layout">
      {/* Skip to main content for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header
        role="banner"
        className="relative z-60 border-b border-border bg-background p-3"
      >
        <nav
          aria-label="Main navigation"
          className="container flex h-8 items-center justify-start"
        >
          <div className="flex items-center gap-2 lg:hidden">
            <MenuButton />
            <span className="text-lg font-medium">Menu</span>
          </div>
          <div className="hidden lg:flex items-center gap-1">
            <NavLink to="/">{t('common.contact')}</NavLink>
            <NavLink to="/knowledge-web">{t('common.knowledgeWeb')}</NavLink>
            <NavLink to="/work-history">{t('common.workHistory')}</NavLink>
          </div>
        </nav>
      </header>

      <Sidebar />

      <main id="main-content" role="main">
        {children}
      </main>
    </div>
  );
}
