import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';

type ViewMode = 'cards' | 'graph';

/**
 * Knowledge Web Page
 *
 * Displays knowledge nodes in both card grid and graph visualization formats.
 * Supports switching between views and opening detailed markdown content in modals.
 */
export function KnowledgeWeb() {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<ViewMode>('cards');

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-8 lg:py-12"
    >
      <div className="mb-8 lg:mb-12">
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-6">
          {t('knowledgeWeb.title', 'Knowledge Web')}
        </h1>

        <p className="text-base text-gray-600 dark:text-gray-400 mb-6">
          {t(
            'knowledgeWeb.description',
            'Explore my technical knowledge and skills. Click on any node to view detailed information.'
          )}
        </p>

        <div className="flex gap-2 mb-6">
          <button
            type="button"
            onClick={() => setViewMode('cards')}
            className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
              viewMode === 'cards'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            aria-pressed={viewMode === 'cards'}
          >
            {t('knowledgeWeb.viewCards', 'Cards')}
          </button>
          <button
            type="button"
            onClick={() => setViewMode('graph')}
            className={`px-4 py-2 rounded-md font-medium transition-colors duration-200 ${
              viewMode === 'graph'
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            aria-pressed={viewMode === 'graph'}
          >
            {t('knowledgeWeb.viewGraph', 'Graph')}
          </button>
        </div>
      </div>

      <section className="mb-8 lg:mb-12">
        {viewMode === 'cards' && (
          <div>
            {/* TODO: Implement card grid view */}
            <p className="text-base text-gray-600 dark:text-gray-400">
              Cards view coming soon...
            </p>
          </div>
        )}

        {viewMode === 'graph' && (
          <div>
            {/* TODO: Implement React Flow graph view */}
            <p className="text-base text-gray-600 dark:text-gray-400">
              Graph view coming soon...
            </p>
          </div>
        )}

        {/* TODO: Implement modal for markdown content */}
      </section>
    </motion.div>
  );
}
