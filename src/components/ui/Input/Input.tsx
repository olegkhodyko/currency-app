import React, { FC } from 'react';
import { TextInput, TextInputProps, View } from 'react-native';

interface Props extends TextInputProps {
  testID: string;
}

const Input: FC<Props> = ({ testID, ...rest }) => {
  return (
    <View testID={testID}>
      <TextInput  {...rest} />
    </View>
  );
};

export default Input;
