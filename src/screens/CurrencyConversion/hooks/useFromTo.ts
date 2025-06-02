import { useCallback } from 'react';
import { useCurrencyStore } from '@store/currencyStore';
import { CurrencySelectType, CurrencyType } from '@_types/props/currency';
import { useNavigation, useRoute } from '@react-navigation/native';
import { TypedNavigation, TypedRoute } from '@_types/navigation';
import { UseFromToProps } from '@screens/CurrencyConversion/types';

const useFromTo = (): UseFromToProps => {
  const route = useRoute<TypedRoute<'CurrencyConversion'>>();
  const navigation = useNavigation<TypedNavigation<'CurrencyConversion'>>();

  const { currencies } = route.params;

  const fromCurrency = useCurrencyStore(state => state.fromCurrency);
  const toCurrency = useCurrencyStore(state => state.toCurrency);
  const setActiveId = useCurrencyStore(state => state.setActiveId);

  const selectCurrency = useCallback(
    (type: CurrencySelectType, id: CurrencyType['id']) => {
      navigation.navigate('CurrencySelect', {
        currencies,
        type,
      });
      setActiveId(id);
    },
    [navigation.navigate, setActiveId],
  );

  const selectFromCurrency = useCallback(
    () => selectCurrency('from', fromCurrency.id),
    [selectCurrency, fromCurrency.id],
  );

  const selectToCurrency = useCallback(
    () => selectCurrency('to', toCurrency.id),
    [selectCurrency, toCurrency.id],
  );

  return {
    fromCurrency,
    toCurrency,
    selectFromCurrency,
    selectToCurrency,
  };
};

export default useFromTo;
