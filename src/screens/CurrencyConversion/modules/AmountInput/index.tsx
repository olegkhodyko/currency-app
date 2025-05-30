import React, { FC, useState } from 'react';
import { View } from 'react-native';
import { Ui } from '@components';
import { AmountInputProps } from '@screens/CurrencyConversion/types';
import { useCurrencyStore } from '@store/currencyStore';
import { useDebounce } from '@hooks';

import styles from './styles';

const AmountInput: FC<AmountInputProps> = ({ testID, title, ...rest }) => {
  const [amount, setAmount] = useState<string>('');

  const changeAmount = useCurrencyStore(state => state.changeAmount);
  const debouncedChangeAmount = useDebounce((value: number) => {
    changeAmount(value);
  }, 500);

  const handleChange = (text: string) => {
    setAmount(text);
    const numeric = parseFloat(text) || 0;
    debouncedChangeAmount(numeric);
  };

  return (
    <View testID={testID} style={styles.container}>
      <Ui.Text testID={`${testID}-title`}>{`${title}:`}</Ui.Text>
      <Ui.Input
        autoFocus
        value={amount}
        onChangeText={handleChange}
        keyboardType="numeric"
        testID={`${testID}-field`}
        {...rest}
      />
    </View>
  );
};

export default AmountInput;
