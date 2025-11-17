import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';
import { WorkHistoryEntry as WorkHistoryEntryType } from '@/types/workHistory';

interface WorkHistoryEntryProps {
  entry: WorkHistoryEntryType;
  index: number;
}

/**
 * Work History Entry Component
 *
 * Displays a single role/position with company information,
 * dates, duration, and markdown content.
 */
export function WorkHistoryEntry({ entry, index }: WorkHistoryEntryProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <div className="px-4 pb-2 md:px-6 md:pb-4">
        {/* Company and Role Header */}
        <div className="mb-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="text-xl md:text-2xl font-semibold text-gray-900 dark:text-gray-100 mb-1 leading-[1em]">
                {entry.role}
              </h3>
              <p className="text-lg md:text-xl font-medium text-gray-700 dark:text-gray-300">
                {entry.company}
              </p>
            </div>
          </div>

          {/* Metadata Row */}
          <div className="flex flex-wrap items-center gap-4 text-sm md:text-base text-gray-600 dark:text-gray-400 mt-3">
            <span>
              {entry.startDate} - {entry.endDate}
            </span>
            <span className="hidden sm:inline">•</span>
            <span>{entry.duration}</span>
            <span className="hidden sm:inline">•</span>
            <span>{entry.location}</span>
            <span className="hidden sm:inline">•</span>
            <span>{entry.workModel}</span>
          </div>
        </div>

        {/* Markdown Content */}
        <ReactMarkdown
          components={{
            ul: ({ children }) => (
              <ul className="space-y-3 list-none">{children}</ul>
            ),
            li: ({ children }) => (
              <li className="flex items-start text-base text-gray-700 dark:text-gray-300 leading-relaxed">
                <span className="mr-3 mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-gray-400 dark:bg-gray-500" />
                <span>{children}</span>
              </li>
            ),
            p: ({ children }) => (
              <p className="text-base text-gray-700 dark:text-gray-300 leading-relaxed mb-3 last:mb-0">
                {children}
              </p>
            ),
          }}
        >
          {entry.content}
        </ReactMarkdown>
      </div>
    </motion.div>
  );
}
