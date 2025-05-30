import { useRef } from 'react';
import { ConvertResult } from '@_types/state/currency';
import { UseConversionHistoryProps } from '@screens/CurrencyConversion/types';

const useConversionHistory = (): UseConversionHistoryProps => {
  const historyRef = useRef(new Map<string, ConvertResult>());

  const get = (key: string) => historyRef.current.get(key);
  const set = (key: string, value: ConvertResult) =>
    historyRef.current.set(key, value);
  const has = (key: string) => historyRef.current.has(key);

  return { get, set, has };
};

export default useConversionHistory;
