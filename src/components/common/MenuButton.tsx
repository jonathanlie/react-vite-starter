import { motion } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';
import { Button } from '@/components/ui/button';

/**
 * MenuButton component for toggling the mobile sidebar.
 *
 * Displays a 2-line hamburger icon that rotates into an X icon when the sidebar is open.
 * Based on shadcn/ui's implementation: lines start at different positions (hamburger),
 * then move to center and rotate to form an X.
 * Always hidden on large screens (lg and above).
 */
export function MenuButton() {
  const { sidebarOpen, toggleSidebar } = useAppStore();

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    toggleSidebar();
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={handleClick}
      className="lg:hidden"
      aria-label={sidebarOpen ? 'Close menu' : 'Open menu'}
      aria-expanded={sidebarOpen}
    >
      <div className="relative flex h-5 w-5 items-center justify-center">
        <div className="relative h-4 w-4">
          {/* Top line - starts at top, moves to center and rotates */}
          <motion.span
            className="absolute left-0 block h-0.5 w-4 bg-current"
            initial={false}
            animate={{
              top: sidebarOpen ? '0.4rem' : '0.125rem',
              rotate: sidebarOpen ? -45 : 0,
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
          {/* Bottom line - starts at bottom (0.75rem from top = 1rem - 0.125rem gap - 0.125rem line), moves to center and rotates */}
          <motion.span
            className="absolute left-0 block h-0.5 w-4 bg-current"
            initial={false}
            animate={{
              top: sidebarOpen ? '0.4rem' : '0.75rem',
              rotate: sidebarOpen ? 45 : 0,
            }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          />
        </div>
      </div>
    </Button>
  );
}
