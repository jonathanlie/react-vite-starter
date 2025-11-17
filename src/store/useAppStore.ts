import { create } from 'zustand';
import { persist } from 'zustand/middleware';

/**
 * Application Store
 *
 * Centralized state management using Zustand.
 * This store demonstrates common patterns for:
 * - User preferences
 * - UI state
 * - Application-wide data
 *
 * @example
 * ```tsx
 * import { useAppStore } from '@/store/useAppStore';
 *
 * function MyComponent() {
 *   const { theme, setTheme } = useAppStore();
 *   return <div>Current theme: {theme}</div>;
 * }
 * ```
 */

interface AppState {
  // Theme
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;

  // User preferences
  sidebarOpen: boolean;
  setSidebarOpen: (open: boolean) => void;
  toggleSidebar: () => void;

  // Counter example (for demonstration)
  count: number;
  increment: () => void;
  decrement: () => void;
  reset: () => void;
}

export const useAppStore = create<AppState>()(
  persist(
    (set) => ({
      // Theme
      theme: 'light',
      setTheme: (theme) => set({ theme }),

      // Sidebar
      sidebarOpen: false,
      setSidebarOpen: (open) => set({ sidebarOpen: open }),
      toggleSidebar: () =>
        set((state) => ({ sidebarOpen: !state.sidebarOpen })),

      // Counter
      count: 0,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      reset: () => set({ count: 0 }),
    }),
    {
      name: 'app-storage', // localStorage key
      partialize: (state) => ({
        // Only persist certain fields
        theme: state.theme,
      }),
    }
  )
);
