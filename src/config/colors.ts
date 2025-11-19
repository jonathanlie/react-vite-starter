/**
 * Application Color Constants
 *
 * Centralized color definitions for consistent theming across the application.
 * All colors are defined as hex values for maximum compatibility.
 */

/**
 * Proficiency Scale Colors
 * Used for proficiency indicators, graph nodes, and skill level visualization
 * These colors are distinct and vibrant to clearly differentiate proficiency levels
 */
export const PROFICIENCY_COLORS = {
  conceptual: '#4ADE80', // Neon Green (1-2)
  operational: '#3B82F6', // Electric Blue (3-5)
  proficient: '#A855F7', // Vivid Purple (6-7)
  architectural: '#F97316', // Sunset Orange (8-10)
} as const;

/**
 * Action/Interactive Colors
 * Used for interactive elements like buttons, markers, and expand controls
 * This blue is darker and more muted than the proficiency operational blue (#3B82F6)
 * to avoid visual conflicts and provide a more subdued appearance
 */
export const ACTION_COLORS = {
  primary: '#1e40af', // blue-800 - Darker, more muted main action color
  hover: '#1e3a8a', // blue-900 - Darker hover state
  dark: '#3b82f6', // blue-500 - Dark mode variant
} as const;

/**
 * Contact Page Colors
 * Used for contact cards and action buttons
 */
export const CONTACT_COLORS = {
  email: {
    accent: ACTION_COLORS.primary, // Reuse action color for consistency
    hover: ACTION_COLORS.hover,
  },
  resume: {
    accent: '#9333ea', // purple-600
  },
} as const;

/**
 * Helper function to get proficiency color by score
 *
 * @param score - Proficiency score (1-10)
 * @returns Hex color code for the proficiency level
 */
export function getProficiencyColor(score: number): string {
  if (score >= 8 && score <= 10) return PROFICIENCY_COLORS.architectural;
  if (score >= 6 && score <= 7) return PROFICIENCY_COLORS.proficient;
  if (score >= 3 && score <= 5) return PROFICIENCY_COLORS.operational;
  if (score >= 1 && score <= 2) return PROFICIENCY_COLORS.conceptual;
  return '#808080'; // Default fallback
}
