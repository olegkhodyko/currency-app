import React, { FC } from 'react';
import Toast from 'react-native-toast-message';
import { Layout } from '@components';
import {
  FromTo,
  CurrencyAmount,
  ConversionResult,
} from '@screens/CurrencyConversion/modules';
import { CurrencyConversionScreenProps } from '@_types/navigation';
import { useFetchConversions } from '@screens/CurrencyConversion/hooks';
import styles from './styles';

const CurrencyConversion: FC<CurrencyConversionScreenProps> = ({ route }) => {
  const { data, isLoading } = useFetchConversions();
  const { name } = route;

  return (
    <Layout.ScreenContainer testID={name} style={styles.container}>
      <Toast />
      <FromTo testID={`${name}-[from:to]`} />
      <CurrencyAmount testID={`${name}-amount`} isLoading={isLoading} />
      <ConversionResult testID={`${name}-conversion`} data={data} />
    </Layout.ScreenContainer>
  );
};

export default CurrencyConversion;
