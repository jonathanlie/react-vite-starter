import { cva } from 'class-variance-authority';

export const navLinkVariants = cva(
  'inline-flex items-center whitespace-nowrap text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]',
  {
    variants: {
      variant: {
        default:
          'h-7 rounded-md px-2.5 hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50',
        active: 'h-7 rounded-md px-2.5 bg-accent text-accent-foreground',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  }
);
