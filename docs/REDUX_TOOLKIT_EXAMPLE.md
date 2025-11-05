# Redux Toolkit Implementation Example

This document shows how to implement Redux Toolkit as an alternative to Zustand. This is provided for reference if you need to switch or want to compare implementations.

## Installation

```bash
npm install @reduxjs/toolkit react-redux
```

## Setup

### 1. Create Store

```typescript
// src/store/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import appReducer from './slices/appSlice';

export const store = configureStore({
  reducer: {
    app: appReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
```

### 2. Create Slice

```typescript
// src/store/redux/slices/appSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  theme: 'light' | 'dark';
  sidebarOpen: boolean;
  count: number;
}

const initialState: AppState = {
  theme: 'light',
  sidebarOpen: false,
  count: 0,
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setTheme: (state, action: PayloadAction<'light' | 'dark'>) => {
      state.theme = action.payload;
    },
    setSidebarOpen: (state, action: PayloadAction<boolean>) => {
      state.sidebarOpen = action.payload;
    },
    toggleSidebar: (state) => {
      state.sidebarOpen = !state.sidebarOpen;
    },
    increment: (state) => {
      state.count += 1;
    },
    decrement: (state) => {
      state.count -= 1;
    },
    reset: (state) => {
      state.count = 0;
    },
  },
});

export const {
  setTheme,
  setSidebarOpen,
  toggleSidebar,
  increment,
  decrement,
  reset,
} = appSlice.actions;

export default appSlice.reducer;
```

### 3. Setup Provider

```typescript
// src/main.tsx
import { Provider } from 'react-redux';
import { store } from '@/store/redux/store';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
```

### 4. Typed Hooks

```typescript
// src/store/redux/hooks.ts
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import type { RootState, AppDispatch } from './store';

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
```

### 5. Usage in Component

```typescript
// src/components/Counter.tsx
import { useAppSelector, useAppDispatch } from '@/store/redux/hooks';
import { increment, decrement, reset } from '@/store/redux/slices/appSlice';

export function Counter() {
  const count = useAppSelector((state) => state.app.count);
  const dispatch = useAppDispatch();

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(reset())}>Reset</button>
    </div>
  );
}
```

## Comparison with Zustand

| Aspect         | Redux Toolkit | Zustand    |
| -------------- | ------------- | ---------- |
| Setup Files    | ~5 files      | 1 file     |
| Boilerplate    | More          | Less       |
| Provider       | Required      | Not needed |
| DevTools       | Excellent     | Basic      |
| Learning Curve | Steeper       | Easier     |

## Migration Path

If you want to switch from Zustand to Redux Toolkit:

1. Install Redux Toolkit
2. Create store and slices
3. Add Provider to main.tsx
4. Replace `useAppStore()` with `useAppSelector()` and `useAppDispatch()`
5. Update action calls

The component structure remains similar, making migration straightforward.
