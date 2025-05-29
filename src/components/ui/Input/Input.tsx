import React, { FC } from 'react';
import { TextInput } from 'react-native';

import styles from './styles';
import { TextInputProps } from '@_types/props/input';

const Input: FC<TextInputProps> = ({ testID, style, ...rest }) => (
  <TextInput style={[styles.input, style]} testID={testID} {...rest} />
);

export default Input;
