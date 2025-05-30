import { useEffect, useState } from 'react';
import { useCurrencyApi } from '@screens/CurrencyConversion/api';
import { useConversionHistory } from '@screens/CurrencyConversion/hooks';
import { ConvertResult } from '@_types/state/currency';
import { isExpiredTime, recalculateResult } from '../helpers';
import { useCurrencyStore } from '@store/currencyStore';

const useFetchConversions = () => {
  const { convertCurrency } = useCurrencyApi();
  const history = useConversionHistory();
  const [data, setData] = useState<ConvertResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const from = useCurrencyStore(state => state.fromCurrency.code);
  const to = useCurrencyStore(state => state.toCurrency.code);
  const amount = useCurrencyStore(state => state.amount);

  useEffect(() => {
    if (from === '' || to === '' || amount === 0) {
      setData(null);
      return;
    }

    const key = `${from}_${to}`;
    const cached = history.get(key);

    const fetchAndCache = async () => {
      setIsLoading(true);
      try {
        const result = await convertCurrency({ from, to, amount });
        history.set(key, result);
        setData(result);
      } catch (err) {
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    if (cached) {
      if (isExpiredTime(cached.date, 5)) {
        history.set(key, undefined!);
        fetchAndCache();
      } else {
        const updated = recalculateResult(cached, amount);
        setData(updated);
      }
    } else {
      fetchAndCache();
    }
  }, [amount, from, to]); // eslint-disable-line react-hooks/exhaustive-deps

  return { data, isLoading };
};

export default useFetchConversions;
