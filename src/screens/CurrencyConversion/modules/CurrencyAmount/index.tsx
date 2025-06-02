import React, { FC } from 'react';
import { View } from 'react-native';
import { Ui } from '@components';
import { CurrencyAmountProps } from '@screens/CurrencyConversion/types';
import { AmountInput } from '@screens/CurrencyConversion/components';
import styles from './styles';

const CurrencyAmount: FC<CurrencyAmountProps> = ({
  testID,
  isLoading,
  title,
  ...rest
}) => (
  <View testID={testID} style={styles.container}>
    <Ui.Text testID={`${testID}-title`}>
      {title ? `${title}:` : 'Amount'}
    </Ui.Text>

    <AmountInput testID={`${testID}-input`} isLoading={isLoading} {...rest} />
  </View>
);

export default CurrencyAmount;
