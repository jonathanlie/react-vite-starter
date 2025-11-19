import { memo, useEffect, useRef, useState, useMemo, useCallback } from 'react';
import { Handle, Position, NodeProps } from 'reactflow';
import {
  getProficiencyColor,
  PROFICIENCY_COLORS,
  ACTION_COLORS,
} from '@/config/colors';

interface KnowledgeGraphNodeData {
  label: string;
  category: string;
  content: string;
  color: string;
  onClick: () => void;
  isExpanded?: boolean;
  onExpand?: () => void;
  relatedCount?: number;
  isNew?: boolean; // Flag for animation
  hasModalContent?: boolean; // Whether this node has modal content (clickable)
  proficiencyScore?: number; // Proficiency score (1-10) for visual styling
}

function getProficiencyColorForNode(score?: number): string {
  if (!score) return '#6366f1'; // Default fallback
  return getProficiencyColor(score);
}

function getNodeSize(score?: number): number {
  if (!score) return 60; // Default medium size
  if (score >= 8 && score <= 10) return 90; // Architectural - Large
  if (score >= 6 && score <= 7) return 65; // Proficient - Medium-Large
  if (score >= 3 && score <= 5) return 50; // Operational - Medium
  return 35; // Conceptual - Small
}

/**
 * Get glow effect based on proficiency level
 */
function getGlowEffect(
  score: number | undefined,
  isHovered: boolean,
  isClickable: boolean
): string {
  if (!score || !isClickable) return 'none';
  const color = getProficiencyColorForNode(score);
  const baseOpacity =
    score >= 8 ? 0.8 : score >= 6 ? 0.6 : score >= 3 ? 0.4 : 0;
  const hoverOpacity = isHovered ? Math.min(baseOpacity + 0.3, 1) : baseOpacity;
  const blur = isHovered ? 20 : score >= 8 ? 15 : score >= 6 ? 12 : 8;
  // Convert hex color to rgba for opacity control
  const r = parseInt(color.slice(1, 3), 16);
  const g = parseInt(color.slice(3, 5), 16);
  const b = parseInt(color.slice(5, 7), 16);
  return `0 0 ${blur}px rgba(${r}, ${g}, ${b}, ${hoverOpacity})`;
}

/**
 * Custom Node Component for Knowledge Graph
 *
 * Displays a proficiency-driven knowledge node with:
 * - Color indicating proficiency level (Conceptual -> Architectural)
 * - Size indicating weight (Anchor vs Satellite)
 * - Glow/Opacity indicating content availability (Clickable vs Stub)
 */
export const KnowledgeGraphNode = memo(
  ({ data }: NodeProps<KnowledgeGraphNodeData>) => {
    const innerRef = useRef<HTMLDivElement>(null);
    const hasAnimatedRef = useRef(false);
    const nodeIdRef = useRef<string | undefined>(undefined);
    const [isHovered, setIsHovered] = useState(false);

    // Memoize computed values
    const score = data.proficiencyScore;
    const isClickable = data.hasModalContent ?? false;
    const nodeSize = useMemo(() => getNodeSize(score), [score]);
    const proficiencyColor = useMemo(
      () => getProficiencyColorForNode(score),
      [score]
    );
    const isArchitectural = useMemo(
      () => score !== undefined && score >= 8 && score <= 10,
      [score]
    );
    const isProficient = useMemo(
      () => score !== undefined && score >= 6 && score <= 7,
      [score]
    );
    const isOperational = useMemo(
      () => score !== undefined && score >= 3 && score <= 5,
      [score]
    );
    const isConceptual = useMemo(
      () => score !== undefined && score >= 1 && score <= 2,
      [score]
    );

    // Animate node appearance when it's marked as new
    useEffect(() => {
      // Reset if this is a different node (node was replaced)
      if (nodeIdRef.current !== data.label) {
        hasAnimatedRef.current = false;
        nodeIdRef.current = data.label;
      }

      if (data.isNew && !hasAnimatedRef.current && innerRef.current) {
        // Mark as animated immediately to prevent re-triggering
        hasAnimatedRef.current = true;

        // Start from invisible/small
        innerRef.current.style.opacity = '0';
        innerRef.current.style.transform = 'scale(0)';

        // Trigger animation after React has rendered
        // Use multiple RAF to ensure DOM is ready
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            requestAnimationFrame(() => {
              if (innerRef.current) {
                innerRef.current.style.opacity = '1';
                innerRef.current.style.transform = 'scale(1)';
              }
            });
          });
        });
      } else if (!data.isNew && hasAnimatedRef.current) {
        if (innerRef.current) {
          innerRef.current.style.opacity = '1';
          innerRef.current.style.transform = 'scale(1)';
        }
      }
    }, [data.isNew, data.label]);

    // Memoize event handlers
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          data.onClick();
        }
      },
      [data]
    );

    const handleMouseEnter = useCallback(() => {
      setIsHovered(true);
    }, []);

    const handleMouseLeave = useCallback(() => {
      setIsHovered(false);
    }, []);

    const handleStubMouseEnter = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.filter = 'brightness(1.2)';
      },
      []
    );

    const handleStubMouseLeave = useCallback(
      (e: React.MouseEvent<HTMLDivElement>) => {
        e.currentTarget.style.filter = 'none';
      },
      []
    );

    const handleExpandClick = useCallback(
      (e: React.MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation();
        data.onExpand?.();
      },
      [data]
    );

    // Memoize style objects
    const outerStyle = useMemo(
      () => ({
        width: `${nodeSize}px`,
        height: `${nodeSize}px`,
      }),
      [nodeSize]
    );

    const glowEffect = useMemo(
      () => getGlowEffect(score, isHovered, isClickable),
      [score, isHovered, isClickable]
    );

    const transitionString = useMemo(() => {
      const baseTransition =
        'opacity 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1), background-color 0.3s ease-in-out, filter 0.3s ease-in-out';
      return isArchitectural && isClickable
        ? baseTransition
        : `${baseTransition}, box-shadow 0.3s ease-in-out`;
    }, [isArchitectural, isClickable]);

    const innerStyle = useMemo(
      () => ({
        width: '100%',
        height: '100%',
        backgroundColor: isClickable ? '#1a1a1a' : 'rgba(255, 255, 255, 0.2)',
        border: isClickable
          ? `2px solid ${proficiencyColor}`
          : `2px dashed ${proficiencyColor}`,
        boxShadow: glowEffect,
        transition: transitionString,
        animation:
          isArchitectural && isClickable && !isHovered
            ? 'pulse-glow 2s ease-in-out infinite'
            : 'none',
      }),
      [
        isClickable,
        proficiencyColor,
        glowEffect,
        transitionString,
        isArchitectural,
        isHovered,
      ]
    );

    // Memoize className strings
    const innerClassName = useMemo(
      () =>
        `relative flex items-center justify-center rounded-full transition-all duration-300 ${
          isClickable ? 'cursor-pointer hover:scale-110' : 'cursor-default'
        } ${!isClickable ? 'backdrop-blur-md' : ''}`,
      [isClickable]
    );

    const textClassName = useMemo(() => {
      if (isArchitectural) return 'text-sm font-bold uppercase';
      if (isProficient) return 'text-xs font-bold';
      if (isOperational) return 'text-xs font-normal';
      return 'text-[10px] font-normal';
    }, [isArchitectural, isProficient, isOperational]);

    const textStyle = useMemo(
      () => ({
        color: isClickable ? '#FFFFFF' : 'rgba(255, 255, 255, 0.7)',
        opacity: !isClickable && isConceptual ? 0.8 : 1,
      }),
      [isClickable, isConceptual]
    );

    return (
      <div
        className="relative"
        style={outerStyle}
        onClick={isClickable ? data.onClick : undefined}
        role={isClickable ? 'button' : undefined}
        tabIndex={isClickable ? 0 : undefined}
        onKeyDown={isClickable ? handleKeyDown : undefined}
        title={!isClickable ? 'Concept' : undefined}
      >
        {/* Inner wrapper for animation - React Flow controls outer div positioning */}
        <div
          ref={innerRef}
          className={innerClassName}
          style={innerStyle}
          onMouseEnter={isClickable ? handleMouseEnter : handleStubMouseEnter}
          onMouseLeave={isClickable ? handleMouseLeave : handleStubMouseLeave}
        >
          {/* Hidden handles for read-only graph */}
          <Handle type="target" position={Position.Top} className="opacity-0" />

          <div
            className="flex items-center justify-center px-2 py-1 text-center"
            style={{ width: '100%', height: '100%' }}
          >
            <div
              className={`leading-tight px-1 ${textClassName}`}
              style={textStyle}
            >
              {data.label}
            </div>
          </div>

          {data.relatedCount !== undefined && data.relatedCount > 0 && (
            <button
              type="button"
              onClick={handleExpandClick}
              className="absolute -bottom-2 -right-2 w-6 h-6 rounded-full text-white text-xs font-bold shadow-md transition-colors flex items-center justify-center"
              style={{
                backgroundColor: ACTION_COLORS.primary,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = ACTION_COLORS.hover;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = ACTION_COLORS.primary;
              }}
              aria-label={data.isExpanded ? 'Collapse' : 'Expand'}
              title={`${data.isExpanded ? 'Collapse' : 'Expand'} related nodes`}
            >
              {data.isExpanded ? '−' : '+'}
            </button>
          )}

          {/* Hidden handles for read-only graph */}
          <Handle
            type="source"
            position={Position.Bottom}
            className="opacity-0"
          />
        </div>
      </div>
    );
  }
);

KnowledgeGraphNode.displayName = 'KnowledgeGraphNode';
