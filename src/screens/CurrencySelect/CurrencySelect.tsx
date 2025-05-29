import React, { useCallback, useMemo, useState } from 'react';
import { Layout } from '@components';
import { CurrencyList, CurrencySearch } from './components';
import { filterCurrencies } from '@screens/CurrencySelect/helpers/filterCurrencies';
import { useNavigation, useRoute } from '@react-navigation/native';
import { AppNavigationProps, TypedRoute } from '@_types/navigation';
import { useCurrencyStore } from '@store/currencyStore';
import { CurrencyType } from '@_types/props/currency';
import { useDebouncedValue } from '@hooks';

import styles from './styles';

export default function CurrencySelectScreen() {
  const {
    name,
    params: { currencies, type },
  } = useRoute<TypedRoute<'CurrencySelect'>>();
  const { goBack } = useNavigation<AppNavigationProps>();

  const [searchValue, setSearchValue] = useState<string>('');

  const changeCurrency = useCurrencyStore(state => state.changeCurrency);
  const debouncedSearch = useDebouncedValue(searchValue, 300);

  const filteredCurrencies = useMemo(() => {
    return filterCurrencies(currencies, debouncedSearch);
  }, [currencies, debouncedSearch]);

  const onSelect = useCallback(
    (currency: CurrencyType) => {
      changeCurrency(currency, type);
      goBack();
    },
    [changeCurrency, goBack, type],
  );

  return (
    <Layout.ScreenContainer testID={name} style={styles.container}>
      <CurrencySearch
        testID={`${name}-search`}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <CurrencyList
        testID={`${name}-list`}
        currencies={filteredCurrencies}
        onSelect={onSelect}
      />
    </Layout.ScreenContainer>
  );
}
