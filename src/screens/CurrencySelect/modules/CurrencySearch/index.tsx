import React, { FC } from 'react';
import { View } from 'react-native';
import { Ui } from '@components';
import { CurrencySearchProps } from '@screens/CurrencySelect/types';
import { useCurrencySearch } from '@screens/CurrencySelect/hooks';
import styles from './styles';

const CurrencySearch: FC<CurrencySearchProps> = ({ testID }) => {
  const { value, onChangeText } = useCurrencySearch();

  return (
    <View style={styles.container}>
      <Ui.Icon testID={`${testID}-icon`} type="search" size={16} />
      <Ui.Input
        testID={`${testID}-search`}
        placeholder="Search currency..."
        value={value}
        onChangeText={onChangeText}
        style={styles.input}
      />
    </View>
  );
};
export default CurrencySearch;
