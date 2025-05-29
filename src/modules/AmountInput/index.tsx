import React, { FC } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Ui } from '@components';
import { AmountInputProps } from '@_types/props/input';

const AmountInput: FC<AmountInputProps> = ({ testID, title, ...rest }) => {
  return (
    <View testID={testID} style={styles.container}>
      <Ui.Text>{`${title}:`}</Ui.Text>
      <Ui.Input testID={testID} {...rest} />
    </View>
  );
};

export default AmountInput;
