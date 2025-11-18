import { Knowledge } from '@/types/knowledge';

interface ProficiencyScoreProps {
  /** Proficiency score from 1-10 */
  score: number;
  /** Optional className for styling */
  className?: string;
}

/**
 * Get the number of segments to light up based on proficiency score
 *
 * @param score - Proficiency score (1-10)
 * @returns Number of segments to light up (1-4)
 */
function getSegmentsForScore(score: number): number {
  if (score >= 1 && score <= 2) return 1; // Conceptual
  if (score >= 3 && score <= 5) return 2; // Operational
  if (score >= 6 && score <= 7) return 3; // Proficient
  if (score >= 8 && score <= 10) return 4; // Architectural
  return 0; // Invalid score
}

/**
 * Get the color for the segments based on proficiency score
 *
 * @param score - Proficiency score (1-10)
 * @returns Tailwind color class for the segments
 */
function getColorForScore(score: number): string {
  if (score >= 1 && score <= 2) return 'bg-blue-500'; // Conceptual
  if (score >= 3 && score <= 5) return 'bg-green-500'; // Operational
  if (score >= 6 && score <= 7) return 'bg-yellow-500'; // Proficient
  if (score >= 8 && score <= 10) return 'bg-purple-500'; // Architectural
  return 'bg-gray-500'; // Invalid score
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
}: ProficiencyScoreProps) {
  if (!score || score < 1 || score > 10) {
    return null;
  }

  const segmentsToLight = getSegmentsForScore(score);
  const segmentColor = getColorForScore(score);

  return (
    <div
      className={`flex gap-1 ${className}`}
      aria-label={`Proficiency score: ${score}`}
    >
      {[1, 2, 3, 4].map((segment) => (
        <div
          key={segment}
          className={`w-8 h-2 rounded transition-colors ${
            segment <= segmentsToLight
              ? segmentColor
              : 'bg-gray-300 dark:bg-gray-600'
          }`}
          aria-label={
            segment <= segmentsToLight
              ? `Segment ${segment} active`
              : `Segment ${segment} inactive`
          }
        />
      ))}
    </div>
  );
}

/**
 * Helper function to get proficiency score from a Knowledge object
 *
 * @param knowledge - Knowledge object
 * @returns Proficiency score or undefined
 */
export function getProficiencyScore(knowledge: Knowledge): number | undefined {
  return knowledge.proficiencyScore;
}
