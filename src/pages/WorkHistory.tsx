import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

/**
 * Work History Page
 *
 * Displays detailed information about previous work experiences and companies.
 */
export function WorkHistory() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">
        {t('workHistory.title', 'Work History')}
      </h1>

      <section className="mb-8 lg:mb-12">
        <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
          {t(
            'workHistory.description',
            'A detailed overview of my professional experience and contributions at previous companies.'
          )}
        </p>

        {/* TODO: Implement work history timeline/list */}
      </section>
    </motion.div>
  );
}
