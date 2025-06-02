import React, { FC } from 'react';
import { ActivityIndicator, View } from 'react-native';
import { Ui } from '@components';
import { COLORS } from '@theme';
import { AmountInputProps } from '@screens/CurrencyConversion/types';
import { useAmountInput } from '@screens/CurrencyConversion/hooks';
import styles from './styles';

const AmountInput: FC<AmountInputProps> = ({ testID, isLoading, ...rest }) => {
  const { amount, handleChange } = useAmountInput();

  return (
    <View>
      <Ui.Input
        autoFocus
        value={amount}
        onChangeText={handleChange}
        keyboardType="numeric"
        testID={`${testID}-field`}
        editable={!isLoading}
        {...rest}
      />
      {isLoading && (
        <ActivityIndicator
          style={styles.indicator}
          color={COLORS.textPrimary}
        />
      )}
    </View>
  );
};

export default AmountInput;
