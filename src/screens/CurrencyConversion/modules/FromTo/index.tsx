import React, { FC, useCallback } from 'react';
import { View } from 'react-native';
import { FromToProps } from '@screens/CurrencyConversion/types';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '@_types/navigation';
import { useCurrencyStore, currencies } from '@store/currencyStore';
import { CurrencySelectType, CurrencyType } from '@_types/props/currency';
import {
  CurrencySelect,
  CurrencySwitcher,
} from '@screens/CurrencyConversion/components';

import styles from './styles';

const FromTo: FC<FromToProps> = ({ testID }) => {
  const { navigate } = useNavigation<AppNavigationProps>();

  const fromCurrency = useCurrencyStore(state => state.fromCurrency);
  const toCurrency = useCurrencyStore(state => state.toCurrency);
  const setActiveId = useCurrencyStore(state => state.setActiveId);

  const selectCurrency = useCallback(
    (type: CurrencySelectType, id: CurrencyType['id']) => {
      navigate('CurrencySelect', { currencies, type });
      setActiveId(id);
    },
    [navigate, setActiveId],
  );

  const selectFromCurrency = useCallback(
    () => selectCurrency('from', fromCurrency.id),
    [selectCurrency, fromCurrency.id],
  );

  const selectToCurrency = useCallback(
    () => selectCurrency('to', toCurrency.id),
    [selectCurrency, toCurrency.id],
  );

  return (
    <View testID={testID} style={styles.container}>
      <CurrencySelect
        testID={`${testID}-from`}
        title="From"
        currency={fromCurrency}
        selectCurrency={selectFromCurrency}
      />

      <CurrencySwitcher testID={`${testID}-switcher`} />

      <CurrencySelect
        testID={`${testID}-to`}
        title="To"
        currency={toCurrency}
        selectCurrency={selectToCurrency}
      />
    </View>
  );
};

export default FromTo;
