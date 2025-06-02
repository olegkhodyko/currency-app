import { useRequest } from '@api/useRequest';
import { ConvertCurrencyProps } from '@_types/props/currency';
import { ConvertResult } from '@_types/state/currency';
import { UseCurrencyApiProps } from '@screens/CurrencyConversion/types';

export default function useCurrencyApi(): UseCurrencyApiProps<ConvertResult> {
  const requestData = useRequest<ConvertResult>();

  const convertCurrency = (params: ConvertCurrencyProps) =>
    requestData.request({
      url: '/convert',
      method: 'GET',
      params: {
        from: params.from,
        to: params.to,
        amount: params.amount,
      },
    });

  return { ...requestData, convertCurrency };
}
