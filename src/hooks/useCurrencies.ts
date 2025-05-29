import { useEffect, useState } from 'react';
import rawData from '@assets/data/currencies.json';
import { CurrencyType } from '@_types/props/country';
import { CurrencyArraySchema } from '@utils/validators/currency';

const useCurrencies = () => {
  const [currencies, setCurrencies] = useState<CurrencyType[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const result = CurrencyArraySchema.safeParse(rawData);
    if (result.success) {
      setCurrencies(result.data);
    } else {
      setError(result.error.message);
      console.error('Currencies JSON validation failed:', result.error.message);
    }
  }, []);

  return { currencies, error };
};

export default useCurrencies;
