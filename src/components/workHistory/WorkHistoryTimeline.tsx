import { motion } from 'framer-motion';
import { WorkHistoryEntry } from '@/types/workHistory';
import { WorkHistoryEntry as WorkHistoryEntryComponent } from './WorkHistoryEntry';
import { ACTION_COLORS } from '@/config/colors';

interface WorkHistoryTimelineProps {
  entries: WorkHistoryEntry[];
}

interface TimelineEntryProps {
  entry: WorkHistoryEntry;
  index: number;
}

/**
 * Individual Timeline Entry Component
 *
 * Renders marker, line segment, and content for a single work history entry.
 */
function TimelineEntry({ entry, index }: TimelineEntryProps) {
  return (
    <div className="flex items-start relative">
      {/* Left: Marker and Line Segment */}
      <div className="w-12 md:w-16 shrink-0 relative px-4 md:px-6">
        {/* Marker */}
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 + 0.2 }}
          className="relative z-10 mb-2 flex justify-center items-center"
        >
          <div
            className="w-3 h-3 aspect-square rounded-full border-2 border-white dark:border-gray-900 shadow-md"
            style={{
              backgroundColor: ACTION_COLORS.primary,
            }}
          />
        </motion.div>
      </div>

      {/* Line segment container using ::before pseudo-element - positioned relative to entry row */}
      <motion.div
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{
          duration: 0.8,
          ease: 'easeOut',
          delay: index * 0.1 + 0.3,
        }}
        style={{ transformOrigin: 'top' }}
        className="absolute left-6 md:left-8 top-6 bottom-0 w-0.5 -translate-x-1/2 before:content-[''] before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-gray-300 before:dark:bg-gray-700"
      />

      {/* Right: Content */}
      <div className="flex-1">
        <WorkHistoryEntryComponent entry={entry} index={index} />
      </div>
    </div>
  );
}

/**
 * Work History Timeline Component
 *
 * Displays work history entries in a vertical timeline layout with:
 * - Each entry has its own marker and line segment (left) and content (right)
 * - Structure allows for future collapse/expand functionality
 */
export function WorkHistoryTimeline({ entries }: WorkHistoryTimelineProps) {
  return (
    <div className="pb-12 space-y-4">
      {entries.map((entry, index) => (
        <TimelineEntry key={entry.id} entry={entry} index={index} />
      ))}
    </div>
  );
}
