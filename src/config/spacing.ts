/**
 * Spacing Constants
 *
 * Centralized spacing definitions for consistent layout across the application.
 * Based on the header's left padding (p-3 = 12px) as the base unit.
 */

/**
 * Content Padding
 * Matches the header's left padding for consistent alignment
 * Header uses p-3 (12px), so content uses px-3 for horizontal alignment
 */
export const CONTENT_PADDING = {
  horizontal: 'px-7', // 12px - matches header padding
  responsive: 'px-3 md:px-4 lg:px-6', // Responsive variant if needed
} as const;
