import { useState } from 'react';
import { useDebounce } from '@hooks';
import { useCurrencyStore } from '@store/currencyStore';
import { UseAmountInputProps } from '@screens/CurrencyConversion/types';

const useAmountInput = (): UseAmountInputProps => {
  const [amount, setAmount] = useState<string>('');

  const changeAmount = useCurrencyStore(state => state.changeAmount);
  const debouncedChangeAmount = useDebounce((value: number) => {
    changeAmount(value);
  });

  const handleChange = (text: string) => {
    setAmount(text);
    const numeric = parseFloat(text) || 0;
    debouncedChangeAmount(numeric);
  };

  return {
    amount,
    handleChange,
  };
};

export default useAmountInput;
