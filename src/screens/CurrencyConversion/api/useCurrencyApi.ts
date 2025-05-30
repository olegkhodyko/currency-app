import { ConvertCurrencyProps } from '@_types/props/currency';
import { ConvertResult } from '@_types/state/currency';
import { useRequest } from '@api/useRequest';

export default function useCurrencyApi() {
  const { request, data, loading, error } = useRequest<ConvertResult>();

  const getRates = (from: string, to?: string) => {
    return request({
      url: '/latest',
      method: 'GET',
      params: { from, ...(to && { to }) },
    });
  };

  const convertCurrency = async (params: ConvertCurrencyProps) => {
    return request({
      url: '/convert',
      method: 'GET',
      params: {
        from: params.from,
        to: params.to,
        amount: params.amount,
      },
    });
  };

  return { getRates, convertCurrency, data, loading, error };
}
