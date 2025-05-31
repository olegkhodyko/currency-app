import React, { FC } from 'react';
import { Ui } from '@components';
import { ConversionResultProps } from '@screens/CurrencyConversion/types';
import { View } from 'react-native';
import { useCurrencyStore } from '@store/currencyStore';
import { formatCurrency } from '@screens/CurrencyConversion/utils';

import styles from './styles';

const ConversionResult: FC<ConversionResultProps> = ({ testID, data }) => {
  const {
    result,
    query: { amount },
  } = data;

  const from = useCurrencyStore(state => state.fromCurrency);
  const to = useCurrencyStore(state => state.toCurrency);

  const amountTitle = `${formatCurrency(amount, from?.symbol)} = `;
  const resultTitle = formatCurrency(result, to?.symbol);

  return (
    <View style={styles.container} testID={testID}>
      <Ui.Text testID={`${testID}-amount`}>{amountTitle}</Ui.Text>
      <Ui.AnimatedNumber numberString={resultTitle} variant="extraLarge" />
    </View>
  );
};

export default ConversionResult;
