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
    company: 'Ascenda Loyalty',
    location: 'Singapore',
    workModel: 'Hybrid',
    role: 'Software Engineer (Backend)',
    startDate: 'Jun 2021',
    endDate: 'Mar 2025',
    duration: '3 yrs 10 mos',
    content: `**Team Size:** ~8 Engineers | **Tech:** Ruby on Rails, PostgreSQL, Microservices, RSpec

I voluntarily transitioned to the backend team to understand the complete lifecycle of our application. My focus was on building high-reliability systems for our banking partners and handling the complexity of multi-tenancy.

**Schema-Based Validation:**

I built a system where backend logic dictates the frontend form. We used JSON Schemas to define what data a specific bank required (e.g., ID numbers, specific address formats). I wrote the service that validated this data and served the schema to the frontend, allowing us to onboard new partners without deploying new frontend code.

**Improving Batch Job Reliability:**

We had a critical monthly batch job for processing ~200,000 redemptions that was fragile and prone to crashing. I re-architected it to be idempotent and fault-tolerant. This meant if it crashed, we could simply retry it without duplicating transactions. This eliminated 100% of the manual data-patching work we used to do every month.

**API Documentation:**

I documented several public-facing Partner APIs using OpenAPI to help our partners with integration. It was a good "dabble" into API design best practices.

**Production Support:**

I participated in the team's weekly on-call rotation, debugging production incidents and tracing errors across multiple microservices.`,
  },
  {
    id: 'ascenda-senior-frontend-engineer',
    company: 'Ascenda Loyalty',
    location: 'Singapore',
    workModel: 'Hybrid',
    role: 'Senior Software Engineer (Frontend)',
    startDate: 'Mar 2020',
    endDate: 'May 2021',
    duration: '1 yr 3 mos',
    content: `**Team Size:** 4 Engineers | **Tech:** Angular, TypeScript, Jest

I was promoted to Senior Engineer to help lead the team. While I performed well, I realized during this period that my passion was in building systems, not people management. This realization is what drove my decision to pivot to Backend later.

**Technical Leadership:**

I was responsible for code reviews, setting coding standards, and conducting 1-on-1s. I focused on practical mentorship—helping the team break down large features into manageable engineering tickets.

**Performance Optimization:**

I led the effort to improve our Core Web Vitals. This involved analyzing bundle sizes and implementing route-level code splitting, which significantly reduced the initial load time for users.

**Rewards Dashboard Expansion:**

Continued to oversee the technical stability of the Rewards Dashboard as it scaled to over 1 million users.`,
  },
  {
    id: 'ascenda-frontend-engineer',
    company: 'Ascenda Loyalty',
    location: 'Singapore',
    workModel: 'Hybrid',
    role: 'Software Engineer (Frontend)',
    startDate: 'Oct 2017',
    endDate: 'Feb 2020',
    duration: '2 yrs 5 mos',
    content: `**Team Size:** 8-10 Engineers | **Tech:** Angular, AngularJS, Mapbox, RxJS

I joined the team to work on a mix of legacy modernization and greenfield development.

**Greenfield Project (Rewards Dashboard):**

I was the lead frontend engineer for a new redemption platform. I set up the project from scratch, deciding on the directory structure, naming conventions, and test suite setup.

**Deep Whitelabelling:**

The core challenge was making one app look like 50 different apps. I built a configuration engine that allowed us to inject different themes, fonts, layouts, and feature flags based on the client ID—all from a single codebase.

**Internationalization (i18n):**

I engineered the translation pipeline using PhraseApp. This wasn't just text replacement; I had to implement support for RTL (Right-to-Left) layouts for our Arabic clients, which required complex CSS logical properties work.

**Sales Engineering:**

I frequently partnered with the Sales team to build "Working Prototypes" for client pitches. These were rapid, high-pressure builds where I had to mock up features quickly to help close enterprise deals.

**Legacy Modernization:**

My initial work involved maintaining kaligo.com (AngularJS). I refactored monolithic controllers into smaller components to make the codebase easier to maintain and prepare it for an eventual migration.`,
  },
  {
    id: 'versafleet-software-engineer',
    company: 'VersaFleet',
    location: 'Singapore',
    workModel: 'On-site',
    role: 'Software Engineer',
    startDate: 'Aug 2016',
    endDate: 'Sep 2017',
    duration: '1 yr',
    content: `**Tech:** React, React Native, Redux, Ruby on Rails

I moved into a full-time role handling the core product features. This was primarily a frontend role, but I dipped into the full stack for specific data-heavy features.

**Web Dashboard Features:**

I built several core modules for the logistics dashboard, including:

- **Complex Forms:** Multi-step, schema-driven forms for order creation.
- **Spreadsheet Import (Full Stack):** I built a feature allowing users to bulk-upload orders via Excel. This required me to write the Rails backend parser and the frontend interface to map columns and handle errors.

**React Native Driver App:**

I built the mobile workflow for drivers. Key features included Digital E-Signatures (capturing touch input on canvas) and a "slide-to-accept" task interface.

**Google Maps Integration:**

I implemented the geospatial features, such as visualizing delivery clusters on the map and rendering real-time driver locations.

**State Management Migration:**

I helped migrate the legacy application from Reflux to Redux. This involved rewriting the data layer to use Reducers, ensuring a unidirectional data flow that was much easier to debug.`,
  },
  {
    id: 'versafleet-intern',
    company: 'VersaFleet',
    location: 'Singapore',
    workModel: 'On-site',
    role: 'Software Engineer Intern',
    startDate: 'Dec 2015',
    endDate: 'May 2016',
    duration: '6 mos',
    content: `
- **Corporate Site:** I worked with a designer to rebuild the company marketing site from scratch using HTML/Bootstrap.
- **DevOps:** I set up the team's first automated deployment pipeline using Grunt scripts to remove manual build steps.`,
  },
  {
    id: 'autodesk-intern',
    company: 'Autodesk',
    location: 'Singapore',
    workModel: 'On-site',
    role: 'Software Engineer Intern',
    startDate: 'Jan 2015',
    endDate: 'May 2015',
    duration: '5 mos',
    content: `
- **R&D Prototype:** I built a proof-of-concept to add touchscreen capabilities to AutoCAD.
- **Touch Input:** I used the Windows Touch API to interpret 1-to-5 finger gestures, mapping them to specific CAD navigation commands (pan, zoom, rotate).`,
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
