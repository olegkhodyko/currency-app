import Constants from '@utils/constants';
import { useEffect, useState } from 'react';
import { useCurrencyApi } from '@screens/CurrencyConversion/api';
import { useConversionHistory } from '@screens/CurrencyConversion/hooks';
import { ConvertResult } from '@_types/state/currency';
import { recalculateResult } from '@screens/CurrencyConversion/utils';
import { useCurrencyStore } from '@store/currencyStore';
import { UseFetchConversionsProps } from '@screens/CurrencyConversion/types';
import { showErrorToast } from '@utils/configs/toast';
import { checkEveryTruthy, isExpiredTime } from '@utils/validators/common';

const useFetchConversions = (): UseFetchConversionsProps => {
  const { convertCurrency } = useCurrencyApi();
  const history = useConversionHistory();

  const [data, setData] = useState<ConvertResult | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const from = useCurrencyStore(state => state.fromCurrency.code);
  const to = useCurrencyStore(state => state.toCurrency.code);
  const amount = useCurrencyStore(state => state.amount);

  useEffect(() => {
    if (!checkEveryTruthy([from, to, amount])) {
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
        showErrorToast({
          title: Constants.Error.RequestTitle,
          message: Constants.Error.FetchConversionMessage,
        });
      } finally {
        setIsLoading(false);
      }
    };

    const checkInCache = (cachedData: ConvertResult) => {
      if (
        isExpiredTime(
          cachedData.date,
          Constants.DefaultExpiredHistoryMin,
          'minute',
        )
      ) {
        history.remove(key);
        fetchAndCache();
      } else {
        const updated = recalculateResult(cachedData, amount);
        setData(updated);
      }
    };

    if (!cached) {
      fetchAndCache();
    } else {
      checkInCache(cached);
    }
  }, [amount, from, to]);

  return { data, isLoading };
};

export default useFetchConversions;
