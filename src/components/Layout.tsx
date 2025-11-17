import { ReactNode } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { cn } from '@/lib/utils';
import { navLinkVariants } from '@/components/ui/nav-link-variants';

interface LayoutProps {
  children: ReactNode;
}

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  currentPath: string;
}

/**
 * Navigation link component styled to match shadcn/ui docs design.
 */
function NavLink({ to, children, currentPath }: NavLinkProps) {
  const isActive = currentPath === to;

  return (
    <Link
      to={to}
      className={cn(
        navLinkVariants({ variant: isActive ? 'active' : 'default' })
      )}
      aria-current={isActive ? 'page' : undefined}
    >
      {children}
    </Link>
  );
}

export function Layout({ children }: LayoutProps) {
  const { t } = useTranslation();
  const location = useLocation();

  return (
    <div className="app-layout">
      {/* Skip to main content for keyboard navigation */}
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <header role="banner" className="border-b border-border bg-background">
        <nav
          role="navigation"
          aria-label="Main navigation"
          className="container flex h-8 items-center justify-start px-4"
        >
          <nav className="hidden lg:flex items-center gap-1">
            <NavLink to="/" currentPath={location.pathname}>
              {t('common.contact')}
            </NavLink>
            <NavLink to="/knowledge-web" currentPath={location.pathname}>
              {t('common.knowledgeWeb')}
            </NavLink>
            <NavLink to="/work-history" currentPath={location.pathname}>
              {t('common.workHistory')}
            </NavLink>
          </nav>
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
