import React from 'react';
import { Layout, Ui } from '@components';
import { FromTo, AmountInput } from '@screens/CurrencyConversion/modules';
import { TypedRoute } from '@_types/navigation';
import { useRoute } from '@react-navigation/native';
import { useFetchConversions } from '@screens/CurrencyConversion/hooks';

import styles from './styles';

export default function CurrencyConversion() {
  const { name } = useRoute<TypedRoute<'CurrencyConversion'>>();
  const { data, isLoading } = useFetchConversions();

  return (
    <Layout.ScreenContainer testID={name} style={styles.container}>
      {isLoading && <Layout.Loader />}
      <FromTo testID={`${name}-from_to`} />
      <AmountInput
        testID={`${name}-amount-input`}
        title="Amount"
        editable={!isLoading}
      />

      <Ui.Text>{data ? data.query.amount : 0}</Ui.Text>
      <Ui.Text>{data ? data.result.toFixed(2) : 0}</Ui.Text>
    </Layout.ScreenContainer>
  );
}
