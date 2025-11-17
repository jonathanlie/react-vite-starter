import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { WorkHistoryTimeline } from '@/components/workHistory/WorkHistoryTimeline';
import { getAllWorkHistory } from '@/data/workHistoryEntries';

/**
 * Work History Page
 *
 * Displays detailed information about previous work experiences and companies.
 */
export function WorkHistory() {
  const { t } = useTranslation();
  const entries = getAllWorkHistory();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-3 md:px-4 lg:px-6 py-8 lg:py-12"
    >
      <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-8 lg:mb-12">
        {t('workHistory.title', 'Work History')}
      </h1>

      <section className="mb-8 lg:mb-12">
        <p className="text-base text-gray-600 dark:text-gray-400 mb-8 lg:mb-12">
          {t(
            'workHistory.description',
            'A detailed overview of my professional experience and contributions at previous companies.'
          )}
        </p>

        <WorkHistoryTimeline entries={entries} />
      </section>
    </motion.div>
  );
}
