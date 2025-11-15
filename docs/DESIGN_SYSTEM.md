# Design System Guidelines

This document defines the design system for consistent styling across the portfolio site using Tailwind CSS. **Always reference this document when generating styles for new components.**

## Spacing Scale

**Base Unit:** 4px (0.25rem)

All spacing values follow Tailwind's default scale based on 4px increments:

| Token | Value | Tailwind Class | Use Case |
|-------|-------|----------------|----------|
| `xs`  | 4px   | `p-1`, `m-1`, `gap-1` | Tight spacing, icon padding |
| `sm`  | 8px   | `p-2`, `m-2`, `gap-2` | Small components, compact layouts |
| `md`  | 16px  | `p-4`, `m-4`, `gap-4` | Standard spacing, default padding |
| `lg`  | 24px  | `p-6`, `m-6`, `gap-6` | Comfortable spacing, section padding |
| `xl`  | 32px  | `p-8`, `m-8`, `gap-8` | Large spacing, container padding |
| `2xl` | 48px  | `p-12`, `m-12`, `gap-12` | Extra large spacing, major sections |
| `3xl` | 64px  | `p-16`, `m-16`, `gap-16` | Maximum spacing, page-level sections |

## Component Spacing Rules

### Containers
- **Page containers:** `p-4 md:p-6 lg:p-8` (responsive padding)
- **Section containers:** `px-4 md:px-6 lg:px-8` (horizontal only)
- **Content width:** `max-w-7xl mx-auto` (centered, max width)

### Sections
- **Between major sections:** `mb-8 lg:mb-12`
- **Between subsections:** `mb-6 lg:mb-8`
- **Between related items:** `mb-4`

### Cards
- **Card padding:** `p-4 md:p-6`
- **Card spacing (grid):** `gap-4 md:gap-6`
- **Card margin:** `mb-4 md:mb-6`

### Forms
- **Form field spacing:** `mb-4` (between fields)
- **Form group spacing:** `mb-6` (between field groups)
- **Button spacing:** `mt-6` (after form fields)

### Buttons
- **Button padding:** `px-4 py-2` (standard)
- **Button padding (large):** `px-6 py-3`
- **Button spacing:** `gap-2` (between buttons in group)

### Navigation
- **Nav item spacing:** `gap-4 md:gap-6` (horizontal)
- **Nav padding:** `px-4 py-4 md:px-6`

### Modals
- **Modal padding:** `p-6 md:p-8`
- **Modal content spacing:** `space-y-4 md:space-y-6`

## Typography Scale

### Headings
- **H1 (Page titles):** `text-2xl md:text-3xl lg:text-4xl font-bold`
- **H2 (Section titles):** `text-xl md:text-2xl lg:text-3xl font-semibold`
- **H3 (Subsection titles):** `text-lg md:text-xl lg:text-2xl font-semibold`
- **H4 (Card titles):** `text-base md:text-lg font-semibold`

### Body Text
- **Body (default):** `text-base` (16px)
- **Body (small):** `text-sm` (14px)
- **Body (large):** `text-lg` (18px)

### Line Height
- **Headings:** `leading-tight` (1.25)
- **Body:** `leading-relaxed` (1.625)
- **Compact:** `leading-normal` (1.5)

### Font Weight
- **Bold:** `font-bold` (700) - Page titles, emphasis
- **Semibold:** `font-semibold` (600) - Section titles, card titles
- **Medium:** `font-medium` (500) - Labels, buttons
- **Normal:** `font-normal` (400) - Body text (default)

## Color Palette

### Primary Colors
- **Primary:** Use theme colors from Tailwind (e.g., `blue-600`, `indigo-600`)
- **Primary hover:** `hover:blue-700`, `hover:indigo-700`
- **Primary light:** `blue-50`, `indigo-50` (backgrounds)

### Semantic Colors
- **Success:** `green-600`, `green-50` (background)
- **Error:** `red-600`, `red-50` (background)
- **Warning:** `yellow-600`, `yellow-50` (background)
- **Info:** `blue-600`, `blue-50` (background)

### Neutral Colors
- **Text (primary):** `text-gray-900 dark:text-gray-100`
- **Text (secondary):** `text-gray-600 dark:text-gray-400`
- **Text (muted):** `text-gray-500 dark:text-gray-500`
- **Background:** `bg-white dark:bg-gray-900`
- **Background (muted):** `bg-gray-50 dark:bg-gray-800`
- **Border:** `border-gray-200 dark:border-gray-700`

## Border Radius

- **Cards:** `rounded-lg` (8px)
- **Buttons:** `rounded-md` (6px)
- **Inputs:** `rounded-md` (6px)
- **Modals:** `rounded-xl` (12px)
- **Images:** `rounded-md` (6px)
- **Badges/Tags:** `rounded-full` (pill shape)

## Shadows

- **Cards (default):** `shadow-md`
- **Cards (hover):** `hover:shadow-lg`
- **Modals:** `shadow-2xl`
- **Dropdowns:** `shadow-lg`
- **Buttons (elevated):** `shadow-sm`

## Breakpoints

Tailwind's default breakpoints:

- **sm:** 640px - Small tablets
- **md:** 768px - Tablets
- **lg:** 1024px - Laptops
- **xl:** 1280px - Desktops
- **2xl:** 1536px - Large desktops

### Responsive Patterns
- **Mobile-first:** Base styles for mobile, add `md:`, `lg:` prefixes for larger screens
- **Common pattern:** `text-base md:text-lg lg:text-xl`
- **Grid columns:** `grid-cols-1 md:grid-cols-2 lg:grid-cols-3`

## Component Patterns

### Cards
```tsx
<div className="p-4 md:p-6 rounded-lg shadow-md bg-white dark:bg-gray-800">
  <h3 className="text-lg md:text-xl font-semibold mb-4">Card Title</h3>
  <p className="text-base text-gray-600 dark:text-gray-400">Card content</p>
</div>
```

### Buttons
```tsx
<button className="px-4 py-2 rounded-md bg-blue-600 text-white hover:bg-blue-700 font-medium">
  Button Text
</button>
```

### Sections
```tsx
<section className="mb-8 lg:mb-12">
  <h2 className="text-xl md:text-2xl font-semibold mb-6">Section Title</h2>
  {/* Content */}
</section>
```

### Containers
```tsx
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
  {/* Content */}
</div>
```

## Accessibility

- **Focus states:** Always use `focus-visible:outline-2 focus-visible:outline-blue-600`
- **Color contrast:** Ensure WCAG AA compliance (4.5:1 for text)
- **Touch targets:** Minimum 44x44px for interactive elements
- **Spacing for readability:** Use `leading-relaxed` for body text

## Animation

- **Transitions:** `transition-colors duration-200` (for color changes)
- **Hover effects:** `hover:scale-105 transition-transform duration-200`
- **Respect reduced motion:** Use `@media (prefers-reduced-motion: reduce)` (already in `index.css`)

## Quick Reference

When styling a new component, ask:
1. **Spacing:** What's the container? Use spacing rules above.
2. **Typography:** What's the hierarchy? Use typography scale.
3. **Colors:** What's the semantic meaning? Use color palette.
4. **Responsive:** How should it adapt? Use breakpoint patterns.
5. **Accessibility:** Are focus states and contrast correct?

**Remember:** Consistency is key. When in doubt, reference existing components and this guide.

