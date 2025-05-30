import React, { FC, useState } from 'react';
import { Ui } from '@components';
import { CurrencySearchProps } from '@screens/CurrencySelect/types';
import { View } from 'react-native';
import { useCurrencyStore } from '@store/currencyStore';
import { useDebounce } from '@hooks';

import styles from './styles';

const CurrencySearch: FC<CurrencySearchProps> = ({ testID }) => {
  const [value, setValue] = useState<string>('');

  const setSearchValue = useCurrencyStore(state => state.setSearchValue);
  const debouncedChangeValue = useDebounce((text: string) => {
    setSearchValue(text);
  }, 500);

  const onChangeText = (text: string) => {
    setValue(text);
    debouncedChangeValue(text);
  };

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
