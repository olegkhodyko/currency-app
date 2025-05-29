import React from 'react';
import { Layout } from '@components';
import { FromTo, AmountInput } from '@screens/CurrencyConversion/modules';
import styles from './styles';
import { useCurrencies } from '@hooks';

export default function CurrencyConversion() {
  const testID = 'currency-conversion-screen';
  const { currencies } = useCurrencies();

  if (!currencies) {
    return null;
  }

  return (
    <Layout.ScreenContainer testID={testID} style={styles.container}>
      <FromTo testID={`${testID}-from_to`} currencies={currencies} />
      <AmountInput
        testID={`${testID}-amount-input`}
        title="Amount"
        autoFocus
        keyboardType="numeric"
      />
    </Layout.ScreenContainer>
  );
}
