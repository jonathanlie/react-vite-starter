import { getProficiencyColor, PROFICIENCY_COLORS } from '@/config/colors';

interface ProficiencyScoreProps {
  /** Proficiency score from 1-10 */
  score: number;
  /** Optional className for styling */
  className?: string;
  /** Whether to show text label (e.g., "8/10" or "Expert") */
  showLabel?: boolean;
}

function getSegmentsForScore(score: number): number {
  if (score >= 1 && score <= 2) return 1; // Conceptual
  if (score >= 3 && score <= 5) return 2; // Operational
  if (score >= 6 && score <= 7) return 3; // Proficient
  if (score >= 8 && score <= 10) return 4; // Architectural
  return 0; // Invalid score
}

function getColorForScore(score: number): string {
  return getProficiencyColor(score);
}

/**
 * Get proficiency label text
 *
 * @param score - Proficiency score (1-10)
 * @returns Label text
 */
function getProficiencyLabel(score: number): string {
  if (score >= 8 && score <= 10) return 'Architectural';
  if (score >= 6 && score <= 7) return 'Proficient';
  if (score >= 3 && score <= 5) return 'Operational';
  return 'Conceptual';
}

/**
 * Proficiency Score Component
 *
 * Displays a segmented tiered bar with 4 distinct blocks.
 * Shows proficiency level based on score:
 * - 1-2: Conceptual (1 block)
 * - 3-5: Operational (2 blocks)
 * - 6-7: Proficient (3 blocks)
 * - 8-10: Architectural (4 blocks)
 */
export function ProficiencyScore({
  score,
  className = '',
  showLabel = false,
}: ProficiencyScoreProps) {
  if (!score || score < 1 || score > 10) {
    return null;
  }

  const segmentsToLight = getSegmentsForScore(score);
  const segmentColor = getColorForScore(score);
  const label = getProficiencyLabel(score);

  return (
    <div
      className={`flex items-center gap-2 ${className}`}
      aria-label={`Proficiency score: ${score}`}
    >
      <div className="flex gap-1">
        {[1, 2, 3, 4].map((segment) => (
          <div
            key={segment}
            className={`w-5 h-1.5 rounded transition-colors ${
              !(segment <= segmentsToLight)
                ? 'bg-gray-300 dark:bg-gray-600'
                : ''
            }`}
            style={{
              backgroundColor:
                segment <= segmentsToLight ? segmentColor : undefined,
            }}
            aria-label={
              segment <= segmentsToLight
                ? `Segment ${segment} active`
                : `Segment ${segment} inactive`
            }
          />
        ))}
      </div>
      {showLabel && (
        <span className="text-xs font-mono text-gray-400">
          {score}/10 • {label}
        </span>
      )}
    </div>
  );
}
