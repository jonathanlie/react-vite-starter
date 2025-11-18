import { useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Knowledge } from '@/types/knowledge';
import { KnowledgeListItem } from './KnowledgeListItem';
import { BREAKPOINTS } from '@/config/breakpoints';

interface KnowledgeListProps {
  nodes: Knowledge[];
  onNodeClick?: (nodeId: string) => void;
}

interface GridDimensions {
  containerWidth: number;
  columns: number;
  gap: number;
  itemWidth: number;
}

/**
 * Calculates grid dimensions based on container width and breakpoints
 * Uses Tailwind breakpoint constants for consistency
 */
const CONTAINER_PADDING = 4; // 1 unit = 4px (p-1) on each side = 8px total

function calculateGridDimensions(containerWidth: number): GridDimensions {
  let columns = 1;
  let gap = 24; // gap-6 = 24px (mobile)

  if (containerWidth >= BREAKPOINTS.lg) {
    // lg: 3 columns, gap-8 = 32px
    columns = 3;
    gap = 32;
  } else if (containerWidth >= BREAKPOINTS.md) {
    // md: 2 columns, gap-8 = 32px
    columns = 2;
    gap = 32;
  } else {
    // sm: 1 column, gap-6 = 24px
    columns = 1;
    gap = 24;
  }

  // Subtract container padding (4px on each side = 8px total) from available width
  const availableWidth = containerWidth - CONTAINER_PADDING * 2;
  const itemWidth = (availableWidth - gap * (columns - 1)) / columns;

  return {
    containerWidth,
    columns,
    gap,
    itemWidth,
  };
}

/**
 * Fixed item height matching the card height
 */
const FIXED_ITEM_HEIGHT = 300;

/**
 * KnowledgeList Component
 *
 * Renders knowledge items in a virtualized grid layout.
 * Uses ResizeObserver to track container size and only renders visible items.
 */
export function KnowledgeList({ nodes, onNodeClick }: KnowledgeListProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [gridDimensions, setGridDimensions] = useState<GridDimensions | null>(
    null
  );
  const [scrollTop, setScrollTop] = useState(0);
  const [containerHeight, setContainerHeight] = useState(0);

  // Calculate grid dimensions when container size changes
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Use ResizeObserver to track container size changes
    const resizeObserver = new ResizeObserver((entries) => {
      for (const entry of entries) {
        const { width, height } = entry.contentRect;
        const dimensions = calculateGridDimensions(width);
        setGridDimensions(dimensions);
        setContainerHeight(height);
      }
    });

    resizeObserver.observe(container);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  // Handle scroll events
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleScroll = () => {
      setScrollTop(container.scrollTop);
    };

    container.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate visible range
  const visibleRange = useMemo(() => {
    if (!gridDimensions) {
      return { start: 0, end: 0 };
    }

    const { columns, gap } = gridDimensions;
    const rowHeight = FIXED_ITEM_HEIGHT + gap;
    const totalRows = Math.ceil(nodes.length / columns);

    // Calculate which rows are visible
    const startRow = Math.floor(scrollTop / rowHeight);
    const endRow = Math.ceil((scrollTop + containerHeight) / rowHeight);

    // Add buffer rows for smoother scrolling
    const bufferRows = 2;
    const bufferedStartRow = Math.max(0, startRow - bufferRows);
    const bufferedEndRow = Math.min(totalRows - 1, endRow + bufferRows);

    // Convert rows to item indices
    const start = bufferedStartRow * columns;
    const end = Math.min(nodes.length, (bufferedEndRow + 1) * columns);

    return { start, end };
  }, [gridDimensions, scrollTop, containerHeight, nodes.length]);

  // Calculate total height for scroll container
  const totalHeight = useMemo(() => {
    if (!gridDimensions) return 0;

    const { columns } = gridDimensions;
    const rowHeight = FIXED_ITEM_HEIGHT + gridDimensions.gap;
    const totalRows = Math.ceil(nodes.length / columns);
    return totalRows * rowHeight - gridDimensions.gap;
  }, [gridDimensions, nodes.length]);

  // Get visible items
  const visibleItems = useMemo(() => {
    return nodes.slice(visibleRange.start, visibleRange.end);
  }, [nodes, visibleRange.start, visibleRange.end]);

  // Calculate item positions
  const getItemPosition = useCallback(
    (index: number) => {
      if (!gridDimensions) return { top: 0, left: 0 };

      const { columns, itemWidth, gap } = gridDimensions;
      const row = Math.floor(index / columns);
      const col = index % columns;
      const rowHeight = FIXED_ITEM_HEIGHT + gap;

      return {
        top: row * rowHeight,
        left: col * (itemWidth + gap),
      };
    },
    [gridDimensions]
  );

  if (!gridDimensions) {
    return (
      <div
        ref={containerRef}
        className="scroll-container relative overflow-auto w-full grid grid-cols-1 gap-6 md:gap-8 md:grid-cols-2 lg:grid-cols-3 p-1"
        style={{ height: '100%' }}
      >
        {nodes.map((node) => (
          <KnowledgeListItem key={node.id} node={node} onClick={onNodeClick} />
        ))}
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="scroll-container relative overflow-auto w-full p-1"
      style={{ height: '100%' }}
    >
      <div
        style={{
          height: totalHeight,
          position: 'relative',
        }}
      >
        {visibleItems.map((node, index) => {
          const absoluteIndex = visibleRange.start + index;
          const position = getItemPosition(absoluteIndex);

          return (
            <div
              key={node.id}
              style={{
                position: 'absolute',
                top: `${position.top + CONTAINER_PADDING}px`,
                left: `${position.left + CONTAINER_PADDING}px`,
                width: `${gridDimensions.itemWidth}px`,
              }}
            >
              <KnowledgeListItem node={node} onClick={onNodeClick} />
            </div>
          );
        })}
      </div>
    </div>
  );
}
