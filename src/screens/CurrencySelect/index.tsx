import React from 'react';
import { Layout } from '@components';
import { CurrencyList, CurrencySearch } from '@screens/CurrencySelect/modules';
import { useRoute } from '@react-navigation/native';
import { TypedRoute } from '@_types/navigation';

import styles from './styles';

export default function CurrencySelectScreen() {
  const { name } = useRoute<TypedRoute<'CurrencySelect'>>();

  return (
    <Layout.ScreenContainer testID={name} style={styles.container}>
      <CurrencySearch testID={`${name}-search`} />
      <CurrencyList testID={`${name}-list`} />
    </Layout.ScreenContainer>
  );
}
