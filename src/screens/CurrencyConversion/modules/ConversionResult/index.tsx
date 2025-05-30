import React, { FC } from 'react';
import { Ui } from '@components';
import { ConversionResultProps } from '@screens/CurrencyConversion/types';
import { View } from 'react-native';
import styles from './styles';
import { useCurrencyStore } from '@store/currencyStore';

const ConversionResult: FC<ConversionResultProps> = ({ testID, data }) => {
  const {
    query: { amount },
    result,
  } = data;
  const from = useCurrencyStore(state => state.fromCurrency);
  const to = useCurrencyStore(state => state.toCurrency);

  const amountTitle = `${from.symbol}${amount.toFixed(2)} = `;
  const resultTitle = `${to.symbol}${result.toFixed(2)}`;

  return (
    <View style={styles.container} testID={testID}>
      <Ui.Text testID={`${testID}-amount`}>{amountTitle}</Ui.Text>
      <Ui.Text testID={`${testID}-result`} variant="extraLarge">
        {resultTitle}
      </Ui.Text>
    </View>
  );
};

export default ConversionResult;
