import React, { useCallback, useMemo, useState } from 'react';
import { Layout } from '@components';
import { CurrencyList, CurrencySearch } from './components';
import { filterCurrencies } from '@screens/CurrencySelect/helpers/filterCurrencies';
import { useRoute } from '@react-navigation/native';
import { TypedRoute } from '@_types/navigation';

import styles from './styles';

export default function CurrencySelectScreen() {
  const testID = 'currency-select-screen';
  const [activeId, setActiveId] = useState<number>(-1);
  const [searchValue, setSearchValue] = useState<string>('');

  const {
    params: { currencies },
  } = useRoute<TypedRoute<'CurrencySelect'>>();

  const selectCurrency = useCallback((id: number) => {
    setActiveId(id);
  }, []);

  const filteredCurrency = useMemo(() => {
    return filterCurrencies(currencies, searchValue);
  }, [currencies, searchValue]);

  return (
    <Layout.ScreenContainer testID={testID} style={styles.container}>
      <CurrencySearch
        testID={`${testID}-search`}
        searchValue={searchValue}
        setSearchValue={setSearchValue}
      />

      <CurrencyList
        testID={`${testID}-list`}
        currencies={filteredCurrency}
        selectCurrency={selectCurrency}
        activeId={activeId}
      />
    </Layout.ScreenContainer>
  );
}
