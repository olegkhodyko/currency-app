import React, { useState } from 'react';
import { Layout, Ui } from '@components';
import { FromTo, AmountInput } from '@modules/index';
import styles from './styles';

export default function CurrencyConversion() {
  const testID = 'currency-conversion-screen';

  const [count, setCount] = useState(0);

  return (
    <Layout.ScreenContainer testID={testID} style={styles.container}>
      <FromTo testID={`${testID}-from_to`} />
      <AmountInput
        testID={`${testID}-amount-input`}
        title="Amount"
        autoFocus
        keyboardType="numeric"
      />
      <Ui.Button title="Click" testID="" onPress={() => setCount(p => p + 1)} />
      <Ui.Text>{count}</Ui.Text>
    </Layout.ScreenContainer>
  );
}
