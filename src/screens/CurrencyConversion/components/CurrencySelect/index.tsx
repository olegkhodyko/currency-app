import React, { FC, memo } from 'react';
import { Ui } from '@components';
import { TouchableOpacity, View } from 'react-native';
import { CurrencySelectProps } from '@screens/CurrencyConversion/types';
import styles from './styles';

const CurrencySelect: FC<CurrencySelectProps> = memo(
  ({ testID, title, currency, selectCurrency }) => (
    <View style={styles.container}>
      <Ui.Text>{`${title}:`}</Ui.Text>

      <TouchableOpacity
        onPress={selectCurrency}
        activeOpacity={0.7}
        testID={testID}
        style={styles.content}>
        <View style={styles.countryData}>
          <Ui.Flag size={30} uri={currency.flagSrc} />
          <Ui.Text>{currency.code.toUpperCase().slice(0, 3)}</Ui.Text>
        </View>
        <Ui.Icon testID="dropdown-icon" type="dropdown" size={12} />
      </TouchableOpacity>
    </View>
  ),
);

export default CurrencySelect;
