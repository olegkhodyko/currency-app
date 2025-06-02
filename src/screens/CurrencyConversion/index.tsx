import React from 'react';
import Toast from 'react-native-toast-message';
import { Layout } from '@components';
import {
  FromTo,
  CurrencyAmount,
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
      <Toast />
      <FromTo testID={`${name}-[from:to]`} />
      <CurrencyAmount testID={`${name}-amount`} isLoading={isLoading} />
      <ConversionResult testID={`${name}-conversion`} data={data} />
    </Layout.ScreenContainer>
  );
}
