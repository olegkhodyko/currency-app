import React, { FC } from 'react';
import { View } from 'react-native';
import { Ui } from '@components';
import { AmountInputProps } from '@screens/CurrencyConversion/types';

import styles from './styles';

const AmountInput: FC<AmountInputProps> = ({ testID, title, ...rest }) => (
  <View testID={testID} style={styles.container}>
    <Ui.Text>{`${title}:`}</Ui.Text>
    <Ui.Input testID={testID} {...rest} />
  </View>
);

export default AmountInput;
