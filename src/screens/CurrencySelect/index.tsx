import React, { FC } from 'react';
import { Layout } from '@components';
import { CurrencyList, CurrencySearch } from '@screens/CurrencySelect/modules';
import { CurrencySelectScreenProps } from '@_types/navigation';
import styles from './styles';

const CurrencySelectScreen: FC<CurrencySelectScreenProps> = ({ route }) => {
  const { name } = route;

  return (
    <Layout.ScreenContainer testID={name} style={styles.container}>
      <CurrencySearch testID={`${name}-search`} />
      <CurrencyList testID={`${name}-list`} />
    </Layout.ScreenContainer>
  );
};
export default CurrencySelectScreen;
