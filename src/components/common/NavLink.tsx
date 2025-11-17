import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { navLinkVariants } from '@/components/ui/nav-link-variants';

interface NavLinkProps {
  to: string;
  children: React.ReactNode;
  currentPath?: string;
  onClick?: () => void;
  className?: string;
  disableActive?: boolean;
}

/**
 * Navigation link component styled to match shadcn/ui docs design.
 * Can be used in both desktop navigation and sidebar.
 */
export function NavLink({
  to,
  children,
  currentPath,
  onClick,
  className,
  disableActive = false,
}: NavLinkProps) {
  const location = useLocation();
  const path = currentPath ?? location.pathname;
  const isActive = disableActive ? false : path === to;

  return (
    <Link
      to={to}
      className={cn(
        navLinkVariants({ variant: isActive ? 'active' : 'default' }),
        className
      )}
      aria-current={isActive ? 'page' : undefined}
      onClick={onClick}
    >
      {children}
    </Link>
  );
}
