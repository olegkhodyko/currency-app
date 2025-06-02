import React, { FC } from 'react';
import Logo from '@assets/images/noResults.svg';
import { Dimensions, View } from 'react-native';
import { CurrencyEmptyListProps } from '@screens/CurrencySelect/types';
import styles from './styles';

const CurrencyEmptyList: FC<CurrencyEmptyListProps> = ({ testID }) => (
  <View testID={testID} style={styles.container}>
    <Logo
      width={Dimensions.get('screen').width * 0.8}
      height={Dimensions.get('screen').width * 0.8}
    />
  </View>
);

export default CurrencyEmptyList;
