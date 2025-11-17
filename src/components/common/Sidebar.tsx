import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AnimatePresence, motion } from 'framer-motion';
import { useAppStore } from '@/store/useAppStore';
import { NavLink } from './NavLink';

/**
 * Sidebar component for mobile navigation.
 *
 * Displays a full-width drawer that slides in from the left on mobile devices.
 * Uses framer-motion for animations instead of Sheet to allow header interactions.
 * Automatically closes when navigation occurs or when the user clicks outside.
 * Only visible on md and below breakpoints.
 */
export function Sidebar() {
  const { t } = useTranslation();
  const location = useLocation();
  const { sidebarOpen, setSidebarOpen } = useAppStore();

  // Auto-close sidebar when route changes
  useEffect(() => {
    setSidebarOpen(false);
  }, [location.pathname, setSidebarOpen]);

  const handleLinkClick = () => {
    setSidebarOpen(false);
  };

  return (
    <AnimatePresence>
      {sidebarOpen && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.15, ease: 'easeOut' }}
          className="fixed inset-y-0 left-0 z-50 w-full max-w-full bg-black/40 backdrop-blur lg:hidden"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
          onClick={(e) => {
            // Close sidebar if clicking on the backdrop (not on nav content)
            if (e.target === e.currentTarget) {
              setSidebarOpen(false);
            }
          }}
          style={{ pointerEvents: 'auto' }}
        >
          {/* Empty header spacer to match Layout header height - no gap */}
          <div className="h-[calc(0.75rem+2rem+0.75rem+1px)] border-b border-border"></div>
          <nav
            role="navigation"
            aria-label="Mobile navigation"
            className="flex flex-col gap-4 px-4 py-4"
          >
            <NavLink
              to="/"
              onClick={handleLinkClick}
              className="text-2xl font-light"
              disableActive
            >
              {t('common.contact')}
            </NavLink>
            <NavLink
              to="/knowledge-web"
              onClick={handleLinkClick}
              className="text-2xl font-light"
              disableActive
            >
              {t('common.knowledgeWeb')}
            </NavLink>
            <NavLink
              to="/work-history"
              onClick={handleLinkClick}
              className="text-2xl font-light"
              disableActive
            >
              {t('common.workHistory')}
            </NavLink>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
