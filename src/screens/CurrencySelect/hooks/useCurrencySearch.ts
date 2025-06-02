import { useState } from 'react';
import { useDebounce } from '@hooks';
import { useCurrencyStore } from '@store/currencyStore';
import { UseCurrencySearchProps } from '@screens/CurrencySelect/types';

const useCurrencySearch = (): UseCurrencySearchProps => {
  const [value, setValue] = useState<string>('');

  const setSearchValue = useCurrencyStore(state => state.setSearchValue);
  const debouncedChangeValue = useDebounce((text: string) => {
    setSearchValue(text);
  }, 500);

  const onChangeText = (text: string) => {
    setValue(text);
    debouncedChangeValue(text);
  };

  return {
    value,
    onChangeText,
  };
};

export default useCurrencySearch;
