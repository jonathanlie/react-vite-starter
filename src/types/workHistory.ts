/**
 * Work History Types
 *
 * Defines the schema for work history entries displayed in the timeline.
 * Each entry represents a single role at a company.
 */

/**
 * Work model classification
 */
export type WorkModel = 'Remote' | 'Hybrid' | 'On-site';

/**
 * Work History Entry Schema
 *
 * Represents a single role/position at a company with:
 * - Company information (name, logo, location, work model)
 * - Role details (title, dates, duration)
 * - Achievements and responsibilities
 */
export interface WorkHistoryEntry {
  /** Unique identifier for the entry (kebab-case recommended) */
  id: string;

  /** Company name */
  company: string;

  /** Optional company logo URL or path */
  companyLogo?: string;

  /** Job location (city, country) */
  location: string;

  /** Work model (Remote, Hybrid, On-site) */
  workModel: WorkModel;

  /** Job title/role */
  role: string;

  /** Start date in "MMM YYYY" format (e.g., "Oct 2017") */
  startDate: string;

  /** End date in "MMM YYYY" format or "Present" for current role */
  endDate: string | 'Present';

  /** Duration string (e.g., "2 yrs 5 mos") */
  duration: string;

  /** Markdown content describing achievements and responsibilities */
  content: string;
}
