# Portfolio Site Architecture

This document outlines the architecture and structure for the portfolio site implementation.

## Route Structure

The portfolio site uses the following route structure:

| Route | Component | Description |
|-------|-----------|-------------|
| `/` | `Home` | Homepage with quick introduction |
| `/contact` | `Contact` | Contact page with email and resume download |
| `/knowledge-web` | `KnowledgeWeb` | Knowledge web visualization (cards/graph) |
| `/work-history` | `WorkHistory` | Detailed work history and company experiences |

All routes are defined in `src/App.tsx` and follow the existing routing pattern.

## Knowledge Web Schema

### Node Structure

Each knowledge node follows this schema (defined in `src/types/knowledge.ts`):

```typescript
interface KnowledgeNode {
  id: string;                    // Unique identifier (kebab-case)
  title: string;                 // Display title
  category: KnowledgeCategory;   // Classification
  content: string;               // Short description (1-2 sentences)
  markdownFile: string;          // Path to external MDX file (required)
  related: string[];             // Array of related node IDs
  level?: SkillLevel;            // Optional proficiency level
  tags?: string[];               // Optional tags for filtering
}
```

### Content Strategy

**Performance Optimization:**
- Only short descriptions (`content`) are loaded initially
- Detailed markdown content is lazy-loaded from external MDX files when a node is clicked
- MDX files are stored in `src/content/knowledge/` directory
- Modal component handles dynamic import of MDX content

**MDX File Structure:**
- Location: `src/content/knowledge/{node-id}.mdx`
- Example: `src/content/knowledge/kafka.mdx`
- Files are referenced by filename only (e.g., `"kafka.mdx"`)

### Data Management

- **Data Source:** `src/data/knowledgeNodes.ts`
- **Helper Functions:**
  - `getNodeById(id)` - Get a single node by ID
  - `getRelatedNodes(id)` - Get all related nodes
  - `getNodesByCategory(category)` - Filter by category
  - `getNodesByTag(tag)` - Filter by tag
  - `getAllCategories()` - Get unique categories

## Design System

See `docs/DESIGN_SYSTEM.md` for comprehensive styling guidelines.

**Key Principles:**
- Base spacing unit: 4px (0.25rem)
- Responsive design: Mobile-first approach
- Consistent spacing scale: xs, sm, md, lg, xl, 2xl, 3xl
- Typography scale: H1-H4 with responsive sizing
- Component patterns: Cards, buttons, sections, containers

**Always reference `DESIGN_SYSTEM.md` when styling new components.**

## File Structure

```
src/
├── pages/
│   ├── Home.tsx              # Homepage
│   ├── Contact.tsx           # Contact page
│   ├── KnowledgeWeb.tsx      # Knowledge web page
│   └── WorkHistory.tsx       # Work history page
├── components/
│   └── (knowledge web components to be added)
├── types/
│   └── knowledge.ts          # Knowledge node TypeScript types
├── data/
│   └── knowledgeNodes.ts     # Knowledge nodes data
└── content/
    └── knowledge/            # MDX files for detailed content
        ├── kafka.mdx
        ├── aws-msk.mdx
        └── ...
```

## Implementation Status

### ✅ Completed
- [x] Route structure and page components
- [x] Knowledge node TypeScript schema
- [x] Example knowledge nodes data
- [x] Design system documentation
- [x] Navigation updates
- [x] Translation keys (English & Spanish)

### 🚧 Pending Implementation
- [ ] Knowledge web card grid view
- [ ] Knowledge web React Flow graph view
- [ ] View toggle (cards vs graph)
- [ ] Modal component for MDX content
- [ ] MDX content files in `src/content/knowledge/`
- [ ] Lazy loading of MDX files
- [ ] Work history timeline/list component
- [ ] Homepage introduction content

## Next Steps

1. **Create MDX Content Files:**
   - Create `src/content/knowledge/` directory
   - Add MDX files for each knowledge node (e.g., `kafka.mdx`, `aws-msk.mdx`)
   - Reference these files in `knowledgeNodes.ts`

2. **Implement Knowledge Web Components:**
   - Card grid component
   - React Flow graph component
   - View toggle component
   - Modal component with MDX rendering

3. **Implement Work History:**
   - Timeline or list component
   - Data structure for work history entries
   - Company experience components

4. **Update Homepage:**
   - Add introduction content
   - Style according to design system

## Usage Examples

### Adding a New Knowledge Node

1. Create MDX file: `src/content/knowledge/my-node.mdx`
2. Add node to `src/data/knowledgeNodes.ts`:

```typescript
{
  id: 'my-node',
  title: 'My Node',
  category: 'backend',
  content: 'Short description here.',
  markdownFile: 'my-node.mdx',
  related: ['kafka', 'rails'],
}
```

### Styling a New Component

Reference `docs/DESIGN_SYSTEM.md` for:
- Spacing rules (padding, margins, gaps)
- Typography scale
- Color palette
- Border radius and shadows
- Responsive breakpoints

Example:
```tsx
<div className="p-4 md:p-6 rounded-lg shadow-md mb-8 lg:mb-12">
  <h2 className="text-xl md:text-2xl font-semibold mb-6">Title</h2>
  <p className="text-base text-gray-600 dark:text-gray-400">Content</p>
</div>
```

