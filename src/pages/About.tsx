import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/**
 * About Page Component
 *
 * Example page demonstrating routing and i18n usage.
 */
export function About() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="page-container"
    >
      <h1>{t('about.title')}</h1>
      <p>{t('about.description')}</p>
    </motion.div>
  );
}

