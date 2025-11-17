import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/**
 * Home Page Component
 *
 * Demonstrates:
 * - Internationalization with i18next
 * - Framer Motion animations
 * - Semantic HTML structure
 * - Accessibility best practices
 */
export function Home() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="page-container"
    >
      <h1>{t('home.title')}</h1>
      <p>{t('home.description')}</p>

      <motion.div
        initial={{ scale: 0.9 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring' }}
        className="feature-grid"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="feature-card"
        >
          <h2>i18n</h2>
          <p>Full internationalization support with i18next</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="feature-card"
        >
          <h2>a11y</h2>
          <p>Accessibility-first with ARIA labels and semantic HTML</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="feature-card"
        >
          <h2>Animations</h2>
          <p>Smooth animations with Framer Motion</p>
        </motion.div>

        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="feature-card"
        >
          <h2>Testing</h2>
          <p>Unit, integration, and E2E tests configured</p>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
