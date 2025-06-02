import React, { FC } from 'react';
import { TouchableOpacity } from 'react-native';
import { Ui } from '@components';
import { useCurrencyStore } from '@store/currencyStore';
import { CurrencySwitcherProps } from '@screens/CurrencyConversion/types';
import styles from './styles';

const CurrencySwitcher: FC<CurrencySwitcherProps> = ({ testID }) => {
  const switchCurrencies = useCurrencyStore(state => state.switchCurrencies);

  return (
    <TouchableOpacity
      testID={`${testID}-switch`}
      style={styles.container}
      onPress={switchCurrencies}>
      <Ui.Icon testID={`${testID}-icon`} type="reverse" size={16} />
    </TouchableOpacity>
  );
};

export default CurrencySwitcher;
