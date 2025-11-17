import { useState, useEffect, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Fuse from 'fuse.js';
import { KnowledgeGraph } from '@/components/knowledge/KnowledgeGraph';
import { KnowledgeList } from '@/components/knowledge/KnowledgeList';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Input } from '@/components/ui/input';
import { knowledgeNodes } from '@/data/knowledgeNodes';

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
  const [searchTerm, setSearchTerm] = useState('');
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');

  // Debounce search term (300ms delay)
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchTerm(searchTerm);
    }, 300);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  // Fuzzy search configuration
  const fuse = useMemo(
    () =>
      new Fuse(knowledgeNodes, {
        keys: ['title', 'content', 'category', 'tags'],
        threshold: 0.3,
        includeScore: true,
      }),
    []
  );

  // Filter nodes based on debounced search term
  const filteredNodes = useMemo(() => {
    if (!debouncedSearchTerm.trim()) {
      return knowledgeNodes;
    }

    const results = fuse.search(debouncedSearchTerm);
    return results.map((result) => result.item);
  }, [debouncedSearchTerm, fuse]);

  const handleNodeClick = (nodeId: string) => {
    // TODO: Open modal with markdown content for the selected node
    console.log('Node clicked:', nodeId);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-2 md:px-3 lg:px-4 py-8 lg:py-12"
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

        <ToggleGroup
          type="single"
          value={viewMode}
          onValueChange={(value) => {
            if (value) setViewMode(value as ViewMode);
          }}
          className="mb-6"
        >
          <ToggleGroupItem value="cards" aria-label="Cards view">
            {t('knowledgeWeb.viewCards', 'Cards')}
          </ToggleGroupItem>
          <ToggleGroupItem value="graph" aria-label="Graph view">
            {t('knowledgeWeb.viewGraph', 'Graph')}
          </ToggleGroupItem>
        </ToggleGroup>
      </div>

      <section className="mb-8 lg:mb-12">
        {viewMode === 'cards' && (
          <>
            <div className="mb-6">
              <Input
                type="text"
                placeholder="Search knowledge..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full max-w-md"
              />
            </div>
            <KnowledgeList
              nodes={filteredNodes}
              onNodeClick={handleNodeClick}
            />
          </>
        )}

        {viewMode === 'graph' && (
          <KnowledgeGraph onNodeClick={handleNodeClick} />
        )}

        {/* TODO: Implement modal for markdown content */}
      </section>
    </motion.div>
  );
}
