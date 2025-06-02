import { ConvertResult } from '@_types/state/currency';
import { useCurrencyStore } from '@store/currencyStore';
import { formatCurrency } from '@screens/CurrencyConversion/utils';
import { UseConversionResultProps } from '../types';

const useConversionResult = (data: ConvertResult | null): UseConversionResultProps => {
  const from = useCurrencyStore(state => state.fromCurrency);
  const to = useCurrencyStore(state => state.toCurrency);

  const amount = data?.query?.amount ?? 0;
  const result = data?.result ?? 0;

  const amountTitle = `${formatCurrency(amount, from?.symbol ?? '')} = `;
  const resultTitle = formatCurrency(result, to?.symbol ?? '');
  const visible = !!data;

  return {
    amountTitle,
    resultTitle,
    visible,
  };
};

export default useConversionResult;
