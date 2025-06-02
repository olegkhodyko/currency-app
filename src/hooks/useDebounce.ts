import { useCallback, useRef } from 'react';
import Constants from '@utils/constants';

type CallbackType<T> = (...args: T[]) => void;

export default function useDebounce<T>(
  callback: CallbackType<T>,
  delay: number = Constants.DefaultDebounceDelay,
) {
  let timer = useRef<ReturnType<typeof setTimeout>>(null);

  const memoizedResult = useCallback(
    (...args: T[]) => {
      if (timer.current) {
        clearInterval(timer.current);
      }

      timer.current = setTimeout(() => {
        callback(...args);
      }, delay);
    },
    [callback, delay],
  );

  return memoizedResult;
}
