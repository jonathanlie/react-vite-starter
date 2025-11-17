import { WorkHistoryEntry } from '@/types/workHistory';

/**
 * Work History Entries Data
 *
 * Centralized data structure for all work history entries.
 * Each entry represents a single role at a company.
 *
 * Entries are ordered chronologically (newest first).
 */

export const workHistoryEntries: WorkHistoryEntry[] = [
  {
    id: 'ascenda-backend-engineer',
    company: 'Ascenda',
    location: 'Singapore',
    workModel: 'Hybrid',
    role: 'Software Engineer - Backend',
    startDate: 'Jun 2021',
    endDate: 'Mar 2025',
    duration: '3 yrs 10 mos',
    content: `- Engineered critical, multi-tenant integrations in a microservices environment, providing a scalable framework for onboarding new partners without custom code.
- Architected a dynamic, JSON-schema-based backend validation system for partner upgrades, creating a scalable solution that eliminated the need for custom code per partner.
- Designed and documented new public-facing Partner APIs; owned on-call support, resolving production incidents and addressing cross-team technical queries.
- Eliminated 100% of errors for a large-scale monthly job processing ~200,000 redemptions by re-architecting it to be fully idempotent and fault-tolerant, saving significant manual engineering effort.`,
  },
  {
    id: 'ascenda-senior-frontend-engineer',
    company: 'Ascenda',
    location: 'Singapore',
    workModel: 'Hybrid',
    role: 'Senior Software Engineer - Frontend',
    startDate: 'Mar 2020',
    endDate: 'May 2021',
    duration: '1 yr 3 mos',
    content: `- Mentored and led the frontend team, aligning technical goals with company objectives and fostering professional growth through regular 1-on-1s.
- Drove key platform improvements by optimizing application performance, including reducing bundle size through code splitting.
- Continued to lead the "Rewards Dashboard" product, overseeing its expansion and ensuring stability for its growing ~1M user base.`,
  },
  {
    id: 'ascenda-frontend-engineer',
    company: 'Ascenda',
    location: 'Singapore',
    workModel: 'Hybrid',
    role: 'Software Engineer - Frontend',
    startDate: 'Oct 2017',
    endDate: 'Feb 2020',
    duration: '2 yrs 5 mos',
    content: `- Led greenfield development of an Angular-based 'Rewards Dashboard,' architecting a scalable multi-tenant frontend launched to 5+ whitelabel clients and ~1M users.
- Engineered a robust i18n and whitelabeling framework, automating translation syncs (PhraseApp) and supporting complex features like RTL layouts.
- Accelerated sales cycles by partnering with sales and design to rapidly prototype and deliver key product demos under tight deadlines.
- Modernized a legacy AngularJS codebase by refactoring it into a modular, component-based architecture, significantly improving maintainability and preparing for migration.`,
  },
];

/**
 * Get all work history entries
 *
 * @returns Array of work history entries (newest first)
 */
export function getAllWorkHistory(): WorkHistoryEntry[] {
  return workHistoryEntries;
}

/**
 * Get work history entry by ID
 *
 * @param id - Entry identifier
 * @returns Work history entry or undefined if not found
 */
export function getWorkHistoryById(id: string): WorkHistoryEntry | undefined {
  return workHistoryEntries.find((entry) => entry.id === id);
}
