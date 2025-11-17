import { useState, useEffect } from 'react';
import { Input } from '@/components/ui/input';

interface SearchInputProps {
  onSearchChange: (debouncedValue: string) => void;
  placeholder?: string;
  debounceMs?: number;
  className?: string;
}

/**
 * Search Input Component
 *
 * Presentational component that provides a search input with built-in debouncing.
 * Encapsulates debouncing logic and exposes a clean onSearchChange callback.
 * The component manages its own input state internally.
 */
export function SearchInput({
  onSearchChange,
  placeholder = 'Search...',
  debounceMs = 300,
  className,
}: SearchInputProps) {
  const [inputValue, setInputValue] = useState('');

  // Debounce and call onSearchChange
  useEffect(() => {
    const timer = setTimeout(() => {
      onSearchChange(inputValue);
    }, debounceMs);

    return () => clearTimeout(timer);
  }, [inputValue, debounceMs, onSearchChange]);

  return (
    <Input
      type="text"
      placeholder={placeholder}
      value={inputValue}
      onChange={(e) => setInputValue(e.target.value)}
      className={className}
    />
  );
}
