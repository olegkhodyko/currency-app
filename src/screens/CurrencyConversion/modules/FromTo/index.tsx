import React, { FC, useCallback } from 'react';
import { Ui } from '@components';
import { CurrencySelect } from '@screens/CurrencyConversion/modules';
import { TouchableOpacity, View } from 'react-native';
import { FromToProps } from '@screens/CurrencyConversion/types';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '@_types/navigation';
import { useCurrencyStore, currency } from '@store/currencyStore';

import styles from './styles';

const FromTo: FC<FromToProps> = ({ testID }) => {
  const { navigate } = useNavigation<AppNavigationProps>();

  const fromCurrency = useCurrencyStore(state => state.fromCurrency);
  const toCurrency = useCurrencyStore(state => state.toCurrency);
  const switchCurrencies = useCurrencyStore(state => state.switchCurrencies);

  const selectCurrency = useCallback(() => {
    navigate('CurrencySelect', { currencies: currency });
  }, [navigate]);

  return (
    <View testID={testID} style={styles.container}>
      <CurrencySelect
        testID={`${testID}-from`}
        title="From"
        data={fromCurrency}
        selectCurrency={selectCurrency}
      />

      <TouchableOpacity
        testID={`${testID}-switch`}
        style={styles.switch}
        onPress={switchCurrencies}>
        <Ui.Icon testID="" type="reverse" size={16} />
      </TouchableOpacity>

      <CurrencySelect
        testID={`${testID}-to`}
        title="To"
        data={toCurrency}
        selectCurrency={selectCurrency}
      />
    </View>
  );
};

export default FromTo;
