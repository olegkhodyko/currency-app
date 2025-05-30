import React from 'react';
import { Layout } from '@components';
import {
  FromTo,
  AmountInput,
  ConversionResult,
} from '@screens/CurrencyConversion/modules';
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
      {data && (
        <ConversionResult testID={`${name}-conversion-result`} data={data} />
      )}
    </Layout.ScreenContainer>
  );
}
