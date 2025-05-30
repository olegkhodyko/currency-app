import React, { FC } from 'react';
import { View } from 'react-native';
import { Ui } from '@components';
import { CurrencyNoResultsProps } from '@screens/CurrencySelect/types';
import styles from './styles';

const CurrencyNoResults: FC<CurrencyNoResultsProps> = ({ testID }) => (
  <View testID={testID} style={styles.container}>
    <Ui.Text variant="large" color="textPrimary">
      No results
    </Ui.Text>
  </View>
);

export default CurrencyNoResults;
