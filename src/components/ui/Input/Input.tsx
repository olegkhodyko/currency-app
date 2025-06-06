import React, { FC } from 'react';
import { TextInput } from 'react-native';
import { TextInputProps } from '@_types/props/input';

import styles from './styles';
import { TEXT_STYLES } from '@theme';

const Input: FC<TextInputProps> = ({ testID, style, ...rest }) => (
  <TextInput
    style={[styles.input, TEXT_STYLES.medium, style]}
    testID={testID}
    {...rest}
  />
);

export default Input;
