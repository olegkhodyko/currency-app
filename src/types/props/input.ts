import { TextInputProps as RNTextInputProps } from 'react-native';

export interface AmountInputProps extends TextInputProps {
  title: string;
}

export interface TextInputProps extends RNTextInputProps {
  testID: string;
}
