import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/**
 * 404 Not Found Page Component
 *
 * Handles all unmatched routes with proper accessibility.
 */
export function NotFound() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="page-container"
    >
      <h1>{t('notFound.title')}</h1>
      <p>{t('notFound.description')}</p>
      <Link to="/" className="back-link">
        {t('notFound.backHome')}
      </Link>
    </motion.div>
  );
}
