import { AppNavigationProps, TypedRoute } from '@_types/navigation';
import { CurrencyType } from '@_types/props/currency';
import { useNavigation, useRoute } from '@react-navigation/native';
import { useCurrencyStore } from '@store/currencyStore';
import { filterCurrencies } from '@screens/CurrencySelect/utils';
import { useCallback, useEffect, useMemo, useRef } from 'react';
import { FlatList } from 'react-native-reanimated/lib/typescript/Animated';
import { UseCurrencyListProps } from '@screens/CurrencySelect/types';

const useCurrencyList = (): UseCurrencyListProps => {
  const {
    params: { currencies, type },
  } = useRoute<TypedRoute<'CurrencySelect'>>();
  const { goBack } = useNavigation<AppNavigationProps>();
  const flatListRef = useRef<FlatList<CurrencyType>>(null);

  const changeCurrency = useCurrencyStore(state => state.changeCurrency);
  const resetSearchValue = useCurrencyStore(state => state.resetSearchValue);
  const activeId = useCurrencyStore(state => state.activeId);
  const searchValue = useCurrencyStore(state => state.searchValue);

  const filteredCurrencies = useMemo(() => {
    return filterCurrencies(currencies, searchValue);
  }, [currencies, searchValue]);

  const activeIndex = useMemo(() => {
    return filteredCurrencies.findIndex(({ id }) => id === activeId);
  }, [filteredCurrencies, activeId]);

  const onSelect = useCallback(
    (currency: CurrencyType) => {
      changeCurrency(currency, type);
      resetSearchValue();
      goBack();
    },
    [type],
  );

  useEffect(() => {
    if (activeIndex >= 0 && flatListRef.current) {
      flatListRef.current?.scrollToIndex({
        index: activeIndex,
        animated: false,
      });
    }
  }, [activeIndex]);

  useEffect(() => {
    return () => resetSearchValue();
  }, []);

  return {
    flatListRef,
    filteredCurrencies,
    searchValue,
    onSelect,
  };
};

export default useCurrencyList;
