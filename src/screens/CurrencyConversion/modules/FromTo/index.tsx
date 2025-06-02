import React, { FC } from 'react';
import { View } from 'react-native';
import { useFromTo } from '@screens/CurrencyConversion/hooks';
import { FromToProps } from '@screens/CurrencyConversion/types';
import {
  CurrencySelect,
  CurrencySwitcher,
} from '@screens/CurrencyConversion/components';
import styles from './styles';

const FromTo: FC<FromToProps> = ({ testID }) => {
  const { fromCurrency, toCurrency, selectFromCurrency, selectToCurrency } =
    useFromTo();

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
