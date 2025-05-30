import React, { FC } from 'react';
import { View } from 'react-native';
import { Ui } from '@components';
import { CurrencyNoResultsProps } from '@screens/CurrencySelect/types/props';

import styles from '../styles';

const CurrencyNoResults: FC<CurrencyNoResultsProps> = ({ testID }) => (
  <View testID={testID} style={styles.emptyListWrapper}>
    <Ui.Text variant="large" color="textPrimary">
      No results
    </Ui.Text>
  </View>
);

export default CurrencyNoResults;
