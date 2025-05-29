import { useEffect, useState } from 'react';
import { CurrencyType } from '@_types/props/currency';
import { CurrencyArraySchema } from '@utils/validators/currency';

import rawData from '@assets/data/currencies.json';

const useCurrencies = (): {
  currencies: CurrencyType[];
  error: string;
} => {
  const [currencies, setCurrencies] = useState<CurrencyType[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const result = CurrencyArraySchema.safeParse(
      rawData.map((i, idx) => ({ ...i, id: idx + 1 })),
    );

    if (result.success) {
      setCurrencies(result.data);
      setError('');
    } else {
      setError(result.error.message);
      console.error('Currencies JSON validation failed:', result.error.message);
    }
  }, []);

  return { currencies, error };
};

export default useCurrencies;
