import { useState, useMemo } from 'react';
import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import Fuse from 'fuse.js';
import { KnowledgeGraph } from '@/components/knowledge/KnowledgeGraph';
import { KnowledgeList } from '@/components/knowledge/KnowledgeList';
import { KnowledgeModal } from '@/components/knowledge/KnowledgeModal';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { SearchInput } from '@/components/common/SearchInput';
import { PaginationControls } from '@/components/common/PaginationControls';
import { knowledges } from '@/data/knowledges';

type ViewMode = 'cards' | 'graph';

/**
 * Knowledge Web Page
 *
 * Displays knowledge items in both card grid and graph visualization formats.
 * Supports switching between views and opening detailed markdown content in modals.
 */
const ITEMS_PER_PAGE = 12;

export function KnowledgeWeb() {
  const { t } = useTranslation();
  const [viewMode, setViewMode] = useState<ViewMode>('cards');
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedNodeId, setSelectedNodeId] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Reset to page 1 when search term changes
  const handleSearchChange = (debouncedValue: string) => {
    const searchChanged = searchTerm !== debouncedValue;
    setSearchTerm(debouncedValue);
    if (searchChanged && currentPage !== 1) {
      setCurrentPage(1);
    }
  };

  // Fuzzy search configuration
  const fuse = useMemo(
    () =>
      new Fuse(knowledges, {
        keys: ['title', 'content', 'category', 'tags'],
        threshold: 0.3,
        includeScore: true,
      }),
    []
  );

  // Filter knowledges based on search term
  const filteredKnowledges = useMemo(() => {
    if (!searchTerm.trim()) {
      return knowledges;
    }

    const results = fuse.search(searchTerm);
    return results.map((result) => result.item);
  }, [searchTerm, fuse]);

  // Calculate pagination
  const totalPages = Math.ceil(filteredKnowledges.length / ITEMS_PER_PAGE);
  const paginatedKnowledges = useMemo(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredKnowledges.slice(startIndex, endIndex);
  }, [filteredKnowledges, currentPage]);

  const handleKnowledgeClick = (knowledgeId: string) => {
    setSelectedNodeId(knowledgeId);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    // Keep selectedNodeId until modal animation completes
    // It will be reset when modal closes
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.3 }}
      className="max-w-7xl mx-auto px-3 md:px-4 lg:px-6 py-8 lg:py-12"
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
              <SearchInput
                onSearchChange={handleSearchChange}
                placeholder="Search knowledge..."
                className="w-full max-w-md"
              />
            </div>
            <KnowledgeList
              nodes={paginatedKnowledges}
              onNodeClick={handleKnowledgeClick}
            />
            <PaginationControls
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={setCurrentPage}
            />
          </>
        )}

        {viewMode === 'graph' && (
          <KnowledgeGraph onNodeClick={handleKnowledgeClick} />
        )}
      </section>

      <KnowledgeModal
        nodeId={selectedNodeId}
        isOpen={isModalOpen}
        onClose={handleModalClose}
      />
    </motion.div>
  );
}
