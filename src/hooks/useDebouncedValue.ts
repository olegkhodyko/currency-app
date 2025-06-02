import { useEffect, useState } from 'react';
import Constants from '@utils/constants';

export default function useDebouncedValue<T>(
  value: T,
  delay: number = Constants.DefaultDebounceDelay,
): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}
