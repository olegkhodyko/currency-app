import React from 'react';
import { Layout } from '@components';
import { FromTo, AmountInput } from '@screens/CurrencyConversion/modules';
import { TypedRoute } from '@_types/navigation';
import { useRoute } from '@react-navigation/native';

import styles from './styles';

export default function CurrencyConversion() {
  const { name } = useRoute<TypedRoute<'CurrencyConversion'>>();

  return (
    <Layout.ScreenContainer testID={name} style={styles.container}>
      <FromTo testID={`${name}-from_to`} />
      <AmountInput
        testID={`${name}-amount-input`}
        title="Amount"
        autoFocus
        keyboardType="numeric"
      />
    </Layout.ScreenContainer>
  );
}
