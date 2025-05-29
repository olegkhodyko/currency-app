import React, { FC, useCallback } from 'react';
import { Ui } from '@components';
import { CurrencySelect } from '@screens/CurrencyConversion/modules';
import { TouchableOpacity, View } from 'react-native';
import { FromToProps } from '@screens/CurrencyConversion/types';
import { useNavigation } from '@react-navigation/native';
import { AppNavigationProps } from '@_types/navigation';
import { useCurrencyStore, currencies } from '@store/currencyStore';
import { CurrencySelectType, CurrencyType } from '@_types/props/currency';

import styles from './styles';

const FromTo: FC<FromToProps> = ({ testID }) => {
  const { navigate } = useNavigation<AppNavigationProps>();

  const fromCurrency = useCurrencyStore(state => state.fromCurrency);
  const toCurrency = useCurrencyStore(state => state.toCurrency);
  const switchCurrencies = useCurrencyStore(state => state.switchCurrencies);
  const setActiveId = useCurrencyStore(state => state.setActiveId);

  const selectCurrency = useCallback(
    (type: CurrencySelectType, id: CurrencyType['id']) => {
      navigate('CurrencySelect', { currencies, type });
      setActiveId(id);
    },
    [navigate, setActiveId],
  );

  const selectFromCurrency = useCallback(
    () => selectCurrency('from', fromCurrency.id),
    [selectCurrency, fromCurrency.id],
  );

  const selectToCurrency = useCallback(
    () => selectCurrency('to', toCurrency.id),
    [selectCurrency, toCurrency.id],
  );

  return (
    <View testID={testID} style={styles.container}>
      <CurrencySelect
        testID={`${testID}-from`}
        title="From"
        currency={fromCurrency}
        selectCurrency={selectFromCurrency}
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
        currency={toCurrency}
        selectCurrency={selectToCurrency}
      />
    </View>
  );
};

export default FromTo;
